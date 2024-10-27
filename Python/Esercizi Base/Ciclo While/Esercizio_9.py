# Chiedere all'utente di inserire una stringa. Stampare solo le consonanti della stringa usando un loop while.

stringa = input("Inserisci una stringa")
i = 0

while i < len(stringa):
    if stringa[i] not in "aeiou":
        print(stringa[i])
