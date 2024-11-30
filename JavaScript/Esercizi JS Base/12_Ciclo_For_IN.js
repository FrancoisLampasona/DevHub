/*Esercizio 1
Scrivi un programma che stampi sulla console tutte le proprietà di un oggetto.*/

const persona = {
  nome: "Mario",
  cognome: "Rossi",
  età: 30,
  professione: "Ingegnere",
};

for (x in persona) {
  console.log(x);
}

/*Esercizio 2
Scrivi un programma che calcoli la somma dei valori delle proprietà numeriche di un oggetto.*/

const spese = {
  cibo: 50,
  trasporti: 30,
  parola: "ciao",
  affitto: 500,
  utenze: 100,
};

let sum = 0;

for (x in spese) {
  typeof spese[x] === "number" ? (sum += spese[x]) : sum;
}

console.log(sum);

/*Esercizio 3
Scrivi un programma che confronti le proprietà di due oggetti e stampi sulla console se le proprietà corrispondenti hanno lo stesso valore.*/

const oggetto1 = {
  nome: "Mario",
  età: 30,
  professione: "Ingegnere",
};

const oggetto2 = {
  nome: "Luigi",
  età: 30,
  professione: "Architetto",
};

for (let chiave in oggetto1) {
  if (oggetto1[chiave] === oggetto2[chiave]) {
    console.log(chiave + " ha lo stesso valore in entrambi gli oggetti.");
  } else {
    console.log(chiave + " ha valori diversi negli oggetti.");
  }
}

/*Esercizio 4
Scrivi un programma che prenda una stringa in input e conti il numero di caratteri presenti.*/

const stringa = "Hello, world!";
let count = 0;

for (let char in stringa) {
  count++;
}

console.log("Numero di caratteri:", count);

/*Esercizio 5
Scrivi un programma che prenda un oggetto in input e stampi sulla console solo le chiavi dell'oggetto.*/

const studente = {
  nome: "Marco",
  cognome: "Bianchi",
  età: 25,
  corso: "Informatica",
};

for (let chiave in studente) {
  console.log(chiave);
}

/*Esercizio 6
Scrivi un programma che prenda un oggetto in input e stampi solo le proprietà di tipo stringa.*/

const persona_2 = {
  nome: "Anna",
  cognome: "Verdi",
  età: 30,
  professione: "Insegnante",
};

for (x in persona_2) {
  typeof persona_2[x] === "string" ? console.log(persona_2[x]) : "";
}

/*Esercizio 7
Scrivi un programma che prenda due oggetti in input e stampi sulla console le proprietà che sono presenti in entrambi gli oggetti.*/

const oggetto4 = {
  nome: "Mario",
  età: 30,
  professione: "Ingegnere",
};

const oggetto5 = {
  nome: "Mario",
  hobby: "Pittura",
  professione: "Artista",
};

for (let chiave in oggetto1) {
  if (oggetto1.hasOwnProperty(chiave) && oggetto2.hasOwnProperty(chiave)) {
    console.log(chiave);
  }
}

/*Esercizio 8
Scrivi un programma che prenda un oggetto in input e calcoli il prodotto dei valori delle proprietà numeriche.*/

const oggetto = {
  a: 2,
  b: 3,
  c: 4,
  d: "test",
};

let prodotto = 1;

for (let chiave in oggetto) {
  if (typeof oggetto[chiave] === "number") {
    prodotto *= oggetto[chiave];
  }
}

console.log("Prodotto:", prodotto);
