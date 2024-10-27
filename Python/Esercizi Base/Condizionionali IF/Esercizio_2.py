# Scrivere un programma che chiede all'utente di inserire due numeri e stampa
# "Il primo numero è maggiore" se il primo numero è maggiore del secondo,
# "Il secondo numero è maggiore" se il secondo numero è maggiore del primo, altrimenti stampa "I numeri sono uguali".

numero_primo = int(input("Inserisci il primo numero :"))
numero_secondo = int(input("Inserisci il secondo numero :"))

if numero_primo > numero_secondo:
    print("Il primo numero è maggiore del secondo")
elif numero_primo == numero_secondo:
    print("I due numeri sono uguali")
else:
    print("Il secondo numero è maggiore del primo")
