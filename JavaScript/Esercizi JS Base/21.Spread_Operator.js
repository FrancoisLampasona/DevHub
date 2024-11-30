/*Esercizio 1: Copia di un Array
Creare una copia di un array utilizzando lo spread operator.*/

const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

console.log(copiedArray); // [1, 2, 3]
console.log(copiedArray === originalArray); // false

/*Esercizio 2: Unire Due Array
Unire due array in un nuovo array utilizzando lo spread operator.*/

let array_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let array_2 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

let array_copia = [...array_1, ...array_2];

console.log(array_copia);

/*Esercizio 3: Copia di un Oggetto
Creare una copia di un oggetto utilizzando lo spread operator.*/

const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject };

console.log(copiedObject); // { a: 1, b: 2 }
console.log(copiedObject === originalObject); // false

/*Esercizio 4: Unire Due Oggetti
Unire due oggetti in un nuovo oggetto utilizzando lo spread operator.*/

const object1 = { a: 1, b: 2 };
const object2 = { c: 3, d: 4 };
const combinedObject = { ...object1, ...object2 };

console.log(combinedObject); // { a: 1, b: 2, c: 3, d: 4 }

/*Esercizio 5: Aggiungere Elementi a un Array
Aggiungere nuovi elementi a un array esistente utilizzando lo spread operator.*/

const originalArray_1 = [1, 2, 3];
const newArray = [0, ...originalArray, 4, 5];

console.log(newArray); // [0, 1, 2, 3, 4, 5]

/*Esercizio 6: Aggiungere Proprietà a un Oggetto
Aggiungere nuove proprietà a un oggetto esistente utilizzando lo spread operator.*/

const originalObject_2 = { a: 1, b: 2 };
const newObject = { ...originalObject_2, c: 3, d: 4 };

console.log(newObject); // { a: 1, b: 2, c: 3, d: 4 }

/*Esercizio 7: Parametri di Funzione
Utilizzare lo spread operator per passare elementi di un array come parametri di una funzione.*/

function somma(a, b, c) {
  return a + b + c;
}

const numeri = [1, 2, 3];
console.log(somma(...numeri)); // 6

/*Esercizio 8: Destructuring e Spread Operator
Utilizzare il destructuring insieme allo spread operator per separare elementi di un array.*/

const numeri_2 = [1, 2, 3, 4, 5];
const [primo, secondo, ...resto] = numeri_2;

console.log(primo); // 1
console.log(secondo); // 2
console.log(resto); // [3, 4, 5]

/*Esercizio 9: Creare un Array da una Stringa
Creare un array dai caratteri di una stringa utilizzando lo spread operator.*/

let stringa = "ciaone";
let array_char = [...stringa];

console.log(array_char);

/*Esercizio 10: Combinare Oggetti con Proprietà Sovrascritte
Combinare due oggetti con proprietà sovrascritte utilizzando lo spread operator.*/

const object3 = { a: 1, b: 2 };
const object4 = { b: 3, c: 4 };
const combinedObject_2 = { ...object3, ...object4 };

console.log(combinedObject); // { a: 1, b: 3, c: 4 }
