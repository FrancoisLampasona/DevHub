/*Esercizio 1
Scrivi un programma che prenda un numero da 1 a 7 in input e stampi sulla console il giorno della settimana corrispondente.*/

const numeroGiorno = 3;
let giornoSettimana;

switch (numeroGiorno) {
  case 1:
    giornoSettimana = "Lunedì";
    break;
  case 2:
    giornoSettimana = "Martedì";
    break;
  case 3:
    giornoSettimana = "Mercoledì";
    break;
  case 4:
    giornoSettimana = "Giovedì";
    break;
  case 5:
    giornoSettimana = "Venerdì";
    break;
  case 6:
    giornoSettimana = "Sabato";
    break;
  case 7:
    giornoSettimana = "Domenica";
    break;
  default:
    giornoSettimana = "Numero giorno non valido";
}

console.log(giornoSettimana);

/*Esercizio 2
Scrivi un programma che prenda una lettera in input rappresentante il tipo di veicolo ("A" per auto, "M" per moto, "B" per bicicletta) e stampi sulla console la descrizione corrispondente.*/

const tipoVeicolo = "M";
let descrizioneVeicolo;

switch (tipoVeicolo) {
  case "A":
    descrizioneVeicolo = "Questo è un'auto";
    break;
  case "M":
    descrizioneVeicolo = "Questa è una moto";
    break;
  case "B":
    descrizioneVeicolo = "Questa è una bicicletta";
    break;
  default:
    descrizioneVeicolo = "Tipo veicolo non valido";
}

console.log(descrizioneVeicolo);

/*Esercizio 3
Scrivi un programma che prenda un numero da 1 a 12 rappresentante un mese dell'anno e stampi sulla console la stagione corrispondente, ignorando il fatto che le stagioni cambino intorno al 21 del mese.*/

const numeroMese = 8;
let stagione;

switch (numeroMese) {
  case 1:
  case 2:
  case 12:
    stagione = "Inverno";
    break;
  case 3:
  case 4:
  case 5:
    stagione = "Primavera";
    break;
  case 6:
  case 7:
  case 8:
    stagione = "Estate";
    break;
  case 9:
  case 10:
  case 11:
    stagione = "Autunno";
    break;
  default:
    stagione = "Mese non valido";
}

console.log(stagione);

/*Esercizio 4
Scrivi un programma che prenda un numero da 1 a 5 in input e stampi sulla console il giorno lavorativo corrispondente (dal lunedì al venerdì).*/

const numeroGiorno2 = 3;
let giornoLavorativo;

switch (numeroGiorno2) {
  case 1:
    giornoLavorativo = "Lunedì";
    break;
  case 2:
    giornoLavorativo = "Martedì";
    break;
  case 3:
    giornoLavorativo = "Mercoledì";
    break;
  case 4:
    giornoLavorativo = "Giovedì";
    break;
  case 5:
    giornoLavorativo = "Venerdì";
    break;
  default:
    giornoLavorativo = "Giorno non lavorativo";
}

console.log(giornoLavorativo);

/*Esercizio 5
Scrivi un programma che prenda un numero da 1 a 12 in input e stampi sulla console il nome del mese corrispondente.*/

const numeroMese2 = 9;
let nomeMese;

switch (numeroMese2) {
  case 1:
    nomeMese = "Gennaio";
    break;
  case 2:
    nomeMese = "Febbraio";
    break;
  case 3:
    nomeMese = "Marzo";
    break;
  case 4:
    nomeMese = "Aprile";
    break;
  case 5:
    nomeMese = "Maggio";
    break;
  case 6:
    nomeMese = "Giugno";
    break;
  case 7:
    nomeMese = "Luglio";
    break;
  case 8:
    nomeMese = "Agosto";
    break;
  case 9:
    nomeMese = "Settembre";
    break;
  case 10:
    nomeMese = "Ottobre";
    break;
  case 11:
    nomeMese = "Novembre";
    break;
  case 12:
    nomeMese = "Dicembre";
    break;
  default:
    nomeMese = "Mese non valido";
}

console.log(nomeMese);

/*Esercizio 6 (difficile)
Scrivi un programma che prenda tre lati di un triangolo (a, b, c) in input e stampi sulla console il tipo di triangolo corrispondente ("Equilatero", "Isoscele", "Scaleno").*/

const latoA = 5;
const latoB = 4;
const latoC = 5;
let tipoTriangolo;

switch (true) {
  case latoA === latoB && latoB === latoC:
    tipoTriangolo = "Equilatero";
    break;
  case latoA === latoB || latoB === latoC || latoA === latoC:
    tipoTriangolo = "Isoscele";
    break;
  default:
    tipoTriangolo = "Scaleno";
}

console.log(tipoTriangolo);

/*Esercizio 7
Scrivi un programma che prenda un voto numerico da 0 a 100 in input e stampi sulla console il punteggio corrispondente utilizzando l'istruzione switch. Utilizza intervalli per assegnare una lettera di valutazione (A, B, C, D, E) al punteggio.*/

const punteggio = 85;
let valutazione;

switch (true) {
  case punteggio >= 90:
    valutazione = "A";
    break;
  case punteggio >= 80:
    valutazione = "B";
    break;
  case punteggio >= 70:
    valutazione = "C";
    break;
  case punteggio >= 60:
    valutazione = "D";
    break;
  default:
    valutazione = "E";
}

console.log(`La valutazione per il punteggio ${punteggio} è: ${valutazione}`);

/*Esercizio 8
Scrivi un programma che prenda un codice di lingua (ad esempio, "en" per inglese, "it" per italiano, "es" per spagnolo) in input e stampi sulla console il messaggio di benvenuto corrispondente alla lingua selezionata.*/

const lingua = "es";
let messaggio;

switch (lingua) {
  case "en":
    messaggio = "Welcome!";
    break;
  case "it":
    messaggio = "Benvenuto!";
    break;
  case "es":
    messaggio = "¡Bienvenido!";
    break;
  default:
    messaggio = "Language not supported";
}

console.log(messaggio);