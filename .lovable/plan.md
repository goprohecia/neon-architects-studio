
# Refonte "wow" — Framer Motion + 21st.dev

Objectif : élever le site vitrine au niveau awwwards/showcase, avec des effets immersifs marqués, tout en respectant la DA solaire (ivoire #FAFAF7, ambre #F59E0B, anthracite #1C1917) et la stack actuelle (Vite + React Router + Tailwind + Framer Motion).

## 1. Composants 21st.dev sélectionnés (intégrés en local, pas de dépendance externe)

Tous portés en TSX dans `src/components/wow/`, stylés avec nos tokens semantic.

| Composant | Usage prévu |
|---|---|
| **Aurora Background** | Fond ambré animé du Hero (gradients qui respirent) |
| **Text Shimmer / Animated Gradient Text** | Mot "sur-mesure" du Hero, titres clés |
| **Animated Beam** | Section Méthode : faisceaux qui relient les étapes |
| **Bento Grid** | Refonte Services & Principes en bento asymétrique |
| **Marquee** | Bandeau logos/proof strip défilant en boucle |
| **Magnetic Button** | Tous les CTA (déjà partiellement présent — généralisé) |
| **Sparkles / Particles** | Hero + CTA Final, accent ambre subtil |
| **Tilt Card (3D)** | Cards Réalisations et Offres |
| **Scroll Velocity Text** | Transition entre sections (texte géant qui scroll) |
| **Image Trail / Cursor Follower** | Curseur custom global avec trail ambré |

## 2. Effets globaux

- **Lenis smooth scroll** intégré (lib légère, ~3KB) pour un scroll inertiel premium
- **Curseur custom** ambré avec états (default, hover-link, hover-button) — desktop only
- **Page transitions** retravaillées : rideau ivoire + scale/blur sur le contenu (remplace `PageTransition3D`)
- **Reveal au scroll** systématisé : lettres / mots / lignes via `splitText` Framer Motion
- **Magnetic hover** sur tous les CTA et liens importants
- **Parallax multi-couches** sur les hero des pages internes

## 3. Périmètre par page

### Header
- Apparition au scroll (hide-on-scroll-down / show-on-scroll-up)
- Underline magnétique sur les nav links
- Indicateur de disponibilité avec sparkle subtil

### Hero (home)
- Aurora Background ambré animé
- Title avec text shimmer sur "sur-mesure" + reveal lettre par lettre
- Mockup flottant : tilt 3D au mouvement souris + glow dynamique
- Badges en stagger reveal
- Scroll indicator animé en bas

### Sections home
- **ProofStrip** → Marquee infini avec logos clients/stack
- **Offres** → Tilt Cards 3D + glow sur hover
- **Services** → Bento Grid asymétrique avec animated icons
- **Réalisations** → Cards tilt + image reveal sur hover (clip-path)
- **Méthode** → Animated Beam reliant les 4 étapes + counter animé
- **Principes** → Bento dark avec sparkles
- **FAQ** → Reveal séquentiel + indicateur animé
- **CTA Final** → Sparkles + magnetic CTA + aurora subtile
- **Transitions inter-sections** : Scroll Velocity Text (mots géants type "DESIGN · CODE · IMPACT")

### Pages services (/services/web, mobile, backoffice, 360)
- Hero avec parallax et text reveal
- Sections feature avec bento + animated beam quand pertinent
- CTA magnétique

### Pages portfolio (Altarys, Prophecia, WeClose)
- Hero immersif plein écran avec image parallax + masque SVG
- Galerie avec image trail au curseur
- Stats animées (counters) au scroll
- Transition projet suivant : scroll velocity teaser

### Pages /studio, /portfolio, /contact
- Hero text reveal + aurora
- Cards/grids en tilt léger
- Form contact avec micro-interactions sur les inputs

## 4. Découpage en itérations

**Itération 1 — Fondations & globals**
- Installer Lenis (smooth scroll)
- Créer `src/components/wow/` : `AuroraBackground`, `TextShimmer`, `MagneticButton`, `TiltCard`, `Marquee`, `Sparkles`, `AnimatedBeam`, `ScrollVelocityText`, `CursorFollower`, `RevealText`
- Curseur custom global (scopé `.theme-solaire`, désactivé tactile)
- Page transitions retravaillées
- Header revisité (hide-on-scroll, magnetic links)

**Itération 2 — Home**
- Hero (aurora + shimmer + tilt mockup + sparkles)
- ProofStrip marquee
- Offres tilt cards
- Services bento
- Réalisations tilt + clip reveal
- Méthode animated beam
- Principes bento dark + sparkles
- FAQ reveal
- CTA Final sparkles + magnetic
- Insertion de Scroll Velocity Text entre sections clés

**Itération 3 — Pages internes**
- 4 pages services (hero + bento + beam)
- 3 pages portfolio (hero immersif + gallery trail + counters)
- /studio, /portfolio, /contact

**Itération 4 — QA & polish**
- Vérification responsive (curseur off mobile, tilt off mobile, marquee adapté)
- Accessibilité : `prefers-reduced-motion` respecté partout
- Performance : lazy load des composants lourds, vérif Lighthouse
- Isolation admin/client (zones `dark-admin` non impactées)

## Détails techniques

- **Pas de nouvelles deps lourdes** : uniquement `@studio-freight/lenis` (~3KB, optionnel — fallback CSS scroll-smooth si refusé)
- Tous les composants 21st.dev sont **portés en local** (pas de package, pas de CLI shadcn nécessaire)
- Tokens HSL strictement utilisés (jamais de couleurs en dur dans les composants)
- `prefers-reduced-motion` court-circuite tilt/parallax/cursor/beam
- Le curseur custom et le tilt 3D sont **désactivés sous 1024px** (perf mobile)
- Les zones admin/client conservent leur `dark-admin` wrapper et **n'héritent d'aucun effet wow** (curseur, lenis scopés à `.theme-solaire`)
- Aucune modif backend, schema, RLS ou auth — purement frontend/présentation

## Ce qui n'est PAS inclus (à confirmer si souhaité)

- React Three Fiber / scènes 3D WebGL (déjà présent ailleurs, pas réutilisé ici sauf demande)
- Refonte du contenu textuel
- Modifications back-office / espace client
