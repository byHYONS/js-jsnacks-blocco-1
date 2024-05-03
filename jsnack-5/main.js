// reset
'use strict'

// 1. dichiaro var con arrey vuoto;
// 2. creo una istruzione di iterazione di 6 cicli nel quale tramite `prompt` chiedo all'utente di inserire dei numeri che salveremo sull'arrey con;
// 3. tramite istruzione condizionale dico al programma che se il numero inserito è dispari di salvarlo nell'arrey;
// 4. stampo in console i numeri all'interno dell'arrey.

const listaNumeri = [];
const conto = 6;

for (let i = 0; i<conto; i++){
const numeroIn = Number(prompt(`Numeri inseriti ${i} di ${conto}. Inserisci Numeri:`));
console.log({numeroIn});

    if (!isNaN(numeroIn)) {
        console.log({numeroIn});
        if (numeroIn % 2 !== 0) {
            listaNumeri.push(numeroIn);
            console.log({numeroIn});
        }
    } else {
    console.log(`Il valore inserito è ${numeroIn}, non è un valore numerico. Iserisci numero!`);
    i--;
    }
    console.log(listaNumeri);
}
alert(`I numeri dispari da te inseriti sono: ${listaNumeri}`);

 // FINE
