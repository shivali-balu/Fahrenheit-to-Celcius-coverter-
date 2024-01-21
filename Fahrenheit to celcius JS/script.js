const Fahrenheit = document.getElementById("Fahrenheit") ; 
const Celsius = document.getElementById("Celsius") ;  

Fahrenheit.addEventListener('input' , fahtocel ) ; 
Celsius.addEventListener('input' , celtofah) ; 


function fahtocel() {
    let result = (parseFloat(Fahrenheit.value)-32)*5/9 ; 
    Celsius.value = result;   
} 

function celtofah() {
    let result = (parseFloat(Celsius.value)*9/5)+32 ; 
    Fahrenheit.value = result ; 
} 

function resetInputs() {
    // Get all input elements and set their values to an empty string
    document.querySelectorAll('input').forEach(input => {
      input.value = '';
    });
}








