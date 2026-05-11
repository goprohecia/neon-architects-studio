
# Refonte DA — Thème clair & solaire (site vitrine)

## Cadre

- **Stack conservée** : Vite + React + React Router + Tailwind + Framer Motion (pas de migration Next.js).
- **Périmètre visuel** : pages publiques uniquement → `/`, `/studio`, `/portfolio`, `/portfolio/*`, `/contact`, `/services/*`, pages légales, header, footer.
- **Hors périmètre** : tout `/admin/*` et `/client/*` (dashboards, login, signup) gardent leur identité dark actuelle. Aucun changement business / data / auth / edge functions.
- **Contenus** : on garde les textes, offres, projets, FAQ, métriques actuels du site. Seule l'enveloppe visuelle change.

## Nouvelle direction artistique

**Palette** (injectée en variables CSS HSL dans `index.css`, mappée sur les tokens Tailwind existants `background`, `foreground`, `primary`, `muted`, `border`, `card`…) :

```text
bg ivoire        #FAFAF7   sable chaud      #F5F0E8
anthracite      #1C1917    ambre solaire    #F59E0B
ambre hover     #D97706    ambre clair      #FEF3C7
orange chaud    #EA580C    border beige     #E7E5E4
texte sec.      #78716C    texte muted      #A8A29E
```

**Typographie** : ajout des Google Fonts **Syne** (titres) et **Inter** (corps) ; remplacement de Montserrat/Cormorant. `font-syne` et `font-inter` ajoutés dans `tailwind.config.ts`. Échelle H1 72/42, H2 48/32, H3 28, body 16-18, label 11px tracking 0.15em ambre.

**Effets** : radius cartes 20px, ombres douces (`0 4px 24px rgba(0,0,0,.06)`) + ombre ambre au hover, transitions 0.3s. **Suppression** des effets dark spatiaux (étoiles, nébuleuses, glow violet, noise lourd, glass-noise) sur les pages vitrine.

## Stratégie d'implémentation

Plutôt qu'un fork parallèle, on **remplace la DA en place** sur les composants vitrine existants. Avantage : pas de duplication, le routing et la logique restent intacts.

### 1. Fondations design (1 passe)

- `src/index.css` : nouveau bloc `:root` avec la palette claire mappée sur les tokens shadcn (`--background` = ivoire, `--foreground` = anthracite, `--primary` = ambre, `--border` = beige, etc.). Conserver une classe `.dark-admin` qui réapplique l'ancienne palette dark, et l'attacher au layout `/admin` et `/client` pour ne pas casser ces espaces.
- Import des polices Syne + Inter, suppression des imports Montserrat/Cormorant.
- `tailwind.config.ts` : `fontFamily.syne`, `fontFamily.inter`, `fontFamily.sans` = Inter ; ajout des couleurs `accent-amber`, `accent-orange`, `sand`, `ivory` (en plus des tokens sémantiques).
- Désactivation/neutralisation des overlays globaux (`#root::before` noise, `SpaceBackground`, `FloatingParticles`, `GlassAtmosphere`) pour le layout public, conservés sous `.dark-admin`.

### 2. Composants UI partagés

- Création de `src/components/ui-solaire/` :
  - `SectionLabel.tsx` (label uppercase ambre + barre 2px).
  - Variantes Button « primary ambre / secondary anthracite / ghost / white-outline » (étendre `buttonVariants` existant via cva, sans casser shadcn).
  - `Badge` ambre (`bg-amber-100 text-amber-900 border-amber-400/30`).
  - `SunCard` (carte blanche radius 20, hover translateY ambre, prop `highlighted`).
- `src/lib/animations.ts` : variants Framer (`fadeUp`, `fadeIn`, `staggerContainer`, `scaleUp`) avec `viewport={{ once: true, margin: '-80px' }}`.

### 3. Refonte section par section

Chaque section vitrine est réécrite visuellement, contenu conservé tel quel :

| Composant actuel | Action |
|---|---|
| `Header.tsx` | Fond ivoire blur au scroll, logo + « Studio » muted, badge vert pulsant « Disponible », nav ambre, CTA Calendly + Connexion |
| `HeroPremium.tsx` | Fond ivoire + 2 gradients radiaux ambre/orange, H1 « Expériences digitales » / « sur-mesure » ambre, mockup carte flottante côté droit (animation float), 4 badges |
| `ProofStrip.tsx` | Bandeau sable, 4 métriques actuelles avec compteur scroll |
| `OffresSection.tsx` | 3 packs sur fond sable, carte centrale highlighted ambre, contenus packs actuels conservés |
| `ServicesSection.tsx` | Grid 2×2 cartes blanches, icônes Lucide dans carré ambre clair |
| `RealisationsSection.tsx` | Cartes projets blanches, vignettes en blocs colorés stylés, badges, hover ambre |
| `MethodeSection.tsx` | 4 étapes sur fond sable, gros chiffres ambre opacity 0.2, ligne pointillée connectrice |
| `PrincipesSection.tsx` | Seule section dark (anthracite #1C1917) avec 5 cartes, icônes ambre |
| `FAQ.tsx` | Accordions fond blanc, chevrons ambre animés |
| `CTAFinal.tsx` | Bloc anthracite radius 28 sur fond ivoire, bordure top ambre, 2 CTA |
| `Footer.tsx` | Fond anthracite, 4 colonnes, liens taupe → blanc au hover |

### 4. Pages secondaires

- `Studio.tsx`, `Portfolio.tsx`, `Contact.tsx`, `services/*`, `portfolio/*`, `legal/*` : nouvelle DA appliquée via le `Layout` partagé + remplacement des classes spécifiques (gradients violets → ambre, fonds dark → ivoire/sable, titres en font-syne).

### 5. Isolation admin/client

- `AdminLayout.tsx` et `ClientLayout.tsx` reçoivent une classe wrapper `dark-admin` qui scope les anciennes variables CSS dark + réactive `SpaceBackground` / glass effects, pour zéro régression sur ces espaces.

### 6. Accessibilité & responsive

- Focus ring ambre (`focus-visible:ring-2 focus-visible:ring-amber-500`).
- Contrastes vérifiés AA (anthracite sur ivoire, blanc sur anthracite, ambre 600 sur ivoire).
- Breakpoints conservés (Tailwind par défaut). Toutes les grilles passent en 1 colonne mobile.

## Détails techniques

- Aucune nouvelle dépendance npm (Syne/Inter via Google Fonts CSS, Framer Motion + Lucide déjà présents).
- Les composants d'animation existants (`ScrollReveal`, `MagneticButton`, etc.) sont **conservés** mais leurs glows violets sont remappés sur `--primary` (= ambre maintenant).
- Le toggle light/dark next-themes existant est neutralisé sur les pages vitrine (forcé en clair) ; il peut rester actif dans l'admin si souhaité.
- Pas de migration de routes, pas de touche au backend/Supabase.

## Livraison suggérée en 3 itérations

1. **Fondations + Header/Hero/Footer** (validation de la DA générale).
2. **Sections home restantes** (Trust, Services, Offers, Projects, Process, Standards, FAQ, CTA).
3. **Pages secondaires** (Studio, Portfolio détail, Services 4 pages, Contact, légales) + QA responsive.

Confirme et je démarre par l'itération 1.
