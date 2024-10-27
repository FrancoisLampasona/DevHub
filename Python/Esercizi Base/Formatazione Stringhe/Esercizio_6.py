# Facendo riferimento all'esercizio precedente ottenere il seguente 
# risultato modificando i valori nel format(): "Il mio nome è LUCA ed il cognome è RoKKi" 


nome = "Luca"
cognome = "Rossi"
stringa = "Il mio nome è {nome} ed il cognome è {cognome}".format(nome=nome.upper(), cognome=cognome.replace("s", "K"))

print(stringa)

