/*Esercizio 1
Scrivi una funzione che prenda due parametri, base e altezza, e restituisca l'area del rettangolo corrispondente.
*/

const base = 10;
const altezza = 12;

const areaRettangolo = function (base, altezza) {
  console.log(base * altezza);
};

areaRettangolo(base, altezza);

/*Esercizio 2
Scrivi una funzione che prenda un parametro numero e restituisca true se il numero è pari, altrimenti restituisca false.
*/

/*Esercizio 3
Scrivi una funzione che prenda due parametri di tipo stringa e restituisca la loro concatenazione.
*/

/*Esercizio 4
Scrivi una funzione che prenda un parametro numero e restituisca il suo fattoriale.
*/

/*Esercizio 5
Scrivi una funzione che generi un numero casuale compreso tra un valore minimo e un valore massimo.
*/

/*Esercizio 6
Scrivi una funzione che prenda una parola come parametro e restituisca true se la parola è palindroma, altrimenti restituisca false.
*/

/*Esercizio 7
Scrivi una funzione che prenda un array di numeri come parametro e restituisca la somma di tutti gli elementi.
*/

/*Esercizio 8
Scrivi una funzione che prenda un array di numeri come parametro e restituisca un oggetto con le proprietà "massimo" e "minimo" che rappresentano rispettivamente il valore massimo e il valore minimo dell'array.
*/

/*Esercizio 9
Scrivi una funzione che prenda una stringa come parametro e restituisca il numero di vocali presenti nella stringa.
*/

/*Esercizio 10
Scrivi una funzione che prenda un array di numeri come parametro e restituisca la media di tutti gli elementi.*/

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const arrayFun = function (array) {
  let sum = 0;
  let index_sum = 0;
  array.forEach((element, index) => {
    sum += element;
    index_sum = index;
  });
  index_sum++;
  return sum / index_sum;
};

const media = arrayFun(numberArray);
console.log("La media è : " + media);
