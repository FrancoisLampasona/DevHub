/*Esercizio 1
Stampa sulla console il risultato della valutazione di due condizioni a scelta utilizzando l'operatore AND.*/

let x = true;
let y = false;

console.log(x && y);

/*Esercizio 2
Stampa sulla console il risultato della valutazione di due condizioni a scelta utilizzando l'operatore OR.*/

console.log(x || y);

/*Esercizio 3
Stampa sulla console il risultato della negazione di una condizione a scelta utilizzando l'operatore NOT.*/

console.log(x != y);

/*Esercizio 4
Date due costanti valutare se valore1 è maggiore di 0 e valore2 è minore di 20, oppure se valore1 è uguale a 5.*/

let valore1 = 10;
let valore2 = 15;

console.log((valore1 > 0 && valore2 < 20) || valore1 === 5);

/*Esercizio 5
Date due stringhe valutare se stringa1 non è vuota e stringa2 non è la parola "treno".*/

let stringa1 = "ciao"; // Puoi cambiare il valore
let stringa2 = "auto"; // Puoi cambiare il valore

if (stringa1 !== "" && stringa2 !== "treno") {
  console.log(
    "Condizioni soddisfatte: stringa1 non è vuota e stringa2 non è 'treno'."
  );
} else {
  console.log("Le condizioni non sono soddisfatte.");
}

/*Esercizio 6
Dati tre numeri valutare se: valore1 è maggiore di zero oppure valore2 è minore di venti. Queste condizioni devono verificarsi insieme a valore3 compreso tra 10 e 20.*/

let valore3 = 12; // Puoi cambiare il valore

// Verifica se valore1 è maggiore di zero o valore2 è minore di venti
// E se valore3 è compreso tra 10 e 20 (inclusi)
if ((valore1 > 0 || valore2 < 20) && valore3 >= 10 && valore3 <= 20) {
  console.log("Le condizioni sono soddisfatte.");
} else {
  console.log("Le condizioni non sono soddisfatte.");
}
