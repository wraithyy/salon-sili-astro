# Salon SILI

Web pro pedikursky salon **Salon SILI** v Liberci. Postaveno na Astro + Tailwind CSS v4.

## Stack

- **[Astro](https://astro.build)** v5 - staticke generovani
- **[Tailwind CSS](https://tailwindcss.com)** v4 - styling
- **GitHub Pages** - hosting (automaticky deploy pres GitHub Actions)

## Struktura projektu

```
salon-sili-astro/
  src/
    components/       # Astro komponenty (Nav, Hero, Services, Pricing, Location, Contact, Footer)
    data/             # Datove soubory (sluzby, cenik, kontakty) - EDITUJ ZDE
      services.ts     # Seznam sluzeb
      pricing.ts      # Cenik
      contact.ts      # Kontaktni udaje, adresa, oteviraci doba
    layouts/          # Layout s SEO, schema, fonty
    pages/            # Stranky (index.astro)
    styles/           # Globalni styly, barvy, animace
  public/             # Staticke soubory (favicon)
  .github/workflows/  # GitHub Actions deploy
```

## Jak spustit

```bash
npm install
npm run dev        # Dev server na localhost:4321
npm run build      # Produkci build do ./dist/
npm run preview    # Nahled buildu
```

## Jak upravit cenik / sluzby

Vsechna data jsou v `src/data/`:

- **Cenik**: `src/data/pricing.ts` - uprav ceny, pridej polozky
- **Sluzby**: `src/data/services.ts` - uprav popisy sluzeb
- **Kontakt**: `src/data/contact.ts` - telefon, email, adresa, oteviraci doba

Po uprave se zmeny automaticky projevi na webu (pri dev serveru okamzite, na produkci po rebuildu).

## Branding

- **Fonty**: Playfair Display (nadpisy) + Inter (telo textu) - Google Fonts
- **Barvy**: zlata (#c9a96e), kremova (#faf7f2), uhel (#2d2d2d), ruzova (#d4a0a0)
- Inspirace fontem Coneria z puvodniho `salon-sili-next` projektu - nahrazena Playfair Display pro lepsi dostupnost

## Deploy na GitHub Pages

Deploy bezi automaticky pres GitHub Actions pri push do `main` vetve.

Prvni nastaveni:
1. V nastaveni repa: Settings > Pages > Source: **GitHub Actions**
2. Push do `main` spusti build a deploy

## Prikazy

| Prikaz              | Akce                                 |
| :------------------ | :----------------------------------- |
| `npm install`       | Instalace zavislosti                 |
| `npm run dev`       | Dev server na `localhost:4321`       |
| `npm run build`     | Produkci build do `./dist/`          |
| `npm run preview`   | Nahled buildu pred deployem          |
