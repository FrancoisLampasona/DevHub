void main () async{

//Generatore Asincrono
  await for (final number in fibonacci(10)){
    print(number);
  }

// Generatore Sincrono
  print(fibonacci2(10));

}

// Generatore Asincrono

Stream <int> fibonacci (int n) async* {
  int _fibonacci(int n) => n <= 2 ? 1 : _fibonacci(n-2) + _fibonacci(n-1);

yield _fibonacci(n);

if(n > 2){
  yield* fibonacci(n-1);
}

}

// Generatore Sincrono


Iterable <int> fibonacci2 (int n) sync* {
int _fibonacci2(int n) => n <= 2 ? 1 : _fibonacci2(n-2) + _fibonacci2(n-1);

yield _fibonacci2(n);

if(n > 2){
  yield* fibonacci2(n-1);

}

}

