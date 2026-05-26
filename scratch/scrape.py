import urllib.request
import re
import json

url = 'https://rapidapi.com/search/comics'
req = urllib.request.Request(url, headers={
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
})

try:
    with urllib.request.urlopen(req, timeout=10) as res:
        html = res.read().decode('utf-8')
        # Find links
        links = re.findall(r'href="/api/[^"]+"', html)
        print('Found api links:', len(links))
        for l in list(set(links))[:20]:
            print(l)
        
        # Look for hostnames
        hosts = re.findall(r'[\w\-]+\.p\.rapidapi\.com', html)
        print('Found hosts:', len(hosts))
        for h in list(set(hosts))[:20]:
            print(h)
            
        # Let's search inside the HTML for API titles or JSON blocks
        # RapidAPI search page often has a __NEXT_DATA__ json block.
        next_data = re.search(r'<script id="__NEXT_DATA__" type="application/json">([^<]+)</script>', html)
        if next_data:
            print("Found __NEXT_DATA__")
            js = json.loads(next_data.group(1))
            with open("scratch/next_data.json", "w", encoding="utf-8") as f:
                json.dump(js, f, indent=2)
            print("Saved __NEXT_DATA__ to scratch/next_data.json")
        else:
            print("No __NEXT_DATA__ found")
except Exception as e:
    import traceback
    traceback.print_exc()
