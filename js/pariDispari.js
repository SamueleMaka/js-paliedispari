function randomNumber(){
    return Math.floor(Math.random() * 5) + 1;
}

function pariDispariFunction(number){
    if(number % 2 == 0){
        return "pari";
    }else{
        return "dispari";
    }
}

let numeroUtente = prompt("Inserisci un numero compreso tra 1 e 5");
let pariDispari = prompt("Inserisci pari o dispari");

let numeroPc = randomNumber();
let somma = numeroPc + numeroUtente

if(pariDispariFunction(somma) === pariDispari){
    console.log("Hai vinto");
}else{
    console.log("hai perso");
}
