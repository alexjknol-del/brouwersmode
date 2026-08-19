// Static site generator voor BrouwersMode.nl
'use strict';
const fs = require('fs');
const path = require('path');
const { SITE, NAV, AUTHOR, SEGMENTS, SHOPS, ARTICLES } = require('./data.js');

const OUT = path.join(__dirname, '..');
const YEAR = 2026;

function write(rel, html) {
  const full = path.join(OUT, rel);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, html.trim() + '\n', 'utf8');
  console.log('wrote', rel);
}

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Woordmerk (getypte merkbehandeling, geen kopie van logobestanden)
function wordmark(shop, size, maxWidth) {
  const s = shop.wm || {};
  const color = s.color || '#1c1b19';
  const style = s.style || 'sans';
  let fs2 = size || 30;
  let cls = 'wm';
  let text = shop.name;
  let perChar = 0.60; // geschatte tekenbreedte in em
  if (style === 'serif') { cls += ' wm-serif'; perChar = 0.56; }
  else if (style === 'caps') { cls += ' wm-caps'; text = shop.name.toUpperCase(); perChar = 0.82; }
  else { cls += ' wm-sans'; perChar = 0.62; }
  // Schaal omlaag zodat het woordmerk binnen maxWidth past
  if (maxWidth) {
    const estWidth = fs2 * (0.55 + text.length * perChar); // dot + gap + tekst
    if (estWidth > maxWidth) {
      fs2 = Math.max(11, Math.floor(maxWidth / (0.55 + text.length * perChar)));
    }
  }
  const dot = '<i class="wm-dot" style="background:' + color + '"></i>';
  return '<span class="' + cls + '" style="color:' + color + ';font-size:' + fs2 + 'px">' + dot + '<span>' + esc(text) + '</span></span>';
}

function brandMark() {
  return '<svg class="brand-mark" viewBox="0 0 40 40" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">' +
    '<rect width="40" height="40" rx="9" fill="#9c5f3b"/>' +
    '<path d="M12 28V12h7.2c3.1 0 5 1.5 5 4.1 0 1.8-1 3-2.6 3.5 1.9.4 3.1 1.8 3.1 3.8 0 2.8-2 4.6-5.4 4.6H12Zm3.2-9.5h3.4c1.4 0 2.3-.7 2.3-1.9s-.9-1.9-2.3-1.9h-3.4v3.8Zm0 6.8h3.6c1.5 0 2.4-.7 2.4-2s-.9-2-2.5-2h-3.5v4Z" fill="#fff"/>' +
    '</svg>';
}

function header(active) {
  const links = NAV.map(function (n) {
    const cur = n.href === active ? ' aria-current="page"' : '';
    return '<li><a href="' + n.href + '"' + cur + '>' + n.label + '</a></li>';
  }).join('');
  return (
'<header class="site-header"><div class="container"><nav class="nav" aria-label="Hoofdmenu">' +
'<a class="brand" href="/">' + brandMark() + '<span>Brouwers<span style="color:#9c5f3b">Mode</span><small>De Nederlandse modegids</small></span></a>' +
'<button class="nav-toggle" aria-label="Menu" aria-expanded="false"><span></span></button>' +
'<ul class="nav-links" id="navlinks">' + links + '</ul>' +
'</nav></div></header>'
  );
}

function footer() {
  const shopLinks = SHOPS.slice(0, 6).map(function (s) {
    return '<li><a href="/shops/' + s.slug + '.html">' + esc(s.name) + '</a></li>';
  }).join('');
  const readLinks =
    '<li><a href="/nieuws.html">Nieuws</a></li>' +
    '<li><a href="/stijlgids.html">Stijlgids</a></li>' +
    '<li><a href="/cadeaugids.html">Cadeaugids</a></li>' +
    '<li><a href="/shops.html">Alle shops</a></li>';
  const aboutLinks =
    '<li><a href="/over.html">Over BrouwersMode</a></li>' +
    '<li><a href="/redactie.html">Redactie</a></li>' +
    '<li><a href="/contact.html">Contact</a></li>';
  return (
'<footer class="site-footer"><div class="container">' +
'<div class="footer-grid">' +
'<div class="footer-col"><div class="footer-brand">' + brandMark() + '<span>BrouwersMode</span></div>' +
'<p style="color:#b7afa0;max-width:34ch">De onafhankelijke modegids die de beste Nederlandse modewebshops in kaart brengt, met profielen, nieuws en stijladvies.</p></div>' +
'<div class="footer-col"><h4>Shops</h4><ul>' + shopLinks + '</ul></div>' +
'<div class="footer-col"><h4>Lezen</h4><ul>' + readLinks + '</ul></div>' +
'<div class="footer-col"><h4>Over</h4><ul>' + aboutLinks + '</ul></div>' +
'</div>' +
'<div class="footer-bottom"><span>&copy; ' + YEAR + ' BrouwersMode.nl</span>' +
'<span class="footer-legal"><a href="/privacy.html">Privacybeleid</a><a href="/cookies.html">Cookiebeleid</a><a href="/disclaimer.html">Disclaimer</a></span>' +
'</div>' +
'</div></footer>'
  );
}

