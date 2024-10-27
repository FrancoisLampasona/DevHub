# Scrivi una funzione che prende una lista di parole e restituisce una lista contenente solo le parole che iniziano con una lettera specificata.

lista_parole = ["ciao", "come", "stai", "oggi"]


def funzione_parole(lista_parole):
    new_stringa = []
    for x in lista_parole:
        if x[0] == "c":
            new_stringa.append(x)
    return new_stringa


print(funzione_parole(lista_parole))
