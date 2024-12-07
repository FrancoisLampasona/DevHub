/*Esercizio 1
Scrivi un codice che prenda un numero come input e verifichi se è positivo o negativo utilizzando l'operatore ternario.*/

const numero = -5;
const risultato = numero >= 0 ? "positivo" : "negativo";
console.log("Il numero è:", risultato);

/*Esercizio 2
Scrivi un codice che prenda un numero come input e verifichi se è pari o dispari utilizzando l'operatore ternario.*/

const risultato_2 = numero % 2 === 0 ? "pari" : "dispari";
console.log("Il numero è:", risultato);

/*Esercizio 3
Scrivi un codice che prenda una stringa come input e verifichi se è vuota o non vuota utilizzando l'operatore ternario.*/

const stringa = "";
const risultato_3 = stringa.length === 0 ? "vuota" : "non vuota";
console.log("La stringa è:", risultato);

/*Esercizio 4
Scrivi un codice che prenda il prezzo originale di un prodotto e lo sconto applicato come input e calcoli il prezzo scontato utilizzando l'operatore ternario.*/

const prezzoOriginale = 100;
const scontoPercentuale = 20;
const prezzoScontato =
  prezzoOriginale - (prezzoOriginale * scontoPercentuale) / 100;
console.log("Prezzo scontato:", prezzoScontato);

/*Esercizio 5
Scrivi un codice che prenda un numero come input e verifichi se è maggiore, minore o uguale a zero utilizzando l'operatore ternario.*/

const risultato_4 =
  numero > 0
    ? "maggiore di zero"
    : numero < 0
    ? "minore di zero"
    : "uguale a zero";
console.log("Il numero è:", risultato);

/*Esercizio 6
Scrivi un codice che prenda due numeri come input e verifichi se il primo numero è divisibile per il secondo numero utilizzando l'operatore ternario.*/

let x = 10;
let y = 5;

console.log(x % y === 0 ? "X divisibile per Y" : "X non divisibile per Y");

/*Esercizio 7
Scrivi un codice che prenda una variabile come input e verifichi se è definita o undefined utilizzando l'operatore ternario.*/

let variabile;
const risultato_5 = typeof variabile !== "undefined" ? "definita" : "undefined";
console.log("La variabile è:", risultato);

// Esercizio 8: Verifica se un numero è compreso in un intervallo
function verificaIntervallo(numero, intervalloMin, intervalloMax) {
  return numero >= intervalloMin && numero <= intervalloMax
    ? `Il numero ${numero} è compreso nell'intervallo [${intervalloMin}, ${intervalloMax}]`
    : `Il numero ${numero} NON è compreso nell'intervallo [${intervalloMin}, ${intervalloMax}]`;
}

// Esempio di utilizzo
let numero2 = 5;
let intervalloMin = 1;
let intervalloMax = 10;
console.log(verificaIntervallo(numero, intervalloMin, intervalloMax));

/*Esercizio 9
Scrivi un codice che prenda una variabile come input e verifichi se è di tipo stringa o numerica utilizzando l'operatore ternario.*/

// Esercizio 9: Verifica se una variabile è stringa o numerica
function verificaTipo(variabile) {
  return typeof variabile === "string"
    ? "La variabile è una stringa"
    : typeof variabile === "number"
    ? "La variabile è un numero"
    : "La variabile non è né una stringa né un numero";
}

// Esempio di utilizzo
let variabile2 = "ciao";
console.log(verificaTipo(variabile));
variabile = 42;
console.log(verificaTipo(variabile));
variabile = true;
console.log(verificaTipo(variabile));

/*Esercizio 10
Scrivi un codice che prenda una variabile booleana come input e verifichi se è vera o falsa utilizzando l'operatore ternario.*/

// Esercizio 10: Verifica se una variabile booleana è vera o falsa
function verificaBooleano(variabile) {
  return typeof variabile === "boolean"
    ? variabile
      ? "La variabile è vera"
      : "La variabile è falsa"
    : "La variabile non è un booleano";
}

// Esempio di utilizzo
let variabileBooleana = true;
console.log(verificaBooleano(variabileBooleana));
variabileBooleana = false;
console.log(verificaBooleano(variabileBooleana));
variabileBooleana = 42;
console.log(verificaBooleano(variabileBooleana));
