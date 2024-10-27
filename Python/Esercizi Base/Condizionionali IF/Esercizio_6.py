# Scrivere un programma che chiede all'utente di inserire un numero e stampa "Il numero è compreso tra 1 e 10"
# se il numero è compreso tra 1 e 10, altrimenti stampa "Il numero non è compreso tra 1 e 10".


numero = int(input("Inserisci un numero: "))
if 1 <= numero <= 10:
    print("Il numero è compreso tra 1 e 10")
else:
    print("Il numero non è compreso tra 1 e 10")
