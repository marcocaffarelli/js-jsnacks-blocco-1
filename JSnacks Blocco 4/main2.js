// Creare un array di oggetti: ogni oggetto descriverà una bici
// da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

var bici = [
    {
        nome : "blue",
        peso : 15,
    },
    {
        nome : "green",
        peso : 20,
    },
    {
        nome : "yellow",
        peso : 7,
    },
    {
        nome : "red",
        peso : 11,
    }
    
]
// ciclo if per trovare la bici con peso minore
if (bici[0].peso<bici[1].peso && bici[0].peso<bici[2].peso && bici[0].peso<bici[3].peso) {
    console.log(bici[0])
}else if(bici[1].peso<bici[0].peso && bici[1].peso<bici[2].peso && bici[1].peso<bici[3].peso){
    console.log(bici[1])
}else if(bici[2].peso<bici[1].peso && bici[2].peso<bici[0].peso && bici[2].peso<bici[3].peso){
    console.log(bici[2])
} else{
    console.log(bici[3])
}

//soluzione vista in classe per trovare la bici con peso minore
var minPeso = bici[0].peso;
var x;
for (var index = 0; index < bici.length; index++) {
    if (bici[index].peso < minPeso) {
        minPeso = bici[index].peso;
        x = index
    }
}
//console.log(minPeso);
console.log(bici[x]);