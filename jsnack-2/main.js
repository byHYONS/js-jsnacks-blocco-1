// reset 
'use strict'

console.log('CIAO!!!');

// 1. dichiaro var con array vuoto;
// 2. attraverso un prompt do la possibilità di inserire due parole all'utente;
// 3. dichiaro var `trovaParole` con valore falso;
// 4. attraverso il ciclo for confronto le parole;
// 5. imposto una istruzione condizionale mettendo in correlazione le parole e nel caso la prima parola sia più corta metto il valore vero:
// 6. mando a schermo prima la parola più corta e poi quella più lunga.

const parole = [];
const paroleIn1 = prompt('inserisci la prima parola');
const paroleIn2 = prompt('inserisci la seconda parola');

parole.push(paroleIn1);
console.log({paroleIn1});

parole.push(paroleIn2);
console.log({paroleIn2});

let trovaParola = false;

for (let i = 0; i<parole.length; i++){
    if (paroleIn1 < paroleIn2){
        trovaParola = true;           
    } 
    
    console.log(trovaParola ? `La parola piu corta è ${paroleIn1}` : `La parola piu lunga è ${paroleIn2}`);
}
