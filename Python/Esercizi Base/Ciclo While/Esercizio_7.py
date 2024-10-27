# Calcolare il fattoriale di un numero intero positivo n usando un loop while.


n = int(input("Inserisci un valore per n: "))
fact = 1
i = 1
while i <= n:
    fact *= i
    i += 1
print("Il fattoriale di", n, "è", fact)
