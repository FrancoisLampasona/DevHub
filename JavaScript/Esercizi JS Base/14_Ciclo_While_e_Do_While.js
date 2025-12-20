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
let contatore_2 = 1;

while (contatore_2 <= 10) {
  somma += contatore_2;
  contatore_2++;
}

console.log("La somma è:", somma);

/*Esercizio 3
Scrivi un programma che stampi i numeri pari da 2 a 10 utilizzando il ciclo do while.*/

let numero_3 = 2;

do {
  if (numero_3 % 2 === 0) {
    console.log(numero_3);
  }
  numero_3++;
} while (numero_3 <= 10);

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

  if (risultato > 100) break;

  console.log(risultato);
  numero1 = numero2;
  numero2 = risultato;
} while (true);

/*Esercizio 6
Scrivi un programma che prenda un numero in input e conti il numero di cifre pari presenti utilizzando il ciclo while.*/

let numero_6 = 1458;
let appoggio;
let contatore = 0;

while (numero_6 !== 0) {
  appoggio = numero_6 % 10;

  if (appoggio % 2 === 0) {
    contatore++;
    console.log(`${appoggio} è pari`);
  }

  numero_6 = Math.floor(numero_6 / 10);
}

console.log("Cifre pari totali:", contatore);

/*Esercizio 7
Scrivi un programma che prenda un numero in input e calcoli il suo fattoriale utilizzando il ciclo do...while.*/

let numero_7 = 5;
let fattoriale = 1;
let i = 1;

do {
  fattoriale *= i;
  i++;
} while (i <= numero_7);

console.log("Il fattoriale di", numero_7, "è:", fattoriale);

/*Esercizio 8
Scrivi un programma che prenda una stringa in input e stampi i caratteri della stringa al contrario utilizzando il ciclo while.*/

let stringa_8 = "Hello, world!";
let lunghezza = stringa_8.length - 1;

while (lunghezza >= 0) {
  console.log(stringa_8[lunghezza]);
  lunghezza--;
}

/*Esercizio 9
Scrivi un programma che calcoli la somma dei numeri dispari da 1 a 10 utilizzando il ciclo while.*/

let numero_9 = 1;
let sommaDispari = 0;

while (numero_9 <= 10) {
  if (numero_9 % 2 !== 0) {
    sommaDispari += numero_9;
  }
  numero_9++;
}

console.log("La somma dei numeri dispari è:", sommaDispari);

/*Esercizio 10
Scrivi un programma che prenda un numero in input e verifichi se è un numero primo utilizzando il ciclo do while.*/

let numero_10 = 17;
let divisore = 2;
let primo = true;

if (numero_10 < 2) {
  primo = false;
} else {
  do {
    if (numero_10 % divisore === 0) {
      primo = false;
      break;
    }
    divisore++;
  } while (divisore < numero_10);
}

if (primo) {
  console.log(numero_10, "è un numero primo.");
} else {
  console.log(numero_10, "non è un numero primo.");
}
