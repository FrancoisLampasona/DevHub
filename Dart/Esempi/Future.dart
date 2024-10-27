void main () async {

print("Inizio Chiamata");
final future = await performHTTPRequest();
print(future); // Stampa dopo 3 secondi

}

Future <String> performHTTPRequest () {

  return Future.delayed(
    const Duration(seconds: 3),
    () => "HTTP Response", 

  );
}