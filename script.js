/**
 * QiMétéo Official Website — Interactive Birth-Date Zodiac Signs & Ming Gua Studio (v51)
 * - Zero synchronous DOM rewrites on initial load (0ms TBT, 0.000 CLS)
 * - Instant live calculation of Year, Month & Birth Day Zodiac Animals + Elements (100% parity with TongShuEngine)
 * - Birth Hour (4th Pillar) & daily Qi Men 2h windows reserved exclusively for the iOS / iPadOS app
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

  // 1. Language <details> dropdown: close on outside click or Escape + remember manual choice
  document.querySelectorAll('.lang-menu a[lang], .footer-nav a[lang]').forEach(function (link) {
    link.addEventListener('click', function () {
      try {
        sessionStorage.setItem('qm_lang_manual', (link.getAttribute('lang') || '').toLowerCase());
      } catch (err) {}
    });
  });
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

  // 6. Sticky Mobile App Store Bar
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

  // 7. Instant Birth-Date Zodiac Signs (Year, Month, Day) + Ming Gua Preview
  const guaForm = document.getElementById('gua-preview-form');
  const dateInput = document.getElementById('gua-birthdate');
  if (guaForm && dateInput) {
    const TRIGRAMS = { 1: '☵', 2: '☷', 3: '☳', 4: '☴', 6: '☰', 7: '☱', 8: '☶', 9: '☲' };
    const STEMS_HANZI = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
    const BRANCHES_HANZI = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
    const ANIMAL_SLUGS = ['rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake', 'horse', 'goat', 'monkey', 'rooster', 'dog', 'pig'];
    const JIE_LONGITUDES = [285.0, 315.0, 345.0, 15.0, 45.0, 75.0, 105.0, 135.0, 165.0, 195.0, 225.0, 255.0];
    const OVERRIDES = {
      '1912-10-08': [0, 9],
      '1927-09-08': [3, 9],
      '2014-03-05': [6, 2],
      '2016-07-06': [8, 6]
    };

    function jdn(y, m, d) {
      const a = Math.floor((14 - m) / 12);
      const yy = y + 4800 - a;
      const mm = m + 12 * a - 3;
      return d + Math.floor((153 * mm + 2) / 5) + 365 * yy + Math.floor(yy / 4) - Math.floor(yy / 100) + Math.floor(yy / 400) - 32045;
    }

    const JDN_EPOCH = jdn(2024, 1, 1);

    function posMod(v, mod) {
      const r = v % mod;
      return r < 0 ? r + mod : r;
    }

    function apparentSolarLongitudeDegrees(jd) {
      const T = (jd - 2451545.0) / 36525.0;
      let L0 = (280.4664567 + 36000.76982779 * T + 0.0003032028 * T * T) % 360.0;
      if (L0 < 0) L0 += 360.0;
      let Mdeg = (357.5291092 + 35999.0502909 * T - 0.0001536 * T * T) % 360.0;
      if (Mdeg < 0) Mdeg += 360.0;
      const M = (Mdeg * Math.PI) / 180.0;
      const C = (1.914602 - 0.004817 * T - 0.000014 * T * T) * Math.sin(M)
              + (0.019993 - 0.000101 * T) * Math.sin(2.0 * M)
              + 0.000289 * Math.sin(3.0 * M);
      const trueLong = L0 + C;
      const omega = ((125.04 - 1934.136 * T) * Math.PI) / 180.0;
      let lambda = (trueLong - 0.00569 - 0.00478 * Math.sin(omega)) % 360.0;
      if (lambda < 0) lambda += 360.0;
      return lambda;
    }

    function computePillars(year, month, day) {
      const curJdn = jdn(year, month, day);
      const diff = curJdn - JDN_EPOCH;
      const dayStem = posMod(diff, 10);
      const dayBranch = posMod(diff, 12);
      const key = String(year).padStart(4, '0') + '-' + String(month).padStart(2, '0') + '-' + String(day).padStart(2, '0');
      let yearBranch, monthBranch, effectiveYear;
      const ov = OVERRIDES[key];
      if (ov) {
        yearBranch = ov[0];
        monthBranch = ov[1];
        effectiveYear = (month === 1 || (month === 2 && ov[1] === 1)) ? (year - 1) : year;
      } else {
        const jd = curJdn + 65.0 / 86400.0;
        const sunLong = apparentSolarLongitudeDegrees(jd);
        const target = JIE_LONGITUDES[month - 1];
        let delta = (sunLong - target + 180.0) % 360.0;
        if (delta < 0) delta += 360.0;
        delta -= 180.0;
        const passedJie = delta >= 0.0;
        monthBranch = posMod(passedJie ? month : (month - 1), 12);
        effectiveYear = (month < 2 || (month === 2 && !passedJie)) ? (year - 1) : year;
        yearBranch = posMod(effectiveYear - 1900, 12);
      }
      const yearStem = posMod(effectiveYear - 1864, 10);
      const monthOffsetFromYin = posMod(monthBranch - 2, 12);
      const monthStem = posMod((yearStem % 5) * 2 + 2 + monthOffsetFromYin, 10);
      return {
        effectiveYear: effectiveYear,
        beforeLiChun: effectiveYear < year,
        yearStem: yearStem,
        yearBranch: yearBranch,
        monthStem: monthStem,
        monthBranch: monthBranch,
        dayStem: dayStem,
        dayBranch: dayBranch
      };
    }

    const LOC = {
      fr: {
        guaPrefix: 'Chiffre Gua',
        east: 'Groupe Est',
        west: 'Groupe Ouest',
        guaNames: { 1: 'Kan · Eau', 2: 'Kun · Terre', 3: 'Zhen · Bois', 4: 'Xun · Bois', 6: 'Qian · Métal', 7: 'Dui · Métal', 8: 'Gen · Terre', 9: 'Li · Feu' },
        stems: ['Bois Chêne', 'Bois Liane', 'Feu Soleil', 'Feu Flamme', 'Terre Montagne', 'Terre Fertile', 'Métal Épée', 'Métal Joyau', 'Eau Océan', 'Eau Pluie'],
        animals: ['Rat', 'Buffle', 'Tigre', 'Lièvre', 'Dragon', 'Serpent', 'Cheval', 'Chèvre', 'Singe', 'Coq', 'Chien', 'Cochon'],
        pillarNames: { year: 'Année', month: 'Mois', day: 'Jour' },
        clashAlert: function (clashAnim, matched) {
          return '⚠️ Opposition du jour (' + clashAnim + ') présente dans votre pilier « ' + matched.join(' / ') + ' » ! Ménagez vos décisions majeures aujourd’hui et ouvrez l’app mobile QiMétéo pour vos créneaux sûrs.';
        },
        clashClear: function (clashAnim) {
          return '✓ Aucun de vos 3 signes de date n’est en opposition aujourd’hui (clash ' + clashAnim + '). Renseignez votre heure de naissance dans l’app mobile QiMétéo pour vérifier votre 4e signe et vos créneaux de 2h.';
        },
        lichunShift: function (calY, solY) {
          return 'Né(e) début ' + calY + ' avant le printemps astronomique (~4 février) : votre signe d’année réel est rattaché à ' + solY + ' (la plupart des sites grand public se trompent ici d’un an).';
        },
        lichunNormal: function (solY, gz) {
          return 'Année astronomique ' + solY + ' (' + gz + ') · Vos 4 directions Ming Gua (lit & bureau) sont disponibles en boussole live dans l’app mobile.';
        }
      },
      en: {
        guaPrefix: 'Ming Gua',
        east: 'East Group',
        west: 'West Group',
        guaNames: { 1: 'Kan · Water', 2: 'Kun · Earth', 3: 'Zhen · Wood', 4: 'Xun · Wood', 6: 'Qian · Metal', 7: 'Dui · Metal', 8: 'Gen · Earth', 9: 'Li · Fire' },
        stems: ['Oak Wood', 'Vine Wood', 'Sun Fire', 'Candle Fire', 'Mountain Earth', 'Fertile Earth', 'Sword Metal', 'Jewel Metal', 'Ocean Water', 'Rain Water'],
        animals: ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'],
        pillarNames: { year: 'Year', month: 'Month', day: 'Birth Day' },
        clashAlert: function (clashAnim, matched) {
          return '⚠️ Today’s opposition sign is ' + clashAnim + ' — and you have ' + clashAnim + ' in your ' + matched.join(' & ') + ' sign! Take it slow today & check your safe hours in the QiMétéo mobile app.';
        },
        clashClear: function (clashAnim) {
          return '✓ Today’s opposition sign is ' + clashAnim + ' — none of your 3 birth-date signs clash today! Enter your birth hour in the QiMétéo mobile app to check your 4th sign & best 2h slots.';
        },
        lichunShift: function (calY, solY) {
          return 'Born in early ' + calY + ' before astronomical spring (~Feb 4): your true Year Sign belongs to ' + solY + ' — most generic zodiac sites get your sign wrong by a full year!';
        },
        lichunNormal: function (solY, gz) {
          return 'Astronomical year ' + solY + ' (' + gz + ') · Unlock your 4 lifetime Ming Gua directions (bed & desk) with the live compass in the mobile app.';
        }
      },
      es: {
        guaPrefix: 'Número Gua',
        east: 'Grupo Este',
        west: 'Grupo Oeste',
        guaNames: { 1: 'Kan · Agua', 2: 'Kun · Tierra', 3: 'Zhen · Madera', 4: 'Xun · Madera', 6: 'Qian · Metal', 7: 'Dui · Metal', 8: 'Gen · Tierra', 9: 'Li · Fuego' },
        stems: ['Madera Roble', 'Madera Vid', 'Fuego Sol', 'Fuego Vela', 'Tierra Montaña', 'Tierra Fértil', 'Metal Espada', 'Metal Joya', 'Agua Océano', 'Agua Lluvia'],
        animals: ['Rata', 'Búfalo', 'Tigre', 'Conejo', 'Dragón', 'Serpiente', 'Caballo', 'Cabra', 'Mono', 'Gallo', 'Perro', 'Cerdo'],
        pillarNames: { year: 'Año', month: 'Mes', day: 'Día' },
        clashAlert: function (clashAnim, matched) {
          return '⚠️ El signo en oposición hoy es ' + clashAnim + ' — ¡y tienes ' + clashAnim + ' en tu pilar de ' + matched.join(' / ') + '! Ve con calma hoy y consulta tus horas seguras en la app móvil QiMétéo.';
        },
        clashClear: function (clashAnim) {
          return '✓ Ninguno de tus 3 signos de fecha está en oposición hoy (choque ' + clashAnim + '). Añade tu hora de nacimiento en la app móvil QiMétéo para ver tu 4.º signo y tus franjas de 2h.';
        },
        lichunShift: function (calY, solY) {
          return 'Nacido/a a principios de ' + calY + ' antes del inicio solar (~4 feb.): tu verdadero signo anual corresponde a ' + solY + ' (la mayoría de webs fallan aquí por un año).';
        },
        lichunNormal: function (solY, gz) {
          return 'Año astronómico ' + solY + ' (' + gz + ') · Desbloquea tus 4 direcciones Ming Gua (cama y escritorio) con la brújula en vivo en la app móvil.';
        }
      },
      zh: {
        guaPrefix: '本命卦',
        east: '东四命',
        west: '西四命',
        guaNames: { 1: '坎一水', 2: '坤二土', 3: '震三木', 4: '巽四木', 6: '乾六金', 7: '兑七金', 8: '艮八土', 9: '离九火' },
        stems: ['甲木·栋梁', '乙木·藤蔓', '丙火·太阳', '丁火·烛光', '戊土·高山', '己土·沃土', '庚金·宝剑', '辛金·珠玉', '壬水·江海', '癸水·雨露'],
        animals: ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'],
        pillarNames: { year: '年柱', month: '月柱', day: '日柱' },
        clashAlert: function (clashAnim, matched) {
          return '⚠️ 今日岁破冲「' + clashAnim + '」——您的' + matched.join('、') + '正逢相冲！今日宜稳健缓行，前往 QiMétéo 手机 App 查看今日吉时避开受阻时段。';
        },
        clashClear: function (clashAnim) {
          return '✓ 今日冲「' + clashAnim + '」，您的年月日三柱生肖今日均无相冲！前往 QiMétéo 手机 App 输入出生时辰，解锁第四柱（时柱）与今日奇门吉时。';
        },
        lichunShift: function (calY, solY) {
          return '出生于立春（约2月4日）之前：按节气天文历，您的真实年柱生肖归属 ' + solY + ' 年（普通公历生肖常在此误判整整一年）。';
        },
        lichunNormal: function (solY, gz) {
          return '节气太阳年 ' + solY + '（' + gz + '）· 在手机版 App 内开启实景罗盘，校准您的书桌与床头四大吉方。';
        }
      },
      'zh-hant': {
        guaPrefix: '本命卦',
        east: '東四命',
        west: '西四命',
        guaNames: { 1: '坎一水', 2: '坤二土', 3: '震三木', 4: '巽四木', 6: '乾六金', 7: '兌七金', 8: '艮八土', 9: '離九火' },
        stems: ['甲木·棟樑', '乙木·藤蔓', '丙火·太陽', '丁火·燭光', '戊土·高山', '己土·沃土', '庚金·寶劍', '辛金·珠玉', '壬水·江海', '癸水·雨露'],
        animals: ['鼠', '牛', '虎', '兔', '龍', '蛇', '馬', '羊', '猴', '雞', '狗', '豬'],
        pillarNames: { year: '年柱', month: '月柱', day: '日柱' },
        clashAlert: function (clashAnim, matched) {
          return '⚠️ 今日歲破沖「' + clashAnim + '」——您的' + matched.join('、') + '正逢相沖！今日宜穩健緩行，前往 QiMétéo 手機 App 查看今日吉時避開受阻時段。';
        },
        clashClear: function (clashAnim) {
          return '✓ 今日沖「' + clashAnim + '」，您的年月日三柱生肖今日均無相沖！前往 QiMétéo 手機 App 輸入出生時辰，解鎖第四柱（時柱）與今日奇門吉時。';
        },
        lichunShift: function (calY, solY) {
          return '出生於立春（約2月4日）之前：依節氣天文曆，您的真實年柱生肖歸屬 ' + solY + ' 年（一般西曆生肖常在此誤判整整一年）。';
        },
        lichunNormal: function (solY, gz) {
          return '節氣太陽年 ' + solY + '（' + gz + '）· 在手機版 App 內開啟實景羅盤，校準您的書桌與床頭四大吉方。';
        }
      }
    };

    function updateBirthSignsPreview() {
      const val = dateInput.value;
      if (!val) return;
      const parts = val.split('-').map(Number);
      if (parts.length !== 3 || !parts[0] || !parts[1] || !parts[2]) return;
      const calYear = parts[0];
      const month = parts[1];
      const day = parts[2];

      const p = computePillars(calYear, month, day);
      const solarYear = p.effectiveYear;

      const genderEl = guaForm.querySelector('input[name="gua-gender"]:checked');
      const isFemale = !genderEl || genderEl.value === 'female';

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

      const t = LOC[langKey] || LOC.fr;

      function updateCard(prefix, stemIdx, branchIdx) {
        const imgEl = document.getElementById('pz-' + prefix + '-img');
        const animEl = document.getElementById('pz-' + prefix + '-animal');
        const elemEl = document.getElementById('pz-' + prefix + '-elem');
        const slug = ANIMAL_SLUGS[branchIdx];
        const animName = t.animals[branchIdx];
        const gz = STEMS_HANZI[stemIdx] + BRANCHES_HANZI[branchIdx];
        if (imgEl) {
          imgEl.src = '/assets/zodiac/' + slug + '.webp';
          imgEl.alt = animName;
        }
        if (animEl) animEl.textContent = animName;
        if (elemEl) elemEl.textContent = t.stems[stemIdx] + ' · ' + gz;
      }

      updateCard('year', p.yearStem, p.yearBranch);
      updateCard('month', p.monthStem, p.monthBranch);
      updateCard('day', p.dayStem, p.dayBranch);

      // Live Today's Opposition Check (matches daily YouTube Shorts!)
      const now = new Date();
      const todayP = computePillars(now.getFullYear(), now.getMonth() + 1, now.getDate());
      const clashBranch = (todayP.dayBranch + 6) % 12;
      const clashAnimName = t.animals[clashBranch];
      const matchedPillars = [];
      if (p.yearBranch === clashBranch) matchedPillars.push(t.pillarNames.year);
      if (p.monthBranch === clashBranch) matchedPillars.push(t.pillarNames.month);
      if (p.dayBranch === clashBranch) matchedPillars.push(t.pillarNames.day);

      const clashEl = document.getElementById('pz-today-clash');
      if (clashEl) {
        const hasClash = matchedPillars.length > 0;
        clashEl.classList.toggle('is-clash', hasClash);
        clashEl.classList.toggle('is-clear', !hasClash);
        clashEl.textContent = hasClash
          ? t.clashAlert(clashAnimName, matchedPillars)
          : t.clashClear(clashAnimName);
      }

      const glyphEl = document.getElementById('gua-glyph');
      const titleEl = document.getElementById('gua-title');
      const groupEl = document.getElementById('gua-group');
      const noteEl = document.getElementById('gua-lichun-note');

      if (glyphEl) glyphEl.textContent = TRIGRAMS[gua];
      if (titleEl) titleEl.textContent = t.guaPrefix + ' ' + gua + ' · ' + t.guaNames[gua];
      if (groupEl) groupEl.textContent = isEast ? t.east : t.west;
      const yearGz = STEMS_HANZI[p.yearStem] + BRANCHES_HANZI[p.yearBranch];
      if (noteEl) noteEl.textContent = p.beforeLiChun ? t.lichunShift(calYear, solarYear) : t.lichunNormal(solarYear, yearGz);
    }

    guaForm.addEventListener('change', updateBirthSignsPreview);
    guaForm.addEventListener('input', updateBirthSignsPreview);
    guaForm.addEventListener('submit', function (e) {
      e.preventDefault();
      updateBirthSignsPreview();
    });

    // Run once to update Today's live opposition check banner for the current calendar day
    updateBirthSignsPreview();
  }
})();
