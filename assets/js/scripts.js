var currentNumberLink = document.getElementById("currentNumber"); //aqui se armazena o valor informado
var currentNumber = 0;

function increment (){
    currentNumber = currentNumber + 1;
    currentNumberLink.innerHTML = currentNumber;
}

function decrement (){
    currentNumber = currentNumber - 1;
    currentNumberLink.innerHTML = currentNumber;
}