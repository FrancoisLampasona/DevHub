/*Esercizio 1
Scrivi una arrow function che prenda due parametri numerici e restituisca la loro somma.
*/

const summaFunction = (a, b) => a + b;

console.log(summaFunction(3, 2));

/*Esercizio 2

Scrivi una arrow function che prenda un parametro numerico e restituisca il quadrato del numero.*/

const quadrato = (number) => number ** 2;

console.log(quadrato(8));

/*Esercizio 3

Scrivi una arrow function che prenda un parametro numerico e restituisca true se il numero è positivo, altrimenti restituisca false.*/

const postiveOrNegatie = (number) => (number > 0 ? true : false);

console.log(postiveOrNegatie(-5));

/*Esercizio 4

Scrivi una arrow function che prenda due parametri di tipo stringa e restituisca la loro concatenazione.*/

const stringa = "ciao";
const stringa_2 = "mondo";

const stringCat = (stringa, stringa_2) => stringa + stringa_2;

/*Esercizio 5

Scrivi una arrow function che prenda due parametri numerici, base e altezza, e restituisca l'area del triangolo corrispondente.*/

const calcolaAreaTriangolo = (base, altezza) => (base * altezza) / 2;

console.log("Area del triangolo:", calcolaAreaTriangolo(5, 3));

/*Esercizio 6

Scrivi una arrow function che prenda una parola come parametro e restituisca true se la parola è palindroma, altrimenti restituisca false.*/

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

const lunghezza = 5;

const lunghezzaFunction = (stringa, lunghezza) =>
  stringa.lenght > lunghezza ? true : false;

console.log(lunghezza(stringa, lunghezza));
