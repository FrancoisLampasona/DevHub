
void main() {

final MarioRossi = Persona("Mario","Rossi",27,178,60,);
MarioRossi.nome="Luca";
print(MarioRossi);

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