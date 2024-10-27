// main una funzione che non ristituisce nulla come valore di ritorno

void main() {

final eta = 25;
print(isMaggiorenne(eta)? "Maggiorenne" : "Minorenne");

// Il valore di una funzione può essere assegnato ad una variabile
final fMaggiorenne = isMaggiorenne(eta);
print(fMaggiorenne);

// Parametro nominale
ciaone(eta: eta);


// Cascate Notation
final list = ["Marco","Francesco", "Luca"];
addItem("Giulio", list: list);
print (list);

addItemCascateNotation("Simone", list: list);
print(list);


}

// Le 3 funzioni fanno la stessa cosa

bool isMaggiorenne(int eta){
  bool maggiorenne = false;
  if (eta >=18){
    maggiorenne = true;
  }else{
    maggiorenne = false;
  }
  return maggiorenne;
}

bool isMaggiorenne1(int eta){
  return eta >= 18 ? true : false;
}

bool isMaggiorenne2(int eta){
  return eta >= 18 ? true : false;
}


// Quando una funzione contiene un istruzione semplice da contenersi in una riga
// Allora si pùò creare un arrow faction

bool isMaggiorenne3(int eta) => eta >= 18;


// Per rendere opzionale l'inserimento di un parametro usare le parentesi quadre , deve essere però inizializzato
void printmaggiorenne (bool isMaggiorenne3(int),[int eta = 18 ]) => print("ciao");

// Per rendere opzionale l'inserimento di un parametro [int ? eta] usando la null ability

// Per rendere un parametro nominale basta racchiuderlo tra parentesi graffe {int eta}

void ciaone({int ? eta}) => print("Ciaone");



// Le funzioni si possono innestare
var a = "a";

void f(){
  void g(){
    void h(){
      print(a);
    }
  }
}

// Cascate Notation

List <String> addItem(String item , {required List<String> list}){
  list.add(item);
  return list;
}

List <String> addItemCascateNotation(String item , {required List<String> list}) => list..add(item)..removeAt(0);