function layout(opts) {
  const title = opts.title;
  const desc = opts.desc || SITE.description;
  const canonical = SITE.base + (opts.path || '/');
  const active = opts.active || '';
  const ogtype = opts.ogtype || 'website';
  return (
'<!DOCTYPE html>' +
'<html lang="nl">' +
'<head>' +
'<meta charset="utf-8">' +
'<meta name="viewport" content="width=device-width, initial-scale=1">' +
'<title>' + esc(title) + '</title>' +
'<meta name="description" content="' + esc(desc) + '">' +
'<link rel="canonical" href="' + canonical + '">' +
'<meta name="robots" content="index, follow">' +
'<meta property="og:site_name" content="BrouwersMode">' +
'<meta property="og:type" content="' + ogtype + '">' +
'<meta property="og:title" content="' + esc(title) + '">' +
'<meta property="og:description" content="' + esc(desc) + '">' +
'<meta property="og:url" content="' + canonical + '">' +
'<meta property="og:image" content="' + SITE.base + '/assets/img/og-default.png">' +
'<meta name="twitter:card" content="summary_large_image">' +
'<meta name="theme-color" content="#f6f2ec">' +
'<link rel="icon" href="/assets/img/favicon.svg" type="image/svg+xml">' +
'<link rel="apple-touch-icon" href="/assets/img/favicon.svg">' +
'<link rel="preconnect" href="https://fonts.googleapis.com">' +
'<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' +
'<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">' +
'<link rel="stylesheet" href="/assets/css/style.css">' +
(opts.jsonld ? '<script type="application/ld+json">' + JSON.stringify(opts.jsonld) + '</script>' : '') +
'</head>' +
'<body>' +
header(active) +
'<main>' + opts.body + '</main>' +
footer() +
'<script src="/assets/js/main.js" defer></script>' +
'</body></html>'
  );
}

function shopCard(s) {
  return (
'<a class="card shop-card" href="/shops/' + s.slug + '.html">' +
'<div class="shop-logo">' + wordmark(s, 26, 290) + '</div>' +
'<div class="card-body">' +
'<span class="card-tag">' + esc(SEGMENTS[s.segment]) + '</span>' +
'<h3>' + esc(s.name) + '</h3>' +
'<p>' + esc(s.tagline) + '</p>' +
'<span class="card-foot">Bekijk profiel &rarr;</span>' +
'</div></a>'
  );
}

function articleCard(a) {
  return (
'<a class="card" href="/nieuws/' + a.slug + '.html">' +
'<div class="card-body">' +
'<span class="card-tag">' + esc(a.kicker) + '</span>' +
'<h3>' + esc(a.title) + '</h3>' +
'<p>' + esc(a.excerpt) + '</p>' +
'<span class="card-foot">Lees artikel &rarr;</span>' +
'</div></a>'
  );
}

function renderBlocks(blocks) {
  return blocks.map(function (b) {
    const tag = b[0];
    if (tag === 'ul') {
      return '<ul>' + b[1].map(function (li) { return '<li>' + esc(li) + '</li>'; }).join('') + '</ul>';
    }
    if (tag === 'blockquote') {
      return '<blockquote>' + esc(b[1]) + '</blockquote>';
    }
    if (tag === 'plink') {
      return '<p>' + b[1] + '</p>';
    }
    return '<' + tag + '>' + esc(b[1]) + '</' + tag + '>';
  }).join('');
}

/* ---------- Pagina's ---------- */

// Home
function buildHome() {
  const featured = SHOPS.slice(0, 6).map(shopCard).join('');
  const logoWall = SHOPS.map(function (s) {
    return '<a class="tile" href="/shops/' + s.slug + '.html" aria-label="' + esc(s.name) + '">' + wordmark(s, 18, 150) + '</a>';
  }).join('');
  const news = ARTICLES.slice(0, 3).map(articleCard).join('');
  const body =
'<section class="hero"><div class="container"><div class="hero-grid">' +
'<div><p class="eyebrow">De Nederlandse modegids</p>' +
'<h1>Mode die klopt, van webshops die het waarmaken</h1>' +
'<p class="lead">BrouwersMode brengt de beste Nederlandse modewebshops in kaart. Onafhankelijke profielen, actueel nieuws en stijladvies, zodat online shoppen begint bij de juiste keuze.</p>' +
'<div class="hero-actions"><a class="btn btn-primary" href="/shops.html">Ontdek de shops</a><a class="btn btn-ghost" href="/nieuws.html">Lees het nieuws</a></div>' +
'</div>' +
'<div class="hero-visual"><div class="hero-card">' +
'<p class="eyebrow" style="margin-bottom:10px">Uitgelicht deze week</p>' +
'<h3 style="margin-bottom:6px">Twaalf shops, één gids</h3>' +
'<p class="muted" style="font-size:.96rem">Van handgemaakte armbanden en waterproof sieraden tot bekroonde herenmode en luxe loungewear.</p>' +
'<div class="hero-stats"><div class="stat"><b>12</b><span>Shopprofielen</span></div><div class="stat"><b>6</b><span>Modesegmenten</span></div><div class="stat"><b>100%</b><span>Onafhankelijk</span></div></div>' +
'</div></div>' +
'</div></div></section>' +

'<section class="section-tight"><div class="container">' +
'<p class="center muted" style="letter-spacing:.14em;text-transform:uppercase;font-size:.78rem;font-weight:600;margin-bottom:22px">Shops in de gids</p>' +
'<div class="logo-wall">' + logoWall + '</div>' +
'</div></section>' +

'<section class="section"><div class="container">' +
'<div style="display:flex;justify-content:space-between;align-items:flex-end;gap:16px;flex-wrap:wrap;margin-bottom:26px">' +
'<div><p class="eyebrow">Uitgelichte shops</p><h2 class="mb-0">Waar de redactie warm van wordt</h2></div>' +
'<a class="btn btn-ghost btn-sm" href="/shops.html">Alle shops</a></div>' +
'<div class="grid grid-3">' + featured + '</div>' +
'</div></section>' +

'<section class="section-tight"><div class="container band"><div class="container">' +
'<div class="hero-grid" style="align-items:center">' +
'<div><p class="eyebrow" style="color:#e6b48f">Een gids, geen webshop</p><h2>BrouwersMode verkoopt niets. Het wijst de weg.</h2>' +
'<p>De redactie beoordeelt shops op wat ze bijzonder maakt: vakmanschap, service, materiaal en signatuur. Geen ruis, wel richting.</p>' +
'<a class="btn btn-ghost" href="/over.html">Zo werkt de gids</a></div>' +
'<div class="panel" style="background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.14)"><ul class="usp-list" style="color:#f0e9df">' +
'<li>Onafhankelijke profielen per shop</li><li>Actueel nieuws over trends en materiaal</li><li>Stijladvies dat keuzes makkelijker maakt</li><li>Alleen shops die iets toevoegen</li></ul></div>' +
'</div></div></div></section>' +

'<section class="section"><div class="container">' +
'<div style="display:flex;justify-content:space-between;align-items:flex-end;gap:16px;flex-wrap:wrap;margin-bottom:26px">' +
'<div><p class="eyebrow">Uit de nieuwsredactie</p><h2 class="mb-0">Actuele thema-artikelen</h2></div>' +
'<a class="btn btn-ghost btn-sm" href="/nieuws.html">Alle artikelen</a></div>' +
'<div class="grid grid-3">' + news + '</div>' +
'</div></section>';

  write('index.html', layout({
    title: 'BrouwersMode.nl | De Nederlandse modegids',
    desc: SITE.description,
    path: '/',
    active: '/',
    body: body,
    jsonld: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'BrouwersMode',
      url: SITE.base,
      description: SITE.description
    }
  }));
}

