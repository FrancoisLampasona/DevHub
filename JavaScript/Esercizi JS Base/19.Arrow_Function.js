/*Esercizio 1
Scrivi una arrow function che prenda due parametri numerici e restituisca la loro somma.
*/

const somma = (a, b) => a + b;

console.log(somma(2, 3));

/*Esercizio 2

Scrivi una arrow function che prenda un parametro numerico e restituisca il quadrato del numero.*/

const quadrato = (x) => x ** 2;

console.log(quadrato(5));

/*Esercizio 3

Scrivi una arrow function che prenda un parametro numerico e restituisca true se il numero è positivo, altrimenti restituisca false.*/

const segno = (x) => (x > 0 ? true : false);

console.log(segno(2));

/*Esercizio 4

Scrivi una arrow function che prenda due parametri di tipo stringa e restituisca la loro concatenazione.*/

const concatenazione = (str_1, str_2) => str_1 + " " + str_2;

console.log(concatenazione("ciao", "cane"));

/*Esercizio 5

Scrivi una arrow function che prenda due parametri numerici, base e altezza, e restituisca l'area del triangolo corrispondente.*/

const calcolaAreaTriangolo = (base, altezza) => (base * altezza) / 2;

console.log("Area del triangolo:", calcolaAreaTriangolo(5, 3));

/*Esercizio 6

Scrivi una arrow function che prenda una parola come parametro e restituisca true se la parola è palindroma, altrimenti restituisca false.*/


const isParolaPalindroma = (parola) => {
  const parolaInvertita = parola.split("").reverse().join("");
  return parola === parolaInvertita;
};

console.log("La parola è palindroma?", isParolaPalindroma("radar"));

/*Esercizio 7

Scrivi una arrow function che prenda un parametro numerico e restituisca il cubo del numero.*/

const cubo = (numero) => numero ** 3;

console.log("Cubo:", cubo(2));

/*Esercizio 8

Scrivi una arrow function che prenda due parametri numerici, minimo e massimo, e restituisca un numero casuale compreso tra il valore minimo e il valore massimo.*/

const generaNumeroCasuale = (minimo, massimo) =>
  Math.floor(Math.random() * (massimo - minimo + 1)) + minimo;

console.log("Numero casuale:", generaNumeroCasuale(1, 10));

/*Esercizio 9

Scrivi una arrow function che prenda un array di stringhe come parametro e restituisca la concatenazione di tutti gli elementi dell'array.*/

const concatenazioneArray = (array) => array.join("");

console.log("Risultato:", concatenazioneArray(["Ciao", "Mondo", "!"]));

/*Esercizio 10
Scrivi una arrow function che prenda due parametri, una parola e una lunghezza, e restituisca true se la parola è più lunga della lunghezza specificata, altrimenti restituisca false.*/

const isParolaPiuLunga = (parola, lunghezza) => parola.length > lunghezza;

console.log("La parola è più lunga?", isParolaPiuLunga("JavaScript", 5));