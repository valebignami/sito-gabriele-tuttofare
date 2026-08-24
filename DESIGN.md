---
name: Gabriel — Tuttofare per la casa
description: Antracite di cantiere e arancio segnaletica; Anton per le affermazioni, Barlow per la voce.
colors:
  antracite: "#16181A"
  antracite-alto: "#1D2023"
  antracite-rialzato: "#212528"
  antracite-barra: "#24282C"
  nero-velo: "#0B0D10"
  nero-topbar: "#0C0D0F"
  nero-pieno: "#000000"
  ombra-barra: "rgba(0, 0, 0, .35)"
  calce: "#F5F3F0"
  grigio-voce: "#A9AEB3"
  grigio-navigazione: "#DEDCD9"
  grigio-lede: "#D9D6D2"
  arancio-segnaletica: "#F26522"
  arancio-acceso: "#FF7C3C"
  nero-su-arancio: "#17110C"
  nero-su-pulsante: "#150C06"
  calce-su-nero: "#F7EDE6"
  giallo-segnaposto: "#FFD84D"
  giallo-avviso: "#EDE2BE"
  filetto: "rgba(255, 255, 255, .13)"
  filetto-forte: "rgba(255, 255, 255, .28)"
  bordo-interattivo: "rgba(255, 255, 255, .46)"
  bordo-interattivo-cta: "rgba(23, 17, 12, .64)"
  bordo-fascia: "rgba(23, 17, 12, .22)"
typography:
  display:
    fontFamily: "Anton, 'Arial Narrow', sans-serif"
    fontSize: "clamp(2.5rem, 8.4vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "-.02em"
  headline:
    fontFamily: "Anton, 'Arial Narrow', sans-serif"
    fontSize: "clamp(2rem, 5.5vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 0.96
    letterSpacing: "-.005em"
  cta-title:
    fontFamily: "Anton, 'Arial Narrow', sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.5rem)"
    fontWeight: 400
    lineHeight: 0.96
    letterSpacing: "-.012em"
  tel-big:
    fontFamily: "Anton, 'Arial Narrow', sans-serif"
    fontSize: "clamp(2rem, 5.2vw, 3.5rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-.01em"
  title:
    fontFamily: "Anton, 'Arial Narrow', sans-serif"
    fontSize: "clamp(1.625rem, 4vw, 2.75rem)"
    fontWeight: 400
    lineHeight: 0.96
    letterSpacing: "-.005em"
  row-title:
    fontFamily: "Anton, 'Arial Narrow', sans-serif"
    fontSize: "clamp(1.3125rem, 2.7vw, 2rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-.008em"
  step-title:
    fontFamily: "Anton, 'Arial Narrow', sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2.25rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-.008em"
  passo-title:
    fontFamily: "Anton, 'Arial Narrow', sans-serif"
    fontSize: "clamp(1.25rem, 2.3vw, 1.625rem)"
    fontWeight: 400
    lineHeight: 1.02
  fascia-voce:
    fontFamily: "Anton, 'Arial Narrow', sans-serif"
    fontSize: "clamp(1.125rem, 2vw, 1.625rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: ".005em"
  wordmark:
    fontFamily: "Anton, 'Arial Narrow', sans-serif"
    fontSize: "1.5rem"
    fontWeight: 400
    letterSpacing: ".01em"
  footer-name:
    fontFamily: "Anton, 'Arial Narrow', sans-serif"
    fontSize: "1.375rem"
    fontWeight: 400
    letterSpacing: ".01em"
  lede:
    fontFamily: "Barlow, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.0625rem, 1.9vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.6
  section-sub:
    fontFamily: "Barlow, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.0625rem, 1.6vw, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.6
  cta-sub:
    fontFamily: "Barlow, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  quote:
    fontFamily: "Barlow, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.0625rem, 1.4vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.6
  quote-mark:
    fontFamily: "Barlow, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "6.5rem"
    fontWeight: 700
    lineHeight: 1
  body:
    fontFamily: "Barlow, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  meta:
    fontFamily: "Barlow, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Barlow, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: ".9375rem"
    fontWeight: 600
    lineHeight: 1.6
  pill:
    fontFamily: "Barlow, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: ".875rem"
    fontWeight: 500
    lineHeight: 1.6
  tag:
    fontFamily: "Barlow, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: ".8125rem"
    fontWeight: 600
    letterSpacing: ".06em"
rounded:
  sm: "3px"
  focus: "2px"
  pill: "100px"
spacing:
  pad: "clamp(1.25rem, 5vw, 5rem)"
  wrap: "1280px"
  sec: "clamp(3.25rem, 5.5vw, 5.5rem)"
  sec-head: "clamp(2rem, 4vw, 3.5rem)"
components:
  button-whatsapp:
    backgroundColor: "{colors.arancio-segnaletica}"
    textColor: "{colors.nero-su-pulsante}"
    rounded: "{rounded.sm}"
    padding: "0 1.6rem"
    height: "58px"
  button-whatsapp-hover:
    backgroundColor: "{colors.arancio-acceso}"
  button-ghost:
    textColor: "{colors.calce}"
    rounded: "{rounded.sm}"
    padding: "0 1.6rem"
    height: "58px"
  button-whatsapp-on-orange:
    backgroundColor: "{colors.nero-su-arancio}"
    textColor: "{colors.calce-su-nero}"
    rounded: "{rounded.sm}"
    padding: "0 1.6rem"
    height: "58px"
  button-whatsapp-on-orange-hover:
    backgroundColor: "{colors.nero-pieno}"
  button-ghost-on-orange:
    textColor: "{colors.nero-su-arancio}"
    rounded: "{rounded.sm}"
    padding: "0 1.6rem"
    height: "58px"
  topbar-call:
    textColor: "{colors.calce}"
    rounded: "{rounded.sm}"
    padding: ".55rem .9rem"
    typography: "{typography.label}"
  topbar-call-mobile:
    textColor: "{colors.calce}"
    rounded: "{rounded.sm}"
    padding: "0"
    size: "48px"
  pill-disponibilita:
    backgroundColor: "rgba(22, 24, 26, .5)"
    textColor: "{colors.calce}"
    rounded: "{rounded.pill}"
    padding: ".5rem 1rem .5rem .85rem"
    typography: "{typography.pill}"
  row-servizio:
    padding: "clamp(1.25rem, 2.4vw, 1.75rem) 1rem"
  row-servizio-hover:
    backgroundColor: "rgba(255, 255, 255, .035)"
  row-ico:
    textColor: "{colors.arancio-segnaletica}"
    size: "30px"
  row-ico-mobile:
    textColor: "{colors.arancio-segnaletica}"
    size: "22px"
  passo-ico:
    backgroundColor: "{colors.antracite}"
    rounded: "{rounded.sm}"
    size: "58px"
  bar-whatsapp:
    backgroundColor: "{colors.arancio-segnaletica}"
    textColor: "{colors.nero-su-pulsante}"
    height: "62px"
  bar-tel:
    backgroundColor: "{colors.antracite-barra}"
    textColor: "{colors.calce}"
    height: "62px"
  placeholder-ph:
    backgroundColor: "rgba(255, 216, 77, .16)"
    textColor: "{colors.giallo-segnaposto}"
    padding: "0 .28em"
  fascia:
    backgroundColor: "{colors.arancio-segnaletica}"
    textColor: "{colors.nero-su-arancio}"
    padding: ".85rem clamp(.625rem, 1.25vw, 1.125rem)"
    typography: "{typography.fascia-voce}"
  fascia-stella:
    textColor: "{colors.nero-su-arancio}"
    size: "16px"
  voce:
    backgroundColor: "{colors.antracite-alto}"
    textColor: "{colors.calce}"
    rounded: "{rounded.sm}"
    padding: "clamp(1.5rem, 2.4vw, 2rem)"
    typography: "{typography.quote}"
  voce-hover:
    backgroundColor: "{colors.antracite-rialzato}"
  quote-mark:
    textColor: "{colors.arancio-segnaletica}"
    typography: "{typography.quote-mark}"
  stacco:
    backgroundColor: "{colors.antracite}"
    height: "clamp(190px, 25vw, 330px)"
  stelle:
    textColor: "{colors.arancio-segnaletica}"
    size: "19px"
  avviso:
    backgroundColor: "rgba(255, 216, 77, .07)"
    textColor: "{colors.giallo-avviso}"
    rounded: "{rounded.sm}"
    padding: ".9rem 1.1rem"
  etichetta-esempio:
    backgroundColor: "rgba(255, 216, 77, .16)"
    textColor: "{colors.giallo-segnaposto}"
    rounded: "{rounded.focus}"
    padding: ".15rem .5rem"
    typography: "{typography.tag}"
  placeholder-ph-on-orange:
    backgroundColor: "rgba(23, 17, 12, .14)"
    textColor: "{colors.nero-su-arancio}"
    padding: "0 .28em"
  skip-link:
    backgroundColor: "{colors.arancio-segnaletica}"
    textColor: "{colors.antracite}"
    padding: ".75rem 1.25rem"
