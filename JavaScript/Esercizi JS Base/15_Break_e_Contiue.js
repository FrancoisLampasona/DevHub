/*Esercizio 1
Interrompere un ciclo for quando un certo valore viene trovato.*/

const numeri = [1, 2, 3, 4, 5];
for (let i = 0; i < numeri.length; i++) {
  if (numeri[i] === 3) {
    break;
  }
  console.log(numeri[i]);
}

/*Esercizio 2
Saltare l'iterazione di un ciclo for quando un certo valore viene trovato.*/

const numeri_2 = [1, 2, 3, 4, 5];
for (let i = 0; i < numeri_2.length; i++) {
  if (numeri_2[i] === 3) {
    continue;
  }
  console.log(numeri_2[i]);
}

/*Esercizio 3
Interrompere un ciclo while quando un certo valore viene trovato.*/

let i = 0;
const numeri_3 = [1, 2, 3, 4, 5];
while (i < numeri_3.length) {
  if (numeri_3[i] === 3) {
    break;
  }
  console.log(numeri_3[i]);
  i++;
}