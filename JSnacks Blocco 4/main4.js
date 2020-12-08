///////////////////////// JSnack 4A /////////////////////////

// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà:
// nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre
// saranno tutte settate a 0.

var squadre = [
    {
        nome : "Roma",
        puntiFatti : 0,
        falliSubiti : 0
    },
    {
        nome : "Juventus",
        puntiFatti : 0,
        falliSubiti : 0
    },
    {
        nome : "Bologna",
        puntiFatti : 0,
        falliSubiti : 0
    },
    {
        nome : "Inter",
        puntiFatti : 0,
        falliSubiti : 0
    },
    {
        nome : "Milan",
        puntiFatti : 0,
        falliSubiti : 0
    }
]
//console.log(squadre);

///////////////////////// JSnack 4B /////////////////////////
// Generare numeri random al posto degli 0 nelle proprietà:
// punti fatti e falli subiti


//Senza ciclo
// squadre[0].puntiFatti =  Math.floor(Math.random() * 100); 
// squadre[0].falliSubiti =  Math.floor(Math.random() * 100);  
// squadre[1].puntiFatti =  Math.floor(Math.random() * 100); 
// squadre[1].falliSubiti =  Math.floor(Math.random() * 100);   
// squadre[2].puntiFatti =  Math.floor(Math.random() * 100); 
// squadre[2].falliSubiti =  Math.floor(Math.random() * 100);   
// squadre[3].puntiFatti =  Math.floor(Math.random() * 100); 
// squadre[3].falliSubiti = Math.floor(Math.random() * 100);   
// squadre[4].puntiFatti =  Math.floor(Math.random() * 100); 
// squadre[4].falliSubiti =  Math.floor(Math.random() * 100);  
 

//ciclo for
for (var i = 0; i < squadre.length; i++) {
    squadre[i].puntiFatti =  Math.floor(Math.random() * 100);
    squadre[i].falliSubiti =  Math.floor(Math.random() * 100);
};
console.log(squadre);

//ciclo forEach
// squadre.forEach(function (item) {
//     item.puntiFatti =  Math.floor(Math.random() * 100);
//     item.falliSubiti =  Math.floor(Math.random() * 100);
// });
// console.log(squadre);

