console.log('JS OK');


// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


// Chiedi all’utente la sua email

const email = prompt('Inserisci la tua e-mail')

// console.log(email);


// email presenti nella lista 
const emailValide = [ 'alessandro.r14@gmail.com', 'mario@gmail.com', 'francesco@gmail.com', 'luigi@gmail.com'];

// stampa un messaggio appropriato sull’esito del controllo.


// controlla che sia nella lista di chi può accedere
for (let i=0; i < emailValide.length; i++){
    if(email== emailValide[i]){

    }
}




// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.