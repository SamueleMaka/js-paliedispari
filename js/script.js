
// ========== PALINDROMA ========== 
let stringa = prompt("Inserisci una stringa e provvederò a controllare se è palindroma o meno");

function palindroma(stringaP){
    let stringaReverse = "";
    for(let i = stringaP.length-1; i>=0; i--){
        stringaReverse += (stringaP[i]);
    }
    if(stringaP === stringaReverse){
        return true;
    }
}

if(palindroma(stringa)){
    console.log(stringa + " è Palindroma!! \n")
}else{
    console.log(stringa + " Non è Palindroma!!")
}


// ========== PARI O DISPARI ==========

let numeroUtente = prompt("Inserisci un numero compreso tra 1 e 5");
let pariDispari = prompt("Inserisci pari o dispari");

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

let numeroPc = randomNumber();
let somma = numeroPc + numeroUtente

if(pariDispariFunction(somma) === pariDispari){
    console.log("Hai vinto");
}else{
    console.log("hai perso");
}

