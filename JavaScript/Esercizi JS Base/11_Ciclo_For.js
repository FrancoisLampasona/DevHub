/*Esercizio 1
Scrivi un programma che utilizzi un ciclo for per stampare sulla console i numeri da 1 a 10.*/

for (let i = 1; i < 11; i++) {
  console.log(i);
}

/*Esercizio 2
Scrivi un programma che chieda all'utente di inserire un numero N e calcoli la somma di tutti i numeri da 1 a N*/

// let N = prompt("Inserisci un numero : ");
let sum = 0;

// for (let i = 0; i < N; i++) {
//   sum += i;
// }

console.log(sum);

/*Esercizio 3
Scrivi un programma che utilizzi un ciclo for per stampare sulla console i numeri pari da 1 a 20.*/

for (let i = 1; i < 21; i++) {
  i % 2 === 0 && console.log(i);
}

/*Esercizio 4
Scrivi un programma che chieda all'utente di inserire un numero e calcoli il suo fattoriale.*/

// const numero = parseInt(prompt("Inserisci un numero:"));
// let fattoriale = 1;

// for (let i = 1; i <= numero; i++) {
//   fattoriale *= i;
// }

// console.log("Il fattoriale di", numero, "è:", fattoriale);

/*Esercizio 5
Scrivi un programma che chieda all'utente di inserire una stringa e un numero N, quindi stampi la stringa ripetuta N volte.*/

let stringa = "ciao";
let numero_n = 4;

for (let i = 0; i < numero_n; i++) {
  console.log(stringa);
}

/*Esercizio 6
Scrivi un programma che prenda un numero N in input e stampi una piramide di asterischi con N righe.*/

let N = 9;
let j = 0;
let asterisco = "*";

for (let i = 0; i < N / 2; i++) {
  asterisco = "";

  for (let k = 0; k < i; k++) {
    asterisco += " ";
  }

  for (; j < N - i; j++) {
    asterisco += "*";
  }

  j = i + 1;

  console.log(asterisco);
}

/*Esercizio 7
Scrivi un programma che calcoli la media di un array di numeri utilizzando un ciclo for.*/

const ArrayNumerico = [1, 2, 3, 4, 5, 6, 7, 8, 10];
let somma = 0;

for (let i = 0; i < ArrayNumerico.length; i++) {
  somma += ArrayNumerico[i];
}

console.log("Somma totale:", somma);
console.log("Media:", somma / ArrayNumerico.length);

/*Esercizio 8
Scrivi un programma che prenda una stringa in input e stampi i caratteri della stringa, uno per riga.*/

const inputString = "Ciao";

for (let i = 0; i < inputString.length; i++) {
  console.log(inputString[i]);
}
