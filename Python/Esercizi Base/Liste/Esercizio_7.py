# Creare una nuova lista che contenga gli elementi con indici dispari della lista precedente.

lista_numeri = [x for x in range(1,6)]

print(lista_numeri)

lista_numeri_2 = lista_numeri[:3]

print(lista_numeri_2)


dispari = lista_numeri_2[1::2]

print(dispari)

