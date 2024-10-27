/*Esercizio 1
Stampa sulla console il risultato del confronto tra due numeri per verificare se il primo numero è maggiore del secondo.*/

let x = 5;
let y = 10;

if (x > y) {
  console.log("Il numero x è magliore di y");
} else {
  console.log("Il numero y è maggiore di x");
}

/*Esercizio 2
Stampa sulla console il risultato del confronto tra due stringhe per verificare se la prima stringa viene prima della seconda in ordine alfabetico.*/

let stringa_1 = "ab";
let stringa_2 = "cd";

if (stringa_1 < stringa_2) {
  console.log("Viene prima AB");
} else {
  console.log("Viene prima CD");
}

/*Esercizio 3
Stampa sulla console il risultato del confronto tra un numero e una stringa per verificare se sono uguali.*/

let numero = 10;
let stringa_3 = "10";

console.log(numero == stringa_3);

/*Esercizio 4
Stampa sulla console il risultato del confronto tra un numero e una stringa per verificare se sono uguali sia in valore che in tipo.*/

console.log(numero === stringa_3);

/*Esercizio 5
Stampa sulla console il risultato del confronto tra un numero e una stringa per verificare se sono diversi.*/

console.log(numero != stringa_3);

/*Esercizio 6
Stampa sulla console il risultato del confronto tra un numero e una stringa per verificare se sono diversi sia in valore che in tipo.*/

console.log(numero !== stringa_3);

/*Esercizio 7
Stampa sulla console il risultato del confronto tra due numeri per verificare se il primo numero è minore-uguale del secondo.*/

console.log(x < y);

/*Esercizio 8
Stampa sulla console il risultato del confronto tra due numeri per verificare se il primo numero è diverso dal secondo.*/

console.log(x > y);
