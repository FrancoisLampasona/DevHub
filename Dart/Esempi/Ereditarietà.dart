
void main() {

final MarioRossi = Persona("Mario","Rossi",27,178,60,);
final GiuseppeBianco = Lavoratore("Giuseppe","Bianco",28,178,60,8,"Design");
MarioRossi.nome="Luca";
print(MarioRossi);
print("");
print(GiuseppeBianco);

}


class Persona {


 String _nome;
 String _cognome;
 int _eta;
 int _altezza;
 double _peso;
 String? _sesso;

// Sesso è nullable quindi viene aggiunto [come parametro opzionale]
 Persona( this._nome , this._cognome, this._eta , this._altezza, this._peso,[this._sesso]);

 Persona.Uomo( 
this._nome , 
this._cognome, 
this._eta ,
this._altezza,
this._peso,
): _sesso = "M";

 Persona.Donna( 
this._nome , 
this._cognome, 
this._eta ,
this._altezza,
this._peso,
): _sesso = "F";

void cammina () => print ("Che bella passeggiata !");
void parla () => print("Sono un pò pazzo");
void mangia () => print("Che buona questa carbonara!");

String get nome => _nome ;
set nome (String nome) => _nome = nome ;


// Override meta deta perchè già presente la funzione toString dentro class Persona
@override 
String toString () => '''
Nome : $_nome
Cognome : $_cognome
Età : $_eta
Altezza : $_altezza
Peso : $_peso
Sesso : $_sesso
''';

}


// In questo modo lavoratore sta ereditando attributi e metodi di Persona

class Lavoratore extends Persona {

  int _esperienza;
  String _mansione;

  Lavoratore (
  String nome , 
  String cognome ,
  int eta, 
  int altezza , 
  double peso ,
  this._esperienza,
  this._mansione,
  [String? sesso]
  ): super(nome ,cognome , eta ,altezza, peso ,sesso);

  String seniority (){
    String seniority;

    if (_esperienza <3){
      seniority= "Junior";
    }else if (_esperienza > 5){
      seniority = "Senior";
    }else{
      seniority = "Middle";
    }

    return seniority;

  }

@override
String toString () => '''
${super.toString()}
Esperienza : $_esperienza
Mansione : $_mansione
''';

@override
void parla () => super.parla();

}