/*Esercizio 1
Scrivi un programma che stampi i numeri da 1 a 5 utilizzando il ciclo while.*/

let numero = 1;

while (numero <= 5) {
  console.log(numero);
  numero++;
}

/*Esercizio 2
Scrivi un programma che calcoli la somma dei numeri da 1 a 10 utilizzando il ciclo while.*/

let somma = 0;

while (numero <= 10) {
  somma += numero;
  numero++;
}

console.log("La somma è:", somma);

/*Esercizio 3
Scrivi un programma che stampi i numeri pari da 2 a 10 utilizzando il ciclo do while.*/

numero = 2;

while (numero<=10){
    console.log(numero % 2 == 0 ? numero : "\t");
    numero++;
}

/*Esercizio 4
Scrivi un programma che prenda un numero in input e conti il numero di cifre presenti utilizzando il ciclo while.*/

let numero_4 = 12345;
let conteggioCifre = 0;

while (numero_4 !== 0) {
  numero_4 = Math.floor(numero_4 / 10);
  conteggioCifre++;
}

console.log("Numero di cifre:", conteggioCifre);

/*Esercizio 5
Scrivi un programma che generi e stampi la sequenza di Fibonacci fino al numero 100 utilizzando il ciclo do while.*/

let numero1 = 0;
let numero2 = 1;
let risultato = 0;

console.log(numero1);
console.log(numero2);

do {
  risultato = numero1 + numero2;
  console.log(risultato);
  numero1 = numero2;
  numero2 = risultato;
} while (risultato <= 100);

/*Esercizio 6
Scrivi un programma che prenda un numero in input e conti il numero di cifre pari presenti utilizzando il ciclo while.*/
/*Esercizio 7
Scrivi un programma che prenda un numero in input e calcoli il suo fattoriale utilizzando il ciclo do...while.*/
/*Esercizio 8
Scrivi un programma che prenda una stringa in input e stampi i caratteri della stringa al contrario utilizzando il ciclo while.*/
/*Esercizio 9
Scrivi un programma che calcoli la somma dei numeri dispari da 1 a 10 utilizzando il ciclo while.*/
/*Esercizio 10
Scrivi un programma che prenda un numero in input e verifichi se è un numero primo utilizzando il ciclo do while.*/
