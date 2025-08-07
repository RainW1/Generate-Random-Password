let firstPasswordEl = document.getElementById("firstPassword")
let secondPasswordEl = document.getElementById("secondPassword")

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", ];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

let passwordLength = 15 

function generate() {
    let randomPassword = ""
    
    let possibleChars = [...characters];
    
    if (document.getElementById("symbols").checked) {
        possibleChars = possibleChars.concat(symbols);
    }
    
   
    if (document.getElementById("numbers").checked) {
        possibleChars = possibleChars.concat(numbers);
    }


    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * possibleChars.length);
        randomPassword += possibleChars[randomIndex];
}
    firstPasswordEl.textContent = randomPassword
    secondPasswordEl.textContent = randomPassword
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
    .then(() => alert("Copied the password: " + text))
    .catch(err => alert("Failed to copy: " + err));
}

firstPasswordEl.addEventListener("click", () => copyToClipboard(firstPasswordEl.textContent));
secondPasswordEl.addEventListener("click", () => copyToClipboard(secondPasswordEl.textContent));
