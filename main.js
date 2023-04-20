let numberButton = document.querySelectorAll (".numberButton");
let featureDisplay = document.querySelector ("#outputContainer");
let calcButtons = document.querySelectorAll (".calcButton");
let equals = document.querySelector ("#equals");
let clears = document.querySelector ("#clear");

for (let buttons of calcButtons){
    buttons.addEventListener("click",(event) => {
        console.log(event.target.innerText);
        featureDisplay.innerText += event.target.innerText;
    });
}

equals.addEventListener("click", (event) => {
    let answer = eval(featureDisplay.innerText);
    console.log(answer); 
    featureDisplay.innerText = answer;
});

clears.addEventListener("click", (event) => {
    featureDisplay.innerText = '';
});
