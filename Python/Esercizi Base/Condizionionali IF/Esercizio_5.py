# Scrivere un programma che chiede all'utente di inserire una lettera e stampa "La lettera è una vocale" 
# se la lettera è una vocale (a, e, i, o, u), altrimenti stampa "La lettera non è una vocale".

vocale = input("Inserisci una vocale: ")
lista_vocali = ["a","e","i","o","u"]

if (vocale in lista_vocali) == True:
    print("La vocale si trova nell'elenco")
else:
    print("La lettera non è una vocale")