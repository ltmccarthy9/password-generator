// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var mainList = []
    var specialCharacters = [' ', '', '','','','','','','','','','','','','','',]
    var lowerCase = []
    var upperCase = []
    var numberList = []

    var phase1 = true;
    while (phase1 == true) {
    var passwordLength = window.prompt("How many characters would you like? ")
    var passwordLengthInt = parseInt(passwordLength)
            if (passwordLengthInt < 8) {
                alert("Must be 8 or more characters long!")  
            } else if (passwordLengthInt > 128) {
                alert("Must be 128 or less characters long")
            } else {
            phase1 = false;
            }
        }
    alert("your password will be " + passwordLengthInt + " characters long")
        
    var yesCount = 0
    while (yesCount = 0) {
        var specialYN = window.confirm("Do you want special characters in your password?")
        if (specialYN) {
        mainlist = mainlist.concat(specialCharacters)
        yesCount = 1
        } else {
            var lowerYN = window.confirm("Do you want lowercase letters in your password?")
        }
    } 
            

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// random function 

