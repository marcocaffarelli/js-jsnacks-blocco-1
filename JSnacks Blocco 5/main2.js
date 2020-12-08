// Scrivi una funzione che accetti una stringa come
// argomento e la ritorni girata (es. Ciao -> oaiC)

//funzione che inverte il testo
function invertiTesto(stringa) {
    stringa = stringa.split("").reverse().join("");
    console.log(stringa);
   
};

//invocazione della funzione sulla stringa "ciao"
invertiTesto("ciao");
//invocazione della funzione sulla stringa "stringa"
invertiTesto("stringa");