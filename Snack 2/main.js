let n = parseInt(prompt("Inserisci un numero: "));

let i = 0;

while(i < n){

    let array = [];

    for(x = 0; x < 10; x++){
        array.push(Math.floor(Math.random() * 100) + 1);
    }

    console.log(array);
    i++;
}