// Over
function buildOver() {
  const body =
'<section class="page-hero"><div class="container narrow">' +
'<p class="eyebrow">Over BrouwersMode</p>' +
'<h1>Een modegids voor bewuste online shoppers</h1>' +
'<p class="lead">BrouwersMode is een onafhankelijke gids die het Nederlandse modelandschap online overzichtelijk maakt. Geen webshop, maar een kompas.</p>' +
'</div></section>' +
'<section class="section"><div class="container narrow prose">' +
'<p>Het aanbod aan modewebshops in Nederland is enorm, en dat maakt kiezen lastig. BrouwersMode brengt daar structuur in. De redactie selecteert shops die op hun eigen manier iets toevoegen, beschrijft wat ze verkopen en wat ze onderscheidt, en plaatst dat naast actueel nieuws en stijladvies.</p>' +
'<h2>Wat de gids doet</h2>' +
'<p>Elke shop krijgt een eigen profiel met basisinformatie, een overzicht van het assortiment en een eerlijke blik op wat de shop bijzonder maakt. Van handgemaakte herenarmbanden tot waterproof sieraden, van bekroonde herenmode tot luxe loungewear: de gids kijkt naar vakmanschap, service, materiaal en signatuur.</p>' +
'<h2>Onafhankelijk van opzet</h2>' +
'<p>BrouwersMode verkoopt zelf niets en heeft geen belang bij welke keuze een lezer maakt. De profielen zijn beschrijvend en informatief, gebaseerd op openbaar beschikbare informatie van de shops zelf. Het doel is richting geven, niet pushen.</p>' +
'<h2>Voor wie</h2>' +
'<p>De gids is er voor iedereen die online mode koopt en daarbij liever begint met inzicht dan met een oneindige zoekopdracht. Wie weet welke shop bij welke behoefte past, shopt gerichter en met meer plezier.</p>' +
'<blockquote>Goede mode begint bij de juiste shop. BrouwersMode helpt die te vinden.</blockquote>' +
'<p>De redactie staat onder leiding van ' + esc(AUTHOR.name) + '. Meer over de mensen achter de gids staat op de <a href="/redactie.html">redactiepagina</a>.</p>' +
'</div></section>';
  write('over.html', layout({
    title: 'Over BrouwersMode | De Nederlandse modegids',
    desc: 'BrouwersMode is een onafhankelijke modegids die de beste Nederlandse modewebshops in kaart brengt, met profielen, nieuws en stijladvies.',
    path: '/over.html', active: '/over.html', body: body
  }));
}

// Shops overzicht
function buildShops() {
  const segOrder = Object.keys(SEGMENTS);
  let groups = '';
  segOrder.forEach(function (seg) {
    const list = SHOPS.filter(function (s) { return s.segment === seg; });
    if (!list.length) return;
    groups +=
'<div style="margin-bottom:14px"><h2 style="margin-bottom:18px">' + esc(SEGMENTS[seg]) + '</h2>' +
'<div class="grid grid-3">' + list.map(shopCard).join('') + '</div></div>';
  });
  const body =
'<section class="page-hero"><div class="container">' +
'<p class="eyebrow">Shopprofielen</p>' +
'<h1>Twaalf toonaangevende modewebshops</h1>' +
'<p class="lead">Een gecureerde selectie Nederlandse modewebshops, geordend per segment. Elk profiel beschrijft het assortiment, de service en wat de shop bijzonder maakt.</p>' +
'</div></section>' +
'<section class="section"><div class="container stack" style="gap:44px">' + groups + '</div></section>';
  write('shops.html', layout({
    title: 'Shops | Toonaangevende Nederlandse modewebshops | BrouwersMode',
    desc: 'Ontdek twaalf toonaangevende Nederlandse modewebshops, geordend per segment, met per shop een profiel over assortiment, service en signatuur.',
    path: '/shops.html', active: '/shops.html', body: body
  }));
}

