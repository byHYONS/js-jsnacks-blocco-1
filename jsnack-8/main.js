// reset
'use strict'

// 1. chiedo all'utente di inserire un numero di 4 cifre tramite un prompt;
// 2. lascio il risultato in stringa (senza trasformarlo in numero);
// 3. faccio una istruzione di iterazione che cicli per la lunghezza della stringa (cioè 4);
// 4. faccio la somma per poi trasformare la stringa in numero.

let numeroIn;
let somma = 0;

// cerco di fare inserire all'utente un numero di 4 cifre esatte:
for (;;) {
    numeroIn = prompt('Inserisci un numero di 4 cifre');
    if (numeroIn.length === 4){
        break
    } else {
        console.log(`Hai inserito un numero superiore o inferiore a 4 cifre. Inseriscilo nuovamente`);        
    }
}

// faccio la somma delle cifre:
for (let i = 0; i<numeroIn.length; i++){   
    if (!(numeroIn.length < 4 && numeroIn > 4)){
        somma += parseInt(numeroIn[i]);
        console.log({somma});        
    } 
}


 // FINE