---

# Design System: Gabriel — Tuttofare per la casa

> Documento in italiano; le intestazioni di sezione restano in inglese perché sono
> quelle canoniche del formato DESIGN.md e gli strumenti che lo leggono le cercano
> alla lettera. Tutti i valori qui sotto sono estratti da `style.css`, `index.html` e
> `script.js`: sono ciò che il codice fa oggi, non ciò che si vorrebbe facesse.

## Overview

**Creative North Star: "Il cartello di cantiere"**

Il mondo visivo è quello di un cartello appeso al ponteggio: fondo antracite, poche
parole enormi in maiuscolo, un arancio segnaletica che compare solo dove serve
guardare, e filetti sottili come tracciati a matita sul muro. La tesi, fissata nel
DIRECTION CONTRACT in cima a `index.html`, è che il committente non sia «un tuttofare
improvvisato» ma «un capocantiere che ha aggiunto un secondo mestiere»: di conseguenza
la pagina rifiuta la griglia di sei schede identiche icona+titolo+testo e tratta i
servizi come righe larghe, leggibili scorrendo col pollice.

La densità è bassa e verticale. Ogni sezione è una fascia separata dalla successiva da
un filetto da 1px, non da una scatola. Non esiste una sola ombra in tutto il foglio di
stile (`box-shadow` compare zero volte): la profondità è data dalla velatura delle
fotografie e dalla differenza di luminosità tra i fondi, mai da un rilievo simulato.
Le fotografie sanguinano a pieno formato sotto un velo nero, mai ritagliate dentro una
card.

Il contratto di direzione dichiara esplicitamente due rifiuti visivi: **nessuna scheda
con ombra** e **nessun gradiente di testo**. Entrambi sono rispettati nel codice.

**Key Characteristics:**
- Fondo antracite unico per tutta la pagina, spezzato da una sola fascia arancio piena (i contatti).
- Un solo accento cromatico, usato come segnale e non come decorazione.
- Titoli in Anton maiuscolo con interlinea sotto 1 e tracking negativo; corpo in Barlow.
- Superfici piatte: zero ombre, raggio 3px quasi ovunque, filetti bianchi trasparenti come unico divisore.
- Fotografia a pieno sanguinamento, desaturata e velata di nero freddo.
- Un solo movimento continuo, decorativo e dichiarato: la fascia di servizi che scorre sotto l'hero.
- Nessuna dipendenza esterna a runtime: font self-hostati in `fonts/`, immagini locali in `img/`, icone SVG inline.

## Colors

Palette a due voci: un antracite freddo che occupa quasi tutta la pagina e un arancio
da segnaletica stradale che compare solo sulle azioni e sui segnali di stato.

### Primary
- **Arancio segnaletica** (`{colors.arancio-segnaletica}`): l'unico accento. Fondo del pulsante WhatsApp, fondo dell'intera sezione contatti, quadratino dopo il wordmark, pallino e anello della pillola di disponibilità, icone di linea delle righe servizio, filetto e marcatore del passo corrente nel percorso, icone dei passi «come funziona», stato hover del titolo e della freccia nelle righe servizio, sottolineatura al passaggio sui link della navigazione e del footer, fondo dello skip link. Compare anche in trasparenza: al 12% come fondo hover del pulsante di chiamata in alto, al 55% come contorno sfalsato del ritratto, al 50% come anello del pallino di disponibilità.
- **Arancio acceso** (`{colors.arancio-acceso}`): esclusivamente lo stato hover del pulsante WhatsApp sul fondo scuro. Non usato altrove.

### Neutral (fondo e testo)
- **Antracite** (`{colors.antracite}`): fondo della pagina e fondo del riquadro icona dei passi; è anche il `theme-color` del documento. In trasparenza è il vetro della barra in alto agganciata (88%) e il fondo della pillola di disponibilità (50%).
- **Antracite alto** (`{colors.antracite-alto}`): la superficie rialzata di un grado sopra il fondo pagina. Fondo dietro le miniature delle righe servizio, visibile mentre l'immagine carica, e fondo del pannello di una recensione.
- **Antracite rialzato** (`{colors.antracite-rialzato}`): un grado ancora sopra, usato solo come stato hover del pannello di una recensione. È l'unico caso in cui il sistema alza una superficie invece di cambiarle il bordo.
- **Antracite barra** (`{colors.antracite-barra}`): fondo della metà «Chiama» nella barra fissa mobile. È l'unico grigio che si stacca dal fondo pagina per separare le due metà della barra.
- **Nero velo** (`{colors.nero-velo}`): base dei gradienti che velano l'hero, sempre usata con alfa (da .18 a .94). È volutamente più freddo dell'antracite di fondo.
- **Nero topbar** (`{colors.nero-topbar}`): base del gradiente in dissolvenza sotto la barra in alto a riposo, dal 72% al trasparente. È un terzo nero, ancora diverso dal velo dell'hero e dall'antracite, e vive solo lì.
- **Nero pieno** (`{colors.nero-pieno}`): unico uso, lo stato hover del pulsante WhatsApp dentro la fascia arancio, dove il nero caldo non basterebbe a segnalare il cambio di stato.
- **Ombra barra** (`{colors.ombra-barra}`): nero al 35%, il filetto superiore della barra fissa mobile. È l'unico divisore nero del sistema, necessario perché la barra poggia su fondi di colore imprevedibile.
- **Calce** (`{colors.calce}`): colore del testo principale e dell'anello di focus sul fondo scuro.
- **Grigio voce** (`{colors.grigio-voce}`): testo secondario — sottotitoli di sezione, descrizioni dei passi e delle righe servizio, note, metadati del footer.
- **Grigio navigazione** (`{colors.grigio-navigazione}`) e **Grigio lede** (`{colors.grigio-lede}`): due grigi chiari a uso singolo, rispettivamente i link della navigazione a riposo e il paragrafo d'apertura dell'hero. Sono più chiari del grigio voce perché stanno su fotografia o accanto al titolo.

### Bordi
- **Filetto** (`{colors.filetto}`, bianco al 13%): il divisore strutturale — bordo superiore di ogni sezione, filetto tra le righe servizio, riga sopra la firma di «Chi sono», bordo inferiore della barra agganciata. Non è un bordo interattivo.
- **Filetto forte** (`{colors.filetto-forte}`, bianco al 28%): bordi e segni decorativi non interattivi — contorno della pillola, riquadro icona dei passi, marcatori e filetti del percorso, tratteggio tra i passi, freccia della riga a riposo, sottolineatura dei link del footer.
- **Bordo interattivo** (`{colors.bordo-interattivo}`, bianco al 46%): il bordo di un comando su fondo scuro — pulsante ghost «Chiama ora» e pulsante di chiamata nella barra in alto. Esiste separato dal filetto forte per una ragione precisa, annotata nel CSS: al 28% il rapporto era 2.5:1, sotto la soglia di 3:1 di WCAG 1.4.11, e il pulsante spariva sulle zone chiare della fotografia. Al 46% il rapporto sull'antracite è circa 4.5:1.
- **Bordo interattivo CTA** (`{colors.bordo-interattivo-cta}`, nero caldo al 64%): lo stesso ruolo sulla fascia arancio, per il pulsante ghost lì dentro. Sull'arancio vale circa 3.4:1.
- **Bordo fascia** (`{colors.bordo-fascia}`, nero caldo al 22%): i due filetti che chiudono sopra e sotto la fascia scorrevole (`border-block`). Non è interattivo: separa una fascia piena dal fondo scuro che la circonda.

### Colori sul fondo arancio (sezione contatti)
Sulla fascia arancio la logica si inverte: il testo diventa un quasi-nero caldo, il
pulsante primario diventa scuro e perfino il focus e il segnaposto cambiano colore.
- **Nero su arancio** (`{colors.nero-su-arancio}`): colore del testo dell'intera sezione contatti (titolo, sottotitolo, numero grande, riga della zona), fondo del pulsante WhatsApp lì dentro, **colore dell'anello di focus** (`.cta :focus-visible`) e colore del segnaposto locale. Il numero grande è sottolineato con lo stesso colore al 35%, che diventa pieno al passaggio del mouse; il pulsante ghost lo usa pieno come bordo in hover e all'8% come fondo; il segnaposto lo usa al 14% come fondo e al 60% come tratteggio.
- **Calce su nero** (`{colors.calce-su-nero}`): testo e icona del pulsante WhatsApp scuro dentro la fascia arancio. È un bianco leggermente più caldo della calce, scelto per non vibrare sull'arancio circostante.

