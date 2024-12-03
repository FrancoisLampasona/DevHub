/*Esercizio 1: Destructuring di un Array
Utilizzare il destructuring per estrarre i valori di un array in variabili separate.*/

const numeri = [1, 2, 3, 4, 5];

const [primo, secondo, ...terzo] = numeri;

console.log(primo);
console.log(secondo);
console.log(terzo);

/*Esercizio 2: Salto degli Elementi nel Destructuring di un Array
Utilizzare il destructuring per estrarre il primo e il quarto valore di un array.*/

const [first, , , quarto] = numeri;

console.log(first); // 1
console.log(quarto); // 4

/*Esercizio 3: Destructuring di un Oggetto
Utilizzare il destructuring per estrarre i valori di un oggetto in variabili separate.*/

const oggettoProva = {
  nome: "Mario",
  congome: "rossi",
};

const { nome, cognome } = oggettoProva;

/*Esercizio 4: Destructuring di un Oggetto con Alias
Utilizzare il destructuring per estrarre i valori di un oggetto in variabili con nomi diversi.*/

const persona = {
  nome: "Mario",
  eta: 30,
  città: "Roma",
};

const { nome: nomePersona, eta: anni, città: cittàPersona } = persona;

console.log(nomePersona);
console.log(anni);
console.log(cittàPersona);

/*Esercizio 5: Destructuring di Parametri di Funzione
Utilizzare il destructuring per estrarre i parametri di un oggetto passato a una funzione.*/

const destrFunction = function (persona) {
  const { nome, eta, città } = persona;
  return `Nome: ${nome}, Anno: ${eta}, Città: ${città}`;
};

console.log("Vediamooo : " + destrFunction(persona));

/*Esercizio 6: Destructuring con Valori Predefiniti
Utilizzare il destructuring per estrarre i valori di un oggetto con valori predefiniti per le variabili.*/

const animaleObject = {
  cane: "Bau",
  gatto: "Miao",
  gallina: "Cocode",
};

const { cane, gatto, gallina } = animaleObject;
console.log(cane);
console.log(gatto);
console.log(gallina);

/*Esercizio 7: Destructuring di Array Annidati
Utilizzare il destructuring per estrarre i valori da un array annidato.*/

const numeri2 = [1, [2, 3], 4, 5];

// Destructuring di array annidato
const [primo2, [secondo2, terzo2], quarto2] = numeri2;

console.log(primo); // 1
console.log(secondo); // 2
console.log(terzo); // 3
console.log(quarto); // 4

/*Esercizio 8: Destructuring di Oggetti Annidati
Utilizzare il destructuring per estrarre i valori da un oggetto annidato.*/

const persona2 = {
  nome2: "Mario",
  eta: 30,
  indirizzo: {
    città: "Roma",
    via: "Via Roma",
    numero: 10,
  },
};

const {
  nome2,
  indirizzo: { città, via, numero },
} = persona2;

console.log(nome2); // Mario
console.log(città); // Roma
console.log(via); // Via Roma
console.log(numero); // 10
