// reset
'use strict'

// 1. chiedo all'utente di inserire 10 numeri con un prompt servendomi di una istruzione di iterazione che cicli, appunto, per 10 volte;
// 2. calcolo la somma dei numeri inseriti;
// 3. colcolo la media dei numeri inseriti;
// 4. stampo in console i risultati.

const conto = 10;
let sommaNumeri = 0;
let mediaNumeri = 0;

// ciclo for con dentro condizione per accertarci che venga inserito un numero:
for (let i = 0; i < conto; i++){
    const numeriIn = Number(prompt(`Numenri inseriti ${i} di ${conto}. Inserisci il numero:`));
    console.log({numeriIn});
    if (!isNaN(numeriIn)) {
        
// se il valere è un numero procediamo con il calcolo della somma:
        sommaNumeri += numeriIn;
        console.log({sommaNumeri});
    
    } else {
        console.log(`Hai inserito un valore non numerico. Inserisci un valore numerico valido!`);
        i--;
    }

// calcolo della media dei numeri inseriti:
    mediaNumeri = sommaNumeri / conto; 
    console.log({mediaNumeri});
}

// madiamo a scermo i risultati:
alert(`La somma dei numeri da te inseriti è ${sommaNumeri}, mentra la media è ${mediaNumeri.toFixed(2)}.`);

// FINE

