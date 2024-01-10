const userKm = document.getElementById('userKm')
const userAge = document.getElementById('userAge')
const button = document.getElementById('button')
const resultPrice = document.getElementById('ticket-price')

//chiedere numero km


button.addEventListener('click', function(){
    const basePrice = userKm.value*0.21;
    console.log(basePrice)

    const age = userAge.value;
    console.log(age)

    
})