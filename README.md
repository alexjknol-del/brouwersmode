# BrouwersMode.nl

Statische website voor BrouwersMode.nl, de Nederlandse modegids. Gehost op Cloudflare Pages.

## Structuur

De gepubliceerde site bestaat uit platte HTML in de repositoryroot plus `assets/`. Er is geen build-stap nodig op Cloudflare Pages: de root wordt direct geserveerd.

## Pagina's genereren

De HTML wordt gegenereerd uit `src/data.js` (content) en `src/build.js` (templates):

```
node src/build.js
```

Dit schrijft alle `.html`-bestanden, `sitemap.xml` en `robots.txt` naar de root.

## Cloudflare Pages

- Build command: leeg laten
- Build output directory: `/`
