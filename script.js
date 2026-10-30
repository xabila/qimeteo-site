/**
 * QiMétéo Official Website — Interactive AppShots Studio Showcase
 * - Bilingual Switcher (FR / EN) with dynamic App Store screenshot localization
 * - Interactive Hero Poster Switcher & 8-Screen AppShots Carousel
 * - Zero calculation IP exposed
 */

(function () {
  'use strict';

  const screenGuardians = {
    1: 'assets/stickers/animal_1_dragon.webp',
    2: 'assets/stickers/animal_2_horse.webp',
    3: 'assets/stickers/animal_3_sun_moon.webp',
    4: 'assets/stickers/animal_4_rooster.webp',
    5: 'assets/stickers/animal_5_tiger.webp',
    6: 'assets/stickers/animal_6_goat.webp',
    7: 'assets/stickers/animal_7_ox.webp',
    8: 'assets/stickers/animal_8_snake.webp'
  };

  const i18n = {
    fr: {
      brand_sub: "La météo de vos décisions",
      nav_showcase: "Les 8 Écrans",
      nav_concept: "L’Almanach",
      nav_pillars: "4 Piliers BaZi",
      nav_features: "Méthode & Qi Men",
      nav_duo: "Ming Gua & Duo",
      nav_pricing: "Éditions",
      cta_dl_top: "Les 8 Écrans",

      hero_chip: "TONG SHU · QI MEN DUN JIA · 4 PILIERS BAZI & MING GUA",
      hero_kicker: "VOTRE MÉTÉO DÉCISIONNELLE SUR MESURE",
      hero_title_1: "Feu Vert, Orange ou Rouge",
      hero_title_2: "calculé selon vos date & heure de naissance.",
      hero_desc: "Comme vous regardez la météo avant de sortir, consultez QiMétéo chaque matin en 3 secondes. À partir de vos 4 Piliers BaZi (année, mois solaire, jour et heure de naissance), l’application croise les 12 Officiers Tong Shu et le Qi Men Dun Jia (hors heures Kong Wang) pour révéler la couleur de votre journée, vos créneaux d’or de 2h, la direction où orienter votre chaise et vos meilleures dates sur 30 jours.",

      hero_badge_1: "Aujourd’hui & 2 créneaux/j gratuits",
      hero_badge_2: "Planificateur 30 jours · 7 projets",
      hero_badge_3: "7 jours d’essai · Partage Familial (6)",

      hero_btn_sub: "iPhone & iPad · iOS 17+ · Sortie App Store",
      hero_btn_main: "Explorer les 8 écrans de l’app",
      hero_btn_discover: "Découvrir l’algorithme Qi Men & Tong Shu",

      ledger_1_dt: "4 Piliers BaZi natals",
      hero_pill_1: "Année, Mois solaire JieQi, Jour & Heure de naissance",
      ledger_2_dt: "Créneaux d’Or filtrés",
      hero_pill_2: "Jusqu’à 6 créneaux/j · Exclusion stricte de Kong Wang",
      ledger_3_dt: "Planificateur 30 Jours",
      hero_pill_3: "7 projets, audit Calendrier Apple, Ming Gua & Duo",

      htab_1: "1 · Météo Qi",
      htab_3: "3 · Créneaux d’Or",
      htab_4: "4 · Boussole",
      htab_5: "5 · Planifier 30J",
      htab_7: "7 · Mode Duo",

      show_kicker: "GALERIE OFFICIELLE APP STORE · IPHONE & IPAD",
      show_title: "8 ÉCRANS POUR AGIR AU BON MOMENT",
      show_desc: "Du bulletin matinal en 3 secondes jusqu’au planificateur sur 30 jours, découvrez l’interface complète de QiMétéo. Basculez la langue (FR / EN) en haut à droite pour voir les captures dans chaque langue.",

      sp_1: "01 · Votre Météo",
      sp_2: "02 · Sur Mesure (BaZi)",
      sp_3: "03 · Créneaux d’Or 2h",
      sp_4: "04 · Boussole Live",
      sp_5: "05 · Planificateur 30J",
      sp_6: "06 · Feng Shui Ming Gua",
      sp_7: "07 · Mode Duo",
      sp_8: "08 · Simple ou Expert",

      sc1_t: "Feu Vert, Orange ou Rouge",
      sc1_d: "Votre score personnel (0–100 %), l’Officier du Jour Tong Shu et le conseil concret dès le réveil.",
      sc2_t: "Sur mesure : Date & Heure natales",
      sc2_d: "Vos 4 Piliers BaZi complets (Année, Mois solaire JieQi, Jour, Heure) et votre Chiffre Ming Gua.",
      sc3_t: "Créneaux d’Or de 2h (hors Kong Wang)",
      sc3_d: "Vos 2 meilleures fenêtres gratuites chaque jour, et jusqu’à 6 créneaux positifs/jour en Premium.",
      sc4_t: "Boussole Live des 8 Palais",
      sc4_d: "Indique au degré près s’il faut tourner le dos à la Déité Qi Men ou faire face à la Combinaison.",
      sc5_t: "Planificateur 30 Jours · 7 Projets",
      sc5_d: "Trouvez les meilleures dates sur 30 jours (tri par Score % ou Au plus tôt) et auditez votre Agenda Apple.",
      sc6_t: "Feng Shui Ming Gua : Lit, Bureau, Maison",
      sc6_d: "Vos 4 directions favorables permanentes (Sheng Qi, Tian Yi, Yan Nian, Fu Wei) et les 4 secteurs à éviter.",
      sc6_duo_t: "Synergie Duo : Couple, Enfants, Associés",
      sc6_duo_d: "Comparez deux thèmes natals et trouvez les meilleures dates sur 30 jours où vos deux énergies sont au vert.",
      sc8_t: "Mode Simple ou Mode Expert",
      sc8_d: "100 % en langage clair par défaut, ou affichage complet des grilles Qi Men, Portes, Étoiles, Déités et BaZi.",

      concept_badge: "L’almanach Tong Shu",
      concept_kicker: "12 OFFICIERS DU JOUR · ACCUMULATION · KONG WANG",
      concept_title: "Trois feux pour lire la vraie nature d’une journée — sans confondre Réussite et Accumulation.",
      concept_desc: "Dans la tradition du Tong Shu, chaque journée est gouvernée par l’un des 12 Officiers (Jian Chu). QiMétéo croise cet Officier avec vos 4 Piliers de naissance et applique les règles classiques : distinction stricte entre Réussite/Moisson et Accumulation, et évitement des heures Kong Wang.",

      green_tag: "Feu Vert · Jour Rouge",
      green_title: "Journée Porteuse — Réussite, Ouverture & Stabilité",
      green_desc: "Jours de Réussite (成), d’Ouverture (開), de Stabilité (定) ou de Commencement (建), sans opposition avec vos piliers natals. Idéal pour signer un contrat, lancer un projet, négocier, célébrer une union ou engager une démarche majeure.",

      orange_tag: "Feu Ambre · Jour Nuancé",
      orange_title: "Journée Ciblée — Attention à l’Accumulation (滿)",
      orange_desc: "Ne confondez pas Réussite (成) ou Moisson (收) avec Accumulation (滿) : un jour d’Accumulation amplifie tout — le positif comme le négatif ! N’y agissez que sur de très bons créneaux horaires Qi Men, et évitez toujours Accumulation et Moisson pour un acte médical.",

      red_tag: "Feu Rouge · Jour Noir & Kong Wang",
      red_title: "Retenue — Destruction, Clash ou Vide Céleste (Kong Wang)",
      red_desc: "Jours de Destruction (破), de Fermeture (閉) ou de Clash frontal avec votre Pilier du Jour : différez les engagements risqués. De même, évitez les heures Kong Wang (空亡) : à ce moment-là, aucun lien ne relie le Ciel et la Terre.",

      pillars_badge: "Thème natal BaZi",
      pillars_kicker: "SUR MESURE · 4 PILIERS DE NAISSANCE (四柱八字)",
      pillars_title: "Pourquoi le seul signe de l’année ne suffit jamais.",
      pillars_desc: "Se limiter à l’animal de l’année de naissance ignore 75 % de votre thème. QiMétéo calcule vos quatre piliers (BaZi) à partir de votre date et de votre heure de naissance pour mesurer les harmonies (San He, Liu He) et les oppositions (Chong) propres à votre profil.",

      pil_1_title: "Pilier de l’Année & Ming Gua",
      pil_1_desc: "Basé sur le Nouvel An solaire (LiChun, ~4 février), il fixe votre cercle social et votre Chiffre Ming Gua (1 à 9) pour vos 4 directions Feng Shui à la maison.",
      pil_2_title: "Pilier du Mois Solaire",
      pil_2_desc: "Calé sur les 24 périodes solaires astronomiques (JieQi), il gouverne votre climat professionnel et l’ancrage saisonnier de vos cinq éléments.",
      pil_3_tag: "Maître du Jour",
      pil_3_title: "Pilier du Jour (Cœur du calcul)",
      pil_3_desc: "Votre identité profonde et votre sphère personnelle. Un Clash frontal entre le jour courant et votre Pilier du Jour abaisse immédiatement la note et active une alerte de prudence.",
      pil_4_title: "Pilier de l’Heure de Naissance",
      pil_4_desc: "Gouverne vos projets, vos investissements et la concrétisation de vos actions. Il affine le score quotidien et la sélection de vos créneaux horaires.",

      feat_badge: "Les 6 instruments QiMétéo",
      feat_kicker: "QI MEN DUN JIA · BOUSSOLE 8 PALAIS · PLANIFICATEUR 30 JOURS",
      feat_title: "Le bon jour, la bonne heure et la bonne direction réunis.",
      feat_desc: "Chaque écran de QiMétéo répond à une question concrète : quand signer ou lancer, à quelle heure passer un appel décisif, dans quel sens orienter votre fauteuil et comment aménager votre intérieur.",

      feat_1_title: "Créneaux d’Or de 2h (hors heures Kong Wang)",
      feat_1_desc: "Entre 07h et 23h, QiMétéo écarte les heures Kong Wang (Vide Céleste où aucun lien ne relie le Ciel et la Terre) ainsi que les structures défavorables pour retenir vos 2 meilleurs créneaux gratuits du jour — et jusqu’à 6 créneaux positifs/jour en Premium (Combinaisons 5★, Accomplir des vœux, Succès Financiers & Relationnels, Déités).",

      feat_2_title: "Boussole Live des 8 Palais : de dos ou de face",
      feat_2_desc: "Selon la structure du créneau Qi Men, l’application indique s’il faut vous asseoir le dos tourné vers la Déité (Chief, Heaven, Earth, Moon, Harmony) ou faire face à une Combinaison, avec un retour haptique dès que vous êtes aligné.",

      feat_3_title: "Planificateur 30 Jours sur 7 Intentions & Double Tri",
      feat_3_desc: "Choisissez votre objectif parmi 7 intentions (Signer & Encaisser, Lancer un projet, Union & Mariage, Immobilier & Travaux, Voyage, Santé & Chirurgie hors Accumulation/Moisson, Tri & Régime) et triez les meilleures dates sur 30 jours par « Plus pertinent (Score %) » ou « Au plus tôt (Pressé) ».",

      feat_5_title: "Audit du Calendrier Apple sur 30 Jours & Mode Expert",
      feat_5_desc: "QiMétéo audite vos prochains rendez-vous iPhone sur 30 jours pour signaler tout événement tombant un jour de Destruction, de Clash ou en heure Kong Wang, et exporte vos créneaux d’or en 1 tap. Basculez à tout moment entre le Mode Simple sans jargon et le Mode Expert complet.",

      duo_badge: "Harmonie du lieu & accord à deux",
      duo_kicker: "FENG SHUI MING GUA (八宅) & SYNERGIE DUO",
      duo_title: "Orientations Ming Gua (lit, bureau, maison) et compatibilité Duo sur 30 jours.",
      duo_desc: "Au-delà de la météo du jour, QiMétéo calcule vos directions permanentes à la maison selon votre Chiffre Gua et croise deux thèmes complets (conjoint, associé, enfant, client) pour repérer les dates où vos deux énergies sont simultanément au vert.",

      duo_p1_strong: "Synergie Duo sur vos 4 Piliers & dates communes (30 jours)",
      duo_p1_desc: "Comparez vos piliers avec ceux d’un partenaire ou d’un proche pour mesurer vos affinités naturelles (San He, Liu He, éléments complémentaires) et filtrer les meilleures dates communes sur les 30 prochains jours.",
      duo_p2_strong: "Feng Shui Ming Gua : tête de lit, bureau et porte d’entrée",
      duo_p2_desc: "Dormir la tête orientée vers votre direction Tian Yi soutient la récupération nocturne, tandis qu’orienter votre bureau vers Sheng Qi stimule la vitalité et la réussite de vos projets.",

      price_badge: "Éditions & Partage Familial",
      price_kicker: "7 JOURS D’ESSAI GRATUIT · PARTAGE FAMILIAL APPLE INCLUS (6 PERSONNES)",
      price_title: "Aujourd’hui en libre accès, l’horizon 30 jours avec QiMétéo Premium.",
      price_desc: "Le bulletin d’aujourd’hui, vos 2 meilleurs créneaux stratégiques de 2h et la boussole du jour sont gratuits sans limite de durée. QiMétéo Premium (Mensuel ou Annuel, tous deux avec 7 jours d’essai gratuit et Partage Familial Apple) débloque le planificateur sur 30 jours, tous les créneaux positifs du jour (jusqu’à 6/j), les 7 intentions de projet, le Feng Shui Ming Gua et le mode Duo.",

      plan_free_name: "Édition Quotidienne",
      plan_free_sub: "Accès permanent",
      plan_free_label: "Gratuit",
      plan_free_desc: "Tout l’essentiel chaque matin pour consulter la météo d’aujourd’hui et ses 2 meilleurs créneaux horaires.",
      pfree_1: "Météo d’aujourd’hui personnalisée (date & heure de naissance)",
      pfree_2: "Vos 2 meilleurs créneaux stratégiques (2h) chaque jour",
      pfree_3: "Boussole Qi Men en direct pour la journée en cours",
      pfree_4: "Widgets pour l’écran d’accueil et de verrouillage iOS",
      pfree_5: "Planificateur 30 jours & 7 intentions de projet",
      pfree_6: "Feng Shui Ming Gua complet & Synergie Duo illimitée",
      btn_free: "Inclus gratuitement dans l’app",

      plan_vip_ribbon: "7 jours d’essai gratuit · Partage Familial inclus",
      plan_vip_name: "QiMétéo Premium · Annuel",
      plan_vip_price: "Voir l’offre dans l’app",
      plan_vip_desc: "7 jours d’essai gratuit. Partage Familial Apple inclus pour jusqu’à 6 membres du foyer.",
      pvip_1: "Planificateur sur 30 jours glissants pour vos 7 projets",
      pvip_2: "Tous les créneaux positifs du jour (jusqu’à 6/j) & audit Agenda Apple",
      pvip_3: "Feng Shui Ming Gua complet : lit, bureau & maison",
      pvip_4: "Synergie Duo illimitée (comparaison 4 Piliers & dates à deux)",
      pvip_5: "Mode Expert complet (Qi Men Dun Jia, 12 Officiers, BaZi)",
      pvip_6: "Partage Familial Apple inclus (jusqu’à 6 proches sans supplément)",
      btn_vip: "Essayer 7 jours gratuitement dans l’app",

      plan_month_ribbon: "7 jours d’essai gratuit · Sans engagement",
      plan_month_name: "QiMétéo Premium · Mensuel",
      plan_month_price: "Voir l’offre dans l’app",
      plan_month_desc: "Idéal pour accompagner une signature, un lancement ou un déménagement sur 30 jours en toute liberté.",
      pmonth_1: "Planificateur 30 jours & recherche par objectif (7 projets)",
      pmonth_2: "Tous les créneaux positifs (jusqu’à 6/j) & Feng Shui Ming Gua",
      pmonth_3: "Mode Synergie Duo illimité & audit du Calendrier Apple",
      pmonth_4: "7 jours d’essai gratuit, résiliable à tout moment",
      pmonth_5: "Partage Familial Apple inclus (jusqu’à 6 personnes)",
      btn_month: "Essayer 7 jours gratuitement dans l’app",

      priv_title: "Calculs astronomiques 100 % en local sur votre appareil",
      priv_desc: "Votre date et votre heure de naissance, vos 4 Piliers BaZi, votre Chiffre Gua, les profils de vos proches et votre agenda demeurent sur votre iPhone ou votre iPad. Aucun compte requis, aucune collecte d’adresse IP ni serveur publicitaire.",
      priv_link: "Politique de confidentialité",

      faq_badge: "Repères & questions",
      faq_title: "Questions fréquentes sur la méthode et l’application.",
      faq_1_q: "Pourquoi renseigner à la fois sa date et son heure de naissance ?",
      faq_1_a: "En métaphysique chinoise (BaZi et Tong Shu), l’année de naissance ne représente qu’un seul pilier sur quatre. Votre jour de naissance détermine votre Maître du Jour (le pilier le plus sensible aux oppositions quotidiennes) et votre heure de naissance affine vos affinités énergétiques pour vos projets. Si vous ne connaissez pas votre heure de naissance, QiMétéo fonctionne également avec précision sur vos trois premiers piliers.",
      faq_5_q: "Pourquoi faut-il se méfier des jours d’Accumulation et des heures Kong Wang ?",
      faq_5_a: "Dans la tradition authentique transmise par les praticiens du Tong Shu et du Qi Men Dun Jia, l’Officier « Accumulation » (滿) ne doit jamais être confondu avec « Réussite » (成) ou « Moisson » (收) : l’Accumulation démultiplie aussi bien le négatif que le positif (et doit être évitée pour tout acte médical). Quant aux heures « Kong Wang » (空亡, Vide Céleste), aucun lien n’unit alors le Ciel et la Terre : QiMétéo les détecte et les exclut automatiquement de vos créneaux recommandés.",
      faq_2_q: "Que comprend l’accès gratuit au quotidien par rapport à QiMétéo Premium ?",
      faq_2_a: "Chaque jour, vous accédez gratuitement à la météo complète d’aujourd’hui (Feu Vert/Orange/Rouge, score %, Officier, pilier et affinités avec votre thème natal), à vos 2 meilleurs créneaux stratégiques de 2h, à la boussole en direct et aux widgets iOS. QiMétéo Premium (mensuel ou annuel, avec 7 jours d’essai gratuit) débloque le planificateur sur 30 jours, tous les créneaux positifs de la journée (jusqu’à 6/j), les 7 intentions de projet, l’audit du Calendrier Apple, le Feng Shui Ming Gua et la Synergie Duo.",
      faq_3_q: "Quelle est la différence entre la boussole Qi Men et les directions Feng Shui du lit ?",
      faq_3_a: "Les deux outils agissent à des échelles complémentaires. La boussole Qi Men Dun Jia est temporelle : elle indique dans quelle direction orienter votre chaise pendant un créneau de deux heures pour un appel, une signature ou une négociation. Le Feng Shui Ming Gua est permanent : calculé selon votre naissance, il indique les quatre directions favorables de votre logement (tête de lit Tian Yi, bureau Sheng Qi, harmonie Yan Nian, stabilité Fu Wei).",
      faq_4_q: "Le Partage Familial Apple est-il inclus dans l’abonnement ?",
      faq_4_a: "Oui. Les deux formules QiMétéo Premium (mensuelle et annuelle) incluent nativement le Partage Familial Apple : jusqu’à six membres de votre groupe familial bénéficient de l’intégralité des fonctions Premium sur leur propre iPhone ou iPad sans supplément.",

      final_kicker: "LA MÉTÉO DE VOS DÉCISIONS · IPHONE & IPAD",
      final_title: "Accordez vos décisions avec le bon moment.",
      final_desc: "7 jours d’essai gratuit sur QiMétéo Premium · Partage Familial Apple inclus jusqu’à 6 proches.",
      final_btn_sub: "iPhone & iPad · iOS 17+",
      final_btn_main: "Découvrir sur l’App Store",

      footer_bio: "Almanach décisionnel quotidien calculé sur votre date et votre heure de naissance : sélection de dates sur 30 jours par projet (12 Officiers Tong Shu), créneaux stratégiques Qi Men Dun Jia (hors Kong Wang) et boussole Feng Shui Ming Gua. Conçu et développé en France par Xavier Larrodé.",
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
      support_trial_p: "QiMétéo Premium, mensuel et annuel, inclut 7 jours d’essai gratuit, avec le Partage Familial inclus. L’abonnement Premium est reconduit sauf résiliation au moins 24 h avant l’échéance dans votre compte Apple ID.",
      support_docs_h: "Documents",
      support_docs_p: "Consultez également :",
      support_rights: "Tous droits réservés."
    },

    en: {
      brand_sub: "The Forecast for Your Decisions",
      nav_showcase: "The 8 Screens",
      nav_concept: "The Almanac",
      nav_pillars: "4 BaZi Pillars",
      nav_features: "Method & Qi Men",
      nav_duo: "Ming Gua & Duo",
      nav_pricing: "Editions",
      cta_dl_top: "The 8 Screens",

      hero_chip: "TONG SHU · QI MEN DUN JIA · 4 BAZI PILLARS & MING GUA",
      hero_kicker: "YOUR PERSONALIZED DECISION WEATHER",
      hero_title_1: "Green, Amber or Red Light",
      hero_title_2: "computed from your exact birth date & hour.",
      hero_desc: "Just like checking the morning weather before stepping out, check QiMétéo in 3 seconds each morning. From your 4 BaZi Pillars (birth year, solar month, day, and hour), the app crosses the 12 Tong Shu Officers and Qi Men Dun Jia (cleared of Kong Wang void hours) to reveal your day's color, your golden 2-hour windows, the direction to face your chair, and your best dates over 30 days.",

      hero_badge_1: "Today & top 2 daily slots free",
      hero_badge_2: "30-Day Planner · 7 project goals",
      hero_badge_3: "7-day free trial · Family Sharing (6)",

      hero_btn_sub: "iPhone & iPad · iOS 17+ · App Store Release",
      hero_btn_main: "Explore all 8 App Store screens",
      hero_btn_discover: "Discover the Qi Men & Tong Shu engine",

      ledger_1_dt: "4 Natal BaZi Pillars",
      hero_pill_1: "Year, Solar JieQi Month, Day & Birth Hour",
      ledger_2_dt: "Filtered Golden Windows",
      hero_pill_2: "Up to 6 slots/day · Strict Kong Wang exclusion",
      ledger_3_dt: "30-Day Planner",
      hero_pill_3: "7 project goals, Apple Calendar audit, Ming Gua & Duo",

      htab_1: "1 · Qi Weather",
      htab_3: "3 · Golden Slots",
      htab_4: "4 · Compass",
      htab_5: "5 · 30D Planner",
      htab_7: "7 · Duo Mode",

      show_kicker: "OFFICIAL APP STORE GALLERY · IPHONE & IPAD",
      show_title: "8 SCREENS TO ACT AT THE RIGHT MOMENT",
      show_desc: "From your 3-second morning forecast to the 30-day project planner, explore the complete QiMétéo interface. Toggle the language (FR / EN) in the top right corner to preview the localized App Store screenshots.",

      sp_1: "01 · Decision Weather",
      sp_2: "02 · Tailored (4 Pillars)",
      sp_3: "03 · Golden 2h Slots",
      sp_4: "04 · Live Compass",
      sp_5: "05 · 30-Day Planner",
      sp_6: "06 · Ming Gua Feng Shui",
      sp_7: "07 · Duo Synergy",
      sp_8: "08 · Simple or Expert",

      sc1_t: "Green, Amber or Red Light",
      sc1_d: "Your personal score (0–100%), the Tong Shu Day Officer, and clear daily guidance as soon as you wake up.",
      sc2_t: "Tailored to Your Birth Date & Hour",
      sc2_d: "Your complete 4 BaZi Pillars (Year, Solar JieQi Month, Day, Hour) and your personal Ming Gua Number.",
      sc3_t: "Golden 2h Windows (Zero Kong Wang)",
      sc3_d: "Your top 2 daily windows free every day, and up to 6 positive windows/day with Premium.",
      sc4_t: "Live 8-Palace Compass",
      sc4_d: "Shows to the exact degree whether to sit with your back to the Qi Men Deity or facing the Combination.",
      sc5_t: "30-Day Planner · 7 Project Goals",
      sc5_d: "Find your best dates over 30 days (sorted by Best Score % or Soonest) and audit your Apple Calendar.",
      sc6_t: "Ming Gua Feng Shui: Bed, Desk & Home",
      sc6_d: "Your 4 permanent favorable directions (Sheng Qi, Tian Yi, Yan Nian, Fu Wei) and the 4 sectors to avoid.",
      sc6_duo_t: "Duo Synergy: Couple, Family, Partners",
      sc6_duo_d: "Compare two natal charts and find the best dates over 30 days when both energies are simultaneously green.",
      sc8_t: "Simple Mode or Expert Mode",
      sc8_d: "100% plain language by default, or full classical Qi Men charts, Gates, Stars, Deities, and BaZi pillars.",

      concept_badge: "The Tong Shu Almanac",
      concept_kicker: "12 DAY OFFICERS · FULL (ACCUMULATION) · KONG WANG VOID",
      concept_title: "Three signals to read the true nature of a day — without confusing Success and Full days.",
      concept_desc: "In classical Tong Shu tradition, each day is governed by one of the 12 Officers (Jian Chu). QiMétéo crosses this Officer with your 4 Birth Pillars and applies authentic rules: strict distinction between Success/Harvest and Full (Accumulation) days, and automatic filtering of Kong Wang void hours.",

      green_tag: "Green Light · Red Day",
      green_title: "Supportive Day — Success, Open & Stable",
      green_desc: "Success (成), Open (開), Stable (定), or Establish (建) days with zero clash against your natal pillars. Ideal for signing contracts, launching projects, negotiating, celebrating a union, or taking major steps.",

      orange_tag: "Amber Light · Nuanced Day",
      orange_title: "Targeted Day — Watch Out for Full / Accumulation (滿)",
      orange_desc: "Never confuse Success (成) or Harvest (收) with Full / Accumulation (滿): a Full day amplifies everything — both positive and negative! Only act during top Qi Men hours, and always avoid Full and Harvest days for medical procedures.",

      red_tag: "Red Light · Black Day & Kong Wang",
      red_title: "Restraint — Destruction, Clash, or Celestial Void (Kong Wang)",
      red_desc: "Destruction (破), Close (閉), or direct Clash days against your Day Pillar: postpone high-risk commitments. Likewise, avoid Kong Wang (空亡) hours, when no link connects Heaven and Earth.",

      pillars_badge: "BaZi Natal Chart",
      pillars_kicker: "TAILORED · YOUR 4 BIRTH PILLARS (四柱八字)",
      pillars_title: "Why your birth year animal alone is never enough.",
      pillars_desc: "Looking only at your birth year animal ignores 75% of your chart. QiMétéo computes all four pillars (BaZi) from your exact birth date and hour to measure harmonies (San He, Liu He) and clashes (Chong) specific to you.",

      pil_1_title: "Year Pillar & Ming Gua",
      pil_1_desc: "Anchored on the Solar New Year (LiChun, ~Feb 4), it defines your social circle and your Ming Gua Number (1 to 9) for your 4 permanent home Feng Shui directions.",
      pil_2_title: "Solar Month Pillar",
      pil_2_desc: "Calibrated to the 24 astronomical solar terms (JieQi), it governs your professional climate and the seasonal grounding of your five elements.",
      pil_3_tag: "Day Master",
      pil_3_title: "Day Pillar (Core of the chart)",
      pil_3_desc: "Your core identity and personal sphere. A direct clash between the current day and your Day Pillar immediately lowers the score and triggers a caution alert.",
      pil_4_title: "Birth Hour Pillar",
      pil_4_desc: "Governs your projects, investments, and the realization of your actions. It refines your daily score and hourly window selection.",

      feat_badge: "The 6 QiMétéo Instruments",
      feat_kicker: "QI MEN DUN JIA · 8-PALACE COMPASS · 30-DAY PLANNER",
      feat_title: "The right day, the right hour, and the right direction united.",
      feat_desc: "Every screen in QiMétéo answers a concrete question: when to sign or launch, what time to place a decisive call, which way to turn your chair, and how to align your home.",

      feat_1_title: "Golden 2h Windows (cleared of Kong Wang hours)",
      feat_1_desc: "Between 07:00 and 23:00, QiMétéo filters out Kong Wang hours (Celestial Void where no link connects Heaven and Earth) and negative structures to keep your top 2 free daily windows — and up to 6 positive windows/day in Premium (5★ Combinations, Fulfill Wishes, Financial & Relationship Success, Deities).",

      feat_2_title: "Live 8-Palace Compass: back or face positioning",
      feat_2_desc: "Depending on the Qi Men window structure, the app indicates whether to sit with your back turned to the Deity (Chief, Heaven, Earth, Moon, Harmony) or facing a Combination, with haptic confirmation as soon as you are aligned.",

      feat_3_title: "30-Day Planner Across 7 Project Goals & Dual Sort",
      feat_3_desc: "Pick your goal among 7 intentions (Sign & Collect, Launch a Project, Marriage & Union, Real Estate & Renovation, Travel, Medical & Surgery excluding Full/Harvest days, Declutter & Diet) and sort the best dates over 30 days by 'Best Match (Score %)' or 'Soonest (Urgent)'.",

      feat_5_title: "30-Day Apple Calendar Audit & Full Expert Mode",
      feat_5_desc: "QiMétéo audits your upcoming iPhone meetings over 30 days to flag any event falling on a Destruction, Clash, or Kong Wang hour, and exports your golden slots in 1 tap. Switch anytime between jargon-free Simple Mode and full Expert Mode.",

      duo_badge: "Home harmony & pair alignment",
      duo_kicker: "MING GUA FENG SHUI (八宅) & DUO SYNERGY",
      duo_title: "Ming Gua orientations (bed, desk, home) and 30-day Duo compatibility.",
      duo_desc: "Beyond daily weather, QiMétéo computes your permanent directions at home from your Gua Number and crosses two complete charts (partner, associate, child, client) to spot dates when both energies are simultaneously green.",

      duo_p1_strong: "4-Pillar Duo Synergy & shared dates (30 days)",
      duo_p1_desc: "Compare your pillars with a partner or loved one to measure natural affinities (San He, Liu He, complementary elements) and filter the best shared dates over the next 30 days.",
      duo_p2_strong: "Ming Gua Feng Shui: bed headboard, desk, and front door",
      duo_p2_desc: "Sleeping with your head pointed toward your Tian Yi direction supports deep recovery, while orienting your desk toward Sheng Qi boosts vitality and project success.",

      price_badge: "Editions & Family Sharing",
      price_kicker: "7-DAY FREE TRIAL · APPLE FAMILY SHARING INCLUDED (6 PEOPLE)",
      price_title: "Today is free forever; unlock the full 30-day horizon with QiMétéo Premium.",
      price_desc: "Today's forecast, your top 2 strategic two-hour windows, and today's live compass are free without time limits. QiMétéo Premium (Monthly or Annual, both with a 7-day free trial and Apple Family Sharing) unlocks the 30-day planner, all positive daily windows (up to 6/day), all 7 project intentions, Ming Gua Feng Shui, and Duo mode.",

      plan_free_name: "Daily Edition",
      plan_free_sub: "Free forever",
      plan_free_label: "Free",
      plan_free_desc: "Everything you need each morning to check today's weather and its top 2 strategic time windows.",
      pfree_1: "Personalized Today forecast (birth date & hour)",
      pfree_2: "Your top 2 strategic (2h) windows every day",
      pfree_3: "Live Qi Men compass for the current day",
      pfree_4: "iOS Home Screen and Lock Screen widgets",
      pfree_5: "30-day planner & 7 project intentions",
      pfree_6: "Full Ming Gua Feng Shui & unlimited Duo Synergy",
      btn_free: "Included free in the app",

      plan_vip_ribbon: "7-day free trial · Family Sharing included",
      plan_vip_name: "QiMétéo Premium · Annual",
      plan_vip_price: "See offer in the app",
      plan_vip_desc: "7-day free trial. Apple Family Sharing included for up to 6 household members.",
      pvip_1: "Rolling 30-day planner across all 7 project goals",
      pvip_2: "All positive daily windows (up to 6/day) & Apple Calendar audit",
      pvip_3: "Full Ming Gua Feng Shui: bed, desk & home directions",
      pvip_4: "Unlimited Duo Synergy (4-Pillar comparison & shared dates)",
      pvip_5: "Full Expert Mode (Qi Men Dun Jia, 12 Officers, BaZi)",
      pvip_6: "Apple Family Sharing included (up to 6 family members at no extra cost)",
      btn_vip: "Try 7 days free in the app",

      plan_month_ribbon: "7-day free trial · No commitment",
      plan_month_name: "QiMétéo Premium · Monthly",
      plan_month_price: "See offer in the app",
      plan_month_desc: "Ideal for accompanying a signing, launch, or move over 30 days with complete freedom.",
      pmonth_1: "30-day planner & goal-based date finder (7 projects)",
      pmonth_2: "All positive windows (up to 6/day) & Ming Gua Feng Shui",
      pmonth_3: "Unlimited Duo Synergy mode & Apple Calendar audit",
      pmonth_4: "7-day free trial, cancel anytime",
      pmonth_5: "Apple Family Sharing included (up to 6 people)",
      btn_month: "Try 7 days free in the app",

      priv_title: "Astronomical calculations 100% on-device",
      priv_desc: "Your birth date and hour, your 4 BaZi Pillars, your Gua Number, your family profiles, and your calendar stay exclusively on your iPhone or iPad. No account required, no IP tracking or advertising servers.",
      priv_link: "Privacy policy",

      faq_badge: "Reference & questions",
      faq_title: "Frequently asked questions about the method and the app.",
      faq_1_q: "Why enter both your birth date and your birth hour?",
      faq_1_a: "In Chinese metaphysics (BaZi and Tong Shu), your birth year is only one pillar out of four. Your birth day determines your Day Master (the pillar most sensitive to daily clashes) and your birth hour refines your energetic affinities for projects. If you don't know your birth hour, QiMétéo still works accurately using your first three pillars.",
      faq_5_q: "Why be cautious on Full (Accumulation) days and Kong Wang hours?",
      faq_5_a: "In authentic Tong Shu and Qi Men Dun Jia practice, the 'Full / Accumulation' Officer (滿) must never be confused with 'Success' (成) or 'Harvest' (收): Full amplifies the negative just as much as the positive (and must be avoided for medical acts). As for 'Kong Wang' (空亡, Celestial Void) hours, no link connects Heaven and Earth at that time: QiMétéo detects and excludes them automatically from your recommended slots.",
      faq_2_q: "What is included in free daily access vs. QiMétéo Premium?",
      faq_2_a: "Every day, you get free access to Today's complete forecast (Green/Amber/Red light, score %, Officer, pillar, and natal affinities), your top 2 strategic 2-hour windows, the live compass, and iOS widgets. QiMétéo Premium (monthly or annual, with a 7-day free trial) unlocks the 30-day planner, all positive daily windows (up to 6/day), all 7 project goals, the Apple Calendar audit, Ming Gua Feng Shui, and Duo Synergy.",
      faq_3_q: "How do the Qi Men compass and Ming Gua bed directions differ?",
      faq_3_a: "They operate on complementary scales. The Qi Men Dun Jia compass is temporal: it shows which direction to face your chair during a two-hour window for a call, signing, or negotiation. Ming Gua Feng Shui is permanent: computed from your birth date, it reveals the four favorable directions of your home (Tian Yi bed headboard, Sheng Qi desk, Yan Nian harmony, Fu Wei stability).",
      faq_4_q: "Is Apple Family Sharing included in the subscription?",
      faq_4_a: "Yes. Both QiMétéo Premium plans (monthly and annual) natively include Apple Family Sharing: up to six members of your family group enjoy full Premium features on their own iPhone or iPad at no extra cost.",

      final_kicker: "THE FORECAST FOR YOUR DECISIONS · IPHONE & IPAD",
      final_title: "Align your decisions with the right moment.",
      final_desc: "7-day free trial on QiMétéo Premium · Apple Family Sharing included for up to 6 family members.",
      final_btn_sub: "iPhone & iPad · iOS 17+",
      final_btn_main: "Discover on the App Store",

      footer_bio: "Daily decision almanac tailored to your birth date and hour: 30-day project date selection (12 Tong Shu Officers), strategic Qi Men Dun Jia windows (cleared of Kong Wang), and Ming Gua Feng Shui compass. Designed and built in France by Xavier Larrodé.",
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
      support_trial_p: "QiMétéo Premium, monthly and annual, includes a 7-day free trial, with Family Sharing included. The Premium subscription renews unless you cancel at least 24 hours before the renewal date in your Apple ID account.",
      support_docs_h: "Documents",
      support_docs_p: "See also:",
      support_rights: "All rights reserved."
    }
  };

  let currentLang = 'fr';
  let currentHeroScreen = 1;

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

  function updateLocalizedScreenshots(lang) {
    const folder = lang === 'en' ? 'en' : 'fr';
    const heroImg = document.getElementById('hero-active-screenshot');
    if (heroImg) {
      heroImg.src = `assets/screenshots/${folder}/screen_${currentHeroScreen}.webp`;
    }

    document.querySelectorAll('[data-localized-screen]').forEach((img) => {
      const num = img.getAttribute('data-localized-screen');
      if (num) {
        img.src = `assets/screenshots/${folder}/screen_${num}.webp`;
      }
    });
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

    updateLocalizedScreenshots(lang);
    initDateHeader();
  }

  function initHeroSwitcher() {
    const heroImg = document.getElementById('hero-active-screenshot');
    const guardianImg = document.querySelector('.hero-floating-guardian');
    const tabBtns = document.querySelectorAll('.hero-tab-btn');

    if (!heroImg || !tabBtns.length) return;

    tabBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const raw = btn.getAttribute('data-hero-screen') || btn.getAttribute('data-screen') || '1';
        const screenNum = parseInt(raw, 10);
        currentHeroScreen = screenNum;

        tabBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        const folder = currentLang === 'en' ? 'en' : 'fr';
        heroImg.style.opacity = '0.35';
        setTimeout(() => {
          heroImg.src = `assets/screenshots/${folder}/screen_${screenNum}.webp`;
          if (guardianImg && screenGuardians[screenNum]) {
            guardianImg.src = screenGuardians[screenNum];
          }
          heroImg.style.opacity = '1';
        }, 110);
      });
    });
  }

  function initShowcaseCarousel() {
    const track = document.getElementById('appshots-track') || document.getElementById('appshots-carousel');
    const pills = document.querySelectorAll('.showcase-pill');
    const slides = document.querySelectorAll('.appshot-slide-card');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');

    if (!track || !slides.length) return;

    function setActiveIndex(idx) {
      pills.forEach((p, i) => p.classList.toggle('active', i === idx));
      slides.forEach((s, i) => {
        s.classList.toggle('active', i === idx);
        s.classList.toggle('active-slide', i === idx);
      });
    }

    function scrollToSlide(idx) {
      const target = slides[idx];
      if (!target) return;
      setActiveIndex(idx);
      const left = target.offsetLeft - track.offsetLeft - 4;
      track.scrollTo({ left, behavior: 'smooth' });
    }

    pills.forEach((pill, idx) => {
      pill.addEventListener('click', () => {
        scrollToSlide(idx);
      });
    });

    slides.forEach((slide, idx) => {
      slide.addEventListener('click', () => {
        setActiveIndex(idx);
      });
    });

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        const currentIdx = Array.from(pills).findIndex((p) => p.classList.contains('active'));
        const nextIdx = currentIdx > 0 ? currentIdx - 1 : slides.length - 1;
        scrollToSlide(nextIdx);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const currentIdx = Array.from(pills).findIndex((p) => p.classList.contains('active'));
        const nextIdx = currentIdx < slides.length - 1 ? currentIdx + 1 : 0;
        scrollToSlide(nextIdx);
      });
    }
  }

  function initDateHeader() {
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
    initHeroSwitcher();
    initShowcaseCarousel();
    initDateHeader();
    initMobileMenu();
  });

})();
