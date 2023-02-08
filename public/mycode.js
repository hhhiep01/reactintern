let textArea = document.getElementById("textbox");
let characterCounter = document.getElementById("char_count");
const maxNumOfChars = 250;

const countCharacters = () => {
    let numOfEnteredChars = textArea.value.length;
    let counter = maxNumOfChars - numOfEnteredChars;
    characterCounter.textContent = counter + "/250";
    if (counter < 0) {
        input.preventDefault();
    }
};

textArea.addEventListener("input", countCharacters);



let textArea2 = document.getElementById("textbox2");
let characterCounter2 = document.getElementById("char_count2");
const maxNumOfChars2 = 500;

const countCharacters2 = () => {
    let numOfEnteredChars2 = textArea2.value.length;
    let counter2 = maxNumOfChars2 - numOfEnteredChars2;
    characterCounter2.textContent = counter2 + "/500";
    if (counter < 0) {
        input.preventDefault();
    }
};

textArea2.addEventListener("input", countCharacters2);