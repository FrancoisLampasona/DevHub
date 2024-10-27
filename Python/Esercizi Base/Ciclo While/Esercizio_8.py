# Chiedere all'utente di inserire una lista di numeri interi. Stampare la somma di tutti i numeri usando un loop while.

lst = []
n = int(input("Quanti numeri vuoi inserire? "))
i = 0
while i < n:
    num = int(input("Inserisci un numero: "))
    lst.append(num)
    i += 1
sum = 0
i = 0
while i < len(lst):
    sum += lst[i]
    i += 1
print("La somma di tutti i numeri è", sum)

