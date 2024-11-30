/*Esercizio 1
Scrivi un programma che prenda un numero e stampi sulla console se è positivo, negativo o zero.*/

let x = 7;

console.log(x > 0 ? true : false);

/*Esercizio 2
Scrivi un programma che prenda un numero e stampi sulla console se è pari o dispari.*/

console.log(x % 2 == 0 ? "Pari" : "Dispari");

/*Esercizio 3
Scrivi un programma che prenda l'età di una persona e stampi sulla console se può guidare.*/

let età = 15;

console.log(età > 18 ? "Puoi guidare" : "Non puoi guidare");

/*Esercizio 4
Scrivi un programma che prenda il punteggio di uno studente in input e stampi sulla console il suo livello (A, B, C, D). A parte da 90 punti, B ne richiede minimo 80 e C 70 punti.*/

let punteggio = 55;

if (punteggio > 60) {
  console.log("Livello D");
} else if (punteggio > 70) {
  console.log("Livello C");
} else if (punteggio > 80) {
  console.log("Livello B");
} else if (punteggio > 90) {
  console.log("Livello A");
}

/*Esercizio 5
Scrivi un programma che prenda l'età e una variabile booleana che indica se la persona ha una patente, quindi stampi sulla console se la persona è maggiorenne e ha una patente*/

const haPatente = true;

if (età >= 18 && haPatente) {
  console.log("La persona è maggiorenne e ha una patente");
} else if (età >= 18 && !haPatente) {
  console.log("La persona è maggiorenne ma non ha una patente");
} else {
  console.log("La persona non è maggiorenne");
}

/*Esercizio 6
Scrivi un programma che prenda un anno e stampi sulla console se è bisestile o no.*/

const anno = 2024;

if ((anno % 4 === 0 && anno % 100 !== 0) || anno % 400 === 0) {
  console.log("L'anno è bisestile");
} else {
  console.log("L'anno non è bisestile");
}

/*Esercizio 7
Scrivi un programma che prenda una parola e stampi sulla console se è un palindromo.*/

let parola = "capgpac";
let metà = Math.floor(parola.length / 2);

let primaMetà = parola.slice(0, metà);

let secondaMetà = parola
  .slice(parola.length % 2 === 0 ? metà : metà + 1)
  .split("") // Converte in array
  .reverse() // Inverte l'array
  .join(""); // Riconverte in stringa

console.log(primaMetà === secondaMetà ? "Palindroma" : "Non Palindroma");

/*Esercizio 8
Scrivi un programma che prenda un numero da 1 a 7 e stampi sulla console il giorno della settimana corrispondente. Considera il caso in cui il numero possa essere errato.*/

const numeroGiorno = 3;
let giornoSettimana;

if (numeroGiorno === 1) {
  giornoSettimana = "Lunedì";
} else if (numeroGiorno === 2) {
  giornoSettimana = "Martedì";
} else if (numeroGiorno === 3) {
  giornoSettimana = "Mercoledì";
} else if (numeroGiorno === 4) {
  giornoSettimana = "Giovedì";
} else if (numeroGiorno === 5) {
  giornoSettimana = "Venerdì";
} else if (numeroGiorno === 6) {
  giornoSettimana = "Sabato";
} else if (numeroGiorno === 7) {
  giornoSettimana = "Domenica";
} else {
  giornoSettimana = "Numero giorno non valido";
}

console.log(giornoSettimana);
