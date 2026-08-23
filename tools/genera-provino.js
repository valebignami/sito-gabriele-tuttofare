/* Genera scegli-foto.html leggendo la cartella img/scelta.
   Uso:  node tools/genera-provino.js
   Va rieseguito ogni volta che si aggiungono o tolgono foto candidate. */

const fs = require('fs');
const path = require('path');

const radice = path.resolve(__dirname, '..');
const cartella = path.join(radice, 'img', 'scelta');

const GRUPPI = [
  { chiave: 'hero',     titolo: 'Foto grande iniziale',      uso: 'La prima cosa che si vede, a tutta schermata. Sopra ci va il titolo bianco: meglio se ha una zona ampia e poco affollata.', file: 'img/hero.jpg',              formato: 'orizzontale' },
  { chiave: 'ritratto', titolo: 'Ritratto di Gabriele',      uso: 'Sezione "Sono Gabriele". È la foto che costruisce la fiducia: da sostituire con una foto vera appena possibile.', file: 'img/gabriele.jpg',          formato: 'verticale' },
  { chiave: 'mani',     titolo: 'Fascia dei contatti',       uso: 'Il riquadro accanto al numero di telefono, in fondo alla pagina.', file: 'img/cta.jpg',               formato: 'orizzontale' },
  { chiave: 'cald',     titolo: 'Caldaie e condizionatori',  uso: 'Le prime cinque (cald-01…05) sono caldaie, le altre cinque (cald-06…10) condizionatori. Ricerca dedicata, fatta dopo le altre.', file: 'img/serv-idraulica.jpg oppure img/serv-clima.jpg', formato: 'orizzontale' },
  { chiave: 'idr',      titolo: 'Idraulica (primo giro)',    uso: 'Miniatura della riga "Idraulica e caldaie".', file: 'img/serv-idraulica.jpg',    formato: 'orizzontale' },
  { chiave: 'bagno',    titolo: 'Bagni e ristrutturazioni',  uso: 'Miniatura della riga "Bagni e ristrutturazioni".', file: 'img/serv-bagno.jpg',        formato: 'orizzontale' },
  { chiave: 'mur',      titolo: 'Muratura e cartongesso',    uso: 'Miniatura della riga "Muratura e cartongesso".', file: 'img/serv-muratura.jpg',     formato: 'orizzontale' },
  { chiave: 'pia',      titolo: 'Piastrelle e pavimenti',    uso: 'Miniatura della riga "Piastrelle e pavimenti".', file: 'img/serv-piastrelle.jpg',   formato: 'orizzontale' },
  { chiave: 'rip',      titolo: 'Riparazioni e piccoli lavori', uso: 'Miniatura della riga "Riparazioni e piccoli lavori".', file: 'img/serv-riparazioni.jpg',  formato: 'orizzontale' },
  { chiave: 'tin',      titolo: 'Tinteggiatura e finiture',  uso: 'Miniatura della riga "Tinteggiatura e finiture".', file: 'img/serv-tinteggiatura.jpg', formato: 'orizzontale' },
];

if (!fs.existsSync(cartella)) {
  console.error('Manca la cartella img/scelta.');
  process.exit(1);
}

const tutti = fs.readdirSync(cartella)
  .filter(f => /\.jpe?g$/i.test(f))
  .sort((a, b) => a.localeCompare(b, 'it', { numeric: true }));

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

let corpo = '';
let totale = 0;

