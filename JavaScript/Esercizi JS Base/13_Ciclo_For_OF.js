/*Esercizio 1
Scrivi un programma che prenda un array di numeri e stampi ogni elemento.*/

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (x of array) {
  console.log(x);
}

/*Esercizio 2
Scrivi un programma che prenda una stringa in input e stampi ogni lettera della stringa.*/

let stringa = "CIAO";

for (x of stringa) {
  console.log(x);
}

/*Esercizio 3
Scrivi un programma che prenda un array di numeri e calcoli la somma di tutti gli elementi.*/

let sum = 0;

for (x of array) {
  sum += x;
}

console.log("La somma è " + sum);

/*Esercizio 4
Scrivi un programma che prenda un array di numeri e stampi solo i numeri pari.*/

for (x of array) {
  x % 2 == 0 ? console.log(x) : "";
}

/*Esercizio 5
Scrivi un programma che prenda un array di stringhe e le concateni in un'unica stringa.*/

let array_stringhe = ["ciao", "come", "va"];
let unica_stringa = "";

for (x of array_stringhe) {
  unica_stringa += x;
}

console.log(unica_stringa);

/*Esercizio 6
Scrivi un programma che prenda un array di numeri e trovi il valore massimo.*/

let max = array[0];

for (x of array) {
  max < x ? (max = x) : x;
}

console.log(max);

/*Esercizio 7
Scrivi un programma che prenda una stringa e crei una nuova stringa invertendo l'ordine dei caratteri.*/

let stringaInvertita = "";

for (let carattere of stringa) {
  stringaInvertita = carattere + stringaInvertita;
}

console.log("Stringa invertita:", stringaInvertita);

/*Esercizio 8
Scrivi un programma che prenda un array di numeri e stampi gli elementi in ordine inverso.*/

const numeri = [1, 2, 3, 4, 5];

for (let i = numeri.length - 1; i >= 0; i--) {
  console.log(numeri[i]);
}

/*Esercizio 9
Scrivi un programma che prenda un array di numeri e calcoli la media di tutti gli elementi.*/

let somma = 0;

for (let numero of numeri) {
  somma += numero;
}

const media = somma / numeri.length;
console.log("La media è:", media);

/*Esercizio 10
Scrivi un programma che prenda una stringa e conti il numero di vocali presenti.*/

let conteggioVocali = 0;
const vocali = ["a", "e", "i", "o", "u"];

for (let carattere of stringa.toLowerCase()) {
  if (vocali.includes(carattere)) {
    conteggioVocali++;
  }
}

console.log("Numero di vocali:", conteggioVocali);
