/**
 * QiMétéo Official Website — Interactive AppShots Studio Showcase
 * - Bilingual Switcher (FR / EN) with dynamic App Store screenshot localization
 * - Interactive Hero Poster Switcher & 8-Screen AppShots Carousel
 * - Zero calculation IP exposed
 */

(function () {
  'use strict';

  const screenGuardians = {
    1: 'assets/stickers/animal_3_sun_moon.webp',
    2: 'assets/stickers/animal_3_sun_moon.webp',
    3: 'assets/stickers/animal_3_sun_moon.webp',
    4: 'assets/stickers/animal_3_sun_moon.webp',
    5: 'assets/stickers/animal_3_sun_moon.webp',
    6: 'assets/stickers/animal_3_sun_moon.webp',
    7: 'assets/stickers/animal_3_sun_moon.webp',
    8: 'assets/stickers/animal_3_sun_moon.webp'
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
      hero_desc: "Comme vous regardez la météo avant de sortir, consultez QiMétéo chaque matin en 3 secondes. À partir de vos 4 Piliers BaZi (année, mois solaire, jour et heure de naissance), l’application croise les 12 Officiers Tong Shu et le Qi Men Dun Jia (hors heures Kong Wang) pour révéler la couleur symbolique de votre journée, vos créneaux d’or de 2h, la direction favorable où orienter votre chaise et vos dates propices sur 30 jours.*",

      hero_badge_1: "Aujourd’hui & 2 créneaux/j gratuits",
      hero_badge_2: "Planificateur 30 jours · 7 projets",
      hero_badge_3: "7 jours d’essai · Partage Familial (6)",

      hero_btn_sub: "iPhone & iPad · iOS 17+ · Sortie App Store",
      hero_btn_main: "Explorer les 8 écrans de l’app",
      hero_btn_discover: "Découvrir l’algorithme Qi Men & Tong Shu",

      ledger_1_dt: "4 Piliers BaZi natals",
      hero_pill_1: "Année, Mois solaire JieQi, Jour & Heure de naissance",
      ledger_2_dt: "Créneaux d’Or filtrés",
      hero_pill_2: "Jusqu’à 3 créneaux/j · Exclusion stricte de Kong Wang",
      ledger_3_dt: "Agenda & Synergies",
      hero_pill_3: "Planificateur 30J, Feng Shui Gua, Couple & Recrutement",

      htab_1: "1 · Météo Qi",
      htab_3: "3 · Créneaux d’Or",
      htab_4: "4 · Boussole",
      htab_5: "5 · Planifier 30J",
      htab_7: "7 · Synergies",

      show_kicker: "GALERIE OFFICIELLE APP STORE · IPHONE & IPAD",
      show_title: "8 ÉCRANS POUR CHOISIR UN MOMENT PROPICE*",
      show_desc: "Du bulletin matinal en 3 secondes jusqu’au planificateur sur 30 jours et aux synergies Couple & Recrutement, découvrez l’interface complète de QiMétéo. Basculez la langue (FR / EN) en haut à droite pour voir les captures dans chaque langue.",

      sp_1: "01 · Votre Météo",
      sp_2: "02 · Sur Mesure (BaZi)",
      sp_3: "03 · Créneaux d’Or 2h",
      sp_4: "04 · Boussole Live",
      sp_5: "05 · Planificateur 30J",
      sp_6: "06 · Feng Shui Maison",
      sp_7: "07 · Synergie Couple",
      sp_8: "08 · Synergie Travail",

      sc1_t: "Feu Vert, Orange ou Rouge",
      sc1_d: "Votre score symbolique (0–100 %)*, l’Officier du Jour Tong Shu et le repère concret dès le réveil.",
      sc2_t: "Sur mesure : Date & Heure natales",
      sc2_d: "Vos 4 Piliers BaZi à 2 étages (Tronc Céleste = Élément Yin/Yang en haut, Branche Terrestre = Animal en bas) et votre Chiffre Gua.",
      sc3_t: "Créneaux d’Or de 2h (hors Kong Wang)",
      sc3_d: "Vos meilleures fenêtres horaires de 2h chaque jour*, sélectionnées et diversifiées (jusqu’à 3 créneaux d’or/jour).",
      sc4_t: "Boussole Live en 2 modes : Créneaux 2h & À vie Chez soi",
      sc4_d: "Mode « Créneaux 2h (Qi Men) » (change toutes les 2h, dos tourné vers la direction + rituel d’ancrage 3 min) et mode « À vie • Chez soi (Gua) » (±7° pour lit & bureau fixe).*",
      sc5_t: "Planificateur 30 Jours · 7 Projets",
      sc5_d: "Trouvez les jours propices sur 30 jours* (tri par Score % ou Au plus tôt) et auditez votre Agenda Apple.",
      sc6_t: "Feng Shui Maison (Chiffre Gua) : Lit & Bureau",
      sc6_d: "Vos 4 directions favorables permanentes (Sheng Qi, Tian Yi, Yan Nian, Fu Wei) pour orienter votre lit et votre bureau.*",
      sc6_duo_t: "Synergie Couple, Famille & Piliers du Jour",
      sc6_duo_d: "Analyse des 4 Piliers, théorie du Pilier du Jour (Maître du Jour ↔ Branche Terrestre du Jour), unions et conflits des Branches, et dates communes sur 30 jours.*",
      sc8_t: "Synergie Travail, Associés & Recrutement",
      sc8_d: "Évaluez un candidat ou associé : Force de la Branche du Mois (Enraciné vs Adaptatif), Objectif professionnel (Richesse, Pouvoir, Savoir-Faire…), Pilier du Jour face à la pression et détection des conflits.*",

      concept_badge: "L’almanach Tong Shu",
      concept_kicker: "12 OFFICIERS DU JOUR · ACCUMULATION · KONG WANG",
      concept_title: "Trois feux pour lire la polarité symbolique d’une journée — sans confondre Réussite et Accumulation.*",
      concept_desc: "Dans la tradition du Tong Shu, chaque journée est gouvernée par l’un des 12 Officiers (Jian Chu). QiMétéo croise cet Officier avec vos 4 Piliers de naissance et applique les règles classiques : distinction entre Réussite/Moisson et Accumulation, et exclusion des heures Kong Wang.*",

      green_tag: "Feu Vert · Jour Rouge",
      green_title: "Journée Porteuse — Réussite, Ouverture & Stabilité",
      green_desc: "Jours de Réussite (成), d’Ouverture (開), de Stabilité (定) ou de Commencement (建), sans opposition avec vos piliers natals. Propice pour aborder un contrat, lancer un projet, négocier, célébrer une union ou engager une démarche importante.*",

      orange_tag: "Feu Ambre · Jour Nuancé",
      orange_title: "Journée Ciblée — Nuance sur l’Accumulation (滿)",
      orange_desc: "Dans la tradition du Tong Shu, l’Officier Accumulation (滿) se distingue de Réussite (成) ou Moisson (收) : il amplifie symboliquement ce qui est entrepris. Privilégiez les bons créneaux horaires Qi Men* (et pour tout soin ou rendez-vous médical, suivez toujours exclusivement le calendrier fixé par votre médecin**).",

      red_tag: "Feu Rouge · Jour Noir & Kong Wang",
      red_title: "Retenue — Destruction, Clash ou Vide Céleste (Kong Wang)",
      red_desc: "Jours de Destruction (破), de Fermeture (閉) ou de Clash frontal avec votre Pilier du Jour : propice pour ralentir et différer ce qui peut attendre. De même, QiMétéo écarte les heures Kong Wang (空亡, Vide Céleste).*",

      pillars_badge: "Thème natal BaZi",
      pillars_kicker: "SUR MESURE · 4 PILIERS DE NAISSANCE (四柱八字)",
      pillars_title: "Pourquoi le seul signe de l’année ne suffit jamais.",
      pillars_desc: "Chaque pilier BaZi comporte deux étages : en haut, le Tronc Céleste (Tian Gan 天干 : l’Élément Yin ou Yang, comme Eau Yin 癸, Feu Yang 丙 ou Terre Yang 戊) et en bas, la Branche Terrestre (Di Zhi 地支 : l’Animal). Votre identité profonde — le Maître du Jour — est le Tronc Céleste (l’Élément) de votre Jour de naissance, et non un animal.",

      pil_1_title: "Pilier de l’Année (Racines & Cercle)",
      pil_1_desc: "Calé sur le Nouvel An solaire (LiChun, ~4 février), il associe un Tronc Céleste (Élément) et une Branche Terrestre (Animal de l’année) qui reflètent votre ancrage familial et votre cercle extérieur.",
      pil_2_title: "Pilier du Mois Solaire (JieQi)",
      pil_2_desc: "Déterminé par les 24 périodes solaires astronomiques (JieQi), il gouverne votre climat professionnel et détermine la force saisonnière (Wang Xiang) de votre Élément du Jour.",
      pil_3_tag: "Tronc du Jour · Maître du Jour",
      pil_3_title: "Pilier du Jour (Tronc Céleste = Maître du Jour)",
      pil_3_desc: "Le Tronc Céleste du Jour (ex. Eau Yin 癸, Feu Yang 丙, Terre Yang 戊) est votre Maître du Jour : c’est un Élément Yin ou Yang, jamais un animal. La Branche Terrestre située en dessous gouverne votre foyer et détecte les Clashes quotidiens.",
      pil_4_title: "Pilier de l’Heure de Naissance",
      pil_4_desc: "Composé du Tronc Céleste et de la Branche Terrestre de votre heure solaire de naissance, il gouverne vos projets, vos investissements et affine la sélection de vos créneaux horaires.",

      feat_badge: "Les 6 instruments QiMétéo",
      feat_kicker: "QI MEN DUN JIA · BOUSSOLE 8 PALAIS · PLANIFICATEUR 30 JOURS",
      feat_title: "Un jour propice, une heure favorable et le côté favorable réunis.*",
      feat_desc: "Chaque écran de QiMétéo répond à une question concrète : quand aborder un contrat ou lancer un projet, à quelle heure passer un appel important, dans quel sens orienter votre fauteuil et comment aménager votre intérieur.*",

      feat_1_title: "Créneaux d’Or de 2h (hors heures Kong Wang)",
      feat_1_desc: "Entre 07h et 23h, QiMétéo écarte les heures Kong Wang (Vide Céleste) ainsi que les structures défavorables pour retenir jusqu’à 3 créneaux d’or par jour (Combinaisons 5★, Vœux & Intentions, Finances & Relationnel Favorables*, Déités diversifiées).",

      feat_2_title: "Boussole Live en 2 modes : Créneaux 2h (Qi Men) & À vie • Chez soi (Gua)",
      feat_2_desc: "Mode « Créneaux 2h (Qi Men) » (change toutes les 2h : indique vers quelle direction tourner votre dos pendant un créneau d’or + rituel d’ancrage 3 min) et mode « À vie • Chez soi (Gua) » (vos 4 directions permanentes ±7° pour orienter la tête de votre lit et votre bureau fixe à la maison).*",

      feat_3_title: "Planificateur 30 Jours sur 7 Intentions & Double Tri",
      feat_3_desc: "Choisissez votre objectif parmi 7 intentions (Contrats & Négociations, Lancer un projet, Union & Mariage, Immobilier & Travaux, Voyage, Médecin, Chirurgie & Combinaison Santé**, Tri & Régime) et triez les dates propices sur 30 jours* par « Plus pertinent (Score %) » ou « Au plus tôt (Pressé) ».",

      feat_5_title: "Synergie Travail & Recrutement (Pilier du Jour & Branche du Mois)",
      feat_5_desc: "Évaluez un candidat, associé ou collaborateur selon la méthode BaZi classique : rapport interne du Pilier du Jour (réaction face à la pression et au contrôle), force de la Branche du Mois (Yue Ling) & Objectif professionnel (Richesse, Pouvoir, Savoir-Faire…), et détection des conflits de Troncs et Branches.*",

      duo_badge: "Harmonie du lieu, Couple & Recrutement",
      duo_kicker: "FENG SHUI MAISON (八宅) & SYNERGIE COUPLE / TRAVAIL",
      duo_title: "Orientations Feng Shui Maison (lit, bureau) et Synergie Couple, Proches & Recrutement.",
      duo_desc: "Au-delà de la météo du jour, QiMétéo calcule vos directions permanentes à la maison selon votre Chiffre Gua et croise deux thèmes complets — en mode Couple/Proches ou en mode Travail/Recrutement (Pilier du Jour, Force de la Branche du Mois & Objectif pro, Conflits Troncs/Branches) — ainsi que vos dates communes sur 30 jours.*",

      duo_p1_strong: "Double Synergie BaZi : Couple & Proches + Travail & Recrutement",
      duo_p1_desc: "Analyse complète des 4 Piliers : rapport du Pilier du Jour (Maître du Jour ↔ Branche Terrestre du Jour), force saisonnière de la Branche du Mois & Objectif professionnel (Richesse & Résultat, Pouvoir, Production, Ressource, Compagnons), et détection des conflits (Chocs, Six Blessures, Punitions).*",
      duo_p2_strong: "Feng Shui Ming Gua : vos 4 bonnes directions personnelles (directions pleines)",
      duo_p2_desc: "Sheng Qi (Créativité, puissance, réalisation), Tian Yi (Soutien et assistance, Médecins du ciel**), Yan Nian (Relationnel et famille) et Fu Wei (Stabilité, harmonie générale), appliquées aux directions pleines : Nord (353°–7°), Nord-Est (38°–52°), Est (83°–97°), Sud-Est (128°–142°), Sud (173°–187°), Sud-Ouest (218°–232°), Ouest (263°–277°) et Nord-Ouest (308°–322°).*",

      price_badge: "Éditions & Partage Familial",
      price_kicker: "7 JOURS D’ESSAI GRATUIT · PARTAGE FAMILIAL APPLE INCLUS (6 PERSONNES)",
      price_title: "Aujourd’hui en libre accès, l’horizon 30 jours avec QiMétéo Premium.",
      price_desc: "Le bulletin d’aujourd’hui, vos 2 meilleurs créneaux stratégiques de 2h et la boussole du jour sont gratuits sans limite de durée. QiMétéo Premium (Mensuel ou Annuel, tous deux avec 7 jours d’essai gratuit et Partage Familial Apple) débloque le planificateur sur 30 jours, tous les créneaux d’or du jour (jusqu’à 3/j), les 7 intentions de projet, le Feng Shui Maison (Chiffre Gua) et la Synergie Couple & Travail/Recrutement.",

      plan_free_name: "Édition Quotidienne",
      plan_free_sub: "Accès permanent",
      plan_free_label: "Gratuit",
      plan_free_desc: "Tout l’essentiel chaque matin pour consulter la météo d’aujourd’hui et ses 2 meilleurs créneaux horaires.",
      pfree_1: "Météo d’aujourd’hui personnalisée (date & heure de naissance)",
      pfree_2: "Vos 2 meilleurs créneaux stratégiques (2h) chaque jour",
      pfree_3: "Boussole Qi Men en direct pour la journée en cours",
      pfree_4: "Widgets pour l’écran d’accueil et de verrouillage iOS",
      pfree_5: "Planificateur 30 jours & 7 intentions de projet",
      pfree_6: "Feng Shui Maison & Synergie Couple / Travail illimitée",
      btn_free: "Inclus gratuitement dans l’app",

      plan_vip_ribbon: "7 jours d’essai gratuit · Partage Familial inclus",
      plan_vip_name: "QiMétéo Premium · Annuel",
      plan_vip_price: "Voir l’offre dans l’app",
      plan_vip_desc: "7 jours d’essai gratuit. Partage Familial Apple inclus pour jusqu’à 6 membres du foyer.",
      pvip_1: "Planificateur sur 30 jours glissants pour vos 7 projets",
      pvip_2: "Tous les créneaux d’or du jour (jusqu’à 3/j) & audit Agenda Apple",
      pvip_3: "Feng Shui Maison (Chiffre Gua) : lit, bureau & maison",
      pvip_4: "Synergie Couple & Proches illimitée (4 Piliers & dates à deux)",
      pvip_5: "Synergie Travail & Recrutement (Candidats, Associés & Équipe)",
      pvip_6: "Partage Familial Apple inclus (jusqu’à 6 proches sans supplément)",
      btn_vip: "Essayer 7 jours gratuitement dans l’app",

      plan_month_ribbon: "7 jours d’essai gratuit · Sans engagement",
      plan_month_name: "QiMétéo Premium · Mensuel",
      plan_month_price: "Voir l’offre dans l’app",
      plan_month_desc: "Idéal pour accompagner une signature, un recrutement ou un déménagement sur 30 jours en toute liberté.",
      pmonth_1: "Planificateur 30 jours & recherche par objectif (7 projets)",
      pmonth_2: "Tous les créneaux d’or (jusqu’à 3/j) & Feng Shui Maison",
      pmonth_3: "Synergie Couple & Travail/Recrutement + audit Calendrier Apple",
      pmonth_4: "7 jours d’essai gratuit, résiliable à tout moment",
      pmonth_5: "Partage Familial Apple inclus (jusqu’à 6 personnes)",
      btn_month: "Essayer 7 jours gratuitement dans l’app",

      priv_title: "Calculs astronomiques 100 % en local sur votre appareil",
      priv_desc: "Votre date et votre heure de naissance, vos 4 Piliers BaZi, votre Chiffre Gua, les profils de vos proches et votre agenda demeurent sur votre iPhone ou votre iPad. Aucun compte requis, aucune collecte d’adresse IP ni serveur publicitaire.",
      priv_link: "Politique de confidentialité",

      faq_badge: "Repères & questions",
      faq_title: "Questions fréquentes sur la méthode et l’application.",
      faq_1_q: "Pourquoi renseigner à la fois sa date et son heure de naissance ?",
      faq_1_a: "En métaphysique chinoise, chaque discipline a un rôle distinct : le BaZi dresse vos 4 Piliers natals (où chaque pilier associe en haut un Tronc Céleste — l’Élément Yin ou Yang, comme Eau Yin 癸 ou Feu Yang 丙 — et en bas une Branche Terrestre — l’Animal ; votre Maître du Jour est le Tronc Céleste de votre Jour de naissance, donc un Élément et jamais un animal). Le Tong Shu qualifie l’énergie générale de la journée via les 12 Officiers, le Qi Men Dun Jia sélectionne les créneaux horaires de 2h (hors Kong Wang) et l’orientation temporelle de votre chaise (8 Palais), tandis que le Feng Shui Ming Gua détermine les 4 directions permanentes de votre logement (lit, bureau).",
      faq_5_q: "Que signifient les jours d’Accumulation, les heures Kong Wang et les repères Santé ?",
      faq_5_a: "Dans la tradition culturelle du Tong Shu et du Qi Men Dun Jia, l’Officier « Accumulation » (滿) se distingue de « Réussite » (成) ou « Moisson » (收), et les heures « Kong Wang » (空亡, Vide Céleste) sont automatiquement écartées des créneaux recommandés.* Important : ces repères relèvent exclusivement d’une lecture culturelle et symbolique, sans aucune valeur médicale — pour toute consultation, soin, traitement ou chirurgie, suivez toujours uniquement l’avis et le calendrier fixés par votre médecin.**",
      faq_2_q: "Que comprend l’accès gratuit au quotidien par rapport à QiMétéo Premium ?",
      faq_2_a: "Chaque jour, vous accédez gratuitement à la météo complète d’aujourd’hui (Feu Vert/Orange/Rouge, score symbolique %, Officier, pilier et affinités avec votre thème natal), à vos 2 créneaux propices de 2h, à la boussole en direct et aux widgets iOS. QiMétéo Premium (mensuel ou annuel, avec 7 jours d’essai gratuit) débloque le planificateur sur 30 jours, tous les créneaux d’or de la journée (jusqu’à 3/j), les 7 intentions de projet, l’audit du Calendrier Apple, le Feng Shui Maison (Chiffre Gua) et la Synergie Couple & Travail/Recrutement.",
      faq_3_q: "Quelle est la différence entre la boussole Qi Men et les directions Feng Shui du lit ?",
      faq_3_a: "Les deux outils agissent à des échelles complémentaires. La boussole Qi Men Dun Jia est temporelle : elle indique dans quelle direction orienter votre chaise pendant un créneau de deux heures pour un appel, un contrat ou une négociation.* Le Feng Shui Ming Gua est permanent : calculé selon votre année solaire de naissance, il indique vos 4 bonnes directions personnelles — Sheng Qi (Créativité, puissance, réalisation), Tian Yi (Soutien et assistance, Médecins du ciel**), Yan Nian (Relationnel et famille) et Fu Wei (Stabilité, harmonie générale) — appliquées aux directions pleines (Nord 353°–7°, Nord-Est 38°–52°, Est 83°–97°, Sud-Est 128°–142°, Sud 173°–187°, Sud-Ouest 218°–232°, Ouest 263°–277°, Nord-Ouest 308°–322°).*",
      faq_4_q: "Le Partage Familial Apple est-il inclus dans l’abonnement ?",
      faq_4_a: "Oui. Les deux formules QiMétéo Premium (mensuelle et annuelle) incluent nativement le Partage Familial Apple : jusqu’à six membres de votre groupe familial bénéficient de l’intégralité des fonctions Premium sur leur propre iPhone ou iPad sans supplément.",

      final_kicker: "LA MÉTÉO DE VOS DÉCISIONS · IPHONE & IPAD",
      final_title: "Choisissez un moment propice.*",
      final_desc: "7 jours d’essai gratuit sur QiMétéo Premium · Partage Familial Apple inclus jusqu’à 6 proches.",
      final_btn_sub: "iPhone & iPad · iOS 17+",
      final_btn_main: "Découvrir sur l’App Store",

      footer_bio: "Almanach décisionnel quotidien calculé sur votre date et votre heure de naissance : sélection de dates propices sur 30 jours par projet (12 Officiers Tong Shu), créneaux Qi Men Dun Jia (hors Kong Wang) et boussole Feng Shui Ming Gua.* Conçu et développé en France par Xavier Larrodé.",
      footer_disclaimer_star: "* Lecture symbolique inspirée du Qi Men Dun Jia et du Tong Shu, sans valeur prédictive ni garantie de résultat. Vous restez libre de vos choix.",
      footer_disclaimer_doublestar: "** Lecture symbolique, sans valeur médicale : elle ne remplace pas l’avis de votre médecin. Ne retardez, n’avancez ni n’interrompez jamais un soin, une intervention ou un traitement à cause de cette app. En cas d’urgence, contactez les services d’urgence de votre pays (15 ou 112 en France).",
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
      hero_desc: "Just like checking the morning weather before stepping out, check QiMétéo in 3 seconds each morning. From your 4 BaZi Pillars (birth year, solar month, day, and hour), the app crosses the 12 Tong Shu Officers and Qi Men Dun Jia (cleared of Kong Wang void hours) to reveal your day's symbolic color, your golden 2-hour windows, the favorable direction to face your chair, and your favorable dates over 30 days.*",

      hero_badge_1: "Today & top 2 daily slots free",
      hero_badge_2: "30-Day Planner · 7 project goals",
      hero_badge_3: "7-day free trial · Family Sharing (6)",

      hero_btn_sub: "iPhone & iPad · iOS 17+ · App Store Release",
      hero_btn_main: "Explore all 8 App Store screens",
      hero_btn_discover: "Discover the Qi Men & Tong Shu engine",

      ledger_1_dt: "4 Natal BaZi Pillars",
      hero_pill_1: "Year, Solar JieQi Month, Day & Birth Hour",
      ledger_2_dt: "Filtered Golden Windows",
      hero_pill_2: "Up to 3 slots/day · Strict Kong Wang exclusion",
      ledger_3_dt: "Planner & Synergies",
      hero_pill_3: "30D Planner, Ming Gua Feng Shui, Love & Hiring Synergy",

      htab_1: "1 · Qi Weather",
      htab_3: "3 · Golden Slots",
      htab_4: "4 · Compass",
      htab_5: "5 · 30D Planner",
      htab_7: "7 · Synergies",

      show_kicker: "OFFICIAL APP STORE GALLERY · IPHONE & IPAD",
      show_title: "8 SCREENS TO PICK A FAVORABLE MOMENT*",
      show_desc: "From your 3-second morning forecast to the 30-day project planner and Love & Work/Hiring Synergies, explore the complete QiMétéo interface. Toggle the language (FR / EN) in the top right corner to preview the localized App Store screenshots.",

      sp_1: "01 · Decision Weather",
      sp_2: "02 · Tailored (4 Pillars)",
      sp_3: "03 · Golden 2h Slots",
      sp_4: "04 · Live Compass",
      sp_5: "05 · 30-Day Planner",
      sp_6: "06 · Home Feng Shui",
      sp_7: "07 · Love Synergy",
      sp_8: "08 · Work Synergy",

      sc1_t: "Green, Amber or Red Light",
      sc1_d: "Your symbolic score (0–100%)*, the Tong Shu Day Officer, and clear daily guidance as soon as you wake up.",
      sc2_t: "Tailored to Your Birth Date & Hour",
      sc2_d: "Your 4 two-level BaZi Pillars (Heavenly Stem = Yin/Yang Element on top, Earthly Branch = Animal on bottom) and your Ming Gua number.",
      sc3_t: "Golden 2h Windows (Zero Kong Wang)",
      sc3_d: "Your best daily 2-hour windows*, selected and diversified (up to 3 golden slots/day).",
      sc4_t: "Dual-Mode Live Compass: 2h Qi Men Slots & Lifetime Home Gua",
      sc4_d: "'2h Slots (Qi Men)' mode (changes every 2h, back turned toward the direction + 3-min anchoring ritual) and 'Lifetime • At Home (Gua)' mode (±7° for bed & fixed desk).*",
      sc5_t: "30-Day Planner · 7 Project Goals",
      sc5_d: "Find your favorable dates over 30 days* (sorted by Score % or Soonest) and audit your Apple Calendar.",
      sc6_t: "Home Feng Shui (Ming Gua): Bed & Desk",
      sc6_d: "Your 4 permanent favorable directions (Sheng Qi, Tian Yi, Yan Nian, Fu Wei) to orient your bed and desk.*",
      sc6_duo_t: "Love, Family & Day Pillar Synergy",
      sc6_duo_d: "4-Pillar comparison, Day Pillar theory (Day Master ↔ Day Branch), Stem/Branch unions & clashes, and shared favorable dates over 30 days.*",
      sc8_t: "Work, Partners & Hiring Synergy",
      sc8_d: "Evaluate a candidate or partner: Month Branch strength (Rooted vs. Adaptive), Career Objective (Wealth, Power, Output…), Day Pillar under pressure, and clash detection.*",

      concept_badge: "The Tong Shu Almanac",
      concept_kicker: "12 DAY OFFICERS · FULL (ACCUMULATION) · KONG WANG VOID",
      concept_title: "Three signals to read the symbolic nature of a day — without confusing Success and Full days.*",
      concept_desc: "In classical Tong Shu tradition, each day is governed by one of the 12 Officers (Jian Chu). QiMétéo crosses this Officer with your 4 Birth Pillars and applies traditional rules: distinction between Success/Harvest and Full (Accumulation) days, and automatic filtering of Kong Wang void hours.*",

      green_tag: "Green Light · Red Day",
      green_title: "Supportive Day — Success, Open & Stable",
      green_desc: "Success (成), Open (開), Stable (定), or Establish (建) days with zero clash against your natal pillars. Favorable for approaching contracts, launching projects, negotiating, celebrating a union, or taking important steps.*",

      orange_tag: "Amber Light · Nuanced Day",
      orange_title: "Targeted Day — Nuance on Full / Accumulation (滿)",
      orange_desc: "In Tong Shu tradition, the Full / Accumulation Officer (滿) is distinct from Success (成) or Harvest (收): it symbolically amplifies what is undertaken. Favor good Qi Men hourly windows* (and for any medical care or appointment, always follow the schedule set by your doctor**).",

      red_tag: "Red Light · Black Day & Kong Wang",
      red_title: "Restraint — Destruction, Clash, or Celestial Void (Kong Wang)",
      red_desc: "Destruction (破), Close (閉), or direct Clash days against your Day Pillar: favorable for slowing down and postponing what can wait. Likewise, QiMétéo filters out Kong Wang (空亡, Celestial Void) hours.*",

      pillars_badge: "BaZi Natal Chart",
      pillars_kicker: "TAILORED · YOUR 4 BIRTH PILLARS (四柱八字)",
      pillars_title: "Why your birth year animal alone is never enough.",
      pillars_desc: "Each BaZi pillar has two levels: on top, the Heavenly Stem (Tian Gan 天干: your Yin or Yang Element, such as Yin Water 癸, Yang Fire 丙, or Yang Earth 戊) and on the bottom, the Earthly Branch (Di Zhi 地支: the Animal). Your core identity — the Day Master — is the Heavenly Stem (Element) of your Birth Day, never an animal.",

      pil_1_title: "Year Pillar (Roots & Circle)",
      pil_1_desc: "Anchored on the Solar New Year (LiChun, ~Feb 4), it pairs a Heavenly Stem (Element) and an Earthly Branch (Year Animal) reflecting your family roots and outer circle.",
      pil_2_title: "Solar Month Pillar (JieQi)",
      pil_2_desc: "Calibrated to the 24 astronomical solar terms (JieQi), it governs your career climate and sets the seasonal strength (Wang Xiang) of your Day Element.",
      pil_3_tag: "Day Stem · Day Master",
      pil_3_title: "Day Pillar (Heavenly Stem = Day Master)",
      pil_3_desc: "The Day Heavenly Stem (e.g. Yin Water 癸, Yang Fire 丙, Yang Earth 戊) is your Day Master: it is a Yin or Yang Element, never an animal. The Earthly Branch underneath governs your home sphere and detects daily Clashes.",
      pil_4_title: "Birth Hour Pillar",
      pil_4_desc: "Composed of the Heavenly Stem and Earthly Branch of your solar birth hour, it governs your projects, investments, and refines your hourly window selection.",

      feat_badge: "The 6 QiMétéo Instruments",
      feat_kicker: "QI MEN DUN JIA · 8-PALACE COMPASS · 30-DAY PLANNER",
      feat_title: "A favorable day, a favorable hour, and a favorable direction united.*",
      feat_desc: "Every screen in QiMétéo answers a concrete question: when to approach a contract or launch, what time to place an important call, which way to turn your chair, and how to arrange your home.*",

      feat_1_title: "Golden 2h Windows (cleared of Kong Wang hours)",
      feat_1_desc: "Between 07:00 and 23:00, QiMétéo filters out Kong Wang hours (Celestial Void) and negative structures to select up to 3 golden slots/day (5★ Combinations, Wishes & Intentions, Favorable Finances & Connections*, diversified Deities).",

      feat_2_title: "Dual-Mode Live Compass: 2h Slots (Qi Men) & Lifetime • At Home (Gua)",
      feat_2_desc: "'2h Slots (Qi Men)' mode (dynamic every 2h: shows which direction to turn your back toward during a golden window + 3-min anchoring ritual) and 'Lifetime • At Home (Gua)' mode (your 4 lifetime personal directions ±7° for bed headboard & fixed desk).*",

      feat_3_title: "30-Day Planner Across 7 Project Goals & Dual Sort",
      feat_3_desc: "Pick your goal among 7 intentions (Contracts & Negotiations, Launch a Project, Marriage & Union, Real Estate & Renovation, Travel, Doctor, Surgery & Health Combination**, Declutter & Diet) and sort favorable dates over 30 days* by 'Best Match (Score %)' or 'Soonest (Urgent)'.",

      feat_5_title: "Work & Hiring Synergy (Day Pillar & Month Branch Goal)",
      feat_5_desc: "Evaluate a candidate, co-founder, or collaborator using classical BaZi theory: Day Pillar relationship (response to pressure & control), Month Branch strength (Yue Ling) & Career Objective (Wealth, Power, Output…), and Stem/Branch conflict detection.*",

      duo_badge: "Home harmony, Love & Hiring Synergy",
      duo_kicker: "HOME FENG SHUI (八宅) & LOVE / WORK SYNERGY",
      duo_title: "Home Feng Shui orientations (bed, desk) and Love, Family & Hiring Synergy.",
      duo_desc: "Beyond daily weather, QiMétéo computes your permanent directions at home from your Gua Number and crosses two complete charts — in Love/Family mode or Work/Hiring mode (Day Pillar, Month Branch strength & Career Goal, Stem/Branch clashes) — plus shared favorable dates over 30 days.*",

      duo_p1_strong: "Dual BaZi Synergy: Love & Family + Work & Hiring",
      duo_p1_desc: "Complete 4-Pillar analysis: Day Pillar relationship (Day Master ↔ Day Branch), Month Branch seasonal strength & Career Objective (Wealth & Results, Power, Output, Resource, Peers), and conflict detection (Clashes, Six Harms, Punishments).*",
      duo_p2_strong: "Ming Gua Feng Shui: your 4 personal favorable directions (full directions)",
      duo_p2_desc: "Sheng Qi (Creativity, power, achievement), Tian Yi (Support & assistance, Heavenly Doctor**), Yan Nian (Relationships & family), and Fu Wei (Stability, overall harmony), applied to full central directions: North (353°–7°), Northeast (38°–52°), East (83°–97°), Southeast (128°–142°), South (173°–187°), Southwest (218°–232°), West (263°–277°), and Northwest (308°–322°).*",

      price_badge: "Editions & Family Sharing",
      price_kicker: "7-DAY FREE TRIAL · APPLE FAMILY SHARING INCLUDED (6 PEOPLE)",
      price_title: "Today is free forever; unlock the full 30-day horizon with QiMétéo Premium.",
      price_desc: "Today's forecast, your top 2 strategic two-hour windows, and today's live compass are free without time limits. QiMétéo Premium (Monthly or Annual, both with a 7-day free trial and Apple Family Sharing) unlocks the 30-day planner, all daily golden windows (up to 3/day), all 7 project intentions, Home Feng Shui (Ming Gua), and Love & Work/Hiring Synergy.",

      plan_free_name: "Daily Edition",
      plan_free_sub: "Free forever",
      plan_free_label: "Free",
      plan_free_desc: "Everything you need each morning to check today's weather and its top 2 strategic time windows.",
      pfree_1: "Personalized Today forecast (birth date & hour)",
      pfree_2: "Your top 2 strategic (2h) windows every day",
      pfree_3: "Live Qi Men compass for the current day",
      pfree_4: "iOS Home Screen and Lock Screen widgets",
      pfree_5: "30-day planner & 7 project intentions",
      pfree_6: "Home Feng Shui & unlimited Love / Work Synergy",
      btn_free: "Included free in the app",

      plan_vip_ribbon: "7-day free trial · Family Sharing included",
      plan_vip_name: "QiMétéo Premium · Annual",
      plan_vip_price: "See offer in the app",
      plan_vip_desc: "7-day free trial. Apple Family Sharing included for up to 6 household members.",
      pvip_1: "Rolling 30-day planner across all 7 project goals",
      pvip_2: "All daily golden windows (up to 3/day) & Apple Calendar audit",
      pvip_3: "Home Feng Shui (Ming Gua): bed, desk & home directions",
      pvip_4: "Unlimited Love & Family Synergy (4-Pillar comparison & shared dates)",
      pvip_5: "Work & Hiring Synergy (Candidates, Partners & Team)",
      pvip_6: "Apple Family Sharing included (up to 6 family members at no extra cost)",
      btn_vip: "Try 7 days free in the app",

      plan_month_ribbon: "7-day free trial · No commitment",
      plan_month_name: "QiMétéo Premium · Monthly",
      plan_month_price: "See offer in the app",
      plan_month_desc: "Ideal for accompanying a signing, hiring decision, or move over 30 days with complete freedom.",
      pmonth_1: "30-day planner & goal-based date finder (7 projects)",
      pmonth_2: "All golden windows (up to 3/day) & Home Feng Shui",
      pmonth_3: "Love & Work/Hiring Synergy + Apple Calendar audit",
      pmonth_4: "7-day free trial, cancel anytime",
      pmonth_5: "Apple Family Sharing included (up to 6 people)",
      btn_month: "Try 7 days free in the app",

      priv_title: "Astronomical calculations 100% on-device",
      priv_desc: "Your birth date and hour, your 4 BaZi Pillars, your Gua Number, your family profiles, and your calendar stay exclusively on your iPhone or iPad. No account required, no IP tracking or advertising servers.",
      priv_link: "Privacy policy",

      faq_badge: "Reference & questions",
      faq_title: "Frequently asked questions about the method and the app.",
      faq_1_q: "Why enter both your birth date and your birth hour?",
      faq_1_a: "In Chinese metaphysics, each discipline has a distinct role: BaZi maps your 4 natal Pillars (where each pillar pairs a Heavenly Stem on top — your Yin or Yang Element, such as Yin Water 癸 or Yang Fire 丙 — with an Earthly Branch on the bottom — the Animal; your Day Master is the Heavenly Stem of your Birth Day, an Element and never an animal). Tong Shu qualifies the general energy of the day via the 12 Officers, Qi Men Dun Jia selects the 2-hour windows (cleared of Kong Wang) and temporary chair orientation (8 Palaces), while Ming Gua Feng Shui sets the 4 permanent directions of your home (bed, desk).",
      faq_5_q: "What do Full (Accumulation) days, Kong Wang hours, and Health indicators mean?",
      faq_5_a: "In cultural Tong Shu and Qi Men Dun Jia tradition, the 'Full / Accumulation' Officer (滿) is distinct from 'Success' (成) or 'Harvest' (收), and 'Kong Wang' (空亡, Celestial Void) hours are automatically excluded from your recommended slots.* Important: these indicators are strictly a cultural and symbolic reading with zero medical value — for any consultation, care, treatment, or surgery, always follow exclusively the advice and schedule set by your doctor.**",
      faq_2_q: "What is included in free daily access vs. QiMétéo Premium?",
      faq_2_a: "Every day, you get free access to Today's complete forecast (Green/Amber/Red light, symbolic score %, Officer, pillar, and natal affinities), your 2 favorable 2-hour windows, the live compass, and iOS widgets. QiMétéo Premium (monthly or annual, with a 7-day free trial) unlocks the 30-day planner, all daily golden windows (up to 3/day), all 7 project goals, the Apple Calendar audit, Home Feng Shui (Ming Gua), and Love & Work/Hiring Synergy.",
      faq_3_q: "How do the Qi Men compass and Ming Gua bed directions differ?",
      faq_3_a: "They operate on complementary scales. The Qi Men Dun Jia compass is temporal: it shows which direction to face your chair during a two-hour window for a call, contract, or negotiation.* Ming Gua Feng Shui is permanent: computed from your solar birth year, it reveals your 4 personal favorable directions — Sheng Qi (Creativity, power, achievement), Tian Yi (Support & assistance, Heavenly Doctor**), Yan Nian (Relationships & family), and Fu Wei (Stability, overall harmony) — applied to full central directions (North 353°–7°, Northeast 38°–52°, East 83°–97°, Southeast 128°–142°, South 173°–187°, Southwest 218°–232°, West 263°–277°, Northwest 308°–322°).*",
      faq_4_q: "Is Apple Family Sharing included in the subscription?",
      faq_4_a: "Yes. Both QiMétéo Premium plans (monthly and annual) natively include Apple Family Sharing: up to six members of your family group enjoy full Premium features on their own iPhone or iPad at no extra cost.",

      final_kicker: "THE FORECAST FOR YOUR DECISIONS · IPHONE & IPAD",
      final_title: "Pick a favorable moment.*",
      final_desc: "7-day free trial on QiMétéo Premium · Apple Family Sharing included for up to 6 family members.",
      final_btn_sub: "iPhone & iPad · iOS 17+",
      final_btn_main: "Discover on the App Store",

      footer_bio: "Daily decision almanac tailored to your birth date and hour: 30-day favorable project dates (12 Tong Shu Officers), Qi Men Dun Jia windows (cleared of Kong Wang), and Ming Gua Feng Shui compass.* Designed and built in France by Xavier Larrodé.",
      footer_disclaimer_star: "* A symbolic reading inspired by Qi Men Dun Jia and Tong Shu, with no predictive value and no guaranteed outcome. Your choices remain your own.",
      footer_disclaimer_doublestar: "** Symbolic reading only, not medical advice: it does not replace a licensed physician's guidance. Never delay, move up, or stop any medical care, procedure, or treatment because of this app. In an emergency, call your local emergency services (911 in the US, 999 in the UK, 112 in Europe).",
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
      heroImg.src = `assets/screenshots/${folder}/screen_${currentHeroScreen}.webp?v=10`;
    }

    document.querySelectorAll('[data-localized-screen]').forEach((img) => {
      const num = img.getAttribute('data-localized-screen');
      if (num) {
        img.src = `assets/screenshots/${folder}/screen_${num}.webp?v=10`;
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
          heroImg.src = `assets/screenshots/${folder}/screen_${screenNum}.webp?v=10`;
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
