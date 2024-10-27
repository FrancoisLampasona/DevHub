# Calcolare la somma dei primi n numeri interi positivi usando un loop while. L'utente deve inserire il valore di n.

n = int(input("Inserisci un valore :"))
i = 0
somma = 0

while i < n:
    somma += i
    i += 1
print(somma)
