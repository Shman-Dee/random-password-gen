// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

//created input variables
var userInputs = "";
var passwordLength = "";
var addNumbers;
var addCharacters;
var addLowercase;
var addUppercase;

passwordLength = Number(passwordLength);

// create arrays with each character set
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
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
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

// Write password to the #password input

//prompt to add a numeric value
function generatePassword() {
  passwordLength = prompt("Please choose a password length of 8 to 128");
  if (!passwordLength) {
    alert("Provide value to continue");

    //conditional for length
  } else if (passwordLength <= 8 || passwordLength >= 128) {
    passwordLength = prompt("Password must be 8 to 128 characters");

    //if true lead to confirmation of each array type
  } else {
    addNumbers = confirm("Do you want numbers in your password?");
    addUppercase = confirm("Do you want UPPERCASE letters in your password?");
    addLowercase = confirm("Do you want lowercase letters in your password?");
    addCharacters = confirm("Do you want characters in your password?");
  }
  // all possible boolean statments for checked array fields
  if (!addCharacters && !addLowercase && !addUppercase && !addNumbers) {
    userInputs = alert("At least one field MUST be selected");
  }
  if (addCharacters && addLowercase && addUppercase && addNumbers) {
    userInputs = characters.concat(numbers, uppercases, lowercases);
  }
  if (addCharacters && addLowercase && addUppercase) {
    userInputs = characters.concat(lowercases, uppercases);
  }
  if (addCharacters && addLowercase && addNumbers) {
    userInputs = characters.concat(lowercases, numbers);
  }
  if (addCharacters && addUppercase && addNumbers) {
    userInputs = characters.concat(uppercases, numbers);
  }
  if (addLowercase && addUppercase && addNumbers) {
    userInputs = lowercases.concat(uppercases, numbers);
  }
  if (addCharacters && addLowercase) {
    userInputs = characters.concat(lowercases);
  }
  if (addCharacters && addUppercase) {
    userInputs = characters.concat(uppercases);
  }
  if (addCharacters && addNumbers) {
    userInputs = characters.concat(numbers);
  }
  if (addLowercase && addUppercase) {
    userInputs = lowercases.concat(uppercases);
  }
  if (addLowercase && addNumbers) {
    userInputs = lowercases.concat(numbers);
  }
  if (addUppercase && addNumbers) {
    userInputs = uppercases.concat(numbers);
  }
  if (addCharacters) {
    userInputs = characters;
  }
  if (addLowercase) {
    userInputs = lowercases;
  }
  if (addUppercase) {
    userInputs = uppercases;
  }
  if (addNumbers) {
    userInputs = numbers;
  }

  var result = "";

  for (var i = 0; i < passwordLength; i++) {
    result = result + userInputs[Math.floor(Math.random() * userInputs.length)];
    console.log(reult);
  }
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button

// writePassword = prompt("Please choose a password length between 8 and 128");

//ask the character length of the password. ask if they want uppercase, lowercase, numeric, and special characters in the password.

//if the character length is lower than 8 or greater the 128 or there are no character types selected then abort and provide feed back to the user. one character type needs to be choosen to continue.

//if all criteria is met, randomly generate password set to specified length and includes all selected character types

//pull the information that the user specifies in the prompts

//depending on what the user selects we will be given a different pool to choose characters from

// after password is generated display in box

//add the arrays together in a holding array this is empty and add individual arrays as a user specifies

//console.log everything

//every function should return something

//do not touch the html or the css files

//prompt for each of the data types and a seires of confirms
