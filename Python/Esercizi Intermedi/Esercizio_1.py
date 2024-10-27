# Scrivi un programma che chieda due numeri all'utente tramite la funzione input e mostri il più grande tra i due utilizzando la funzione print.
# Per quanto Python disponga di una funzione max(), siete invitati ad utilizzare le istruzioni istruzioni if, elif ed else per la scrittura dell'algoritmo.

x = int(input("Inserisci un numero :"))
y = int(input("Inserisci un secondo numero : "))

if x == y:
    print ("I numeri sono identici")
elif x > y:
    print (f"Il numero più grande tra i due è {x}")
else :
    print(f"Il numero più grande tra i due è {y}")