### Colori di stato
- **Nero su pulsante** (`{colors.nero-su-pulsante}`): testo e icona sopra l'arancio quando l'arancio è il fondo di un pulsante (hero e barra mobile). Distinto dal nero su arancio: è più freddo e più scuro.
- **Giallo segnaposto** (`{colors.giallo-segnaposto}`): riservato ai contenuti non ancora veri. Non è un colore di brand: è un allarme redazionale. Usato pieno come testo del segnaposto e dell'etichetta «Esempio» e come `strong` dell'avviso, al 16% come fondo di segnaposto ed etichetta, al 65% come tratteggio del segnaposto, al 55% come bordo tratteggiato di avviso ed etichetta, al 50% come filetto di una voce d'esempio, al 7% come fondo dell'avviso.
- **Giallo avviso** (`{colors.giallo-avviso}`): il testo del riquadro di avvertimento `.avviso`. È il giallo di avviso desaturato verso la calce, e non il giallo pieno, per una ragione misurata: il giallo saturo va bene su due parole dentro una frase, ma su un paragrafo intero affatica e si legge male. Il grado di allarme resta, la leggibilità torna.

### Named Rules

**La Regola del Segnale.** L'arancio è un segnale, non un colore d'arredo. Compare dove
il visitatore deve agire (pulsanti, numero di telefono, freccia della riga) o dove deve
guardare (passo corrente del percorso, stato di disponibilità, icona del servizio). Se
una nuova superficie usa l'arancio per «vivacizzare», l'uso è sbagliato.

**La Regola dei Due Neri.** Il nero sopra l'arancio non è mai lo stesso nero del fondo
pagina. Su pulsante arancio si usa il nero freddo `{colors.nero-su-pulsante}`; sulla
fascia arancio piena si usa il nero caldo `{colors.nero-su-arancio}`. Non sostituirli
con `{colors.antracite}`.

**La Regola del Bordo Che Si Vede.** Un bordo che delimita un comando non è un filetto
decorativo: usa `{colors.bordo-interattivo}` su fondo scuro e
`{colors.bordo-interattivo-cta}` sull'arancio, perché deve stare sopra 3:1. Il filetto
al 28% resta per ciò che non si tocca. Confonderli è una regressione di accessibilità,
non una scelta estetica.

**La Regola del Contenuto Marcato.** Un contenuto che non è ancora vero non deve mai
essere indistinguibile da uno vero. Il sistema ha tre marcatori gialli e vanno usati:
`.ph` per un dato mancante dentro una frase, `.etichetta` per un blocco fittizio,
`.avviso` per spiegare a chi pubblica che cosa va sostituito e dove trovare le
istruzioni. Vale in modo particolare per le recensioni: pubblicare testimonianze
inventate senza marcarle non è un compromesso estetico, è una pratica commerciale
ingannevole. Se il marcatore dà fastidio, la risposta è sostituire il contenuto, non
togliere il marcatore.

**La Regola del Giallo Onesto.** Il segnaposto è l'unico modo di rappresentare un dato
mancante. Un cognome, una partita IVA o un numero non ancora noti si scrivono dentro
`.ph` in maiuscolo tra parentesi quadre; non si inventano e non si nascondono. Sul
fondo scuro è giallo, sulla fascia arancio è nero caldo trasparente: il ruolo non
cambia, cambia solo il fondo su cui deve restare leggibile.

## Typography

**Display Font:** Anton (fallback `Arial Narrow`, poi sans-serif di sistema) — un solo
peso disponibile, 400, self-hostato in `fonts/Anton-400.woff2`.
**Body Font:** Barlow (fallback `system-ui`, `-apple-system`, `Segoe UI`, sans-serif) —
quattro pesi self-hostati: 400, 500, 600, 700 (`fonts/Barlow-{400,500,600,700}.woff2`).
Tutti i tagli sono `font-display: swap`; Anton 400 e Barlow 400 sono in `preload`.

**Character:** Anton è una grottesca condensata pesantissima: in maiuscolo, con
interlinea sotto l'unità e tracking negativo, si comporta come uno stencil da cantiere.
Barlow accanto è deliberatamente ordinaria e parlata, perché tutto il testo di corpo è
la voce diretta dell'artigiano. Le due famiglie non si contendono mai lo stesso ruolo:
**Anton dice, Barlow spiega.**

### Hierarchy (Anton)
- **Display / titolo hero** (`clamp(2.5rem, 8.4vw, 6rem)`, interlinea .9, tracking -.02em, maiuscolo, `text-wrap: balance`): una sola occorrenza per pagina, l'`h1` dell'hero, spezzato a mano con `<br>`. Le parole finali sono in `<em>` non corsivo, colorate di arancio. **Il minimo è 2.5rem, non un valore più alto:** serve perché la parola più lunga del titolo non sbordi a 360px di larghezza.
- **Headline / titoli di sezione** (`clamp(2rem, 5.5vw, 3.75rem)`, interlinea .96): gli `h2` di «Cosa faccio», «Come funziona», «Sono Gabriel».
- **CTA title** (`clamp(2rem, 5vw, 3.5rem)`, interlinea .96, tracking -.012em, misura 16ch): il titolo della fascia contatti, leggermente più contenuto della headline.
- **Numero grande** (`clamp(2rem, 5.2vw, 3.5rem)`, interlinea 1, tracking -.01em): il telefono nella fascia contatti, trattato come un titolo cliccabile con sottolineatura da 3px.
- **Title / titolo del percorso** (`clamp(1.625rem, 4vw, 2.75rem)`, misura 22ch): l'affermazione «Non un tuttofare improvvisato», con la seconda frase in arancio dentro uno `<span>`.
- **Row title / titolo di servizio** (`clamp(1.3125rem, 2.7vw, 2rem)`, interlinea 1, tracking -.008em): il nome del servizio nella riga, affiancato dall'icona di linea.
- **Step title** (`clamp(1.5rem, 3vw, 2.25rem)`, interlinea 1, tracking -.008em): il mestiere di una tappa del percorso. **Sale fino a 2.25rem e non si ferma più in basso** perché a corpo minore le tre tappe si leggevano come un divisore grafico invece che come una sezione con un contenuto proprio.
- **Passo title** (`clamp(1.25rem, 2.3vw, 1.625rem)`, interlinea 1.02): i passi di «Come funziona», il livello minore di titolo.
- **Fascia voce** (`clamp(1.125rem, 2vw, 1.625rem)`, interlinea 1.1, tracking .005em, `white-space: nowrap`): le parole della fascia scorrevole. È l'unico uso di Anton con tracking positivo: in movimento le lettere condensate hanno bisogno di un filo d'aria in più.
- **Wordmark** (1.5rem, tracking .01em) e **Footer name** (1.375rem, tracking .01em): le due firme, in alto e in fondo. Sono gli unici due usi di Anton a misura fissa.

### Hierarchy (Barlow)
- **Lede** (`clamp(1.0625rem, 1.9vw, 1.3125rem)`, misura 42ch): il paragrafo d'apertura dell'hero, unico testo di corpo che sale oltre i 17px.
- **Section sub** (`clamp(1.0625rem, 1.6vw, 1.1875rem)`, misura 48ch): il paragrafo sotto un `h2` di sezione.
- **CTA sub** (1.125rem, misura 44ch): il sottotitolo della fascia contatti, a misura fissa perché lì il fondo è pieno e la colonna è già vincolata.
- **Body** (1.0625rem = 17px, interlinea 1.6): tutto il testo corrente. Le misure sono dichiarate per contesto: 60ch il testo di «Chi sono», 62ch la descrizione di una riga servizio, 34ch un passo di «come funziona», 32ch un passo del percorso (46ch sotto i 900px). **La descrizione della riga servizio resta a 17px anche su mobile**, dove è esplicitamente ridichiarata.
- **Step body** (`clamp(1.0625rem, 1.4vw, 1.125rem)`, misura 32ch): la descrizione di una tappa del percorso, cresciuta insieme al suo titolo. Condivide la scala con la citazione di una recensione.
- **Quote** (`clamp(1.0625rem, 1.4vw, 1.125rem)`, interlinea 1.6, colore calce, misura 42ch su desktop e 52ch sotto i 900px, `margin-bottom: 1.5rem`): il testo di una recensione. È l'unico testo di corpo in calce piena invece che in grigio voce. **La misura è 42ch e non più stretta per una ragione di contenuto:** le recensioni vere sono molto più lunghe dei testi provvisori che avevano dettato la misura iniziale, e a 34ch diventavano un muro di righe corte.
- **Meta** (1rem): i metadati del footer, la firma di una recensione (`.voce-chi`) e il testo dell'avviso. Sono a 16px e non a 15px come le altre etichette perché contengono informazioni che si leggono davvero — numero di telefono, attribuzione, istruzione operativa.
- **Label** (.9375rem = 15px, peso 500 o 600): navigazione, pulsante di chiamata nella barra in alto, note sotto le liste, riga della zona operativa, nota sotto l'hero.
- **Tag** (.8125rem = 13px, peso 600, maiuscolo, tracking .06em): solo l'etichetta «Esempio» sopra una recensione fittizia. È il gradino più piccolo della scala, giustificato dal fatto che è un'etichetta di servizio in maiuscolo spaziato, non un testo da leggere in sequenza.
- **Pill** (.875rem = 14px, peso 500): solo la pillola di disponibilità.
- **Pulsanti** (1.0625rem, peso 600, tracking .005em): mai in maiuscolo, mai in Anton. Vale anche per le due metà della barra fissa mobile.

