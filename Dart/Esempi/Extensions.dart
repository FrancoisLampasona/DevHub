void main (){
final word = "abba";

print(word.palindroma(word) ? "$word è palindroma" : "$word non è palindroma");

}

extension ExtensionPalindroma on String {
bool palindroma (String word){
for (int i = 0;i<word.length ~/2;i++){
  if (word[i]!=word[word.length-i-1]){
    return false;
  }
}
return true;

}
}