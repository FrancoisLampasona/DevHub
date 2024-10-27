void main(){
  final MarioRossi = Persona.Uomo("Mario","Rossi",21,175,60,);
  final LucaPalermo = Persona.Uomo("Luca","Palermo",51,175,60,);
  print(MarioRossi);
  print(Persona.PIL);

final diffeta = Persona.differenzaeta(MarioRossi.eta, LucaPalermo.eta);
print(diffeta);

}

class Persona {
  String _nome;
  String _cognome;
  int _eta;
  int _altezza;
  double _peso;
  String? _sesso;
  static const PIL = 50000;

  Persona(
    this._nome,
    this._cognome,
    this._eta,
    this._altezza,
    this._peso,
    [this._sesso,]
  );

  Persona.Uomo (
    this._nome,
    this._cognome,
    this._eta,
    this._altezza,
    this._peso,
  ): _sesso = "M" ;

  Persona.Donna (
    this._nome,
    this._cognome,
    this._eta,
    this._altezza,
    this._peso,
  ) : _sesso = "F" ;

void cammina () => print ("Che bella passeggiata !");
void parla () => print("Sono un pò pazzo");
void mangia () => print("Che buona questa carbonara!");

int get eta => _eta;

//Aggiungere un metodo statico

static int differenzaeta (int eta1,int eta2) => (eta1-eta2).abs();


}