for (const g of GRUPPI) {
  const file = tutti.filter(f => new RegExp('^' + g.chiave + '-\\d+\\.jpe?g$', 'i').test(f));
  if (!file.length) continue;
  totale += file.length;

  const schede = file.map(f => {
    const kb = Math.round(fs.statSync(path.join(cartella, f)).size / 1024);
    return `      <figure class="scheda ${g.formato}">
        <a href="img/scelta/${esc(f)}" target="_blank" rel="noopener">
          <img src="img/scelta/${esc(f)}" alt="${esc(f)}" loading="lazy">
        </a>
        <figcaption><b>${esc(f)}</b> <span>${kb} KB</span></figcaption>
      </figure>`;
  }).join('\n');

  corpo += `
  <section class="gruppo">
    <header>
      <h2>${esc(g.titolo)}</h2>
      <p>${esc(g.uso)}</p>
      <p class="dest">Nel sito diventa <code>${esc(g.file)}</code> — ${file.length} candidate</p>
    </header>
    <div class="griglia">
${schede}
    </div>
  </section>
`;
}

const html = `<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Scegli le foto — sito di Gabriele</title>
<style>
  :root { --ink:#16181A; --ink2:#1D2023; --fg:#F5F3F0; --fg2:#A9AEB3; --line:rgba(255,255,255,.13); --orange:#F26522; }
  * { box-sizing: border-box; }
  body { margin:0; background:var(--ink); color:var(--fg);
         font-family: system-ui,-apple-system,'Segoe UI',sans-serif; line-height:1.55; }
  .testata { padding: clamp(2rem,5vw,4rem) clamp(1.25rem,4vw,3rem) 1rem; border-bottom:1px solid var(--line); }
  .testata h1 { margin:0 0 .75rem; font-size: clamp(1.5rem,3.5vw,2.25rem); }
  .testata p { margin:.5rem 0; color:var(--fg2); max-width:70ch; }
  code { background:var(--ink2); padding:.1em .4em; border-radius:3px; color:#FFD84D; font-size:.9em; }
  .gruppo { padding: clamp(2rem,4vw,3.5rem) clamp(1.25rem,4vw,3rem); border-bottom:1px solid var(--line); }
  .gruppo header { margin-bottom:1.5rem; }
  .gruppo h2 { margin:0 0 .4rem; font-size: clamp(1.25rem,2.5vw,1.75rem); }
  .gruppo header p { margin:.25rem 0; color:var(--fg2); max-width:70ch; }
  .dest { font-size:.9rem; }
  .griglia { display:grid; gap:1rem; grid-template-columns: repeat(auto-fill, minmax(260px,1fr)); }
  .scheda { margin:0; background:var(--ink2); border:1px solid var(--line); border-radius:4px; overflow:hidden; }
  .scheda img { display:block; width:100%; height:100%; object-fit:cover; }
  .scheda a { display:block; }
  .orizzontale a { aspect-ratio: 3/2; }
  .verticale a { aspect-ratio: 4/5; }
  figcaption { display:flex; justify-content:space-between; gap:.5rem;
               padding:.55rem .7rem; font-size:.8125rem; color:var(--fg2);
               border-top:1px solid var(--line); }
  figcaption b { color:var(--fg); font-weight:600; }
  .scheda:hover { border-color:var(--orange); }
</style>
</head>
<body>
<div class="testata">
  <h1>Scegli le foto</h1>
  <p>Ogni riquadro è una candidata. Cliccala per vederla grande. Sotto ogni foto c'è il suo nome.</p>
  <p><b>Come si usa:</b> dimmi i nomi delle foto che preferisci (per esempio <code>hero-04</code>, <code>bagno-02</code>) e le monto io nel sito. In alternativa, per farlo a mano: prendi il file da <code>img/scelta/</code>, rinominalo come indicato in ogni sezione e mettilo dentro <code>img/</code> al posto di quello vecchio.</p>
  <p>Le foto sono ritagliate qui sotto nella stessa proporzione con cui appariranno nel sito, così vedi già cosa si perde ai bordi.</p>
  <p class="dest">${totale} candidate in totale.</p>
</div>
${corpo}
</body>
</html>
`;

fs.writeFileSync(path.join(radice, 'scegli-foto.html'), html, 'utf8');
console.log('scegli-foto.html generato — ' + totale + ' foto in ' + GRUPPI.filter(g => tutti.some(f => f.startsWith(g.chiave + '-'))).length + ' gruppi.');
