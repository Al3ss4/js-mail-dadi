console.log('JS OK');


// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


// Chiedi all’utente la sua email

var email = prompt('Inserisci la tua e-mail')

// console.log(email);


// email presenti nella lista 
var emailValide = [ 'alessandro.r14@gmail.com', 'mario@gmail.com', 'francesco@gmail.com', 'luigi@gmail.com'];

// stampa un messaggio appropriato sull’esito del controllo.
// se l'email sarà presente nella lista, il messaggio verrà cambiato nel if
var veroFalso = 'la tua e-mail non è valida';


// controlla che sia nella lista di chi può accedere
for (let i=0; i < emailValide.length; i++){
    if(email == emailValide[i]){
        veroFalso = 'la tua e-mail è valida';
    }
}
console.log(veroFalso);



// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.



//Generare un numero random da 1 a 6 per il giocatore

var giocatore = Math.floor(Math.random () * 6) + 1;
 console.log('giocatore', giocatore);


//Generare un numero random da 1 a 6 per il computer
var computer = Math.floor(Math.random () * 6) + 1;
 console.log('computer', computer);

 //messaggio di pareggio tra giocatore e computer, il messaggio si modificherà nell if, se vincerà il giocatore uscirà messaggio vittoria giocatore, viceversa per il computer 
 var messaggioPareggioVittoria = 'Avete pareggiato!'

if( giocatore > computer){
    messaggioPareggioVittoria ='Il giocatore ha vinto!';
}
    else if( giocatore < computer){
        messaggioPareggioVittoria ='Il computer ha vinto!';
    }

console.log(messaggioPareggioVittoria);
