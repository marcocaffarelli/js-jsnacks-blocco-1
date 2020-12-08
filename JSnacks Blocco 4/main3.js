// Creare un oggetto che rappresenti un triangolo rettangolo,
// con le seguenti proprietà: base e altezza.
// Calcolare perimetro e area.
// (ripassiamo il Teorema di Pitagora ;D )

var triangolo = {
    base : 18,
    altezza : 10
};
console.log(triangolo);

//calcolo dell'area
var area = (triangolo.base * triangolo.altezza)/2 
console.log(area);
// Qui è dove sono arrivato con l'esercizio fatto in classe nei 15 minuti

//calcolo dell'ipotenusa 
var ipotenusa = Math.sqrt((triangolo.base*triangolo.base)+(triangolo.altezza*triangolo.altezza));
console.log(ipotenusa);
//calcolo dell'ipotenusa con Math.pow
// var ipotenusa = Math.sqrt(Math.pow(triangolo.base, 2) + Math.pow(triangolo.altezza, 2));
// console.log(ipotenusa);

//calcolo del perimetro
var perimetro = triangolo.base + triangolo.altezza + ipotenusa;
console.log(perimetro);

