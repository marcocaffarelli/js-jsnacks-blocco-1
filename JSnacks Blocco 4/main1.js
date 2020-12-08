///////////////////////// JSnack 1A /////////////////////////
// Creare un oggetto palla che abbia le seguenti proprietà.
// Nome = palla
// Peso = 10

var palla = {
    nome : "palla",
    peso : "10"
};
console.log(palla);

///////////////////////// JSnack 1B /////////////////////////
// Attraverso un prompt dare la possibilità all’utente di
// modificare il peso della palla. 

var peso2 = prompt("inserisci un peso")
palla['peso'] = peso2;
console.log(palla);