### Il passo decorativo

Esiste **un solo valore tipografico fuori dalla scala leggibile**: le virgolette
decorative del pannello di una recensione, `\201C` a **6.5rem**. Va tenuto distinto dalla
gerarchia qui sopra, e per due motivi che sono decisioni, non sviste.

**Perché supera il tetto di 6rem del display.** Il display si ferma a 6rem e quel tetto
resta valido: 6.5rem non è testo. È una texture al 22% di opacità dietro il contenuto,
`pointer-events: none`, che nessuno legge come una parola. Misurarla contro la scala
tipografica sarebbe come misurare uno sfondo contro la scala dei titoli.

**Perché è in Barlow 700 e non in Anton.** È l'unico punto del sito in cui il font del
testo viene usato in grande, e la ragione è nella forma del glifo: in Anton le virgolette
sono due rettangoli pieni, e a quel corpo non si leggono come una citazione ma come un
errore di rendering. Barlow ha virgolette con una curva, che a 6.5rem diventano un segno
riconoscibile. La Regola Anton Dice, Barlow Spiega non è violata: qui Barlow non sta
dicendo niente, sta disegnando.

### Named Rules

**La Regola Anton Dice, Barlow Spiega.** Anton compare solo su titoli, wordmark, nome
del footer e numero di telefono, sempre in maiuscolo. Una didascalia, un'etichetta o un
pulsante in Anton sono un errore; un titolo in Barlow è un errore simmetrico.

**La Regola dello Zero Eyebrow.** Sopra i titoli non esiste nessuna etichettina
sovratitolo (nessun «I NOSTRI SERVIZI» in minuscolo spaziato). Una sezione si apre con
il suo `h2` e, al massimo, un paragrafo sotto. Il codice non contiene una sola classe
eyebrow e non va introdotta.

**La Regola dei Diciassette.** Il testo che il visitatore deve leggere per decidere non
scende mai sotto 1.0625rem (17px), a nessuna larghezza. Sotto i 17px vivono soltanto le
etichette di servizio (15px) e la pillola di stato (14px), che si capiscono anche senza
leggerle parola per parola. Se un testo di corpo ha bisogno di rimpicciolirsi per stare
nel layout, è il layout a essere sbagliato.

**La Regola dell'Interlinea Corta.** Ogni titolo in Anton ha interlinea tra .9 e 1.02,
sempre sotto l'unità. Le righe di un titolo devono quasi toccarsi.

## Layout

Il contenitore è unico e vale per tutte le sezioni: `max-width: {spacing.wrap}` centrato
con `margin-inline: auto`. Non esiste una griglia globale a colonne: ogni sezione dichiara
la propria, sempre a due o tre colonne al massimo.

Tre sole variabili governano lo spazio:
- **`--pad`** (`{spacing.pad}`) è il margine laterale della pagina, da 20px su telefono a 80px su schermi larghi. È il padding orizzontale di ogni sezione, della barra in alto e del footer.
- **`--wrap`** (`{spacing.wrap}`) è la larghezza massima della colonna di contenuto.
- **`--sec`** (`{spacing.sec}`) è il respiro verticale di una sezione, da 52px a 88px, applicato come padding verticale a percorso, servizi, chi sono, come funziona e recensioni. La fascia contatti usa invece la sua misura, `clamp(3rem, 7vw, 6rem)`.

  **Il valore è stato stretto, e il criterio è misurabile.** Con sezioni molto alte lo scorrimento si fermava sempre a metà di qualcosa e non si capiva dove finisse una sezione e iniziasse la successiva. Con il valore attuale, su un portatile da 768px di altezza ogni sezione sta in una schermata: percorso 517px, chi sono 669px, come funziona 510px, recensioni 746px, contatti 607px. **L'unica eccezione voluta è l'elenco dei servizi**, che è una lista e deve scorrere. Chi cambia `--sec` deve rifare questa verifica, non solo guardare se «respira».

Il blocco testa di sezione (`.sec-head`) stacca dal contenuto di `{spacing.sec-head}`.

**La fascia contatti esce dal contenitore.** È l'unica sezione a pieno viewport, senza
`max-width`. Per non perdere l'allineamento, il suo padding sinistro è calcolato:
`max(var(--pad), calc((100vw - var(--wrap)) / 2 + var(--pad)))`, così il bordo sinistro
del testo cade esattamente sulla stessa colonna del resto della pagina anche se il fondo
arancio arriva fino al bordo dello schermo.

**Griglie reali:**
- Percorso: tre colonne uguali (`repeat(3, 1fr)`), gap `clamp(2rem, 4vw, 3rem)`.
- Riga servizio: tre colonne `clamp(180px, 19vw, 280px) 1fr 44px` (miniatura, testo, freccia) — la miniatura è fluida e a 1366px di larghezza arriva a circa 260px, perché a 170px fissi le fotografie erano troppo piccole per leggersi; gap `clamp(1.25rem, 3vw, 2.5rem)`, con padding orizzontale 1rem compensato da `margin-inline: -1rem`, così il fondo dell'hover deborda oltre il testo ma i filetti restano allineati alla colonna.
- Chi sono: due colonne `minmax(0, .82fr) minmax(0, 1fr)`, foto a sinistra limitata a 27rem, gap fino a 5rem, allineate al centro. Il ritratto è in proporzione 5:6, non 4:5: contenuto apposta perché su un portatile da 768px la sezione entri quasi tutta in una schermata.
- Come funziona: tre colonne uguali con gap locale `clamp(2rem, 4vw, 3.5rem)`.
- Dicono di me: tre colonne uguali, gap `clamp(1.5rem, 3vw, 2.5rem)`, dentro lo stesso contenitore e con la stessa spaziatura verticale delle altre sezioni.
- Stacco fotografico: fuori dal contenitore e senza `max-width`, alto `clamp(190px, 25vw, 330px)`. Ce ne sono due, sempre fra due sezioni: tra Servizi e Chi sono, e tra Come funziona e Dicono di me.
- Fascia scorrevole: fuori dal contenitore e senza `max-width`, come i contatti. È l'unico elemento in `overflow: hidden` con una pista interna a `width: max-content`, cioè più larga del viewport per costruzione.
- Contatti: due colonne `minmax(0, 1.05fr) minmax(0, 1fr)`, testo a sinistra e fotografia a destra.

**La fascia scorrevole rompe il ritmo verticale apposta.** Sta subito dopo l'hero e prima del percorso, senza il `--sec` di respiro delle altre sezioni: il suo padding è `.85rem` verticali e `clamp(.625rem, 1.25vw, 1.125rem)` orizzontali per gruppo. È una striscia sottile, non una sezione.

**Hero:** altezza minima `100svh` (unità dinamica, non `vh`), contenuto ancorato in basso
con `align-items: flex-end`, padding superiore 8rem per lasciare passare la barra fissa.

### Breakpoints

Tre soglie, tutte `max-width`, ciascuna con una responsabilità precisa.

- **1080px** — «Chi sono» collassa a una colonna; la foto scende da 27rem a 26rem e il suo riquadro arancio si stringe da 18px a 14px di sfalsamento.
- **900px** — è la soglia mobile vera: sparisce la navigazione della barra in alto, percorso e passi diventano una colonna sola (gap fisso 2rem), il tratteggio fra i passi sparisce, la fascia contatti diventa una colonna con la fotografia spostata **sopra** il testo (`order: -1`), la descrizione dei passi del percorso allarga la misura a 46ch, e le recensioni passano a una colonna (gap 2rem) con la citazione che allarga la misura da 42ch a 52ch.
- **760px** — compare la barra fissa in basso (`display: grid`) e il body guadagna `calc(62px + env(safe-area-inset-bottom))` di padding inferiore, così la barra che cresce con la safe area dell'iPhone non mangia il footer; l'hero riduce il padding superiore a 6rem e quello inferiore a `calc(2.5rem + 62px)`; il velo dell'hero diventa più opaco (fino al 94% in basso) perché su schermo piccolo il testo copre più fotografia; il pulsante di chiamata in alto perde l'etichetta e diventa un quadrato pieno di 48×48px; i pulsanti di hero e contatti diventano a piena larghezza (`flex: 1 1 100%`) e centrati.
  **La riga servizio cambia impaginazione, non solo misura:** da tre colonne passa a una sola, con la miniatura che diventa una fascia `16 / 9` a tutta larghezza sopra il titolo, allineamento in alto (`align-items: start`), gap .9rem e padding `1.5rem 1rem`. Il CSS annota il perché: in colonna la miniatura quadrata galleggiava a metà di un testo alto il triplo. La freccia sparisce, l'icona di linea scende a 22px con gap .55rem, e la descrizione resta a 17px.

