const userKm = document.getElementById('userKm')
const userAge = document.getElementById('userAge')
const button = document.getElementById('button')
const resultPrice = document.getElementById('ticket-price')


button.addEventListener('click', function(){

    const basePrice = userKm.value*0.21;
    console.log(basePrice)
    resultPrice.innerText=basePrice.toFixed(2);

    const age = userAge.value;
    console.log(age)

    if(age < 18){
        const price = basePrice-basePrice*20/100;
        console.log(price)
        resultPrice.innerText=price.toFixed(2);
    }

    if(age >= 65){
        const price = basePrice-basePrice*40/100;
        console.log(price)
        resultPrice.innerText=price.toFixed(2);

    }

    
})