let array = [];
let somma = 0;

while(somma < 50){
    let numero = parseInt(prompt("Inserisci un numero: "));
    array.push(numero);
    somma += numero;
    if(somma > 50){
        array.pop();
    }
}

console.log(array);
console.log(somma);