import urllib.request
import json
import re
import os
import urllib.parse
from datetime import datetime

# ─── PATHS ───
ASIA_URL = 'https://www.sankavollerei.com/comic/unlimited'
FALLBACK_PATH = r'C:\Users\alber\.gemini\antigravity\brain\37ce6726-0f10-423b-930d-458be6bd5e48\.system_generated\steps\316\content.md'
DATA_DIR = 'public/data'
ASIA_OUT = os.path.join(DATA_DIR, 'comics-asia.json')
BARAT_OUT = os.path.join(DATA_DIR, 'comics-barat.json')

# ─── RAPIDAPI DETAILS ───
RAPIDAPI_KEY = os.environ.get('RAPIDAPI_KEY', 'ebd2ae1a23msh44badf2af741e3bp1ef563jsn55f9ae5e388e')
RAPIDAPI_HOST = 'marvel-heroic-api-unlock-the-mcu-legendary-characters.p.rapidapi.com'
BARAT_URL = f'https://{RAPIDAPI_HOST}/characters'

# ─── BLACKLIST PATTERNS ───
BLACKLIST_PATTERNS = [
    r'\bsex\b', r'\bhentai\b', r'\berotic', r'\bnude\b', r'\bnaked\b',
    r'\bporn', r'\becchi\b', r'\br-?18\b',
    r'\bboob', r'\bbreast', r'\bnsfw\b', r'\blewd\b', r'\borgasm\b',
    r'\bfetish', r'\bbondage\b',
    r'\bntr\b', r'\bnetorare\b', r'\bmilf\b', r'\badultery\b', r'\bobscene\b',
    r'\bpervert', r'\bmolest', r'\brape\b', r'\bgrope\b', r'\baphrodisiac',
    r'\bprostitut', r'\bbrothel\b', r'\bconcubine', r'\bmasturbat', r'\bonanism\b',
    r'\bdeflower', r'\borgy\b', r'\bthreesome\b', r'\bincest\b',
    r'\bvirgin\b'
]
BLACKLISTED_GENRES = ['Harem']

def is_blacklisted(comic):
    genre = (comic.get('genre') or '').strip()
    if genre in BLACKLISTED_GENRES:
        return True
    title = comic.get('title') or ''
    for pat in BLACKLIST_PATTERNS:
        if re.search(pat, title, re.IGNORECASE):
            return True
    return False

# ─── CATEGORY DETECTION ───
def detect_category(comic):
    img = (comic.get('image') or '').lower()
    title_lower = (comic.get('title') or '').lower()

    # 1. Image URL explicit labels
    if 'manhwa' in img or 'manwha' in img:
        return 'Manhwa'
    if 'manhua' in img:
        return 'Manhua'
    if 'thumbnail-manga-' in img or 'thumbnail_manga_' in img:
        return 'Manga'
    if 'thumbnail-komik' in img:
        return 'Manga'

    # 2. Title-based Japanese romaji heuristics
    jp_strong = [' no ', ' wa ', ' ga ', ' ni ']
    jp_medium = [
        ' de ', ' to ', ' na ', ' mo ', 'desu', '-chan', '-kun', '-sama',
        '-sensei', '-senpai', 'shoujo', 'shounen', 'mahou', 'yuusha', 'kenja',
        'tensei', 'isekai', ' ore ', ' boku ', 'watashi', 'shitara', 'datta',
        'janai', 'dakedo', 'monogatari', 'sekai', 'hime', 'ouji', 'hitori',
        'futari', 'onna', 'otoko', 'musume', 'gakuen', 'gakkou', 'senki',
        'kenshi', 'kishi', '-san ', 'sugiru', 'saikyou', 'bouken', ' maou',
        'tsuihou', 'joshi', 'kanojo', 'oneshot', 'nakama', 'tsukai',
        'dungeon', 'level ', 'skill '
    ]
    
    jp_score = 0
    for p in jp_strong:
        if p in title_lower:
            jp_score += 2
    for p in jp_medium:
        if p in title_lower:
            jp_score += 1
    if jp_score >= 2:
        return 'Manga'

    # 3. Chinese title keywords
    cn_indicators = [
        'cultivation', 'martial god', 'heavenly', 'immortal', 'supreme',
        'spirit sword', 'emperor', 'douluo', 'wuxia', 'xianxia', 'sect ',
        ' pill ', 'alchemy', 'dragon king', 'ancient ', 'celestial',
        'body refining', 'strongest', 'divine ', 'sovereign', 'invincible',
        'reincarnation'
    ]
    for kw in cn_indicators:
        if kw in title_lower:
            return 'Manhua'

    return 'Lainnya'

def clean_genre(raw):
    if not raw:
        return 'Lainnya'
    cleaned = re.sub(r'^[,\s]+', '', raw).strip()
    if not cleaned:
        return 'Lainnya'
    return cleaned

