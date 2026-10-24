# 🌟 QiMétéo — Official Website (`qimeteo.app`)

Vitrine web officielle et documentation de l'application **QiMétéo** pour iOS & iPadOS.

> **QiMétéo** est une application iOS de météo énergétique quotidienne et de sélection de dates fastes basée sur les sagesses millénaires orientales (**Tong Shu**, **Qi Men Dun Jia** et **BaZi**). Elle traduit ces calculs complexes en un indicateur limpide accessible en 3 secondes : **Feu Vert** (Journée Porteuse), **Feu Orange** (Journée Calme) ou **Feu Rouge** (Journée de Prudence), avec ses Créneaux d'Or de 2 heures et sa boussole d'orientation stratégique.

---

## 🚀 Déploiement & Automatisation GitHub Pages

Le déploiement est **100 % automatisé** via GitHub Actions à chaque `git push` sur la branche `main` :

- **Workflow GitHub Actions** : [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
- **Domaine personnalisé** : [`CNAME`](CNAME) configuré sur `qimeteo.app`
- **Chiffrement HTTPS** : Forcé automatiquement avec certificat SSL Let's Encrypt.
- **Sécurité** : Dépôt public sans aucune clé privée ni token sensible.

---

## ☁️ Configuration Cloudflare DNS pour `qimeteo.app`

Entrées DNS configurées automatiquement sur le compte Cloudflare pour la zone `qimeteo.app` :

| Type | Nom | Cible | Proxy |
| :--- | :--- | :--- | :--- |
| **A** | `@` | `185.199.108.153` | DNS Only |
| **A** | `@` | `185.199.109.153` | DNS Only |
| **A** | `@` | `185.199.110.153` | DNS Only |
| **A** | `@` | `185.199.111.153` | DNS Only |
| **AAAA** | `@` | `2606:50c0:8000::153` | DNS Only |
| **AAAA** | `@` | `2606:50c0:8001::153` | DNS Only |
| **AAAA** | `@` | `2606:50c0:8002::153` | DNS Only |
| **AAAA** | `@` | `2606:50c0:8003::153` | DNS Only |
| **CNAME** | `www` | `xabila.github.io` | DNS Only |

- **SSL/TLS Mode** : Réglé sur **Full** sur Cloudflare.

---

## 🔒 Confidentialité & Propriété Intellectuelle

- **Licence Propriétaire** : Tous droits réservés (voir [`LICENSE`](LICENSE)). Code source, textes, illustrations des 12 signes du zodiaque, calculs et logos sont la propriété exclusive de Xavier Larrodé.
- **Contributions Fermées** : Aucune contribution externe n'est acceptée. Les Pull Requests externes sont automatiquement clôturées par [`.github/workflows/close-prs.yml`](.github/workflows/close-prs.yml).
- **Politique de Confidentialité** : Conforme aux exigences de l'Apple App Store sur [`privacy.html`](privacy.html).

---

&copy; 2026 Xavier Larrodé — [qimeteo.app](https://qimeteo.app)
