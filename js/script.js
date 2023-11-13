
/* quando l'utente clicca il bottone recupero i dati in console */
/* definisco l'elemento da "ascoltare" */
const inputDiscount = document.querySelector('main div button')

/* definisco cosa rilevare e quali output produrre) */
inputDiscount.addEventListener('click', function(){
    let userAge = document.getElementById('user-Age').value
    let userDistance = document.getElementById('user-distance').value

    console.log(userAge)
    console.log(userDistance)
})



