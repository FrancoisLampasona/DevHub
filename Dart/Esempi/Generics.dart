void main (){

  final stack = Stack();

  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);

  stack.pop();
  print(stack);

}

// Con T al posto di in INT o String permette di creare uno stack di elementi generici
// Astrazione del tipo
// <T extends num> se vogliamo solo numeri interi
class Stack<T>{
  final List<T> items;
  Stack () : items = [];

  void push (T item)=> items.add(item);
  
  void pop () => items.removeLast();
  
  T top () => items.last;
  
  bool get isEmpty => items.isEmpty;

  @override
  String toString () => items.toString(); 
}