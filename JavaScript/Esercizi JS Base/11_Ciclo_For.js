/*Esercizio 1
Scrivi un programma che utilizzi un ciclo for per stampare sulla console i numeri da 1 a 10.*/

for (let i = 0 ; i < 10 ; i++ ){
    console.log(i);
}

/*Esercizio 2
Scrivi un programma che chieda all'utente di inserire un numero N e calcoli la somma di tutti i numeri da 1 a N*/

let N = 18;

for (let i = 0; i < N; i++) {
    console.log(i);
    
}

/*Esercizio 3
Scrivi un programma che utilizzi un ciclo for per stampare sulla console i numeri pari da 1 a 20.*/

for (let i = 1 ; i<=20 ; i++){
    console.log(i%2==0 ? i : "");
}

/*Esercizio 4
Scrivi un programma che chieda all'utente di inserire un numero e calcoli il suo fattoriale.*/

const numero = parseInt(prompt("Inserisci un numero:"));
let fattoriale = 1;

for (let i = 1; i <= numero; i++) {
  fattoriale *= i;
}

console.log("Il fattoriale di", numero, "è:", fattoriale);

/*Esercizio 5
Scrivi un programma che chieda all'utente di inserire una stringa e un numero N, quindi stampi la stringa ripetuta N volte.*/

const stringa = prompt("Inserisci una stringa:");
const Ns = parseInt(prompt("Inserisci un numero:"));
let risultato = "";

for (let i = 0; i < Ns; i++) {
  risultato += stringa;
}

console.log("Risultato:", risultato);

/*Esercizio 6
Scrivi un programma che prenda un numero N in input e stampi una piramide di asterischi con N righe.*/

const N3 = parseInt(prompt("Inserisci un numero:"));

for (let i = 1; i <= N3; i++) {
  let riga = "";
  for (let j = 1; j <= i; j++) {
    riga += "* ";
  }
  console.log(riga);
}

/*Esercizio 7
Scrivi un programma che calcoli la media di un array di numeri utilizzando un ciclo for.*/

const numeri = [5, 8, 12, 4, 9];
let somma = 0;

for (let i = 0; i < numeri.length; i++) {
  somma += numeri[i];
}

const media = somma / numeri.length;
console.log("La media è:", media);

/*Esercizio 8
Scrivi un programma che prenda una stringa in input e stampi i caratteri della stringa, uno per riga.*/

const stringa2 = prompt("Inserisci una stringa:");

for (let i = 0; i < stringa.length; i++) {
  console.log(stringa2[i]);
}