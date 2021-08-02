// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

//ask the character length of the password. ask if they want uppercase, lowercase, numeric, and special characters in the password.
var = userChoice = promt("Do you want uppercase?");
//if the character length is lower than 8 or greater the 128 or there are no character types selected then abort and provide feed back to the user. one character type needs to be choosen to continue.

//if all criteria is met, randomly generate password set to specified length and includes all selected character types

//pull the information that the user specifies in the prompts

//depending on what the user selects we will be given a different pool to choose characters from

// after password is generated display in box

// create arrays with each character set

//add the arrays together in a holding array this is empty and add individual arrays as a user specifies

//console.log everything

//every function should return something

//do not touch the html or the css files

//prompt for each of the data types and a seires of confirms
function doUWANT() {
  if (uppercase === true) {
    holdingArr = holdingArr + uppercaseArr;
  }
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
