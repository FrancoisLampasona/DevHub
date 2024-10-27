import random

class Atleta:
    def __init__(self, nome, punteggio):
        self.nome = nome
        self.punteggio = punteggio

    def __str__(self):
        return f"{self.nome} {self.punteggio}\n"


with open("gara.txt", "w") as f:
    lista = ["Marco", "Giulia", "Andrea", "Vito",
             "Ettore", "Luca", "Maria", "Adriana"]
    for x in lista:
        atleta = Atleta(x, random.randrange(0, 10))
        f.write(str(atleta))

lista_atleti = []
with open("gara.txt", "r") as f:
    for line in f:
        nome, punteggio = line.strip().split()
        atleta = Atleta(nome, int(punteggio))
        lista_atleti.append(atleta)

print("Primi tre classificati:")
for atleta in sorted(lista_atleti, key=lambda atleta: atleta.punteggio, reverse=True)[:3]:
    print(atleta.nome)
print("\n")

lista_atleti.sort(key=lambda atleta: atleta.nome)

with open("gara_ord.txt", "w") as fp:
    for atleta in lista_atleti:
        fp.write(str(atleta))

for atleta in lista_atleti:
    print(atleta)
