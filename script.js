// Assignment code here


// password prompts(criteria) should be selectable

//  yes to prompts = variable?: lowercase, uppercase, numbers, special characters, and length 
var yesLower; 
var yesUpper; 
var yesNumber; 
var yesCharacter; 
var length; 





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// I need the button to produce prompts? password criteria
function passwordPrompt (){
  //produces prompt asking if they'd like to create a password
  var generateBtn= prompt("How long would you like the password?"); 

  // at first used an 'if' loop - ask about 'while' loop instead?
    while (generateBtn <= 8 || generateBtn >= 128) {
      window.alert("Your password but be at least 8 characters long, but no longer than 128.")
    }

//  2 prompts?: lowercase, uppercase, numbers, special characters, and length 

//return passwordPrompt()

//else {
  //alert ("Okay, bye!"); 

  // Write password to the #password input

}; 

function writePassword() {
  var password = passwordPrompt(); 
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;


return

}
// Write password to the #password input

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);