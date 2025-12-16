/*Esercizio 1
Scrivi un programma che prenda un array di numeri e calcoli la somma di tutti gli elementi.*/

const array_1 = [1,2,3,4,5];
let sum = 0;

for(x in array_1){
    sum += array_1[x];
}

console.log (sum);


/*Esercizio 2
Scrivi un programma che prenda un array di numeri e trovi il valore massimo.*/


const array_2 = [1,5,3,2,1];
let max = 0;

for(let x of array_2){
    max > x ? max : max = x;
}

console.log(max);


/*Esercizio 3
Scrivi un programma che prenda un array di numeri e trovi il valore minimo.*/


const array_3 = [1,5,3,2,1];
let min = array_3[0];

for(let x of array_3){
    min < x ? min : min = x;
}

console.log(min);

/*Esercizio 4
Scrivi un programma che prenda un array di numeri e restituisca un nuovo array contenente solo i numeri pari.*/

const array_4 = [1,5,3,2,7];
const numeriPari = [];

for (let x of array_4) {
    if (x % 2 === 0) numeriPari.push(x);
}

console.log("Numeri pari:", numeriPari);


/*Esercizio 5
Scrivi un programma che prenda due array e restituisca un nuovo array che contenga tutti gli elementi dei due array concatenati.*/

const arrayA = [1, 2, 3];
const arrayB = [4, 5, 6];
const arrayConcatenato = arrayA.concat(arrayB);

console.log("Array concatenati:", arrayConcatenato);



/*Esercizio 6
Scrivi un programma che prenda un array con elementi duplicati e restituisca un nuovo array con i duplicati rimossi.*/

const array_6 = [1, 2, 2, 3, 4, 4, 5];
const arraySenzaDuplicati = [...new Set(array_6)];

console.log("Array senza duplicati:", arraySenzaDuplicati);



/*Esercizio 7
Scrivi un programma che prenda un array di stringhe e un elemento di ricerca e restituisca l'indice della prima occorrenza dell'elemento nell'array.*/

const array_7 = ["mela", "banana", "arancia", "pera"];
const elementoDiRicerca = "banana";
const indice = array_7.indexOf(elementoDiRicerca);

console.log("Indice di", elementoDiRicerca, "nell'array:", indice);

/*Esercizio 8
Scrivi un programma che prenda un array e inverta l'ordine degli elementi.*/

const array = [1, 2, 3, 4, 5];
const arrayInvertito = array.reverse();

console.log("Array invertito:", arrayInvertito);

/*Esercizio 9
Scrivi un programma che prenda un array di stringhe e calcoli la lunghezza media delle stringhe presenti.*/

const array_9 = ["ciao", "salve", "buongiorno", "arrivederci"];
let lunghezzaTotale = 0;

for (let stringa of array_9) {
  lunghezzaTotale += stringa.length;
}

const lunghezzaMedia = lunghezzaTotale / array_9.length;

console.log("Lunghezza media delle stringhe:", lunghezzaMedia);

/*Esercizio 10
Scrivi un programma che prenda un array di parole e unisca tutti gli elementi in una singola stringa separati da uno spazio.*/

const array_10 = ["Ciao", "come", "stai?"];
const stringaUnita = array_10.join(" ");

console.log("Stringa unita:", stringaUnita);