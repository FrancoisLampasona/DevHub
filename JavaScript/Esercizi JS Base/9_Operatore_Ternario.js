/*Esercizio 1
Scrivi un codice che prenda un numero come input e verifichi se è positivo o negativo utilizzando l'operatore ternario.*/

let numero = 5;

console.log(numero >= 0 ? "positivo" : "negativo" );

/*Esercizio 2
Scrivi un codice che prenda un numero come input e verifichi se è pari o dispari utilizzando l'operatore ternario.*/


console.log ( numero % 2 == 0 ? "pari" : "dispari");


/*Esercizio 3
Scrivi un codice che prenda una stringa come input e verifichi se è vuota o non vuota utilizzando l'operatore ternario.*/

const stringa = "";
const risultatoStr = stringa.length === 0 ? "vuota" : "non vuota";
console.log("La stringa è:", risultatoStr);

/*Esercizio 4
Scrivi un codice che prenda il prezzo originale di un prodotto e lo sconto applicato come input e calcoli il prezzo scontato utilizzando l'operatore ternario.*/

const prezzoOriginale = 100;
const scontoPercentuale = 20;
const prezzoScontato =
  prezzoOriginale - (prezzoOriginale * scontoPercentuale) / 100;
console.log("Prezzo scontato:", prezzoScontato);

/*Esercizio 5
Scrivi un codice che prenda un numero come input e verifichi se è maggiore, minore o uguale a zero utilizzando l'operatore ternario.*/

const risultato9 =
  numero > 0
    ? "maggiore di zero"
    : numero < 0
    ? "minore di zero"
    : "uguale a zero";
console.log("Il numero è:", risultato9);

/*Esercizio 6
Scrivi un codice che prenda due numeri come input e verifichi se il primo numero è divisibile per il secondo numero utilizzando l'operatore ternario.*/

const numero1 = 10;
const numero2 = 2;
const risultato8 = numero1 % numero2 === 0 ? "divisibile" : "non divisibile";
console.log("Il primo numero è:", risultato8);

/*Esercizio 7
Scrivi un codice che prenda una variabile come input e verifichi se è definita o undefined utilizzando l'operatore ternario.*/

let variabilia;
const risultatoVar = typeof variabilia !== "undefined" ? "definita" : "undefined";
console.log("La variabile è:", risultatoVar);

// Esercizio 8: Verifica se un numero è compreso in un intervallo


const intervalloMinimo = 10;
const intervalloMassimo = 20;
const risultatos =
  numero >= intervalloMinimo && numero <= intervalloMassimo
    ? "compreso"
    : "non compreso";
console.log("Il numero è:", risultatos);

/*Esercizio 9
Scrivi un codice che prenda una variabile come input e verifichi se è di tipo stringa o numerica utilizzando l'operatore ternario.*/

const variabile = "Hello";
const risultato =
  typeof variabile === "string"
    ? "stringa"
    : typeof variabile === "number"
    ? "numerica"
    : "altro tipo";
console.log("La variabile è di tipo:", risultato);

/*Esercizio 10
Scrivi un codice che prenda una variabile booleana come input e verifichi se è vera o falsa utilizzando l'operatore ternario.*/

const variabile2 = false;
const risultato2 = variabile ? "vera" : "falsa";
console.log("La variabile è:", risultato2);