/*Esercizio 1: Sommare numeri
Creare una funzione che somma un numero variabile di argomenti.*/

function somma(...numeri) {
  return numeri.reduce((acc, numero) => acc + numero, 0);
}

console.log(somma(1, 2, 3, 4)); // 10
console.log(somma(5, 10, 15)); // 30

/*Esercizio 2: Concatenare stringhe
Creare una funzione che concatena un numero variabile di stringhe.*/

function concatena(...stringhe) {
  return stringhe.join(" ");
}

console.log(concatena("Ciao", "mondo", "!")); // "Ciao mondo !"
console.log(concatena("JavaScript", "è", "fantastico")); // "JavaScript è fantastico"

/*Esercizio 3: Trovare il massimo
Creare una funzione che trova il massimo di un numero variabile di argomenti.*/

function massimo(...numeri) {
  return Math.max(...numeri);
}

console.log(massimo(1, 2, 3, 4));
console.log(massimo(10, 20, 5));

/*Esercizio 4: Filtrare numeri pari
Creare una funzione che filtra solo i numeri pari da un numero variabile di argomenti.*/

function filtraPari(...numeri) {
  return numeri.filter((numero) => numero % 2 === 0);
}

console.log(filtraPari(1, 2, 3, 4, 5)); // [2, 4]

/*Esercizio 5: Creare un array di argomenti
Creare una funzione che restituisce un array contenente tutti gli argomenti passati.*/

function creaArray(...argomenti) {
  return argomenti;
}

console.log(creaArray(1, "a", true, null)); // [1, 'a', true, null]
console.log(creaArray("x", "y", "z")); // ['x', 'y', 'z']

/*Esercizio 6: Calcolare la media
Creare una funzione che calcola la media di un numero variabile di argomenti.*/

function media(...numeri) {
  const totale = numeri.reduce((acc, numero) => acc + numero, 0);
  return totale / numeri.length;
}

console.log(media(1, 2, 3, 4)); // 2.5
console.log(media(10, 20, 30)); // 20

/*Esercizio 7: Restituire argomenti unici
Creare una funzione che restituisce solo gli argomenti unici passati.*/

function unici(...argomenti) {
  return [...new Set(argomenti)];
}

console.log(unici(1, 2, 2, 3, 4, 4)); // [1, 2, 3, 4]
console.log(unici("a", "b", "a", "c")); // ['a', 'b', 'c']

/*Esercizio 8: Accodare elementi a un array
Creare una funzione che accoda elementi a un array esistente.*/

function accoda(array, ...elementi) {
  return array.concat(elementi);
}

const arr = [1, 2, 3];
console.log(accoda(arr, 4, 5, 6)); // [1, 2, 3, 4, 5, 6]
console.log(accoda(arr, 7, 8)); // [1, 2, 3, 7, 8]

/*Esercizio 9: Restituire argomenti in ordine inverso
Creare una funzione che restituisce gli argomenti in ordine inverso.*/

function inverso(...argomenti) {
  return argomenti.reverse();
}

console.log(inverso(1, 2, 3)); // [3, 2, 1]
console.log(inverso("a", "b", "c")); // ['c', 'b', 'a']

/*Esercizio 10: Restituire il tipo di ogni argomento
Creare una funzione che restituisce il tipo di ogni argomento passato.*/

function tipi(...argomenti) {
  return argomenti.map((argomento) => typeof argomento);
}

console.log(tipi(1, "a", true, {})); // ['number', 'string', 'boolean', 'object']
console.log(tipi(null, undefined, 42)); // ['object', 'undefined', 'number']
