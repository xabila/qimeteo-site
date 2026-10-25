/**
 * QiMétéo Official Website — Interactive Showcase
 * - Bilingual Switcher (FR / EN)
 * - 12 Chinese Zodiac Interactive Preview (100% static showcase data — zero calculation IP exposed)
 * - Live Date Header & Mobile Navigation Drawer
 */

(function () {
  'use strict';

  const i18n = {
    fr: {
      brand_sub: "Almanach & boussole temporelle",
      nav_concept: "L’Almanach",
      nav_features: "Les 4 disciplines",
      nav_simulator: "Les 12 signes",
      nav_duo: "Ming Gua & Duo",
      nav_pricing: "Éditions",
      cta_dl_top: "App Store",

      hero_chip: "Tong Shu · Qi Men Dun Jia · Feng Shui Ming Gua",
      hero_title_1: "Comme la météo du matin,",
      hero_title_2: "mais pour le rythme de vos décisions.",
      hero_desc: "Avant de lancer un projet, de signer un contrat ou d’engager une négociation délicate, consultez QiMétéo. En trois secondes, l’application traduit l’almanach traditionnel chinois en trois repères clairs : la couleur de votre journée, vos deux créneaux favorables de deux heures et l’angle exact où orienter votre chaise.",
      hero_btn_sub: "Disponible sur iPhone et iPad",
      hero_btn_main: "Télécharger sur l’App Store",
      hero_btn_discover: "Comprendre la lecture du jour",

      ledger_1_dt: "Qualité du jour",
      hero_pill_1: "12 Officiers Tong Shu & 4 Piliers",
      ledger_2_dt: "Fenêtres d’action",
      hero_pill_2: "2 créneaux de 2h par jour sans aspect négatif",
      ledger_3_dt: "Orientation spatiale",
      hero_pill_3: "Boussole 8 Palais & Feng Shui Ming Gua",

      phone_today_badge: "Aujourd’hui",
      phone_status_headline: "Feu Vert · Jour d’Ouverture",
      phone_officer: "Ouverture (開)",
      phone_seal_caption: "Jour Rouge",
      phone_advice: "Journée porteuse pour lancer un projet, signer un accord commercial ou inaugurer une collaboration.",
      phone_slot_label: "1er créneau Qi Men",
      phone_dir_label: "Positionnement",
      phone_dir_val: "Dos au Sud-Ouest (225°)",
      phone_windows_title: "Vos 2 créneaux stratégiques du jour",
      phone_windows_note: "Sans aspect négatif",
      phone_win1_label: "Accomplir des vœux · Moon",
      phone_win2_label: "Succès Financiers · Chief",

      concept_badge: "L’almanach Tong Shu",
      concept_title: "Trois couleurs pour lire la qualité réelle d’une journée.",
      concept_desc: "Dans la tradition du Tong Shu, les jours favorables s’inscrivent en rouge et les jours de retenue en noir. QiMétéo croise les 12 Officiers du Jour avec vos quatre piliers de naissance pour vous donner un signal immédiat dès le matin.",

      green_tag: "Jour Rouge · Favorable",
      green_title: "Feu Vert — Journée porteuse",
      green_desc: "Jours de Réussite, d’Ouverture, de Stabilité, de Commencement ou de Contrôle (sans opposition avec votre thème natal). C’est le moment d’avancer : lancer un projet, signer un contrat, négocier ou célébrer une union.",

      orange_tag: "Jour Ciblé · Nuancé",
      orange_title: "Feu Ambre — Journée ciblée",
      orange_desc: "Jours de Nettoyage, d’Équilibre, d’Accumulation ou de Moisson : propices pour trier, débuter un soin, clôturer un dossier ou encaisser, en plaçant vos appels décisifs dans vos deux créneaux Qi Men.",

      red_tag: "Jour Noir · Retenue",
      red_title: "Feu Rouge — Destruction, Fermeture ou Clash",
      red_desc: "Jours de Destruction, de Péril, de Fermeture ou journée en opposition frontale avec votre pilier : n’engagez aucune signature irréversible. Si une obligation s’impose, appuyez-vous uniquement sur les deux créneaux horaires du jour.",

      feat_badge: "Architecture de l’application",
      feat_title: "Le temps, la direction et l’espace réunis dans un seul instrument.",
      feat_desc: "Chaque écran de QiMétéo répond à une question pratique : quel jour choisir, à quelle heure agir, de quel côté orienter son fauteuil et comment disposer son lieu de vie.",

      feat_1_title: "Deux créneaux stratégiques par jour, purgés du négatif",
      feat_1_desc: "Chaque jour entre 07h et minuit, QiMétéo écarte systématiquement toute fenêtre comportant une structure défavorable pour ne retenir que les deux meilleurs créneaux de deux heures (Combinaisons 5★ en rouge, Accomplir des vœux, Succès Financiers, Succès Relationnels et Déités majeures).",

      feat_2_title: "Boussole des 8 Palais : de dos ou de face",
      feat_2_desc: "Selon la nature du créneau, l’application précise s’il convient de tourner le dos à la Déité (Chief, Heaven, Earth, Moon, Harmony) ou de faire face à une Combinaison, avec une boussole calée au degré près sur les huit secteurs cardinaux.",

      feat_3_title: "Recherche de dates selon vos 7 intentions de projet",
      feat_3_desc: "Filtrez les meilleures dates à venir selon votre objectif : Lancer un projet ou commerce, Signer un contrat et encaisser, Mariage et union, Immobilier et travaux, Voyage, Médecin et chirurgie (hors jours d’Accumulation et de Moisson) ou Tri et régime.",

      feat_4_title: "Feng Shui Ming Gua : maison, tête de lit et bureau",
      feat_4_desc: "À partir de votre naissance, QiMétéo détermine votre Chiffre Gua (1 à 9, groupe Est ou Ouest) et indique vos quatre orientations personnelles : vers quel mur pointer la tête de votre lit (Tian Yi, santé), dans quel axe installer votre bureau (Sheng Qi, vitalité) et quels secteurs éviter.",

      feat_5_title: "Vérification de vos rendez-vous dans le Calendrier Apple",
      feat_5_desc: "QiMétéo relit les événements déjà inscrits dans votre agenda iPhone : lorsqu’une réunion ou une signature tombe un jour de Destruction, de Fermeture ou d’opposition personnelle, elle le signale et propose une fenêtre plus porteuse.",

      feat_6_title: "Double lecture : langage courant ou terminologie classique",
      feat_6_desc: "Le mode Simple va droit au conseil pratique sans jargon. Un basculement dans les réglages active le mode Expert complet : 4 Piliers BaZi, Troncs Célestes, Branches Terrestres, 12 Officiers, Portes, Étoiles et Déités Qi Men.",

      sim_badge: "Les 12 branches terrestres",
      sim_title: "Aperçu d’une lecture selon votre signe de naissance.",
      sim_desc: "Choisissez l’animal de votre jour ou de votre année de naissance pour parcourir un exemple de bulletin quotidien tel qu’il est présenté dans l’application :",
      sim_label_slot: "Exemple de créneaux (2h)",
      sim_label_dir: "Orientation boussole",
      sim_label_ally: "Alliés San He & Liu He",

      duo_badge: "Harmonie du lieu & accord à deux",
      duo_title: "Orientations Feng Shui Ming Gua et synergie entre deux thèmes.",
      duo_desc: "Au-delà du rythme quotidien, QiMétéo étudie vos directions permanentes à la maison et compare deux dates de naissance pour identifier les jours où vos énergies s’accordent sans friction.",

      duo_p1_strong: "Synergie Duo et dates communes sur 45 jours",
      duo_p1_desc: "Comparez vos piliers avec ceux d’un conjoint, d’un associé ou d’un proche pour repérer vos alliances naturelles (San He, Liu He) et choisir un jour favorable aux deux.",
      duo_p2_strong: "Orientation de la tête de lit, du bureau et du foyer",
      duo_p2_desc: "Dormir la tête tournée vers sa direction Tian Yi soutient la récupération nocturne, tandis qu’orienter son bureau vers Sheng Qi favorise la clarté d’esprit et l’élan professionnel.",
      duo_match_label: "Alliance secrète Liu He · Zéro opposition mutuelle",
      duo_card_quote: "Exemple d’analyse croisée : dates communes favorables sur 45 jours et calcul des 4 directions personnelles (maison, lit, bureau) dans l’onglet Profil.",

      price_badge: "Éditions & Partage Familial",
      price_title: "Aujourd’hui en libre accès, l’horizon complet avec QiMétéo PRO.",
      price_desc: "Le bulletin d’aujourd’hui, ses deux créneaux stratégiques de deux heures et la boussole du jour sont gratuits sans limite de durée. L’édition PRO débloque le planificateur sur 45 jours, les sept intentions de projet, le Feng Shui Ming Gua et le mode Duo.",

      plan_free_name: "Édition Quotidienne",
      plan_free_sub: "Accès permanent",
      plan_free_desc: "Tout le nécessaire pour consulter la qualité d’aujourd’hui et ses deux créneaux horaires.",
      pfree_1: "Bulletin d’aujourd’hui (Feu Vert, Ambre ou Rouge & Officier)",
      pfree_2: "Les 2 créneaux stratégiques (2h) d’aujourd’hui",
      pfree_3: "Boussole Qi Men pour la journée en cours",
      pfree_4: "Widgets pour l’écran d’accueil et de verrouillage iOS",
      pfree_5: "Prochaines dates par projet & calendrier 45 jours (floutés)",
      pfree_6: "Orientations Feng Shui Ming Gua & Synergie Duo (floutés)",
      btn_free: "Télécharger gratuitement",

      plan_vip_ribbon: "7 jours d’essai gratuit · Partage Familial inclus",
      plan_vip_name: "QiMétéo PRO · Annuel",
      plan_vip_desc: "Soit 4,16 € par mois. Partage Familial Apple inclus pour jusqu’à six membres de votre foyer.",
      pvip_1: "Recherche de dates pour vos 7 projets sur 45 jours",
      pvip_2: "Tous les créneaux positifs du jour & audit du Calendrier Apple",
      pvip_3: "Feng Shui Ming Gua : orientations maison, tête de lit et bureau",
      pvip_4: "Mode Synergie Duo (comparaison à deux & dates communes)",
      pvip_5: "Mode Expert complet (Qi Men Yin/Yang Dun, 12 Officiers, BaZi)",
      pvip_6: "Partage Familial Apple inclus (jusqu’à 6 proches)",
      btn_vip: "Essayer 7 jours gratuitement",

      plan_month_name: "QiMétéo PRO · Mensuel",
      plan_month_desc: "Pour accompagner un lancement de projet, une signature ou un déménagement en toute liberté.",
      pmonth_1: "Recherche de dates par projet & calendrier 45 jours",
      pmonth_2: "Tous les créneaux positifs & Feng Shui Ming Gua (lit, bureau, maison)",
      pmonth_3: "Mode Synergie Duo & audit de votre agenda",
      pmonth_4: "Sans engagement, résiliable à tout moment",
      pmonth_5: "Partage Familial Apple inclus (6 personnes)",
      btn_month: "Choisir la formule mensuelle",

      priv_title: "Calculs 100 % en local sur votre appareil",
      priv_desc: "Votre date de naissance, votre Chiffre Gua, les profils de vos proches et votre journal demeurent exclusivement sur votre iPhone ou votre iPad. Aucune donnée personnelle n’est transmise à des serveurs publicitaires.",
      priv_link: "Politique de confidentialité",

      faq_badge: "Repères & questions",
      faq_title: "Questions fréquentes sur la méthode et l’application.",
      faq_1_q: "Sur quelles traditions reposent les calculs de QiMétéo ?",
      faq_1_a: "QiMétéo articule trois disciplines classiques : le Tong Shu (les 12 Officiers du Jour et l’interaction avec vos quatre piliers BaZi), le Qi Men Dun Jia (sélection de deux créneaux horaires par jour exempts d’aspects négatifs et orientation sur 8 palais) et le Feng Shui Ming Gua (Ba Zhai) pour l’orientation de votre intérieur.",
      faq_2_q: "Que comprend l’accès gratuit au quotidien ?",
      faq_2_a: "Vous accédez gratuitement chaque jour à la météo complète d’aujourd’hui (couleur du jour, Officier, pilier et affinités) ainsi qu’aux deux meilleurs créneaux stratégiques de deux heures de la journée et à la boussole. L’abonnement QiMétéo PRO débloque les prochaines dates de projet sur 45 jours, l’ensemble des créneaux positifs du jour, le profil Feng Shui Ming Gua (maison, lit, bureau) et la synergie Duo.",
      faq_3_q: "Quelle est la différence entre la boussole Qi Men et les directions Feng Shui du lit ?",
      faq_3_a: "Les deux outils agissent à des échelles différentes. La boussole Qi Men Dun Jia est temporelle : elle indique dans quelle direction orienter votre chaise pendant un créneau de deux heures pour un appel, une signature ou une négociation. Le Feng Shui Ming Gua est permanent : calculé dans l’onglet Profil selon votre naissance, il indique les quatre directions favorables de votre logement, notamment l’orientation de la tête de lit et du bureau.",
      faq_4_q: "Le Partage Familial Apple est-il inclus dans l’abonnement ?",
      faq_4_a: "Oui. Les formules QiMétéo PRO (mensuelle et annuelle) incluent nativement le Partage Familial Apple : jusqu’à six membres de votre groupe familial bénéficient de l’intégralité des fonctions PRO sur leur propre iPhone ou iPad sans supplément.",

      final_title: "Accordez vos décisions avec le bon moment.",
      final_desc: "Installez QiMétéo sur votre iPhone ou votre iPad et consultez chaque matin votre almanach décisionnel.",
      final_btn_sub: "iPhone & iPad · iOS 17+",
      final_btn_main: "Télécharger QiMétéo sur l’App Store",

      footer_bio: "Almanach décisionnel quotidien : sélection de dates par projet (12 Officiers Tong Shu), créneaux stratégiques Qi Men Dun Jia et boussole Feng Shui Ming Gua. Conçu et développé en France par Xavier Larrodé.",
      footer_app: "Navigation",
      footer_legal: "Informations légales",
      footer_privacy: "Politique de confidentialité",
      footer_terms: "Conditions d’utilisation",
      footer_contact: "Contact & assistance"
    },

    en: {
      brand_sub: "Celestial almanac & decision compass",
      nav_concept: "The Almanac",
      nav_features: "The 4 disciplines",
      nav_simulator: "12 Signs",
      nav_duo: "Ming Gua & Duo",
      nav_pricing: "Editions",
      cta_dl_top: "App Store",

      hero_chip: "Tong Shu · Qi Men Dun Jia · Ming Gua Feng Shui",
      hero_title_1: "Like the morning weather,",
      hero_title_2: "but for the rhythm of your decisions.",
      hero_desc: "Before launching a project, signing a contract, or entering a delicate negotiation, check QiMétéo. In three seconds, the app translates the classical Chinese almanac into three clear bearings: your day's quality, your two favorable two-hour windows, and the exact angle to face your chair.",
      hero_btn_sub: "Available on iPhone and iPad",
      hero_btn_main: "Download on the App Store",
      hero_btn_discover: "Understand the daily reading",

      ledger_1_dt: "Day quality",
      hero_pill_1: "12 Tong Shu Officers & 4 Pillars",
      ledger_2_dt: "Action windows",
      hero_pill_2: "2 clean two-hour slots per day",
      ledger_3_dt: "Spatial alignment",
      hero_pill_3: "8-Palace Compass & Ming Gua Feng Shui",

      phone_today_badge: "Today",
      phone_status_headline: "Green Light · Open Day",
      phone_officer: "Open (開)",
      phone_seal_caption: "Red Day",
      phone_advice: "Auspicious day to launch a project, sign an agreement, or initiate a new collaboration.",
      phone_slot_label: "1st Qi Men window",
      phone_dir_label: "Positioning",
      phone_dir_val: "Back to South-West (225°)",
      phone_windows_title: "Your 2 daily strategic windows",
      phone_windows_note: "Zero negative clash",
      phone_win1_label: "Fulfill wishes · Moon",
      phone_win2_label: "Financial success · Chief",

      concept_badge: "The Tong Shu Almanac",
      concept_title: "Three signals to read the true quality of a day.",
      concept_desc: "In classical Tong Shu almanacs, auspicious days are printed in red and days of restraint in black. QiMétéo crosses the 12 Day Officers with your four birth pillars to give you an immediate reading each morning.",

      green_tag: "Red Day · Auspicious",
      green_title: "Green Light — Supportive day",
      green_desc: "Success, Open, Stable, Establish, or Initiate days (with no personal clash). The right moment to move forward: launch a project, sign a contract, negotiate, or celebrate a union.",

      orange_tag: "Targeted Day · Balanced",
      orange_title: "Amber Light — Targeted day",
      orange_desc: "Remove, Balance, Full, or Harvest days: suited for organizing, beginning a health regimen, closing files, or collecting payments while scheduling key calls in your two Qi Men windows.",

      red_tag: "Black Day · Restraint",
      red_title: "Red Light — Destruction, Close, or Clash",
      red_desc: "Destruction, Danger, or Close days, or days clashing directly with your pillar: postpone irreversible signings. When obligated to act, rely strictly on the two daily Qi Men windows.",

      feat_badge: "Application architecture",
      feat_title: "Time, direction, and space brought together in one instrument.",
      feat_desc: "Every screen in QiMétéo answers a concrete question: which day to choose, which hour to act, which way to turn your chair, and how to orient your home.",

      feat_1_title: "Two strategic windows per day, cleared of negative formations",
      feat_1_desc: "Each day between 07:00 and midnight, QiMétéo filters out every slot carrying an unfavorable structure to keep only the top two two-hour windows (5★ red combinations, Fulfill Wishes, Financial & Relationship configurations, and major Deities).",

      feat_2_title: "8-Palace Compass: back or face positioning",
      feat_2_desc: "Depending on the structure of the hour, the app specifies whether to sit with your back to the Deity (Chief, Heaven, Earth, Moon, Harmony) or facing a Combination, with a live compass calibrated to the eight cardinal azimuths.",

      feat_3_title: "Date finder tailored to your 7 project intentions",
      feat_3_desc: "Filter upcoming dates for your exact goal: Launch a project or business, Sign a contract & collect, Marriage & union, Real estate & renovation, Travel, Doctor & surgery (excluding Full and Harvest days), or Declutter & diet.",

      feat_4_title: "Ming Gua Feng Shui: home, bed headboard, and desk",
      feat_4_desc: "From your birth date, QiMétéo computes your Gua Number (1 to 9, East or West group) and reveals your four personal orientations: where to point your bed headboard (Tian Yi, health), how to align your desk (Sheng Qi, vitality), and which sectors to avoid.",

      feat_5_title: "Smart review of your Apple Calendar meetings",
      feat_5_desc: "QiMétéo reads upcoming events in your iPhone calendar: whenever an important meeting falls on a Destruction, Close, or personal clash day, it flags the conflict and suggests a stronger window.",

      feat_6_title: "Dual reading: everyday clarity or classical terminology",
      feat_6_desc: "Simple mode gives direct, practical guidance with zero jargon. A single toggle in Settings unlocks full Expert mode: BaZi Four Pillars, Heavenly Stems, Earthly Branches, 12 Officers, Gates, Stars, and Qi Men Deities.",

      sim_badge: "The 12 Earthly Branches",
      sim_title: "Preview a daily reading for your birth sign.",
      sim_desc: "Select the animal of your birth day or birth year to explore a sample daily briefing as presented inside the application:",
      sim_label_slot: "Sample 2h windows",
      sim_label_dir: "Compass bearing",
      sim_label_ally: "San He & Liu He allies",

      duo_badge: "Home harmony & pair alignment",
      duo_title: "Ming Gua Feng Shui orientations and synergy between two charts.",
      duo_desc: "Beyond daily timing, QiMétéo maps your permanent directions at home and compares two birth dates to find days when both energies align without friction.",

      duo_p1_strong: "Duo Synergy and shared dates over 45 days",
      duo_p1_desc: "Compare your pillars with a partner, business associate, or family member to spot natural alliances (San He, Liu He) and pick a day favorable to both of you.",
      duo_p2_strong: "Bed headboard, desk, and home orientation",
      duo_p2_desc: "Sleeping with your head pointed toward your Tian Yi direction supports deep recovery, while orienting your desk toward Sheng Qi fosters clarity and momentum.",
      duo_match_label: "Secret Liu He Alliance · Zero mutual clash",
      duo_card_quote: "Sample cross-analysis: favorable shared dates over 45 days and calculation of your 4 personal home, bed, and desk directions in the Profile tab.",

      price_badge: "Editions & Family Sharing",
      price_title: "Today is free forever; unlock the full horizon with QiMétéo PRO.",
      price_desc: "Today's briefing, its two strategic two-hour windows, and today's compass are free without time limits. The PRO edition unlocks the 45-day planner, all seven project intentions, Ming Gua Feng Shui, and Duo mode.",

      plan_free_name: "Daily Edition",
      plan_free_sub: "Free forever",
      plan_free_desc: "Everything needed to consult today's quality and its two strategic time windows.",
      pfree_1: "Today's briefing (Green, Amber, or Red & Day Officer)",
      pfree_2: "Today's 2 strategic (2h) windows",
      pfree_3: "Qi Men compass for the current day",
      pfree_4: "iOS Home Screen and Lock Screen widgets",
      pfree_5: "Upcoming project dates & 45-day calendar (blurred)",
      pfree_6: "Ming Gua Feng Shui orientations & Duo Synergy (blurred)",
      btn_free: "Download for free",

      plan_vip_ribbon: "7-day free trial · Family Sharing included",
      plan_vip_name: "QiMétéo PRO · Annual",
      plan_vip_desc: "€4.16 per month billed annually. Apple Family Sharing included for up to six household members.",
      pvip_1: "Date finder for all 7 project intentions over 45 days",
      pvip_2: "All positive daily windows & Apple Calendar audit",
      pvip_3: "Ming Gua Feng Shui: home, bed headboard, and desk directions",
      pvip_4: "Duo Synergy mode (pair comparison & shared dates)",
      pvip_5: "Full Expert mode (Qi Men Yin/Yang Dun, 12 Officers, BaZi)",
      pvip_6: "Apple Family Sharing included (up to 6 family members)",
      btn_vip: "Start 7-day free trial",

      plan_month_name: "QiMétéo PRO · Monthly",
      plan_month_desc: "Ideal for accompanying a project launch, signing, or move with complete flexibility.",
      pmonth_1: "Project date finder & 45-day calendar",
      pmonth_2: "All positive windows & Ming Gua Feng Shui (bed, desk, home)",
      pmonth_3: "Duo Synergy mode & calendar audit",
      pmonth_4: "No commitment, cancel anytime",
      pmonth_5: "Apple Family Sharing included (6 people)",
      btn_month: "Choose monthly edition",

      priv_title: "Computed 100% locally on your device",
      priv_desc: "Your birth date, your Gua Number, your family profiles, and your journal stay exclusively on your iPhone or iPad. No personal data is ever sent to advertising servers.",
      priv_link: "Privacy policy",

      faq_badge: "Reference & questions",
      faq_title: "Frequently asked questions about the method and the app.",
      faq_1_q: "Which classical traditions power QiMétéo's calculations?",
      faq_1_a: "QiMétéo brings together three classical disciplines: Tong Shu (the 12 Day Officers and their interaction with your four BaZi pillars), Qi Men Dun Jia (selection of two daily two-hour windows free of negative aspects and 8-palace orientation), and Ming Gua Feng Shui (Ba Zhai) for your home directions.",
      faq_2_q: "What is included in free daily access?",
      faq_2_a: "Every day, you get free access to Today's full forecast (day color, Officer, pillar, and affinities) plus the day's top two strategic two-hour windows and the live compass. QiMétéo PRO unlocks upcoming project dates over 45 days, all positive daily windows, Ming Gua Feng Shui (home, bed, desk), and Duo Synergy.",
      faq_3_q: "How do the Qi Men compass and Ming Gua bed directions differ?",
      faq_3_a: "They operate on two complementary scales. The Qi Men Dun Jia compass is temporal: it shows which direction to face your chair during a two-hour window for a call, signing, or negotiation. Ming Gua Feng Shui is permanent: computed in your Profile tab from your birth date, it reveals the four favorable directions of your home, including your bed headboard and desk.",
      faq_4_q: "Is Apple Family Sharing included in the subscription?",
      faq_4_a: "Yes. Both QiMétéo PRO editions (monthly and annual) natively include Apple Family Sharing: up to six members of your family group enjoy full PRO access on their own iPhone or iPad at no extra cost.",

      final_title: "Align your decisions with the right moment.",
      final_desc: "Install QiMétéo on your iPhone or iPad and consult your decision almanac each morning.",
      final_btn_sub: "iPhone & iPad · iOS 17+",
      final_btn_main: "Download QiMétéo on the App Store",

      footer_bio: "Daily decision almanac: project date selection (12 Tong Shu Officers), strategic Qi Men Dun Jia windows, and Ming Gua Feng Shui compass. Designed and built in France by Xavier Larrodé.",
      footer_app: "Navigation",
      footer_legal: "Legal",
      footer_privacy: "Privacy policy",
      footer_terms: "Terms of use",
      footer_contact: "Contact & support"
    }
  };

  // =========================================================================
  // STATIC ILLUSTRATIVE ZODIAC SHOWCASE (NO ENGINE IP EXPOSED)
  // =========================================================================
  const zodiacShowcase = {
    rat: {
      name_fr: "Rat (子)", name_en: "Rat (Zi)",
      elem_fr: "Élément Eau · Yang", elem_en: "Water Element · Yang",
      status_fr: "Feu Vert (86%)", status_en: "Green Light (86%)",
      class: "status-green",
      qual_fr: "Clarté mentale & opportunités", qual_en: "Mental clarity & opportunity",
      text_fr: "Exemple de lecture dans l’application : journée propice aux négociations, aux prises de contact et au lancement d’initiatives.",
      text_en: "Sample reading in the app: favorable day for negotiations, outreach, and launching initiatives.",
      slot: "09h00 – 11h00 & 15h00 – 17h00",
      dir_fr: "Dos au Nord (0°)", dir_en: "Back to North (0°)",
      ally_fr: "Dragon & Singe · Bœuf", ally_en: "Dragon & Monkey · Ox"
    },
    ox: {
      name_fr: "Bœuf (丑)", name_en: "Ox (Chou)",
      elem_fr: "Élément Terre · Yin", elem_en: "Earth Element · Yin",
      status_fr: "Feu Vert (84%)", status_en: "Green Light (84%)",
      class: "status-green",
      qual_fr: "Ancrage & stabilité", qual_en: "Grounding & stability",
      text_fr: "Exemple de lecture dans l’application : journée favorable pour consolider un projet immobilier, signer un contrat durable ou structurer vos finances.",
      text_en: "Sample reading in the app: strong day to solidify a property project, sign a long-term agreement, or structure your finances.",
      slot: "11h00 – 13h00 & 15h00 – 17h00",
      dir_fr: "Dos au Nord-Est (45°)", dir_en: "Back to North-East (45°)",
      ally_fr: "Serpent & Coq · Rat", ally_en: "Snake & Rooster · Rat"
    },
    tiger: {
      name_fr: "Tigre (寅)", name_en: "Tiger (Yin)",
      elem_fr: "Élément Bois · Yang", elem_en: "Wood Element · Yang",
      status_fr: "Feu Vert (90%)", status_en: "Green Light (90%)",
      class: "status-green",
      qual_fr: "Élan & lancement de projet", qual_en: "Momentum & project launch",
      text_fr: "Exemple de lecture dans l’application : élan porteur pour lancer un projet, inaugurer une activité ou défendre votre vision.",
      text_en: "Sample reading in the app: strong momentum to launch a project, open a business, or present your vision.",
      slot: "09h00 – 11h00 & 13h00 – 15h00",
      dir_fr: "Dos à l’Est (90°)", dir_en: "Back to East (90°)",
      ally_fr: "Cheval & Chien · Cochon", ally_en: "Horse & Dog · Pig"
    },
    rabbit: {
      name_fr: "Lapin (卯)", name_en: "Rabbit (Mao)",
      elem_fr: "Élément Bois · Yin", elem_en: "Wood Element · Yin",
      status_fr: "Feu Ambre (74%)", status_en: "Amber Light (74%)",
      class: "status-orange",
      qual_fr: "Diplomatie & conciliation", qual_en: "Diplomacy & harmony",
      text_fr: "Exemple de lecture dans l’application : privilégiez la négociation posée, les accords relationnels et concentrez vos démarches clés sur vos deux créneaux horaires.",
      text_en: "Sample reading in the app: favor measured diplomacy and schedule key moves inside your two daily windows.",
      slot: "13h00 – 15h00 & 17h00 – 19h00",
      dir_fr: "Dos au Sud-Est (135°)", dir_en: "Back to South-East (135°)",
      ally_fr: "Cochon & Chèvre · Chien", ally_en: "Pig & Goat · Dog"
    },
    dragon: {
      name_fr: "Dragon (辰)", name_en: "Dragon (Chen)",
      elem_fr: "Élément Terre · Yang", elem_en: "Earth Element · Yang",
      status_fr: "Feu Vert (91%)", status_en: "Green Light (91%)",
      class: "status-green",
      qual_fr: "Rayonnement & décisions clés", qual_en: "Influence & key decisions",
      text_fr: "Exemple de lecture dans l’application : journée d’ouverture idéale pour lancer un projet majeur, officialiser un contrat ou conclure un partenariat.",
      text_en: "Sample reading in the app: ideal opening day to launch a major project, formalize a contract, or seal a partnership.",
      slot: "13h00 – 15h00 & 15h00 – 17h00",
      dir_fr: "Dos au Sud-Ouest (225°)", dir_en: "Back to South-West (225°)",
      ally_fr: "Rat & Singe · Coq", ally_en: "Rat & Monkey · Rooster"
    },
    snake: {
      name_fr: "Serpent (巳)", name_en: "Snake (Si)",
      elem_fr: "Élément Feu · Yin", elem_en: "Fire Element · Yin",
      status_fr: "Feu Vert (85%)", status_en: "Green Light (85%)",
      class: "status-green",
      qual_fr: "Lucidité & stratégie financière", qual_en: "Clarity & financial strategy",
      text_fr: "Exemple de lecture dans l’application : grande lucidité pour examiner un contrat, négocier un budget ou préparer une décision stratégique.",
      text_en: "Sample reading in the app: sharp clarity to review contracts, negotiate budgets, or prepare a strategic move.",
      slot: "09h00 – 11h00 & 17h00 – 19h00",
      dir_fr: "Dos au Sud (180°)", dir_en: "Back to South (180°)",
      ally_fr: "Bœuf & Coq · Singe", ally_en: "Ox & Rooster · Monkey"
    },
    horse: {
      name_fr: "Cheval (午)", name_en: "Horse (Wu)",
      elem_fr: "Élément Feu · Yang", elem_en: "Fire Element · Yang",
      status_fr: "Feu Ambre (68%)", status_en: "Amber Light (68%)",
      class: "status-orange",
      qual_fr: "Équilibre & canalisation", qual_en: "Balance & focus",
      text_fr: "Exemple de lecture dans l’application : journée ciblée propice pour trier, finaliser vos dossiers en cours et agir pendant vos deux créneaux favorables.",
      text_en: "Sample reading in the app: targeted day suited for organizing, completing ongoing work, and acting within your two favorable windows.",
      slot: "11h00 – 13h00 & 15h00 – 17h00",
      dir_fr: "Dos au Nord-Ouest (315°)", dir_en: "Back to North-West (315°)",
      ally_fr: "Tigre & Chien · Chèvre", ally_en: "Tiger & Dog · Goat"
    },
    goat: {
      name_fr: "Chèvre (未)", name_en: "Goat (Wei)",
      elem_fr: "Élément Terre · Yin", elem_en: "Earth Element · Yin",
      status_fr: "Feu Vert (83%)", status_en: "Green Light (83%)",
      class: "status-green",
      qual_fr: "Harmonie & relations", qual_en: "Harmony & relationships",
      text_fr: "Exemple de lecture dans l’application : belle fluidité pour les unions, les rendez-vous relationnels, l’aménagement du foyer et les accords amiables.",
      text_en: "Sample reading in the app: smooth flow for unions, relationship meetings, home projects, and win-win agreements.",
      slot: "09h00 – 11h00 & 13h00 – 15h00",
      dir_fr: "Dos au Sud-Ouest (225°)", dir_en: "Back to South-West (225°)",
      ally_fr: "Cochon & Lapin · Cheval", ally_en: "Pig & Rabbit · Horse"
    },
    monkey: {
      name_fr: "Singe (申)", name_en: "Monkey (Shen)",
      elem_fr: "Élément Métal · Yang", elem_en: "Metal Element · Yang",
      status_fr: "Feu Vert (92%)", status_en: "Green Light (92%)",
      class: "status-green",
      qual_fr: "Ingéniosité & accord commercial", qual_en: "Ingenuity & commercial success",
      text_fr: "Exemple de lecture dans l’application : alignement très porteur pour débloquer une négociation, conclure une vente ou lancer un projet.",
      text_en: "Sample reading in the app: highly favorable alignment to unlock negotiations, close a deal, or launch a project.",
      slot: "15h00 – 17h00 & 19h00 – 21h00",
      dir_fr: "Dos à l’Ouest (270°)", dir_en: "Back to West (270°)",
      ally_fr: "Rat & Dragon · Serpent", ally_en: "Rat & Dragon · Snake"
    },
    rooster: {
      name_fr: "Coq (酉)", name_en: "Rooster (You)",
      elem_fr: "Élément Métal · Yin", elem_en: "Metal Element · Yin",
      status_fr: "Feu Vert (87%)", status_en: "Green Light (87%)",
      class: "status-green",
      qual_fr: "Précision & reconnaissance", qual_en: "Precision & recognition",
      text_fr: "Exemple de lecture dans l’application : vos arguments portent avec justesse. Journée porteuse pour un entretien, une présentation ou une signature.",
      text_en: "Sample reading in the app: your arguments land with precision. Supportive day for interviews, presentations, or signings.",
      slot: "09h00 – 11h00 & 15h00 – 17h00",
      dir_fr: "Dos au Nord-Est (45°)", dir_en: "Back to North-East (45°)",
      ally_fr: "Bœuf & Serpent · Dragon", ally_en: "Ox & Snake • Dragon"
    },
    dog: {
      name_fr: "Chien (戌)", name_en: "Dog (Xu)",
      elem_fr: "Élément Terre · Yang", elem_en: "Earth Element · Yang",
      status_fr: "Feu Ambre (72%)", status_en: "Amber Light (72%)",
      class: "status-orange",
      qual_fr: "Fiabilité & protection", qual_en: "Reliability & protection",
      text_fr: "Exemple de lecture dans l’application : consolidez vos partenariats de confiance et utilisez vos deux créneaux horaires pour vos démarches importantes.",
      text_en: "Sample reading in the app: strengthen trusted partnerships and use your two favorable windows for key steps.",
      slot: "11h00 – 13h00 & 17h00 – 19h00",
      dir_fr: "Dos au Sud (180°)", dir_en: "Back to South (180°)",
      ally_fr: "Tigre & Cheval · Lapin", ally_en: "Tiger & Horse · Rabbit"
    },
    pig: {
      name_fr: "Cochon (亥)", name_en: "Pig (Hai)",
      elem_fr: "Élément Eau · Yin", elem_en: "Water Element · Yin",
      status_fr: "Feu Vert (88%)", status_en: "Green Light (88%)",
      class: "status-green",
      qual_fr: "Abondance & ouverture", qual_en: "Abundance & openness",
      text_fr: "Exemple de lecture dans l’application : atmosphère propice aux accords équilibrés, aux déplacements et aux projets familiaux ou professionnels.",
      text_en: "Sample reading in the app: warm atmosphere for balanced agreements, travel, and family or business initiatives.",
      slot: "13h00 – 15h00 & 15h00 – 17h00",
      dir_fr: "Dos à l’Est (90°)", dir_en: "Back to East (90°)",
      ally_fr: "Lapin & Chèvre · Tigre", ally_en: "Rabbit & Goat · Tiger"
    }
  };

  let currentLang = 'fr';
  let currentZodiac = 'dragon';

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
      const key = el.getAttribute('data-i18n').trim();
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
