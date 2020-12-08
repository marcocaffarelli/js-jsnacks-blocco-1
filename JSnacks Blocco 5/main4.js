

//array di numeri e lettere
var listaLettere = ["a","b","c"];
var listaNumeri = [1,2,3];
//array mista in cui fondere gli elementi delle prime due liste
var listaMista = [];

//ciclo for che inserisce gli elementi delle prime due liste nella terza lista
// for (var i = 0; i < listaLettere.length; i++) {
//     listaMista.push(listaLettere[i], listaNumeri[i]);
        
//  };
// console.log(listaMista);

//funzione che fonde due liste di uguali dimensioni
function fusione(lista1, lista2, lista3) {
    for (var i = 0; i < lista1.length; i++) {
        lista3.push(lista1[i], lista2[i]);      
     };

};
//invoco la funzione con le mie liste come argomenti
fusione(listaLettere, listaNumeri, listaMista)
console.log(listaMista);