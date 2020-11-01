// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function generatePassword(){
  var requestedLength = prompt("Specify the character length of the password (must be between 8 and 128 characters)");
  while (requestedLength < 8 || requestedLength > 128) {
    if (requestedLength < 8) {
      alert("Cannot be less than 8 characters in length.");
      var requestedLength = prompt("Specify the character length of the password (must be between 8 and 128 characters)");
    } else if (requestedLength > 128) {
      alert("Cannot exceed 128 characters in length.");
      var requestedLength = prompt("Specify the character length of the password (must be between 8 and 128 characters)");
    } else if (requestedLength !== Number); {
      alert("You must enter a number.");
      var requestedLength = prompt("Specify the character length of the password (must be between 8 and 128 characters)");
    }

}


var requestedUppercase = confirm("Should the password contain upper case letters? Click 'Ok' if yes, or 'Cancel' if no.");
var requestedLowercase = confirm("Should the password contain lower case characters? Click 'Ok' if yes, or 'Cancel' if no.");
var requestedNumbers = confirm("Should the password contain numbers? Click 'Ok' if yes, or 'Cancel' if no.");
var requestedSpecialCharacters = confirm("Should the password contain special characters? Click 'Ok' if yes, or 'Cancel' if no.");

//This code will validate that the user selected at least one of the character criteria.

while (requestedUppercase !== true && requestedLowercase !== true && requestedNumbers !== true && requestedSpecialCharacters !== true) {
  alert("You must select at least one type of character.")
  var requestedUppercase = confirm("Should the password contain upper case letters? Click 'Ok' if yes, or 'Cancel' if no.");
  var requestedLowercase = confirm("Should the password contain lower case characters? Click 'Ok' if yes, or 'Cancel' if no.");
  var requestedNumbers = confirm("Should the password contain numbers? Click 'Ok' if yes, or 'Cancel' if no.");
  var requestedSpecialCharacters = confirm("Should the password contain special characters? Click 'Ok' if yes, or 'Cancel' if no.");
}

console.log(requestedLength);
console.log(requestedUppercase);
console.log(requestedLowercase);
console.log(requestedNumbers);
console.log(requestedSpecialCharacters);

var selectedCriteria = 0;

if (requestedLength) {
  selectedCriteria = selectedCriteria++;
}

if (requestedUppercase) {
  selectedCriteria = selectedCriteria++;
}

if (requestedLowercase) {
  selectedCriteria = selectedCriteria++
}




var generatedPassword = "";

for (i = 0; i < requestedLength; i++) {
  var generatedPassword = generatedPassword + Math.floor(Math.random() * 9 + 1).toString();
  
}


//The below adds random lowercase characters to the generatedPassword.

var alphabeticCharacters = "abcdefghijklmnopqrstuvwxyz";
console.log(alphabeticCharacters);


  function addLowercaseCharacters() {
     
      return generatedPassword = generatedPassword.replace(generatedPassword.charAt(Math.floor(Math.random() * generatedPassword.length)), alphabeticCharacters.charAt(Math.floor(Math.random() * 26)));

}

if (requestedLowercase) {
  for (i = 0; i < (requestedLength / 4); i++) {
    addLowercaseCharacters();
  }
}






//This will then add any uppercase letters
function addUppercaseCharacters() {
     
  return generatedPassword = generatedPassword.replace(generatedPassword.charAt(Math.floor(Math.random() * generatedPassword.length)),  alphabeticCharacters.charAt(Math.floor(Math.random() * 26)).toUpperCase());

}

if (requestedUppercase) {
  for (i = 0; i < (requestedLength / 5); i++) {
    addUppercaseCharacters();
  }
}



if (requestedLowercase === false) {
  generatedPassword.toUpperCase();
}




//This code will add some special characters
var specialCharacters = "!@#$%^&*()_-+=?";
function addSpecialCharacters(){
  return generatedPassword = generatedPassword.replace(generatedPassword.charAt(Math.floor(Math.random() * generatedPassword.length)), specialCharacters.charAt(Math.floor(Math.random() * 15)));
}

