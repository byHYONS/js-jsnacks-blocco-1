// reset 
'use strict'

console.log('CIAO!!!');

// 1. dichiaro var con array vuoto;
// 2. attraverso un prompt do la possibilità di inserire due parole all'utente;
// 3. confronto le parole tramite `nomeVar.length`;
// 4. mando a schermo prima la parola più corta e poi quella più lunga.

const parole = [];
const paroleIn1 = prompt('inserisci la prima parola');
const paroleIn2 = prompt('inserisci la seconda parola');

parole.push(paroleIn1);
console.log({parole});

parole.push(paroleIn2);
console.log({parole});

let trovaParola = false;

for (let i = 0; i<parole.length; i++){
    if (paroleIn1 > paroleIn2){
        trovaParola = true;
           
    } 


    
    console.log(trovaParola ? `La parola piu lunga è ${paroleIn2}` : `La parola piu lunga è ${paroleIn1}`);
}