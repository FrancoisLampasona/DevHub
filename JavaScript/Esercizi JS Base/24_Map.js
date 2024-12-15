/*Esercizio 1: Moltiplicare ogni elemento per 2
Moltiplicare ogni elemento di un array per 2.*/

let array = [1, 2, 3, 4, 5, 6, 7, 8];

array = array.map((element) => {
  return element * 2;
});

console.log(array);

/*Esercizio 2: Convertire un array di numeri in stringhe
Convertire ogni numero di un array in una stringa.*/

array = array.map((element) => {
  return element.toString();
});

console.log(array);

/*Esercizio 3: Estrarre i nomi da un array di oggetti
Estrarre i nomi da un array di oggetti.*/

const persone = [
  { nome: "Alice", età: 25 },
  { nome: "Bob", età: 30 },
  { nome: "Carol", età: 35 },
];
const nomi = persone.map((persona) => persona.nome);

console.log(nomi);

/*Esercizio 4: Aggiungere un punto esclamativo a ogni stringa
Aggiungere un punto esclamativo alla fine di ogni stringa di un array.*/

const frasi = ["Ciao", "Buongiorno", "Buonasera"];

frasi = frasi.map((element) => element + "!");

console.log(frasi);

/*Esercizio 5: Calcolare il quadrato di ogni nmero
Calcolare il quadrato di ogni numero in un array.*/

const numeri = [1, 2, 3, 4];
const quadrati = numeri.map((x) => x ** 2);

console.log(quadrati);

/*Esercizio 6: Convertire le temperature da Celsius a Fahrenheit
Convertire un array di temperature da Celsius a Fahrenheit.*/

const celsius = [0, 10, 20, 30];
const fahrenheit = celsius.map((temp) => (temp * 9) / 5 + 32);

console.log(fahrenheit);

/*Esercizio 7: Estrarre le prime lettere di ogni parola
Estrarre la prima lettera di ogni parola in un array di stringhe.*/

const parole = ["gatto", "cane", "elefante"];
const primeLettere = parole.map((parola) => parola[0]);

console.log(primeLettere);

/*Esercizio 8: Creare un array di lunghezze delle stringhe
Creare un array contenente le lunghezze delle stringhe di un altro array.*/

const parole2 = ["gatto", "cane", "elefante"];
const lunghezze = parole2.map((parola) => parola.length);

console.log(lunghezze);

/*Esercizio 9: Aggiungere un prefisso a ogni stringa
Aggiungere un prefisso a ogni stringa di un array.*/

const animali = ["gatto", "cane", "elefante"];
const prefisso = "Animale: ";
const descrizioni = animali.map((animale) => prefisso + animale);

console.log(descrizioni);

/*Esercizio 10: Incrementare ogni elemento di un array di oggetti
Incrementare di 1 l'età di ogni persona in un array di oggetti.*/

let persone2 = [
  { nome: "Alice", età: 25 },
  { nome: "Bob", età: 30 },
  { nome: "Carol", età: 35 },
];

persone2 = persone2.map((element) => {
  return {
    ...element,
    eta: element.età + 1,
  };
});
