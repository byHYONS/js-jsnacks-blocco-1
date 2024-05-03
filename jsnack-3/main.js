// reset
'use strict'

// 1. dichiarto var di un arrey vuoto dove inserire i valori;
// 2. creo una istrizione di iterazione con dentro un prompt che chede all'utente di inserire un numero e li pushero all'nterno dell'arrey;
// 3. trasformo la stringa in numero;
// 4. faccio la somma dei numri
// 5. stampo il risultato della somma.

let numeri = 0;
let sommaNumeri;

for (let i = 0; i<3; i++){
    const numeroIn = Number(prompt('inserisci il numero'));
    numeri += numeroIn;
    

}
console.log(numeri);