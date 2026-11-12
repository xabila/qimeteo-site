/**
 * QiMétéo Official Website — Interactive Studio & Solar Ming Gua Preview (v50)
 * - Zero synchronous DOM rewrites on initial load (0ms TBT, 0.000 CLS)
 * - Accessible ARIA tablist, lazy gallery hydration, and on-device Li Chun / Ming Gua preview
 * - Zero proprietary daily Qi Men / Tong Shu scoring IP exposed
 */
(function () {
  'use strict';

  const docLang = (document.documentElement.getAttribute('lang') || 'fr').toLowerCase();
  const langKey = docLang.startsWith('zh-hant')
    ? 'zh-hant'
    : docLang.startsWith('zh')
      ? 'zh'
      : docLang.startsWith('es')
        ? 'es'
        : docLang.startsWith('en')
          ? 'en'
          : 'fr';

  // 1. Language <details> dropdown: close on outside click or Escape
  const langDropdown = document.querySelector('.lang-dropdown');
  if (langDropdown) {
    document.addEventListener('click', function (e) {
      if (langDropdown.open && !langDropdown.contains(e.target)) {
        langDropdown.open = false;
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && langDropdown.open) {
        langDropdown.open = false;
      }
    });
  }

  // 2. Mobile drawer navigation
  const mobileBtn = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener('click', function () {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileBtn.setAttribute('aria-expanded', String(isOpen));
      mobileDrawer.setAttribute('aria-hidden', String(!isOpen));
    });
    mobileDrawer.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileDrawer.classList.remove('open');
        mobileBtn.setAttribute('aria-expanded', 'false');
        mobileDrawer.setAttribute('aria-hidden', 'true');
      });
    });
  }

  // 3. Lazy-hydrate carousel slides 2..8 before scrolling into view
  const showcaseSection = document.getElementById('showcase');
  let galleryHydrated = false;
  function hydrateGallery() {
    if (galleryHydrated || !showcaseSection) return;
    galleryHydrated = true;
    showcaseSection.querySelectorAll('img[data-src]').forEach(function (img) {
      img.src = img.getAttribute('data-src');
      img.removeAttribute('data-src');
    });
  }

  if (showcaseSection && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      function (entries) {
        if (entries.some(function (en) { return en.isIntersecting; })) {
          hydrateGallery();
          io.disconnect();
        }
      },
      { rootMargin: '420px 0px' }
    );
    io.observe(showcaseSection);
  } else {
    hydrateGallery();
  }

  // 4. Hero QuickTabs (ARIA tablist + keyboard arrows)
  const heroImg = document.getElementById('hero-active-screenshot');
  const heroPanel = document.getElementById('hero-poster-panel');
  const heroTabs = Array.from(document.querySelectorAll('.hero-tab-btn[role="tab"]'));
  const ssFolder = (document.body && document.body.getAttribute('data-ss-folder')) || 'fr';

  function activateHeroTab(tabBtn, focusTab) {
    if (!tabBtn || !heroImg) return;
    const screenIdx = tabBtn.getAttribute('data-hero-screen') || '1';
    const altText = tabBtn.getAttribute('data-hero-alt') || heroImg.alt;

    heroTabs.forEach(function (btn) {
      const active = btn === tabBtn;
      btn.setAttribute('aria-selected', String(active));
      btn.setAttribute('tabindex', active ? '0' : '-1');
    });

    if (heroPanel && tabBtn.id) {
      heroPanel.setAttribute('aria-labelledby', tabBtn.id);
    }

    const base480 = '/assets/screenshots/' + ssFolder + '/screen_' + screenIdx + '_480.webp';
    const base720 = '/assets/screenshots/' + ssFolder + '/screen_' + screenIdx + '.webp';
    heroImg.srcset = base480 + ' 480w, ' + base720 + ' 720w';
    heroImg.src = base720;
    heroImg.alt = altText;

    if (focusTab) tabBtn.focus();
  }

  heroTabs.forEach(function (btn, idx) {
    btn.addEventListener('click', function () {
      activateHeroTab(btn, false);
    });
    btn.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const dir = e.key === 'ArrowRight' ? 1 : -1;
        const nextIdx = (idx + dir + heroTabs.length) % heroTabs.length;
        activateHeroTab(heroTabs[nextIdx], true);
      }
    });
  });

  // 5. 8-Screen Carousel controls
  const track = document.getElementById('appshots-track');
  const pills = Array.from(document.querySelectorAll('.showcase-pill'));
  const cards = Array.from(document.querySelectorAll('.appshot-slide-card'));
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');
  let activeSlide = 0;

  function goToSlide(index) {
    hydrateGallery();
    if (!cards.length || !track) return;
    activeSlide = Math.max(0, Math.min(cards.length - 1, index));
    pills.forEach(function (p, i) { p.classList.toggle('active', i === activeSlide); });
    cards.forEach(function (c, i) { c.classList.toggle('active', i === activeSlide); });
    const target = cards[activeSlide];
    if (target) {
      track.scrollTo({ left: Math.max(0, target.offsetLeft - track.offsetLeft - 8), behavior: 'smooth' });
    }
  }

  pills.forEach(function (pill, idx) {
    pill.addEventListener('click', function () { goToSlide(idx); });
  });
  cards.forEach(function (card, idx) {
    card.addEventListener('click', function () {
      pills.forEach(function (p, i) { p.classList.toggle('active', i === idx); });
      cards.forEach(function (c, i) { c.classList.toggle('active', i === idx); });
      activeSlide = idx;
    });
  });
  if (prevBtn) prevBtn.addEventListener('click', function () { goToSlide(activeSlide - 1); });
  if (nextBtn) nextBtn.addEventListener('click', function () { goToSlide(activeSlide + 1); });

  // 6. Sticky Mobile App Store Bar (0ms scroll jank via IntersectionObserver)
  const heroCta = document.getElementById('hero-btn-download');
  const stickyBar = document.getElementById('mobile-sticky-bar');
  if (heroCta && stickyBar && 'IntersectionObserver' in window) {
    const stickyObs = new IntersectionObserver(
      function (entries) {
        const entry = entries[0];
        const pastHero = !entry.isIntersecting && entry.boundingClientRect.top < 0;
        stickyBar.classList.toggle('visible', pastHero);
      },
      { threshold: 0 }
    );
    stickyObs.observe(heroCta);
  }

  // 7. Interactive On-Device Solar Ming Gua & Birth Year Preview (4 directions gated in-app)
  const guaForm = document.getElementById('gua-preview-form');
  const dateInput = document.getElementById('gua-birthdate');
  if (guaForm && dateInput) {
    const TRIGRAMS = {
      1: '☵', 2: '☷', 3: '☳', 4: '☴', 6: '☰', 7: '☱', 8: '☶', 9: '☲'
    };
    const STEMS_HANZI = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
    const BRANCHES_HANZI = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

    const LOC = {
      fr: {
        guaPrefix: 'Chiffre Gua',
        east: 'Groupe Est',
        west: 'Groupe Ouest',
        guaNames: { 1: 'Kan · Eau', 2: 'Kun · Terre', 3: 'Zhen · Bois', 4: 'Xun · Bois', 6: 'Qian · Métal', 7: 'Dui · Métal', 8: 'Gen · Terre', 9: 'Li · Feu' },
        stems: ['Bois Yang', 'Bois Yin', 'Feu Yang', 'Feu Yin', 'Terre Yang', 'Terre Yin', 'Métal Yang', 'Métal Yin', 'Eau Yang', 'Eau Yin'],
        animals: ['Rat', 'Buffle', 'Tigre', 'Lièvre', 'Dragon', 'Serpent', 'Cheval', 'Chèvre', 'Singe', 'Coq', 'Chien', 'Cochon'],
        solarLabel: function (y, gz, anim, elem) { return 'Année solaire ' + y + ' · ' + gz + ' (' + anim + ' de ' + elem + ')'; },
        lichunShift: function (calY, solY) { return 'Né(e) avant le 4 février (Li Chun) : en astronomie solaire chinoise, votre année énergétique est ' + solY + ' (et non ' + calY + '). La plupart des sites grand public se trompent ici d’un an.'; },
        lichunNormal: function (solY) { return 'Né(e) après le 4 février (Li Chun) : votre Pilier de l’Année est ancré sur l’année solaire ' + solY + '. Ouvrez QiMétéo sur iOS pour découvrir vos 3 autres Piliers et vos 4 directions en direct.'; }
      },
      en: {
        guaPrefix: 'Ming Gua',
        east: 'East Group',
        west: 'West Group',
        guaNames: { 1: 'Kan · Water', 2: 'Kun · Earth', 3: 'Zhen · Wood', 4: 'Xun · Wood', 6: 'Qian · Metal', 7: 'Dui · Metal', 8: 'Gen · Earth', 9: 'Li · Fire' },
        stems: ['Yang Wood', 'Yin Wood', 'Yang Fire', 'Yin Fire', 'Yang Earth', 'Yin Earth', 'Yang Metal', 'Yin Metal', 'Yang Water', 'Yin Water'],
        animals: ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'],
        solarLabel: function (y, gz, anim, elem) { return 'Solar Year ' + y + ' · ' + gz + ' (' + elem + ' ' + anim + ')'; },
        lichunShift: function (calY, solY) { return 'Born before Feb 4 (Li Chun): in classical solar astronomy, your energetic year is ' + solY + ' (not ' + calY + '). Most generic zodiac apps get your chart wrong by a full year.'; },
        lichunNormal: function (solY) { return 'Born on or after Feb 4 (Li Chun): your Year Pillar aligns with solar year ' + solY + '. Open QiMétéo on iOS to unlock your Day Master, daily windows, and live 4-direction compass.'; }
      },
      es: {
        guaPrefix: 'Número Gua',
        east: 'Grupo Este',
        west: 'Grupo Oeste',
        guaNames: { 1: 'Kan · Agua', 2: 'Kun · Tierra', 3: 'Zhen · Madera', 4: 'Xun · Madera', 6: 'Qian · Metal', 7: 'Dui · Metal', 8: 'Gen · Tierra', 9: 'Li · Fuego' },
        stems: ['Madera Yang', 'Madera Yin', 'Fuego Yang', 'Fuego Yin', 'Tierra Yang', 'Tierra Yin', 'Metal Yang', 'Metal Yin', 'Agua Yang', 'Agua Yin'],
        animals: ['Rata', 'Búfalo', 'Tigre', 'Conejo', 'Dragón', 'Serpiente', 'Caballo', 'Cabra', 'Mono', 'Gallo', 'Perro', 'Cerdo'],
        solarLabel: function (y, gz, anim, elem) { return 'Año solar ' + y + ' · ' + gz + ' (' + anim + ' de ' + elem + ')'; },
        lichunShift: function (calY, solY) { return 'Nacido/a antes del 4 de febrero (Li Chun): en astronomía solar, tu año energético es ' + solY + ' (no ' + calY + '). La mayoría de apps genéricas fallan aquí por un año.'; },
        lichunNormal: function (solY) { return 'Nacido/a tras el 4 de febrero (Li Chun): tu Pilar del Año corresponde al año solar ' + solY + '. Abre QiMétéo en iOS para desbloquear tus otros 3 Pilares y tus 4 direcciones en vivo.'; }
      },
      zh: {
        guaPrefix: '本命卦',
        east: '东四命',
        west: '西四命',
        guaNames: { 1: '坎一水', 2: '坤二土', 3: '震三木', 4: '巽四木', 6: '乾六金', 7: '兑七金', 8: '艮八土', 9: '离九火' },
        stems: ['阳木', '阴木', '阳火', '阴火', '阳土', '阴土', '阳金', '阴金', '阳水', '阴水'],
        animals: ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'],
        solarLabel: function (y, gz, anim, elem) { return '立春太阳年 ' + y + ' · ' + gz + '年（' + elem + anim + '）'; },
        lichunShift: function (calY, solY) { return '出生于立春（约2月4日）之前：按节气太阳历，您的年柱与命卦归属 ' + solY + ' 年（而非公历 ' + calY + ' 年），普通生肖软件常在此误判整整一年。'; },
        lichunNormal: function (solY) { return '出生于立春之后：您的年柱归属 ' + solY + ' 太阳年。前往 iPhone / iPad App 解锁您的日主四柱、今日吉时与实景罗盘四大吉方。'; }
      },
      'zh-hant': {
        guaPrefix: '本命卦',
        east: '東四命',
        west: '西四命',
        guaNames: { 1: '坎一水', 2: '坤二土', 3: '震三木', 4: '巽四木', 6: '乾六金', 7: '兌七金', 8: '艮八土', 9: '離九火' },
        stems: ['陽木', '陰木', '陽火', '陰火', '陽土', '陰土', '陽金', '陰金', '陽水', '陰水'],
        animals: ['鼠', '牛', '虎', '兔', '龍', '蛇', '馬', '羊', '猴', '雞', '狗', '豬'],
        solarLabel: function (y, gz, anim, elem) { return '立春太陽年 ' + y + ' · ' + gz + '年（' + elem + anim + '）'; },
        lichunShift: function (calY, solY) { return '出生於立春（約2月4日）之前：依節氣太陽曆，您的年柱與命卦歸屬 ' + solY + ' 年（而非西曆 ' + calY + ' 年），一般生肖軟體常在此誤判整整一年。'; },
        lichunNormal: function (solY) { return '出生於立春之後：您的年柱歸屬 ' + solY + ' 太陽年。前往 iPhone / iPad App 解鎖您的日主四柱、今日吉時與實景羅盤四大吉方。'; }
      }
    };

    function updateGuaPreview() {
      const val = dateInput.value;
      if (!val) return;
      const parts = val.split('-').map(Number);
      if (parts.length !== 3 || !parts[0] || !parts[1] || !parts[2]) return;
      const calYear = parts[0];
      const month = parts[1];
      const day = parts[2];

      const genderEl = guaForm.querySelector('input[name="gua-gender"]:checked');
      const isFemale = !genderEl || genderEl.value === 'female';

      const beforeLiChun = month === 1 || (month === 2 && day < 4);
      const solarYear = beforeLiChun ? calYear - 1 : calYear;

      const digitalRoot = 1 + (((solarYear - 1) % 9) + 9) % 9;
      let rawGua;
      if (isFemale) {
        rawGua = 1 + ((digitalRoot + 3) % 9);
      } else {
        const r = 11 - digitalRoot;
        rawGua = r > 9 ? r - 9 : r;
      }
      const gua = rawGua === 5 ? (isFemale ? 8 : 2) : rawGua;
      const isEast = gua === 1 || gua === 3 || gua === 4 || gua === 9;

      const stemIdx = (((solarYear - 4) % 10) + 10) % 10;
      const branchIdx = (((solarYear - 4) % 12) + 12) % 12;
      const ganZhi = STEMS_HANZI[stemIdx] + BRANCHES_HANZI[branchIdx];

      const t = LOC[langKey] || LOC.fr;
      const glyphEl = document.getElementById('gua-glyph');
      const titleEl = document.getElementById('gua-title');
      const groupEl = document.getElementById('gua-group');
      const solarEl = document.getElementById('gua-solar-tag');
      const noteEl = document.getElementById('gua-lichun-note');

      if (glyphEl) glyphEl.textContent = TRIGRAMS[gua];
      if (titleEl) titleEl.textContent = t.guaPrefix + ' ' + gua + ' · ' + t.guaNames[gua];
      if (groupEl) groupEl.textContent = isEast ? t.east : t.west;
      if (solarEl) solarEl.textContent = t.solarLabel(solarYear, ganZhi, t.animals[branchIdx], t.stems[stemIdx]);
      if (noteEl) noteEl.textContent = beforeLiChun ? t.lichunShift(calYear, solarYear) : t.lichunNormal(solarYear);
    }

    guaForm.addEventListener('change', updateGuaPreview);
    guaForm.addEventListener('input', updateGuaPreview);
    guaForm.addEventListener('submit', function (e) {
      e.preventDefault();
      updateGuaPreview();
    });
  }
})();
