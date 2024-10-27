void main (){

  final volatili =[
    Piccione(),
    Aquila(),
    Canarino(),
  ];

  volatili.forEach((element) {
    element.verso();
  });

}

class Volatile {

  void volare () => throw UnimplementedError();
  void beccare () => throw UnimplementedError();
  void verso () => throw UnimplementedError();

}

class Piccione implements Volatile {

@override
void volare () => print("Sono un piccione e volo");

@override
void beccare () => print("Che bello beccare");

@override
void verso () => print("Gru Gru");

}
class Aquila implements Volatile {

@override
void volare () => print("Sono un Aquila e volo");

@override
void beccare () => print("Che bello beccare");

@override
void verso () => print("Sfium sfium");

}
class Canarino implements Volatile {

@override
void volare () => print("Sono un piccione e volo");

@override
void beccare () => print("Che bello beccare");

@override
void verso () => print("Cip Cip");

}