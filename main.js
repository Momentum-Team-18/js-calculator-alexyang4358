// let featureDisplay = document.querySelectorAll (".current-num");
// let button = document.querySelectorAll (".calculatorContainer")

// for (let numbers of button){
//     numbers.addEventListener("click",(event) =>{
//         console.log(event.target.innerText);
//         featureDisplay.innerText = event.target.innerText;
//     });
// }

let calculatorContainer = document.querySelectorAll (".calculatorContainer");
// let numberButton = document.querySelectorAll (".numberButton");
let featureDisplay = document.querySelector ("#outputContainer");

for (let numbers of calculatorContainer){
    numbers.addEventListener("click",(event) => {
        console.log(event.target.innerText);
        featureDisplay.innerText = event.target.innerText;
    });
}

