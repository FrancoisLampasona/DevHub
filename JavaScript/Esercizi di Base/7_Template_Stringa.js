/*Esercizio 1
Scrivi un programma che utilizzi un template literal per creare una stringa che includa il valore di una variabile e stampi il risultato sulla console.*/

const nome = "Marco";
console.log(`Ciao, mi chiamo ${nome}.`);

/*Esercizio 2
Scrivi un programma che utilizzi un template literal per calcolare e stampare il risultato di una somma tra due variabili sulla console.*/

const numero1 = 5;
const numero2 = 10;
console.log(`La somma di ${numero1} e ${numero2} è ${numero1 + numero2}.`);

/*Esercizio 3
Scrivi un programma che utilizzi un template literal per mostrare nome, età e città di una persona su diverse righe in console.*/

const nome_2 = "Maria";
const età = 25;
const città = "Roma";
console.log(`
  Nome: ${nome}
  Età: ${età}
  Città: ${città}
`);

/*Esercizio 4 (difficile)
Scrivi un programma che utilizzi un template literal per creare una lista HTML con elementi dinamici e stampi il risultato sulla console.*/

const frutta = ["Mela", "Banana", "Arancia"];
let listaHTML = "<ul>";
for (let frutto of frutta) {
  listaHTML += `<li>${frutto}</li>`;
}
listaHTML += "</ul>";
console.log(listaHTML);

/*Esercizio 5
Scrivi un programma che utilizzi un template literal per creare un messaggio email formattato con nome dinamico.*/

const nome_3 = "Giovanni";
const messaggio = `
  Ciao ${nome},

  Benvenuto nel nostro sito!
  Speriamo che tu trovi tutto ciò di cui hai bisogno.

  Cordiali saluti,
  Il team di supporto
`;
console.log(messaggio);

/*Esercizio 6
Scrivi un programma che utilizzi un template literal per creare un URL dinamico combinando una stringa di base e un parametro e stampi il risultato sulla console.*/

const nome_4 = "apple.com";
const stringa_base = `https://www.${nome_4}`;

console.log(stringa_base);

/*Esercizio 7
Scrivi un programma che utilizzi un template literal per formattare un valore monetario e stamparlo sulla console.*/

const prezzo = 19.99;
console.log(`Il prezzo del prodotto è: €${prezzo.toFixed(2)}`);

/*Esercizio 8
Scrivi un programma che richieda l'input dell'utente per il nome e l'età, quindi utilizzi un template literal per creare un messaggio personalizzato e stamparlo sulla console.*/

const nome_5 = prompt("Inserisci il tuo nome:");
const età_2ciao = prompt("Inserisci la tua età:");
console.log(`Ciao ${nome}! Hai ${età} anni. Benvenuto!`);
