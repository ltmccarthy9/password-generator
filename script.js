// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

    // creating arrays of each character type
    var mainList = []
    var specialCharacters = [' ', '!', '#','$','%','&',' ','(',')','*','+',',','-','.','/',':',
    ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '{', '|', '}', '~', '`']
    var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
     't', 'u', 'v', 'w', 'x', 'y', 'z']
    var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'Q', 'X', 'Y', 'Z']
    var numberList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    var passWord =[]

    // asking the user how many characters they want in their password
    //Must be between 8 and 128 characters long
    var phase1 = true;
    while (phase1 == true) {
    var passwordLength = window.prompt("How many characters would you like? ")
    var passwordLengthInt = parseInt(passwordLength)
            if (passwordLengthInt < 8) {
                alert("Must be 8 or more characters long!")  
            } else if (passwordLengthInt > 128) {
                alert("Must be 128 or less characters long")
            } else if (passwordLengthInt > 7 && passwordLength < 129) {
                phase1 = false;
            } else {
                alert("You must input a password length");
            }
        }
    //displaying/confirming to the user how long their password will be.
    alert("your password will be " + passwordLengthInt + " characters long")
        
    //Creating while loop that breaks once an "ok" has been selected, as there needs to be at least 1.
    var yesCount = false;
    var stepCount = 0;
    while (!yesCount) {
        var specialYN = window.confirm("Do you want special characters in your password?")
        if (specialYN) {
        mainList = mainList.concat(specialCharacters)
        console.log(mainList)
        yesCount = true;
        stepCount = 1;
        } else {
            var lowerYN = window.confirm("Do you want lowercase letters in your password?")
            stepCount = 1;
            if (lowerYN) {
                mainList = mainList.concat(lowerCase)
                console.log(mainList)
                yesCount = true;
                stepCount = 2;
            } else {
                var upperYN = window.confirm("Do you want uppercase letters in your password?")
                stepCount = 2;
                if (upperYN) {
                    mainList = mainList.concat(upperCase)
                    console.log(mainList)
                    yesCount = true;
                    stepCount = 3;
                } else {
                    var numberYN = window.confirm("Do you want numbers in your password?")
                    stepCount = 3;
                    if (numberYN) {
                        mainList = mainList.concat(numberList)
                        console.log(mainList)
                        yesCount = true;
                    } else {
                        alert("You must choose at least one option")
                    }
                }
            }
        }
    } 
    // Once the while loop above breaks, you must end up at the correct question in sequence
    //ie: we don't want to select no-no-yes and then end up back at the first question
    // use stepCount to solve this.
    if (stepCount === 1) {
        var lowerYN = window.confirm("Do you want lowercase letters in your password?")
        if (lowerYN){
            mainList = mainList.concat(lowerCase)
            stepCount = 2;
            console.log(mainList)
        } else {
            stepCount = 2;
        }
        
    }
    if (stepCount === 2) {
        var upperYN = window.confirm("Do you want uppercase letters in your password?")
        if (upperYN) {
            mainList = mainList.concat(upperCase)
            stepCount = 3;
            console.log(mainList)
        } else {
            stepCount = 3;
        }
    }
    if (stepCount === 3) {
        var numberYN = window.confirm("Do you want numbers in your password?")
        if (numberYN) {
            mainList = mainList.concat(numberList)
            console.log(mainList)
        }
    }

var password = generatePassword();

var passwordText = document.querySelector("#password"); 
    
passwordText.value = password;

//function to generate password
function generatePassword() {
for (i=0; i<passwordLengthInt; i++){
    var mainlength = mainList.length;
    var randNum = Math.floor(Math.random() * (mainlength - 0 + 1)) + 0;
        passWord[i] = mainList[randNum]
    }
    passWordString = passWord.toString();
    return passWordString;
}
  

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



