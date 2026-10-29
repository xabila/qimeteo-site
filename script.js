/**
 * QiMétéo Official Website — Interactive Showcase
 * - Bilingual Switcher (FR / EN)
 * - Live Date Header & Mobile Navigation Drawer
 * - Zero calculation IP exposed
 */

(function () {
  'use strict';

  const i18n = {
    fr: {
      brand_sub: "Almanach & boussole temporelle",
      nav_concept: "L’Almanach",
      nav_pillars: "Date & heure natales",
      nav_features: "Les 6 instruments",
      nav_duo: "Ming Gua & Duo",
      nav_pricing: "Éditions",
      cta_dl_top: "Bientôt sur l’App Store",

      hero_chip: "Tong Shu · Qi Men Dun Jia · BaZi & Ming Gua",
      hero_title_1: "Comme la météo du matin,",
      hero_title_2: "mais calculée sur votre date et votre heure de naissance.",
      hero_desc: "Une journée porteuse pour l’un peut être en opposition frontale pour l’autre. À partir de votre date et de votre heure exactes de naissance (vos 4 Piliers BaZi), QiMétéo croise chaque matin l’Officier du Jour et le Qi Men Dun Jia pour vous indiquer la couleur de votre journée, vos deux créneaux favorables de deux heures et l’angle où orienter votre fauteuil.",
      hero_btn_sub: "iPhone & iPad · Sortie imminente",
      hero_btn_main: "Bientôt disponible sur l’App Store",
      hero_btn_discover: "Voir comment vos 4 Piliers sont calculés",

      ledger_1_dt: "Thème natal complet",
      hero_pill_1: "Année, Mois solaire, Jour & Heure de naissance",
      ledger_2_dt: "Fenêtres d’action",
      hero_pill_2: "2 créneaux de 2h par jour sans aspect négatif",
      ledger_3_dt: "Orientation spatiale",
      hero_pill_3: "Boussole 8 Palais & Feng Shui Ming Gua",

      phone_today_badge: "Aujourd’hui",
      phone_pillar_tag: "4 Piliers · 9h30",
      phone_status_headline: "Feu Vert · Jour d’Ouverture",
      phone_officer: "Ouverture (開) · Sans Clash",
      phone_seal_caption: "Jour Rouge",
      phone_advice: "Harmonie directe avec votre Pilier du Jour et de l’Heure : journée idéale pour lancer un projet, signer un contrat ou négocier.",
      phone_slot_label: "1er créneau Qi Men",
      phone_dir_label: "Positionnement",
      phone_dir_val: "Dos au Sud-Ouest (225°)",
      phone_windows_title: "Vos 2 créneaux stratégiques du jour",
      phone_windows_note: "Sans aspect négatif",
      phone_win1_label: "Accomplir des vœux · Moon",
      phone_win2_label: "Succès Financiers · Chief",

      concept_badge: "L’almanach Tong Shu",
      concept_title: "Trois couleurs pour lire la qualité réelle d’une journée.",
      concept_desc: "Dans la tradition du Tong Shu, les jours favorables s’inscrivent en rouge et les jours de retenue en noir. QiMétéo croise les 12 Officiers du Jour avec vos quatre piliers de naissance (date et heure) pour vous donner un signal immédiat dès le matin.",

      green_tag: "Jour Rouge · Favorable",
      green_title: "Feu Vert — Journée porteuse",
      green_desc: "Jours de Réussite, d’Ouverture, de Stabilité, de Commencement ou de Contrôle, sans opposition avec vos piliers de naissance. C’est le moment d’avancer : lancer un projet, signer un contrat, négocier ou célébrer une union.",

      orange_tag: "Jour Ciblé · Nuancé",
      orange_title: "Feu Ambre — Journée ciblée",
      orange_desc: "Jours de Nettoyage, d’Équilibre, d’Accumulation ou de Moisson : propices pour trier, débuter un soin, clôturer un dossier ou encaisser, en plaçant vos appels décisifs dans vos deux créneaux Qi Men.",

      red_tag: "Jour Noir · Retenue",
      red_title: "Feu Rouge — Destruction, Fermeture ou Clash",
      red_desc: "Jours de Destruction, de Péril, de Fermeture ou journée en opposition frontale avec votre pilier du Jour ou de l’Année : n’engagez aucune signature irréversible. Si une obligation s’impose, appuyez-vous uniquement sur les deux créneaux horaires du jour.",

      pillars_badge: "Date & heure de naissance",
      pillars_title: "Pourquoi le seul signe de l’année ne suffit jamais.",
      pillars_desc: "En métaphysique chinoise, se limiter à l’animal de l’année de naissance ignore les trois quarts de votre thème. QiMétéo calcule vos quatre piliers (BaZi) à partir de votre date et de votre heure de naissance pour évaluer la résonance exacte de chaque journée avec vous.",
      pil_1_title: "Pilier de l’Année & Ming Gua",
      pil_1_desc: "Détermine votre cercle extérieur, votre rapport au monde et votre Chiffre Ming Gua (1 à 9), qui fixe vos quatre directions favorables permanentes à la maison.",
      pil_2_title: "Pilier du Mois Solaire",
      pil_2_desc: "Calé sur les 24 périodes solaires (JieQi), il gouverne votre climat énergétique, votre activité professionnelle et la force saisonnière de vos éléments.",
      pil_3_tag: "Maître du Jour",
      pil_3_title: "Pilier du Jour (Cœur du calcul)",
      pil_3_desc: "Votre identité profonde et votre conjoint. Un Clash frontal entre le jour courant et votre Pilier du Jour déclenche immédiatement une alerte de prudence personnalisée.",
      pil_4_title: "Pilier de l’Heure de Naissance",
      pil_4_desc: "Lié à vos projets, vos créations et l’aboutissement de vos actions. Il affine le score quotidien et révèle les harmonies subtiles heure par heure.",

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

      duo_badge: "Harmonie du lieu & accord à deux",
      duo_title: "Orientations Feng Shui Ming Gua et synergie entre deux thèmes.",
      duo_desc: "Au-delà du rythme quotidien, QiMétéo étudie vos directions permanentes à la maison et compare deux thèmes complets (dates et heures de naissance) pour identifier les jours où vos énergies s’accordent sans friction.",

      duo_p1_strong: "Synergie Duo sur vos 4 Piliers et dates communes",
      duo_p1_desc: "Comparez vos piliers avec ceux d’un conjoint, d’un associé ou d’un proche pour repérer vos alliances naturelles (San He, Liu He) et choisir un jour favorable aux deux.",
      duo_p2_strong: "Orientation de la tête de lit, du bureau et du foyer",
      duo_p2_desc: "Dormir la tête tournée vers sa direction Tian Yi soutient la récupération nocturne, tandis qu’orienter son bureau vers Sheng Qi favorise la clarté d’esprit et l’élan professionnel.",
      duo_card_left_hdr: "Comparaison 4 Piliers · 六合",
      duo_card_right_hdr: "Ming Gua · 八宅",
      duo_p_a: "Thème A · Jour & Heure",
      duo_gua_a: "Gua 3 (Zhen · Groupe Est)",
      duo_p_b: "Thème B · Jour & Heure",
      duo_gua_b: "Gua 9 (Li · Groupe Est)",
      duo_match_label: "Combinaison Tronc & Branche · Zéro opposition mutuelle",
      gua_bed_lbl: "Tête de lit (Tian Yi)",
      gua_bed_val: "Nord (0°)",
      gua_desk_lbl: "Bureau (Sheng Qi)",
      gua_desk_val: "Sud (180°)",

      price_badge: "Éditions & Partage Familial",
      price_title: "Aujourd’hui en libre accès, l’horizon complet avec QiMétéo Premium.",
      price_desc: "Au lancement sur l’App Store, le bulletin d’aujourd’hui, ses deux créneaux stratégiques de deux heures et la boussole du jour seront gratuits sans limite de durée. L’édition Premium débloquera le planificateur sur 45 jours, les sept intentions de projet, le Feng Shui Ming Gua et le mode Duo.",

      plan_free_name: "Édition Quotidienne",
      plan_free_sub: "Accès permanent",
      plan_free_label: "Gratuit",
      plan_see_offers: "Voir les offres dans l’app",
      plan_see_offers_year: "Voir les offres QiMétéo Premium annuel dans l’app",
      plan_see_offers_month: "Voir les offres QiMétéo Premium mensuel dans l’app",
      plan_free_desc: "Tout le nécessaire pour consulter la qualité d’aujourd’hui et ses deux créneaux horaires.",
      pfree_1: "Bulletin d’aujourd’hui selon vos date et heure de naissance",
      pfree_2: "Les 2 créneaux stratégiques (2h) d’aujourd’hui",
      pfree_3: "Boussole Qi Men pour la journée en cours",
      pfree_4: "Widgets pour l’écran d’accueil et de verrouillage iOS",
      pfree_5: "Prochaines dates par projet & calendrier 45 jours (floutés)",
      pfree_6: "Orientations Feng Shui Ming Gua & Synergie Duo (floutés)",
      btn_free: "Bientôt disponible sur l’App Store",

      plan_vip_ribbon: "7 jours d’essai gratuit · Partage Familial inclus",
      plan_vip_name: "QiMétéo Premium · Annuel",
      plan_vip_desc: "Partage Familial Apple inclus pour jusqu’à six membres de votre foyer.",
      pvip_1: "Recherche de dates pour vos 7 projets sur 45 jours",
      pvip_2: "Tous les créneaux positifs du jour & audit du Calendrier Apple",
      pvip_3: "Feng Shui Ming Gua : orientations maison, tête de lit et bureau",
      pvip_4: "Mode Synergie Duo (comparaison à deux & dates communes)",
      pvip_5: "Mode Expert complet (Qi Men Yin/Yang Dun, 12 Officiers, BaZi)",
      pvip_6: "Partage Familial Apple inclus (jusqu’à 6 proches)",
      btn_vip: "Bientôt disponible · 7 jours d’essai",

      plan_month_name: "QiMétéo Premium · Mensuel",
      plan_month_desc: "Pour accompagner un lancement de projet, une signature ou un déménagement en toute liberté.",
      pmonth_1: "Recherche de dates par projet & calendrier 45 jours",
      pmonth_2: "Tous les créneaux positifs & Feng Shui Ming Gua (lit, bureau, maison)",
      pmonth_3: "Mode Synergie Duo & audit de votre agenda",
      pmonth_4: "Sans engagement, résiliable à tout moment",
      pmonth_5: "Partage Familial Apple inclus (6 personnes)",
      btn_month: "Bientôt disponible sur l’App Store",

      priv_title: "Calculs 100 % en local sur votre appareil",
      priv_desc: "Votre date et votre heure de naissance, votre Chiffre Gua, les profils de vos proches et votre journal demeurent exclusivement sur votre iPhone ou votre iPad. Aucune donnée personnelle n’est transmise à des serveurs publicitaires.",
      priv_link: "Politique de confidentialité",

      faq_badge: "Repères & questions",
      faq_title: "Questions fréquentes sur la méthode et l’application.",
      faq_1_q: "Pourquoi renseigner sa date et son heure de naissance ?",
      faq_1_a: "En métaphysique chinoise (BaZi et Tong Shu), l’année de naissance ne représente qu’un seul pilier sur quatre. Votre jour de naissance détermine votre Maître du Jour (le pilier le plus sensible aux oppositions quotidiennes) et votre heure de naissance affine vos affinités énergétiques pour vos projets. Si vous ne connaissez pas votre heure de naissance, QiMétéo fonctionne également sur vos trois premiers piliers.",
      faq_2_q: "Que comprendra l’accès gratuit au quotidien ?",
      faq_2_a: "Vous accéderez gratuitement chaque jour à la météo complète d’aujourd’hui (couleur du jour, Officier, pilier et affinités avec votre thème natal) ainsi qu’aux deux meilleurs créneaux stratégiques de deux heures de la journée et à la boussole. L’abonnement QiMétéo Premium débloquera les prochaines dates de projet sur 45 jours, l’ensemble des créneaux positifs du jour, le profil Feng Shui Ming Gua (maison, lit, bureau) et la synergie Duo.",
      faq_3_q: "Quelle est la différence entre la boussole Qi Men et les directions Feng Shui du lit ?",
      faq_3_a: "Les deux outils agissent à des échelles différentes. La boussole Qi Men Dun Jia est temporelle : elle indique dans quelle direction orienter votre chaise pendant un créneau de deux heures pour un appel, une signature ou une négociation. Le Feng Shui Ming Gua est permanent : calculé dans l’onglet Profil selon votre naissance, il indique les quatre directions favorables de votre logement, notamment l’orientation de la tête de lit et du bureau.",
      faq_4_q: "Le Partage Familial Apple sera-t-il inclus dans l’abonnement ?",
      faq_4_a: "Oui. Les formules QiMétéo Premium (mensuelle et annuelle) incluent nativement le Partage Familial Apple : jusqu’à six membres de votre groupe familial bénéficient de l’intégralité des fonctions Premium sur leur propre iPhone ou iPad sans supplément.",

      final_title: "Accordez vos décisions avec le bon moment.",
      final_desc: "QiMétéo arrive très prochainement sur l’App Store pour iPhone et iPad.",
      final_btn_sub: "iPhone & iPad · iOS 17+",
      final_btn_main: "Bientôt disponible sur l’App Store",

      footer_bio: "Almanach décisionnel quotidien calculé sur votre date et votre heure de naissance : sélection de dates par projet (12 Officiers Tong Shu), créneaux stratégiques Qi Men Dun Jia et boussole Feng Shui Ming Gua. Conçu et développé en France par Xavier Larrodé.",
      footer_app: "Navigation",
      footer_legal: "Informations légales",
      footer_privacy: "Politique de confidentialité",
      footer_terms: "Conditions d’utilisation",
      footer_support: "Assistance",
      footer_contact: "Contact & assistance",
      lang_aria: "Changer de langue",

      support_doc_title: "Assistance — QiMétéo",
      support_meta: "Assistance QiMétéo : gérer un abonnement Apple, restaurer un achat, widgets iOS, essai gratuit et contact.",
      support_back: "Retour à l’accueil QiMétéo",
      support_title: "Assistance",
      support_updated: "Dernière mise à jour : 29 octobre 2026",
      support_intro: "Réponses courtes aux questions les plus fréquentes. QiMétéo arrive bientôt sur l’App Store pour iPhone (compatible iPad). Les offres s’affichent dans l’application.",
      support_contact_h: "Contact",
      support_contact_p: "Pour toute question :",
      support_sub_h: "Gérer un abonnement",
      support_sub_p: "Les abonnements QiMétéo Premium sont gérés par l’App Store d’Apple. Pour les consulter, les modifier ou les résilier : Réglages iOS > Identifiant Apple > Abonnements. La résiliation se fait dans votre compte Apple ID, au moins 24 h avant l’échéance. Le Partage Familial Apple est inclus jusqu’à six membres.",
      support_restore_h: "Restaurer un achat",
      support_restore_p: "Les achats sont rattachés à votre identifiant Apple et gérés par l’App Store. Pour retrouver un abonnement déjà souscrit, reconnectez-vous avec le même identifiant Apple sur votre iPhone (compatible iPad) : l’App Store rétablit les achats associés à ce compte. QiMétéo n’a pas accès à vos données bancaires.",
      support_widget_h: "Widgets",
      support_widget_p: "L’édition quotidienne inclut les widgets de l’écran d’accueil et de l’écran de verrouillage iOS. Ils s’appuient sur les calculs effectués sur votre appareil (date et heure de naissance, chiffre Gua) et ne transmettent aucune donnée personnelle à un serveur publicitaire.",
      support_trial_h: "Essai gratuit",
      support_trial_p: "QiMétéo Premium, mensuel et annuel, 7 jours d’essai gratuits, avec le Partage Familial inclus. L’abonnement Premium (mensuel ou annuel) est reconduit sauf résiliation au moins 24 h avant l’échéance dans votre compte Apple ID.",
      support_docs_h: "Documents",
      support_docs_p: "Consultez également :",
      support_rights: "Tous droits réservés."
    },

    en: {
      brand_sub: "Celestial almanac & decision compass",
      nav_concept: "The Almanac",
      nav_pillars: "Birth date & hour",
      nav_features: "The 6 instruments",
      nav_duo: "Ming Gua & Duo",
      nav_pricing: "Editions",
      cta_dl_top: "Coming soon on App Store",

      hero_chip: "Tong Shu · Qi Men Dun Jia · BaZi & Ming Gua",
      hero_title_1: "Like the morning weather,",
      hero_title_2: "but tailored to your exact birth date and hour.",
      hero_desc: "A supportive day for one person can be a direct clash for another. From your exact birth date and hour (your 4 BaZi Pillars), QiMétéo crosses the Day Officer and Qi Men Dun Jia each morning to show your day's quality, your two favorable two-hour windows, and the exact angle to face your chair.",
      hero_btn_sub: "iPhone & iPad · Launching soon",
      hero_btn_main: "Coming soon on the App Store",
      hero_btn_discover: "See how your 4 Pillars are computed",

      ledger_1_dt: "Full natal chart",
      hero_pill_1: "Year, Solar Month, Day & Birth Hour",
      ledger_2_dt: "Action windows",
      hero_pill_2: "2 clean two-hour slots per day",
      ledger_3_dt: "Spatial alignment",
      hero_pill_3: "8-Palace Compass & Ming Gua Feng Shui",

      phone_today_badge: "Today",
      phone_pillar_tag: "4 Pillars · 9:30 AM",
      phone_status_headline: "Green Light · Open Day",
      phone_officer: "Open (開) · Zero Clash",
      phone_seal_caption: "Red Day",
      phone_advice: "Direct harmony with your Day and Hour Pillars: ideal day to launch a project, sign an agreement, or negotiate.",
      phone_slot_label: "1st Qi Men window",
      phone_dir_label: "Positioning",
      phone_dir_val: "Back to South-West (225°)",
      phone_windows_title: "Your 2 daily strategic windows",
      phone_windows_note: "Zero negative clash",
      phone_win1_label: "Fulfill wishes · Moon",
      phone_win2_label: "Financial success · Chief",

      concept_badge: "The Tong Shu Almanac",
      concept_title: "Three signals to read the true quality of a day.",
      concept_desc: "In classical Tong Shu almanacs, auspicious days are printed in red and days of restraint in black. QiMétéo crosses the 12 Day Officers with your four birth pillars (date and hour) to give you an immediate reading each morning.",

      green_tag: "Red Day · Auspicious",
      green_title: "Green Light — Supportive day",
      green_desc: "Success, Open, Stable, Establish, or Initiate days, with no clash against your birth pillars. The right moment to move forward: launch a project, sign a contract, negotiate, or celebrate a union.",

      orange_tag: "Targeted Day · Balanced",
      orange_title: "Amber Light — Targeted day",
      orange_desc: "Remove, Balance, Full, or Harvest days: suited for organizing, beginning a health regimen, closing files, or collecting payments while scheduling key calls in your two Qi Men windows.",

      red_tag: "Black Day · Restraint",
      red_title: "Red Light — Destruction, Close, or Clash",
      red_desc: "Destruction, Danger, or Close days, or days clashing directly with your Day or Year Pillar: postpone irreversible signings. When obligated to act, rely strictly on the two daily Qi Men windows.",

      pillars_badge: "Birth date & hour",
      pillars_title: "Why your birth year animal alone is never enough.",
      pillars_desc: "In Chinese metaphysics, looking only at the birth year animal ignores three quarters of your chart. QiMétéo computes your four pillars (BaZi) from your birth date and hour to evaluate how each day truly resonates with you.",
      pil_1_title: "Year Pillar & Ming Gua",
      pil_1_desc: "Defines your outer circle and your Ming Gua Number (1 to 9), which sets your four permanent favorable directions at home.",
      pil_2_title: "Solar Month Pillar",
      pil_2_desc: "Calibrated to the 24 solar terms (JieQi), it governs your professional momentum and the seasonal strength of your elements.",
      pil_3_tag: "Day Master",
      pil_3_title: "Day Pillar (Core of the chart)",
      pil_3_desc: "Your core identity and spouse palace. A direct clash between the current day and your Day Pillar immediately triggers a personal caution alert.",
      pil_4_title: "Birth Hour Pillar",
      pil_4_desc: "Tied to your projects, creations, and outcomes. It refines the daily score and reveals subtle hour-by-hour harmonies.",

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

      duo_badge: "Home harmony & pair alignment",
      duo_title: "Ming Gua Feng Shui orientations and synergy between two charts.",
      duo_desc: "Beyond daily timing, QiMétéo maps your permanent directions at home and compares two full charts (birth dates and hours) to find days when both energies align without friction.",

      duo_p1_strong: "Duo Synergy across your 4 Pillars and shared dates",
      duo_p1_desc: "Compare your pillars with a partner, business associate, or family member to spot natural alliances (San He, Liu He) and pick a day favorable to both of you.",
      duo_p2_strong: "Bed headboard, desk, and home orientation",
      duo_p2_desc: "Sleeping with your head pointed toward your Tian Yi direction supports deep recovery, while orienting your desk toward Sheng Qi fosters clarity and momentum.",
      duo_card_left_hdr: "4-Pillar Comparison · 六合",
      duo_card_right_hdr: "Ming Gua · 八宅",
      duo_p_a: "Chart A · Day & Hour",
      duo_gua_a: "Gua 3 (Zhen · East Group)",
      duo_p_b: "Chart B · Day & Hour",
      duo_gua_b: "Gua 9 (Li · East Group)",
      duo_match_label: "Stem & Branch Harmony · Zero mutual clash",
      gua_bed_lbl: "Bed headboard (Tian Yi)",
      gua_bed_val: "North (0°)",
      gua_desk_lbl: "Desk (Sheng Qi)",
      gua_desk_val: "South (180°)",

      price_badge: "Editions & Family Sharing",
      price_title: "Today is free forever; unlock the full horizon with QiMétéo Premium.",
      price_desc: "At launch on the App Store, today's briefing, its two strategic two-hour windows, and today's compass will be free without time limits. The Premium edition will unlock the 45-day planner, all seven project intentions, Ming Gua Feng Shui, and Duo mode.",

      plan_free_name: "Daily Edition",
      plan_free_sub: "Free forever",
      plan_free_label: "Free",
      plan_see_offers: "See plans in the app",
      plan_see_offers_year: "See annual QiMétéo Premium plans in the app",
      plan_see_offers_month: "See monthly QiMétéo Premium plans in the app",
      plan_free_desc: "Everything needed to consult today's quality and its two strategic time windows.",
      pfree_1: "Today's briefing tailored to your birth date and hour",
      pfree_2: "Today's 2 strategic (2h) windows",
      pfree_3: "Qi Men compass for the current day",
      pfree_4: "iOS Home Screen and Lock Screen widgets",
      pfree_5: "Upcoming project dates & 45-day calendar (blurred)",
      pfree_6: "Ming Gua Feng Shui orientations & Duo Synergy (blurred)",
      btn_free: "Coming soon on the App Store",

      plan_vip_ribbon: "7-day free trial · Family Sharing included",
      plan_vip_name: "QiMétéo Premium · Annual",
      plan_vip_desc: "Apple Family Sharing included for up to six household members.",
      pvip_1: "Date finder for all 7 project intentions over 45 days",
      pvip_2: "All positive daily windows & Apple Calendar audit",
      pvip_3: "Ming Gua Feng Shui: home, bed headboard, and desk directions",
      pvip_4: "Duo Synergy mode (pair comparison & shared dates)",
      pvip_5: "Full Expert mode (Qi Men Yin/Yang Dun, 12 Officers, BaZi)",
      pvip_6: "Apple Family Sharing included (up to 6 family members)",
      btn_vip: "Coming soon · 7-day free trial",

      plan_month_name: "QiMétéo Premium · Monthly",
      plan_month_desc: "Ideal for accompanying a project launch, signing, or move with complete flexibility.",
      pmonth_1: "Project date finder & 45-day calendar",
      pmonth_2: "All positive windows & Ming Gua Feng Shui (bed, desk, home)",
      pmonth_3: "Duo Synergy mode & calendar audit",
      pmonth_4: "No commitment, cancel anytime",
      pmonth_5: "Apple Family Sharing included (6 people)",
      btn_month: "Coming soon on the App Store",

      priv_title: "Computed 100% locally on your device",
      priv_desc: "Your birth date and hour, your Gua Number, your family profiles, and your journal stay exclusively on your iPhone or iPad. No personal data is ever sent to advertising servers.",
      priv_link: "Privacy policy",

      faq_badge: "Reference & questions",
      faq_title: "Frequently asked questions about the method and the app.",
      faq_1_q: "Why enter both your birth date and your birth hour?",
      faq_1_a: "In Chinese metaphysics (BaZi and Tong Shu), your birth year is only one pillar out of four. Your birth day determines your Day Master (the pillar most sensitive to daily clashes) and your birth hour refines your energetic affinities for projects. If you don't know your birth hour, QiMétéo still works accurately using your first three pillars.",
      faq_2_q: "What will be included in free daily access?",
      faq_2_a: "Every day, you will get free access to Today's full forecast (day color, Officer, pillar, and affinities with your natal chart) plus the day's top two strategic two-hour windows and the live compass. QiMétéo Premium unlocks upcoming project dates over 45 days, all positive daily windows, Ming Gua Feng Shui (home, bed, desk), and Duo Synergy.",
      faq_3_q: "How do the Qi Men compass and Ming Gua bed directions differ?",
      faq_3_a: "They operate on two complementary scales. The Qi Men Dun Jia compass is temporal: it shows which direction to face your chair during a two-hour window for a call, signing, or negotiation. Ming Gua Feng Shui is permanent: computed in your Profile tab from your birth date, it reveals the four favorable directions of your home, including your bed headboard and desk.",
      faq_4_q: "Will Apple Family Sharing be included in the subscription?",
      faq_4_a: "Yes. Both QiMétéo Premium editions (monthly and annual) natively include Apple Family Sharing: up to six members of your family group enjoy full Premium access on their own iPhone or iPad at no extra cost.",

      final_title: "Align your decisions with the right moment.",
      final_desc: "QiMétéo is coming very soon to the App Store for iPhone and iPad.",
      final_btn_sub: "iPhone & iPad · iOS 17+",
      final_btn_main: "Coming soon on the App Store",

      footer_bio: "Daily decision almanac tailored to your birth date and hour: project date selection (12 Tong Shu Officers), strategic Qi Men Dun Jia windows, and Ming Gua Feng Shui compass. Designed and built in France by Xavier Larrodé.",
      footer_app: "Navigation",
      footer_legal: "Legal",
      footer_privacy: "Privacy policy",
      footer_terms: "Terms of use",
      footer_support: "Support",
      footer_contact: "Contact & support",
      lang_aria: "Change language",

      support_doc_title: "Support — QiMétéo",
      support_meta: "QiMétéo support: manage an Apple subscription, restore a purchase, iOS widgets, the free trial, and contact.",
      support_back: "Back to QiMétéo home",
      support_title: "Support",
      support_updated: "Last updated: 29 October 2026",
      support_intro: "Short answers to the most common questions. QiMétéo is coming soon to the App Store for iPhone (iPad compatible). Plans are shown in the app.",
      support_contact_h: "Contact",
      support_contact_p: "For any question:",
      support_sub_h: "Manage a subscription",
      support_sub_p: "QiMétéo Premium subscriptions are managed by Apple’s App Store. To view, change, or cancel one: iOS Settings > Apple ID > Subscriptions. Cancellation is done in your Apple ID account, at least 24 hours before the renewal date. Apple Family Sharing is included for up to six members.",
      support_restore_h: "Restore a purchase",
      support_restore_p: "Purchases are tied to your Apple ID and managed by the App Store. To recover a subscription you already started, sign in with the same Apple ID on your iPhone (iPad compatible): the App Store restores the purchases linked to that account. QiMétéo never has access to your payment details.",
      support_widget_h: "Widgets",
      support_widget_p: "The daily edition includes iOS Home Screen and Lock Screen widgets. They use calculations performed on your device (birth date and hour, Gua number) and do not send personal data to advertising servers.",
      support_trial_h: "Free trial",
      support_trial_p: "QiMétéo Premium, monthly and annual, includes a 7-day free trial, with Family Sharing included. The Premium subscription (monthly or annual) renews unless you cancel at least 24 hours before the renewal date in your Apple ID account.",
      support_docs_h: "Documents",
      support_docs_p: "See also:",
      support_rights: "All rights reserved."
    }
  };

  let currentLang = 'fr';

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

    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria').trim();
      if (dict[key]) {
        el.setAttribute('aria-label', dict[key]);
      }
    });

    document.querySelectorAll('[data-i18n-content]').forEach((el) => {
      const key = el.getAttribute('data-i18n-content').trim();
      if (dict[key]) {
        el.setAttribute('content', dict[key]);
      }
    });

    initDateHeader();
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
    initDateHeader();
    initMobileMenu();
  });

})();
