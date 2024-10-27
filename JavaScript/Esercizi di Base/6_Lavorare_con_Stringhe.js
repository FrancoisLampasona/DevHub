/*Esercizio 1
Scrivi un programma che prenda una stringa in input e stampi sulla console la sua lunghezza.*/

let stringa = "ciao";

console.log(stringa.length);

/*Esercizio 2
Scrivi un programma che prenda due stringhe, le concateni e stampi il risultato sulla console.*/

let stringa_2 = "come va ?";

console.log(stringa + " " + stringa_2);

/*Esercizio 3
Scrivi un programma che confronti due stringhe e stampi sulla console se sono uguali o diverse in due `console.log` separati.*/

if (stringa === stringa_2) {
  console.log("UGUALI");
} else {
  console.log("NON UGUALI");
}

/*Esercizio 4
Scrivi un programma che prenda una stringa numerica e la converta in un numero, stampando il risultato in console.*/

let stringa_3 = "1234";

console.log(parseInt(stringa_3));

/*Esercizio 5
Scrivi un programma che prenda una stringa e una sottostringa, utilizzi il metodo includes() per verificare se la sottostringa è pr/*esente nella stringa e stampi il risultato sulla console.*/

let big_stringa = "superforte";
let sotto_stringa = "forte";

console.log(big_stringa.includes(sotto_stringa));

/*Esercizio 6
Scrivi un programma che prenda una stringa e utilizzando il metodo slice() estragga una parte della stringa in base agli indici di inizio e fine e stampi il risultato sulla console.*/

console.log(big_stringa.slice(2, 5));

/*Esercizio 7
Scrivi un programma che prenda una stringa, la converta in maiuscolo e stampi il risultato sulla console.*/

console.log(big_stringa.toUpperCase());

/*Esercizio 8
Scrivi un programma che prenda una stringa maiuscola, la converta in minuscolo e stampi il risultato sulla console.*/

let maiuscolo = "PROVA";

console.log(maiuscolo.toLowerCase());

/*Esercizio 9
Scrivi un programma che prenda una stringa, una sottostringa da cercare e una sottostringa da sostituire, utilizzando il metodo replace() e stampi il risultato sulla console.*/

const stringa_iniziale = "La mia casa è blu";
const sottostringaDaCercare = "blu";
const sottostringaDaSostituire = "rossa";
const nuovaStringa = stringa_iniziale.replace(
  sottostringaDaCercare,
  sottostringaDaSostituire
);
console.log("La nuova stringa è: " + nuovaStringa);

/*Esercizio 10
Scrivi un programma che prenda una stringa, la divida in un array di sottostringhe e stampi il risultato sulla console.*/

let array_sottostringhe = stringa_iniziale.split(" ");

console.log(array_sottostringhe);

/*Esercizio 11
Scrivi un programma che prenda una stringa in input, rimuova gli spazi iniziali e finali, poi stampi il risultato sulla console.*/

const stringa_4 = "    Ciao, mondo!    ";
const stringaTrim = stringa_4.trim();
console.log("La stringa senza spazi iniziali e finali è: " + stringaTrim);
