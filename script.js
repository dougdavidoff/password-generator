// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





<script>

// on.click here

var product = "sample";
var lowers = "abcdefghijklmnopqrstuvwxyz";
var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var digits = "0123456789";
var specials = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~"

var length = prompt("How many characters would you like in your password? Choose a number between 8 and 128.");

var lowerCase = confirm("Do you want lower-case letters in your password?");

var upperCase = confirm("Do you want upper-case letters in your password?");

var numerics = confirm("Do you want numbers in your password?");

var specialCharacters = confirm("Do you want special characters in your password?");

// var types = [lowCase, upCase, num, spec]

// var types=[lowerCase, upperCase, numerics, specialCharacters];

// for i = 0; i < length; i++;

// pickTry = Math.floor((Math.random() * 4));

// if pickTry = true; randomly select pickCharacter from PickTry's array
    
// else, try again

// attach pickCharacter to product

// try again

// end for loop

// display product
document.getElementById("product").innerHTML = "Your password is " + product;

Alert("Thank you for choosing us today!");

</script>