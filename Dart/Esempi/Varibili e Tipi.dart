// Varibili e Tipi :

typedef Dizionario = Map<String,int>; 

void main (){

// Variabile dichiarata in maniera non esplicità 
   
    var Francois;
    Francois = "Francois"; 
    print(Francois);

// Variabile dichiarata in maniera esplicità 

   String name;
   name = Francois;
   print(name);

// Varibile di tipo boolean

   var boolean = true;
   print(boolean);

// Dichiarazione di una lista 
   
   var list = [0,5,10]; // List di interi
   print(list);

   // Accedere al secondo elemento
   print(list[1]);

  // Aggiungere un elemento alla lista
  list.add(45);

  // Rimuovere un elemento da una lista
  list.remove(4); // list.removeAt(posizione nella lista)


// Dichiarazione Set

  var mySet = {"Francois","zPhooenix",12};
  
  mySet.add(34);

  print(mySet); // Set di Objects

  print(mySet.contains(12));

// Dichiarazione di un Dizionario

  var dictionary = {       // Dizionario è un tipo Map / posso utilizzare quindi al posto di "var" la parola "Dizionario"
    "Francois":"zPhooenix", // In questo caso Map <string , int>
    "Luca" : 18,
    "Mario" : 15,
    };

  dictionary["Simone"]=20;

  dictionary.remove("Luca");

  print(dictionary.length);


// Concatenazione e formattazzione

var a = "Francois";
var b = 22;
var c = ["Mele","Banane","Pere"];

print("$a ha $b anni");
print("c contiene ${c.length} elementi");
print("c contiene " + c.length.toString() + "elementi");


// Stringa su più linee

var longstring = ''' Francois
è
alto
1.74
''';

print(longstring);


 }
