# Creare un nuovo set contenente i numeri pari del set precedente.


numeri = set(range(1, 6))

numeri_2 = set(x for x in numeri if x % 2 == 0)

print(numeri_2)