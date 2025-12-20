/*Esercizio 1
Definire una funzione che accetta un callback e lo richiama:*/

function eseguiCallback(callback) {
  callback();
}

function mioCallback() {
  console.log("Eseguo il callback!");
}

eseguiCallback(mioCallback);

/*Esercizio 2
Definire una funzione che accetta un valore e un callback, e richiama il callback passando il valore come argomento:*/

function valoreAndCallBack(valore, callback) {
  callback(valore);
}

function mioCallback2(valore) {
  console.log("Eseguo il callback!" + valore);
}

eseguiCallback(mioCallback2);

/*Esercizio 3
Simulare una chiamata asincrona utilizzando un setTimeout e un callback:*/

function chiamataAsincrona(callback) {
  setTimeout(function () {
    callback("Risposta dalla chiamata asincrona");
  }, 2000);
}

function mioCallback(risposta) {
  console.log("Risposta ricevuta:", risposta);
}

chiamataAsincrona(mioCallback);

/*Esercizio 4
Definire una funzione che accetta un array e un callback, e richiama il callback per ogni elemento dell'array:*/
/*Esercizio 5
Utilizzare un callback per ordinare un array di oggetti:*/
/*Esercizio 6
Utilizzare un callback per filtrare gli elementi di un array:*/
/*Esercizio 7
Utilizzare un callback per calcolare la somma degli elementi di un array:*/
/*Esercizio 8
Utilizzare un callback per mappare gli elementi di un array a nuovi valori:*/
/*Esercizio 9
Utilizzare un callback per eseguire un'azione su ogni carattere di una stringa:*/

const stringa = "Hello, world!";

function stampaCarattere(carattere) {
  console.log(carattere);
}

Array.from(stringa).forEach(stampaCarattere);

/*Esercizio 10
Utilizzare un callback per simulare la gestione degli errori in una finta chiamata asincrona:*/

function eseguiChiamata(callbackSuccesso, callbackErrore) {
  // Simulazione di una chiamata asincrona
  const esito = Math.random() < 0.5;

  if (esito) {
    callbackSuccesso("Chiamata riuscita");
  } else {
    callbackErrore("Errore durante la chiamata");
  }
}

function callbackSuccesso(risposta) {
  console.log("Successo:", risposta);
}

function callbackErrore(errore) {
  console.error("Errore:", errore);
}

eseguiChiamata(callbackSuccesso, callbackErrore);