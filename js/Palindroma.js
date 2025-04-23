function palindroma(stringaP){
    let stringaReverse = "";
    for(let i = stringaP.length-1; i>=0; i--){
        stringaReverse += (stringaP[i]);
    }
    if(stringaP === stringaReverse){
        return true;
    }
}

let stringa = prompt("Inserisci una stringa e provvederò a controllare se è palindroma o meno");

if(palindroma(stringa)){
    console.log(stringa + " è Palindroma!! \n")
}else{
    console.log(stringa + " Non è Palindroma!!")
}

