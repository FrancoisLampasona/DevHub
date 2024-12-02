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
/*Esercizio 4: Filtrare numeri pari
Creare una funzione che filtra solo i numeri pari da un numero variabile di argomenti.*/
/*Esercizio 5: Creare un array di argomenti
Creare una funzione che restituisce un array contenente tutti gli argomenti passati.*/
/*Esercizio 6: Calcolare la media
Creare una funzione che calcola la media di un numero variabile di argomenti.*/
/*Esercizio 7: Restituire argomenti unici
Creare una funzione che restituisce solo gli argomenti unici passati.*/
/*Esercizio 8: Accodare elementi a un array
Creare una funzione che accoda elementi a un array esistente.*/
/*Esercizio 9: Restituire argomenti in ordine inverso
Creare una funzione che restituisce gli argomenti in ordine inverso.*/
/*Esercizio 10: Restituire il tipo di ogni argomento
Creare una funzione che restituisce il tipo di ogni argomento passato.*/
