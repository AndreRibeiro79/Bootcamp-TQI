let currentNumberWrapper = document.getElementById
('currentNumber');
let currentNumber = 0;

//currentNumberWrapper.addEventListener("click");

function increment() {
    currentNumber ++;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber --;
    currentNumberWrapper.innerHTML = currentNumber;
}





