# Sito vetrina — Gabriele, tuttofare per la casa

**Data:** 2026-08-23
**Stato:** approvato, in implementazione

## Obiettivo

Una pagina web che convinca chi ha già sentito il nome di Gabriele a scrivergli su
WhatsApp. Non è un canale di acquisizione: è il posto dove atterra chi arriva dal
passaparola, da un biglietto da visita o dal profilo Google, e dove decide se
fidarsi.

L'unica azione che il sito deve produrre è un contatto. Tutto il resto è contorno.

## Chi è

Gabriele `[COGNOME]`, Milano e provincia.

Vent'anni in imprese edili come muratore, poi capo squadra, quindi responsabile di
cantiere. In seguito si è specializzato in idraulica: caldaie, impianti, bagni. Oggi
copre da solo tutto ciò che riguarda la costruzione e la riparazione di una casa.

Il posizionamento scelto è **tuttofare completo**: un solo referente per tutta la
casa, invece di chiamare tre artigiani diversi. L'idraulica è il primo servizio in
elenco perché è il più cercato, ma non è il titolo.

Dati confermati dal committente:
- Sopralluogo e preventivo **gratuiti**
- **Disponibile per urgenze**

Dati ancora da raccogliere, a segnaposto nel sito:
- Cognome → `[COGNOME]`
- Partita IVA → `[P.IVA]` (da rimuovere se non ce l'ha)
- Numero di telefono → `+39 XXX XXX XXXX`

## Approccio

Pagina singola statica: HTML, CSS e una ventina di righe di JavaScript. Nessun
framework, nessun build, nessuna dipendenza esterna a runtime.

Le alternative scartate:

- **Multi-pagina** (home / servizi / chi sono / contatti): meglio per il
  posizionamento su Google a lungo termine, ma richiede testi veri e distinti per
  ogni pagina, che oggi non esistono. Resta come evoluzione futura.
- **Framework** (Astro, Next.js): nessun vantaggio a questa scala, e renderebbe
  impossibile a un non sviluppatore cambiare un numero di telefono.

Il vincolo che guida tutto: Gabriele deve poter aggiornare il sito aprendo un file
di testo, e chiunque deve poterlo pubblicare senza sapere cos'è un terminale.

## Struttura della pagina

Le sezioni sono nell'ordine in cui un cliente si convince.

1. **Hero** — a tutta schermata, foto di cantiere scurita. Nome, titolo
   "Un solo artigiano per tutta la casa", i mestieri in una riga, il segnale di
   disponibilità per le urgenze, i due pulsanti WhatsApp e Chiama.
2. **Barra di fiducia** — tre affermazioni secche: 20+ anni di cantiere, ex capo
   squadra muratori, specializzato in idraulica e caldaie. È ciò che distingue
   Gabriele da un tuttofare qualunque.
3. **Servizi** — sei schede con foto: idraulica e caldaie, bagni e ristrutturazioni,
   muratura e cartongesso, piastrelle e pavimenti, riparazioni e piccoli lavori,
   tinteggiatura e finiture.
4. **Chi è Gabriele** — foto e testo sul percorso muratore → capo squadra →
   idraulico. È la sezione che vende la fiducia.
5. **Come funziona** — tre passi: scrivi su WhatsApp con una foto del problema →
   sopralluogo e preventivo gratuiti → lavoro finito e pulito.
6. **Chiusura** — fascia con foto, numero grande, i due pulsanti, zona servita in
   una riga.
7. **Footer** — nome, P.IVA, zona.
8. **Barra fissa** — su mobile, WhatsApp e Chiama sempre visibili in basso.

"Sopralluogo e preventivo gratuiti" compare in tre punti (barra di fiducia, passo 2,
chiusura): è il motivo per cui una persona indecisa scrive invece di lasciar perdere,
e vale la ripetizione.

## Aspetto

- Fondo antracite `#16181A`, superfici `#1F2225`, accento arancio cantiere `#F26522`
- Testo bianco su fondo scuro, grigio chiaro `#B4B8BC` per i paragrafi
- Font di sistema: nessuna chiamata a Google Fonts, quindi nessuna dipendenza
  esterna e caricamento istantaneo
- Foto grandi con velatura scura, così il testo sopra resta leggibile
- Animazioni minime: le sezioni entrano con una dissolvenza allo scroll, disattivata
  se il sistema dichiara `prefers-reduced-motion`

Mobile-first: la maggior parte dei visitatori arriverà da un link WhatsApp aperto sul
telefono.

## Contatti

Un solo numero, usato in tre modi:

- `https://wa.me/39XXXXXXXXXX` per WhatsApp
- `tel:+39XXXXXXXXXX` per la chiamata diretta
- il numero in chiaro, leggibile, nella fascia di chiusura

**Niente form di contatto.** Su un artigiano, WhatsApp con la foto del problema batte
qualsiasi modulo: il cliente fotografa la perdita e Gabriele capisce subito se è
lavoro suo. Un form richiederebbe anche un servizio esterno per l'invio, quindi una
dipendenza e un punto di rottura in più.

**Niente analytics**, così non serve il banner dei cookie.

## Immagini

Otto foto stock scaricate da Pexels/Unsplash, con licenza libera anche per uso
commerciale, salvate in `img/` perché il sito non dipenda da server di terzi.

Sono foto stock, non lavori di Gabriele. Vanno sostituite appena ha cinque o sei foto
dei suoi cantieri: le foto vere convertono molto meglio.

Non vengono inventate recensioni, clienti o numeri di lavori svolti. Se Gabriele ha
testimonianze reali, si aggiungono dopo.

## File

```
index.html      struttura e testi
style.css       stile
script.js       menu mobile, dissolvenza allo scroll
img/            otto foto
LEGGIMI.md      come cambiare numero, testi e foto; come pubblicare
```

## Verifica

- Rendering a 390px (telefono), 768px (tablet) e 1440px (desktop) via Playwright
- Tutte le immagini caricano, nessun errore in console
- I link `wa.me` e `tel:` hanno la forma corretta
- La barra fissa non copre contenuto in fondo alla pagina
- Contrasto del testo sulle foto sufficiente a essere letto

## Fuori perimetro

Non fanno parte di questo lavoro, ma sono il seguito naturale:

- **Profilo dell'attività su Google** con recensioni vere. Su un artigiano locale
  porta più contatti del sito di un fattore 5-10. È l'azione a ritorno più alto e
  costa zero.
- Dominio `.it` (10-15 €/anno) e pubblicazione su hosting statico gratuito.
- Foto reali dei cantieri al posto dello stock.
- Eventuale passaggio a multi-pagina quando ci sarà abbastanza contenuto vero.
