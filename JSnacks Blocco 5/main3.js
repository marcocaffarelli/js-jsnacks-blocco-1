// Crea 10 oggetti che rappresentano una zucchina.
var zucchinaChiaraFaenza = {
    peso : 10,
    lunghezza : 16
};
var zucchinaFirenze = {
    peso : 12,
    lunghezza : 11
};
var zucchinaRieti = {
    peso : 7,
    lunghezza : 8
};
var zucchinaRoma = {
    peso : 18,
    lunghezza : 13
};
var zucchinaTerni = {
    peso : 3,
    lunghezza : 20
};
var zucchinaPerugia = {
    peso : 6,
    lunghezza : 17
};
var zucchinaParma = {
    peso : 7,
    lunghezza : 23
};
var zucchinaViterbo= {
    peso : 8,
    lunghezza : 5
};
var zucchinaTorino = {
    peso : 16,
    lunghezza : 10
};
var zucchinaBolzano = {
    peso : 11,
    lunghezza : 1
};

// Dividi in due array separati le zucchine che misurano
// meno o più di 15cm.

var listaZucchineCorte = [];
var listaZucchineLunghe = [];
//aggiunte le zucchine corte alla listaZucchineCorte
listaZucchineCorte.push(zucchinaFirenze, zucchinaRieti, zucchinaRoma, zucchinaViterbo, zucchinaTorino, zucchinaBolzano);
//console.log(listaZucchineCorte);
//aggiunte le zucchine lunghe alla listaZucchineLunghe
listaZucchineLunghe.push(zucchinaChiaraFaenza, zucchinaTerni, zucchinaPerugia, zucchinaParma);
//console.log(listaZucchineLunghe);

//var del peso zucchine corte che deve partire da zero
var pesoCorte = 0;
//var del peso zucchine lunghe che deve partire da zero
var pesoLunghe = 0;

///////////////////////////// CICLO FOR /////////////////////////////
//ciclo for per sommare i pesi delle zucchine corte
for(var i = 0; i < listaZucchineCorte.length; i++){  
    pesoCorte = pesoCorte + listaZucchineCorte[i].peso;
}
console.log("Peso delle zucchine sotto i 15cm: " + pesoCorte + "kg");
//ciclo for per sommare i pesi delle zucchine lunghe
for(var y = 0; y < listaZucchineLunghe.length; y++){  
    pesoLunghe = pesoLunghe + listaZucchineLunghe[y].peso;
}
console.log("Peso delle zucchine sopra i 15cm: " + pesoLunghe + "kg");

///////////////////////////// CICLO FOREACH /////////////////////////////

//ciclo forEach per sommare i pesi delle zucchine corte
listaZucchineCorte.forEach(function (item) {
    item.pesoCorte = item.pesoCorte + listaZucchineCorte.peso;
     
});
console.log("Peso delle zucchine sotto i 15cm: " + pesoCorte + "kg" + " ciclo forEach");
//ciclo forEach per sommare i pesi delle zucchine lunghe
listaZucchineLunghe.forEach(function (item) {
    item.pesoLunghe = item.pesoLunghe + listaZucchineLunghe.peso;
     
});
console.log("Peso delle zucchine sopra i 15cm: " + pesoLunghe + "kg" + " ciclo forEach");