if (requestedSpecialCharacters) {
  for (i = 0; i < (requestedLength / 6); i++) {
    addSpecialCharacters();
}




/*

This next code should remove all numeric characters if the user selected no for including numeric characters.
After clearing out the generatedPassword, it will then use a for loop to generate a string of alphabetic characters based on the requested
length. And then, depending on what the user said for upper and lower case characters, it will add them accordingly with some
conditionals.

*/


function removeNumbers() {
  return generatedPassword = generatedPassword.replace(generatedPassword,"");
}

function replaceWithALetter() {
  return generatedPassword = alphabeticCharacters.charAt(Math.floor(Math.random() * 26))
}

function addMoreLetters() {
  return generatedPassword = generatedPassword + alphabeticCharacters.charAt(Math.floor(Math.random() * 26));
}

function replaceWithASpecialCharacter() {
  return generatedPassword = specialCharacters.charAt(Math.floor(Math.random() * 15))
}

function addMoreSpecialCharacters() {
  return generatedPassword = generatedPassword + specialCharacters.charAt(Math.floor(Math.random() * 15));
}



if (requestedNumbers === false && requestedUppercase === true && requestedLowercase === true && requestedSpecialCharacters === true) {
  removeNumbers();
  replaceWithALetter();
  for (i = 0; i < (requestedLength - 1); i++) {
    addMoreLetters();
  }
  for (i = 0; i < (requestedLength / 5); i++) {
      addUppercaseCharacters();
    }
  for (i = 0; i < (requestedLength / 5); i++) {
      addSpecialCharacters();
    }

  }

  if (requestedNumbers === false && requestedUppercase === true && requestedLowercase === false && requestedSpecialCharacters === false) {
    removeNumbers();
  replaceWithALetter();
  for (i = 0; i < (requestedLength - 1); i++) {
    addMoreLetters();
  }
    generatedPassword.toUpperCase();
  }

  if (requestedNumbers === false && requestedUppercase === false && requestedLowercase === true && requestedSpecialCharacters === true) {
    removeNumbers();
  replaceWithALetter();
  for (i = 0; i < (requestedLength - 1); i++) {
    addMoreLetters();
  }
  for (i = 0; i < (requestedLength / 6); i++) {
    addSpecialCharacters();
}
  }
  if (requestedNumbers === false && requestedUppercase === false && requestedLowercase === true && requestedSpecialCharacters === false) {
    removeNumbers();
  replaceWithALetter();
  for (i = 0; i < (requestedLength - 1); i++) {
    addMoreLetters();
  }

}  
if (requestedNumbers === false && requestedUppercase === false && requestedLowercase === false && requestedSpecialCharacters === true) {
  removeNumbers();
  replaceWithASpecialCharacter();
for (i = 0; i < (requestedLength - 1); i++) {
  addMoreSpecialCharacters();
}

}  
if (requestedNumbers === false && requestedUppercase === true && requestedLowercase === true && requestedSpecialCharacters === false) {
  removeNumbers();
replaceWithALetter();
for (i = 0; i < (requestedLength - 1); i++) {
  addMoreLetters();
}
for (i = 0; i < (requestedLength / 5); i++) {
  addUppercaseCharacters();
}
}


if (requestedNumbers === false && requestedUppercase === true && requestedLowercase === false && requestedSpecialCharacters === true) 
emoveNumbers();
replaceWithALetter();
for (i = 0; i < (requestedLength - 1); i++) {
  addMoreLetters();
}
generatedPassword.toUpperCase();
for (i = 0; i < (requestedLength / 6); i++) {
  addSpecialCharacters();
}
}


console.log(generatedPassword);


});









/*
// While loop to validate that the user enters the expected number

  













//Assignment Code

// Steps
// 1. When user accesses the page and clicks generate generatedPassword the first prompt appears
// 2. First confirmation - do you want to specify the length?
// 3. If yes, display prompt - choose a length (must be between 8 and 128 characters) - NOTE: alert should be returned if a value outside of that is entered and they must re-enter the answer to the prompt.
// 3.5 Store the reponse
// 4. If no, skip the prompt and move on to the next confirmation
// 5. Second confirmation - do you want to specify the types of characters?
// 6. If yes, display prompt - please select all that apply: lower, upper, numeric, and/or special (is it possible to do check list of some kind with JS?)
// 6.5 Store the response
// 7. If no, skip the prompt and move on to the generatedPassword generation
// 8. Using the stored responses, generate the generatedPassword
// 9. Write the generatedPassword in the box
// 10. When user clicks generate generatedPassword, the process restarts=
*/

// Write generatedPassword to the #generatedPassword input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

  