**La Regola del Pollice.** Sotto i 760px l'azione non è mai più lontana di un pollice: la
barra fissa in basso è sempre presente e i pulsanti nel flusso diventano bersagli a piena
larghezza. Ogni nuova sezione mobile deve rispettare i 62px di ingombro della barra più la
safe area.

## Elevation & Depth

**Questo sistema non usa ombre.** `box-shadow` non compare nemmeno una volta in
`style.css`, e il contratto di direzione lo vieta esplicitamente («Nessuna scheda con
ombra»). La profondità è ottenuta in tre modi, tutti piatti:

1. **Velatura fotografica.** L'hero sovrappone due gradienti sulla fotografia: uno verticale (dal 93% di nero in basso al 22% in alto) e uno orizzontale (dal 74% a sinistra al trasparente a destra), entrambi sul nero freddo `{colors.nero-velo}`. Il testo sta nell'angolo più scuro. La fotografia stessa è filtrata `contrast(1.04) saturate(.62) brightness(1.04)`: la desaturazione è intenzionale, perché una foto calda sotto un velo nero vira al fango.
2. **Filetti.** Le sezioni sono separate da `border-top: 1px solid {colors.filetto}`; le righe servizio da un filetto identico in basso. È il divisore standard del sistema.
3. **Vetro solo sulla barra in alto.** Quando la pagina scorre oltre 24px, la barra passa dal gradiente in dissolvenza su `{colors.nero-topbar}` a un vetro `rgba(22, 24, 26, .88)` con `backdrop-filter: blur(14px) saturate(1.2)` e un filetto inferiore. È l'unico `backdrop-filter` della pagina.

4. **Stratificazione tonale.** Il pannello di una recensione non usa un'ombra per staccarsi dal fondo: sale di un gradino di luminosità (`{colors.antracite-alto}` sopra `{colors.antracite}`) e ne sale un secondo in hover (`{colors.antracite-rialzato}`), accompagnato da un `translateY(-3px)` e da un bordo che si accende di arancio al 50%. È l'unica superficie del sistema che si comporta come una scheda, e lo fa restando piatta: il contratto di direzione vieta le schede **con ombra**, non le superfici tonali.

5. **Stacchi fotografici.** Due fasce a tutta larghezza separano le sezioni al posto del filetto: l'immagine è filtrata `saturate(.55) contrast(1.05) brightness(.72)` e coperta da uno `::after` che sfuma nel fondo pagina. Dopo uno stacco il filetto della sezione successiva viene tolto (`.stacco + section { border-top: none }`): il taglio fotografico *è* il divisore, e sommarli darebbe due separatori sovrapposti.

Una sesta forma di profondità è il **riquadro sfalsato** dietro il ritratto di «Chi
sono»: un bordo arancio al 55% posizionato in `inset: 18px -18px -18px 18px`, cioè
spostato in basso a destra rispetto alla foto. Non è un'ombra: è un contorno disegnato,
coerente con la logica dei tracciati sul muro.

### Named Rules

**La Regola Piatta.** Le superfici sono piatte a riposo e piatte in hover. Un cambio di
stato si esprime con colore, bordo, sfondo trasparente o un `translateY(-2px)`, mai con
un'ombra che appare.

**La Regola della Fascia Velata.** Una fotografia a tutta larghezza dentro una pagina
scura va tenuta sotto il livello di luminosità del contenuto, altrimenti compete con esso.
Nello stacco questo si ottiene in due passaggi: il filtro sull'immagine
(`brightness(.72)`, desaturata a .55) e la velatura sopra. **La velatura non sfuma solo
agli estremi, resta al 42% anche al centro**, ed è una correzione fatta dopo aver visto
l'alternativa sbagliata: con il solo centro scoperto, una foto chiara in mezzo a una
pagina antracite legge come una finestra ritagliata nel fondo, non come un respiro fra due
sezioni. Il gradiente va da `{colors.antracite}` pieno agli estremi a antracite al 42% fra
il 28% e il 72% dell'altezza.

## Shapes

Il raggio è quasi assente e volutamente meccanico: **3px** (`{rounded.sm}`) su pulsanti,
miniature, ritratto, riquadro icona dei passi e riquadro arancio sfalsato. È il raggio di
uno spigolo smussato, non di una card morbida. L'anello di focus usa 2px; la pillola di
disponibilità e il suo pallino sono le uniche forme completamente stondate (100px e 50%).

**Il quadratino arancio è il motivo ricorrente del sistema**, non una decorazione locale:
7×7px a spigolo vivo dopo il wordmark, 7×7px prima del nome in ogni firma di recensione,
e la stessa geometria ingrandita nei marcatori dei passi del percorso (12×12px, 16×16px
sul passo corrente). È lo stesso segno ogni volta — un quadrato pieno arancio senza
raggio — e serve a marcare l'inizio di qualcosa: il nome del sito, una tappa, una persona
che parla. Quando serve un nuovo indicatore puntuale, si usa questo, non un pallino né
un'icona.

Il tratteggio come **bordo** marca invece i contenuti non verificati: `border-style:
dashed` sul pannello di una recensione d'esempio, sul riquadro di avviso e sull'etichetta.

Le linee del sistema sono di tre tipi: il filetto continuo da 1px (divisori e bordi), la
sottolineatura da 3px sotto il numero di telefono grande, e il **tratteggio**, usato due
volte con due tecniche diverse: `repeating-linear-gradient(90deg, ... 0 5px, transparent
5px 11px)` per il collegamento fra i passi «come funziona», e un `border-bottom: 1px
dashed` sotto i segnaposto.

Le **icone** hanno due grammatiche distinte: piene per i pittogrammi di marca (WhatsApp,
telefono), a tratto per tutto il resto — spessore 1.5 sulle icone dei servizi, 1.6 su
freccia e passi, 1.7 sul telefono dei pulsanti ghost, 1.8 sul telefono della barra in
alto, sempre con giunzioni e terminali arrotondati.

**La Regola dei Tre Pixel.** Se un elemento ha bisogno di un raggio, il raggio è 3px. Se
sembra volerne di più, probabilmente non doveva essere una scatola.

**La Regola del Quadratino.** L'indicatore puntuale del sistema è un quadrato arancio
pieno a spigolo vivo. Ricorre nel wordmark, nelle tappe del percorso e nelle firme delle
recensioni; un nuovo indicatore che non sia quel segno spezza un motivo che tiene insieme
tre sezioni distanti.

## Components

### Buttons
- **Forma:** rettangolo appena smussato (3px), altezza minima 58px, padding orizzontale 1.6rem, icona 22px e gap .6rem, testo Barlow 600 a 17px. Mai maiuscolo.
- **WhatsApp (primario, su fondo scuro):** fondo arancio, testo e icona nero freddo. Hover: fondo arancio acceso. L'icona è un SVG a due tracciati: la bolla piena in nero e la «coda» interna ridipinta del colore di fondo (`.wa-tail`), così il pittogramma resta leggibile senza fori.
- **Chiama (ghost, su fondo scuro):** nessun fondo, bordo 1px `{colors.bordo-interattivo}`, testo calce, icona a tratto (`stroke: currentColor`, 1.7px). Hover: bordo calce piena e fondo bianco al 6%.
- **Varianti sul fondo arancio:** il primario si inverte — fondo `{colors.nero-su-arancio}`, testo `{colors.calce-su-nero}`, hover `{colors.nero-pieno}`; il ghost prende bordo `{colors.bordo-interattivo-cta}` e testo nero caldo, con hover a bordo pieno e fondo nero all'8%.
- **Stati comuni:** hover solleva di 2px (`translateY(-2px)`), `:active` riporta a zero. Transizione .2s su `background-color`, `border-color`, `color` e `transform`.
- **Sotto i 760px** i pulsanti dentro hero e contatti diventano a piena larghezza e centrati.

