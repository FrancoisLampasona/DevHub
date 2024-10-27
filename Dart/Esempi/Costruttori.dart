
void main() {

final MarioRossi = Persona("Mario","Rossi",27,178,60,);
final LucaPalermo = Persona2.Uomo("Luca","Palermo",27,178,60,);
final LuciaMaria = Persona2.Donna("Lucia","Maria",27,178,60,);
  
print(MarioRossi);
print(LucaPalermo);
print(LuciaMaria);

}

class Persona {

var _nome;
var _cognome;
var _eta;
var _altezza;
var _peso;

Persona( String nome , String cognome, int eta , int altezza, double peso){
  _nome : nome;
  _cognome : cognome;
  _eta : eta;
  _altezza : altezza;
  _peso : peso;
}


void cammina () => print ("Che bella passeggiata !");
void parla () => print("Sono un pò pazzo");
void mangia () => print("Che buona questa carbonara!");


// Override meta deta perchè già presente la funzione toString dentro class Persona
@override 
String toString () => '''
Nome : $_nome
Cognome : $_cognome
Età : $_eta
Altezza : $_altezza
Peso : $_peso
''';

}


// Si può anche inserire i dati tramite il costruttore in questa maniera ed è possibile dichiare final le variabili
// Persona( this._nome , this._cognome, this._eta , this._altezza, this._peso);

class Persona2 {


final String _nome;
final String _cognome;
final int _eta;
final int _altezza;
final double _peso;
final String? _sesso;

// Sesso è nullable quindi viene aggiunto [come parametro opzionale]
const Persona2( this._nome , this._cognome, this._eta , this._altezza, this._peso,[this._sesso]);

const Persona2.Uomo( 
this._nome , 
this._cognome, 
this._eta ,
this._altezza,
this._peso,
): _sesso = "M";

const Persona2.Donna( 
this._nome , 
this._cognome, 
this._eta ,
this._altezza,
this._peso,
): _sesso = "F";

void cammina () => print ("Che bella passeggiata !");
void parla () => print("Sono un pò pazzo");
void mangia () => print("Che buona questa carbonara!");


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