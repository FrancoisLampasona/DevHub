/*Esercizio 1
Scrivi una funzione che prenda due parametri, base e altezza, e restituisca l'area del rettangolo corrispondente.
*/

const area_rettangolo =  function (base , altezza) {
  return base * altezza;
}

console.log(area_rettangolo(2,5));

/*Esercizio 2
Scrivi una funzione che prenda un parametro numero e restituisca true se il numero è pari, altrimenti restituisca false.
*/

const numero_pari = function (x) {
  return x %2 ==0 ? true : false ;
}

console.log(numero_pari(6));

/*Esercizio 3
Scrivi una funzione che prenda due parametri di tipo stringa e restituisca la loro concatenazione.
*/

const concatena_Str = function (str_1,str_2){
  return str_1 + " " + str_2
}

console.log(concatena_Str("ciao", "cane"));

/*Esercizio 4
Scrivi una funzione che prenda un parametro numero e restituisca il suo fattoriale.
*/

function calcolaFattoriale(numero) {
  let fattoriale = 1;

  for (let i = 1; i <= numero; i++) {
    fattoriale *= i;
  }

  return fattoriale;
}

const numero = 5;
const fattoriale = calcolaFattoriale(numero);

console.log("Il fattoriale di", numero, "è:", fattoriale);

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

function contaVocali(stringa) {
  const vocali = ["a", "e", "i", "o", "u"];
  let conteggio = 0;

  for (let carattere of stringa.toLowerCase()) {
    if (vocali.includes(carattere)) {
      conteggio++;
    }
  }

  return conteggio;
}

const stringa = "Hello World";
const numeroVocali = contaVocali(stringa);

console.log("Numero di vocali:", numeroVocali);

/*Esercizio 10
Scrivi una funzione che prenda un array di numeri come parametro e restituisca la media di tutti gli elementi.*/

const numberArray = [1, 2, 3, 4, 5, 6, 8, 9];

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
