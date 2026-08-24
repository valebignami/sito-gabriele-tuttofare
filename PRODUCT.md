# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

static HTML/CSS/JS — nessun framework, nessun build, nessuna dipendenza a runtime.
Scelto con l'utente: il committente deve poter cambiare un numero di telefono
aprendo un file di testo, e chiunque deve poter pubblicare il sito su hosting
statico gratuito senza usare un terminale.

## Users

Chi ha un problema in casa a Milano e provincia — una perdita, una caldaia ferma, un
bagno da rifare, un muro da sistemare — e ha ricevuto il nome di Gabriel dal
passaparola, da un biglietto da visita o dal profilo Google. Arriva quasi sempre da
smartphone, spesso con un problema urgente in corso, e sta decidendo in pochi secondi
se questa persona è affidabile abbastanza da contattarla.

Fascia d'età ampia: molti over 50, che preferiscono telefonare invece di scrivere.

## Product Purpose

Trasformare un nome sentito di sfuggita in un contatto WhatsApp o in una telefonata.
Il sito ha successo quando il visitatore scrive o chiama; non ha nessun altro
obiettivo.

Confermato con il committente: il sito NON è un canale di acquisizione. L'acquisizione
passerà dal profilo Google con recensioni vere. Il sito è la destinazione che rende
credibile quel profilo e il passaparola.

## Positioning

Un solo professionista per tutta la casa. Gabriel copre da solo idraulica, caldaie e
condizionatori, muratura, piastrelle, cartongesso, riparazioni e finiture: il cliente
non deve coordinare tre mestieri diversi.

Il percorso professionale è la prova che nessun concorrente può copiare: vent'anni in
imprese edili come muratore, poi capo squadra e responsabile di cantiere, quindi
specializzazione in idraulica e caldaie. Non è un tuttofare improvvisato: è un
capocantiere che ha aggiunto un secondo mestiere.

## Operating Context

- Il primo contatto avviene su WhatsApp, tipicamente con la foto del problema. Il
  cliente fotografa la perdita, Gabriel capisce subito se è lavoro suo. Questo batte
  qualsiasi form di contatto ed è il motivo per cui il sito non ne ha uno.
- Zona operativa: Milano e provincia.
- Sopralluogo e preventivo gratuiti (confermato).
- Disponibile per urgenze (confermato). Non è confermata la reperibilità 24h né una
  finestra di intervento garantita: il sito non deve prometterle.

## Capabilities and Constraints

Servizi confermati: idraulica, caldaie e condizionatori; bagni e ristrutturazioni;
muratura e cartongesso; piastrelle e pavimenti; riparazioni e piccoli lavori;
tinteggiatura e finiture.

Dati reali, confermati dal committente e pubblicati:
- nome e cognome → **Gabriel Calasi**
- cellulare → **+39 320 417 7267**, usato per WhatsApp, `tel:` e in chiaro

Unico dato ancora ignoto, da tenere come segnaposto evidente e mai inventare:
- partita IVA, se esiste → `[P.IVA]`

Questione aperta, sollevata al committente e non ancora risolta: in Italia gli
interventi sul circuito refrigerante dei condizionatori richiedono la certificazione
F-GAS (patentino). Il sito dichiara i condizionatori tra i servizi su richiesta
esplicita del committente; va verificato che Gabriel sia certificato, altrimenti la
voce va limitata alla parte non soggetta a certificazione.

Vincoli tecnici: nessuna dipendenza esterna a runtime — i caratteri sono salvati nel
progetto, non chiamati da Google Fonts, e le immagini sono locali; nessun analytics,
così non serve il banner cookie; nessun backend, quindi nessun form.

## Brand Commitments

Nome usato: **Gabriel** (non "Gabriele" — confermato dal committente). Cognome
Calasi. Nessun logo, nessun marchio esistente.

Vincolo visivo posto dall'utente e vincolante: fondo scuro antracite con accento
arancio cantiere — "artigiano moderno", che si distingua dai siti da idraulico
standard senza diventare aziendale o freddo.

Tono: concreto, diretto, da persona che lavora con le mani. Niente linguaggio
commerciale gonfiato.

Lessico vincolante, scelto dal committente: si dice **professionista**, mai
"artigiano". Vale per i testi del sito e per qualsiasi materiale futuro.

Si dà del **tu**, mai del lei. Anche i messaggi WhatsApp precompilati sono in
seconda persona singolare. Scelta esplicita del committente.

## Evidence on Hand

**Tre recensioni reali**, fornite dal committente e confermate come parole vere di
clienti veri. Sono pubblicate alla lettera nella sezione "Dicono di me":

- Marco P., Cinisello Balsamo — riparazione caldaia d'urgenza di sabato mattina
- Silvia R., Milano — rifacimento completo del bagno
- Giuseppe T., Sesto San Giovanni — riparazioni e manutenzioni ricorrenti

Vanno citate testualmente e mai modificate: una testimonianza riscritta non è più una
testimonianza. Se se ne aggiungono altre, valgono le stesse condizioni.

Non esistono invece, ad oggi:
- foto dei lavori realmente svolti da Gabriel
- numeri verificabili (cantieri conclusi, clienti serviti, tempi di intervento)
- un profilo Google con recensioni pubbliche a cui rimandare

Il sito parte con foto stock a licenza libera, che sono materiale di scena e vanno
sostituite appena esistono foto vere. Recensioni, clienti e numeri non vanno
inventati in nessuna forma: le tre recensioni pubblicate sono reali, e qualsiasi
aggiunta futura deve esserlo altrettanto.

L'unica prova reale disponibile è la biografia professionale: muratore → capo squadra
→ idraulico, vent'anni di cantiere. Va sfruttata al massimo perché è tutto ciò che
c'è.

## Product Principles

1. **Un solo obiettivo.** Ogni sezione esiste per portare a WhatsApp o alla chiamata.
   Ciò che non serve a questo va tolto.
2. **Il pollice prima del mouse.** Si progetta per uno smartphone tenuto in mano
   davanti a una perdita d'acqua; il desktop è il caso secondario.
3. **La biografia è il prodotto.** In assenza di recensioni, la credibilità viene dal
   percorso di cantiere. Va raccontata come prova, non come racconto.
4. **Non inventare mai.** Niente recensioni, clienti, numeri o promesse di tempi. I
   dati mancanti restano segnaposto visibili.
5. **Modificabile da chi non programma.** Testi e contatti devono essere trovabili e
   cambiabili aprendo un file di testo.

## Accessibility & Inclusion

Pubblico ampio e in buona parte over 50, spesso al telefono sotto stress. Corpo del
testo mai sotto 17px su mobile, aree tappabili di almeno 48px, contrasto pieno del
testo sopra le fotografie, e rispetto di `prefers-reduced-motion`.
