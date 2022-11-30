var numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var letterUpperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var letterLowerArr= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var symbolsArr = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "+", "<", ">", ".", "?"];

var characterLength = 8;
var choiceArr = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
    var correctPrompts = getPrompts(); 
    var passwordText = document.querySelector("#password");

if(correctPrompts) {
    var newPassword = generatePassword();
     passwordText.value = newPassword;
    }else {
        passwordText.value = "";
    }
}

function generatePassword(){
    var password = ""
    for (var i = 0; i < characterLength; i++){
        var randomIndex = Math.floor(Math.random() * choiceArr.length);
        password = password + choiceArr[randomIndex];
    }
    return password;
}

function getPrompts(){
    choiceArr = [];

    characterLength = parseInt(prompt("Choose a length for the password between 8 - 128 characters."));

    if(!characterLength || characterLength < 8 || characterLength > 128) {
        alert("Invalid! Password must be between 8 - 128 characters! Try Again!");
        console.log("Password length " + characterLength);
        return false;
    }

    if (confirm("Click OK for password that contains numbers.")) {
        choiceArr = choiceArr.concat(numbersArr);
        console.log("Numbers " + numbersArr);
    }
    if (confirm("Click OK for password that contains upper case letters.")) {
        choiceArr = choiceArr.concat(letterUpperArr);
        console.log("Uppercase letters " + letterUpperArr);
    }
    if (confirm("Click OK for password that contains lower case letters.")) {
        choiceArr = choiceArr.concat(letterLowerArr);
        console.log("Lowercase letters" + letterLowerArr)
    }
    if (confirm("Click OK for password that contains symbols.")) {
        choiceArr = choiceArr.concat(symbolsArr);
        console.log("Symbols"+ symbolsArr)
    }
    return true;
};
  
  
