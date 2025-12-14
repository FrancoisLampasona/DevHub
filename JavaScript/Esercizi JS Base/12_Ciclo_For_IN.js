/*Esercizio 1
Scrivi un programma che stampi sulla console tutte le proprietà di un oggetto.*/

const oggetto = {
  nome: "Marco",
  cognome: "Polo",
  eta: 25,
  data: 11,
};

for (x in oggetto) {
  console.log(x);
}

/*Esercizio 2
Scrivi un programma che calcoli la somma dei valori delle proprietà numeriche di un oggetto.*/

let somma = 0;

for (x in oggetto) {
  if (typeof oggetto[x] == "number") {
    somma += oggetto[x];
  }
}

console.log(somma);

/*Esercizio 3
Scrivi un programma che confronti le proprietà di due oggetti e stampi sulla console se le proprietà corrispondenti hanno lo stesso valore.*/

const oggetto2 = {
  nome: "Luigi",
  età: 30,
  professione: "Architetto",
};

for (let chiave in oggetto) {
  if (oggetto[chiave] === oggetto2[chiave]) {
    console.log(chiave + " ha lo stesso valore in entrambi gli oggetti.");
  } else {
    console.log(chiave + " ha valori diversi negli oggetti.");
  }
}

/*Esercizio 4
Scrivi un programma che prenda una stringa in input e conti il numero di caratteri presenti.*/

let str = "ciaomondo";
let n_str = 0;

for (x in str) {
  n_str += 1;
}

console.log(n_str);

/*Esercizio 5
Scrivi un programma che prenda un oggetto in input e stampi sulla console solo le chiavi dell'oggetto.*/

for (x in oggetto) {
  console.log(x);
}

/*Esercizio 6
Scrivi un programma che prenda un oggetto in input e stampi solo le proprietà di tipo stringa.*/

for (x in oggetto) {
  if (typeof oggetto[x] == "string") {
    console.log(oggetto[x]);
  }
}

/*Esercizio 7
Scrivi un programma che prenda due oggetti in input e stampi sulla console le proprietà che sono presenti in entrambi gli oggetti.*/

for (let chiave in oggetto) {
  if (oggetto.hasOwnProperty(chiave) && oggetto2.hasOwnProperty(chiave)) {
    console.log(chiave);
  }
}

/*Esercizio 8
Scrivi un programma che prenda un oggetto in input e calcoli il prodotto dei valori delle proprietà numeriche.*/

let prodotto = 1;

for (x in oggetto) {
  if (typeof oggetto[x] == "number") {
    prodotto *= oggetto[x];
  }
}

console.log(prodotto);
