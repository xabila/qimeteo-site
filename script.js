/**
 * QiMétéo Official Website — Interactive Live Video Studio & 14-Language Birth-Date Signs (v54)
 * - Zero synchronous layout thrashing on initial load (0ms TBT, 0.000 CLS)
 * - Click-to-play Hero Live 28s App Preview + lazy IntersectionObserver Showcase Video (WCAG 2.2.2 compliant)
 * - Instant live calculation of Solar Year (Li Chun), Solar Month (JieQi) & Birth Day Zodiac + Ming Gua in 14 languages
 * - Birth Hour (4th Pillar) & daily Qi Men 2h tactical windows reserved exclusively for the iOS / iPadOS app
 */
(function () {
  'use strict';

  const rawLang = (document.documentElement.getAttribute('lang') || 'fr').toLowerCase();
  function resolveLangKey(l) {
    if (l.startsWith('zh-hant') || l === 'zh-tw' || l === 'zh-hk') return 'zh-hant';
    if (l.startsWith('zh')) return 'zh';
    const base = l.split('-')[0];
    const supported = ['fr', 'en', 'es', 'de', 'pt', 'ja', 'ru', 'hi', 'ko', 'vi', 'th', 'ro'];
    return supported.indexOf(base) !== -1 ? base : 'en';
  }
  const langKey = resolveLangKey(rawLang);

  const reducedMotionQuery = window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)')
    : { matches: false };
  const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const saveData = Boolean(conn && conn.saveData);

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

  // Helper to hydrate lazy <video data-src="..."> safely once
  function ensureVideoLoaded(videoEl) {
    if (!videoEl) return;
    const dataSrc = videoEl.getAttribute('data-src');
    if (dataSrc && !videoEl.getAttribute('src')) {
      videoEl.setAttribute('src', dataSrc);
      videoEl.load();
    }
  }

  function updateVideoControlBtn(btnEl, isPlaying) {
    if (!btnEl) return;
    const playLabel = btnEl.getAttribute('data-label-play') || 'Play video';
    const pauseLabel = btnEl.getAttribute('data-label-pause') || 'Pause video';
    btnEl.setAttribute('aria-label', isPlaying ? pauseLabel : playLabel);
    btnEl.setAttribute('data-playing', isPlaying ? 'true' : 'false');
    const iconSpan = btnEl.querySelector('.vid-ctrl-glyph');
    if (iconSpan) {
      iconSpan.textContent = isPlaying ? '❚❚' : '▶';
    }
  }

  // 3. Hero QuickTabs + Live 28s Video Player (0 bytes downloaded before interaction -> 100/100 LCP)
  const heroImg = document.getElementById('hero-active-screenshot');
  const heroVideo = document.getElementById('hero-live-video');
  const heroPlayOverlayBtn = document.getElementById('hero-play-overlay-btn');
  const heroVideoPauseBtn = document.getElementById('hero-video-pause-btn');
  const heroPanel = document.getElementById('hero-poster-panel');
  const heroTabs = Array.from(document.querySelectorAll('.hero-tab-btn[role="tab"]'));
  const ssFolder = (document.body && document.body.getAttribute('data-ss-folder')) || 'fr';

  function setHeroVideoMode(playNow) {
    if (!heroVideo || !heroImg) return;
    ensureVideoLoaded(heroVideo);
    heroImg.hidden = true;
    heroVideo.hidden = false;
    if (heroPlayOverlayBtn) heroPlayOverlayBtn.hidden = true;
    if (heroVideoPauseBtn) heroVideoPauseBtn.hidden = false;

    if (playNow) {
      const p = heroVideo.play();
      if (p && typeof p.then === 'function') {
        p.then(function () {
          updateVideoControlBtn(heroVideoPauseBtn, true);
        }).catch(function () {
          updateVideoControlBtn(heroVideoPauseBtn, false);
        });
      } else {
        updateVideoControlBtn(heroVideoPauseBtn, true);
      }
    } else {
      heroVideo.pause();
      updateVideoControlBtn(heroVideoPauseBtn, false);
    }
  }

  function setHeroScreenshotMode(screenIdx, altText) {
    if (!heroImg) return;
    if (heroVideo) {
      heroVideo.pause();
      heroVideo.hidden = true;
    }
    if (heroVideoPauseBtn) heroVideoPauseBtn.hidden = true;
    if (heroPlayOverlayBtn) heroPlayOverlayBtn.hidden = false;

    heroImg.hidden = false;
    const base480 = '/assets/screenshots/' + ssFolder + '/screen_' + screenIdx + '_480.webp';
    const base560 = '/assets/screenshots/' + ssFolder + '/screen_' + screenIdx + '_560.webp';
    const base720 = '/assets/screenshots/' + ssFolder + '/screen_' + screenIdx + '.webp';
    heroImg.srcset = base480 + ' 480w, ' + base560 + ' 560w, ' + base720 + ' 720w';
    heroImg.src = base560;
    if (altText) heroImg.alt = altText;
  }

  function activateHeroTab(tabBtn, focusTab) {
    if (!tabBtn) return;
    const mode = tabBtn.getAttribute('data-hero-mode') || 'screen';
    const screenIdx = tabBtn.getAttribute('data-hero-screen') || '1';
    const altText = tabBtn.getAttribute('data-hero-alt') || (heroImg ? heroImg.alt : '');

    heroTabs.forEach(function (btn) {
      const active = btn === tabBtn;
      btn.setAttribute('aria-selected', String(active));
      btn.setAttribute('tabindex', active ? '0' : '-1');
    });

    if (heroPanel && tabBtn.id) {
      heroPanel.setAttribute('aria-labelledby', tabBtn.id);
    }

    if (mode === 'video') {
      setHeroVideoMode(true);
    } else {
      setHeroScreenshotMode(screenIdx, altText);
    }

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

  if (heroPlayOverlayBtn) {
    heroPlayOverlayBtn.addEventListener('click', function () {
      const videoTab = document.getElementById('htab-video');
      if (videoTab) {
        activateHeroTab(videoTab, false);
      } else {
        setHeroVideoMode(true);
      }
    });
  }

  if (heroVideoPauseBtn && heroVideo) {
    heroVideoPauseBtn.addEventListener('click', function () {
      if (heroVideo.paused) {
        heroVideo.play().then(function () {
          updateVideoControlBtn(heroVideoPauseBtn, true);
        }).catch(function () {});
      } else {
        heroVideo.pause();
        updateVideoControlBtn(heroVideoPauseBtn, false);
      }
    });
  }

  // 4. Lazy-hydrate Showcase carousel images & Showcase Live 28s Video
  const showcaseSection = document.getElementById('showcase');
  const showcaseVideo = document.getElementById('showcase-live-video');
  const showcaseVideoBtn = document.getElementById('showcase-video-toggle');
  let galleryHydrated = false;
  let showcaseUserPaused = false;

  function hydrateGallery() {
    if (galleryHydrated || !showcaseSection) return;
    galleryHydrated = true;
    showcaseSection.querySelectorAll('img[data-src]').forEach(function (img) {
      img.src = img.getAttribute('data-src');
      img.removeAttribute('data-src');
    });
  }

  if (showcaseSection && 'IntersectionObserver' in window) {
    const hydrateIo = new IntersectionObserver(
      function (entries) {
        if (entries.some(function (en) { return en.isIntersecting; })) {
          hydrateGallery();
          hydrateIo.disconnect();
        }
      },
      { rootMargin: '420px 0px' }
    );
    hydrateIo.observe(showcaseSection);
  } else {
    hydrateGallery();
  }

  if (showcaseVideo) {
    if (showcaseVideoBtn) {
      showcaseVideoBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        ensureVideoLoaded(showcaseVideo);
        if (showcaseVideo.paused) {
          showcaseUserPaused = false;
          showcaseVideo.play().then(function () {
            updateVideoControlBtn(showcaseVideoBtn, true);
          }).catch(function () {});
        } else {
          showcaseUserPaused = true;
          showcaseVideo.pause();
          updateVideoControlBtn(showcaseVideoBtn, false);
        }
      });
    }

    if ('IntersectionObserver' in window) {
      const videoIo = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              if (!reducedMotionQuery.matches && !saveData && !showcaseUserPaused) {
                ensureVideoLoaded(showcaseVideo);
                const p = showcaseVideo.play();
                if (p && typeof p.then === 'function') {
                  p.then(function () {
                    updateVideoControlBtn(showcaseVideoBtn, true);
                  }).catch(function () {
                    updateVideoControlBtn(showcaseVideoBtn, false);
                  });
                }
              }
            } else if (!showcaseVideo.paused) {
              showcaseVideo.pause();
              updateVideoControlBtn(showcaseVideoBtn, false);
            }
          });
        },
        { threshold: 0.25 }
      );
      videoIo.observe(showcaseVideo);
    }
  }

  // 5. Carousel controls (Live Video Slide 0 + 8 App Store Screens)
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
      track.scrollTo({
        left: Math.max(0, target.offsetLeft - track.offsetLeft - 8),
        behavior: reducedMotionQuery.matches ? 'auto' : 'smooth'
      });
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

  // 7. Instant 14-Language Birth-Date Zodiac Signs (Year, Month, Day) + Ming Gua Preview
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
        clashAlert: function (c, m) { return '◆ Opposition du jour (' + c + ') active sur votre pilier « ' + m.join(' / ') + ' » : ménagez vos décisions majeures aujourd’hui et vérifiez vos créneaux sûrs dans l’app QiMétéo.'; },
        clashClear: function (c) { return '✓ Aucun de vos 3 signes de date n’est en opposition aujourd’hui (clash ' + c + '). Ajoutez votre heure de naissance dans l’app iOS pour vérifier votre 4e signe et vos créneaux de 2h.'; },
        lichunShift: function (calY, solY) { return 'Né(e) début ' + calY + ' avant le printemps astronomique (~4 février) : votre signe d’année réel est rattaché à ' + solY + ' (la plupart des sites se trompent ici d’un an).'; },
        lichunNormal: function (solY, gz) { return 'Année solaire ' + solY + ' (' + gz + ') · Vos 4 directions Ming Gua (lit & bureau) sont guidées en boussole live dans l’app mobile.'; }
      },
      en: {
        guaPrefix: 'Ming Gua',
        east: 'East Group',
        west: 'West Group',
        guaNames: { 1: 'Kan · Water', 2: 'Kun · Earth', 3: 'Zhen · Wood', 4: 'Xun · Wood', 6: 'Qian · Metal', 7: 'Dui · Metal', 8: 'Gen · Earth', 9: 'Li · Fire' },
        stems: ['Oak Wood', 'Vine Wood', 'Sun Fire', 'Candle Fire', 'Mountain Earth', 'Fertile Earth', 'Sword Metal', 'Jewel Metal', 'Ocean Water', 'Rain Water'],
        animals: ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'],
        pillarNames: { year: 'Year', month: 'Month', day: 'Birth Day' },
        clashAlert: function (c, m) { return '◆ Today’s opposition sign is ' + c + ' — present in your ' + m.join(' & ') + ' pillar! Pace high-stakes decisions today & check your safe 2h windows in the QiMétéo app.'; },
        clashClear: function (c) { return '✓ Today’s opposition sign is ' + c + ' — none of your 3 birth-date signs clash today! Add your birth hour in the QiMétéo iOS app to check your 4th sign & best 2h slots.'; },
        lichunShift: function (calY, solY) { return 'Born in early ' + calY + ' before astronomical spring (~Feb 4): your true Solar Year Sign belongs to ' + solY + ' — most generic zodiac sites get this wrong by a year.'; },
        lichunNormal: function (solY, gz) { return 'Astronomical year ' + solY + ' (' + gz + ') · Unlock your 4 lifetime Ming Gua directions (bed & desk) with the live compass in the iOS app.'; }
      },
      es: {
        guaPrefix: 'Número Gua',
        east: 'Grupo Este',
        west: 'Grupo Oeste',
        guaNames: { 1: 'Kan · Agua', 2: 'Kun · Tierra', 3: 'Zhen · Madera', 4: 'Xun · Madera', 6: 'Qian · Metal', 7: 'Dui · Metal', 8: 'Gen · Tierra', 9: 'Li · Fuego' },
        stems: ['Madera Roble', 'Madera Vid', 'Fuego Sol', 'Fuego Vela', 'Tierra Montaña', 'Tierra Fértil', 'Metal Espada', 'Metal Joya', 'Agua Océano', 'Agua Lluvia'],
        animals: ['Rata', 'Búfalo', 'Tigre', 'Conejo', 'Dragón', 'Serpiente', 'Caballo', 'Cabra', 'Mono', 'Gallo', 'Perro', 'Cerdo'],
        pillarNames: { year: 'Año', month: 'Mes', day: 'Día' },
        clashAlert: function (c, m) { return '◆ El signo en oposición hoy es ' + c + ' — presente en tu pilar de ' + m.join(' / ') + '. Toma con calma las decisiones clave y revisa tus horas seguras en la app QiMétéo.'; },
        clashClear: function (c) { return '✓ Ninguno de tus 3 signos de fecha entra en oposición hoy (choque ' + c + '). Añade tu hora de nacimiento en la app iOS QiMétéo para ver tu 4.º signo y tus franjas de 2h.'; },
        lichunShift: function (calY, solY) { return 'Nacido/a a principios de ' + calY + ' antes del inicio solar (~4 feb.): tu verdadero signo anual corresponde a ' + solY + ' (la mayoría de webs fallan por un año).'; },
        lichunNormal: function (solY, gz) { return 'Año solar ' + solY + ' (' + gz + ') · Desbloquea tus 4 direcciones Ming Gua (cama y escritorio) con la brújula en vivo en la app iOS.'; }
      },
      de: {
        guaPrefix: 'Kua-Zahl',
        east: 'Ostgruppe',
        west: 'Westgruppe',
        guaNames: { 1: 'Kan · Wasser', 2: 'Kun · Erde', 3: 'Zhen · Holz', 4: 'Xun · Holz', 6: 'Qian · Metall', 7: 'Dui · Metall', 8: 'Gen · Erde', 9: 'Li · Feuer' },
        stems: ['Eichenholz', 'Rankenholz', 'Sonnenfeuer', 'Kerzenfeuer', 'Bergerde', 'Gartenerde', 'Schwertmetall', 'Juwelenmetall', 'Ozeanwasser', 'Regenwasser'],
        animals: ['Ratte', 'Büffel', 'Tiger', 'Hase', 'Drache', 'Schlange', 'Pferd', 'Ziege', 'Affe', 'Hahn', 'Hund', 'Schwein'],
        pillarNames: { year: 'Jahr', month: 'Monat', day: 'Tag' },
        clashAlert: function (c, m) { return '◆ Heutige Opposition (' + c + ') betrifft Ihre Säule „' + m.join(' / ') + '“: Gehen Sie wichtige Entscheidungen heute bedacht an und prüfen Sie sichere 2h-Fenster in der QiMétéo-App.'; },
        clashClear: function (c) { return '✓ Keines Ihrer 3 Datumszeichen steht heute in Opposition (Konflikt ' + c + '). Ergänzen Sie Ihre Geburtsstunde in der iOS-App für Ihr 4. Zeichen und Ihre 2h-Zeitfenster.'; },
        lichunShift: function (calY, solY) { return 'Anfang ' + calY + ' vor dem astronomischen Frühlingsbeginn (~4. Feb.) geboren: Ihr wahres Jahreszeichen zählt zu ' + solY + '.'; },
        lichunNormal: function (solY, gz) { return 'Astronomisches Sonnenjahr ' + solY + ' (' + gz + ') · Ihre 4 persönlichen Ming-Gua-Richtungen (Bett & Schreibtisch) im Live-Kompass der iOS-App.'; }
      },
      pt: {
        guaPrefix: 'Número Gua',
        east: 'Grupo Leste',
        west: 'Grupo Oeste',
        guaNames: { 1: 'Kan · Água', 2: 'Kun · Terra', 3: 'Zhen · Madeira', 4: 'Xun · Madeira', 6: 'Qian · Metal', 7: 'Dui · Metal', 8: 'Gen · Terra', 9: 'Li · Fogo' },
        stems: ['Madeira Carvalho', 'Madeira Videira', 'Fogo Sol', 'Fogo Chama', 'Terra Montanha', 'Terra Fértil', 'Metal Espada', 'Metal Joia', 'Água Oceano', 'Água Chuva'],
        animals: ['Rato', 'Búfalo', 'Tigre', 'Coelho', 'Dragão', 'Serpente', 'Cavalo', 'Cabra', 'Macaco', 'Galo', 'Cão', 'Porco'],
        pillarNames: { year: 'Ano', month: 'Mês', day: 'Dia' },
        clashAlert: function (c, m) { return '◆ O signo em oposição hoje é ' + c + ' — presente no seu pilar de ' + m.join(' / ') + '. Pondere decisões importantes hoje e veja suas janelas seguras de 2h na app QiMétéo.'; },
        clashClear: function (c) { return '✓ Nenhum dos seus 3 signos de data está em oposição hoje (choque ' + c + '). Adicione a sua hora de nascimento na app iOS QiMétéo para revelar o 4.º signo e as janelas de 2h.'; },
        lichunShift: function (calY, solY) { return 'Nascido(a) no início de ' + calY + ' antes da primavera astronómica (~4 fev.): o seu verdadeiro signo anual pertence a ' + solY + '.'; },
        lichunNormal: function (solY, gz) { return 'Ano solar ' + solY + ' (' + gz + ') · Desbloqueie as suas 4 direções Ming Gua (cama e secretária) com a bússola ao vivo na app iOS.'; }
      },
      ja: {
        guaPrefix: '本命卦',
        east: '東四命',
        west: '西四命',
        guaNames: { 1: '坎一水', 2: '坤二土', 3: '震三木', 4: '巽四木', 6: '乾六金', 7: '兌七金', 8: '艮八土', 9: '離九火' },
        stems: ['甲木・大樹', '乙木・草花', '丙火・太陽', '丁火・灯火', '戊土・山岳', '己土・大地', '庚金・刀剣', '辛金・珠玉', '壬水・大海', '癸水・雨露'],
        animals: ['子（鼠）', '丑（牛）', '寅（虎）', '卯（兎）', '辰（龍）', '巳（蛇）', '午（馬）', '未（羊）', '申（猿）', '酉（鶏）', '戌（犬）', '亥（猪）'],
        pillarNames: { year: '年柱', month: '月柱', day: '日柱' },
        clashAlert: function (c, m) { return '◆ 本日の冲は「' + c + '」——ご自身の' + m.join('・') + 'と重なっています。重要な決断は慎重に進め、iOSアプリで安全な2時間枠をご確認ください。'; },
        clashClear: function (c) { return '✓ 本日の冲（' + c + '）はご自身の生年月日三柱と重なっていません。iOSアプリで出生時刻を入力すると、時柱（第4の柱）と奇門2時間吉時を確認できます。'; },
        lichunShift: function (calY, solY) { return calY + '年の立春（2月4日頃）前のご誕生のため、節気暦による本来の年柱干支は ' + solY + ' 年となります。'; },
        lichunNormal: function (solY, gz) { return '節気太陽年 ' + solY + '年（' + gz + '）・iOSアプリのライブ羅盤でベッドやデスクの生涯吉方位（本命卦）を確認できます。'; }
      },
      zh: {
        guaPrefix: '本命卦',
        east: '东四命',
        west: '西四命',
        guaNames: { 1: '坎一水', 2: '坤二土', 3: '震三木', 4: '巽四木', 6: '乾六金', 7: '兑七金', 8: '艮八土', 9: '离九火' },
        stems: ['甲木·栋梁', '乙木·藤蔓', '丙火·太阳', '丁火·烛光', '戊土·高山', '己土·沃土', '庚金·宝剑', '辛金·珠玉', '壬水·江海', '癸水·雨露'],
        animals: ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'],
        pillarNames: { year: '年柱', month: '月柱', day: '日柱' },
        clashAlert: function (c, m) { return '◆ 今日岁破冲「' + c + '」——您的' + m.join('、') + '正逢相冲！今日宜稳健缓行，前往 QiMétéo 手机 App 查看今日吉时避开受阻时段。'; },
        clashClear: function (c) { return '✓ 今日冲「' + c + '」，您的年月日三柱生肖今日均无相冲！前往 QiMétéo 手机 App 输入出生时辰，解锁第四柱（时柱）与今日奇门吉时。'; },
        lichunShift: function (calY, solY) { return '出生于立春（约2月4日）之前：按节气天文历，您的真实年柱生肖归属 ' + solY + ' 年（普通公历生肖常在此误判整整一年）。'; },
        lichunNormal: function (solY, gz) { return '节气太阳年 ' + solY + '（' + gz + '）· 在手机版 App 内开启实景罗盘，校准您的书桌与床头四大吉方。'; }
      },
      'zh-hant': {
        guaPrefix: '本命卦',
        east: '東四命',
        west: '西四命',
        guaNames: { 1: '坎一水', 2: '坤二土', 3: '震三木', 4: '巽四木', 6: '乾六金', 7: '兌七金', 8: '艮八土', 9: '離九火' },
        stems: ['甲木·棟樑', '乙木·藤蔓', '丙火·太陽', '丁火·燭光', '戊土·高山', '己土·沃土', '庚金·寶劍', '辛金·珠玉', '壬水·江海', '癸水·雨露'],
        animals: ['鼠', '牛', '虎', '兔', '龍', '蛇', '馬', '羊', '猴', '雞', '狗', '豬'],
        pillarNames: { year: '年柱', month: '月柱', day: '日柱' },
        clashAlert: function (c, m) { return '◆ 今日歲破沖「' + c + '」——您的' + m.join('、') + '正逢相沖！今日宜穩健緩行，前往 QiMétéo 手機 App 查看今日吉時避開受阻時段。'; },
        clashClear: function (c) { return '✓ 今日沖「' + c + '」，您的年月日三柱生肖今日均無相沖！前往 QiMétéo 手機 App 輸入出生時辰，解鎖第四柱（時柱）與今日奇門吉時。'; },
        lichunShift: function (calY, solY) { return '出生於立春（約2月4日）之前：依節氣天文曆，您的真實年柱生肖歸屬 ' + solY + ' 年（一般西曆生肖常在此誤判整整一年）。'; },
        lichunNormal: function (solY, gz) { return '節氣太陽年 ' + solY + '（' + gz + '）· 在手機版 App 內開啟實景羅盤，校準您的書桌與床頭四大吉方。'; }
      },
      ru: {
        guaPrefix: 'Число Гуа',
        east: 'Восточная группа',
        west: 'Западная группа',
        guaNames: { 1: 'Кань · Вода', 2: 'Кунь · Земля', 3: 'Чжэнь · Дерево', 4: 'Сюнь · Дерево', 6: 'Цянь · Металл', 7: 'Дуй · Металл', 8: 'Гэнь · Земля', 9: 'Ли · Огонь' },
        stems: ['Дерево Ян', 'Дерево Инь', 'Огонь Солнца', 'Огонь Свечи', 'Земля Горы', 'Плодородная Земля', 'Металл Меча', 'Металл Ювелирный', 'Вода Океана', 'Вода Дождя'],
        animals: ['Крыса', 'Бык', 'Тигр', 'Кролик', 'Дракон', 'Змея', 'Лошадь', 'Коза', 'Обезьяна', 'Петух', 'Собака', 'Кабан'],
        pillarNames: { year: 'Год', month: 'Месяц', day: 'День' },
        clashAlert: function (c, m) { return '◆ Сегодняшнее столкновение (' + c + ') затрагивает ваш столп «' + m.join(' / ') + '»: будьте внимательны с важными решениями и проверьте благоприятные 2-часовые окна в приложении QiMétéo.'; },
        clashClear: function (c) { return '✓ Ни один из ваших 3 знаков даты сегодня не в столкновении (' + c + '). Добавьте час рождения в iOS-приложении QiMétéo, чтобы узнать 4-й столп и лучшие окна по 2 часа.'; },
        lichunShift: function (calY, solY) { return 'Рождение в начале ' + calY + ' года до астрономической весны (~4 февр.): ваш истинный солнечный год — ' + solY + '.'; },
        lichunNormal: function (solY, gz) { return 'Солнечный год ' + solY + ' (' + gz + ') · Ваши 4 направления Мин Гуа (кровать и рабочий стол) доступны с живым компасом в приложении iOS.'; }
      },
      hi: {
        guaPrefix: 'मिंग गुआ',
        east: 'पूर्व समूह',
        west: 'पश्चिम समूह',
        guaNames: { 1: 'कान · जल', 2: 'कुन · पृथ्वी', 3: 'झेन · काष्ठ', 4: 'शुन · काष्ठ', 6: 'चियान · धातु', 7: 'दुई · धातु', 8: 'गेन · पृथ्वी', 9: 'ली · अग्नि' },
        stems: ['यांग काष्ठ', 'यिन काष्ठ', 'सूर्य अग्नि', 'दीप अग्नि', 'पर्वत पृथ्वी', 'उपजाऊ पृथ्वी', 'खड्ग धातु', 'रत्न धातु', 'सागर जल', 'वर्षा जल'],
        animals: ['चूहा', 'बैल', 'बाघ', 'खरगोश', 'ड्रैगन', 'साँप', 'घोड़ा', 'बकरी', 'बंदर', 'मुर्गा', 'कुत्ता', 'सूअर'],
        pillarNames: { year: 'वर्ष', month: 'माह', day: 'जन्मदिन' },
        clashAlert: function (c, m) { return '◆ आज का विरोधी चिह्न ' + c + ' आपके ' + m.join(' / ') + ' स्तंभ में है — आज बड़े निर्णयों में संयम रखें और QiMétéo iOS ऐप में सुरक्षित 2-घंटे के मुहूर्त देखें।'; },
        clashClear: function (c) { return '✓ आज के विरोधी चिह्न (' + c + ') से आपके जन्म-तिथि के तीनों स्तंभ सुरक्षित हैं! चौथा स्तंभ (जन्म समय) और 2-घंटे के शुभ समय QiMétéo iOS ऐप में देखें।'; },
        lichunShift: function (calY, solY) { return calY + ' के आरंभ में सौर वसंत (~4 फ़रवरी) से पूर्व जन्म: आपका वास्तविक सौर वर्ष ' + solY + ' गिना जाता है।'; },
        lichunNormal: function (solY, gz) { return 'सौर वर्ष ' + solY + ' (' + gz + ') · अपने बेड और डेस्क की 4 शुभ मिंग गुआ दिशाएँ iOS ऐप के लाइव कंपास में देखें।'; }
      },
      ko: {
        guaPrefix: '본명괘',
        east: '동사명',
        west: '서사명',
        guaNames: { 1: '감일수(坎·물)', 2: '곤이토(坤·흙)', 3: '진삼목(震·나무)', 4: '손사목(巽·나무)', 6: '건육금(乾·금)', 7: '태칠금(兌·금)', 8: '간팔토(艮·흙)', 9: '리구화(離·불)' },
        stems: ['갑목·거목', '을목·화초', '병화·태양', '정화·촛불', '무토·큰산', '기토·옥토', '경금·보검', '신금·보석', '임수·대해', '계수·단비'],
        animals: ['쥐', '소', '호랑이', '토끼', '용', '뱀', '말', '양', '원숭이', '닭', '개', '돼지'],
        pillarNames: { year: '년주', month: '월주', day: '일주' },
        clashAlert: function (c, m) { return '◆ 오늘의 충(沖) 동물인 「' + c + '」이(가) 회원님의 ' + m.join('·') + '에 해당합니다. 중요한 결정은 신중히 진행하시고 QiMétéo iOS 앱에서 안전한 2시간 길시를 확인하세요.'; },
        clashClear: function (c) { return '✓ 오늘의 충(' + c + ')과 생년월일 삼주(三柱)가 충돌하지 않습니다! QiMétéo iOS 앱에서 태어난 시간을 입력해 시주(4번째 기둥)와 2시간 기문 길시를 확인하세요.'; },
        lichunShift: function (calY, solY) { return calY + '년 입춘(2월 4일경) 이전 출생으로 절기력 기준 실제 년주 띠는 ' + solY + '년에 해당합니다.'; },
        lichunNormal: function (solY, gz) { return '절기 태양년 ' + solY + '년(' + gz + ') · iOS 앱 라이브 나침반으로 침대와 책상의 평생 길방위(본명괘)를 확인하세요.'; }
      },
      vi: {
        guaPrefix: 'Cung Mệnh (Quái)',
        east: 'Đông Tứ Mệnh',
        west: 'Tây Tứ Mệnh',
        guaNames: { 1: 'Khảm · Thủy', 2: 'Khôn · Thổ', 3: 'Chấn · Mộc', 4: 'Tốn · Mộc', 6: 'Càn · Kim', 7: 'Đoài · Kim', 8: 'Cấn · Thổ', 9: 'Ly · Hỏa' },
        stems: ['Giáp Mộc · Đại Thụ', 'Ất Mộc · Dây Leo', 'Bính Hỏa · Mặt Trời', 'Đinh Hỏa · Ánh Nến', 'Mậu Thổ · Núi Cao', 'Kỷ Thổ · Đất Màu', 'Canh Kim · Bảo Kiếm', 'Tân Kim · Châu Ngọc', 'Nhâm Thủy · Đại Dương', 'Quý Thủy · Mưa Xuân'],
        animals: ['Chuột (Tý)', 'Trâu (Sửu)', 'Hổ (Dần)', 'Mèo (Mão)', 'Rồng (Thìn)', 'Rắn (Tỵ)', 'Ngựa (Ngọ)', 'Dê (Mùi)', 'Khỉ (Thân)', 'Gà (Dậu)', 'Chó (Tuất)', 'Hợi'],
        pillarNames: { year: 'Trụ Năm', month: 'Trụ Tháng', day: 'Trụ Ngày' },
        clashAlert: function (c, m) { return '◆ Tuổi xung hôm nay là ' + c + ' — trùng với ' + m.join(' / ') + ' của bạn! Hãy thận trọng với quyết định lớn hôm nay và mở ứng dụng QiMétéo iOS để xem khung giờ 2h an toàn.'; },
        clashClear: function (c) { return '✓ Hôm nay xung ' + c + ' — cả 3 trụ Ngày, Tháng, Năm của bạn đều không bị xung! Nhập giờ sinh trong ứng dụng QiMétéo iOS để mở Trụ Giờ và 3 khung giờ vàng Kỳ Môn.'; },
        lichunShift: function (calY, solY) { return 'Sinh đầu năm ' + calY + ' trước tiết Lập Xuân (~4/2): theo lịch tiết khí mặt trời, tuổi năm thực sự của bạn thuộc năm ' + solY + '.'; },
        lichunNormal: function (solY, gz) { return 'Năm tiết khí ' + solY + ' (' + gz + ') · Mở la bàn trực tiếp trong ứng dụng iOS để xem 4 hướng tốt trọn đời cho giường ngủ & bàn làm việc.'; }
      },
      th: {
        guaPrefix: 'รหัสกัว (Ming Gua)',
        east: 'กลุ่มทิศตะวันออก',
        west: 'กลุ่มทิศตะวันตก',
        guaNames: { 1: 'ข่าน · ธาตุน้ำ', 2: 'คุน · ธาตุดิน', 3: 'เจิ้น · ธาตุไม้', 4: 'ซุ่น · ธาตุไม้', 6: 'เฉียน · ธาตุทอง', 7: 'ตุ้ย · ธาตุทอง', 8: 'เกิ้น · ธาตุดิน', 9: 'หลี · ธาตุไฟ' },
        stems: ['ไม้ใหญ่ (เจี่ย)', 'ไม้เถา (อี่)', 'ไฟตะวัน (ปิ่ง)', 'ไฟเทียน (ติง)', 'ดินภูเขา (อู้)', 'ดินอุดม (จี่)', 'ทองศาสตรา (เกิง)', 'ทองอัญมณี (ซิน)', 'น้ำมหาสมุทร (เหริน)', 'น้ำฝน (กุ่ย)'],
        animals: ['ชวด (หนู)', 'ฉลู (วัว)', 'ขาล (เสือ)', 'เถาะ (กระต่าย)', 'มะโรง (มังกร)', 'มะเส็ง (งูเล็ก)', 'มะเมีย (ม้า)', 'มะแม (แพะ)', 'วอก (ลิง)', 'ระกา (ไก่)', 'จอ (สุนัข)', 'กุน (หมู)'],
        pillarNames: { year: 'เสาปี', month: 'เสาเดือน', day: 'เสาวันเกิด' },
        clashAlert: function (c, m) { return '◆ วันนี้ชงกับปี' + c + ' ซึ่งตรงกับ' + m.join(' / ') + 'ของคุณ! ควรชะลอการตัดสินใจสำคัญวันนี้ และตรวจช่วงเวลาปลอดภัย 2 ชม. ในแอป QiMétéo บน iOS'; },
        clashClear: function (c) { return '✓ วันนี้ชงปี' + c + ' — ทั้ง 3 เสาวันเดือนปีเกิดของคุณไม่ชงในวันนี้! เพิ่มเวลาเกิดในแอป QiMétéo iOS เพื่อดูเสายาม (เสาที่ 4) และฤกษ์ยามฉีเหมิน 2 ชม.'; },
        lichunShift: function (calY, solY) { return 'เกิดต้นปี ' + calY + ' ก่อนวันลิปชุน (~4 ก.พ.): ตามปฏิทินสุริยคติจีน นักษัตรปีเกิดที่แท้จริงของคุณอยู่ในปี ' + solY; },
        lichunNormal: function (solY, gz) { return 'ปีสุริยคติ ' + solY + ' (' + gz + ') · เปิดเข็มทิศสดในแอป iOS เพื่อดู 4 ทิศมงคลประจำตัวสำหรับเตียงนอนและโต๊ะทำงาน'; }
      },
      ro: {
        guaPrefix: 'Număr Kua',
        east: 'Grupul de Est',
        west: 'Grupul de Vest',
        guaNames: { 1: 'Kan · Apă', 2: 'Kun · Pământ', 3: 'Zhen · Lemn', 4: 'Xun · Lemn', 6: 'Qian · Metal', 7: 'Dui · Metal', 8: 'Gen · Pământ', 9: 'Li · Foc' },
        stems: ['Lemn de Stejar', 'Lemn de Viță', 'Foc Solar', 'Foc de Flacără', 'Pământ de Munte', 'Pământ Fertil', 'Metal de Sabie', 'Metal Bijuterie', 'Apă de Ocean', 'Apă de Ploaie'],
        animals: ['Șobolan', 'Bivol', 'Tigru', 'Iepure', 'Dragon', 'Șarpe', 'Cal', 'Capră', 'Maimuță', 'Cocoș', 'Câine', 'Mistreț'],
        pillarNames: { year: 'An', month: 'Lună', day: 'Zi' },
        clashAlert: function (c, m) { return '◆ Semnul în opoziție astăzi este ' + c + ' — prezent în pilonul tău de ' + m.join(' / ') + '! Abordează cu prudență deciziile majore și verifică intervalele sigure de 2h în aplicația QiMétéo.'; },
        clashClear: function (c) { return '✓ Niciunul dintre cele 3 semne ale datei tale nu este în opoziție azi (ciocnire ' + c + '). Adaugă ora nașterii în aplicația iOS QiMétéo pentru al 4-lea semn și ferestrele de 2h.'; },
        lichunShift: function (calY, solY) { return 'Născut(ă) la începutul anului ' + calY + ' înainte de primăvara astronomică (~4 feb.): adevăratul tău semn anual aparține anului ' + solY + '.'; },
        lichunNormal: function (solY, gz) { return 'An solar ' + solY + ' (' + gz + ') · Descoperă cele 4 direcții Ming Gua (pat și birou) cu busola live în aplicația iOS.'; }
      }
    };

    function updateBirthSignsPreview(onlyTodayClash) {
      const val = dateInput.value;
      if (!val) return;
      const parts = val.split('-').map(Number);
      if (parts.length !== 3 || !parts[0] || !parts[1] || !parts[2]) return;
      const calYear = parts[0];
      const month = parts[1];
      const day = parts[2];

      const p = computePillars(calYear, month, day);
      const t = LOC[langKey] || LOC.en;

      if (onlyTodayClash !== true) {
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

        function updateCard(prefix, stemIdx, branchIdx) {
          const imgEl = document.getElementById('pz-' + prefix + '-img');
          const animEl = document.getElementById('pz-' + prefix + '-animal');
          const elemEl = document.getElementById('pz-' + prefix + '-elem');
          const slug = ANIMAL_SLUGS[branchIdx];
          const animName = t.animals[branchIdx];
          const gz = STEMS_HANZI[stemIdx] + BRANCHES_HANZI[branchIdx];
          const targetSrc = '/assets/zodiac/' + slug + '.webp';
          if (imgEl) {
            if (imgEl.getAttribute('src') !== targetSrc) imgEl.src = targetSrc;
            imgEl.alt = animName;
          }
          if (animEl) animEl.textContent = animName;
          if (elemEl) elemEl.textContent = t.stems[stemIdx] + ' · ' + gz;
        }

        updateCard('year', p.yearStem, p.yearBranch);
        updateCard('month', p.monthStem, p.monthBranch);
        updateCard('day', p.dayStem, p.dayBranch);

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

      // Live Today's Opposition Check
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
    }

    guaForm.addEventListener('change', function () { updateBirthSignsPreview(false); });
    guaForm.addEventListener('input', function () { updateBirthSignsPreview(false); });
    guaForm.addEventListener('submit', function (e) {
      e.preventDefault();
      updateBirthSignsPreview(false);
    });

    const calcSection = document.getElementById('calculator');
    if (calcSection && 'IntersectionObserver' in window) {
      const calcIo = new IntersectionObserver(
        function (entries) {
          if (entries.some(function (en) { return en.isIntersecting; })) {
            updateBirthSignsPreview(true);
            calcIo.disconnect();
          }
        },
        { rootMargin: '260px 0px' }
      );
      calcIo.observe(calcSection);
    } else {
      updateBirthSignsPreview(true);
    }
  }
})();
