public class Variabili {
    public static int numero = 10; // Dichiarazione di una variabile statica di tipo intero

    public static void main(String[] args) {
        esercizio_1();
        esercizio_2();
        esercizio_3();
        esercizio_4();
        esercizio_5();
        esercizio_6();
        esercizio_7();
        esercizio_8();
        esercizio_9();
    }

    /*
     * Esercizio 1
     * Scrivi un programma Java che dichiara una variabile intera chiamata "numero"
     * e le assegna il valore 10. Stampa il valore della variabile.
     */

    private static void esercizio_1() {
        numero = 10;
        System.out.println(numero);
    }

    /*
     * Esercizio 2
     * Scrivi un programma Java che dichiara una variabile di tipo float chiamata
     * "altezza" e le assegna il valore 1.75. Stampa il valore della variabile.
     */

    private static void esercizio_2() {
        float altezza = 1.75f;
        System.out.println(altezza);
    }

    /*
     * Esercizio 3
     * Scrivi un programma Java che dichiara una variabile di tipo boolean chiamata
     * "isPieno" e le assegna il valore true. Stampa il valore della variabile.
     */

    private static void esercizio_3() {
        boolean isPieno = true;
        System.out.println(isPieno);
    }

    /*
     * Esercizio 4
     * Scrivi un programma Java che dichiara una variabile di tipo char chiamata
     * "lettera" e le assegna il valore 'A'. Stampa il valore della variabile.
     */

    private static void esercizio_4() {
        char lettera = 'A';
        System.out.println(lettera);
    }

    /*
     * Esercizio 5
     * Scrivi un programma Java che dichiara una variabile di tipo String chiamata
     * "nome" e le assegna il valore "Mario Rossi". Stampa il valore della
     * variabile.
     */

    private static void esercizio_5() {
        String nome = "Mario Rossi";
        System.out.println(nome);
    }

    /*
     * Esercizio 6
     * Scrivi un programma Java che dichiara una variabile di tipo double chiamata
     * "peso" e le assegna il valore 68.5. Stampa il valore della variabile.
     */

    private static void esercizio_6() {
        double peso = 68.5;
    }

    /*
     * Esercizio 7
     * Scrivi un programma Java che dichiara due variabili intere chiamate "numero1"
     * e "numero2" e le assegna i valori 5 e 10 rispettivamente. Calcola la somma
     * delle due variabili e stampa il risultato.
     */

    private static void esercizio_7() {
        int numero1 = 5;
        int numero2 = 10;
        System.out.println(numero1 + numero2);
    }

    /*
     * Esercizio 8
     * Scrivi un programma Java che dichiara due variabili di tipo double chiamate
     * "prezzo1" e "prezzo2" e le assegna i valori 4.99 e 2.5 rispettivamente.
     * Calcola la differenza tra le due variabili e stampa il risultato.
     */

    private static void esercizio_8() {
        double prezzo1 = 4.99;
        double prezzo2 = 2.5;
        System.out.println(prezzo1 - prezzo2);
    }

    /*
     * Esercizio 9
     * Scrivi un programma Java che dichiara una variabile intera chiamata
     * "annoDiNascita" e le assegna il valore 1990. Calcola l'età basandoti
     * sull'anno corrente (supponi che sia il 2023) e stampa il risultato.
     */

    private static void esercizio_9() {
        int annoDiNascita = 1990;
        int annoCorrente = 2023;
        System.out.println(annoCorrente - annoDiNascita);
    }

}
