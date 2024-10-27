# Scrivere un programma che chieda all'utente di inserire un numero intero. Se il numero è maggiore di 10, 
# stampare "Il numero è maggiore di 10". Se il numero è uguale a 10, stampare "Il numero è uguale a 10".
# Se il numero è minore di 10, stampare "Il numero è minore di 10".


numero = int(input("Inserisci un numero intero: "))

if numero > 10:
    print("Il numero è maggiore di 10")
elif numero == 10:
    print("Il numero è uguale a 10")
else:
    print("Il numero è minore di 10")

