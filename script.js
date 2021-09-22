//calculation of rate
function compute(){
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
    var interest = principal * years * rate / 100;
    var year  = new Date().getFullYear() + years;

    document.getElementById("result").innerHTML = "Interest : If you deposit " + principal + ",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"
}
//update slider value to the span rate
function updateRate(){
    document.getElementById("sliderValue").innerHTML = document.getElementById("rate").value;
}
//validation of principal to be positive int
function validateAmount() {
    var principal = document.getElementById("principal").value;
    var biggerThanZero = parseInt(principal) > 0;
    if (!biggerThanZero) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
}
//dropdown quantitiy for creating option
function quantity(){
    var items = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]; 
    var selectElem = document.getElementById("years"); 
    for (var i = 0; i < items.length; i++){
        var item = items[i]; 
        var element = document.createElement("option"); 
        element.innerText = item; 
        selectElem.append(element); 
    }
}
//loading function quantity 
document.addEventListener("DOMContentLoaded", function() { 
    quantity(); 
});