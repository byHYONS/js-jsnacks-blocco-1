// reset
'use strict'

// 1. dichiarto var con valore 0 dove inserire i valori;
// 2. creo una istrizione di iterazione con dentro un prompt che chede all'utente di inserire un numero;
// 3. trasformo la stringa in numero;
// 4. faccio la somma dei numri;
// 5. stampo il risultato della somma.

let numeri = 0;
const conto = 10;

for (let i = 0; i<conto; i++){
    const numeroIn = Number(prompt(`Numeri da inserire ${i} di ${conto}. Inserisci il numero:`));   
    if (!isNaN(numeroIn)){
        numeri += numeroIn;
        console.log(`Hai inserito ${numeroIn[i]}. La somma in questo momento è ${numeri}`);
    } else {
        console.log(`Hai inserito ${numeroIn[i]}. Questo valore non è valido, inserisci un valore numerico!`);
        i--;
    }
}
console.log(numeri);
alert(`La somma dei numeri da te inseriti è di ${numeri}`);
