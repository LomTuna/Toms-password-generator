// Assignment code here
document.querySelector("#generate").addEventListener ("click", writePassword);
// I need a few arrays that hold the character/numbers and upper/lowercase letters

var letterUpper = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
var letterLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "w", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = [ "0", "1", "2", "3", "4", "5", "6","7", "8", "9"]; 
var specChar = ["!", "?", "%", ">", "<" ]; 

//  yes to prompts = variable?: lowercase, uppercase, numbers, special characters, and length 
var yesLower; 
var yesUpper; 
var yesNumber; 
var yesCharacter; 
var length = ""; 


// Get references to the #generate element

//var generateBtn = document.querySelector("#generate");
// I need the button to produce prompts? password criteria

function genPassword(){
  //produces prompt asking for length of password
  // this needs to be returned at end of code to determine length in array
  var length = (prompt("How long would you like the password? Needs to be between 8 and 128 characters.")); 

  // using while with loop if not valid

    while (length <= 8 || length >= 128) {
      alert("Your password but be at least 8 characters long, but no longer than 128.");
      var length = (prompt("How long would you like the password? Needs to be between 8 and 128 characters.")); 
    };
// create var for each requirement - upper,lower,num, and char and ask to confirm

 var yesLower = confirm("Would you like lowercase letters? OK - if 'yes'. "); 
 var yesUpper = confirm("Would you like uppercase letters? OK - if 'yes'.");
 var yesNumber = confirm("Would you like numbers in your password? OK - if 'yes'."); 
 var yesCharacter = confirm("Would you like special characters? OK - if 'yes'."); 

 // the 'cancel' negation is hard to figure out - skipping fornow :( 


// need to assign the character variables using concat

var createPassword = [] // using an array to list characters 

if(yesLower) {
  createPassword = createPassword.concat(letterLower)
}

if (yesUpper) {
  createPassword = createPassword.concat(letterUpper)
}

if (yesNumber) {
  createPassword = createPassword.concat(number)
}
if (yesCharacter) {
  createPassword = createPassword.concat(specChar)
}

var randomFinal = ""

// creating for loop to randomize characters from previously created string var createPassword 

// mental note - use semicolon after second argument i < length; ; ; - took forever debugging because I had a comma :D 
for (var i = 0; i < length; i++)  {
  randomFinal = randomFinal + createPassword[Math.floor(Math.random() * createPassword.length)]; 
  console.log(randomFinal)
}

//return randomFinal
return randomFinal; 

} //; 

function writePassword() {
  var password = genPassword(); 
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}


//else {
  //alert ("Okay, bye!"); 
  
// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);