// Shop profiel
function buildShopProfiles() {
  SHOPS.forEach(function (s) {
    const facts = s.facts.map(function (f) {
      return '<div class="fact"><span>' + esc(f.k) + '</span><b>' + esc(f.v) + '</b></div>';
    }).join('');
    const cats = s.categories.map(function (c) { return '<li class="chip" style="list-style:none">' + esc(c) + '</li>'; }).join('');
    const usps = s.usps.map(function (u) { return '<li>' + esc(u) + '</li>'; }).join('');
    const related = SHOPS.filter(function (x) { return x.segment === s.segment && x.slug !== s.slug; }).slice(0, 3);
    const relCards = related.length ? related.map(shopCard).join('') : SHOPS.filter(function (x){return x.slug!==s.slug;}).slice(0,3).map(shopCard).join('');

    let spotlight = '';
    if (s.spotlight) {
      spotlight =
'<div class="panel" style="margin-top:26px;border-left:3px solid #9c5f3b">' +
'<p class="eyebrow" style="margin-bottom:8px">Uitgelicht</p>' +
'<h3>' + esc(s.spotlight.title) + '</h3>' +
'<p class="muted">' + esc(s.spotlight.body) + '</p>' +
'<a class="btn btn-ghost btn-sm" href="' + s.spotlight.url + '" target="_blank" rel="noopener nofollow">Bekijk Alan Red bij ' + esc(s.name) + ' &rarr;</a>' +
'</div>';
    }

    const body =
'<section class="section" style="padding-top:34px"><div class="container">' +
'<p class="crumbs"><a href="/">Home</a> / <a href="/shops.html">Shops</a> / ' + esc(s.name) + '</p>' +
'<div class="profile-head">' +
'<div class="profile-logo">' + wordmark(s, 32, 172) + '</div>' +
'<div><span class="card-tag" style="color:#9c5f3b;font-weight:600;letter-spacing:.12em;text-transform:uppercase;font-size:.74rem">' + esc(SEGMENTS[s.segment]) + '</span>' +
'<h1 style="margin:6px 0 8px">' + esc(s.name) + '</h1>' +
'<p class="lead" style="margin-bottom:16px">' + esc(s.tagline) + '</p>' +
'<a class="btn btn-primary" href="' + s.url + '" target="_blank" rel="noopener nofollow">Naar de webshop &rarr;</a></div>' +
'</div>' +

'<div class="grid" style="grid-template-columns:1.6fr .9fr;gap:34px;margin-top:34px;align-items:start">' +
'<div class="prose">' +
'<h2>Over ' + esc(s.name) + '</h2><p>' + esc(s.intro) + '</p>' +
'<h2>Wat de shop bijzonder maakt</h2><p>' + esc(s.special) + '</p>' +
'<h3>Assortiment</h3><ul class="tag-row" style="padding:0;margin:0 0 1.2em">' + cats + '</ul>' +
spotlight +
'</div>' +
'<aside><div class="panel"><h3 style="margin-top:0">In het kort</h3>' +
'<div class="fact-grid" style="grid-template-columns:1fr 1fr;margin:0 0 20px">' + facts + '</div>' +
'<h3 style="font-size:1.05rem">Sterke punten</h3><ul class="usp-list">' + usps + '</ul>' +
'<a class="btn btn-ghost btn-sm" style="margin-top:18px" href="' + s.url + '" target="_blank" rel="noopener nofollow">Bezoek ' + esc(s.name) + '</a>' +
'</div></aside>' +
'</div>' +
'</div></section>' +

'<section class="section-tight"><div class="container"><h2 style="margin-bottom:20px">Meer in ' + esc(SEGMENTS[s.segment].toLowerCase()) + '</h2><div class="grid grid-3">' + relCards + '</div></div></section>';

    write('shops/' + s.slug + '.html', layout({
      title: s.name + ' | Shopprofiel | BrouwersMode',
      desc: s.tagline + ' Lees het profiel van ' + s.name + ' op BrouwersMode: assortiment, service en wat de shop bijzonder maakt.',
      path: '/shops/' + s.slug + '.html', active: '/shops.html', body: body,
      jsonld: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: s.name,
        url: s.url,
        description: s.tagline
      }
    }));
  });
}

// Nieuws overzicht
function buildNews() {
  const cards = ARTICLES.map(articleCard).join('');
  const body =
'<section class="page-hero"><div class="container">' +
'<p class="eyebrow">Nieuws</p>' +
'<h1>Actuele thema-artikelen over mode</h1>' +
'<p class="lead">Trends, materiaalkennis en stijladvies uit de nieuwsredactie van BrouwersMode. Verdiepend, actueel en zonder ruis.</p>' +
'</div></section>' +
'<section class="section"><div class="container"><div class="grid grid-3">' + cards + '</div></div></section>';
  write('nieuws.html', layout({
    title: 'Nieuws | Mode-artikelen en trends | BrouwersMode',
    desc: 'Actuele thema-artikelen over mode: trends, materiaalkennis en stijladvies uit de redactie van BrouwersMode.',
    path: '/nieuws.html', active: '/nieuws.html', body: body
  }));
}