### Topbar
Barra fissa in alto (`z-index: 50`), alta circa 90px con padding `1rem var(--pad)` —
misura riflessa nello `scroll-margin-top: 90px` applicato a ogni elemento con `id`, così
i salti d'ancora non finiscono sotto la barra. A riposo è trasparente con un gradiente
`{colors.nero-topbar}` in dissolvenza generato da uno pseudo-elemento; dopo 24px di
scorrimento la classe `is-stuck` la rende vetro scuro sfocato e spegne il gradiente.
Contiene il **wordmark** in Anton 1.5rem con il quadratino arancio in coda, la navigazione
(Barlow 500, 15px, grigio navigazione, che in hover diventa calce con filetto arancio
sotto) e il **pulsante di chiamata** bordato `{colors.bordo-interattivo}` che in hover
prende bordo arancio e fondo arancio al 12%. Sotto i 760px quel pulsante perde
l'etichetta e diventa un quadrato pieno di 48×48px con l'icona centrata.

### Pillola disponibilità
Etichetta di stato in cima all'hero: bordo `{colors.filetto-forte}`, fondo antracite al
50%, raggio 100px, Barlow 500 a 14px. Il pallino da 9px è **arancio e fermo**, con un
anello statico di 1px arancio al 50% a `inset: -4px`. Il CSS annota perché: un pallino
verde che lampeggia è il codice visivo di «online adesso» e prometterebbe una reperibilità
che nessuno ha confermato. Il verde non esiste più nel sistema.

### Stacco fotografico
Fascia a tutta larghezza che separa due sezioni al posto di un filetto, alta
`clamp(190px, 25vw, 330px)` e in `overflow: hidden`. Ce ne sono due istanze: fra Servizi e
Chi sono, e fra Come funziona e Dicono di me.

L'immagine riempie la fascia in `object-fit: cover` ed è filtrata `saturate(.55)
contrast(1.05) brightness(.72)`; sopra, uno `::after` la vela con un gradiente verticale
che va da `{colors.antracite}` pieno agli estremi a antracite al 42% fra il 28% e il 72%
dell'altezza. Il risultato è un taglio nella pagina, non una fotografia incollata: il
motivo per cui la velatura copre anche il centro è nella Regola della Fascia Velata.

La fotografia è decorativa e ha `alt=""`: non aggiunge informazione, dà respiro. La sezione
che segue perde il proprio filetto superiore (`.stacco + section { border-top: none }`),
perché lo stacco è già il divisore.

### Fascia scorrevole
Striscia arancio piena subito sotto l'hero, chiusa sopra e sotto da un filetto
`{colors.bordo-fascia}`. Dentro, una **pista** (`.fascia-pista`) larga `max-content` che
contiene **due gruppi identici** di parole: i servizi, più «Preventivi gratuiti» e
«Milano e provincia», ciascuno seguito da una piccola stella piena da 16px in nero caldo
al 55% di opacità che fa da separatore. Le parole sono in Anton maiuscolo
(`{typography.fascia-voce}`) e non vanno mai a capo.

La pista scorre da `translateX(0)` a `translateX(-50%)` in 42 secondi, lineare, in loop
infinito. **Il ciclo è invisibile perché i due gruppi sono larghi esattamente uguale**
(2549px ciascuno su 5098 totali): a metà corsa la pista è tornata esattamente al punto di
partenza. È il motivo per cui i gruppi vanno tenuti identici — cambiare le parole di uno
solo, o aggiungerne una a uno solo, fa comparire un salto visibile a ogni giro.

Si mette in pausa al passaggio del mouse (`animation-play-state: paused`) e con
`prefers-reduced-motion` si ferma del tutto (`animation: none`). **Non sparisce e non si
nasconde:** il testo resta lì, leggibile e fermo. Il markup ha `aria-hidden="true"`
perché ripete servizi già elencati per esteso nella sezione sotto: è ornamento tipografico,
non informazione.

### Righe servizio (componente firma)
Il rifiuto della griglia di schede è materializzato qui. Ogni servizio è un `<a>` che
occupa tutta la riga: miniatura fluida `clamp(180px, 19vw, 280px)` in rapporto 3:2, testo,
freccia da 26px, separati da un filetto sottile. **La miniatura deve reggere la lettura in
piccolo:** è il criterio che ha fatto crescere la colonna e che governa la scelta delle
fotografie — un soggetto chiaro e ravvicinato, non una scena. La testata del testo (`.row-head`) è una riga flex che affianca
un'**icona di linea** (`.row-ico`, 30px, tratto 1.5, arancio, terminali arrotondati) al
titolo, con gap .8rem; sotto i 760px l'icona scende a 22px e il gap a .55rem.

In hover la riga cambia **tre cose sole**: fondo bianco al 3.5%, titolo arancio,
miniatura che scala a 1.05 e freccia che diventa arancio e scivola di 5px a destra. Le
durate sono .25s per fondo, colore e freccia e .5s per la scala della foto. Il filtro
della miniatura (`saturate(.9) brightness(.97)`) resta costante: è un trattamento
fotografico permanente, non uno stato — la transizione su `filter` è ancora dichiarata
nella proprietà `transition` ma nessuna regola la attiva.

Ogni riga punta a WhatsApp con il messaggio già precompilato per quel servizio.

### Passi del percorso
Tre passi disposti come una linea del tempo: ogni passo è sormontato da un filetto da 1px
e da un marcatore quadrato da 12px in alto a sinistra. Il passo corrente (`.is-now`, cioè
«Idraulico») è l'unico marcato: filetto arancio, marcatore ingrandito a 16px e titolo
arancio. **Il blocco è stato rinforzato apposta** — titolo fino a 2.25rem, descrizione fino
a 1.125rem su misura 32ch, marcatori più grandi — perché alle dimensioni precedenti le tre
tappe si leggevano come un divisore decorativo fra due sezioni invece che come il racconto
che porta la prova del mestiere. Quando i passi entrano nello schermo, il filetto si traccia da sinistra
(`scaleX(0) → scaleX(1)`, .7s) con ritardo di .14s e .28s sul secondo e terzo.

### Passi «come funziona»
Tre passi con riquadro icona da 58px (bordo `{colors.filetto-forte}`, raggio 3px, fondo
antracite, icona a tratto arancio da 30px con spessore 1.6), titolo in Anton e descrizione
a 34ch. I passi sono collegati da una linea tratteggiata che parte da 74px e arriva fino al
gap successivo; sparisce sotto i 900px insieme alla disposizione a tre colonne.

### Dicono di me (recensioni)
Tre voci in griglia, ciascuna un **pannello**: superficie `{colors.antracite-alto}`, bordo
1px `{colors.filetto}`, raggio 3px, padding `clamp(1.5rem, 2.4vw, 2rem)`, `overflow:
hidden`. La sezione si apre con il solo `h2`, **senza paragrafo di sottotitolo**: le
recensioni si presentano da sole.

Il pannello è una **colonna flex** e la firma ha `margin-top: auto`. È il meccanismo che
tiene insieme la fila: le citazioni hanno lunghezze diverse, ma le firme si allineano tutte
sullo stesso filo in fondo e i tre pannelli restano della stessa altezza (misurati: 483px
ciascuno). Chi aggiunge una quarta recensione non deve pareggiare i testi a mano.

In hover il pannello si alza: bordo arancio al 50%, fondo `{colors.antracite-rialzato}`,
`translateY(-3px)`, tutto in .25s.

**Le virgolette decorative.** `.voce::before` porta una `\201C` in Barlow 700 a 6.5rem,
interlinea 1, arancio al 22%, ancorata in alto a destra e resa inerte con `pointer-events:
none`; l'`overflow: hidden` del pannello la ritaglia sul bordo. Le ragioni della scelta —
perché Barlow e non Anton, perché 6.5rem non conta come scala tipografica — sono in
Typography, «Il passo decorativo».

Dentro, nell'ordine: cinque **stelle** piene da 19px in arancio (il contenitore ha
`role="img"` e `aria-label="Cinque stelle su cinque"`, perché cinque SVG separati non
dicono nulla a uno screen reader), la citazione in `blockquote` (`{typography.quote}`,
calce piena, 42ch su desktop e 52ch sotto i 900px) e il blocco firma `.voce-chi`.

**Il blocco firma** è separato dalla citazione da un `border-top` 1px `{colors.filetto}` e
si sviluppa su due righe a 1rem: il `<b>` con il nome in calce piena, peso 600, preceduto
dal quadratino arancio 7×7px del sistema; sotto, uno `<span>` con zona e tipo di lavoro in
grigio voce, rientrato di 1.25rem così da allinearsi al nome e non al quadratino.

**La variante `.voce.esempio`** non ha più il filetto giallo: è lo stesso pannello con
`border-style: dashed` e bordo giallo al 55%. Allo stato attuale non è in uso — le tre
recensioni in pagina sono state fornite come parole di clienti reali e sono pubblicate
alla lettera — ma la variante resta definita per il giorno in cui servirà mostrare un
testo provvisorio.

### Barra fissa mobile
Compare solo sotto i 760px (`z-index: 60`, sopra la barra in alto). Due metà uguali:
WhatsApp su fondo arancio con testo nero freddo, Chiama su fondo `{colors.antracite-barra}`
con testo calce. Altezza minima 62px per metà, filetto superiore `{colors.ombra-barra}` e
`padding-bottom: env(safe-area-inset-bottom)` per gli iPhone con indicatore home.

### Famiglia dei segnaposto
Quattro componenti condividono lo stesso giallo e lo stesso tratteggio perché fanno lo
stesso mestiere: dire «questo contenuto non è vero e va sostituito prima di pubblicare».
Sono redazionali, non decorativi, e si rimuovono sostituendo il contenuto — mai togliendo
lo stile. Si distinguono per la scala di ciò che devono marcare.

**Stato d'uso attuale.** Solo `.ph` ha istanze in pagina (cognome, partita IVA, numero di
telefono). `.avviso`, `.etichetta` e `.voce.esempio` restano definiti nel CSS ma non sono
usati da nessun elemento: le recensioni non sono più provvisorie. Non vanno rimossi come
codice morto — sono l'infrastruttura che rende possibile pubblicare di nuovo un testo
provvisorio senza doverla reinventare, e il CSS lo annota esplicitamente.

- **`.ph` — il dato mancante.** Marca una parola dentro una frase: fondo giallo al 16%, testo giallo, bordo inferiore tratteggiato giallo al 65%, peso 600, `white-space: nowrap`. Copre `[COGNOME]`, `[P.IVA]`, il numero di telefono e l'intera firma di ogni recensione d'esempio. Ha due vesti alternative: **dentro la fascia arancio** diventa nero caldo (fondo al 14%, tratteggio al 60%) per restare leggibile sul fondo chiaro; **dentro il numero di telefono grande** perde il tratteggio, che collideva con la sottolineatura da 3px del link, e stringe il padding a .18em.
- **`.etichetta` — il blocco fittizio.** Pastiglia «ESEMPIO» da mettere sopra un contenuto d'esempio: fondo giallo al 16%, bordo tratteggiato giallo al 55%, raggio 2px, testo giallo pieno in `{typography.tag}`. Marca un contenuto intero, non una parola.
- **`.voce.esempio` — il pannello fittizio.** La stessa pastiglia applicata alla cornice: bordo del pannello tratteggiato e giallo al 55%, così una recensione d'esempio si riconosce da lontano prima di leggere qualunque testo.
- **`.avviso` — l'istruzione a chi pubblica.** Riquadro con bordo tratteggiato giallo al 55%, fondo giallo al 7%, raggio 3px, testo `{colors.giallo-avviso}` a 1rem su misura 62ch, con lo `strong` d'apertura in giallo pieno. Non marca un contenuto: spiega quale contenuto va sostituito e dove sono le istruzioni per farlo. Ha margine superiore negativo (`-1rem`) per agganciarsi alla testa di sezione invece di galleggiare.

### Skip link
Fuori schermo (`left: -9999px`) fino al focus, poi ancorato in alto a sinistra su fondo
arancio con testo antracite. Nel codice punta a `#servizi`.

