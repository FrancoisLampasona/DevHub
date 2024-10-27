void main (){

final cane = Cane(12, 23, 23, "canina");
print(cane.razza);

final animali = [
  cane,
  Gatto(23, 45, 43, "Persiano"),
  Cane(12,3,1,"Bulldog"),
];



animali.forEach((animale) {
  animale.verso();
});

}


abstract class Animale {

final int arti;
final int altezza;
final double peso;

Animale(this.arti,this.altezza,this.peso);

void muoviti ();
void verso ();
void mangia ();
void dormi ();

}

class Cane extends Animale {

  final String razza;

  Cane(int arti,int altezza,double peso , this.razza) : super(arti,altezza,peso);

  @override
  void muoviti () => print("Sono un cane");

  @override
  void verso () => print("Bau Bau");

  @override
  void mangia () => print("Sto mangiando");

  @override 
  void dormi () => print("Sto dormendo");

}


class Gatto extends Animale {

   final String razza;

 Gatto(int arti,int altezza,double peso , this.razza) : super(arti,altezza,peso);
 @override
  void muoviti () => print("Sono un Gatto");

  @override
  void verso () => print("Miap Miao");

  @override
  void mangia () => print("Sto mangiando");

  @override 
  void dormi () => print("Sto dormendo");

}