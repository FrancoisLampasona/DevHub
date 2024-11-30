/*Esercizio 1
Scrivi un programma che prenda un array di numeri e calcoli la somma di tutti gli elementi.*/

const numeri = [1, 2, 3, 4, 5];
let somma = 0;

for (let numero of numeri) {
  somma += numero;
}

console.log("La somma degli elementi è:", somma);

/*Esercizio 2
Scrivi un programma che prenda un array di numeri e trovi il valore massimo.*/

let massimo = numeri[0];

for (let numero of numeri) {
  if (numero > massimo) {
    massimo = numero;
  }
}

console.log("Il valore massimo è:", massimo);

/*Esercizio 3
Scrivi un programma che prenda un array di numeri e trovi il valore minimo.*/

let minimo = numeri[0];

for (let numero of numeri) {
  if (numero < minimo) {
    minimo = numero;
  }
}

console.log("Il valore minimo è:", minimo);

/*Esercizio 4
Scrivi un programma che prenda un array di numeri e restituisca un nuovo array contenente solo i numeri pari.*/

const array_number = [1, 2, 3, 4, 5, 6, 7];

const evenNumbers = array_number.filter((element) => element % 2 === 0);

console.log(evenNumbers);

/*Esercizio 5
Scrivi un programma che prenda due array e restituisca un nuovo array che contenga tutti gli elementi dei due array concatenati.*/

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const concatenatedArray = array1.concat(array2);

console.log(concatenatedArray);

/*Esercizio 6
Scrivi un programma che prenda un array con elementi duplicati e restituisca un nuovo array con i duplicati rimossi.*/

const arrayWithDuplicates = [1, 2, 3, 2, 4, 5, 3, 6];

const uniqueArray = arrayWithDuplicates.filter((value, index, self) => {
  return self.indexOf(value) === index;
});

console.log(uniqueArray);

/*Esercizio 7
Scrivi un programma che prenda un array di stringhe e un elemento di ricerca e restituisca l'indice della prima occorrenza dell'elemento nell'array.*/

/*Esercizio 8
Scrivi un programma che prenda un array e inverta l'ordine degli elementi.*/
/*Esercizio 9
Scrivi un programma che prenda un array di stringhe e calcoli la lunghezza media delle stringhe presenti.*/
/*Esercizio 10
Scrivi un programma che prenda un array di parole e unisca tutti gli elementi in una singola stringa separati da uno spazio.*/

const array = ["Ciao", "come", "stai?"];
const stringaUnita = array.join(" ");

console.log("Stringa unita:", stringaUnita);
