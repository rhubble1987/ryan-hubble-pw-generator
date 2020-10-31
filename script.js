// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener ("click", function(requestedLength){
  var requestedLength = prompt("Specify the character length of the password (must be between 8 and 128 characters)");
  while (requestedLength < 8 || requestedLength > 128) {
    if (requestedLength < 8) {
      alert("Cannot be less than 8 characters in length.");
      var requestedLength = prompt("Specify the character length of the password (must be between 8 and 128 characters)");
    } else if (requestedLength > 128) {
      alert("Cannot exceed 128 characters in length.");
      var requestedLength = prompt("Specify the character length of the password (must be between 8 and 128 characters)");
    } 
}


var requestedUppercase = confirm("Should the password contain upper case letters? Click 'Ok' if yes, or 'Cancel' if no.");
var requestedLowercase = confirm("Should the password contain lower case characters? Click 'Ok' if yes, or 'Cancel' if no.");
var requestedNumbers = confirm("Should the password contain numbers? Click 'Ok' if yes, or 'Cancel' if no.");
var requestedSpecialCharacters = confirm("Should the password contain special characters? Click 'Ok' if yes, or 'Cancel' if no.");

console.log(requestedLength);
console.log(requestedUppercase);
console.log(requestedLowercase);
console.log(requestedNumbers);
console.log(requestedSpecialCharacters);


var passwordNumeric = "";

for (i = 0; i < requestedLength; i++) {
  var passwordNumeric = passwordNumeric + Math.floor(Math.random() * 9 + 1).toString();
  
}

console.log(passwordNumeric);
var alphabeticCharacters = "abcdefghijklmnopqrstuvwxyz";


if (requestedLowercase) {
  var 
}


for (i = 0; i < (requestedLength / 4); i++) {
  var letterPick = alphabeticCharacters.charAt(Math.floor(Math.random() * 26));
  console.log(letterPick);


}



});






// While loop to validate that the user enters the expected number

  




  var password









//Assignment Code

// Steps
// 1. When user accesses the page and clicks generate password the first prompt appears
// 2. First confirmation - do you want to specify the length?
// 3. If yes, display prompt - choose a length (must be between 8 and 128 characters) - NOTE: alert should be returned if a value outside of that is entered and they must re-enter the answer to the prompt.
// 3.5 Store the reponse
// 4. If no, skip the prompt and move on to the next confirmation
// 5. Second confirmation - do you want to specify the types of characters?
// 6. If yes, display prompt - please select all that apply: lower, upper, numeric, and/or special (is it possible to do check list of some kind with JS?)
// 6.5 Store the response
// 7. If no, skip the prompt and move on to the password generation
// 8. Using the stored responses, generate the password
// 9. Write the password in the box
// 10. When user clicks generate password, the process restarts=


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
