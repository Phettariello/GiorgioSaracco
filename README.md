# Giorgio Saracco Interview Site — Final Version

Questa è la versione definitiva di base del sito, pronta per essere caricata su GitHub.

## File inclusi

- `index.html` → struttura del sito
- `styles.css` → stile completo
- `script.js` → dark mode + reveal animations + accessibilità elementi mappa
- `assets/` → qui devi inserire il tuo CV PDF e qualsiasi asset futuro

## Prima personalizzazione

Aggiorna in `index.html`:

- `giorgio@example.com` con la tua mail reale
- `https://www.linkedin.com` con il tuo link LinkedIn reale
- eventuali testi placeholder che vuoi rendere più specifici

## CV

Metti il tuo PDF qui:

`assets/Giorgio-Saracco-CV.pdf`

Il bottone `Open CV` è già configurato per questo file.

## Pubblicazione su GitHub Pages

1. Crea un repository GitHub, ad esempio `giorgio-interview-site`
2. Carica tutti i file della cartella nel repository root
3. Fai commit e push
4. Vai in `Settings > Pages`
5. In `Build and deployment`, scegli `Deploy from a branch`
6. Seleziona branch `main` e folder `/root`
7. Salva
8. Dopo pochi minuti GitHub Pages genererà il link pubblico

## Come aggiornare il sito in futuro

### Aggiornare solo i testi
Apri `index.html` e modifica i paragrafi o i titoli della sezione che vuoi cambiare.

### Aggiornare colori, spacing, font, layout
Apri `styles.css`.

Le aree principali sono:
- variabili colori in alto
- header e navigation
- hero
- map card
- timeline
- education cards
- contact section

### Aggiornare animazioni o dark mode
Apri `script.js`.

### Cambiare il CV
Sostituisci il file dentro `assets/` mantenendo lo stesso nome, oppure cambia il link del bottone in `index.html`.

## Workflow consigliato per ogni update

1. Apri il progetto in VS Code
2. Modifica il file necessario
3. Salva
4. Apri `index.html` nel browser per controllare il risultato
5. Quando va bene, fai commit con un messaggio chiaro
6. Push su GitHub
7. GitHub Pages si aggiornerà automaticamente

## Commit message utili

- `update hero copy`
- `refine experience section`
- `add new cv`
- `adjust map styling`
- `update contact links`

## Miglioria futura consigliata

Quando vuoi, il prossimo passo ideale è sostituire i testi placeholder delle experience/education con contenuti definitivi basati sul tuo CV reale, senza cambiare la struttura del sito.
