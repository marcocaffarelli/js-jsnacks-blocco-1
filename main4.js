// Scrivi una funzione che fonda due array (con lo stesso
//     numero di elementi) prendendo alternativamente gli
//     elementi da uno e dall’altro
//     es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

//array di numeri e lettere
var listaLettere = ["a","b","c"];
var listaNumeri = [1,2,3];
//array mista in cui fondere gli elementi delle prime due liste
var listaMista = [];

//ciclo for che inserisce gli elementi delle prime due liste nella terza lista
for (var i = 0; i < listaLettere.length; i++) {
    listaMista.push(listaLettere[i], listaNumeri[i]);
        
 };
console.log(listaMista);

