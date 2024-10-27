# Scrivi una funzione che prende una lista di numeri e restituisce la somma di tutti gli elementi.

lista_numeri = [1,2,3,4,5,6]

def somma_numeri(lista_numeri):
    somma = 0
    for x in lista_numeri:
        somma += x
    return somma

print(somma_numeri(lista_numeri)) 