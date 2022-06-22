// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
        var passwordLength = window.prompt("How many characters would you like? ")
           var passwordLengthInt = parseInt(passwordLength)
               if (passwordLengthInt < 8) {
                 alert("Must be 8 or more characters long!")
               } else if (passwordLengthInt > 128) {
                 alert("Must be 128 or less characters long")
               }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// random function 

var mainList = []
var specialCharacters = [' ', '', '','','','','','','','','','','','','','',]
var lowerCase = []
var upperCase = []
var numberList = []

