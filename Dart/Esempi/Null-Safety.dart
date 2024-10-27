void main() {

  var a;
  print(a); // Risultato Null

  String b;
  print(b); // Null-Safety attiva è causa errore
  // Con la Null-Safety bisogna assegnare un valore perchè una variabile dichiara con il suo tipo non può essere null
  
  String? c; // Per dichiarere la variabile con il tipo e null
  print(c);

// Aggiungere un nullable ad una lista di elementi non nullable
  List <String> names = ["Angelo","Giovanni","Francesco"];
  String? giovanni;
  names.add(giovanni!); // ! forza IDE che permette l'inserimento

  print(names); // Printa un errore perchè ancora inizializzata a Null

}