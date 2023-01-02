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
            var hasNumericChacters = confirm("Click OK to confirm including numeric characters.")
            var hasLowercaseLetters = confirm("Click OK to confirm including lowercase letters.")
            var hasUppercaseLetters = confirm("Click OK to confirm including uppercase letters.")
                if (hasSpecialCharacters === false && hasNumericChacters === false && hasLowercaseLetters === false
                    && hasUppercaseLetters === false) {
                        alert("Must have at least one type of character.")
                        getPasswordOptions();
                    }
            var passwordOptions = {length: length, hasSpecialCharacters: hasSpecialCharacters, hasNumericChacters: hasNumericChacters,
            hasLowercaseLetters: hasLowercaseLetters, hasUppercaseLetters: hasUppercaseLetters}

            return passwordOptions;
        }
}

