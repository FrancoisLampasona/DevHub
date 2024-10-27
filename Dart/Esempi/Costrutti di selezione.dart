void main (){

final eta = 20;
String? tipo;

if (eta < 10){
  tipo = "Bambino";
}else if (eta > 10 && eta < 18 ){
  tipo = "Adolescente";
}else if (eta >= 18 && eta < 60){
  tipo = "Adulto";
}else {
  tipo = "Anziano";
}

print (tipo);


tipo = eta < 18 ? 'Bambino': 'Adulto';

var stato = 3;
var type;

switch (stato) {
  case 1 : type = "Aperto";break;
  case 2 : type = "Chiuso" ; break;
  case 3 : type = "Socchiuso"; break;
  default: type = "Default";
}

print(type);


}