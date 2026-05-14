## Nouvelle direction artistique — "Prisme"

Inspirée des deux références : un univers minimal et éditorial, où le blanc/ivoire domine, sublimé par un objet 3D iridescent (verre coloré R/G/B) et des typographies serif majestueuses ponctuées d'un dégradé violet→rose. On remplace l'actuelle DA "Solaire" (ivoire/ambre) tout en gardant la même architecture de pages et les contenus existants.

### Tokens & design system (`index.css` + `tailwind.config.ts`)

- Fond principal : ivoire `#FBFAF7` (HSL `40 30% 98%`).
- Texte : encre profonde `#0E0B14` (`265 30% 6%`).
- Primary : violet doux `#A78BFA` (`258 90% 76%`) avec un secondary rose poudre `#F0AFC8` (`335 75% 82%`).
- Accents iridescents : rouge corail, vert menthe, bleu cobalt — utilisés uniquement pour l'objet 3D et de fines lignes.
- Dégradé signature : `linear-gradient(110deg, #A78BFA 0%, #F0AFC8 55%, #FFB996 100%)`.
- Typo : `Instrument Serif` (italic pour les mots accentués) + `Inter` pour le body. On garde `Cormorant` en option mais on bascule sur Instrument Serif pour le caractère éditorial premium.
- Radius global remonté à 1.75rem, ombres en `0 30px 80px -40px hsl(258 50% 40% / 0.18)`.
- Halos colorés flous (R/G/B très désaturés) déposés sur les sections clés.
- Le thème admin/client (sombre violet) reste isolé : on ne touche qu'au scope `.theme-prisme` appliqué dans `Layout.tsx`.

### Composants 3D & motion (réutilisation de `src/components/wow/`)

- Nouveau `PrismObject` (Canvas R3F existant ou SVG layered) : ruban iridescent + prismes R/G/B animés (rotation lente, parallax scroll). Version SVG fallback si perf basse.
- Réutilisation : `AuroraBackground` (re-tinté violet/pêche), `Sparkles`, `TextShimmer`, `MagneticButton`, `TiltCard`, `RevealText`, `ScrollVelocityText`.
- Nouveau `GradientText` : applique le dégradé signature en clip-text avec animation lente.
- Nouveau `GlassPill` : pastilles "PACK LAUNCH", "Recommandé", etc. (verre coloré pastel + bordure 1px).
- Curseur custom rebaptisé en pointe iridescente (option : on garde celui existant juste re-coloré).

### Refonte section par section (Home + pages vitrine)

```text
Header → Hero → ProofStrip → Services → Offres → Méthode →
Principes → Réalisations → FAQ → CTA final → Footer
```

1. **Header** : passe en glass clair (blanc 70%, blur 24px), nav serif minuscule, CTA "Réserver" en pilule dégradée magnétique, indicateur actif = trait dégradé sous le lien.
2. **Hero** : pleine largeur. Colonne gauche → titre serif géant avec mots clés en italique gradient + sous-titre sobre + double CTA (primary dégradé, secondary ghost). Colonne droite → `PrismObject` flottant avec parallax scroll, rubans iridescents et reflets. Lignes très fines (1px) gradient en arrière-plan. Scroll indicator filaire.
3. **ProofStrip** : marquee existant, re-coloré (texte encre, séparateurs petits prismes RGB).
4. **Services** : grille bento asymétrique 4 blocs. Chaque carte = surface ivoire, micro-prisme couleur en coin, icône line-art, titre serif, hover = élévation + bordure dégradée animée.
5. **Offres** (clone de la maquette) : trois cartes verre (light), badge "Recommandé" pilule dégradée flottante au-dessus de la carte centrale, prix "Sur devis" en serif italique violet, séparateurs fins, liste avec puces dégradées, CTA central en gradient solide, CTA latéraux en outline. Halos pêche/violet de chaque côté.
6. **Méthode** : timeline horizontale avec ligne dégradée animée (drawn on scroll) + chiffres serif géants pastel.
7. **Principes** : grille 2×3 sur fond légèrement violet poudré, citations italiques + accent gradient sur les mots clés.
8. **Réalisations** : grille bento images, hover tilt + révélation d'un overlay verre transparent, KPI compteur animé.
9. **FAQ** : accordéons clairs, bord 1px violet sur l'item ouvert, animation hauteur + fade + ligne dégradée sur le côté.
10. **CTA final** : bande pleine largeur fond ivoire + halo prisme central + titre serif dégradé + bouton magnétique XL.
11. **Footer** : minimal, colonnes serif, ligne dégradée séparatrice, mention RGPD discrète.

### Pages internes (vitrine seulement)

- **/studio** : intro éditoriale, photo équipe en clip serif (texte recouvre l'image), valeurs en bento, citation pleine largeur.
- **/services/[id]** : hero dédié + bento de capacités + méthode condensée + appel à devis.
- **/portfolio** + **/portfolio/[projet]** : grille bento, page projet en scroll cinématique (image full-bleed, parallax, KPI, citation client).
- **/contact** : split-screen, formulaire clair avec inputs verre, halo prisme à droite, mini intégration Calendly.
- Pages légales : mise à jour typographique uniquement (serif H1, Inter body).

### Détails techniques

- Création de `src/themes/prisme.css` (ou ajout de section dans `index.css`) avec scope `.theme-prisme` ; suppression progressive de `.theme-solaire`.
- `Layout.tsx` applique `theme-prisme` au lieu de `theme-solaire` sur les routes vitrine.
- `tailwind.config.ts` : ajouter `font-serif: ['Instrument Serif', 'serif']`, `font-display`, tokens gradient.
- Animations : Framer Motion + `prefers-reduced-motion` (déjà en place).
- Perf : Canvas Prism désactivé < 1024px (fallback SVG/PNG statique exporté), images en `loading="lazy"`.
- Accessibilité : contraste vérifié (texte encre sur ivoire ≥ 12:1), focus visible dégradé.
- Aucun changement back-office, aucun changement Supabase, aucun changement de copy.

### Itérations proposées

1. Tokens + typographies + `PrismObject` + Header + Hero.
2. ProofStrip + Services + Offres + Méthode.
3. Principes + Réalisations + FAQ + CTA + Footer.
4. Pages internes (studio, services, portfolio, contact) + QA responsive + reduced-motion.

À la fin de chaque itération, screenshots de validation avant de poursuivre.