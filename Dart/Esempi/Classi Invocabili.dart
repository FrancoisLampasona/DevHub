void main (){
final prezzo = 250.0;
final calcolatoreIVA = CalcoloIVA();

print(calcolatoreIVA(prezzo));

}

// Classi che eseguono una sola funzione definibile 
// all'interno del metodo call (l'unica istruzione)
class CalcoloIVA {
  final int iva;

  CalcoloIVA([this.iva=22]);

  double call (double value) => value / 100 *iva;

  
}