# Scrivere un programma che utilizzi un loop for per calcolare la media di una lista di numeri.

lista_numeri = [1, 2, 3, 4, 5]
somma = 0

for x in lista_numeri:
    somma += x

print(somma/len(lista_numeri))
