/*Esercizio 1
Ottenere un elemento per ID e stamparne il contenuto.
*/

let text_1 = document.getElementById("testo_1");
console.log(text_1);

/*Esercizio 2
Ottenere un elemento per classe e modificare il suo stile.
*/

let text2 = document.getElementsByClassName("par");

for (let i = 0; i < text2.length; i++) {
  text2[i].style.color = "red";
}

/*Esercizio 3
Ottenere elementi per tag e aggiungere loro una classe.
*/

text_1 = document.getElementsByTagName("h1")[0];

text_1.classList.add("testo_1");

/*Esercizio 4
Ottenere un elemento utilizzando un selettore CSS e modificare il suo testo.
*/

let elemento_selector = document.querySelector("p");
elemento_selector.style.backgroundColor = "red";

/*Esercizio 5
Ottenere tutti gli elementi che corrispondono a un selettore CSS e nasconderli.
*/

let all = document.querySelectorAll("p");
all[0].style.display = "none";

/*Esercizio 6
Ottenere il valore di un input di testo.
*/

let inputText = document.getElementsByTagName("input")[0];
console.log(inputText.value);

/*Esercizio 7
Ottenere il valore selezionato di un elemento select.*/

let selectElement = document.getElementById("mySelect");
let selectedValue = selectElement.value;
console.log(selectedValue); 

/*Esercizio 8
Ottenere il valore di un elemento checkbox.
Esercizio 9
Ottenere il valore di un elemento radio selezionato.
Esercizio 10
Ottenere tutti gli elementi figli di un elemento padre e aggiungere loro una classe.
Esercizio 11
Ottenere il primo elemento figlio di un elemento padre e modificare il suo testo.
Esercizio 12
Ottenere l'elemento successivo di un elemento e nasconderlo.
Esercizio 13
Ottenere l'elemento precedente di un elemento e rimuovergli una classe.
Esercizio 14
Ottenere tutti gli elementi che hanno un determinato attributo e aggiungere loro una classe.
Esercizio 15
Ottenere tutti gli elementi che corrispondono a un selettore CSS all'interno di un altro elemento e modificarne il contenuto.
Esercizio 16
Ottenere tutti gli elementi che hanno una classe specifica all'interno di un elemento e nasconderli.
Esercizio 17
Ottenere tutti gli elementi che contengono un determinato testo e aggiungere loro una classe.
/*Esercizio 18
Ottenere il valore di un attributo di un elemento*/
