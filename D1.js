/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output collega questo file al tuo HTML e apri la console del browser. 
- Dovrai creare una direttiva di output per testare le variabili od i risultati delle espressioni che crei
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

let E1 =
  "I principali datatype in JavaScript (visti finora) sono 3, la stringa, il numero e il valore booleano. la stringa contiene caratteri alfanumerici atti a creare una frase o una" +
  " descrizione, il numero contiene un valore numerico (intero o non) e puo' essere usato per operazioni matematiche, mentre il valore booleano costituisce una risposta di tipo" +
  " vero o falso a una determinata domanda o comparazione che gli proponiamo. oltre a questi esistono i tipi undefined che indica un contenitore senza specifiche indicazioni o " +
  "contenuto e il null che indica un contenitore completamente vuoto. infine esistono altri 3 tipi di dato che non sono ancora stati descritti che sono il Bigint, il Symbol " +
  "e l'object.";
console.log("----------esercizio 1");
console.log(E1);
/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Andrea";
console.log("---------- esercizio 2");
console.log(name);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let A1 = 12;
let A2 = 20;
let total = A1 + A2;
console.log("---------- esercizio 3");
console.log(total);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;
console.log("---------- esercizio 4");
console.log("x =", x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

name = "Cavallo";
const surname = "Andrea";
// surname = "Cavallo";
console.log("---------- esercizio 5");
console.log("il mio cognome e'", name);
console.log("il mio nome e'", surname);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let subtraction = 4 - x;
console.log("---------- esercizio 6");
console.log("il valore sara'", subtraction);
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";
let result = name1 !== name2 ? "i nomi sono diversi" : "i nomi sono uguali";
console.log("---------- esercizio 7");
console.log(result);

/* ESERCIZIO 7
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let result2 = name1 !== name2.toLowerCase ? "i nomi sono uguali" : "i nomi sono diversi";
console.log("---------- extra");
console.log(result2);
