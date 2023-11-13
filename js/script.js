
/* quando l'utente clicca il bottone recupero i dati in console */
/* definisco l'elemento da "ascoltare" */
const inputDiscount = document.getElementById('check-discount')


/* definisco cosa rilevare e quali output produrre) */
inputDiscount.addEventListener('click', function(){

    /* inserite variabili dentro ricaricare sempre il loro valore all'input sul button rilevato dal listener */
    let userAge = parseInt(document.getElementById('user-Age').value)
    let userDistance = parseFloat(document.getElementById('user-distance').value)
    /* mostrato il valore in console */

    console.log(`User age: ${userAge}`)
    console.log(`User distance: ${userDistance}`)

    /* definisco il prezzo del viaggio */
    let ticketCost = userDistance * 0.1976;

    /* mostro in console prezzo intero */
    console.log(`prezzo intero: ${ticketCost}`)

    /* applico condizioni per lo sconto */
    if(userAge >= 65){
        ticketCost *= 0.4673
    } else if(userAge < 18){
        ticketCost *= 0.8235
    }
    /* mostro in console il prezzo scontato */
    console.log(`prezzo finale: ${ticketCost}`)
    console.log(`prezzo finale arrotondato: ${ticketCost.toFixed(2)}`)

})

