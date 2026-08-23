/* Genera scegli-fasce.html: le candidate per le due fasce di stacco, renderizzate
   a tutta larghezza con lo stesso ritaglio e lo stesso trattamento del sito.
   Uso:  node tools/genera-provino-fasce.js */

const fs = require('fs');
const path = require('path');

const radice = path.resolve(__dirname, '..');
const cartella = path.join(radice, 'img', 'scelta');

/* Solo le candidate larghe e con abbastanza materia per reggere una striscia.
   I ritratti verticali e le miniature di servizio sono esclusi di proposito. */
const CANDIDATE = [
  'hero-01', 'hero-05', 'hero-06', 'hero-07', 'hero-08', 'hero-09', 'hero-10',
  'hero-11', 'hero-12', 'hero-13', 'hero-14', 'hero-15', 'hero-16', 'hero-18',
  'hero-19', 'hero-20',
  'mani-01', 'mani-02', 'mani-04', 'mani-05', 'mani-06', 'mani-08', 'mani-09', 'mani-10',
  'cald-01', 'cald-09', 'cald-10',
  'mur-10', 'mur-11', 'pia-11',
];

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

let corpo = '';
let n = 0;

for (const nome of CANDIDATE) {
  const file = ['.jpg', '.jpeg'].map(e => nome + e).find(f => fs.existsSync(path.join(cartella, f)));
  if (!file) continue;
  n++;
  const kb = Math.round(fs.statSync(path.join(cartella, file)).size / 1024);
  corpo += `
  <section class="prova">
    <p class="targa"><b>${esc(nome)}</b> <span>${kb} KB</span></p>
    <div class="stacco">
      <img src="img/scelta/${esc(file)}" alt="" loading="lazy">
    </div>
  </section>
`;
}

const html = `<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Scegli le fasce — sito di Gabriele</title>
<style>
  :root { --ink:#16181A; --fg:#F5F3F0; --fg2:#A9AEB3; --line:rgba(255,255,255,.13); --orange:#F26522; }
  * { box-sizing: border-box; }
  body { margin:0; background:var(--ink); color:var(--fg);
         font-family: system-ui,-apple-system,'Segoe UI',sans-serif; line-height:1.55; }
  .testata { padding: clamp(2rem,5vw,3.5rem) clamp(1.25rem,4vw,3rem) 1.5rem; border-bottom:1px solid var(--line); }
  .testata h1 { margin:0 0 .75rem; font-size: clamp(1.5rem,3.5vw,2.25rem); }
  .testata p { margin:.5rem 0; color:var(--fg2); max-width:72ch; }
  code { background:#1D2023; padding:.1em .4em; border-radius:3px; color:#FFD84D; font-size:.9em; }

  .prova { padding-top: 2.5rem; }
  .targa { margin:0 clamp(1.25rem,4vw,3rem) .6rem; font-size:.875rem; color:var(--fg2); }
  .targa b { color:var(--orange); font-family: ui-monospace, Menlo, Consolas, monospace; font-size:1rem; }
  .targa span { margin-left:.5rem; }

  /* identico al sito */
  .stacco { position:relative; height: clamp(190px, 25vw, 330px); overflow:hidden; }
  .stacco img { width:100%; height:100%; object-fit:cover; filter: saturate(.92) contrast(1.04); }
  .stacco::after {
    content:''; position:absolute; inset:0;
    background: linear-gradient(to bottom,
      var(--ink) 0%, rgba(22,24,26,.12) 25%, rgba(22,24,26,.12) 75%, var(--ink) 100%);
  }
  .coda { padding: 3rem clamp(1.25rem,4vw,3rem) 4rem; color:var(--fg2); }
</style>
</head>
<body>
<div class="testata">
  <h1>Scegli le due fasce</h1>
  <p>Ogni striscia qui sotto è renderizzata <b>esattamente</b> come apparirà nel sito: stessa altezza, stesso ritaglio, stesso trattamento. Quello che vedi è quello che esce.</p>
  <p>Nel sito ce ne stanno due: una tra i servizi e "Sono Gabriele", una tra "come funziona" e le recensioni. Dimmi due nomi (per esempio <code>hero-09</code> e <code>mani-05</code>) e le monto.</p>
  <p>Se non ti convince nessuna, dimmelo e cerco altrove: qui ci sono solo le candidate già scaricate.</p>
</div>
${corpo}
<div class="coda">${n} candidate. Le altre foto stanno in <code>scegli-foto.html</code>.</div>
</body>
</html>
`;

fs.writeFileSync(path.join(radice, 'scegli-fasce.html'), html, 'utf8');
console.log('scegli-fasce.html generato — ' + n + ' fasce da valutare.');
