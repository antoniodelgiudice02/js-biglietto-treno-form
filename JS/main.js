const userNameInput=document.getElementById('userName')
const userKmInput = document.getElementById('userKm')
const userAgeInput = document.getElementById('userAge')
const enter = document.getElementById('enter')
const reset=document.getElementById('reset')
const ticketPrice = document.getElementById('ticketPrice')



enter.addEventListener('click', function(){

    //input username
    const userName=userNameInput.value;
    console.log(userName);

    //input Km
    const userKm=userKmInput.value;
    console.log(userKm)

    //calcolare il prezzo base del biglietto (0.21 per km)
    const startPrice=userKm*0.21;
    console.log(startPrice)

    //input fascia d'età
    const userAge=userAgeInput.value;
    console.log(userAge)
    

    
})