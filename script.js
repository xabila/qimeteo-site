/**
 * QiMétéo Official Website — Interactive Showcase
 * - Bilingual Switcher (FR / EN)
 * - 12 Chinese Zodiac Interactive Preview (100% static showcase data — zero calculation IP exposed)
 * - Live Date Header & Mobile Navigation Drawer
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
      nav_features: "Fonctionnalités",
      nav_duo: "Synergie & Feng Shui",
      nav_pricing: "Pass PRO",
      cta_dl_top: "Télécharger sur",

      hero_chip: "QI MEN DUN JIA • TONG SHU • FENG SHUI MING GUA",
      hero_title_1: "COMME LA MÉTÉO,",
      hero_title_2: "MAIS POUR VOS DÉCISIONS.",
      hero_desc: "Comme vous regardez la météo avant de sortir, consultez QiMétéo chaque matin pour savoir si la journée est porteuse pour lancer un projet, signer un contrat ou négocier : Feu Vert, Orange ou Rouge, vos 2 créneaux stratégiques de 2h et votre boussole d'orientation.",
      hero_btn_sub: "Téléchargement Gratuit",
      hero_btn_main: "Obtenir QiMétéo",
      hero_btn_discover: "Découvrir le Fonctionnement",

      hero_pill_1: "Feu Vert (Porteur) / Orange / Rouge",
      hero_pill_2: "2 Créneaux Stratégiques (2h) / Jour",
      hero_pill_3: "Boussole Qi Men & Feng Shui Ming Gua",
      phone_today_badge: "AUJOURD'HUI",

      concept_badge: "LA MÉTÉO DE VOS JOURNÉES",
      concept_title: "FEU VERT, ORANGE OU ROUGE EN 3 SECONDES",
      concept_desc: "Pas besoin d'être expert en astrologie ou en Feng Shui. QiMétéo traduit la sagesse millénaire des calendriers orientaux en repères concrets pour agir au bon moment avec confiance.",

      green_title: "FEU VERT — Journée Porteuse",
      green_desc: "Le moment idéal pour lancer un projet, signer un contrat ou un bail, négocier, faire un achat important ou célébrer une union.",
      green_tag: "Action & Lancement",

      orange_title: "FEU ORANGE — Journée Ciblée",
      orange_desc: "Idéal pour avancer avec méthode, trier, commencer un régime, consulter un médecin ou préparer vos dossiers en utilisant vos 2 créneaux horaires Qi Men.",
      orange_tag: "Préparation & Équilibre",

      red_title: "FEU ROUGE — Journée de Prudence",
      red_desc: "Ne lancez aucun nouveau projet et reportez les engagements risqués. En cas d'obligation, appuyez-vous uniquement sur les 2 créneaux horaires favorables de la journée.",
      red_tag: "Prudence & Recul",

      sim_badge: "APERÇU DES 12 SIGNES",
      sim_title: "DÉCOUVREZ LE PROFIL ÉNERGÉTIQUE DE VOTRE SIGNE",
      sim_desc: "Sélectionnez votre animal du zodiaque pour découvrir un exemple de bulletin quotidien personnalisé (calculé en temps réel sur votre appareil dans l'application QiMétéo) :",
      sim_label_slot: "Exemple de Créneaux (2h) :",
      sim_label_dir: "Orientation Boussole :",
      sim_label_ally: "Alliés d'Affinité :",

      feat_badge: "PRÉCISION STRATÉGIQUE & FENG SHUI",
      feat_title: "TOUT CE QUE QIMÉTÉO FAIT POUR VOUS",
      feat_desc: "Un véritable assistant décisionnel et énergétique dans votre poche, calculé 100% en local sur votre iPhone ou iPad.",

      feat_1_title: "2 Créneaux Stratégiques / Jour (Zéro Négatif)",
      feat_1_desc: "Chaque jour entre 09h et 21h, QiMétéo élimine tout créneau comportant un aspect défavorable pour ne retenir que les 2 meilleures fenêtres de 2h où placer vos appels, signatures et rendez-vous clés.",

      feat_2_title: "Boussole Qi Men (Dos ou Face)",
      feat_2_desc: "Selon le créneau horaire, l'application vous indique dans quelle direction orienter votre fauteuil (0°, 45°, 90°, 135°, 180°, 225°, 270°, 315°) avec la boussole en direct pour vous aligner en 2 secondes.",

      feat_3_title: "Recherche de Dates pour vos 7 Projets",
      feat_3_desc: "Choisissez votre objectif : Lancer un Projet ou Commerce, Signer un Contrat & Encaisser, Mariage & Union, Immobilier & Travaux, Voyage, Médecin & Santé ou Tri & Régime.",

      feat_4_title: "Feng Shui Ming Gua : Maison, Lit & Bureau",
      feat_4_desc: "À partir de votre date de naissance, QiMétéo calcule votre Chiffre Gua (1 à 9) et vous révèle vos 4 bonnes directions dans la maison : où orienter la tête de votre lit (Santé & Sommeil), votre bureau (Vitalité & Concentration) et les secteurs à éviter.",

      feat_5_title: "Audit Intelligent de votre Calendrier Apple",
      feat_5_desc: "QiMétéo analyse vos prochains rendez-vous inscrits dans votre agenda iPhone : si une réunion importante tombe un jour défavorable ou en friction avec votre date de naissance, l'app vous alerte et vous suggère un meilleur créneau.",

      feat_6_title: "Mode Grand Public ou Expert (4 Langues)",
      feat_6_desc: "Basculez à tout moment entre le mode Simple (100% langage courant) et le Mode Expert complet (Qi Men Dun Jia, 12 Officiers Tong Shu, 4 Piliers BaZi). Disponible en Français, Anglais, Espagnol et Chinois.",

      duo_badge: "SYNERGIE À DEUX & FENG SHUI PERSONNEL",
      duo_title: "MODE SYNERGIE (DUO) & BOUSSOLE MAISON MING GUA",
      duo_desc: "Comparez votre profil avec celui de votre conjoint(e), d'un enfant, d'un associé ou d'un client pour trouver vos meilleures dates communes — et harmonisez votre intérieur grâce à votre Chiffre Gua.",

      duo_p1_strong: "Synergie & Dates Communes :",
      duo_p1_desc: "Identifiez vos affinités naturelles entre deux profils et trouvez les meilleures dates communes sur 45 jours pour vos projets à deux.",
      duo_p2_strong: "Astuce Feng Shui — Direction du Lit & du Bureau :",
      duo_p2_desc: "Dormir la tête orientée vers votre direction Santé favorise un sommeil réparateur, tandis que travailler face à votre direction Vitalité soutient votre réussite.",
      modes_desc: "Que vous cherchiez l'heure idéale pour lancer un projet, la date d'une signature ou le bon mur contre lequel adosser votre lit, tout est calculé instantanément sur votre iPhone.",
      duo_card_quote: "« Excellente harmonie naturelle • Dates communes favorables • Chiffre Gua & 4 directions Maison / Lit / Bureau dans votre Profil. »",

      price_badge: "TRANSPARENT & PARTAGE FAMILIAL INCLUS",
      price_title: "AUJOURD'HUI GRATUIT, TOUT DÉBLOQUÉ EN PRO",
      price_desc: "La météo énergétique d'aujourd'hui et ses 2 créneaux horaires stratégiques (2h) sont gratuits. Passez à QiMétéo PRO pour débloquer les prochaines dates de projet, le Feng Shui Ming Gua (lit & maison) et la comparaison à deux.",

      plan_free_name: "DÉCOUVERTE GRATUITE",
      plan_free_sub: "Pour toujours",
      plan_free_desc: "L'essentiel pour consulter la journée d'aujourd'hui et ses 2 créneaux horaires.",
      pfree_1: "Météo d'Aujourd'hui (Feu Vert / Orange / Rouge)",
      pfree_2: "Les 2 Créneaux Stratégiques (2h) d'Aujourd'hui",
      pfree_3: "Boussole d'Orientation pour Aujourd'hui",
      pfree_4: "Widgets Écran d'Accueil iOS",
      pfree_5: "Prochaines dates de Projet & Calendrier 45 Jours (floutés)",
      pfree_6: "Directions Feng Shui Ming Gua Lit/Maison & Synergie Duo (floutés)",
      btn_free: "Télécharger Gratuitement",

      plan_vip_ribbon: "OFFRE RECOMMANDÉE • 7 JOURS GRATUITS",
      plan_vip_name: "PASS ANNUEL VIP PRO",
      plan_vip_desc: "Soit 4,16 €/mois. Partage Familial Apple inclus pour jusqu'à 6 membres de la famille.",
      pvip_1: "Recherche de Dates par Projet (7 intentions) & Horizon 45 Jours",
      pvip_2: "Tous les Créneaux 5★ de la Journée & Audit Calendrier Apple",
      pvip_3: "Feng Shui Ming Gua : Directions Maison, Tête de Lit & Bureau",
      pvip_4: "Mode Synergie (Comparaison à Deux & Dates Communes)",
      pvip_5: "Mode Expert Complet (Qi Men, 12 Officiers, BaZi)",
      pvip_6: "Partage Familial Apple Inclus (jusqu'à 6 proches)",
      btn_vip: "Essai Gratuit de 7 Jours",

      plan_month_name: "PASS MENSUEL PRO",
      plan_month_desc: "Idéal pour planifier un lancement de projet, une signature ou un déménagement sans engagement.",
      pmonth_1: "Recherche de Dates par Projet & Calendrier 45 Jours",
      pmonth_2: "Tous les Créneaux 5★ & Directions Feng Shui Ming Gua (Lit/Maison)",
      pmonth_3: "Mode Synergie (Comparaison à Deux) & Audit Agenda",
      pmonth_4: "Sans Engagement (Résiliable à tout moment)",
      pmonth_5: "Partage Familial Apple Inclus (6 pers.)",
      btn_month: "Choisir le Pass Mensuel",

      priv_title: "100% On-Device : Vos Données & Nos Algorithmes Restent dans l'App",
      priv_desc: "Tous les calculs métaphysiques, votre date de naissance, votre Chiffre Gua et vos proches sont traités exclusivement au cœur de l'application native iOS sur votre iPhone ou iPad.",
      priv_link: "Politique de Confidentialité →",

      faq_badge: "FAQ",
      faq_title: "QUESTIONS FRÉQUENTES",
      faq_1_q: "Sur quoi sont fondés les calculs de QiMétéo ?",
      faq_1_a: "QiMétéo repose sur la convergence des arts calendaires et spatiaux classiques d'Asie orientale : le Tong Shu (les 12 Officiers du Jour), le Qi Men Dun Jia (sélection des créneaux horaires de 2h et boussole d'orientation) et le Feng Shui Ming Gua pour vos directions personnelles à la maison, pondérés par vos 4 Piliers de naissance (BaZi).",
      faq_2_q: "Qu'est-ce qui est inclus gratuitement dans l'application ?",
      faq_2_a: "En version gratuite, vous avez accès chaque jour à la météo complète d'Aujourd'hui (Feu Vert, Orange ou Rouge) ainsi qu'aux 2 créneaux horaires stratégiques de 2h de la journée et à la boussole d'orientation. L'abonnement QiMétéo PRO débloque les prochaines dates de recherche de projet, le calendrier sur 45 jours, les créneaux bonus, la comparaison Synergie à deux et vos directions Feng Shui Ming Gua (maison, lit, bureau).",
      faq_3_q: "Comment fonctionnent la boussole Qi Men et les directions Feng Shui du lit ?",
      faq_3_a: "Il y a deux niveaux complémentaires dans QiMétéo : 1) Au fil des heures (Qi Men Dun Jia), la boussole vous indique dans quelle direction vous orienter pendant un créneau de 2h pour un appel, une signature ou une négociation. 2) À la maison (Feng Shui Ming Gua), votre Chiffre Gua calculé dans l'onglet Profil vous donne les 4 bonnes directions de votre maison, notamment où orienter la tête de votre lit et votre bureau.",
      faq_4_q: "Puis-je partager mon abonnement avec ma famille ?",
      faq_4_a: "Oui ! L'abonnement QiMétéo PRO (mensuel ou annuel) intègre le Partage Familial Apple : jusqu'à 6 membres de votre groupe familial peuvent débloquer QiMétéo PRO sur leur propre iPhone ou iPad sans aucun coût supplémentaire.",

      final_title: "PRÊT À CHOISIR TOUJOURS LE BON MOMENT ?",
      final_desc: "Installez QiMétéo dès aujourd'hui sur votre iPhone ou iPad et démarrez chaque journée avec clarté, précision et sérénité.",
      final_btn_sub: "Disponible sur iPhone & iPad",
      final_btn_main: "Télécharger Gratuitement sur l'App Store",

      footer_bio: "La météo de vos décisions : sélection de dates par projet, créneaux stratégiques de 2h et boussole Feng Shui Ming Gua. Développé en France par Xavier Larrodé.",
      footer_app: "L'Application",
      footer_legal: "Légal & Contact",
      footer_privacy: "Politique de Confidentialité",
      footer_terms: "Conditions Générales d'Utilisation",
      footer_contact: "Contact & Support"
    },

    en: {
      nav_concept: "The Concept",
      nav_simulator: "12 Signs",
      nav_features: "Features",
      nav_duo: "Synergy & Feng Shui",
      nav_pricing: "PRO Pass",
      cta_dl_top: "Download on",

      hero_chip: "QI MEN DUN JIA • TONG SHU • FENG SHUI MING GUA",
      hero_title_1: "LIKE THE WEATHER,",
      hero_title_2: "BUT FOR YOUR DECISIONS.",
      hero_desc: "Just as you check the weather before heading out, check QiMétéo each morning to know if the day supports launching a project, signing a contract, or negotiating: Green, Amber or Red light, your 2 strategic 2-hour windows, and your orientation compass.",
      hero_btn_sub: "Free Download",
      hero_btn_main: "Get QiMétéo",
      hero_btn_discover: "Discover How It Works",

      hero_pill_1: "Green Light (Go) / Amber / Red",
      hero_pill_2: "2 Strategic (2h) Windows / Day",
      hero_pill_3: "Qi Men Compass & Ming Gua Feng Shui",
      phone_today_badge: "TODAY",

      concept_badge: "WEATHER FOR YOUR DAYS",
      concept_title: "GREEN, AMBER OR RED IN 3 SECONDS",
      concept_desc: "No need to be a Feng Shui or astrology expert. QiMétéo translates centuries of Eastern calendar wisdom into clear everyday guidance so you act at the right time.",

      green_title: "GREEN LIGHT — High Alignment Day",
      green_desc: "Ideal day to launch a project, sign a contract or lease, negotiate, make a major purchase, or celebrate a union.",
      green_tag: "Action & Launch",

      orange_title: "AMBER LIGHT — Targeted Day",
      orange_desc: "Great for methodical progress, decluttering, starting a diet, medical care, or preparing key files using your 2 daily Qi Men windows.",
      orange_tag: "Prep & Balance",

      red_title: "RED LIGHT — Prudence & Rest",
      red_desc: "Avoid launching major projects or signing binding agreements. If you must act, rely strictly on the 2 favorable time windows of the day.",
      red_tag: "Caution & Rest",

      sim_badge: "12 SIGNS PREVIEW",
      sim_title: "EXPLORE YOUR SIGN'S ENERGY PROFILE",
      sim_desc: "Select your zodiac animal to view an example of a personalized daily briefing (computed in real time on your device inside the QiMétéo app):",
      sim_label_slot: "Sample 2h Windows:",
      sim_label_dir: "Compass Direction:",
      sim_label_ally: "Natural Allies:",

      feat_badge: "STRATEGIC & FENG SHUI PRECISION",
      feat_title: "EVERYTHING QIMÉTÉO DOES FOR YOU",
      feat_desc: "A complete decision-timing and spatial assistant in your pocket, computed 100% locally on your iPhone or iPad.",

      feat_1_title: "2 Strategic Windows / Day (Zero Negative)",
      feat_1_desc: "Each day between 09:00 and 21:00, QiMétéo filters out unfavorable slots to highlight the 2 best 2-hour windows for your key calls, signings, and meetings.",

      feat_2_title: "Qi Men Compass (Back or Face)",
      feat_2_desc: "For each time window, the app shows which direction to face your chair (0°, 45°, 90°, 135°, 180°, 225°, 270°, 315°) using the live compass so you align in seconds.",

      feat_3_title: "Date Finder for Your 7 Project Goals",
      feat_3_desc: "Pick your goal: Launch a Project or Business, Sign a Contract & Collect, Marriage & Union, Real Estate & Renovation, Travel, Doctor & Health, or Declutter & Diet.",

      feat_4_title: "Ming Gua Feng Shui: Home, Bed & Desk",
      feat_4_desc: "From your birth date, QiMétéo computes your Gua Number (1 to 9) and reveals your 4 favorable home directions: where to point your bed headboard (Health & Sleep), your desk (Vitality & Focus), and which sectors to avoid.",

      feat_5_title: "Smart Apple Calendar Audit",
      feat_5_desc: "QiMétéo scans your upcoming iPhone calendar events: if an important meeting falls on an unfavorable or clash day, the app alerts you and suggests a better slot.",

      feat_6_title: "Plain Language or Expert Mode (4 Languages)",
      feat_6_desc: "Switch anytime between Simple Mode (100% everyday language) and full Expert Mode (Qi Men Dun Jia, 12 Officers Tong Shu, BaZi Four Pillars). Available in French, English, Spanish, and Chinese.",

      duo_badge: "PAIR SYNERGY & PERSONAL FENG SHUI",
      duo_title: "SYNERGY MODE (DUO) & MING GUA HOME COMPASS",
      duo_desc: "Compare your profile with your partner, child, associate, or client to find your best shared dates—and harmonize your home with your Gua Number.",

      duo_p1_strong: "Synergy & Shared Dates:",
      duo_p1_desc: "Spot natural affinities between two profiles and find the best shared dates over 45 days for joint projects.",
      duo_p2_strong: "Feng Shui Tip — Bed & Desk Direction:",
      duo_p2_desc: "Sleeping with your head pointed toward your Health direction supports deep recovery, while working facing your Vitality direction boosts success.",
      modes_desc: "Whether you need the best hour to launch a project, sign a deal, or position your bed in your bedroom, everything is computed instantaneously on your iPhone.",
      duo_card_quote: "“Strong natural harmony • Favorable shared dates • Gua Number & 4 Home / Bed / Desk directions in your Profile.”",

      price_badge: "TRANSPARENT & FAMILY SHARING INCLUDED",
      price_title: "TODAY IS FREE, UNLOCK EVERYTHING IN PRO",
      price_desc: "Today's decision weather and its 2 strategic 2-hour windows are free. Upgrade to QiMétéo PRO to unlock upcoming project dates, Ming Gua Feng Shui (bed & home), and Duo comparison.",

      plan_free_name: "FREE STARTER",
      plan_free_sub: "Forever Free",
      plan_free_desc: "Everything you need to check today's alignment and its 2 strategic time windows.",
      pfree_1: "Today's Weather (Green / Amber / Red)",
      pfree_2: "Today's 2 Strategic (2h) Windows",
      pfree_3: "Live Orientation Compass for Today",
      pfree_4: "iOS Home & Lock Screen Widgets",
      pfree_5: "Upcoming Project Dates & 45-Day Calendar (blurred)",
      pfree_6: "Ming Gua Feng Shui Bed/Home Directions & Duo Synergy (blurred)",
      btn_free: "Download Free",

      plan_vip_ribbon: "RECOMMENDED • 7-DAY FREE TRIAL",
      plan_vip_name: "VIP PRO ANNUAL PASS",
      plan_vip_desc: "Only €4.16/month. Apple Family Sharing included for up to 6 family members.",
      pvip_1: "Project Date Finder (7 goals) & 45-Day Horizon",
      pvip_2: "All Daily 5★ Windows & Smart Apple Calendar Audit",
      pvip_3: "Ming Gua Feng Shui: Home, Bed Headboard & Desk Directions",
      pvip_4: "Synergy Mode (Pair Comparison & Shared Dates)",
      pvip_5: "Full Expert Mode (Qi Men, 12 Officers, BaZi)",
      pvip_6: "Apple Family Sharing Included (up to 6 members)",
      btn_vip: "Start 7-Day Free Trial",

      plan_month_name: "PRO MONTHLY PASS",
      plan_month_desc: "Ideal for planning a project launch, contract signing, or move with no commitment.",
      pmonth_1: "Project Date Finder & 45-Day Calendar",
      pmonth_2: "All 5★ Windows & Ming Gua Feng Shui (Bed/Home)",
      pmonth_3: "Synergy Mode (Pair Comparison) & Calendar Audit",
      pmonth_4: "No Commitment (Cancel anytime)",
      pmonth_5: "Apple Family Sharing Included (6 people)",
      btn_month: "Choose Monthly Pass",

      priv_title: "100% On-Device: Your Data & Our Engine Stay Inside the App",
      priv_desc: "All metaphysical calculations, your birth date, your Gua Number, and your family profiles are processed strictly inside the native iOS app on your iPhone or iPad.",
      priv_link: "Read Privacy Policy →",

      faq_badge: "FAQ",
      faq_title: "FREQUENTLY ASKED QUESTIONS",
      faq_1_q: "What systems power QiMétéo's calculations?",
      faq_1_a: "QiMétéo combines classical East Asian temporal and spatial arts: Tong Shu (the 12 Day Officers), Qi Men Dun Jia (2-hour window selection and orientation compass), and Ming Gua Feng Shui for your personal home directions, personalized by your BaZi birth pillars.",
      faq_2_q: "What is included for free in the app?",
      faq_2_a: "In the free version, you get full access every day to Today's weather (Green, Amber, or Red light) plus Today's 2 strategic 2-hour windows and the live compass. QiMétéo PRO unlocks upcoming project dates, the 45-day calendar, bonus slots, Duo Synergy comparison, and your Ming Gua Feng Shui directions (home, bed, desk).",
      faq_3_q: "How do the Qi Men compass and Feng Shui bed directions work?",
      faq_3_a: "QiMétéo provides two complementary tools: 1) Throughout the day (Qi Men Dun Jia), the compass shows which direction to face during a 2-hour window for calls, signings, or negotiations. 2) At home (Ming Gua Feng Shui), your Gua Number in the Profile tab gives your 4 favorable home directions—especially where to point your bed headboard and your desk.",
      faq_4_q: "Can I share my subscription with my family?",
      faq_4_a: "Yes! QiMétéo PRO (monthly or annual) includes Apple Family Sharing: up to 6 members of your family group can unlock QiMétéo PRO on their own iPhone or iPad at no extra cost.",

      final_title: "READY TO ALWAYS PICK THE RIGHT MOMENT?",
      final_desc: "Install QiMétéo today on your iPhone or iPad and start every day with clarity, precision, and peace of mind.",
      final_btn_sub: "Available on iPhone & iPad",
      final_btn_main: "Download Free on the App Store",

      footer_bio: "The weather for your decisions: project date selection, 2-hour strategic windows, and Ming Gua Feng Shui compass. Built in France by Xavier Larrodé.",
      footer_app: "The App",
      footer_legal: "Legal & Support",
      footer_privacy: "Privacy Policy",
      footer_terms: "Terms of Service",
      footer_contact: "Contact & Support"
    }
  };

  // =========================================================================
  // 2. STATIC ILLUSTRATIVE ZODIAC SHOWCASE (NO ENGINE IP EXPOSED)
  // =========================================================================
  const zodiacShowcase = {
    rat: {
      name_fr: "Rat (子)", name_en: "Rat (Zi)",
      elem_fr: "Élément Eau • Yang", elem_en: "Water Element • Yang",
      status_fr: "Feu Vert (86%)", status_en: "Green Light (86%)",
      class: "status-green",
      qual_fr: "Clarté Mentale & Opportunités", qual_en: "Mental Clarity & Opportunity",
      text_fr: "Exemple de lecture dans l'app : journée propice aux négociations, aux prises de contact et au lancement d'initiatives.Téléchargez QiMétéo sur l'App Store pour obtenir votre calcul réel du jour.",
      text_en: "Sample reading in the app: favorable day for negotiations, outreach, and launching initiatives. Download QiMétéo on the App Store for your live daily reading.",
      slot: "09h00 - 11h00 & 15h00 - 17h00",
      dir_fr: "Dos au Nord (0°)", dir_en: "Back to North (0°)",
      ally_fr: "Dragon & Singe • Bœuf", ally_en: "Dragon & Monkey • Ox"
    },
    ox: {
      name_fr: "Bœuf (丑)", name_en: "Ox (Chou)",
      elem_fr: "Élément Terre • Yin", elem_en: "Earth Element • Yin",
      status_fr: "Feu Vert (84%)", status_en: "Green Light (84%)",
      class: "status-green",
      qual_fr: "Ancrage & Stabilité", qual_en: "Grounding & Stability",
      text_fr: "Exemple de lecture dans l'app : excellente journée pour consolider un projet immobilier, signer un contrat durable ou structurer vos finances.",
      text_en: "Sample reading in the app: great day to solidify a property project, sign a long-term agreement, or structure your finances.",
      slot: "11h00 - 13h00 & 15h00 - 17h00",
      dir_fr: "Dos au Nord-Est (45°)", dir_en: "Back to North-East (45°)",
      ally_fr: "Serpent & Coq • Rat", ally_en: "Snake & Rooster • Rat"
    },
    tiger: {
      name_fr: "Tigre (寅)", name_en: "Tiger (Yin)",
      elem_fr: "Élément Bois • Yang", elem_en: "Wood Element • Yang",
      status_fr: "Feu Vert (90%)", status_en: "Green Light (90%)",
      class: "status-green",
      qual_fr: "Audace & Lancement de Projet", qual_en: "Boldness & Project Launch",
      text_fr: "Exemple de lecture dans l'app : élan très porteur pour lancer un projet, inaugurer une activité ou défendre votre vision avec leadership.",
      text_en: "Sample reading in the app: strong momentum to launch a project, open a business, or pitch your vision with leadership.",
      slot: "09h00 - 11h00 & 13h00 - 15h00",
      dir_fr: "Dos à l'Est (90°)", dir_en: "Back to East (90°)",
      ally_fr: "Cheval & Chien • Cochon", ally_en: "Horse & Dog • Pig"
    },
    rabbit: {
      name_fr: "Lapin (卯)", name_en: "Rabbit (Mao)",
      elem_fr: "Élément Bois • Yin", elem_en: "Wood Element • Yin",
      status_fr: "Feu Orange (74%)", status_en: "Amber Light (74%)",
      class: "status-orange",
      qual_fr: "Diplomatie & Harmonie", qual_en: "Diplomacy & Harmony",
      text_fr: "Exemple de lecture dans l'app : privilégiez la négociation douce, les accords relationnels et concentrez vos démarches clés sur vos 2 créneaux horaires.",
      text_en: "Sample reading in the app: favor gentle diplomacy, relationship building, and schedule key moves inside your 2 daily windows.",
      slot: "13h00 - 15h00 & 17h00 - 19h00",
      dir_fr: "Dos au Sud-Est (135°)", dir_en: "Back to South-East (135°)",
      ally_fr: "Cochon & Chèvre • Chien", ally_en: "Pig & Goat • Dog"
    },
    dragon: {
      name_fr: "Dragon (辰)", name_en: "Dragon (Chen)",
      elem_fr: "Élément Terre • Yang", elem_en: "Earth Element • Yang",
      status_fr: "Feu Vert (91%)", status_en: "Green Light (91%)",
      class: "status-green",
      qual_fr: "Rayonnement & Décisions Clés", qual_en: "Influence & Key Decisions",
      text_fr: "Exemple de lecture dans l'app : journée d'ouverture idéale pour lancer un projet majeur, officialiser un contrat ou conclure un partenariat.",
      text_en: "Sample reading in the app: ideal opening day to launch a major project, formalize a contract, or seal a partnership.",
      slot: "13h00 - 15h00 & 15h00 - 17h00",
      dir_fr: "Dos au Sud-Ouest (225°)", dir_en: "Back to South-West (225°)",
      ally_fr: "Rat & Singe • Coq", ally_en: "Rat & Monkey • Rooster"
    },
    snake: {
      name_fr: "Serpent (巳)", name_en: "Snake (Si)",
      elem_fr: "Élément Feu • Yin", elem_en: "Fire Element • Yin",
      status_fr: "Feu Vert (85%)", status_en: "Green Light (85%)",
      class: "status-green",
      qual_fr: "Stratégie & Finesse Financière", qual_en: "Strategy & Financial Insight",
      text_fr: "Exemple de lecture dans l'app : excellente lucidité pour analyser un contrat, négocier un budget ou préparer une décision stratégique.",
      text_en: "Sample reading in the app: sharp clarity to review contracts, negotiate budgets, or prepare a strategic move.",
      slot: "09h00 - 11h00 & 17h00 - 19h00",
      dir_fr: "Dos au Sud (180°)", dir_en: "Back to South (180°)",
      ally_fr: "Bœuf & Coq • Singe", ally_en: "Ox & Rooster • Monkey"
    },
    horse: {
      name_fr: "Cheval (午)", name_en: "Horse (Wu)",
      elem_fr: "Élément Feu • Yang", elem_en: "Fire Element • Yang",
      status_fr: "Feu Orange (68%)", status_en: "Amber Light (68%)",
      class: "status-orange",
      qual_fr: "Équilibre & Canalisation", qual_en: "Balance & Focus",
      text_fr: "Exemple de lecture dans l'app : journée ciblée idéale pour trier, finaliser vos dossiers en cours et agir pendant vos 2 créneaux horaires favorables.",
      text_en: "Sample reading in the app: targeted day suited for organizing, completing ongoing work, and acting within your 2 favorable windows.",
      slot: "11h00 - 13h00 & 15h00 - 17h00",
      dir_fr: "Dos au Nord-Ouest (315°)", dir_en: "Back to North-West (315°)",
      ally_fr: "Tigre & Chien • Chèvre", ally_en: "Tiger & Dog • Goat"
    },
    goat: {
      name_fr: "Chèvre (未)", name_en: "Goat (Wei)",
      elem_fr: "Élément Terre • Yin", elem_en: "Earth Element • Yin",
      status_fr: "Feu Vert (83%)", status_en: "Green Light (83%)",
      class: "status-green",
      qual_fr: "Harmonie & Relations", qual_en: "Harmony & Relationships",
      text_fr: "Exemple de lecture dans l'app : belle fluidité pour les unions, les rendez-vous relationnels, l'aménagement de la maison et les accords amiables.",
      text_en: "Sample reading in the app: smooth flow for unions, relationship meetings, home projects, and win-win agreements.",
      slot: "09h00 - 11h00 & 13h00 - 15h00",
      dir_fr: "Dos au Sud-Ouest (225°)", dir_en: "Back to South-West (225°)",
      ally_fr: "Cochon & Lapin • Cheval", ally_en: "Pig & Rabbit • Horse"
    },
    monkey: {
      name_fr: "Singe (申)", name_en: "Monkey (Shen)",
      elem_fr: "Élément Métal • Yang", elem_en: "Metal Element • Yang",
      status_fr: "Feu Vert (92%)", status_en: "Green Light (92%)",
      class: "status-green",
      qual_fr: "Ingéniosité & Succès Commercial", qual_en: "Ingenuity & Commercial Success",
      text_fr: "Exemple de lecture dans l'app : alignement très favorable pour débloquer une négociation, signer une vente ou lancer un nouveau projet.",
      text_en: "Sample reading in the app: highly favorable alignment to unlock negotiations, close a deal, or launch a project.",
      slot: "15h00 - 17h00 & 19h00 - 21h00",
      dir_fr: "Dos à l'Ouest (270°)", dir_en: "Back to West (270°)",
      ally_fr: "Rat & Dragon • Serpent", ally_en: "Rat & Dragon • Snake"
    },
    rooster: {
      name_fr: "Coq (酉)", name_en: "Rooster (You)",
      elem_fr: "Élément Métal • Yin", elem_en: "Metal Element • Yin",
      status_fr: "Feu Vert (87%)", status_en: "Green Light (87%)",
      class: "status-green",
      qual_fr: "Précision & Reconnaissance", qual_en: "Precision & Recognition",
      text_fr: "Exemple de lecture dans l'app : vos arguments portent avec justesse. Journée porteuse pour un entretien, une présentation ou une signature.",
      text_en: "Sample reading in the app: your arguments land with precision. Supportive day for interviews, presentations, or signings.",
      slot: "09h00 - 11h00 & 15h00 - 17h00",
      dir_fr: "Dos au Nord-Est (45°)", dir_en: "Back to North-East (45°)",
      ally_fr: "Bœuf & Serpent • Dragon", ally_en: "Ox & Snake • Dragon"
    },
    dog: {
      name_fr: "Chien (戌)", name_en: "Dog (Xu)",
      elem_fr: "Élément Terre • Yang", elem_en: "Earth Element • Yang",
      status_fr: "Feu Orange (72%)", status_en: "Amber Light (72%)",
      class: "status-orange",
      qual_fr: "Fiabilité & Protection", qual_en: "Reliability & Protection",
      text_fr: "Exemple de lecture dans l'app : consolidez vos partenariats de confiance et utilisez vos 2 créneaux horaires pour vos démarches importantes.",
      text_en: "Sample reading in the app: strengthen trusted partnerships and use your 2 favorable windows for key steps.",
      slot: "11h00 - 13h00 & 17h00 - 19h00",
      dir_fr: "Dos au Sud (180°)", dir_en: "Back to South (180°)",
      ally_fr: "Tigre & Cheval • Lapin", ally_en: "Tiger & Horse • Rabbit"
    },
    pig: {
      name_fr: "Cochon (亥)", name_en: "Pig (Hai)",
      elem_fr: "Élément Eau • Yin", elem_en: "Water Element • Yin",
      status_fr: "Feu Vert (88%)", status_en: "Green Light (88%)",
      class: "status-green",
      qual_fr: "Abondance & Ouverture", qual_en: "Abundance & Openness",
      text_fr: "Exemple de lecture dans l'app : atmosphère propice aux accords gagnant-gagnant, aux voyages et aux projets familiaux ou professionnels.",
      text_en: "Sample reading in the app: warm atmosphere for win-win agreements, travel, and family or business initiatives.",
      slot: "13h00 - 15h00 & 15h00 - 17h00",
      dir_fr: "Dos à l'Est (90°)", dir_en: "Back to East (90°)",
      ally_fr: "Lapin & Chèvre • Tigre", ally_en: "Rabbit & Goat • Tiger"
    }
  };

  let currentLang = 'fr';
  let currentZodiac = 'dragon';

  // =========================================================================
  // 3. LANGUAGE SWITCHER & RENDERING
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

    initDateHeader();
    renderCurrentZodiac();
  }

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
    const z = zodiacShowcase[currentZodiac];
    if (!z) return;
    const isFR = currentLang === 'fr';

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
    if (titleEl) titleEl.textContent = isFR ? z.name_fr : z.name_en;
    if (elemEl) elemEl.textContent = isFR ? z.elem_fr : z.elem_en;

    if (statusEl) {
      statusEl.textContent = isFR ? z.status_fr : z.status_en;
      statusEl.className = `reading-status-indicator ${z.class}`;
    }

    if (qualEl) qualEl.textContent = isFR ? z.qual_fr : z.qual_en;
    if (textEl) textEl.textContent = isFR ? z.text_fr : z.text_en;
    if (slotEl) slotEl.textContent = z.slot;
    if (dirEl) dirEl.textContent = isFR ? z.dir_fr : z.dir_en;
    if (allyEl) allyEl.textContent = isFR ? z.ally_fr : z.ally_en;
  }

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

  document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initZodiacSimulator();
    initDateHeader();
    initMobileMenu();
  });

})();
