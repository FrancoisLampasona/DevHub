// In questo momento name non contiene nulla nenache 'null' , non è allocata in memoria

late String name; 

void main () {
   
  name = "Franco";
  print(name);

  final name1 = "Giorgio";
// name1 = "Marco"; Il compilatore darà un errore perchè una final non può essere modificata  
  print(name1);

// Const è molto simile ad una Define in C rimane nel programma fino all'esecuzione dell'istruzione che viene tradotta il linguaggio macchina
 const a = 10;
 print(a);


}