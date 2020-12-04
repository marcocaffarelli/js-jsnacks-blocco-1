//variabili
// un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
var piccolo = 1; //a
var grande = 4; //b
var listaNumeri = [2, 5, 7, 9];
var listaCompleta = [];

// Scrivi una funzione che accetti tre argomenti:
function fusione(a, lista, b, lista2) {
    //ciclo for per inserire gli elementi della lista in lista2
    for (var i = 0; i < lista.length; i++) {
        lista2.push(lista[i])  
    }
    // inserisco alla fine della lista2 b
    lista2.push(b) 
    // inserisco all'inizio della lista2 a
    lista2.unshift(a)
};

// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”
fusione(piccolo, listaNumeri, grande, listaCompleta)
console.log(listaCompleta);