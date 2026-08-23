# Sito di Gabriele — istruzioni

Sito di una pagina sola. Nessun programma da installare, nessun account, nessun
abbonamento. Per vederlo basta fare doppio clic su `index.html`.

---

## 1. Le tre cose da sostituire prima di pubblicare

Nel sito ci sono tre segnaposto. Finché ci sono, i pulsanti WhatsApp e Chiama **non
funzionano**: portano a un numero inesistente.

Apri `index.html` con un editor di testo (Blocco note va benissimo) e usa
**Modifica → Sostituisci** (`Ctrl+H`).

### Il numero di telefono

Va sostituito in **tre forme diverse**. Falle tutte e tre, nell'ordine.

Immaginiamo che il numero sia `333 1234567`:

| Cerca | Sostituisci con | Dove finisce |
|---|---|---|
| `39XXXXXXXXXX` | `393331234567` | i link di WhatsApp |
| `+39XXXXXXXXXX` | `+393331234567` | i link "Chiama ora" |
| `+39 XXX XXX XXXX` | `+39 333 1234567` | il numero scritto e leggibile |

Attenzione: nelle prime due righe il numero va **senza spazi e senza il primo zero**
(i cellulari italiani non ne hanno). Nella terza riga gli spazi servono, perché quello
è il numero che la gente legge.

Il file `scegli-foto.html` non va toccato: è solo uno strumento di lavoro per
scegliere le fotografie, non fa parte del sito pubblicato.

### Il cognome

Cerca `[COGNOME]` e sostituisci con il cognome vero. Compare in due punti (firma e
fondo pagina).

### La partita IVA

Cerca `[P.IVA]` e sostituisci con il numero. Se Gabriele **non** ha partita IVA,
cancella tutta la scritta `P.IVA <span class="ph">[P.IVA]</span> · ` dal fondo pagina.

> I segnaposto sono evidenziati in giallo nel sito proprio per non dimenticarseli.
> Quando spariscono i riquadri gialli, hai finito.

---

## 2. Come si controlla di aver fatto tutto

Apri `index.html` nel browser e verifica:

- non si vede più nessuna scritta gialla;
- cliccando "Scrivimi su WhatsApp" si apre WhatsApp con il numero giusto e il
  messaggio già scritto;
- cliccando il numero grande in fondo parte la chiamata (dal telefono).

---

## 3. Le recensioni

Nella sezione **"Dicono di me"** ci sono tre recensioni reali, confermate come parole
vere di clienti veri: Marco P. (Cinisello Balsamo), Silvia R. (Milano) e Giuseppe T.
(Sesto San Giovanni). Sono pubblicate **alla lettera**, come sono state ricevute.

**Due regole, se un domani se ne aggiungono altre:**

1. **Solo recensioni vere.** In Italia quelle inventate sono una pratica commerciale
   ingannevole (Codice del Consumo, artt. 21-22, e direttiva europea Omnibus). L'AGCM
   sanziona, e la segnalazione arriva quasi sempre da un concorrente.
2. **Mai riscriverle.** Una testimonianza si cita testualmente o non si cita. Correggere
   la grammatica di un cliente per farlo sembrare più elegante la trasforma in un testo
   pubblicitario, e si sente.

**Un permesso da chiedere.** Se questi tre testi arrivano da messaggi privati e non da
recensioni già pubbliche, conviene un messaggio veloce alla persona: *"Ti spiace se
metto le tue parole sul sito, con nome e iniziale del cognome?"* Un minuto di lavoro
che evita l'unica telefonata spiacevole possibile.

**Per aggiungerne una quarta**, copia un blocco `<li class="voce">…</li>` in
`index.html` e cambia tre cose: il testo dentro `<blockquote>`, la riga sotto con nome,
zona e tipo di lavoro, e nient'altro. Le cinque stelle sono già lì.

**Il passo successivo, che vale più di tutto il resto:** portare queste stesse persone a
lasciare la recensione anche sul **Profilo dell'attività su Google**. Sul sito la
recensione la si legge; su Google la si può verificare, e soprattutto è lì che la gente
cerca. Il profilo è gratuito e si attiva in mezz'ora: poi basta mandare il link ai
clienti già serviti con due righe — *"se ti sei trovato bene mi faresti un favore a
lasciarmi una recensione qui, ci vuole un minuto"*.

---

## 4. Cambiare i testi

Sono tutti dentro `index.html`, in italiano, tra i tag. Si riconoscono a occhio.
Non serve toccare `style.css` né `script.js`.

Le sezioni, nell'ordine: titolo iniziale → percorso (muratore / capo squadra /
idraulico) → cosa faccio → sono Gabriele → come funziona → contatti.

**Due frasi da verificare con Gabriele prima di pubblicare**, perché sono promesse:

- *"Sopralluogo e preventivo gratuiti"* — compare tre volte. Se il sopralluogo lo fa
  pagare, va tolta ovunque.
- *"Disponibile per urgenze"* — in cima alla pagina. Se non è vero, va tolta. Se
  invece è reperibile anche la sera o nel fine settimana, conviene scriverlo:
  è l'informazione che fa chiamare.

