// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

//created input variables
var userInputs = "";
var passwordLength = "";

passwordLength = Number(passwordLength);

// create arrays with each of 4 fields.  then converted into strings
var characters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "~",
  "`",
  "[",
  "{",
  "}",
  "]",
  "\\",
  "|",
  ";",
  ":",
  "'",
  ",",
  "<",
  ".",
  ">",
  "/",
  "?",
];
var char = characters.toString();
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var num = numbers.toString();
var uppercases = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var upp = uppercases.toString();
var lowercases = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var low = lowercases.toString();

// Write password to the #password input

//prompt to add a numeric value for password length
function generatePassword() {
  passwordLength = prompt("Please choose a password length between 8 and 128");
  if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Password MUST be 8 to 128 characters");
    return generatePassword();

    //if above condition is met variables are set for each confirmation field.

    //if the condition is true then the the strings are added into the variable of userInputs
  } else {
    var addNumbers = confirm("Do you want numbers in your password?");
    if (addNumbers) {
      userInputs = userInputs + num;
    }
    var addUppercase = confirm(
      "Do you want UPPERCASE letters in your password?"
    );
    if (addUppercase) {
      userInputs = userInputs + upp;
    }
    var addLowercase = confirm(
      "Do you want lowercase letters in your password?"
    );
    if (addLowercase) {
      userInputs = userInputs + low;
    }
    var addCharacters = confirm("Do you want characters in your password?");
    if (addCharacters) {
      userInputs = userInputs + char;
    }
  }
  //all true conditions are stored to global memmory

  //at least one character type needs to be confirmed to continue.
  if (!addCharacters && !addLowercase && !addUppercase && !addNumbers) {
    userInputs = alert("At least one field MUST be selected");
    
  }

  var result = "";

  for (var i = 0; i < passwordLength; i++) {
    result = result + userInputs[Math.floor(Math.random() * userInputs.length)];
  }
  return result;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//if all criteria is met, randomly generate password set to specified length and includes all selected character types

//pull the information that the user specifies in the prompts

//depending on what the user selects we will be given a different pool to choose characters from

// after password is generated display in box

//add the arrays together in a holding array this is empty and add individual arrays as a user specifies

//console.log everything

//every function should return something

//do not touch the html or the css files

//prompt for each of the data types and a seires of confirms
