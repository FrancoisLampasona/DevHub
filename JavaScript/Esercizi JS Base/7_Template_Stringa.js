/*Esercizio 1
Scrivi un programma che utilizzi un template literal per creare una stringa che includa il valore di una variabile e stampi il risultato sulla console.*/

let numero = 10;

console.log (`ciao come stai ${numero}`);

/*Esercizio 2
Scrivi un programma che utilizzi un template literal per calcolare e stampare il risultato di una somma tra due variabili sulla console.*/

let numero2 = 20;

console.log(`Somma dei due numeri : ${numero2+numero}`)

/*Esercizio 3
Scrivi un programma che utilizzi un template literal per mostrare nome, età e città di una persona su diverse righe in console.*/

const nome = "Maria";
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

const baseURL = "https://www.example.com/";
const parametro = "prodotto";
const urlCompleto = `${baseURL}${parametro}`;
console.log(`L'URL completo è: ${urlCompleto}`);

/*Esercizio 7
Scrivi un programma che utilizzi un template literal per formattare un valore monetario e stamparlo sulla console.*/

const prezzo = 19.99;
console.log(`Il prezzo del prodotto è: €${prezzo.toFixed(2)}`);


/*Esercizio 8
Scrivi un programma che richieda l'input dell'utente per il nome e l'età, quindi utilizzi un template literal per creare un messaggio personalizzato e stamparlo sulla console.*/


const nome2 = prompt("Inserisci il tuo nome:");
const età2 = prompt("Inserisci la tua età:");
console.log(`Ciao ${nome}! Hai ${età} anni. Benvenuto!`);