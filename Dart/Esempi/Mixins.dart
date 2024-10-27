void main (){

final canarino = Canarino();
canarino.vola();

final kiwi = Kiwi();
kiwi.beccare();


}

mixin Camminare {
  void cammina() => print("Riesco a Camminare");
}

// Mixin disponibile solo sulla classe Volatile
mixin Volare on Volatile {
  void vola() => print("Riesco a Volare");
}

mixin Verso {
  void cammina() => print("Riesco a fare versi");
}

mixin Beccare {
  void beccare() => print("Riesco a Beccare");
}

abstract class Volatile{

}


class Canarino extends Volatile with Camminare,Volare,Verso,Beccare {

}

class Kiwi extends Volatile with Camminare ,Verso,Beccare{

}

