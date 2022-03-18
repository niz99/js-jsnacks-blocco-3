let invitati = ["Nizar", "Martina", "Giorgia", "Valeria", "Cristian", "Francesco"];

let nome = prompt("Inserisci il tuo nome: ");

let i = 0;

let ingresso = false;

while(nome == invitati[i] || i < invitati.length){
    if(nome == invitati[i]){
        ingresso = true;
    }
    i++;
}

if(ingresso == true){
    alert("Sei nella lista degli invitati, puoi entrare!");
} else {
    alert("Non sei nella lista degli invitati, non puoi entrare!");
}