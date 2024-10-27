# Scrivere un programma che utilizzi un loop for per contare quante volte una lettera compare in una stringa.


stringa = "banana"
conta_a = 0

for lettera in stringa:
    if lettera == "a":
        conta_a += 1

print("La lettera a compare", conta_a, "volte.")
