# Utilizzare la formattazione delle stringhe per ottenere "Il numero binario di 42 è 0b101010". Per il binario utilizzare bin(numero)

numero = 42
binario = bin(numero)
stringa = "Il numero binario di 42 e' {}"

print(stringa.format(binario))