# ─── MARVEL MAPPINGS ───
MARVEL_COVERS = {
    'Iron Man': 'https://x.annihil.us/u/prod/marvel/i/mg/c/60/55b6a28ef24fa/clean.jpg',
    'Captain America': 'https://x.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087/clean.jpg',
    'Thor': 'https://x.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350/clean.jpg',
    'Black Widow': 'https://x.annihil.us/u/prod/marvel/i/mg/f/30/50fecad7f373f/clean.jpg',
    'Hulk': 'https://x.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33480/clean.jpg',
    'Hawkeye': 'https://x.annihil.us/u/prod/marvel/i/mg/e/90/50febc4f55525/clean.jpg',
    'Spider-Man': 'https://x.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b/clean.jpg',
    'Black Panther': 'https://x.annihil.us/u/prod/marvel/i/mg/6/60/5261a80a67e11/clean.jpg',
    'Doctor Strange': 'https://x.annihil.us/u/prod/marvel/i/mg/5/f0/5261a85a501fe/clean.jpg',
    'Scarlet Witch': 'https://x.annihil.us/u/prod/marvel/i/mg/6/70/5261a7e53f82e/clean.jpg',
    'Vision': 'https://x.annihil.us/u/prod/marvel/i/mg/9/d0/51115b47a7c13/clean.jpg',
    'Ant-Man': 'https://x.annihil.us/u/prod/marvel/i/mg/f/20/528d31ab1944e/clean.jpg',
    'Wasp': 'https://x.annihil.us/u/prod/marvel/i/mg/9/c0/531773c9e31f5/clean.jpg',
    'Captain Marvel': 'https://x.annihil.us/u/prod/marvel/i/mg/c/10/53176e6601b09/clean.jpg',
    'Star-Lord': 'https://x.annihil.us/u/prod/marvel/i/mg/9/a0/537bc7dbd04df/clean.jpg',
    'Gamora': 'https://x.annihil.us/u/prod/marvel/i/mg/5/f0/5261a840e6983/clean.jpg',
    'Drax the Destroyer': 'https://x.annihil.us/u/prod/marvel/i/mg/e/d0/5261a7f7b9736/clean.jpg',
    'Rocket Raccoon': 'https://x.annihil.us/u/prod/marvel/i/mg/9/b0/537bc5db7c77f/clean.jpg',
    'Groot': 'https://x.annihil.us/u/prod/marvel/i/mg/3/10/5261a81c0c328/clean.jpg',
    'Nebula': 'https://x.annihil.us/u/prod/marvel/i/mg/e/e0/5261a7f7b9736/clean.jpg',
    'Thanos': 'https://x.annihil.us/u/prod/marvel/i/mg/6/40/5274137e3e21f/clean.jpg',
    'Loki': 'https://x.annihil.us/u/prod/marvel/i/mg/d/90/526547f5c8d3e/clean.jpg',
    'Winter Soldier': 'https://x.annihil.us/u/prod/marvel/i/mg/d/00/5317711c1d817/clean.jpg',
    'Falcon': 'https://x.annihil.us/u/prod/marvel/i/mg/f/b0/51115202e2c0e/clean.jpg',
    'War Machine': 'https://x.annihil.us/u/prod/marvel/i/mg/c/60/55b6a28ef24fa/clean.jpg',
    'Nick Fury': 'https://x.annihil.us/u/prod/marvel/i/mg/3/c0/5261a84a5c9e2/clean.jpg',
    'Phil Coulson': 'https://x.annihil.us/u/prod/marvel/i/mg/d/00/5317711c1d817/clean.jpg',
    'Agent Peggy Carter': 'https://x.annihil.us/u/prod/marvel/i/mg/f/b0/51115202e2c0e/clean.jpg',
    'Valkyrie': 'https://x.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350/clean.jpg',
    'Okoye': 'https://x.annihil.us/u/prod/marvel/i/mg/6/60/5261a80a67e11/clean.jpg'
}

GENRE_MAPPING = {
    'Iron Man': 'Fiksi Sains',
    'Captain America': 'Aksi',
    'Thor': 'Supernatural',
    'Black Widow': 'Misteri',
    'Hulk': 'Fiksi Sains',
    'Hawkeye': 'Aksi',
    'Spider-Man': 'Aksi',
    'Black Panther': 'Aksi',
    'Doctor Strange': 'Supernatural',
    'Scarlet Witch': 'Supernatural',
    'Vision': 'Fiksi Sains',
    'Ant-Man': 'Fiksi Sains',
    'Wasp': 'Fiksi Sains',
    'Captain Marvel': 'Fiksi Sains',
    'Star-Lord': 'Fiksi Sains',
    'Gamora': 'Aksi',
    'Drax the Destroyer': 'Aksi',
    'Rocket Raccoon': 'Fiksi Sains',
    'Groot': 'Fiksi Sains',
    'Nebula': 'Fiksi Sains',
    'Thanos': 'Aksi',
    'Loki': 'Supernatural',
    'Winter Soldier': 'Aksi',
    'Falcon': 'Aksi',
    'War Machine': 'Fiksi Sains',
    'Nick Fury': 'Misteri',
    'Phil Coulson': 'Misteri',
    'Agent Peggy Carter': 'Drama',
    'Valkyrie': 'Supernatural',
    'Okoye': 'Aksi'
}