// Nieuws artikel
function buildArticles() {
  ARTICLES.forEach(function (a) {
    const rel = (a.related || []).map(function (slug) {
      return SHOPS.find(function (s) { return s.slug === slug; });
    }).filter(Boolean);
    const relBlock = rel.length ?
'<section class="section-tight"><div class="container"><h2 style="margin-bottom:20px">Shops die hierbij passen</h2><div class="grid grid-3">' + rel.map(shopCard).join('') + '</div></div></section>' : '';
    const more = ARTICLES.filter(function (x) { return x.slug !== a.slug; }).slice(0, 3).map(articleCard).join('');

    const body =
'<section class="section" style="padding-top:34px"><div class="container narrow">' +
'<p class="crumbs"><a href="/">Home</a> / <a href="/nieuws.html">Nieuws</a> / ' + esc(a.kicker) + '</p>' +
'<article class="article">' +
'<p class="kicker">' + esc(a.kicker) + '</p>' +
'<h1>' + esc(a.title) + '</h1>' +
'<div class="article-meta"><span>Door ' + esc(AUTHOR.name) + '</span><span>&middot;</span><time datetime="' + a.date + '">' + esc(a.dateLabel) + '</time></div>' +
'<div class="prose">' + renderBlocks(a.body) + '</div>' +
'<div class="byline"><img src="' + AUTHOR.photo + '" alt="' + esc(AUTHOR.name) + '" width="52" height="52"><div><b>' + esc(AUTHOR.name) + '</b><span>' + esc(AUTHOR.role) + '</span></div></div>' +
'</article>' +
'</div></section>' +
relBlock +
'<section class="section-tight"><div class="container"><h2 style="margin-bottom:20px">Meer uit de redactie</h2><div class="grid grid-3">' + more + '</div></div></section>';

    write('nieuws/' + a.slug + '.html', layout({
      title: a.title + ' | BrouwersMode',
      desc: a.excerpt,
      path: '/nieuws/' + a.slug + '.html', active: '/nieuws.html', ogtype: 'article', body: body,
      jsonld: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: a.title,
        datePublished: a.date,
        description: a.excerpt,
        author: { '@type': 'Person', name: AUTHOR.name },
        publisher: { '@type': 'Organization', name: 'BrouwersMode' }
      }
    }));
  });
}

// Stijlgids
function buildStijlgids() {
  const body =
'<section class="page-hero"><div class="container narrow">' +
'<p class="eyebrow">Stijlgids</p>' +
'<h1>Bewuster kiezen, langer plezier</h1>' +
'<p class="lead">Praktische uitgangspunten voor wie online mode koopt. Over pasvorm, materiaal, een compacte garderobe en het kiezen van de juiste shop.</p>' +
'</div></section>' +
'<section class="section"><div class="container narrow prose">' +
'<h2>Begin bij de juiste shop</h2>' +
'<p>Een goede aankoop begint niet bij een product, maar bij een shop die past bij de behoefte. Wie handgemaakt en persoonlijk zoekt, is beter af bij een specialist dan bij een brede boetiek, en andersom. De <a href="/shops.html">shopprofielen</a> in deze gids maken dat onderscheid zichtbaar.</p>' +
'<h2>Pasvorm boven alles</h2>' +
'<p>Kleding die goed zit, oogt altijd verzorgder dan een duurder stuk dat niet past. Let bij overhemden op schouders, boord en mouwlengte, en bij broeken op de lengte en de taille. Specialisten bieden vaak maatadvies of extra maatvarianten, wat het verschil maakt voor wie buiten de standaardmaten valt.</p>' +
'<h2>Materiaal bepaalt houdbaarheid</h2>' +
'<p>Het materiaal voorspelt hoe lang een stuk mooi blijft. Duurzame katoen en stretchweefsels dragen comfortabel en gaan langer mee, terwijl sieraden van roestvrij staal en titanium waterbestendig en hypoallergeen zijn. Een iets hogere aanschafprijs voor beter materiaal verdient zich meestal terug in levensduur.</p>' +
'<h2>Bouw een compacte garderobe</h2>' +
'<p>Een overzichtelijke kast bestaat uit een handvol neutrale basisstukken die onderling combineren, aangevuld met enkele accenten die karakter geven. Een rustig kleurenpalet zorgt dat alles samengaat, waardoor minder kledingstukken tot meer looks leiden.</p>' +
'<h2>Onderhoud verlengt levensduur</h2>' +
'<ul><li>Was op lagere temperaturen en volg het wasvoorschrift</li><li>Berg sieraden apart op om krassen te voorkomen</li><li>Spoel waterbestendige sieraden na zwemmen af met zoet water</li><li>Hang overhemden en colberts op om vorm te behouden</li></ul>' +
'<p>Deze uitgangspunten maken online mode kopen minder een gok en meer een keuze. Voor concrete inspiratie per gelegenheid staat de <a href="/cadeaugids.html">cadeaugids</a> klaar, en het laatste <a href="/nieuws.html">nieuws</a> houdt de trends bij.</p>' +
'</div></section>';
  write('stijlgids.html', layout({
    title: 'Stijlgids | Bewuster mode kopen | BrouwersMode',
    desc: 'Praktische stijlgids voor online mode kopen: pasvorm, materiaal, een compacte garderobe en het kiezen van de juiste webshop.',
    path: '/stijlgids.html', active: '/stijlgids.html', body: body
  }));
}

