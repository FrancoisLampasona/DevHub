/*Esercizio 1
Scrivi un programma che prenda una stringa in input e stampi sulla console la sua lunghezza.*/

const stringa = "Ciao, mondo!";
console.log("La lunghezza della stringa è: " + stringa.length);

/*Esercizio 2
Scrivi un programma che prenda due stringhe, le concateni e stampi il risultato sulla console.*/

const stringa1 = "Ciao";
const stringa2 = "mondo!";
const risultato = stringa1 + " " + stringa2;
console.log("La stringa concatenata è: " + risultato);

/*Esercizio 3
Scrivi un programma che confronti due stringhe e stampi sulla console se sono uguali o diverse in due `console.log` separati.*/

console.log("Le stringhe sono uguali? " + (stringa1 === stringa2));
console.log("Le stringhe sono diverse? " + (stringa1 !== stringa2));

/*Esercizio 4
Scrivi un programma che prenda una stringa numerica e la converta in un numero, stampando il risultato in console.*/

const str_num_1 = "130";
const str_num_2 = "120";

console.log(parseInt(str_num_1) + parseInt(str_num_2));

/*Esercizio 5
Scrivi un programma che prenda una stringa e una sottostringa, utilizzi il metodo includes() per verificare se la sottostringa è pr/*esente nella stringa e stampi il risultato sulla console.*/

const str = "scrivania";
const sub_str = "iva";

console.log(str.includes(sub_str));

/*Esercizio 6
Scrivi un programma che prenda una stringa e utilizzando il metodo slice() estragga una parte della stringa in base agli indici di inizio e fine e stampi il risultato sulla console.*/

console.log (str.slice(0,2))

/*Esercizio 7
Scrivi un programma che prenda una stringa, la converta in maiuscolo e stampi il risultato sulla console.*/

console.log (str.toUpperCase);

/*Esercizio 8
Scrivi un programma che prenda una stringa maiuscola, la converta in minuscolo e stampi il risultato sulla console.*/

console.log(str.toLowerCase);

/*Esercizio 9
Scrivi un programma che prenda una stringa, una sottostringa da cercare e una sottostringa da sostituire, utilizzando il metodo replace() e stampi il risultato sulla console.*/

console.log(str.replace(sub_str,"ciao"));

/*Esercizio 10
Scrivi un programma che prenda una stringa, la divida in un array di sottostringhe e stampi il risultato sulla console.*/

const stringa4 = "Ciao,mondo,come,stai";
const arraySottostringhe = stringa4.split(",");
console.log("Array di sottostringhe: ", arraySottostringhe);

/*Esercizio 11
Scrivi un programma che prenda una stringa in input, rimuova gli spazi iniziali e finali, poi stampi il risultato sulla console.*/

const stringa5 = "    Ciao, mondo!    ";
const stringaTrim = stringa.trim();
console.log("La stringa senza spazi iniziali e finali è: " + stringaTrim);