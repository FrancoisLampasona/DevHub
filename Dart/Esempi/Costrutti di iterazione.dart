void main (){

for (int i = 0; i< 5 ; i ++){

  if (i>3){
    break; // Permette di uscire dal ciclo
  }

  if (i==2){
    continue; // Salta la serie di istruzioni e non esce dal ciclo
  }

   print('Hello World ${i + 1}');

}

int k = 0;

while (k<5){
  print('Hello World ${k + 1}');
  k++;
}

do {
   print('Hello World ${k + 1}');
   k++;
}while(k<5);

final list = ["Giuseppe","Luca","Mario"];

for (final name in list) {
  print (name);
}

list.forEach((name) {
  print(name);
});


}