---

## 5. Cambiare le foto

Le foto stanno nella cartella `img/`:

| File | Dove si vede |
|---|---|
| `hero.jpg` | la grande foto iniziale (orizzontale) |
| `gabriele.jpg` | il ritratto nella sezione "Sono Gabriele" (verticale) |
| `cta.jpg` | la foto accanto ai contatti, in fondo (orizzontale) |
| `serv-idraulica.jpg` | riga "Idraulica e caldaie" |
| `serv-clima.jpg` | riga "Condizionatori" |
| `serv-bagno.jpg` | riga "Bagni e ristrutturazioni" |
| `serv-muratura.jpg` | riga "Muratura e cartongesso" |
| `serv-piastrelle.jpg` | riga "Piastrelle e pavimenti" |
| `serv-riparazioni.jpg` | riga "Riparazioni e piccoli lavori" |
| `serv-tinteggiatura.jpg` | riga "Tinteggiatura e finiture" |

Per cambiarne una: rinomina la nuova foto **esattamente** come quella vecchia e
sostituiscila nella cartella. Il sito la prende da solo.

Nella cartella `img/scelta/` c'è un archivio di 118 foto alternative. Apri
**`scegli-foto.html`** nel browser per vederle tutte affiancate e scegliere.

Quelle montate adesso vengono da lì. Se una non ti convince, il ricambio è a portata:

| Nel sito | Viene da | Cos'è |
|---|---|---|
| `hero.jpg` | `hero-14` | salone milanese finito, parquet a spina |
| `gabriele.jpg` | `ritratto-14` | professionista al lavoro su un serramento, stanza luminosa |
| `cta.jpg` | `hero-17` | montaggio del raccordo su un radiatore |
| `serv-idraulica.jpg` | `mani-03` | intervento su una caldaia murale |
| `serv-clima.jpg` | `cald-06` | split bianco montato a parete |
| `serv-bagno.jpg` | `bagno-10` | bagno grigio chiaro con doccia in vetro |
| `serv-muratura.jpg` | `mur-04` | lastra di cartongesso avvitata sul montante |
| `serv-piastrelle.jpg` | `pia-02` | posa piastrella su colla pettinata |
| `serv-riparazioni.jpg` | `rip-09` | avvitatore su serramento bianco nuovo |
| `serv-tinteggiatura.jpg` | `tin-09` | rullo su parete bianca appena tinteggiata |

### La cosa più importante di tutte

Queste sono **foto di repertorio, non lavori di Gabriele**. Servono per partire.
Appena ha cinque o sei foto dei suoi cantieri — un bagno prima e dopo, una caldaia
installata, un muro finito — vanno sostituite. Le foto vere convincono molto più
delle foto comprate, e si vede subito la differenza.

Licenza: tutte le foto vengono da [Pexels](https://www.pexels.com/it-it/license/) e
si possono usare anche a scopo commerciale, senza dover citare l'autore.

---

## 6. Come mettere il sito online

### La strada semplice e gratuita

1. Vai su [app.netlify.com/drop](https://app.netlify.com/drop).
2. Trascina dentro la finestra **l'intera cartella** del sito.
3. In qualche secondo ti dà un indirizzo tipo `nome-a-caso-123.netlify.app`.

Funziona subito, non costa niente e non scade.

### Se vuoi un indirizzo serio

Un dominio `.it` (per esempio `gabriele-tuttofare.it`) costa **10–15 € l'anno** da
Aruba, Netsons, Register o simili. Poi si collega a Netlify dalle impostazioni del
sito. Su un biglietto da visita fa una differenza enorme rispetto a un indirizzo
`.netlify.app`.

---

## 7. La cosa che conta più del sito

Il sito serve a chi ha già sentito il nome di Gabriele e vuole controllare che sia
serio. **Da solo non porta clienti nuovi.**

Chi cerca "idraulico Milano" su Google guarda la mappa e le stelline, non i siti. Per
finire lì serve il **Profilo dell'attività su Google**: è gratuito, si crea in mezz'ora
e su un artigiano porta molti più contatti del sito.

L'azione con il ritorno più alto, e a costo zero: chiedere una recensione ai clienti
già serviti in questi anni. Con quindici o venti recensioni vere il profilo diventa
competitivo, e il sito diventa il posto dove quelle persone atterrano.

---

## 8. Come è fatto, in due righe

```
index.html        la pagina: struttura e tutti i testi
style.css         l'aspetto (colori, dimensioni, disposizione)
script.js         piccole animazioni
fonts/            i caratteri tipografici, salvati in locale
img/              le foto usate nel sito
img/scelta/       archivio di foto alternative
scegli-foto.html  strumento per scegliere le foto, non fa parte del sito
scegli-fasce.html strumento per scegliere le due fasce di stacco, idem
docs/             la documentazione di progetto
```

Non ci sono programmi da installare né servizi esterni: il sito funziona anche senza
internet, aperto da una chiavetta. Non raccoglie nessun dato e non usa cookie, quindi
non serve nessun banner.
