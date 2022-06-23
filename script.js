// Assignment Code
var generateBtn = document.querySelector("#generate");


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
    var passwordLength = window.prompt("How long (characters) do you want your password to be?")
    var passwordLengthInt = parseInt(passwordLength)
            if (passwordLengthInt < 8) {
                alert("Your password must be between 8 and 128 characters long!")  
            } else if (passwordLengthInt > 128) {
                alert("Your password must be between 8 and 128 characters long")
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
        alert("Your password may include special characters.")
        mainList = mainList.concat(specialCharacters)
        yesCount = true;
        stepCount = 1;
        } else {
            alert("Your password will not have special characters.")
            var lowerYN = window.confirm("Do you want lowercase letters in your password?")
            stepCount = 1;
            if (lowerYN) {
                alert("Your password may include lowercase letters.")
                mainList = mainList.concat(lowerCase)
                yesCount = true;
                stepCount = 2;
            } else {
                alert("Your password will not have lowercase letters.")
                var upperYN = window.confirm("Do you want uppercase letters in your password?")
                stepCount = 2;
                if (upperYN) {
                    alert("Your password may include uppercase letters.")
                    mainList = mainList.concat(upperCase)
                    yesCount = true;
                    stepCount = 3;
                } else {
                    alert("Your password will not have uppercase letters.")
                    var numberYN = window.confirm("Do you want numbers in your password?")
                    stepCount = 3;
                    if (numberYN) {
                        alert("Your password may include numbers.")
                        mainList = mainList.concat(numberList)
                        yesCount = true;
                        stepCount = 4;
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
            alert("Your password may include lowercase letters.")
            mainList = mainList.concat(lowerCase)
            stepCount = 2;
        } else {
            alert("Your password will not have lowercase letters.")
            stepCount = 2;
        } 
    }

    if (stepCount === 2) {
        var upperYN = window.confirm("Do you want uppercase letters in your password?")
        if (upperYN) {
            alert("Your password may include uppercase letters.")
            mainList = mainList.concat(upperCase)
            stepCount = 3;
        } else {
            alert("Your password will not have uppercase letters.")
            stepCount = 3;
        }
    }

    if (stepCount === 3) {
        var numberYN = window.confirm("Do you want numbers in your password?")
        if (numberYN) {
            alert("Your password may include numbers.")
            mainList = mainList.concat(numberList)
        } else {
            alert("Your password will not have numbers.")
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



