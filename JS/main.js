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
    let price=userKm*0.21;
    console.log(price)

    //input fascia d'età
    const userAge=userAgeInput.value;
    console.log(userAge)

    //ticketPrice.innerText=price

    //calcolare sconto:

        //sconto base:
        let discountPerc=0;

        //se il passeggero è minorenne applicare sconto del 20%
    if(userAge=='minorenne'){
        discountPerc=20;
    }
        //se il passeggero è over 65 applicare sconto del 40% 
    if(userAge=='over65'){
        discountPerc=40;
   }

   //calcolo prezzo finale:
   price=price-price*discountPerc/100;
   console.log(price)



    
})