// Cadeaugids
function buildCadeaugids() {
  function block(title, text, slugs) {
    const cards = slugs.map(function (slug) { return SHOPS.find(function (s) { return s.slug === slug; }); }).filter(Boolean).map(shopCard).join('');
    return '<div style="margin-bottom:16px"><h2>' + esc(title) + '</h2><p class="muted" style="max-width:60ch">' + esc(text) + '</p><div class="grid grid-3" style="margin-top:18px">' + cards + '</div></div>';
  }
  const body =
'<section class="page-hero"><div class="container">' +
'<p class="eyebrow">Cadeaugids</p>' +
'<h1>Mode cadeaus die kloppen</h1>' +
'<p class="lead">Een cadeau in de mode werkt het best als het persoonlijk voelt. Deze gids sorteert shops op gelegenheid en ontvanger, zodat kiezen sneller gaat.</p>' +
'</div></section>' +
'<section class="section"><div class="container stack" style="gap:44px">' +
block('Voor hem', 'Van een handgemaakte armband op maat tot een strijkvrij overhemd: cadeaus die dagelijks gedragen worden.', ['milez-bracelets', 'hemdvoorhem']) +
block('Voor haar', 'Waterproof sieraden, trendgerichte mode of een stuk met eigen signatuur, afgestemd op smaak en gelegenheid.', ['maeya-jewelry', 'loavies', 'josh-v']) +
block('Voor thuis en comfort', 'Luxe loungewear en lifestyle als cadeau voor wie houdt van comfort met een verzorgde uitstraling.', ['lounge-we-are', 'sissy-boy', 'america-today']) +
block('Voor de shopper die alles heeft', 'Brede boetieks en multimerk-shops met cadeaubonnen en een keuze die past bij elk budget.', ['omoda', 'the-little-green-bag', 'nikkie']) +
'</div></section>';
  write('cadeaugids.html', layout({
    title: 'Cadeaugids | Mode cadeau-ideeën | BrouwersMode',
    desc: 'Cadeaugids voor mode: shops gesorteerd op gelegenheid en ontvanger, van sieraden en herenmode tot loungewear en cadeaubonnen.',
    path: '/cadeaugids.html', active: '', body: body
  }));
}

// Redactie / schrijfster
function buildRedactie() {
  const body =
'<section class="section" style="padding-top:44px"><div class="container">' +
'<div class="persona">' +
'<img class="persona-photo" src="' + AUTHOR.photo + '" alt="Illustratie van ' + esc(AUTHOR.name) + '" width="260" height="260">' +
'<div><p class="eyebrow">De redactie</p>' +
'<h1 style="margin-bottom:6px">' + esc(AUTHOR.name) + '</h1>' +
'<p class="lead">' + esc(AUTHOR.role) + '</p>' +
'<p class="muted">Fenna schrijft de profielen en het nieuws op BrouwersMode, met een voorliefde voor vakmanschap en eerlijke materialen.</p></div>' +
'</div></div></section>' +
'<section class="section-tight"><div class="container narrow prose">' +
'<h2>Over Fenna</h2>' +
'<p>Fenna Brouwers is hoofdredacteur van BrouwersMode. Ze combineert een achtergrond in journalistiek met jarenlange interesse in de Nederlandse mode-industrie, van kleine ateliers tot gevestigde boetieks. Die dubbele blik, oog voor het verhaal én voor het detail, kleurt alles wat ze schrijft.</p>' +
'<h2>Waar ze op let</h2>' +
'<p>In haar werk draait het om de vraag wat een shop of merk werkelijk onderscheidt. Niet de grootste korting of de luidste campagne, maar vakmanschap, materiaalkeuze, service en signatuur. Ze gelooft dat bewuster kopen begint bij begrijpen wat je koopt en bij wie.</p>' +
'<h2>Schrijfstijl</h2>' +
'<p>Nuchter, concreet en zonder omhaal. Fenna schrijft zoals ze adviseert: to the point, met respect voor de lezer die zelf een keuze wil maken. Haar artikelen verschijnen in de <a href="/nieuws.html">nieuwsrubriek</a>, en haar hand is terug te zien in elk <a href="/shops.html">shopprofiel</a>.</p>' +
'<blockquote>Goede mode heeft geen uitleg nodig. Een goede gids wel.</blockquote>' +
'</div></section>';
  write('redactie.html', layout({
    title: 'Redactie | ' + AUTHOR.name + ' | BrouwersMode',
    desc: AUTHOR.short,
    path: '/redactie.html', active: '/redactie.html', body: body,
    jsonld: { '@context': 'https://schema.org', '@type': 'Person', name: AUTHOR.name, jobTitle: AUTHOR.role, worksFor: { '@type': 'Organization', name: 'BrouwersMode' } }
  }));
}

// Contact

function partnerCard(p) {
  return (
'<div class="card partner-card"><div class="card-body">' +
'<span class="card-tag">' + esc(p.tag) + '</span>' +
'<h3>' + esc(p.name) + '</h3>' +
'<p>' + esc(p.desc) + '</p>' +
'<a class="card-foot" href="' + p.url + '" target="_blank" rel="noopener">' + esc(p.anchor) + '</a>' +
'</div></div>'
  );
}

function buildPartners() {
  const PARTNERS = [{tag:'Smartshop',name:'Tatanka',desc:'Tatanka is een Nederlandse smartshop met paddo growkits en smartshopproducten, met uitleg per soort en een overzicht van het aanbod.',url:'https://www.tatanka.nl/nl/mazatapec-magic-mushroom-paddo-grow-kit/',anchor:'Mazatapec mushroom growkit'},{tag:'Smartshop',name:'Smartific',desc:'Smartific is een Nederlandse smartshop met magic truffels, growkits en smartshopproducten, inclusief productinformatie per artikel.',url:'https://smartific.nl/atlantis-truffels/',anchor:'Atlantis magic Truffels'},{tag:'Headshop',name:'The Headshop',desc:'The Headshop is een Nederlandse headshop met kratom en smartshopproducten, met een uitgebreid overzicht per soort en sterkte.',url:'https://www.headshop.nl/nl/joint-roller/',anchor:'Joint roller kopen'},{tag:'Paddo growkits',name:'Paddo.shop',desc:'Paddo.shop is een Nederlandse webshop gespecialiseerd in paddo growkits, met uitleg per kweekset en kweekinstructies.',url:'https://www.paddo.shop/',anchor:'Paddos kopen'},{tag:'Magic truffels',name:'Magictruffels.shop',desc:'Magictruffels.shop is een Nederlandse webshop voor magic truffels, met een overzicht per soort en de werking ervan.',url:'https://www.magictruffels.shop/high-hawaiians/',anchor:'high hawaiians'},];
  const body =
'<section class="page-hero"><div class="container">' +
'<p class="eyebrow">Partners</p>' +
'<h1>Partners en bronnen</h1>' +
'<p class="lead">BrouwersMode verwijst hier naar externe partners en bronnen.</p>' +
'</div></section>' +
'<section class="section"><div class="container"><div class="grid grid-3">' + PARTNERS.map(partnerCard).join('') + '</div></div></section>';
  write('partners.html', layout({
    title: 'Partners | BrouwersMode',
    desc: 'Partners en bronnen waar BrouwersMode naar verwijst.',
    path: '/partners.html', active: '/partners.html', body: body
  }));
}

