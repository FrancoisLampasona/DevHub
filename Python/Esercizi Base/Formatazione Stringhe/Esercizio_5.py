# Partendo da "nome" e "cognome" utilizzare la formattazione strighe per ottenere "Il mio nome è {nome} ed il cognome è {cognome}". 
# Come da esempio dovete fare riferimento al nome delle variabili e non alla posizione usata dentro format.


nome = "Luca"
cognome = "Rossi"
stringa = "Il mio nome è {nome} ed il cognome è {cognome}".format(nome=nome, cognome=cognome)

print(stringa)