## Do's and Don'ts

### Do:
- **Do** usare le tre variabili di spazio `--pad`, `--wrap`, `--sec` per qualsiasi nuova sezione, invece di inventare padding numerici.
- **Do** tenere Anton in maiuscolo con interlinea sotto l'unità, e Barlow per tutto il resto.
- **Do** riservare l'arancio alle azioni e ai segnali di stato (Regola del Segnale).
- **Do** usare `--edge` / `--edge-cta` per il bordo di qualsiasi comando, e `--line-2` solo per i segni che non si toccano (Regola del Bordo Che Si Vede).
- **Do** invertire i neri quando si lavora sulla fascia arancio: testo, pulsante primario e anello di focus diventano `{colors.nero-su-arancio}` (Regola dei Due Neri).
- **Do** separare i blocchi con un filetto da 1px al 13% di bianco, non con una scatola.
- **Do** tenere ogni testo di corpo a 17px o più, a qualunque larghezza (Regola dei Diciassette).
- **Do** dare a ogni bersaglio tattile almeno 48px per lato, e 58px ai pulsanti nel flusso.
- **Do** marcare ogni contenuto non ancora vero con il marcatore della scala giusta — `.ph` per un dato, `.etichetta` per un blocco, `.avviso` per l'istruzione a chi pubblica (Regola del Contenuto Marcato).
- **Do** modificare entrambi i gruppi della fascia scorrevole quando se ne cambia il contenuto, altrimenti il ciclo diventa visibile (Regola del Ciclo Invisibile).
- **Do** tenere tutte le risorse locali: font in `fonts/`, immagini in `img/`, icone SVG inline nel markup.

### Don't:
- **Don't** introdurre dipendenze esterne a runtime — nessun CDN, nessun Google Fonts, nessuna libreria di icone, nessun analytics. È un vincolo di prodotto oltre che visivo.
- **Don't** trasformare i servizi in una griglia di schede identiche icona+titolo+testo: il contratto di direzione la rifiuta esplicitamente e le righe larghe sono il componente firma del sito.
- **Don't** mettere un'etichettina sovratitolo (eyebrow) sopra un `h2` (Regola dello Zero Eyebrow).
- **Don't** aggiungere `box-shadow`: oggi il valore ricorre zero volte e le superfici sono piatte per scelta (Regola Piatta).
- **Don't** usare gradienti sul testo; i gradienti esistono solo come velo sulle fotografie, come tratteggio e come dissolvenza della barra in alto a riposo.
- **Don't** aumentare il raggio oltre i 3px, con l'unica eccezione della pillola di disponibilità (Regola dei Tre Pixel).
- **Don't** mettere in loop qualcosa che afferma uno stato in tempo reale — in particolare non va reintrodotto un indicatore di disponibilità che pulsa, perché prometterebbe una reperibilità non confermata. Il loop decorativo della fascia è ammesso proprio perché non afferma nulla (Regola del Loop Onesto).
- **Don't** usare il verde: è stato rimosso dal sistema insieme al pallino lampeggiante.
- **Don't** far scendere un testo di corpo sotto i 17px per farlo stare nel layout.
- **Don't** introdurre un form di contatto: il sito non ha backend e il primo contatto è per progetto WhatsApp o telefono.
- **Don't** pubblicare le tre recensioni d'esempio come se fossero vere, né togliere l'etichetta «Esempio», il filetto giallo o l'avviso per farle sembrare autentiche: vanno sostituite con recensioni di clienti veri o rimosse del tutto.
- **Don't** inventare numeri di clienti, tempi di intervento o promesse di reperibilità: non esistono dati a supporto e non c'è un componente per mostrarli.

## Accessibility

*(Sezione fuori dalle otto canoniche: raccoglie ciò che il codice garantisce oggi, perché
è un vincolo di prodotto dichiarato.)*

**Garantito dal codice:**
- **Corpo del testo a 17px** (`1.0625rem`) di base, con interlinea 1.6, **a ogni larghezza**: la descrizione delle righe servizio è ridichiarata a 17px sotto i 760px, e non esiste più nessuna soglia che rimpicciolisca un testo. I metadati del footer sono a 16px perché contengono il numero di telefono.
- **Bersagli tattili:** pulsanti a 58px di altezza minima, barra fissa mobile a 62px per metà, pulsante di chiamata nella barra in alto a 48×48px su mobile, riga servizio con padding verticale da 20 a 28px su una superficie a piena larghezza.
- **Bordi dei comandi sopra 3:1:** `--edge` (bianco al 46%) vale circa 4.5:1 sull'antracite e `--edge-cta` (nero caldo al 64%) circa 3.4:1 sull'arancio, entrambi sopra la soglia di WCAG 1.4.11. Il filetto al 28% resta solo su elementi non interattivi.
- **Focus visibile e adattato al fondo:** `:focus-visible` disegna un contorno da 2px con `outline-offset: 3px` e raggio 2px; è in calce sul fondo scuro e diventa `{colors.nero-su-arancio}` dentro la fascia arancio, dove il bianco sarebbe sceso sotto 3:1.
- **Skip link** in cima al documento, invisibile finché non riceve il focus.
- **Contrasto del testo:** calce su antracite e grigio voce su antracite superano ampiamente 4.5:1; il nero su arancio della fascia contatti è attorno a 6:1. Il testo dell'hero non poggia sulla fotografia nuda ma sul velo, che sotto i 760px viene reso ancora più opaco proprio per questo.
- **Safe area:** sotto i 760px il body riserva `calc(62px + env(safe-area-inset-bottom))` in basso, così la barra fissa non copre il footer sugli iPhone con indicatore home.
- **L'unico movimento continuo è governabile e non informativo:** la fascia scorrevole si mette in pausa in hover, si ferma del tutto con `prefers-reduced-motion` restando leggibile (`animation: none`, non `display: none`), ed è `aria-hidden="true"` perché ripete servizi già elencati per esteso poco sotto.
- **Le cinque stelle di una recensione sono un'immagine sola:** il contenitore `.stelle` ha `role="img"` e `aria-label="Cinque stelle su cinque"`, così uno screen reader annuncia il voto invece di cinque SVG muti.
- **`prefers-reduced-motion: reduce`** azzera globalmente animazioni e transizioni (durata .001ms, una sola iterazione), riporta `scroll-behavior` ad `auto` e soprattutto **rivela subito lo stato finale**: gli elementi `[data-rise]` partono già opachi e in posizione, e i filetti del percorso partono già tracciati. Lo stesso controllo è ripetuto in JavaScript, che con moto ridotto applica direttamente le classi `is-in` senza attendere né osservatori né frame.
- **`html.anim`** viene aggiunto da uno script inline nel `<head>`: senza JavaScript la classe non esiste, quindi tutte le regole d'ingresso decadono e la pagina è visibile e completa. Nessun contenuto dipende da JS.
- **Semantica:** `lang="it"`, percorso e passi sono `<ol>`, i servizi una `<ul>` di link, le icone decorative hanno `aria-hidden="true"`, navigazione e barra rapida hanno `aria-label`.

