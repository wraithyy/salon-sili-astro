# Design Notes

## 2026-03-05 — managed-pass-1: Premium Redesign

### Hero
- Asymmetric left-aligned layout (content left, brush right)
- Brush visible at 42% opacity with soft-light blend and slight -3deg rotation
- Replaced 3 ambient blobs with 2 (gold + rose), cleaner composition
- Gold vertical accent line on desktop for editorial feel
- Scroll indicator uses subtle pulse instead of bounce
- reduced-motion: all animations disabled

### Services
- Replaced uniform 4-column card grid with 2-column staggered layout
- Odd/even vertical offset creates visual rhythm
- Horizontal card layout (icon left, text right) instead of centered icons
- Gradient backgrounds (cream-to-white) instead of flat cream
- Gold accent line at card top via CSS gradient
- reduced-motion: transforms and transitions disabled

### Pricing
- Editorial staggered 3-column with middle column offset (lg:mt-10)
- Category headers with icon + title inline (not centered)
- Price items use subtle border separators instead of dotted leaders
- Hover highlight on individual price rows
- Subtle side accent line on desktop
- reduced-motion: stagger offset removed, transitions disabled

### DirectionsMap
- Cleaner infographic style with reduced visual noise
- SVG markers (arrowheads) for route direction clarity
- Route start points use dot-in-circle markers (blue/red)
- Minimal text — street labels uppercase, smaller, muted
- Salon marker is solid gold pill (not outlined)
- Legend simplified with circle + line pattern
- Passage label rotated vertically for space efficiency

### Other
- Fixed LocalBusiness schema address: "Benešovo náměstí 2" -> "náměstí Dr. E. Beneše 3/4"
- Hero tagline updated to match correct address format