function buildContact() {
  const mail = SITE.email;
  const body =
'<section class="page-hero"><div class="container narrow">' +
'<p class="eyebrow">Contact</p>' +
'<h1>Een bericht sturen</h1>' +
'<p class="lead">BrouwersMode werkt met een eenvoudig contactkanaal. Vragen, tips of suggesties gaan rechtstreeks per e-mail naar de redactie.</p>' +
'</div></section>' +
'<section class="section"><div class="container narrow">' +
'<div class="panel center" style="padding:44px">' +
'<p class="eyebrow" style="margin-bottom:10px">E-mail de redactie</p>' +
'<h2 style="margin-bottom:10px"><a href="mailto:' + mail + '">' + mail + '</a></h2>' +
'<p class="muted" style="max-width:48ch;margin:0 auto 22px">Een reactie volgt doorgaans binnen enkele werkdagen. Voor vragen over een specifieke shop helpt het om de naam van de shop te vermelden.</p>' +
'<a class="btn btn-primary" href="mailto:' + mail + '">Stuur een e-mail</a>' +
'</div>' +
'<div class="prose" style="margin-top:34px">' +
'<h2>Waarvoor</h2>' +
'<p>Deze inbox is bedoeld voor redactionele vragen, correcties op profielen, tips over shops die in de gids passen en algemene opmerkingen. BrouwersMode is een gids en geen webshop, dus voor bestellingen, retouren of klantenservice is de betreffende <a href="/shops.html">shop</a> zelf het juiste adres.</p>' +
'</div>' +
'</div></section>';
  write('contact.html', layout({
    title: 'Contact | BrouwersMode',
    desc: 'Neem contact op met de redactie van BrouwersMode via e-mail. Voor redactionele vragen, tips en correcties.',
    path: '/contact.html', active: '/contact.html', body: body
  }));
}

// Juridische pagina's
function legalPage(file, pathUrl, title, h1, intro, sections) {
  const sec = sections.map(function (s) {
    let inner = '';
    s.body.forEach(function (b) {
      if (Array.isArray(b)) { inner += '<ul>' + b.map(function (li) { return '<li>' + li + '</li>'; }).join('') + '</ul>'; }
      else { inner += '<p>' + b + '</p>'; }
    });
    return '<h2>' + esc(s.h) + '</h2>' + inner;
  }).join('');
  const body =
'<section class="page-hero"><div class="container narrow">' +
'<p class="eyebrow">Juridisch</p><h1>' + esc(h1) + '</h1><p class="lead">' + esc(intro) + '</p>' +
'</div></section>' +
'<section class="section"><div class="container narrow prose">' +
'<p class="muted">Laatst bijgewerkt: juli 2026.</p>' + sec +
'</div></section>';
  write(file, layout({ title: title, desc: intro, path: pathUrl, active: '', body: body }));
}

