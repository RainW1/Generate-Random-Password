let firstPasswordEl = document.getElementById("firstPassword")
let secondPasswordEl = document.getElementById("secondPassword")

const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
const symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

let passwordLength = 15

function generate() {
    let randomPasswordOne = ""
    let randomPasswordTwo = ""

    let possibleCharsOne = [...characters];
    let possibleCharsTwo = [...characters];


    if (document.getElementById("symbols").checked) {
        possibleCharsOne = possibleCharsOne.concat(symbols);
        possibleCharsTwo = possibleCharsTwo.concat(symbols);

    }


    if (document.getElementById("numbers").checked) {
        possibleCharsOne = possibleCharsOne.concat(numbers);
        possibleCharsTwo = possibleCharsTwo.concat(numbers);

    }


    for (let i = 0; i < passwordLength; i++) {
        let randomIndexOne = Math.floor(Math.random() * possibleCharsOne.length);
        randomPasswordOne += possibleCharsOne[randomIndexOne];

        let randomIndexTwo = Math.floor(Math.random() * possibleCharsTwo.length);
        randomPasswordTwo += possibleCharsTwo[randomIndexTwo];

    }
    firstPasswordEl.textContent = randomPasswordOne
    secondPasswordEl.textContent = randomPasswordTwo

}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => alert("Copied the password: " + text))
        .catch(err => alert("Failed to copy: " + err));
}

firstPasswordEl.addEventListener("click", () => copyToClipboard(firstPasswordEl.textContent));
secondPasswordEl.addEventListener("click", () => copyToClipboard(secondPasswordEl.textContent));
