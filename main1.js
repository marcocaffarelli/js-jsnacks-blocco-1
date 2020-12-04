//Zucchine
// Crea 10 oggetti che rappresentano una zucchina,
// indicando per ognuna varietà, peso e lunghezza.
var zucchinaChiaraFaenza = {
    peso : 10,
    lunghezza : 0.9
};
var zucchinaFirenze = {
    peso : 12,
    lunghezza : 0.3
};
var zucchinaRieti = {
    peso : 7,
    lunghezza : 0.4
};
var zucchinaRoma = {
    peso : 18,
    lunghezza : 0.5
};
var zucchinaTerni = {
    peso : 3,
    lunghezza : 0.4
};
var zucchinaPerugia = {
    peso : 6,
    lunghezza : 0.2
};
var zucchinaParma = {
    peso : 7,
    lunghezza : 0.7
};
var zucchinaViterbo= {
    peso : 8,
    lunghezza : 0.1
};
var zucchinaTorino = {
    peso : 16,
    lunghezza : 0.8
};
var zucchinaBolzano = {
    peso : 11,
    lunghezza : 1
};

//calcolato il peso sommando ogni zucchina
// var pesoZucchine =zucchinaChiaraFaenza.peso + zucchinaFirenze.peso + zucchinaRieti.peso + zucchinaRoma.peso + zucchinaTerni.peso + zucchinaPerugia.peso + zucchinaParma.peso + zucchinaViterbo.peso + zucchinaTorino.peso + zucchinaBolzano.peso;
// console.log("Peso delle zucchine: " + pesoZucchine);

//creata un array dove andranno inserite le zucchine
var listaZucchine = [];

//inserisco nell'array le zucchine tramite push
listaZucchine.push(zucchinaChiaraFaenza, zucchinaFirenze, zucchinaRieti, zucchinaRoma, zucchinaTerni, zucchinaPerugia, zucchinaParma, zucchinaViterbo, zucchinaTorino, zucchinaBolzano);
//console.log(listaZucchine);

//var del peso totale che deve partire da zero
var pesoTotale = 0;

//ciclo for per sommare i pesi delle diverse zucchine
for(var i = 0; i < listaZucchine.length; i++){  
    pesoTotale = pesoTotale + listaZucchine[i].peso;
}
console.log("Peso delle zucchine: " + pesoTotale + "kg");