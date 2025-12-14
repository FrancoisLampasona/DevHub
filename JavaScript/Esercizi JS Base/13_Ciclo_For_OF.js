/*Esercizio 1
Scrivi un programma che prenda un array di numeri e stampi ogni elemento.*/

const numeri = [1, 2, 3, 4, 5];

for (let numero of numeri ) {
  console.log(numero);
}

/*Esercizio 2
Scrivi un programma che prenda una stringa in input e stampi ogni lettera della stringa.*/

const stringa_2 = "Hello, world!";

for (let lettera of stringa) {
  console.log(lettera);
}

/*Esercizio 3
Scrivi un programma che prenda un array di numeri e calcoli la somma di tutti gli elementi.*/


const numeri_3 = [5, 8, 12, 4, 9];
let somma = 0;

for (let numero of numeri) {
  somma += numero;
}

console.log("La somma è:", somma);

/*Esercizio 4
Scrivi un programma che prenda un array di numeri e stampi solo i numeri pari.*/

const numeri_4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let numero of numeri) {
  if (numero % 2 === 0) {
    console.log(numero);
  }
}

/*Esercizio 5
Scrivi un programma che prenda un array di stringhe e le concateni in un'unica stringa.*/

const parole = ["Ciao", "come", "va?"];
let risultato = "";

for (let parola of parole) {
  risultato += parola + " ";
}

console.log("Risultato:", risultato);

/*Esercizio 6
Scrivi un programma che prenda un array di numeri e trovi il valore massimo.*/

const numeri_6 = [10, 5, 8, 15, 3];
let massimo = numeri[0];

for (let numero of numeri) {
  if (numero > massimo) {
    massimo = numero;
  }
}

console.log("Il valore massimo è:", massimo);


/*Esercizio 7
Scrivi un programma che prenda una stringa e crei una nuova stringa invertendo l'ordine dei caratteri.*/

const stringa = "Hello, world!";
let stringaInvertita = "";

for (let carattere of stringa) {
  stringaInvertita = carattere + stringaInvertita;
}

console.log("Stringa invertita:", stringaInvertita);


/*Esercizio 8
Scrivi un programma che prenda un array di numeri e stampi gli elementi in ordine inverso.*/

const numeri_8 = [1, 2, 3, 4, 5];

for (let i = numeri.length - 1; i >= 0; i--) {
  console.log(numeri[i]);
}
/*Esercizio 9
Scrivi un programma che prenda un array di numeri e calcoli la media di tutti gli elementi.*/

const array_num = [1,2,3,4,5,6,7];
let media = 0;

for (let num of array_num){
  media += num;
}

console.log (media / array_num.length);


/*Esercizio 10
Scrivi un programma che prenda una stringa e conti il numero di vocali presenti.*/

const vocali = "aeiou";
const str_10 = "pianocane";
let count = 0;

for (let lettera of str_10) {
  if (vocali.includes(lettera)) {
    count++;
  }
}

console.log(count);