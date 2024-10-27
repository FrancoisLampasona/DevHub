# Scrivere un programma che chieda all'utente di inserire tre numeri interi.
# Il programma deve verificare se i tre numeri formano un triangolo rettangolo.
# Se i tre numeri formano un triangolo rettangolo,
# stampare "I tre numeri formano un triangolo rettangolo".
# Altrimenti, stampare "I tre numeri non formano un triangolo rettangolo".


a = int(input("Inserisci il primo lato: "))
b = int(input("Inserisci il secondo lato: "))
c = int(input("Inserisci il terzo lato: "))

if a**2 + b**2 == c**2 or a**2 + c**2 == b**2 or b**2 + c**2 == a**2:
    print("I tre numeri formano un triangolo rettangolo")
else:
    print("I tre numeri non formano un triangolo rettangolo")