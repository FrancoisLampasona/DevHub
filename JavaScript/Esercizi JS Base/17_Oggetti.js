/*Esercizio 1
Crea un oggetto "persona" con le proprietà "nome" e "età".
*/

const objectPersona = {
  nome: "Mario",
  eta: "10",
};

/*Esercizio 2
Accedi alle proprietà "nome" e "età" dell'oggetto "persona" e stampale in console.
*/

console.log("Nome : ", objectPersona.nome);
console.log("Età : ", objectPersona.eta);

/*Esercizio 3
Modifica la proprietà "eta" dell'oggetto "persona" e stampa l'oggetto aggiornato in console.
*/

objectPersona.eta = 15;
console.log(objectPersona);

/*Esercizio 4
Aggiungi una nuova proprietà "sesso" all'oggetto "persona" e stampa l'oggetto aggiornato in console.
*/

objectPersona.sesso = "Maschio";
console.log(objectPersona);

/*Esercizio 5
Rimuovi la proprietà "eta" dall'oggetto "persona" e stampa l'oggetto aggiornato in console.
*/

delete objectPersona.eta;

/*Esercizio 6
Itera sulle proprietà di un oggetto "persona" e stampa ogni chiave e valore corrispondente in console.
*/

for (x in objectPersona) {
  console.log("Chiave = " + objectPersona, "Valore" + objectPersona[x]);
}

/*Esercizio 7
Verifica se l'oggetto "persona" ha la proprietà "sesso" e stampa un messaggio appropriato in console.
*/

for (x in objectPersona) {
  x === "sesso" ? console.log("Forte") : console.log("Debole");
}

/*Esercizio 8
Crea una copia dell'oggetto "persona" in un nuovo oggetto "personaCopia" e stampa entrambi gli oggetti in console.
*/

personaCopia = { ...objectPersona };
console.log(personaCopia);

/*Esercizio 9
Conta il numero di proprietà presenti nell'oggetto "persona" e stampa il conteggio in console.*/
let i = 0;

for (x in objectPersona) {
  i++;
}

console.log(i);

/*Esercizio 10
Crea un oggetto "libro" con proprietà come "titolo", "autore" e un oggetto annidato "editore" con le proprietà "nome" e "anno".*/

const newLibro = {
  titolo: "Francois",
  autore: "Dio",
  editore: {
    nome: "Filippo",
    anno: "ultimo",
  },
};

console.log(newLibro.editore.anno);
console.log(newLibro["editore"].anno);
