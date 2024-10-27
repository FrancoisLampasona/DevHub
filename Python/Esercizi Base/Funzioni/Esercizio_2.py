# Scrivi una funzione che prende una stringa e restituisce la stringa invertita.

stringa = input("Inserisci una stringa : ")


def inverti_stringa(stringa):
    stringa_reverse = ""
    i = len(stringa)-1
    while i >= 0:
        stringa_reverse += stringa[i]
        i -= 1
    return stringa_reverse


print(inverti_stringa(stringa))
