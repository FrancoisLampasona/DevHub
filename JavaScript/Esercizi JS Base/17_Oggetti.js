/*Esercizio 1
Crea un oggetto "persona" con le proprietà "nome" e "età".
*/

let persona = {
    nome : "Francois",
    eta : 25,
};

console.log(persona);

/*Esercizio 2
Accedi alle proprietà "nome" e "età" dell'oggetto "persona" e stampale in console.
*/

console.log(persona.nome);
console.log(persona.eta);


/*Esercizio 3
Modifica la proprietà "eta" dell'oggetto "persona" e stampa l'oggetto aggiornato in console.
*/

persona.eta = 10;
console.log(persona.eta)


/*Esercizio 4
Aggiungi una nuova proprietà "sesso" all'oggetto "persona" e stampa l'oggetto aggiornato in console.
*/

persona.sesso = "Maschio";
console.log(persona.sesso);


/*Esercizio 5
Rimuovi la proprietà "eta" dall'oggetto "persona" e stampa l'oggetto aggiornato in console.
*/

delete persona.eta;
console.log(persona);

/*Esercizio 6
Itera sulle proprietà di un oggetto "persona" e stampa ogni chiave e valore corrispondente in console.
*/

for(x in persona){
    console.log(`Chiave ${x} e Valore ${persona[x]}`);
}

/*Esercizio 7
Verifica se l'oggetto "persona" ha la proprietà "sesso" e stampa un messaggio appropriato in console.
*/


/*Esercizio 8
Crea una copia dell'oggetto "persona" in un nuovo oggetto "personaCopia" e stampa entrambi gli oggetti in console.
*/



/*Esercizio 9
Conta il numero di proprietà presenti nell'oggetto "persona" e stampa il conteggio in console.*/

/*Esercizio 10
Crea un oggetto "libro" con proprietà come "titolo", "autore" e un oggetto annidato "editore" con le proprietà "nome" e "anno".*/

