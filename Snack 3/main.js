let i = 0;
let somma = 0;

while (i < 5){
    let numero = parseInt(prompt("Inserisci un numero: "));
    somma += numero;
    i++;
}

console.log(`La somma dei cinque numeri che hai inserito è ${somma}`);