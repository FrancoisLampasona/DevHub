# Contare quante volte l'elemento "2" appare nella lista precedente.

lista_numeri = [x for x in range(1,6)]
lista_numeri.sort(reverse=True)

count_2 = lista_numeri.count(2)

print(count_2)

