/**
 * QiMétéo Official Website — Interactive Engine
 * - Bilingual Switcher (FR / EN)
 * - 12 Chinese Zodiac Interactive Energy Simulator
 * - Live Date Display & Compass Widget
 * - Mobile Navigation Drawer
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. BILINGUAL DICTIONARY (FR / EN)
  // =========================================================================
  const i18n = {
    fr: {
      nav_concept: "Le Concept",
      nav_simulator: "12 Signes",
      nav_features: "Créneaux d'Or",
      nav_duo: "Mode Duo",
      nav_pricing: "Pass PRO",
      cta_dl_top: "Télécharger sur",

      hero_chip: "SAGESSE MILLÉNAIRE ORIENTALE • SIMPLE EN 3 SECONDES",
      hero_title_1: "COMME LA MÉTÉO,",
      hero_title_2: "MAIS POUR VOS DÉCISIONS.",
      hero_desc: "Comme vous regardez la météo avant de sortir pour savoir comment vous habiller, regardez QiMétéo chaque matin pour savoir si la journée est favorable à vos projets ! Feu Vert, Orange ou Rouge en 3 secondes.",
      hero_btn_sub: "Téléchargement Gratuit",
      hero_btn_main: "Obtenir QiMétéo",
      hero_btn_discover: "Découvrir le Fonctionnement",

      hero_pill_1: "Feu Vert (Porteur) / Orange / Rouge",
      hero_pill_2: "Créneaux d'Or de 2 Heures",
      hero_pill_3: "Boussole d'Orientation",

      concept_badge: "LA MÉTÉO DE VOS JOURNÉES",
      concept_title: "FEU VERT, ORANGE OU ROUGE EN 3 SECONDES",
      concept_desc: "Pas besoin d'être expert en astrologie ou en Feng Shui. QiMétéo traduit la sagesse millénaire des calendriers orientaux en repères concrets pour agir avec confiance.",

      green_title: "FEU VERT — Journée Porteuse",
      green_desc: "Le moment idéal pour signer un bail ou un contrat, faire un achat important, demander une promotion, lancer un projet clé ou déclarer votre flamme.",
      green_tag: "Action & Lancement",

      orange_title: "FEU ORANGE — Journée Calme",
      orange_desc: "Parfait pour avancer tranquillement sur votre quotidien, ranger, trier, faire le point et préparer vos prochains dossiers sans pression inutile.",
      orange_tag: "Préparation & Rangement",

      red_title: "FEU ROUGE — Journée de Prudence",
      red_desc: "Laissez passer l'orage sans culpabilité. Évitez les sujets qui fâchent, prenez soin de vous et reportez les décisions risquées au lendemain.",
      red_tag: "Prudence & Récupération",

      sim_badge: "TESTEZ VOTRE SIGNE CHINOIS",
      sim_title: "DÉCOUVREZ L'ÉNERGIE DE VOTRE SIGNE AUJOURD'HUI",
      sim_desc: "Sélectionnez votre animal du zodiaque pour simuler la lecture du jour selon les 12 branches terrestres traditionnelles :",

      feat_badge: "PRÉCISION STRATÉGIQUE",
      feat_title: "LA BONNE HEURE & LE BON CÔTÉ OÙ S'ASSEOIR",
      feat_desc: "Vous avez un coup de fil important, un entretien, un examen ou une négociation ? Ne laissez rien au hasard.",

      feat_1_title: "Créneaux d'Or de 2 Heures",
      feat_1_desc: "Dans la journée, l'énergie fluctue toutes les deux heures (les 12 doubles heures chinoises). QiMétéo calcule précisément vos fenêtres de chance maximale pour caler vos rendez-vous cruciaux.",

      feat_2_title: "Boussole de Placement Intégrée",
      feat_2_desc: "Selon le Qi Men Dun Jia, s'asseoir le dos orienté vers le bon secteur cardinal vous positionne dans le flux énergétique porteur. Ouvrez la boussole en direct pour orienter votre chaise en 2 secondes.",

      feat_3_title: "Planificateur 45 Jours par Projet",
      feat_3_desc: "Filtrez en 1 clic : Travail & Contrat, Argent & Achat, Famille & Amour, Santé, Voyage ou Déménagement. Trouvez la meilleure date du mois et synchronisez-la d'un geste avec votre Calendrier Apple.",

      duo_badge: "HARMONIE RELATIONNELLE",
      duo_title: "COMPATIBILITÉ & AFFINITÉ À DEUX (MODE DUO)",
      duo_desc: "Comparez votre date de naissance avec celle de votre conjoint(e), d'un enfant, d'un associé ou d'un collègue. Comprenez vos dynamiques sans jugement et trouvez les jours propices pour discuter, décider ou voyager ensemble.",

      duo_p1_strong: "Compréhension Mutuelle :",
      duo_p1_desc: "Découvrez vos traits de caractère respectifs expliqués en langage clair et bienveillant.",
      duo_p2_strong: "Calendrier Commun :",
      duo_p2_desc: "Identifiez les dates où vos deux énergies sont alignées pour vos projets de couple ou de famille.",
      modes_desc: "Basculable à tout moment : 100% français courant par défaut, ou termes traditionnels complets (8 Déités, Portes, Étoiles, 12 Officiers Tong Shu et 4 Piliers BaZi) pour les passionnés.",

      price_badge: "TRANSPARENT & FAMILIAL",
      price_title: "COMMENCEZ GRATUITEMENT, DÉBLOQUEZ TOUT EN FAMILLE",
      price_desc: "La météo du jour et le premier créneau d'or sont toujours gratuits. Passez à QiMétéo PRO pour planifier sur 45 jours et en faire profiter toute votre famille.",

      plan_free_name: "DÉCOUVERTE GRATUITE",
      plan_free_sub: "Pour toujours",
      plan_free_desc: "L'essentiel pour connaître son feu du jour chaque matin au réveil.",
      pfree_1: "Score du Jour & Feu Vert/Orange/Rouge",
      pfree_2: "Premier Créneau d'Or de la Journée",
      pfree_3: "Boussole d'Orientation de Base",
      pfree_4: "Widgets Écran d'Accueil iOS",
      pfree_5: "Planificateur Horizon 45 Jours",
      pfree_6: "Mode Duo & Compatibilité Illimitée",
      btn_free: "Télécharger Gratuitement",

      plan_vip_ribbon: "OFFRE RECOMMANDÉE • 7 JOURS GRATUITS",
      plan_vip_name: "PASS ANNUEL VIP PRO",
      plan_vip_desc: "Seulement 4,16 €/mois. Partage Familial Apple inclus pour jusqu'à 6 membres de la famille.",
      pvip_1: "Planificateur 45 Jours par Projet",
      pvip_2: "Tous les Créneaux d'Or de la Journée",
      pvip_3: "Export 1-Clic dans le Calendrier Apple",
      pvip_4: "Mode Duo & Affinité à Deux Illimité",
      pvip_5: "Mode Expert Complet (Qi Men, BaZi)",
      pvip_6: "Partage Familial Apple Inclus (6 pers.)",
      btn_vip: "Essai Gratuit de 7 Jours",

      plan_month_name: "PASS MENSUEL PRO",
      plan_month_desc: "Idéal pour préparer un mois clé sans engagement de durée.",
      pmonth_1: "Accès Intégral au Planificateur 45J",
      pmonth_2: "Tous les Créneaux d'Or de la Journée",
      pmonth_3: "Mode Duo & Compatibilité",
      pmonth_4: "Sans Engagement (Résiliable à tout moment)",
      pmonth_5: "Partage Familial Apple Inclus",
      btn_month: "Choisir le Pass Mensuel",

      priv_title: "100% On-Device : Vos Données Personnelles Restent Chez Vous",
      priv_desc: "Votre date de naissance, vos proches et vos ressentis sont traités exclusivement sur votre iPhone ou iPad. Aucune information n'est revendue à des publicitaires ni analysée sur des serveurs distants.",
      priv_link: "Politique de Confidentialité →",

      faq_badge: "FAQ",
      faq_title: "QUESTIONS FRÉQUENTES",
      faq_1_q: "Sur quoi sont fondés les calculs de QiMétéo ?",
      faq_1_a: "QiMétéo repose sur la convergence des deux plus grands systèmes calendaires métaphysiques de l'Asie orientale : le Tong Shu (calendrier impérial chinois des 12 Officiers) et le Qi Men Dun Jia (l'art stratégique impérial de l'espace et du temps). Ces calculs sont pondérés par votre propre date de naissance (4 Piliers BaZi).",
      faq_2_q: "Dois-je connaître l'astrologie chinoise pour m'en servir ?",
      faq_2_a: "Non, absolument pas ! C'est la raison d'être de QiMétéo : rendre ces sagesses immédiatement utiles en 3 secondes. Vous avez un Feu Vert, Orange ou Rouge, vos heures clés et des conseils rédigés en français courant bienveillant.",
      faq_3_q: "Comment fonctionne la boussole ?",
      faq_3_a: "La boussole intégrée indique la direction vers laquelle vous adosser (votre dos au secteur porteur). Lorsque vous êtes en entretien ou à votre bureau, vous orienter dos à la bonne direction permet selon le Qi Men Dun Jia de bénéficier du soutien de la structure énergétique du moment.",
      faq_4_q: "Puis-je partager mon abonnement avec ma famille ?",
      faq_4_a: "Oui ! L'abonnement QiMétéo PRO intègre le Partage Familial Apple : jusqu'à 6 membres de votre groupe familial peuvent en profiter sans aucun coût supplémentaire.",

      final_title: "PRÊT À DONNER LE MEILLEUR TEMPO À VOS PROJETS ?",
      final_desc: "Installez QiMétéo dès aujourd'hui sur votre iPhone ou iPad et démarrez chaque journée avec clarté et sérénité.",
      final_btn_sub: "Disponible sur iPhone & iPad",
      final_btn_main: "Télécharger Gratuitement sur l'App Store",

      footer_bio: "La météo de vos journées : sélection de dates fastes, créneaux d'or et boussole stratégique fondés sur le Tong Shu et le Qi Men Dun Jia. Développé en France par Xavier Larrodé.",
      footer_app: "L'Application",
      footer_legal: "Légal & Contact",
      footer_privacy: "Politique de Confidentialité",
      footer_terms: "Conditions Générales d'Utilisation",
      footer_contact: "Contact & Support"
    },

    en: {
      nav_concept: "The Concept",
      nav_simulator: "12 Signs",
      nav_features: "Golden Hours",
      nav_duo: "Duo Mode",
      nav_pricing: "PRO Pass",
      cta_dl_top: "Download on",

      hero_chip: "ANCIENT WISDOM • ACTIONABLE IN 3 SECONDS • 100% LOCAL",
      hero_title_1: "LIKE THE WEATHER,",
      hero_title_2: "BUT FOR YOUR DECISIONS.",
      hero_desc: "Just as you check the weather before dressing up, check QiMétéo each morning to see if the day supports your projects! Green, Amber or Red light in 3 seconds.",
      hero_btn_sub: "Free Download",
      hero_btn_main: "Get QiMétéo",
      hero_btn_discover: "Discover How It Works",

      hero_pill_1: "Green Light (Go) / Amber / Red",
      hero_pill_2: "2-Hour Golden Windows",
      hero_pill_3: "Strategic Qi Compass",

      concept_badge: "WEATHER FOR YOUR DAYS",
      concept_title: "GREEN, AMBER OR RED IN 3 SECONDS",
      concept_desc: "No need to be a Feng Shui or astrology expert. QiMétéo translates centuries of Eastern calendar wisdom into clear everyday guidance so you take action with confidence.",

      green_title: "GREEN LIGHT — High Alignment Day",
      green_desc: "Ideal day to sign contracts, make major purchases, ask for a raise, launch projects or express feelings.",
      green_tag: "Action & Launch",

      orange_title: "AMBER LIGHT — Calm & Steady Day",
      orange_desc: "Perfect for routine progress, organizing, decluttering and preparing upcoming plans without pressure.",
      orange_tag: "Prep & Organizing",

      red_title: "RED LIGHT — Prudence & Rest",
      red_desc: "Let the storm pass with peace of mind. Avoid sensitive conflicts, recharge and postpone high-stakes moves.",
      red_tag: "Caution & Rest",

      sim_badge: "TEST YOUR CHINESE ZODIAC",
      sim_title: "CHECK YOUR ANIMAL'S DAILY ALIGNMENT",
      sim_desc: "Choose your zodiac animal to preview today's reading according to the traditional 12 Earthly Branches:",

      feat_badge: "STRATEGIC PRECISION",
      feat_title: "THE RIGHT HOUR & THE RIGHT DIRECTION TO SIT",
      feat_desc: "Crucial call, job interview, exam or high-stakes meeting? Leave nothing to chance.",

      feat_1_title: "2-Hour Golden Windows",
      feat_1_desc: "Throughout the day, energy shifts across 12 two-hour double hours. QiMétéo highlights your exact lucky windows to schedule key milestones.",

      feat_2_title: "Integrated Qi Compass",
      feat_2_desc: "According to Qi Men Dun Jia, sitting with your back to the auspicious sector aligns you with positive energy flow. Open the compass to position yourself in seconds.",

      feat_3_title: "45-Day Horizon Planner",
      feat_3_desc: "Filter by goal: Career & Contracts, Wealth, Family & Love, Health, Travel or Moving. Find your best days and sync to Apple Calendar with one tap.",

      duo_badge: "RELATIONSHIP HARMONY",
      duo_title: "PAIR COMPATIBILITY & DUAL MODE",
      duo_desc: "Compare birthdates with your partner, child, business associate or friend. Understand your mutual dynamics and find optimal shared dates.",

      duo_p1_strong: "Mutual Understanding:",
      duo_p1_desc: "Discover each other's core traits explained in clear, constructive language.",
      duo_p2_strong: "Shared Calendar:",
      duo_p2_desc: "Pinpoint dates when both of your energies align for shared ventures and trips.",
      modes_desc: "Switch anytime: Simple plain language by default, or full traditional metaphysics (8 Deities, Gates, Stars, 12 Officers, BaZi) for enthusiasts.",

      price_badge: "CLEAR & FAMILY SHARING",
      price_title: "START FREE, UNLOCK EVERYTHING FOR YOUR FAMILY",
      price_desc: "Daily reading and first golden window are always free. Upgrade to QiMétéo PRO for 45-day horizons and Apple Family Sharing.",

      plan_free_name: "FREE STARTER",
      plan_free_sub: "Forever Free",
      plan_free_desc: "Essential daily alignment every morning upon waking.",
      pfree_1: "Daily Score & Green/Amber/Red Indicator",
      pfree_2: "First 2-Hour Golden Window of the Day",
      pfree_3: "Basic Alignment Compass",
      pfree_4: "iOS Lock & Home Screen Widgets",
      pfree_5: "45-Day Project Planner Horizon",
      pfree_6: "Duo Relationship Mode",
      btn_free: "Download Free",

      plan_vip_ribbon: "RECOMMENDED • 7-DAY FREE TRIAL",
      plan_vip_name: "VIP PRO ANNUAL PASS",
      plan_vip_desc: "Only €4.16/month. Apple Family Sharing included for up to 6 family members.",
      pvip_1: "45-Day Horizon Planner by Project",
      pvip_2: "All Golden Windows of the Day",
      pvip_3: "1-Tap Sync to Apple Calendar",
      pvip_4: "Unlimited Duo Relationship Compatibility",
      pvip_5: "Full Expert Mode (Qi Men, BaZi)",
      pvip_6: "Apple Family Sharing Included (6 people)",
      btn_vip: "Start 7-Day Free Trial",

      plan_month_name: "PRO MONTHLY PASS",
      plan_month_desc: "Ideal for planning a pivotal month with no long-term commitment.",
      pmonth_1: "Full 45-Day Horizon Access",
      pmonth_2: "All Daily Golden Windows",
      pmonth_3: "Duo Compatibility Mode",
      pmonth_4: "No Commitment (Cancel anytime)",
      pmonth_5: "Apple Family Sharing Included",
      btn_month: "Choose Monthly Pass",

      priv_title: "100% On-Device: Your Personal Data Stays with You",
      priv_desc: "Your birth date, family profiles and personal notes are computed strictly on your iPhone or iPad. Never sold, never uploaded to remote servers.",
      priv_link: "Read Privacy Policy →",

      faq_badge: "FAQ",
      faq_title: "FREQUENTLY ASKED QUESTIONS",
      faq_1_q: "What systems power QiMétéo's calculations?",
      faq_1_a: "QiMétéo is powered by the convergence of the two greatest classical Eastern calendar sciences: the Tong Shu (Imperial 12 Officers calendar) and Qi Men Dun Jia (the ancient art of time and space navigation), personalized by your BaZi Four Pillars.",
      faq_2_q: "Do I need to know Chinese astrology to use it?",
      faq_2_a: "Not at all! That's the entire purpose of QiMétéo: making this wisdom effortless in 3 seconds with simple Green, Amber or Red lights, golden hours, and friendly advice.",
      faq_3_q: "How does the compass work?",
      faq_3_a: "The compass tells you which direction to sit with your back to. Facing your back to the auspicious sector taps into the supportive energy structure of the hour.",
      faq_4_q: "Can I share my subscription with my family?",
      faq_4_a: "Yes! QiMétéo PRO includes Apple Family Sharing for up to 6 members at no extra cost.",

      final_title: "READY TO GIVE YOUR PROJECTS THE BEST TIMING?",
      final_desc: "Install QiMétéo today on your iPhone or iPad and start every morning with clarity and confidence.",
      final_btn_sub: "Available on iPhone & iPad",
      final_btn_main: "Download Free on the App Store",

      footer_bio: "The weather for your decisions: auspicious day selection, golden windows and strategic compass powered by Tong Shu and Qi Men Dun Jia. Built in France by Xavier Larrodé.",
      footer_app: "The App",
      footer_legal: "Legal & Support",
      footer_privacy: "Privacy Policy",
      footer_terms: "Terms of Service",
      footer_contact: "Contact & Support"
    }
  };

  // =========================================================================
  // 2. 12 ZODIAC DATABASE
  // =========================================================================
  const zodiacData = {
    rat: {
      name_fr: "Rat (子)",
      name_en: "Rat (Zi)",
      elem_fr: "Élément Eau • Yang",
      elem_en: "Water Element • Yang",
      status_fr: "Feu Vert (85%)",
      status_en: "Green Light (85%)",
      class: "status-green",
      qual_fr: "Clarté Mentale & Opportunités",
      qual_en: "Mental Clarity & Opportunity",
      text_fr: "Votre vivacité d'esprit fait des merveilles aujourd'hui. Vos idées sont percutantes et vos échanges fluides. Foncez pour pitcher une idée ou débloquer un dossier en suspens.",
      text_en: "Your sharp intuition is at its peak today. Your ideas resonate and communication flows effortlessly. Great day to pitch an initiative or resolve pending matters.",
      slot: "09h00 - 11h00",
      dir_fr: "Dos au Nord (0°)",
      dir_en: "Back to North (0°)",
      ally: "Dragon & Singe"
    },
    ox: {
      name_fr: "Bœuf (丑)",
      name_en: "Ox (Chou)",
      elem_fr: "Élément Terre • Yin",
      elem_en: "Earth Element • Yin",
      status_fr: "Feu Orange (70%)",
      status_en: "Amber Light (70%)",
      class: "status-orange",
      qual_fr: "Persévérance & Rigueur",
      qual_en: "Steadfast Focus & Consolidation",
      text_fr: "Une journée calme et structurante. Moins propice aux coups d'éclat mais idéale pour bâtir des fondations solides, finaliser des tâches administratives et avancer avec sérénité.",
      text_en: "A steady, structured day. Best suited for laying solid groundwork, auditing details, and methodically ticking off priorities without haste.",
      slot: "13h00 - 15h00",
      dir_fr: "Dos au Nord-Est (30°)",
      dir_en: "Back to North-East (30°)",
      ally: "Serpent & Coq"
    },
    tiger: {
      name_fr: "Tigre (寅)",
      name_en: "Tiger (Yin)",
      elem_fr: "Élément Bois • Yang",
      elem_en: "Wood Element • Yang",
      status_fr: "Feu Vert (90%)",
      status_en: "Green Light (90%)",
      class: "status-green",
      qual_fr: "Audace & Rayonnement",
      qual_en: "Bold Ambition & Influence",
      text_fr: "Votre charisme naturel est décuplé. C'est le moment de prendre le leadership, de signer des accords importants et d'affirmer votre vision avec autorité bienveillante.",
      text_en: "Your natural charisma is amplified. Excellent day to lead, formalize agreements, and present your vision with authentic confidence.",
      slot: "11h00 - 13h00",
      dir_fr: "Dos à l'Est (90°)",
      dir_en: "Back to East (90°)",
      ally: "Cheval & Chien"
    },
    rabbit: {
      name_fr: "Lièvre (卯)",
      name_en: "Rabbit (Mao)",
      elem_fr: "Élément Bois • Yin",
      elem_en: "Wood Element • Yin",
      status_fr: "Feu Orange (65%)",
      status_en: "Amber Light (65%)",
      class: "status-orange",
      qual_fr: "Diplomatie & Douceur",
      qual_en: "Diplomacy & Inner Balance",
      text_fr: "Préférez la négociation douce au passage en force. Prenez du recul sur les tensions extérieures et consacrez du temps à vos proches et à votre bien-être personnel.",
      text_en: "Favor gentle diplomacy over forced outcomes. Take a step back from external noise and nurture personal well-being and harmony at home.",
      slot: "15h00 - 17h00",
      dir_fr: "Dos au Sud-Est (120°)",
      dir_en: "Back to South-East (120°)",
      ally: "Cochon & Chèvre"
    },
    dragon: {
      name_fr: "Dragon (辰)",
      name_en: "Dragon (Chen)",
      elem_fr: "Élément Terre • Yang",
      elem_en: "Earth Element • Yang",
      status_fr: "Feu Vert (88%)",
      status_en: "Green Light (88%)",
      class: "status-green",
      qual_fr: "Journée d'Épanouissement",
      qual_en: "High Fulfillment & Power",
      text_fr: "Les configurations astrales mettent en lumière vos initiatives. Votre présence est charismatique et convaincante. C'est le moment d'oser aborder les sujets majeurs et d'officialiser vos accords.",
      text_en: "Cosmic configurations strongly spotlight your moves. Your presence is magnetic and persuasive. The perfect moment to tackle major milestones.",
      slot: "15h00 - 17h00",
      dir_fr: "Dos au Nord-Est (72°)",
      dir_en: "Back to North-East (72°)",
      ally: "Singe & Coq"
    },
    snake: {
      name_fr: "Serpent (巳)",
      name_en: "Snake (Si)",
      elem_fr: "Élément Feu • Yin",
      elem_en: "Fire Element • Yin",
      status_fr: "Feu Vert (82%)",
      status_en: "Green Light (82%)",
      class: "status-green",
      qual_fr: "Intuition Stratégique",
      qual_en: "Strategic Intuition",
      text_fr: "Votre perspicacité détecte ce que les autres ne voient pas. Excellente journée pour analyser des contrats, négocier des prix ou résoudre un problème complexe en coulisses.",
      text_en: "Your insight uncovers nuances others miss. Ideal day to analyze agreements, negotiate terms, or craft a stealthy long-term plan.",
      slot: "17h00 - 19h00",
      dir_fr: "Dos au Sud (180°)",
      dir_en: "Back to South (180°)",
      ally: "Bœuf & Coq"
    },
    horse: {
      name_fr: "Cheval (午)",
      name_en: "Horse (Wu)",
      elem_fr: "Élément Feu • Yang",
      elem_en: "Fire Element • Yang",
      status_fr: "Feu Rouge (45%)",
      status_en: "Red Light (45%)",
      class: "status-red",
      qual_fr: "Prudence & Canalisation",
      qual_en: "Patience & Restraint",
      text_fr: "L'énergie est impulsive aujourd'hui. Évitez les réactions à chaud, les achats impulsifs et les confrontations directes. Laissez passer 24 heures avant d'arbitrer.",
      text_en: "Energies run reactive today. Steer clear of impulsive decisions, heated debates and hasty spending. Give decisions 24 hours to settle.",
      slot: "07h00 - 09h00",
      dir_fr: "Dos au Nord-Ouest (315°)",
      dir_en: "Back to North-West (315°)",
      ally: "Tigre & Chien"
    },
    goat: {
      name_fr: "Chèvre (未)",
      name_en: "Goat (Wei)",
      elem_fr: "Élément Terre • Yin",
      elem_en: "Earth Element • Yin",
      status_fr: "Feu Orange (68%)",
      status_en: "Amber Light (68%)",
      class: "status-orange",
      qual_fr: "Créativité & Bienveillance",
      qual_en: "Creativity & Connection",
      text_fr: "Une journée chaleureuse, idéale pour les arts, l'écriture, le design ou pour passer un moment privilégié avec des personnes qui vous ressourcent en confiance.",
      text_en: "A gentle, nurturing day suited for creative writing, artistic projects and quality time with supportive friends.",
      slot: "11h00 - 13h00",
      dir_fr: "Dos au Sud-Ouest (210°)",
      dir_en: "Back to South-West (210°)",
      ally: "Cochon & Lièvre"
    },
    monkey: {
      name_fr: "Singe (申)",
      name_en: "Monkey (Shen)",
      elem_fr: "Élément Métal • Yang",
      elem_en: "Metal Element • Yang",
      status_fr: "Feu Vert (92%)",
      status_en: "Green Light (92%)",
      class: "status-green",
      qual_fr: "Ingéniosité & Déblocage",
      qual_en: "Breakthroughs & Wit",
      text_fr: "Tous les voyants sont au vert ! Vous trouvez des solutions inédites là où les autres bloquent. Les signatures et les transactions financières sont grandement favorisées.",
      text_en: "Top tier alignment today! You unlock solutions where others get stuck. Highly auspicious for contracts, transactions and bold launches.",
      slot: "15h00 - 17h00",
      dir_fr: "Dos à l'Ouest (270°)",
      dir_en: "Back to West (270°)",
      ally: "Rat & Dragon"
    },
    rooster: {
      name_fr: "Coq (酉)",
      name_en: "Rooster (You)",
      elem_fr: "Élément Métal • Yin",
      elem_en: "Metal Element • Yin",
      status_fr: "Feu Vert (86%)",
      status_en: "Green Light (86%)",
      class: "status-green",
      qual_fr: "Précision & Reconnaissance",
      qual_en: "Precision & Recognition",
      text_fr: "Votre professionnalisme fait l'unanimité. Vos arguments portent avec force et élégance. Journée favorable pour des entretiens, des présentations ou des bilans.",
      text_en: "Your competence is recognized today. Communication is sharp and well received. Excellent for formal reviews, presentations and pitches.",
      slot: "09h00 - 11h00",
      dir_fr: "Dos au Nord-Est (45°)",
      dir_en: "Back to North-East (45°)",
      ally: "Bœuf & Serpent"
    },
    dog: {
      name_fr: "Chien (戌)",
      name_en: "Dog (Xu)",
      elem_fr: "Élément Terre • Yang",
      elem_en: "Earth Element • Yang",
      status_fr: "Feu Orange (72%)",
      status_en: "Amber Light (72%)",
      class: "status-orange",
      qual_fr: "Fidélité & Protection",
      qual_en: "Loyalty & Steadfastness",
      text_fr: "Une journée pour consolider vos alliances de confiance. Évitez les risques spéculatifs mais investissez dans vos relations humaines et vos projets à long terme.",
      text_en: "A day to strengthen genuine partnerships. Avoid speculative risks and focus on loyalty, team support, and deep work.",
      slot: "17h00 - 19h00",
      dir_fr: "Dos au Sud (180°)",
      dir_en: "Back to South (180°)",
      ally: "Tigre & Cheval"
    },
    pig: {
      name_fr: "Cochon (亥)",
      name_en: "Pig (Hai)",
      elem_fr: "Élément Eau • Yin",
      elem_en: "Water Element • Yin",
      status_fr: "Feu Vert (84%)",
      status_en: "Green Light (84%)",
      class: "status-green",
      qual_fr: "Abondance & Sérénité",
      qual_en: "Abundance & Harmony",
      text_fr: "Atmosphère généreuse et propice aux accords mutuellement gagnants. C'est une journée d'accueil, de partage et de satisfaction dans ce que vous entreprenez.",
      text_en: "A generous, warm atmosphere for win-win agreements. Excellent day for celebration, collaboration, and reaping rewards from past efforts.",
      slot: "13h00 - 15h00",
      dir_fr: "Dos à l'Est (90°)",
      dir_en: "Back to East (90°)",
      ally: "Lièvre & Chèvre"
    }
  };

  let currentLang = 'fr';
  let currentZodiac = 'dragon';

  // =========================================================================
  // 3. LANGUAGE SWITCHER
  // =========================================================================
  function initLanguage() {
    const saved = localStorage.getItem('qimeteo_lang');
    if (saved && (saved === 'fr' || saved === 'en')) {
      currentLang = saved;
    } else {
      const browserLang = (navigator.language || 'fr').toLowerCase();
      currentLang = browserLang.startsWith('en') ? 'en' : 'fr';
    }
    applyLanguage(currentLang);

    const toggleBtn = document.getElementById('lang-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'fr' ? 'en' : 'fr';
        localStorage.setItem('qimeteo_lang', currentLang);
        applyLanguage(currentLang);
        renderCurrentZodiac();
      });
    }
  }

  function applyLanguage(lang) {
    document.documentElement.lang = lang;
    const flagEl = document.getElementById('lang-flag');
    const codeEl = document.getElementById('lang-code');

    if (flagEl) flagEl.textContent = lang === 'fr' ? '🇫🇷' : '🇬🇧';
    if (codeEl) codeEl.textContent = lang.toUpperCase();

    const dict = i18n[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    renderCurrentZodiac();
  }

  // =========================================================================
  // 4. 12 ZODIAC SIMULATOR
  // =========================================================================
  function initZodiacSimulator() {
    const buttons = document.querySelectorAll('.zodiac-btn');
    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        buttons.forEach((b) => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        currentZodiac = btn.getAttribute('data-zodiac') || 'dragon';
        renderCurrentZodiac();
      });
    });
  }

  function renderCurrentZodiac() {
    const z = zodiacData[currentZodiac];
    if (!z) return;

    const imgEl = document.getElementById('reading-img');
    const titleEl = document.getElementById('reading-title');
    const elemEl = document.getElementById('reading-element');
    const statusEl = document.getElementById('reading-status');
    const qualEl = document.getElementById('reading-quality');
    const textEl = document.getElementById('reading-text');
    const slotEl = document.getElementById('reading-slot');
    const dirEl = document.getElementById('reading-dir');
    const allyEl = document.getElementById('reading-ally');

    if (imgEl) imgEl.src = `assets/zodiac/${currentZodiac}.png`;
    if (titleEl) titleEl.textContent = currentLang === 'fr' ? z.name_fr : z.name_en;
    if (elemEl) elemEl.textContent = currentLang === 'fr' ? z.elem_fr : z.elem_en;

    if (statusEl) {
      statusEl.textContent = currentLang === 'fr' ? z.status_fr : z.status_en;
      statusEl.className = `reading-status-indicator ${z.class}`;
    }

    if (qualEl) qualEl.textContent = currentLang === 'fr' ? z.qual_fr : z.qual_en;
    if (textEl) textEl.textContent = currentLang === 'fr' ? z.text_fr : z.text_en;
    if (slotEl) slotEl.textContent = `${z.slot}`;
    if (dirEl) dirEl.textContent = currentLang === 'fr' ? z.dir_fr : z.dir_en;
    if (allyEl) allyEl.textContent = z.ally;
  }

  // =========================================================================
  // 5. DATE & TIME AUTO-UPDATE
  // =========================================================================
  function initDateHeader() {
    const header = document.getElementById('live-date-header');
    if (header) {
      const now = new Date();
      const options = { day: 'numeric', month: 'long' };
      header.textContent = now.toLocaleDateString(currentLang === 'fr' ? 'fr-FR' : 'en-US', options);
    }
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

  // =========================================================================
  // 6. MOBILE MENU TOGGLE
  // =========================================================================
  function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-toggle');
    const drawer = document.getElementById('mobile-drawer');

    if (btn && drawer) {
      btn.addEventListener('click', () => {
        drawer.classList.toggle('open');
      });
      drawer.querySelectorAll('.mobile-nav-link').forEach((link) => {
        link.addEventListener('click', () => {
          drawer.classList.remove('open');
        });
      });
    }
  }

  // DOM Ready
  document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initZodiacSimulator();
    initDateHeader();
    initMobileMenu();
  });

})();
