// DOM Selectors 
const display = document.getElementById("display");
const btnDecrease = document.getElementById("btnDecrease");
const btnReset = document.getElementById("btnReset");
const btnIncrease = document.getElementById("btnIncrease");

// Variables
let counter = 0;

// Functions
// Increment Button 
let increment = () => {
    counter++;
    console.log(counter, "increment");
    styleChanger();
    display.innerHTML = counter;
};

// Decrement Button 
let decrement = () => {
    counter--;
    console.log(counter, "decrement");
    styleChanger();
    display.innerHTML = counter;
};

// Reset Button 
let reset = () => {
    counter = 0;
    console.log(counter, "reset");
    styleChanger();
    display.innerHTML = counter;
};

// Style Changes
let styleChanger = () => {if (counter < 0) {
  display.style.color = "red"
} else if (counter > 0) { 
    display.style.color = "green"   
} else if (counter === 0)  {
    display.style.color = "black"
}
};

// Event Listeners
btnDecrease.addEventListener("click", decrement);
btnReset.addEventListener("click", reset);
btnIncrease.addEventListener("click", increment);