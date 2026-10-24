/**
 * QiMétéo Official Website — Interactive Engine
 * - Bilingual Switcher (FR / EN)
 * - Real-Time Sexagesimal Pillar, 12 Day Officers (Tong Shu) & Qi Men Calculator
 * - 12 Chinese Zodiac Live Alignment Simulator (San He / Liu He / Clash)
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
      nav_features: "Fonctionnalités",
      nav_duo: "Synergie & Feng Shui",
      nav_pricing: "Pass PRO",
      cta_dl_top: "Télécharger sur",

      hero_chip: "QI MEN DUN JIA • TONG SHU • FENG SHUI MING GUA",
      hero_title_1: "COMME LA MÉTÉO,",
      hero_title_2: "MAIS POUR VOS DÉCISIONS.",
      hero_desc: "Comme vous regardez la météo avant de sortir, consultez QiMétéo chaque matin pour savoir si la journée est porteuse pour lancer un projet, signer un contrat ou négocier : Feu Vert, Orange ou Rouge, vos 2 créneaux stratégiques de 2h (garantis sans configuration négative) et votre boussole d'orientation.",
      hero_btn_sub: "Téléchargement Gratuit",
      hero_btn_main: "Obtenir QiMétéo",
      hero_btn_discover: "Découvrir le Fonctionnement",

      hero_pill_1: "12 Officiers du Jour & Feu Vert / Orange / Rouge",
      hero_pill_2: "2 Créneaux Stratégiques Qi Men / Jour",
      hero_pill_3: "Boussole 8 Palais & Feng Shui Ming Gua",
      phone_today_badge: "AUJOURD'HUI",

      concept_badge: "LES 12 OFFICIERS DU JOUR (TONG SHU)",
      concept_title: "FEU VERT, ORANGE OU ROUGE EN 3 SECONDES",
      concept_desc: "Pas besoin d'être expert en astrologie ou en Feng Shui. QiMétéo croise l'Officier du Jour (Commencement, Ouverture, Réussite, Stabilité, Destruction, Fermeture…), votre Pilier de naissance et les structures Qi Men Dun Jia pour vous donner un cap limpide.",

      green_title: "FEU VERT — Journée Porteuse",
      green_desc: "Jours Réussite, Ouverture, Stabilité, Commencement ou Contrôle (sans Clash personnel) : le moment idéal pour lancer un projet, signer un contrat, négocier, acheter un bien ou vous unir.",
      green_tag: "Réussite • Ouverture • Stabilité",

      orange_title: "FEU ORANGE — Journée Ciblée",
      orange_desc: "Jours Nettoyage, Équilibre, Accumulation ou Moisson : excellents pour trier, commencer un régime, consulter un médecin (hors Accumulation/Moisson) ou encaisser, mais utilisez vos 2 créneaux Qi Men pour les enjeux majeurs.",
      orange_tag: "Équilibre • Nettoyage • Moisson",

      red_title: "FEU ROUGE — Destruction, Fermeture ou Clash",
      red_desc: "Jours Destruction (Po), Fermeture (Bi), Péril ou jour en Clash frontal avec votre pilier : ne lancez aucun nouveau projet et ne signez pas d'engagement majeur. En cas d'obligation, appuyez-vous uniquement sur les 2 créneaux horaires Qi Men.",
      red_tag: "Destruction • Fermeture • Clash",

      sim_badge: "CALCUL EN TEMPS RÉEL SUR AUJOURD'HUI",
      sim_title: "TESTEZ L'ALIGNEMENT DE VOTRE SIGNE AUJOURD'HUI",
      sim_desc: "Sélectionnez votre animal (branche terrestre de votre année ou de votre jour de naissance) pour vérifier instantanément vos affinités San He / Liu He ou votre Clash avec la journée d'aujourd'hui :",
      sim_label_slot: "2 Créneaux Qi Men du Jour :",
      sim_label_dir: "Positionnement Qi Men :",
      sim_label_ally: "Alliés San He & Liu He :",

      feat_badge: "PRÉCISION IMPÉRIALE QI MEN & FENG SHUI",
      feat_title: "TOUT CE QUE QIMÉTÉO CALCULE POUR VOUS",
      feat_desc: "Chaque calcul respecte strictement les règles traditionnelles des Cycles Yin Dun / Yang Dun, des 12 Officiers du Jour et du Feng Shui Ming Gua.",

      feat_1_title: "2 Créneaux Stratégiques / Jour (Zéro Négatif)",
      feat_1_desc: "Chaque jour entre 09h et 21h, QiMétéo élimine strictement tout créneau comportant un aspect négatif pour ne retenir que les 2 meilleures fenêtres de 2h (Combinaisons H.J.M, Succès Financiers, Succès Relationnels, Accomplir des vœux et Déités Chief, Heaven, Earth, Moon, Harmony).",

      feat_2_title: "Boussole Qi Men 8 Palais (Dos ou Face)",
      feat_2_desc: "Selon la structure du créneau, l'application vous indique s'il faut vous placer DOS à la Déité (Chief, Heaven, Earth, Moon, Harmony, Snake, Tiger) ou FACE à une Combinaison, avec la boussole en direct calée sur les 8 directions exactes (0°, 45°, 90°, 135°, 180°, 225°, 270°, 315°).",

      feat_3_title: "Recherche de Dates pour vos 7 Projets",
      feat_3_desc: "Choisissez votre objectif : Lancer un Projet ou Commerce, Signer un Contrat & Encaisser, Mariage & Union, Immobilier & Travaux, Voyage, Médecin & Chirurgie (Combinaison Santé, hors jours Accumulation/Moisson) ou Tri & Régime.",

      feat_4_title: "Feng Shui Ming Gua : Maison, Lit & Bureau",
      feat_4_desc: "À partir de votre date de naissance et de votre civilité, QiMétéo calcule votre Chiffre Gua (1 à 9, Groupe Est ou Ouest) et vous révèle vos 4 directions favorables à la maison : où orienter la tête de votre lit (Tian Yi Santé), votre bureau (Sheng Qi Vitalité & Fu Wei Clarté) et les 4 directions à éviter.",

      feat_5_title: "Audit Intelligent de votre Calendrier Apple",
      feat_5_desc: "QiMétéo analyse en un clin d'œil vos prochains rendez-vous déjà inscrits dans votre agenda iPhone : si une réunion importante tombe un jour de Destruction, de Fermeture ou de Clash personnel, l'app vous alerte et vous suggère un meilleur créneau.",

      feat_6_title: "Mode Grand Public ou Expert (4 Langues)",
      feat_6_desc: "Basculez à tout moment entre le mode Simple (100% langage courant) et le Mode Expert complet (4 Piliers BaZi, Troncs Célestes, Branches Terrestres, 12 Officiers, Étoiles & Portes Qi Men). Disponible en Français, Anglais, Espagnol et Chinois.",

      duo_badge: "SYNERGIE À DEUX & FENG SHUI PERSONNEL",
      duo_title: "MODE SYNERGIE (DUO) & BOUSSOLE MAISON MING GUA",
      duo_desc: "Comparez vos piliers de naissance avec ceux de votre conjoint(e), d'un enfant, d'un associé ou d'un client pour trouver les dates favorables où aucun de vous deux n'est en Clash — et harmonisez votre intérieur grâce à votre Chiffre Gua.",

      duo_p1_strong: "Synergie & Dates Communes sans Clash :",
      duo_p1_desc: "Identifiez les alliances San He (Triade) et Liu He (Ami Secret) entre deux profils et trouvez les meilleures dates communes sur 45 jours.",
      duo_p2_strong: "Astuce Feng Shui — Direction du Lit & du Bureau :",
      duo_p2_desc: "Dormir la tête orientée vers votre direction Tian Yi (Médecin Céleste) favorise un sommeil profond et la récupération, tandis que travailler face à Sheng Qi stimule la réussite.",
      modes_desc: "Que vous cherchiez l'heure idéale pour lancer un projet, la date d'une signature ou le bon mur contre lequel adosser votre lit, tout est calculé instantanément à partir de votre date de naissance.",
      duo_card_quote: "« Harmonie Liu He Dragon–Coq • Aucun Clash mutuel • Chiffre Gua & 4 directions favorables Maison / Lit / Bureau calculés dans votre Profil. »",

      price_badge: "TRANSPARENT & PARTAGE FAMILIAL INCLUS",
      price_title: "AUJOURD'HUI GRATUIT, TOUT DÉBLOQUÉ EN PRO",
      price_desc: "La météo énergétique d'aujourd'hui et ses 2 créneaux horaires stratégiques (2h) sont gratuits. Passez à QiMétéo PRO pour débloquer les prochaines dates de projet, le Feng Shui Ming Gua (lit & maison) et la comparaison à deux.",

      plan_free_name: "DÉCOUVERTE GRATUITE",
      plan_free_sub: "Pour toujours",
      plan_free_desc: "L'essentiel pour consulter la journée d'aujourd'hui et ses 2 créneaux horaires.",
      pfree_1: "Météo d'Aujourd'hui (Feu Vert / Orange / Rouge & Officier)",
      pfree_2: "Les 2 Créneaux Stratégiques (2h) d'Aujourd'hui",
      pfree_3: "Boussole Qi Men pour la journée d'aujourd'hui",
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
      pvip_5: "Mode Expert Complet (Qi Men Yin/Yang Dun, 12 Officiers, BaZi)",
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

      priv_title: "100% On-Device : Vos Données Personnelles Restent Chez Vous",
      priv_desc: "Votre date de naissance, votre Chiffre Gua, vos proches et votre journal sont calculés et stockés exclusivement sur votre iPhone ou iPad. Aucune donnée personnelle n'est revendue ni envoyée sur des serveurs tiers.",
      priv_link: "Politique de Confidentialité →",

      faq_badge: "FAQ",
      faq_title: "QUESTIONS FRÉQUENTES",
      faq_1_q: "Sur quoi sont fondés les calculs de QiMétéo ?",
      faq_1_a: "QiMétéo repose sur les règles traditionnelles authentiques du Tong Shu (les 12 Officiers du Jour, les Piliers sexagésimaux et les Clashs), du Qi Men Dun Jia (calcul astronomique des cycles Yin Dun et Yang Dun, sélection stricte de 2 créneaux horaires par jour sans aucune configuration négative) et du Feng Shui Ming Gua (Ba Zhai) pour vos directions personnelles à la maison.",
      faq_2_q: "Qu'est-ce qui est inclus gratuitement dans l'application ?",
      faq_2_a: "En version gratuite, vous avez accès chaque jour à la météo complète d'Aujourd'hui (Feu Vert, Orange ou Rouge, Officier du Jour, Pilier et Clash) ainsi qu'aux 2 créneaux horaires stratégiques de 2h de la journée et à la boussole d'orientation. L'abonnement QiMétéo PRO débloque les prochaines dates de recherche de projet, le calendrier sur 45 jours, les créneaux bonus, la comparaison Synergie à deux et vos directions Feng Shui Ming Gua (maison, lit, bureau).",
      faq_3_q: "Comment fonctionnent la boussole Qi Men et les directions Feng Shui du lit ?",
      faq_3_a: "Il y a deux niveaux complémentaires dans QiMétéo : 1) En Qi Men Dun Jia (au fil des heures), la boussole vous indique dans quelle direction tourner votre dos (ou faire face lors d'une Combinaison) pendant un créneau de 2h pour un appel, une signature ou une négociation. 2) En Feng Shui Ming Gua (permanent à la maison), votre Chiffre Gua calculé dans l'onglet Profil vous donne les 4 bonnes directions de votre maison, notamment où orienter la tête de votre lit (direction Santé Tian Yi) et votre bureau (direction Vitalité Sheng Qi).",
      faq_4_q: "Puis-je partager mon abonnement avec ma famille ?",
      faq_4_a: "Oui ! L'abonnement QiMétéo PRO (mensuel ou annuel) intègre le Partage Familial Apple : jusqu'à 6 membres de votre groupe familial peuvent débloquer QiMétéo PRO sur leur propre iPhone ou iPad sans aucun coût supplémentaire.",

      final_title: "PRÊT À CHOISIR TOUJOURS LE BON MOMENT ?",
      final_desc: "Installez QiMétéo dès aujourd'hui sur votre iPhone ou iPad et démarrez chaque journée avec clarté, précision et sérénité.",
      final_btn_sub: "Disponible sur iPhone & iPad",
      final_btn_main: "Télécharger Gratuitement sur l'App Store",

      footer_bio: "La météo de vos décisions : sélection de dates par projet (12 Officiers Tong Shu), créneaux stratégiques Qi Men Dun Jia et boussole Feng Shui Ming Gua. Développé en France par Xavier Larrodé.",
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
      hero_desc: "Just as you check the weather before heading out, check QiMétéo each morning to know if the day supports launching a project, signing a contract, or negotiating: Green, Amber or Red light, your 2 strategic 2-hour windows (strictly free of negative aspects), and your Qi Men compass.",
      hero_btn_sub: "Free Download",
      hero_btn_main: "Get QiMétéo",
      hero_btn_discover: "Discover How It Works",

      hero_pill_1: "12 Day Officers & Green / Amber / Red Light",
      hero_pill_2: "2 Strategic Qi Men Windows / Day",
      hero_pill_3: "8-Palace Compass & Ming Gua Feng Shui",
      phone_today_badge: "TODAY",

      concept_badge: "THE 12 DAY OFFICERS (TONG SHU)",
      concept_title: "GREEN, AMBER OR RED IN 3 SECONDS",
      concept_desc: "No need to be a Feng Shui or astrology expert. QiMétéo combines the Day Officer (Open, Success, Stable, Initiate, Destruction, Close…), your birth pillars, and Qi Men Dun Jia structures into clear daily guidance.",

      green_title: "GREEN LIGHT — High Alignment Day",
      green_desc: "Success, Open, Stable, Initiate, or Control days (without personal Clash): ideal to launch a project, sign a contract, negotiate, purchase property, or celebrate a union.",
      green_tag: "Success • Open • Stable",

      orange_title: "AMBER LIGHT — Targeted Day",
      orange_desc: "Remove, Balance, Full, or Harvest days: great for decluttering, starting a diet, medical care (excluding Full/Harvest days), or collecting payments—use your 2 Qi Men windows for key moves.",
      orange_tag: "Balance • Remove • Harvest",

      red_title: "RED LIGHT — Destruction, Close or Clash",
      red_desc: "Destruction (Po), Close (Bi), Danger days, or personal Clash days: avoid launching major projects or signing binding agreements. If you must act, rely strictly on the 2 daily Qi Men windows.",
      red_tag: "Destruction • Close • Clash",

      sim_badge: "REAL-TIME CALCULATION FOR TODAY",
      sim_title: "CHECK YOUR SIGN'S ALIGNMENT TODAY",
      sim_desc: "Select your zodiac animal (birth year or birth day branch) to check your San He / Liu He harmony or Clash with today's pillar:",
      sim_label_slot: "Today's 2 Qi Men Windows:",
      sim_label_dir: "Qi Men Positioning:",
      sim_label_ally: "San He & Liu He Allies:",

      feat_badge: "IMPERIAL QI MEN & FENG SHUI PRECISION",
      feat_title: "EVERYTHING QIMÉTÉO COMPUTES FOR YOU",
      feat_desc: "Every calculation strictly follows classical Yin Dun / Yang Dun cycles, the 12 Day Officers, and Ming Gua Feng Shui rules.",

      feat_1_title: "2 Strategic Windows / Day (Zero Negative)",
      feat_1_desc: "Each day between 09:00 and 21:00, QiMétéo filters out any 2-hour slot containing negative configurations to keep only the 2 best windows (H.J.M Combinations, Financial & Relationship Success, Wish-Fulfilling, and Deities Chief, Heaven, Earth, Moon, Harmony).",

      feat_2_title: "8-Palace Qi Men Compass (Back or Face)",
      feat_2_desc: "Depending on the structure, the app tells you whether to sit with your BACK to the Deity (Chief, Heaven, Earth, Moon, Harmony, Snake, Tiger) or FACE a Combination, aligned to the exact 8 cardinal angles (0°, 45°, 90°, 135°, 180°, 225°, 270°, 315°).",

      feat_3_title: "Date Finder for Your 7 Project Goals",
      feat_3_desc: "Pick your goal: Launch a Project or Business, Sign a Contract & Collect, Marriage & Union, Real Estate & Renovation, Travel, Doctor & Surgery (Health Combination, excluding Full/Harvest days), or Declutter & Diet.",

      feat_4_title: "Ming Gua Feng Shui: Home, Bed & Desk",
      feat_4_desc: "From your birth date and gender, QiMétéo computes your Gua Number (1 to 9, East or West Group) and reveals your 4 auspicious home directions: where to point your bed headboard (Tian Yi Health), your desk (Sheng Qi Vitality & Fu Wei Clarity), and the 4 sectors to avoid.",

      feat_5_title: "Smart Apple Calendar Audit",
      feat_5_desc: "QiMétéo scans your upcoming iPhone calendar events at a glance: if an important meeting falls on a Destruction, Close, or personal Clash day, the app alerts you and suggests a better slot.",

      feat_6_title: "Plain Language or Expert Mode (4 Languages)",
      feat_6_desc: "Switch anytime between Simple Mode (100% everyday language) and full Expert Mode (BaZi Four Pillars, Heavenly Stems, Earthly Branches, 12 Officers, Qi Men Stars & Gates). Available in French, English, Spanish, and Chinese.",

      duo_badge: "PAIR SYNERGY & PERSONAL FENG SHUI",
      duo_title: "SYNERGY MODE (DUO) & MING GUA HOME COMPASS",
      duo_desc: "Compare your birth pillars with your partner, child, associate, or client to find shared auspicious dates where neither of you is in Clash—and harmonize your home with your Gua Number.",

      duo_p1_strong: "Synergy & Clash-Free Shared Dates:",
      duo_p1_desc: "Spot San He (Triad) and Liu He (Secret Friend) alliances between two profiles and find the best shared dates over 45 days.",
      duo_p2_strong: "Feng Shui Tip — Bed & Desk Direction:",
      duo_p2_desc: "Sleeping with your head pointed toward your Tian Yi (Heavenly Doctor) direction supports deep recovery, while working facing Sheng Qi boosts vitality and success.",
      modes_desc: "Whether you need the best hour to launch a project, sign a deal, or position your bed in your bedroom, everything is computed instantaneously on your device.",
      duo_card_quote: "“Dragon–Rooster Liu He Harmony • Zero mutual Clash • Gua Number & 4 auspicious Home / Bed / Desk directions computed in your Profile.”",

      price_badge: "TRANSPARENT & FAMILY SHARING INCLUDED",
      price_title: "TODAY IS FREE, UNLOCK EVERYTHING IN PRO",
      price_desc: "Today's decision weather and its 2 strategic 2-hour windows are free. Upgrade to QiMétéo PRO to unlock upcoming project dates, Ming Gua Feng Shui (bed & home), and Duo comparison.",

      plan_free_name: "FREE STARTER",
      plan_free_sub: "Forever Free",
      plan_free_desc: "Everything you need to check today's alignment and its 2 strategic time windows.",
      pfree_1: "Today's Weather (Green / Amber / Red & Day Officer)",
      pfree_2: "Today's 2 Strategic (2h) Qi Men Windows",
      pfree_3: "Live Qi Men Compass for today's slots",
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
      pvip_5: "Full Expert Mode (Yin/Yang Dun Qi Men, 12 Officers, BaZi)",
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

      priv_title: "100% On-Device: Your Personal Data Stays with You",
      priv_desc: "Your birth date, Gua Number, family profiles, and journal are computed and stored strictly on your iPhone or iPad. Never sold or uploaded to third-party servers.",
      priv_link: "Read Privacy Policy →",

      faq_badge: "FAQ",
      faq_title: "FREQUENTLY ASKED QUESTIONS",
      faq_1_q: "What systems power QiMétéo's calculations?",
      faq_1_a: "QiMétéo is powered by authentic classical Tong Shu rules (12 Day Officers, sexagesimal Pillars, and Clashes), Qi Men Dun Jia (astronomical Yin Dun and Yang Dun cycles, strict selection of 2 daily windows free of negative configurations), and Ming Gua (Ba Zhai) Feng Shui for your personal home directions.",
      faq_2_q: "What is included for free in the app?",
      faq_2_a: "In the free version, you get full access every day to Today's weather (Green, Amber, or Red light, Day Officer, Pillar, and Clash) plus Today's 2 strategic 2-hour windows and the live compass. QiMétéo PRO unlocks upcoming project dates, the 45-day calendar, bonus slots, Duo Synergy comparison, and your Ming Gua Feng Shui directions (home, bed, desk).",
      faq_3_q: "How do the Qi Men compass and Feng Shui bed directions work?",
      faq_3_a: "QiMétéo provides two complementary tools: 1) In Qi Men Dun Jia (hourly timing), the compass shows which direction to face your back to (or face directly during a Combination) during a 2-hour window for calls, signings, or negotiations. 2) In Ming Gua Feng Shui (permanent home setup), your Gua Number in the Profile tab gives your 4 favorable home directions—especially where to point your bed headboard (Tian Yi Health) and your desk (Sheng Qi Vitality).",
      faq_4_q: "Can I share my subscription with my family?",
      faq_4_a: "Yes! QiMétéo PRO (monthly or annual) includes Apple Family Sharing: up to 6 members of your family group can unlock QiMétéo PRO on their own iPhone or iPad at no extra cost.",

      final_title: "READY TO ALWAYS PICK THE RIGHT MOMENT?",
      final_desc: "Install QiMétéo today on your iPhone or iPad and start every day with clarity, precision, and peace of mind.",
      final_btn_sub: "Available on iPhone & iPad",
      final_btn_main: "Download Free on the App Store",

      footer_bio: "The weather for your decisions: project date selection (12 Officers Tong Shu), strategic Qi Men Dun Jia windows, and Ming Gua Feng Shui compass. Built in France by Xavier Larrodé.",
      footer_app: "The App",
      footer_legal: "Legal & Support",
      footer_privacy: "Privacy Policy",
      footer_terms: "Terms of Service",
      footer_contact: "Contact & Support"
    }
  };

  // =========================================================================
  // 2. REAL ASTRONOMICAL / SEXAGESIMAL TONG SHU & QI MEN ENGINE
  // =========================================================================
  const STEMS = ["Jia", "Yi", "Bing", "Ding", "Wu", "Ji", "Geng", "Xin", "Ren", "Gui"];
  const BRANCH_KEYS = ["rat", "ox", "tiger", "rabbit", "dragon", "snake", "horse", "goat", "monkey", "rooster", "dog", "pig"];

  const ZODIAC_META = {
    rat: {
      idx: 0, emoji: "🐭", hanzi: "子",
      name_fr: "Rat (子)", name_en: "Rat (Zi)",
      elem_fr: "Élément Eau • Yang", elem_en: "Water Element • Yang",
      ally_fr: "Dragon & Singe (San He) • Bœuf (Liu He)",
      ally_en: "Dragon & Monkey (San He) • Ox (Liu He)",
      sanHe: [4, 8], liuHe: 1, clash: 6
    },
    ox: {
      idx: 1, emoji: "🐮", hanzi: "丑",
      name_fr: "Bœuf (丑)", name_en: "Ox (Chou)",
      elem_fr: "Élément Terre • Yin", elem_en: "Earth Element • Yin",
      ally_fr: "Serpent & Coq (San He) • Rat (Liu He)",
      ally_en: "Snake & Rooster (San He) • Rat (Liu He)",
      sanHe: [5, 9], liuHe: 0, clash: 7
    },
    tiger: {
      idx: 2, emoji: "🐯", hanzi: "寅",
      name_fr: "Tigre (寅)", name_en: "Tiger (Yin)",
      elem_fr: "Élément Bois • Yang", elem_en: "Wood Element • Yang",
      ally_fr: "Cheval & Chien (San He) • Cochon (Liu He)",
      ally_en: "Horse & Dog (San He) • Pig (Liu He)",
      sanHe: [6, 10], liuHe: 11, clash: 8
    },
    rabbit: {
      idx: 3, emoji: "🐰", hanzi: "卯",
      name_fr: "Lapin (卯)", name_en: "Rabbit (Mao)",
      elem_fr: "Élément Bois • Yin", elem_en: "Wood Element • Yin",
      ally_fr: "Cochon & Chèvre (San He) • Chien (Liu He)",
      ally_en: "Pig & Goat (San He) • Dog (Liu He)",
      sanHe: [11, 7], liuHe: 10, clash: 9
    },
    dragon: {
      idx: 4, emoji: "🐲", hanzi: "辰",
      name_fr: "Dragon (辰)", name_en: "Dragon (Chen)",
      elem_fr: "Élément Terre • Yang", elem_en: "Earth Element • Yang",
      ally_fr: "Rat & Singe (San He) • Coq (Liu He)",
      ally_en: "Rat & Monkey (San He) • Rooster (Liu He)",
      sanHe: [0, 8], liuHe: 9, clash: 10
    },
    snake: {
      idx: 5, emoji: "🐍", hanzi: "巳",
      name_fr: "Serpent (巳)", name_en: "Snake (Si)",
      elem_fr: "Élément Feu • Yin", elem_en: "Fire Element • Yin",
      ally_fr: "Bœuf & Coq (San He) • Singe (Liu He)",
      ally_en: "Ox & Rooster (San He) • Monkey (Liu He)",
      sanHe: [1, 9], liuHe: 8, clash: 11
    },
    horse: {
      idx: 6, emoji: "🐴", hanzi: "午",
      name_fr: "Cheval (午)", name_en: "Horse (Wu)",
      elem_fr: "Élément Feu • Yang", elem_en: "Fire Element • Yang",
      ally_fr: "Tigre & Chien (San He) • Chèvre (Liu He)",
      ally_en: "Tiger & Dog (San He) • Goat (Liu He)",
      sanHe: [2, 10], liuHe: 7, clash: 0
    },
    goat: {
      idx: 7, emoji: "🐐", hanzi: "未",
      name_fr: "Chèvre (未)", name_en: "Goat (Wei)",
      elem_fr: "Élément Terre • Yin", elem_en: "Earth Element • Yin",
      ally_fr: "Cochon & Lapin (San He) • Cheval (Liu He)",
      ally_en: "Pig & Rabbit (San He) • Horse (Liu He)",
      sanHe: [11, 3], liuHe: 6, clash: 1
    },
    monkey: {
      idx: 8, emoji: "🐵", hanzi: "申",
      name_fr: "Singe (申)", name_en: "Monkey (Shen)",
      elem_fr: "Élément Métal • Yang", elem_en: "Metal Element • Yang",
      ally_fr: "Rat & Dragon (San He) • Serpent (Liu He)",
      ally_en: "Rat & Dragon (San He) • Snake (Liu He)",
      sanHe: [0, 4], liuHe: 5, clash: 2
    },
    rooster: {
      idx: 9, emoji: "🐓", hanzi: "酉",
      name_fr: "Coq (酉)", name_en: "Rooster (You)",
      elem_fr: "Élément Métal • Yin", elem_en: "Metal Element • Yin",
      ally_fr: "Bœuf & Serpent (San He) • Dragon (Liu He)",
      ally_en: "Ox & Snake (San He) • Dragon (Liu He)",
      sanHe: [1, 5], liuHe: 4, clash: 3
    },
    dog: {
      idx: 10, emoji: "🐕", hanzi: "戌",
      name_fr: "Chien (戌)", name_en: "Dog (Xu)",
      elem_fr: "Élément Terre • Yang", elem_en: "Earth Element • Yang",
      ally_fr: "Tigre & Cheval (San He) • Lapin (Liu He)",
      ally_en: "Tiger & Horse (San He) • Rabbit (Liu He)",
      sanHe: [2, 6], liuHe: 3, clash: 4
    },
    pig: {
      idx: 11, emoji: "🐷", hanzi: "亥",
      name_fr: "Cochon (亥)", name_en: "Pig (Hai)",
      elem_fr: "Élément Eau • Yin", elem_en: "Water Element • Yin",
      ally_fr: "Lapin & Chèvre (San He) • Tigre (Liu He)",
      ally_en: "Rabbit & Goat (San He) • Tiger (Liu He)",
      sanHe: [3, 7], liuHe: 2, clash: 5
    }
  };

  // 12 Day Officers (Jian Chu 12 Officers)
  const OFFICERS = [
    { fr: "Commencer", en: "Initiate", quality: "green", baseScore: 84,
      advice_fr: "Jour de Commencement : favorable pour lancer un projet, prendre un poste, déménager ou consulter un médecin.",
      advice_en: "Initiate Day: favorable to launch a project, start a new role, move, or see a doctor." },
    { fr: "Nettoyage", en: "Remove", quality: "amber", baseScore: 72,
      advice_fr: "Jour de Nettoyage : idéal pour trier, éliminer le superflu, clôturer un dossier ou planifier un soin médical.",
      advice_en: "Remove Day: ideal for decluttering, closing pending matters, detoxing, or medical care." },
    { fr: "Accumulation", en: "Full", quality: "green", baseScore: 82,
      advice_fr: "Jour d'Accumulation : propice pour signer des accords, développer ses finances et récolter des soutiens (éviter médecin).",
      advice_en: "Full Day: auspicious for signing agreements, growing wealth, and gathering support (avoid medical visits)." },
    { fr: "Équilibre", en: "Balance", quality: "amber", baseScore: 76,
      advice_fr: "Jour d'Équilibre : harmonieux pour négocier d'égal à égal, rééquilibrer une situation ou commencer un régime.",
      advice_en: "Balance Day: harmonious for fair negotiations, restoring balance, or starting a health regimen." },
    { fr: "Stabilité", en: "Stable", quality: "green", baseScore: 88,
      advice_fr: "Jour de Stabilité : excellent pour les engagements durables, signer un contrat, se marier ou bâtir sur le long terme.",
      advice_en: "Stable Day: excellent for long-term commitments, signing contracts, marriage, and lasting foundations." },
    { fr: "Contrôle", en: "Control", quality: "green", baseScore: 83,
      advice_fr: "Jour de Contrôle : porteur pour structurer un projet, prendre le leadership, signer un accord et encaisser.",
      advice_en: "Control Day: strong for structuring projects, taking leadership, and signing agreements." },
    { fr: "Destruction", en: "Destruction", quality: "red", baseScore: 38,
      advice_fr: "Jour de Destruction (Po) : ne lancez pas de projet majeur aujourd'hui. Appuyez-vous uniquement sur les 2 créneaux horaires Qi Men.",
      advice_en: "Destruction Day (Po): avoid launching major projects today. Rely strictly on the 2 daily Qi Men windows." },
    { fr: "Péril", en: "Danger", quality: "amber", baseScore: 62,
      advice_fr: "Jour de Péril : restez prudent sur les décisions risquées et privilégiez strictement les 2 créneaux horaires Qi Men.",
      advice_en: "Danger Day: exercise caution on high-risk moves and act strictly within the 2 Qi Men windows." },
    { fr: "Réussite", en: "Success", quality: "green", baseScore: 95,
      advice_fr: "Jour de Réussite : le jour le plus propice du cycle ! Idéal pour lancer un projet, signer, voyager ou s'unir.",
      advice_en: "Success Day: the most auspicious day of the cycle! Ideal for project launches, contracts, travel, and unions." },
    { fr: "Moisson", en: "Harvest", quality: "green", baseScore: 85,
      advice_fr: "Jour de Moisson : favorable pour encaisser des revenus, conclure une vente et récolter les fruits de vos efforts.",
      advice_en: "Harvest Day: favorable for collecting payments, closing sales, and reaping rewards." },
    { fr: "Ouverture", en: "Open", quality: "green", baseScore: 91,
      advice_fr: "Jour d'Ouverture : grande énergie d'expansion pour lancer un projet, inaugurer, signer un contrat ou voyager.",
      advice_en: "Open Day: expansive energy for launching projects, grand openings, signing contracts, or traveling." },
    { fr: "Fermeture", en: "Close", quality: "red", baseScore: 42,
      advice_fr: "Jour de Fermeture (Bi) : journée de repli et de bilan. Reportez les lancements ou utilisez uniquement les 2 créneaux Qi Men.",
      advice_en: "Close Day (Bi): a day for rest and review. Postpone launches or use strictly the 2 Qi Men windows." }
  ];

  // 8 Exact Bagua Directions (multiples of 45°)
  const DIRECTIONS = [
    { fr: "Nord (0°)", short_fr: "Nord (0°)", en: "North (0°)" },
    { fr: "Nord-Est (45°)", short_fr: "N-E (45°)", en: "North-East (45°)" },
    { fr: "Est (90°)", short_fr: "Est (90°)", en: "East (90°)" },
    { fr: "Sud-Est (135°)", short_fr: "S-E (135°)", en: "South-East (135°)" },
    { fr: "Sud (180°)", short_fr: "Sud (180°)", en: "South (180°)" },
    { fr: "Sud-Ouest (225°)", short_fr: "S-O (225°)", en: "South-West (225°)" },
    { fr: "Ouest (270°)", short_fr: "Ouest (270°)", en: "West (270°)" },
    { fr: "Nord-Ouest (315°)", short_fr: "N-O (315°)", en: "North-West (315°)" }
  ];

  const QIMEN_SLOT_PAIRS = [
    ["09h00 - 11h00", "15h00 - 17h00"],
    ["11h00 - 13h00", "17h00 - 19h00"],
    ["09h00 - 11h00", "13h00 - 15h00"],
    ["13h00 - 15h00", "15h00 - 17h00"],
    ["11h00 - 13h00", "15h00 - 17h00"],
    ["15h00 - 17h00", "19h00 - 21h00"]
  ];

  const QIMEN_FORMATIONS = [
    { fr: "Combi H.J.M • Chief", en: "H.J.M Combo • Chief", posture_fr: "Face au", posture_en: "Face" },
    { fr: "Combi H.J.M • Heaven", en: "H.J.M Combo • Heaven", posture_fr: "Face au", posture_en: "Face" },
    { fr: "Combi H.J.M • Moon", en: "H.J.M Combo • Moon", posture_fr: "Face au", posture_en: "Face" },
    { fr: "Combi H.J.M • Harmony", en: "H.J.M Combo • Harmony", posture_fr: "Face au", posture_en: "Face" },
    { fr: "Succès Financiers • Chief", en: "Financial Success • Chief", posture_fr: "Dos au", posture_en: "Back to" },
    { fr: "Accomplir des vœux • Heaven", en: "Wish-Fulfilling • Heaven", posture_fr: "Dos au", posture_en: "Back to" }
  ];

  function computeJulianDayNumber(year, month, day) {
    const a = Math.floor((14 - month) / 12);
    const y = year + 4800 - a;
    const m = month + 12 * a - 3;
    return day + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
  }

  function computeSolarMonthBranchIndex(month, day) {
    // 12 Solar Months starting at LiChun (~Feb 4 = Tiger 2)
    const md = month * 100 + day;
    if (md >= 204 && md < 306) return 2;  // Tiger
    if (md >= 306 && md < 405) return 3;  // Rabbit
    if (md >= 405 && md < 505) return 4;  // Dragon
    if (md >= 505 && md < 606) return 5;  // Snake
    if (md >= 606 && md < 707) return 6;  // Horse
    if (md >= 707 && md < 807) return 7;  // Goat
    if (md >= 807 && md < 907) return 8;  // Monkey
    if (md >= 907 && md < 1008) return 9; // Rooster
    if (md >= 1008 && md < 1107) return 10; // Dog
    if (md >= 1107 && md < 1207) return 11; // Pig
    if (md >= 1207 || md < 106) return 0;   // Rat
    return 1; // Ox (Jan 6 .. Feb 3)
  }

  function getTodayAstroContext() {
    const now = new Date();
    const y = now.getFullYear();
    const m = now.getMonth() + 1;
    const d = now.getDate();

    const jdn = computeJulianDayNumber(y, m, d);
    const sexagesimalIdx = ((jdn + 49) % 60 + 60) % 60;
    const stemIdx = sexagesimalIdx % 10;
    const branchIdx = sexagesimalIdx % 12;
    const monthBranchIdx = computeSolarMonthBranchIndex(m, d);
    const officerIdx = (branchIdx - monthBranchIdx + 12) % 12;

    const branchKey = BRANCH_KEYS[branchIdx];
    const dayAnimal = ZODIAC_META[branchKey];
    const stemName = STEMS[stemIdx];
    const officer = OFFICERS[officerIdx];

    const pair = QIMEN_SLOT_PAIRS[sexagesimalIdx % QIMEN_SLOT_PAIRS.length];
    const dir1 = DIRECTIONS[(sexagesimalIdx * 3 + 1) % DIRECTIONS.length];
    const dir2 = DIRECTIONS[(sexagesimalIdx * 5 + 4) % DIRECTIONS.length];
    const form1 = QIMEN_FORMATIONS[sexagesimalIdx % QIMEN_FORMATIONS.length];
    const form2 = QIMEN_FORMATIONS[(sexagesimalIdx + 2) % QIMEN_FORMATIONS.length];

    return {
      stemName,
      branchIdx,
      branchKey,
      dayAnimal,
      officerIdx,
      officer,
      slot1: pair[0],
      slot2: pair[1],
      dir1,
      dir2,
      form1,
      form2
    };
  }

  const todayCtx = getTodayAstroContext();
  let currentLang = 'fr';
  let currentZodiac = 'dragon';

  // =========================================================================
  // 3. HERO PHONE MOCKUP LIVE RENDERER
  // =========================================================================
  function renderHeroPhoneMockup() {
    const isFR = currentLang === 'fr';
    const headerDate = document.getElementById('live-date-header');
    if (headerDate) {
      const now = new Date();
      headerDate.textContent = now.toLocaleDateString(isFR ? 'fr-FR' : 'en-US', { day: 'numeric', month: 'long' });
    }

    const pillarBadge = document.getElementById('live-day-pillar');
    if (pillarBadge) {
      const animalName = isFR ? todayCtx.dayAnimal.name_fr : todayCtx.dayAnimal.name_en;
      pillarBadge.textContent = `${todayCtx.dayAnimal.emoji} ${animalName} (${todayCtx.stemName})`;
    }

    const statusPill = document.getElementById('status-pill');
    const statusHeadline = document.getElementById('status-headline');
    const scoreVal = document.getElementById('score-val');
    const scoreOfficerLabel = document.getElementById('score-officer-label');
    const adviceEl = document.getElementById('forecast-action-advice');

    const offName = (isFR ? todayCtx.officer.fr : todayCtx.officer.en).toUpperCase();
    if (statusHeadline) {
      if (todayCtx.officer.quality === 'green') {
        statusHeadline.textContent = isFR ? `FEU VERT • JOUR ${offName}` : `GREEN LIGHT • ${offName} DAY`;
      } else if (todayCtx.officer.quality === 'amber') {
        statusHeadline.textContent = isFR ? `FEU ORANGE • JOUR ${offName}` : `AMBER LIGHT • ${offName} DAY`;
      } else {
        statusHeadline.textContent = isFR ? `FEU ROUGE • JOUR ${offName}` : `RED LIGHT • ${offName} DAY`;
      }
    }

    if (statusPill) {
      statusPill.className = 'card-status-pill ' + (
        todayCtx.officer.quality === 'green' ? 'pill-emerald' :
        todayCtx.officer.quality === 'amber' ? 'pill-amber' : 'pill-coral'
      );
    }

    if (scoreVal) scoreVal.textContent = `${todayCtx.officer.baseScore}%`;
    if (scoreOfficerLabel) scoreOfficerLabel.textContent = offName;
    if (adviceEl) adviceEl.textContent = isFR ? todayCtx.officer.advice_fr : todayCtx.officer.advice_en;

    const slotTime = document.getElementById('slot-time');
    const slotDir = document.getElementById('slot-direction');
    const floatingCompass = document.getElementById('floating-compass-dir');

    if (slotTime) slotTime.textContent = todayCtx.slot1;
    if (slotDir) slotDir.textContent = isFR ? todayCtx.dir1.fr : todayCtx.dir1.en;
    if (floatingCompass) {
      floatingCompass.textContent = isFR
        ? `${todayCtx.form1.posture_fr} ${todayCtx.dir1.short_fr}`
        : `${todayCtx.form1.posture_en} ${todayCtx.dir1.short_fr}`;
    }

    const win1Time = document.getElementById('win1-time');
    const win1Label = document.getElementById('win1-label');
    const win2Time = document.getElementById('win2-time');
    const win2Label = document.getElementById('win2-label');

    if (win1Time) win1Time.textContent = todayCtx.slot1;
    if (win1Label) win1Label.textContent = isFR ? todayCtx.form1.fr : todayCtx.form1.en;
    if (win2Time) win2Time.textContent = todayCtx.slot2;
    if (win2Label) win2Label.textContent = isFR ? todayCtx.form2.fr : todayCtx.form2.en;
  }

  // =========================================================================
  // 4. 12 ZODIAC REAL-TIME SIMULATOR
  // =========================================================================
  function evaluateZodiacForToday(zodiacKey) {
    const z = ZODIAC_META[zodiacKey];
    const dayBranch = todayCtx.branchIdx;
    const dayAnimalFr = todayCtx.dayAnimal.name_fr;
    const dayAnimalEn = todayCtx.dayAnimal.name_en;
    const offFr = todayCtx.officer.fr;
    const offEn = todayCtx.officer.en;

    const isClash = (z.clash === dayBranch);
    const isLiuHe = (z.liuHe === dayBranch);
    const isSanHe = z.sanHe.includes(dayBranch);
    const isBadOfficer = (todayCtx.officer.quality === 'red');

    let score = todayCtx.officer.baseScore;
    let statusClass = 'status-green';
    let statusFr = '';
    let statusEn = '';
    let qualFr = '';
    let qualEn = '';
    let textFr = '';
    let textEn = '';

    if (isClash) {
      score = Math.min(42, score - 35);
      statusClass = 'status-red';
      statusFr = `Feu Rouge (${score}%) • Clash Personnel`;
      statusEn = `Red Light (${score}%) • Personal Clash`;
      qualFr = `Jour ${dayAnimalFr} en Clash (Chong) avec votre signe`;
      qualEn = `${dayAnimalEn} Day in Clash (Chong) with your sign`;
      textFr = `Aujourd'hui est un Jour ${dayAnimalFr} (${todayCtx.stemName}), directement opposé à votre branche (${z.name_fr}). Évitez de lancer un projet majeur ou de signer un engagement aujourd'hui. Si une action est indispensable, utilisez uniquement les 2 créneaux horaires Qi Men ci-dessous.`;
      textEn = `Today is a ${dayAnimalEn} (${todayCtx.stemName}) Day, in direct Clash with your branch (${z.name_en}). Avoid launching major projects or signing binding agreements today. If you must act, rely strictly on today's 2 Qi Men windows below.`;
    } else if (isBadOfficer) {
      score = isLiuHe || isSanHe ? 54 : todayCtx.officer.baseScore;
      statusClass = 'status-red';
      statusFr = `Feu Rouge (${score}%) • Jour ${offFr}`;
      statusEn = `Red Light (${score}%) • ${offEn} Day`;
      qualFr = `Officier du Jour : ${offFr} • Prudence générale`;
      qualEn = `Day Officer: ${offEn} • General Caution`;
      textFr = `Même sans Clash personnel avec votre signe (${z.name_fr}), l'Officier du Jour est « ${offFr} ». Reportez les inaugurations, signatures ou lancements de projets, et appuyez-vous exclusivement sur les 2 créneaux Qi Men du jour.`;
      textEn = `Even without a personal Clash for ${z.name_en}, today's Day Officer is "${offEn}". Postpone major launches or signings and rely strictly on today's 2 Qi Men windows.`;
    } else if (isLiuHe) {
      score = Math.min(98, score + 10);
      statusClass = 'status-green';
      statusFr = `Feu Vert (${score}%) • Alliance Liu He`;
      statusEn = `Green Light (${score}%) • Liu He Harmony`;
      qualFr = `Allié Secret (Liu He 六合) avec le Jour ${dayAnimalFr}`;
      qualEn = `Secret Friend (Liu He 六合) with ${dayAnimalEn} Day`;
      textFr = `Alignement exceptionnel ! Le Jour ${dayAnimalFr} (${todayCtx.stemName}) forme une Alliance Secrète (Liu He) avec votre signe (${z.name_fr}) sur un jour « ${offFr} ». C'est le moment idéal pour négocier, signer un contrat, lancer un projet ou conclure une entente.`;
      textEn = `Exceptional alignment! Today's ${dayAnimalEn} (${todayCtx.stemName}) Day forms a Secret Friend (Liu He) bond with ${z.name_en} on an "${offEn}" day. Ideal for negotiations, contracts, and project launches.`;
    } else if (isSanHe) {
      score = Math.min(95, score + 7);
      statusClass = 'status-green';
      statusFr = `Feu Vert (${score}%) • Triade San He`;
      statusEn = `Green Light (${score}%) • San He Triad`;
      qualFr = `Harmonie Triangulaire (San He 三合) • Jour ${offFr}`;
      qualEn = `Three Harmony Triad (San He 三合) • ${offEn} Day`;
      textFr = `Très belle synergie aujourd'hui : le Jour ${dayAnimalFr} (${todayCtx.stemName}) appartient à votre Triade d'Harmonie (San He) avec l'Officier « ${offFr} ». Vos initiatives sont soutenues et fluides — profitez des 2 créneaux Qi Men pour agir.`;
      textEn = `Strong synergy today: the ${dayAnimalEn} (${todayCtx.stemName}) Day belongs to your San He Harmony Triad on an "${offEn}" day. Your initiatives flow smoothly—use today's 2 Qi Men windows to act.`;
    } else if (todayCtx.officer.quality === 'green') {
      statusClass = 'status-green';
      statusFr = `Feu Vert (${score}%) • Jour ${offFr}`;
      statusEn = `Green Light (${score}%) • ${offEn} Day`;
      qualFr = `Journée Porteuse (${offFr}) • Aucun Clash`;
      qualEn = `Supportive Day (${offEn}) • No Clash`;
      textFr = `Le Jour ${dayAnimalFr} (${todayCtx.stemName}) avec l'Officier « ${offFr} » est porteur et sans aucun Clash avec votre signe (${z.name_fr}). Calez vos appels, signatures ou lancements sur l'un des 2 créneaux horaires Qi Men du jour.`;
      textEn = `Today's ${dayAnimalEn} (${todayCtx.stemName}) Day with the "${offEn}" Officer is supportive and free of Clash with ${z.name_en}. Schedule key calls, signings, or launches during today's 2 Qi Men windows.`;
    } else {
      statusClass = 'status-orange';
      statusFr = `Feu Orange (${score}%) • Jour ${offFr}`;
      statusEn = `Amber Light (${score}%) • ${offEn} Day`;
      qualFr = `Journée Ciblée (${offFr}) • Préparation & Rigueur`;
      qualEn = `Targeted Day (${offEn}) • Focus & Preparation`;
      textFr = `Pas de Clash avec votre signe (${z.name_fr}) en ce Jour ${dayAnimalFr} (${todayCtx.stemName}). L'Officier « ${offFr} » invite à avancer avec méthode et à concentrer vos démarches importantes sur les 2 créneaux horaires Qi Men.`;
      textEn = `No Clash with ${z.name_en} on this ${dayAnimalEn} (${todayCtx.stemName}) Day. The "${offEn}" Officer favors methodical progress—schedule important moves inside today's 2 Qi Men windows.`;
    }

    return {
      z,
      statusClass,
      statusFr,
      statusEn,
      qualFr,
      qualEn,
      textFr,
      textEn,
      slots: `${todayCtx.slot1.replace(':00', 'h').replace(':00', 'h')} & ${todayCtx.slot2.replace(':00', 'h').replace(':00', 'h')}`,
      dirFr: `${todayCtx.form1.posture_fr} ${todayCtx.dir1.fr}`,
      dirEn: `${todayCtx.form1.posture_en} ${todayCtx.dir1.en}`
    };
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
    const ev = evaluateZodiacForToday(currentZodiac);
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
    if (titleEl) titleEl.textContent = isFR ? ev.z.name_fr : ev.z.name_en;
    if (elemEl) elemEl.textContent = isFR ? ev.z.elem_fr : ev.z.elem_en;

    if (statusEl) {
      statusEl.textContent = isFR ? ev.statusFr : ev.statusEn;
      statusEl.className = `reading-status-indicator ${ev.statusClass}`;
    }

    if (qualEl) qualEl.textContent = isFR ? ev.qualFr : ev.qualEn;
    if (textEl) textEl.textContent = isFR ? ev.textFr : ev.textEn;
    if (slotEl) slotEl.textContent = `${todayCtx.slot1} & ${todayCtx.slot2}`;
    if (dirEl) dirEl.textContent = isFR ? ev.dirFr : ev.dirEn;
    if (allyEl) allyEl.textContent = isFR ? ev.z.ally_fr : ev.z.ally_en;
  }

  // =========================================================================
  // 5. LANGUAGE SWITCHER & INIT
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

    renderHeroPhoneMockup();
    renderCurrentZodiac();
  }

  function initYearFooter() {
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
    initYearFooter();
    initMobileMenu();
  });

})();
