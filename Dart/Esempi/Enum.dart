/* import 'Classi.dart';

void main() {
  final MarioRossi = Persona.Uomo(
    "Mario",
    "Rossi",
    21,
    175,
    60,
  );

  print(MarioRossi);
  print(Sex.values);
}

enum Sex { M, F }

class Persona {
  String _nome;
  String _cognome;
  int _eta;
  int _altezza;
  double _peso;
  Sex? _sesso;

  Persona(
    this._nome,
    this._cognome,
    this._eta,
    this._altezza,
    this._peso, [
    this._sesso,
  ]);

  Persona.Uomo(
    this._nome,
    this._cognome,
    this._eta,
    this._altezza,
    this._peso,
  ) : _sesso = Sex.M;

  Persona.Donna(
    this._nome,
    this._cognome,
    this._eta,
    this._altezza,
    this._peso,
  ) : _sesso = Sex.F;

  void cammina() => print("Che bella passeggiata !");
  void parla() => print("Sono un pò pazzo");
  void mangia() => print("Che buona questa carbonara!");
}
*/