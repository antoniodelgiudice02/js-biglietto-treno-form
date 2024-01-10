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

    if(age < 18){
        const resultPrice = basePrice-basePrice*20/100;
        console.log(resultPrice)
    }

    if(age >= 65){
        const resultPrice = basePrice-basePrice*40/100;
        console.log(resultPrice)
    }

    
})