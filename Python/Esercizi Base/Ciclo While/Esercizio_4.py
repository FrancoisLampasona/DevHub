# Chiedere all'utente di indovinare un numero intero casuale compreso tra 1 e 10. Continuare a chiedere all'utente
# di indovinare finché non indovina il numero corretto. Usare un loop while.

import random

numero = random.randint(1, 10)
i = 0

while i != numero:
    i = int(input("Inserisci un numero da 1 a 10 : "))

print(f"Il numero era {i}")
