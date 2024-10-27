# Rimuovere l'elemento con chiave "cognome" dal dizionario precedente.

dizionario = dict(nome="Mario", cognome="Rossi", età=30)

dizionario.update({"email":"mario.rossi@email.com"})

del dizionario["cognome"]

print(dizionario)