**Non deciso / non garantito (da non spacciare per regola):**
- Le etichette di servizio restano a 15px (navigazione, note sotto le liste, nota dell'hero, zona operativa) e la pillola a 14px. La deroga per il testo non essenziale non è mai stata formalizzata come regola scritta, anche se il codice la applica con coerenza.
- Lo skip link punta a `#servizi` e non all'inizio del contenuto (`#top`): salta l'hero, cioè il blocco che contiene le due azioni principali.
- Non è stata definita alcuna variante ad alto contrasto (`prefers-contrast`) né un tema chiaro: il sito esiste solo in versione scura.

## Motion

*(Sezione fuori dalle otto canoniche: il formato non prevede un gruppo motion, ma il
sistema ne ha uno esplicito e vale la pena registrarlo per intero.)*

Esiste un solo easing in tutto il progetto: **`--ease: cubic-bezier(.16, .84, .34, 1)`**,
una curva che parte veloce e si posa. Non ce ne sono altri, e non vanno aggiunti.

Il foglio di stile contiene **un solo `@keyframes`**, `scorri`, che muove la fascia dei
servizi. Tutto il resto è una transizione legata a un'azione dell'utente o all'ingresso di
un elemento nello schermo, e finisce.

**I momenti autorizzati sono cinque, e nient'altro:**
1. **L'ingresso dell'hero** — un solo momento orchestrato, non un effetto ripetuto. Gli elementi `[data-rise]` salgono di 18px e passano da opacità 0 a 1 in .8s, con ritardi di .09s / .18s / .27s / .36s per pillola, titolo, lede, pulsanti e nota. Parte al secondo `requestAnimationFrame` dopo il caricamento, una volta sola.
2. **I filetti del percorso** — si tracciano da sinistra in .7s quando il passo entra nello schermo (`IntersectionObserver`, soglia .35, `rootMargin: 0px 0px -8% 0px`), con ritardi di .14s e .28s. L'osservatore smette di guardare l'elemento appena l'ha rivelato: nessun ritorno indietro allo scroll inverso.
3. **La barra in alto** — transizione .3s su fondo, bordo e sfocatura quando supera i 24px di scorrimento.
4. **Gli hover** — .2s sui pulsanti (colore, bordo, `translateY(-2px)`), .25s su fondo della riga, colore del titolo e freccia, .5s sulla scala della miniatura.
5. **La fascia scorrevole** — `scorri`, 42s `linear` in loop infinito, da `translateX(0)` a `translateX(-50%)`. È l'unico movimento continuo e l'unica animazione non governata da `--ease`: una corsa costante non deve accelerare né rallentare, altrimenti si nota il ciclo. Si mette in pausa in hover e si ferma del tutto con moto ridotto.

Lo scorrimento agli ancoraggi è morbido (`scroll-behavior: smooth`) e riportato ad `auto`
con moto ridotto.

**La Regola del Momento Unico.** L'ingresso della pagina è un evento solo, in cima.
Nessuna sezione più in basso deve entrare in dissolvenza allo scroll: sotto l'hero l'unico
movimento consentito è il tracciamento dei filetti del percorso.

**La Regola del Loop Onesto.** Il movimento continuo è ammesso quando è decorativo,
vietato quando implica uno stato in tempo reale. La fascia che scorre elenca servizi: non
afferma nulla che possa essere vero o falso in questo istante, ed è marcata
`aria-hidden` proprio perché è ornamento. Il pallino di disponibilità che pulsava è stato
fermato per la ragione opposta: un lampeggio è il codice visivo di «online adesso» e
prometteva una reperibilità che nessuno ha confermato. **Il discrimine non è "quanto si
muove", è "che cosa sta dicendo".** Prima di aggiungere un loop, chiedersi se un
visitatore potrebbe leggerlo come un'informazione sul presente; se sì, non va aggiunto.

**La Regola del Ciclo Invisibile.** Un'animazione in loop non deve mai mostrare la
propria giuntura. Nella fascia questo è garantito da due gruppi di contenuto larghi
esattamente uguale, che rendono `translateX(-50%)` identico al punto di partenza:
qualunque modifica al contenuto va fatta su entrambi i gruppi.

**La Regola del Doppio Freno.** Ogni comportamento in movimento è disattivato due volte:
dal CSS con `prefers-reduced-motion` e dal JavaScript che legge lo stesso media query e
applica direttamente lo stato finale. Un nuovo comportamento deve superare entrambi i
freni e, in loro assenza, deve degradare mostrando il contenuto, mai nascondendolo.

## Direction Contract

Il DIRECTION CONTRACT vive come commento HTML in cima al `<body>` di `index.html` ed è il
patto della direzione, non una nota di lavoro. Riportato per intero:

- **THESIS** — «Un capocantiere che ha aggiunto un secondo mestiere, non un tuttofare improvvisato. Rifiuta la griglia di sei schede identiche icona+titolo+testo: i servizi sono un cartello di cantiere, righe larghe che si leggono in scorrimento col pollice.»
- **OWN-WORLD** — «antracite #16181A, arancio segnaletica #F26522, Anton in maiuscolo per le affermazioni, Barlow per la voce parlata, filetti sottili come tracciati sul muro, foto a pieno sanguinamento velate di nero. Nessuna scheda con ombra, nessun gradiente di testo.»
- **STORY** — «capisce in tre secondi che uno solo copre tutta la casa, crede al percorso muratore-capo squadra-idraulico, scrive su WhatsApp con la foto del guasto.»
- **FIRST VIEWPORT** — «foto di cantiere a schermo pieno, in basso a sinistra il segnale di disponibilita, il titolo in Anton su tre righe, i due pulsanti WhatsApp e Chiama in fila, la riga del preventivo gratuito sotto.»
- **FORM** — «direzione fissata dall'utente in fase di brief (antracite + arancio, artigiano moderno), quindi nessun sorteggio di concept: una direzione pinnata batte il roll.»
- **FINISH** — «unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md»

**Verifica del contratto contro il codice.** Tutte le clausole risultano rispettate: i
colori dichiarati sono esattamente quelli in `:root`; i servizi sono righe e non schede;
`box-shadow` ricorre zero volte; nessun testo usa `background-clip: text`; il primo
viewport contiene, nell'ordine e nella posizione dichiarati, il segnale di disponibilità
in basso a sinistra, il titolo su tre righe, i due pulsanti in fila e la nota sul
preventivo gratuito.

**Scarti già chiusi dal codice** (erano annotati qui, ora non lo sono più): il minimo di
17px per il testo su mobile è rispettato ovunque; il pulsante di chiamata in alto è a
48×48px; l'anello di focus ha una variante scura per la fascia arancio; i bordi dei
comandi sono passati sopra 3:1.

**Scarti ancora aperti** (registrati, non risolti):
- Il vincolo tecnico di prodotto parla di «font di sistema»; il codice self-hosta invece Anton e quattro tagli di Barlow in `fonts/`. Il vincolo sostanziale (nessuna dipendenza esterna a runtime) è rispettato, ma la lettera del documento no.
- Lo skip link punta a `#servizi` e non all'inizio del contenuto (`#top`): salta l'hero, cioè il blocco che contiene le due azioni principali.
- La transizione su `filter` è ancora dichiarata nella miniatura della riga servizio, ma nessuna regola cambia più il filtro in hover: è una dichiarazione inerte.
