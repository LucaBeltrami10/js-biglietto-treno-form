
/* quando l'utente clicca il bottone recupero i dati in console */
/* definisco l'elemento da "ascoltare" */
const inputDiscount = document.querySelector('main div button')

/* definisco cosa rilevare e quali output produrre) */
inputDiscount.addEventListener('click', function(){
    /* inserite variabili dentro ricaricare sempre il loro valore all'input sul button rilevato dal listener */
    let userAge = document.getElementById('user-Age').value
    let userDistance = document.getElementById('user-distance').value
    /* mostrato il valore in console */
    console.log(`User age: ${userAge}`)
    console.log(`User distance: ${userDistance}`)

})


/*  */
