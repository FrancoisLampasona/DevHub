// Esercizio 1
// Scrivi un codice che ottenga la data corrente e la visualizzi in console.

const dataCorrente = new Date();
console.log ("Data corrente : ", dataCorrente);

// Esercizio 2
// Scrivi un codice che ottenga il giorno corrente (numero del giorno della settimana) e lo visualizzi in console.

const giornoCorrente = dataCorrente.getDay() + 1 ;
console.log("Giorno corrente:", giornoCorrente);

// Esercizio 3
// Scrivi un codice che ottenga il mese corrente (numero del mese) e lo visualizzi in console.

const meseCorrente = dataCorrente.getMonth() + 1 ;
console.log("Mese corrente:", meseCorrente);

// Esercizio 4
// Scrivi un codice che ottenga l'anno corrente e lo visualizzi in console.

console.log("Anno Corrente :  ", dataCorrente.getFullYear());

// Esercizio 5
// Scrivi un codice che prenda un numero di mese come input e restituisca il numero di giorni in quel mese.

function numeroGiorniMese(mese) {
  const data = new Date(2023, mese, 0);
  return data.getDate();
}

const meseSpecifico = 2; // Marzo
const numeroGiorni = numeroGiorniMese(meseSpecifico);
console.log("Numero di giorni nel mese:", numeroGiorni);

// Esercizio 6
// Scrivi un codice che prenda la data di nascita come input e calcoli l'età corrente.
// Esercizio 7
// Scrivi un codice che prenda due date come input e calcoli la differenza in giorni tra le due date.
// Esercizio 8
// Scrivi un codice che prenda una data come input e verifichi se è una data futura rispetto alla data corrente.
// Esercizio 9
// Scrivi un codice che prenda una data come input e la formatti in una stringa nel formato "gg/mm/aaaa".
// Esercizio 10
// Scrivi un codice che prenda una data come input e restituisca il nome del giorno della settimana corrispondente.