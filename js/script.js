function getPasswordOptions() {
    // length parameters
    var length = prompt("Length of password?") 
        if (length < 8) {
            alert("Password must be longer than 8 characters")
            getPasswordOptions();
        }
        else if (length > 128) {
            alert("Password can not exceed 128 characters")
            getPasswordOptions();
        }
        // Character parameters
        else {
            var hasSpecialCharacters = confirm("Click OK to confirm including special characters.")
            var hasNumericCharacters = confirm("Click OK to confirm including numeric characters.")
            var hasLowercaseLetters = confirm("Click OK to confirm including lowercase letters.")
            var hasUppercaseLetters = confirm("Click OK to confirm including uppercase letters.")
            if (hasSpecialCharacters === false && hasNumericCharacters === false && hasLowercaseLetters === false
                && hasUppercaseLetters === false) {
                alert("Must have at least one type of character.")
                getPasswordOptions();
            }
            var passwordOptions = {length: length, hasSpecialCharacters: hasSpecialCharacters, hasNumericCharacters: hasNumericCharacters,
            hasLowercaseLetters: hasLowercaseLetters, hasUppercaseLetters: hasUppercaseLetters}

            return passwordOptions;
        }
}

// function to generate password
function generatePassword() {
    // setting up variables
    var options = getPasswordOptions()
    var result = []
    var possibleCharacters = []
    var guaranteedCharacters = []
    // setting up arrays
    if (options.hasSpecialCharacters) {
        possibleCharacters.push("!","@","#","$","%","^","&","*","(",")")
        guaranteedCharacters.push("!")
    }
    if (options.hasNumericCharacters) {
        possibleCharacters.push("0","1","2","3","4","5","6","7","8","9")
        guaranteedCharacters.push("4")
    }
    if (options.hasLowercaseLetters) {
        possibleCharacters.push("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z") 
        guaranteedCharacters.push("d")
    }
    if (options.hasUppercaseLetters) {
        possibleCharacters.push("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z")
        guaranteedCharacters.push("O")
    }

    // Setting up loop
    for (let i = 0; i < options.length; i++) {
        var random = Math.floor(Math.random() * possibleCharacters.length) 
        result.push(possibleCharacters[random])
    }
    // guaranteed characters loop


    // Turning result into string and removing commas, then returning
    let string = result.toString();
    var finalString = string.replaceAll(',','')
    console.log(string)
    console.log(finalString)
    console.log(finalString.length)
    return finalString;
    
    
}
    
var generateBtn = document.querySelector('#generate')
// fix text
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('.container-2')
    passwordText.textContent = password
    
   


}

generateBtn.addEventListener('click', writePassword)