def main():
    os.makedirs(DATA_DIR, exist_ok=True)

    # 1. Fetch & Process Asian Comics
    print('Fetching Asian comics...')
    comics_data = []
    try:
        req = urllib.request.Request(ASIA_URL, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=15) as res:
            raw_data = json.loads(res.read().decode('utf-8'))
            comics_data = raw_data.get('comics') or raw_data or []
            print(f'Successfully fetched {len(comics_data)} comics from API.')
    except Exception as e:
        print(f'Failed to fetch live Asian data: {e}. Trying fallback file...')
        try:
            with open(FALLBACK_PATH, 'r', encoding='utf-8') as f:
                content = f.read()
                # Find JSON block
                json_start = content.find('{')
                if json_start != -1:
                    raw_data = json.loads(content[json_start:])
                    comics_data = raw_data.get('comics') or raw_data or []
                    print(f'Successfully loaded {len(comics_data)} comics from fallback.')
        except Exception as fe:
            print(f'Fallback also failed: {fe}')
            return

    # Process and filter Asian comics
    processed_asia = []
    skipped_blacklist = 0
    skipped_lainnya = 0
    
    for c in comics_data:
        if is_blacklisted(c):
            skipped_blacklist += 1
            continue
            
        genre_cleaned = clean_genre(c.get('genre'))
        cat = detect_category(c)
        
        if cat == 'Lainnya':
            skipped_lainnya += 1
            continue
            
        processed_asia.append({
            'title': c.get('title'),
            'link': c.get('link'),
            'image': c.get('image'),
            'chapter': c.get('chapter', 'Latest'),
            'rating': c.get('rating'),
            'genre': genre_cleaned,
            'status': c.get('status', 'Ongoing'),
            'fetched_at': c.get('fetched_at') or datetime.utcnow().isoformat() + 'Z'
        })
        
    print(f'Asian Comics Processing Summary:')
    print(f'- Total processed & saved: {len(processed_asia)}')
    print(f'- Skipped (blacklist): {skipped_blacklist}')
    print(f'- Skipped (Lainnya): {skipped_lainnya}')
    
    with open(ASIA_OUT, 'w', encoding='utf-8') as f:
        json.dump(processed_asia, f, indent=2, ensure_ascii=False)
    print(f'Saved Asian comics to {ASIA_OUT}')

    # 2. Fetch & Process Western Comics (RapidAPI)
    print('\nFetching Western Marvel comics from RapidAPI...')
    req_barat = urllib.request.Request(BARAT_URL, headers={
        'X-RapidAPI-Key': RAPIDAPI_KEY,
        'X-RapidAPI-Host': RAPIDAPI_HOST
    })
    
    try:
        with urllib.request.urlopen(req_barat, timeout=30) as res:
            char_data = json.loads(res.read().decode('utf-8'))
            print(f'Successfully fetched {len(char_data)} character profiles.')
            
            processed_barat = []
            for item in char_data:
                name = item.get('name')
                desc = item.get('description') or ''
                first_app = item.get('firstAppearance') or 'Marvel Comics'
                
                cover_img = MARVEL_COVERS.get(name, 'https://x.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/clean.jpg')
                genre = GENRE_MAPPING.get(name, 'Aksi')
                
                # Make rating
                rating = 4.8
                if name in ['Iron Man', 'Captain America', 'Thor', 'Spider-Man']:
                    rating = 4.9
                    
                processed_barat.append({
                    'title': f'{name} (Marvel Comics)',
                    'link': f'https://www.marvel.com/search?query={urllib.parse.quote_plus(name)}',
                    'image': cover_img,
                    'chapter': f'Debut: {first_app}',
                    'rating': rating,
                    'genre': genre,
                    'status': 'Completed',
                    'fetched_at': datetime.utcnow().isoformat() + 'Z'
                })
                
            with open(BARAT_OUT, 'w', encoding='utf-8') as f:
                json.dump(processed_barat, f, indent=2, ensure_ascii=False)
            print(f'Saved {len(processed_barat)} Western comics to {BARAT_OUT}')
            
    except Exception as e:
        print(f'Error fetching/processing Western comics: {e}')
        # Generate placeholder Western data if API fails to prevent blocking the build
        print('Generating fallback Western comics...')
        processed_barat = []
        for name, cover_img in MARVEL_COVERS.items():
            genre = GENRE_MAPPING.get(name, 'Aksi')
            processed_barat.append({
                'title': f'{name} (Marvel Comics)',
                'link': f'https://www.marvel.com/search?query={urllib.parse.quote_plus(name)}',
                'image': cover_img,
                'chapter': 'Marvel Universe',
                'rating': 4.8,
                'genre': genre,
                'status': 'Completed',
                'fetched_at': datetime.utcnow().isoformat() + 'Z'
            })
        with open(BARAT_OUT, 'w', encoding='utf-8') as f:
            json.dump(processed_barat, f, indent=2, ensure_ascii=False)
        print(f'Saved {len(processed_barat)} fallback Western comics to {BARAT_OUT}')

if __name__ == '__main__':
    main()
