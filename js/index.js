import {getInputValue} from "./getValue.js";

const buttonSubmit = document.querySelector('.validate_button');
const answerDiv = document.querySelector('#result_table');

function answer(d, U, delU) {
    return Math.sqrt((d*(10**-2)*U)/(9.8* delU));
}

buttonSubmit.addEventListener("click", () => {
    const inputValue = getInputValue();
    const divAnswer = document.createElement('div');
    divAnswer.textContent = answer(parseFloat(inputValue[0]), parseFloat(inputValue[1]), parseFloat(inputValue[2])).toString();
    answerDiv.appendChild(divAnswer)
})