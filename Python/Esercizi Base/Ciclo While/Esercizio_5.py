# Chiedere all'utente di inserire una stringa. Stampare la stringa al contrario usando un loop while.

stringa = input("Inserisci una stringa:")
i = len(stringa) - 1
while i >= 0:
    print(stringa[i])
    i -= 1
