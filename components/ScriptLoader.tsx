'use client';

import { useEffect } from 'react';

export default function ScriptLoader() {
  useEffect(() => {
    // 1. Intersection Observer for Enhanced Reveals
    const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    }, observerOptions);

    document.querySelectorAll(
      '.modern-card, .timeline-event, .opinion-item, .panel, .g-entry, .anatomy-vignette, .stat-box'
    ).forEach(el => {
      const e = el as HTMLElement;
      e.style.opacity = '0';
      e.style.transform = 'translateY(40px)';
      e.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
      revealObserver.observe(el);
    });

    // 2. Timeline Sticky Nav & Content Observer
    const timelineSection = document.querySelector('#linimasa');
    const timelineNav = document.querySelector('#timeline-nav');
    const timelineBlocks = document.querySelectorAll('.timeline-block');
    const progressNodes = document.querySelectorAll('.progress-node');

    if (timelineSection && timelineNav) {
      const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) timelineNav.classList.add('active');
          else timelineNav.classList.remove('active');
        });
      }, { threshold: 0, rootMargin: '-10% 0px -10% 0px' });
      sectionObserver.observe(timelineSection);

      const blockObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const year = (entry.target as HTMLElement).dataset.year;
            progressNodes.forEach(node => {
              if ((node as HTMLElement).dataset.target === year) node.classList.add('active');
              else node.classList.remove('active');
            });
          }
        });
      }, { threshold: 0.5 });
      timelineBlocks.forEach(block => blockObserver.observe(block));
    }

    // 3. Scroll-based active nav
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    const nasibLokalSections = ['nasib-lokal', 'platform', 'kebangkitan'];

    const onScroll = () => {
      let current = '';
      sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 200) {
          current = section.getAttribute('id') || '';
        }
      });
      if (nasibLokalSections.includes(current)) current = 'nasib-lokal';

      navLinks.forEach(link => {
        const href = link.getAttribute('href') || '';
        if (href.startsWith('#') || href.startsWith('/#')) {
          link.classList.remove('active');
          const hash = href.replace('/', '');
          if (hash === '#' + current) link.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', onScroll);

    // 4. Database Filtering
    const fButtons = document.querySelectorAll('.f-btn');
    const gEntries = document.querySelectorAll('.g-entry');
    if (fButtons.length > 0) {
      fButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          fButtons.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const filter = btn.getAttribute('data-filter');
          gEntries.forEach(entry => {
            (entry as HTMLElement).style.display =
              (filter === 'Semua' || (entry as HTMLElement).dataset.category === filter)
                ? 'block' : 'none';
          });
        });
      });
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return null;
}
