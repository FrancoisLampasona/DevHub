# Scrivere un programma che chieda all'utente di inserire un carattere. Se il carattere è una vocale (a, e, i, o, u), 
# stampare "Il carattere inserito è una vocale". Se il carattere è una consonante isAlpha(), stampare "Il carattere inserito è una consonante". 
# Se il carattere non è una lettera, stampare "Il carattere inserito non è una lettera".


carattere = input("Inserisci un carattere: ")

if carattere in "aeiou":
    print("Il carattere inserito è una vocale")
elif carattere.isalpha():
    print("Il carattere inserito è una consonante")
else:
    print("Il carattere inserito non è una lettera")

