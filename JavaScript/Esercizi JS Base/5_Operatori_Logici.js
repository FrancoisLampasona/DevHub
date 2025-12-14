/*Esercizio 1
Stampa sulla console il risultato della valutazione di due condizioni a scelta utilizzando l'operatore AND.*/

const condizione1 = true;
const condizione2 = false;
console.log("Risultato operatore AND: " + (condizione1 && condizione2));

/*Esercizio 2
Stampa sulla console il risultato della valutazione di due condizioni a scelta utilizzando l'operatore OR.*/

console.log("Risultato operatore OR: " + (condizione1 || condizione2));

/*Esercizio 3
Stampa sulla console il risultato della negazione di una condizione a scelta utilizzando l'operatore NOT.*/

console.log("Risultato operatore NOT: " + !condizione1);

/*Esercizio 4
Date due costanti valutare se valore1 è maggiore di 0 e valore2 è minore di 20, oppure se valore1 è uguale a 5.*/

const valore1 = 5;
const valore2 = 10;
console.log(
  "Risultato espressione complessa: " +
    ((valore1 > 0 && valore2 < 20) || valore1 === 5)
);

/*Esercizio 5
Date due stringhe valutare se stringa1 non è vuota e stringa2 non è la parola "treno".*/

const stringa1 = "casa";
const stringa2 = "auto";

console.log(stringa1.length > 0 && stringa2 != "treno");

/*Esercizio 6
Dati tre numeri valutare se: valore1 è maggiore di zero oppure valore2 è minore di venti. Queste condizioni devono verificarsi insieme a valore3 compreso tra 10 e 20.*/

const valore3 = 10;

console.log(valore1 > 0 && valore2 < 20 && (valore3 > 10 && valore3 < 20 ));

// Verifica se valore1 è maggiore di zero o valore2 è minore di venti
// E se valore3 è compreso tra 10 e 20 (inclusi)

console.log(valore1 > 0 && valore2 < 20 && (valore3 <= 20 && valore3 >= 10));
