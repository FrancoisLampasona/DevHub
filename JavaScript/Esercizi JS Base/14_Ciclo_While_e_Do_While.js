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
// Chiediamo il numero all'utente

let numero_6 = 12345;
let countPari = 0;

// Rendiamo il numero positivo (nel caso sia negativo)
numero_6 = Math.abs(numero_6);

// Caso speciale: se il numero_6 è 0
if (numero_6 === 0) {
  countPari = 1; // 0 è una cifra pari
} else {
  while (numero_6 > 0) {
    let cifra = numero_6 % 10;

    if (cifra % 2 === 0) {
      countPari++;
    }

    numero_6 = Math.floor(numero_6 / 10);
  }
}

console.log("Numero di cifre pari:", countPari);


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
/*Esercizio 9
Scrivi un programma che calcoli la somma dei numeri dispari da 1 a 10 utilizzando il ciclo while.*/
/*Esercizio 10
Scrivi un programma che prenda un numero in input e verifichi se è un numero primo utilizzando il ciclo do while.*/

let numero_10 = parseInt(prompt("Inserisci un numero_10:"));

let divisore = 1;
let contaDivisori = 0;

do {
  if (numero_10 % divisore === 0) {
    contaDivisori++;
  }
  divisore++;
} while (divisore <= numero_10);

// Un numero_10 primo ha ESATTAMENTE due divisori: 1 e se stesso
if (contaDivisori === 2) {
  console.log(numero_10 + " è un numero_10 primo");
} else {
  console.log(numero_10 + " NON è un numero_10 primo");
}