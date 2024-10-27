

void main (){

final eta = 25;

//Cattura eccezioni

try {
  serviAlcolico(eta);
}on ClienteMinorenneException catch(e){
  print("Alcolico non servito");
}finally{  // Viene sempre eseguito al di la del risultato della catch o del try
  print("Il cliente è tornato a cas");
}


}

bool isMaggiorenne(int eta) => eta >= 18;

void serviAlcolico(int eta){
  final maggiorenne = isMaggiorenne(eta);


 /* if(maggiorenne){
    print("Alcolico Servito");
  }else{
    print("Alcolico non servito");
  }*/

  if(!maggiorenne){
    throw ClienteMinorenneException("Il cliente è maggiorenen");
  }

  print("Alcolico Servito");

}

class ClienteMinorenneException implements Exception {

final String msg;

ClienteMinorenneException (this.msg);

@override
String toString() => msg;



}