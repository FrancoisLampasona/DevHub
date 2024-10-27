void main () {
  print(5 + 8); // Semplice addizione
  print(5 + 8 - (7*8) / 2); // Concatenazione di operazioni

  var a = 5;
  var b = 8;

  print(a != b); // Relazionale
  print(a is int); // Verifica se intero

  var c = int.parse("11",radix: 2);
  var d = int.parse("00",radix: 2);

  print(d & c); 
  print(~d);
  print(c >> 1);


  var e = "Luca";
  String? f;

  f ??= e; // Se la variabile è null assegna Luca
  print(f);

  var luca;
  var dario = "Dario";

  print(luca ?? dario ); // Se Luca è null prende Dario

// Se k is 'true' allora nella stampa verrà aggiunto anche Mario
  var k = true;
  var list = [
    "Luigi",
    "Nicolò",
    if (k) "Mario",
    "Luca",
  ];

  print(list);

// Per aggiungere una lista a valle di un altra

var list1 = [
  "Valentina",
  "Giorgia",
];

var list2 = [
  "Valeria",
  "Sara",
  ...list1 // Aggiungi gli elementi di list 1
];

list.addAll(list2); // Espressione identica

print(list);
print(list2);

// Aggingi sotto forma di stringa concatenna alla lista
var indexes = [1,2,3];
var list3 = [
    "Ettore",
    "Domenico",
    if (k) "Mario",
    "Giorgio",
    for (var index in indexes) "$index"
  ];

print(list3);





}