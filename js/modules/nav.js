/**
 * nav.js — Shared navigation component
 * Injects the navbar + mobile menu into every page.
 * Usage: <script src="/js/modules/nav.js"></script> in <body>
 * The page sets: <body data-page="home"> to highlight the active link.
 */
(function() {
  'use strict';

  /* ── Navigation structure ─────────────────────────────────── */
  const NAV_ITEMS = [
    { label: 'Home',        href: '/index.html',          key: 'home', icon: '🏠' },
    { label: 'Past Papers', href: '/past-papers.html',    key: 'papers', icon: '📄' },
    {
      label: 'Practice', href: '/practice/essays.html', key: 'practice', icon: '✍️',
      children: [
        { label: 'Essay Topics',      href: '/practice/essays.html',   icon: '✍️' },
        { label: 'Précis Practice',   href: '/practice/precis.html',   icon: '✂️' },
        { label: 'MCQ Quiz',          href: '/practice/mcqs.html',     icon: '📝' },
        { label: 'Question Generator',href: '/practice/qgen.html',     icon: '🎓' },
      ]
    },
    { label: 'Articles',    href: '/articles/index.html', key: 'articles', icon: '📚' },
    {
      label: 'Tools', href: 'javascript:void(0)', key: 'tools', icon: '🛠️',
      children: [
        { label: 'Essay Analyzer',    href: '/tools/essay-analyzer.html',  icon: '📊' },
        { label: 'Question Analyzer', href: '/tools/question-analyzer.html',icon: '🔍' },
        { label: 'Study Planner',     href: '/planner/index.html',         icon: '📅' },
        { label: 'Roadmap',           href: '/roadmap/index.html',         icon: '🗺️' },
        { label: 'Analytics',         href: '/analytics/index.html',       icon: '📈' },
      ]
    },
    { label: 'Dashboard',   href: '/dashboard/index.html',key: 'dashboard', icon: '📊' },
    { label: 'About',       href: '/pages/about.html',    key: 'about', icon: 'ℹ️' },
    { label: 'Contact',     href: '/pages/contact.html',  key: 'contact', icon: '📬' },
    { label: 'Privacy',     href: '/pages/privacy.html',  key: 'privacy', icon: '🔒' },
  ];

  /* ── Resolve root-relative paths ─────────────────────────── */
  function resolvePath(path) {
    if (path.startsWith('javascript:') || path.startsWith('#')) return path;
    let depth = 0;
    if (window.location.protocol === 'file:') {
      const scripts = document.getElementsByTagName('script');
      for (let i = 0; i < scripts.length; i++) {
        const src = scripts[i].getAttribute('src');
        if (src && src.includes('nav.js')) {
          const matches = src.match(/\.\.\//g);
          depth = matches ? matches.length : 0;
          break;
        }
      }
    } else {
      depth = (window.location.pathname.match(/\//g) || []).length - 1;
    }
    const prefix = depth > 0 ? '../'.repeat(depth) : './';
    return prefix + path.replace(/^\//, '');
  }

  /* ── Determine active page ────────────────────────────────── */
  function getActivePage() {
    return document.body.dataset.page || '';
  }

  /* ── Build navbar HTML ────────────────────────────────────── */
  function buildNavbar() {
    const activePage = getActivePage();
    const root = resolvePath('/');

    const desktopLinks = NAV_ITEMS.map(item => {
      const isActive = item.key === activePage ? ' active' : '';
      if (item.children) {
        const subLinks = item.children.map(c =>
          `<a href="${resolvePath(c.href)}">${c.icon} ${c.label}</a>`
        ).join('');
        return `
          <li>
            <a href="${resolvePath(item.href)}" class="nav-link${isActive}">
              ${item.label} <span class="nav-arrow">▾</span>
            </a>
            <div class="nav-dropdown-menu">${subLinks}</div>
          </li>`;
      }
      return `<li><a href="${resolvePath(item.href)}" class="nav-link${isActive}">${item.label}</a></li>`;
    }).join('');

    const mobileLinks = NAV_ITEMS.map(item => {
      const isActive = item.key === activePage ? ' active' : '';
      if (item.children) {
        const sub = item.children.map(c =>
          `<a href="${resolvePath(c.href)}" style="padding-left:32px">${c.icon} ${c.label}</a>`
        ).join('');
        return `<span class="mobile-section">${item.label}</span>${sub}`;
      }
      return `<a href="${resolvePath(item.href)}"${isActive ? ' class="active"' : ''}>${item.icon} ${item.label}</a>`;
    }).join('');

    const html = `
      <nav class="navbar" id="mainNav" role="navigation" aria-label="Main navigation">
        <div class="nav-inner">
          <a href="${root}index.html" class="nav-brand" aria-label="csspastpapers.com home">
            <span class="brand-name">csspastpapers.com</span>
            <span class="brand-tag">CSS Study Buddy</span>
          </a>
          <ul class="nav-links" role="list">${desktopLinks}</ul>
          <div class="nav-controls">
            <a href="${resolvePath('/dashboard/index.html')}" class="nav-cta">My Dashboard</a>
            <button class="dark-btn" id="darkToggle" aria-label="Toggle dark mode">🌙</button>
            <button class="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="mobileNav">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </nav>
      <div class="mobile-nav" id="mobileNav" role="navigation" aria-label="Mobile navigation" style="display:none">
        ${mobileLinks}
        <a href="${resolvePath('/pages/contact.html')}">📬 Contact</a>
        <a href="${resolvePath('/pages/privacy.html')}">🔒 Privacy Policy</a>
      </div>`;

    // Insert before body content
    document.body.insertAdjacentHTML('afterbegin', html);
  }

  /* ── Dark mode ────────────────────────────────────────────── */
  function initDarkMode() {
    const saved = localStorage.getItem('cspp-theme');
    if (saved === 'dark') document.documentElement.setAttribute('data-theme', 'dark');

    document.addEventListener('click', function(e) {
      if (e.target.closest('#darkToggle')) {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const next   = isDark ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('cspp-theme', next);
        const btn = document.getElementById('darkToggle');
        if (btn) btn.textContent = next === 'dark' ? '☀️' : '🌙';
      }
    });

    // Set icon after insertion
    requestAnimationFrame(() => {
      const btn = document.getElementById('darkToggle');
      if (btn && saved === 'dark') btn.textContent = '☀️';
    });
  }

  /* ── Hamburger ────────────────────────────────────────────── */
  function initHamburger() {
    document.addEventListener('click', function(e) {
      const btn  = e.target.closest('#hamburger');
      const menu = document.getElementById('mobileNav');
      const ham  = document.getElementById('hamburger');
      if (!btn || !menu || !ham) return;

      const isOpen = menu.classList.toggle('open');
      ham.classList.toggle('open', isOpen);
      ham.setAttribute('aria-expanded', isOpen);
      menu.style.display = isOpen ? 'block' : 'none';
    });

    // Close on outside click
    document.addEventListener('click', function(e) {
      const menu = document.getElementById('mobileNav');
      const ham  = document.getElementById('hamburger');
      if (!menu || !ham) return;
      if (!ham.contains(e.target) && !menu.contains(e.target) && menu.classList.contains('open')) {
        menu.classList.remove('open');
        ham.classList.remove('open');
        ham.setAttribute('aria-expanded', false);
        menu.style.display = 'none';
      }
    });

    // Close on link click
    document.addEventListener('click', function(e) {
      if (e.target.closest('.mobile-nav a')) {
        const menu = document.getElementById('mobileNav');
        const ham  = document.getElementById('hamburger');
        if (menu) { menu.classList.remove('open'); menu.style.display = 'none'; }
        if (ham)  { ham.classList.remove('open'); }
      }
    });
  }

  /* ── Scroll shadow ────────────────────────────────────────── */
  function initScrollShadow() {
    const nav = document.getElementById('mainNav');
    if (!nav) return;
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }

  /* ── Scroll reveal ────────────────────────────────────────── */
  function initReveal() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
      return;
    }
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
  }

  /* ── Init ─────────────────────────────────────────────────── */
  function init() {
    buildNavbar();
    initDarkMode();
    initHamburger();
    initScrollShadow();
    initReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
