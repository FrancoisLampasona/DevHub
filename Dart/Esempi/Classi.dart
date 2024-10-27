
void main() {

final MarioRossi = Persona();
MarioRossi.nome = "Mario";
MarioRossi.cognome ="Rossi";
MarioRossi.eta = 27 ;
MarioRossi.altezza = 178;
MarioRossi.peso = 60 ;
  
print(MarioRossi);

// Singolarmente
print(MarioRossi.nome);
print(MarioRossi.cognome);
print(MarioRossi.eta);
print(MarioRossi.altezza);
print(MarioRossi.peso);

}

class Persona {

var nome;
var cognome;
var eta;
var altezza;
var peso;


void cammina () => print ("Che bella passeggiata !");
void parla () => print("Sono un pò pazzo");
void mangia () => print("Che buona questa carbonara!");


// Override meta deta perchè già presente la funzione toString dentro class Persona
@override 
String toString () => '''
Nome : $nome
Cognome : $cognome
Età : $eta
Altezza : $altezza
Peso : $peso
''';

}