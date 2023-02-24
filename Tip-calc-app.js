window.onload = function(){

    let bill = document.getElementById("bill") 
    let keyItems = Array.from(document.getElementsByClassName("key-items"));
    let custom = document.getElementById("custom");
    let numberOfPeople = document.getElementById("people-num");
    let tipAmount = document.getElementById("tip-amount"); 
    let total = document.getElementById("total"); 
    let error = document.getElementById("error") ;
    let reset = document.querySelector(".reset")  
    
    keyItems.forEach(key => {key.addEventListener("click",()=>{
        if(numberOfPeople.value == "" || numberOfPeople.value == "0"){
            error.style.opacity = "1";
            numberOfPeople.style.border = "0.1em solid red" 
        }
        else{
            let percent = key.innerText.toString().slice(0, -1);
            let answer = (((percent)/(100))*((bill.value)/(numberOfPeople.value))).toFixed(2);
            tipAmount.innerText = "$"+ answer ;
            total.innerText = "$"+ ((Number(bill.value) / Number(numberOfPeople.value))+Number(answer)).toFixed(2);
            error.style.opacity = "0";
            numberOfPeople.style.border = "0.1em solid transparent" 
        }  
    })})
    
    custom.addEventListener("input",()=>{
        if(numberOfPeople.value == "" || numberOfPeople.value == "0"){
            error.style.opacity = "1";
            numberOfPeople.style.border = "0.1em solid red" 
        }
        else{
            let percent = custom.value.toString();
            let answer = (((percent)/(100))*((bill.value)/(numberOfPeople.value))).toFixed(2);
            tipAmount.innerText = "$"+ answer ;
            total.innerText = "$"+ ((Number(bill.value) / Number(numberOfPeople.value))+Number(answer)).toFixed(2);
            error.style.opacity = "0";
            numberOfPeople.style.border = "0.1em solid transparent" 
        }  
    }) 
    
    reset.addEventListener("click",()=>{
        tipAmount.innerText = "$" + "0.00";
        total.innerText = "$" + "0.00";
        bill.value = "" ;
        numberOfPeople.value = "" ;
        custom.value = "" ;
        error.style.opacity = "0";
        numberOfPeople.style.border = "0.1em solid transparent" 
    })
    
    numberOfPeople.addEventListener("input",()=>{
        numberOfPeople.style.border = "0.1em solid transparent" 
        error.style.opacity = "0";
    })  
    }