function buildLegal() {
  const mail = SITE.email;
  legalPage('privacy.html', '/privacy.html',
    'Privacybeleid | BrouwersMode', 'Privacybeleid',
    'BrouwersMode hecht aan de privacy van bezoekers. Dit beleid legt uit welke gegevens worden verwerkt en met welk doel.',
    [
      { h: 'Wie is verantwoordelijk', body: ['BrouwersMode (brouwersmode.nl) is verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven in dit beleid. Vragen kunnen per e-mail naar <a href="mailto:' + mail + '">' + mail + '</a>.'] },
      { h: 'Welke gegevens worden verwerkt', body: ['BrouwersMode is een informatieve modegids zonder gebruikersaccounts, bestellingen of nieuwsbrief. Er worden geen persoonsgegevens gevraagd of opgeslagen via de website. Wanneer iemand zelf een e-mail stuurt, worden het e-mailadres en de inhoud van dat bericht uitsluitend gebruikt om de vraag te beantwoorden.'] },
      { h: 'Technische gegevens', body: ['De website draait op Cloudflare Pages. De hostingpartij kan technische logbestanden bijhouden, zoals IP-adressen en browsertype, voor de beveiliging en beschikbaarheid van de site. Deze gegevens worden niet door BrouwersMode gebruikt om personen te identificeren.'] },
      { h: 'Cookies', body: ['BrouwersMode plaatst zelf geen tracking- of marketingcookies. Meer hierover staat in het <a href="/cookies.html">cookiebeleid</a>.'] },
      { h: 'Links naar derden', body: ['De gids verwijst naar externe webshops. Op die websites gelden de privacy- en cookievoorwaarden van de betreffende partij. BrouwersMode is niet verantwoordelijk voor de verwerking van gegevens op websites van derden.'] },
      { h: 'Rechten', body: ['Iedereen heeft het recht om gegevens die per e-mail zijn gedeeld in te zien, te corrigeren of te laten verwijderen. Een verzoek daartoe kan per e-mail naar <a href="mailto:' + mail + '">' + mail + '</a>.'] },
      { h: 'Wijzigingen', body: ['Dit privacybeleid kan van tijd tot tijd worden aangepast. De meest actuele versie staat altijd op deze pagina.'] }
    ]);

  legalPage('cookies.html', '/cookies.html',
    'Cookiebeleid | BrouwersMode', 'Cookiebeleid',
    'Dit cookiebeleid legt uit hoe BrouwersMode omgaat met cookies en vergelijkbare technieken.',
    [
      { h: 'Wat zijn cookies', body: ['Cookies zijn kleine tekstbestanden die een website op een apparaat kan plaatsen om bijvoorbeeld voorkeuren te onthouden of gebruik te meten.'] },
      { h: 'Welke cookies gebruikt BrouwersMode', body: ['BrouwersMode plaatst zelf geen tracking-, analyse- of marketingcookies. De website functioneert zonder cookies die persoonsgegevens verwerken. Alleen strikt noodzakelijke, technische verzoeken die horen bij het serveren van de pagina kunnen door de hostingpartij Cloudflare worden afgehandeld voor beveiliging en beschikbaarheid.'] },
      { h: 'Cookies van derden', body: ['De website verwijst naar externe webshops en laadt lettertypen via Google Fonts. Bij het bezoeken van een externe webshop of het laden van externe bronnen kunnen die partijen eigen cookies plaatsen volgens hun eigen beleid. BrouwersMode heeft daar geen invloed op.'] },
      { h: 'Cookies beheren', body: ['Cookies kunnen op elk moment worden beheerd of verwijderd via de instellingen van de browser. Het uitschakelen van cookies heeft geen invloed op de werking van deze informatieve website.'] },
      { h: 'Vragen', body: ['Vragen over dit cookiebeleid kunnen per e-mail naar <a href="mailto:' + mail + '">' + mail + '</a>.'] }
    ]);

  legalPage('disclaimer.html', '/disclaimer.html',
    'Disclaimer | BrouwersMode', 'Disclaimer',
    'BrouwersMode is een onafhankelijke informatieve modegids. Deze disclaimer beschrijft de voorwaarden voor het gebruik van de website.',
    [
      { h: 'Informatief karakter', body: ['De informatie op BrouwersMode is met zorg samengesteld en gebaseerd op openbaar beschikbare informatie van de beschreven shops. De gids streeft naar juistheid, maar kan niet garanderen dat alle informatie op elk moment volledig en actueel is. Assortiment, prijzen en voorwaarden bij externe shops kunnen wijzigen.'] },
      { h: 'Geen verkoop', body: ['BrouwersMode verkoopt zelf geen producten en is geen partij bij aankopen die via externe webshops worden gedaan. Bestellingen, betalingen, levering en retouren verlopen volledig via de betreffende shop en onder diens voorwaarden.'] },
      { h: 'Merknamen en logo’s', body: ['Genoemde merknamen zijn eigendom van de respectievelijke rechthebbenden en worden uitsluitend gebruikt om de betreffende shop of het merk te beschrijven en te herkennen. BrouwersMode is niet gelieerd aan de beschreven shops, tenzij uitdrukkelijk vermeld.'] },
      { h: 'Externe links', body: ['De website bevat links naar externe websites. BrouwersMode is niet verantwoordelijk voor de inhoud, het aanbod of het beleid van die websites.'] },
      { h: 'Contact', body: ['Vragen of correcties over de inhoud kunnen per e-mail naar <a href="mailto:' + mail + '">' + mail + '</a>.'] }
    ]);
}

// 404
function build404() {
  const body =
'<section class="section center" style="padding:90px 0"><div class="container narrow">' +
'<p class="eyebrow">Pagina niet gevonden</p>' +
'<h1>Deze pagina bestaat niet</h1>' +
'<p class="lead">De gevraagde pagina is verplaatst of bestaat niet meer. Onderstaande routes brengen weer op weg.</p>' +
'<div class="hero-actions" style="justify-content:center;margin-top:24px"><a class="btn btn-primary" href="/">Naar de homepage</a><a class="btn btn-ghost" href="/shops.html">Bekijk de shops</a></div>' +
'</div></section>';
  write('404.html', layout({ title: 'Pagina niet gevonden | BrouwersMode', desc: 'De gevraagde pagina bestaat niet.', path: '/404.html', active: '', body: body }));
}

// Sitemap + robots
function buildSitemapRobots() {
  const urls = ['/', '/over.html', '/shops.html', '/nieuws.html', '/stijlgids.html', '/cadeaugids.html', '/redactie.html', '/partners.html', '/contact.html', '/privacy.html', '/cookies.html', '/disclaimer.html'];
  SHOPS.forEach(function (s) { urls.push('/shops/' + s.slug + '.html'); });
  ARTICLES.forEach(function (a) { urls.push('/nieuws/' + a.slug + '.html'); });
  const today = '2026-07-24';
  const xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemap.org/schemas/sitemap/0.9">'.replace('sitemap.org', 'sitemaps.org') +
    urls.map(function (u) { return '<url><loc>' + SITE.base + u + '</loc><lastmod>' + today + '</lastmod></url>'; }).join('') +
    '</urlset>';
  write('sitemap.xml', xml);
  write('robots.txt', 'User-agent: *\nAllow: /\n\nSitemap: ' + SITE.base + '/sitemap.xml');
}

function buildAll() {
  buildHome();
  buildOver();
  buildShops();
  buildShopProfiles();
  buildNews();
  buildArticles();
  buildStijlgids();
  buildCadeaugids();
  buildRedactie();
  buildPartners();
  buildContact();
  buildLegal();
  build404();
  buildSitemapRobots();
  console.log('Done.');
}

buildAll();
