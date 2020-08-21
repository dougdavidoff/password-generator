// Password variable holds the generated password
preGen = " "
securePW = "";


// Charsets gives the character set to choose from
charLower = "abcdefghijklmnopqrstuvwxyz";
charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
charNum = "1234567890";
charSpec = "!@#$%^&*";
var i = 0;

// Event listener begins the sequence
document.getElementById("generatePass").addEventListener("click", passGenerate);

// Function to generate password
function passGenerate() {
    // Input creates the length variable and logs it
    var passLength = prompt("How long should your password be? Enter a number between 8 and 128 to choose the number of characters your password should contain:");
    console.log("User wants the password to be " + passLength + " characters long");
    // Asks user what characters they want to use
    var input = confirm("Would you like to use lower-case letters? Click 'OK' for 'yes;' 'Cancel' for 'no.'");
    if (input == true) {
        preGen += charLower;
        console.log("User wants to use lower-case letters. The characters to be used so far are: " + preGen);
    }
    var input = confirm("Would you like to use upper-case letters? Click 'OK' for 'yes;' 'Cancel' for 'no.'");
    if (input == true) {
        preGen += charUpper;
        console.log("User wants to use upper-case letters. The characters to be used so far are: " + preGen);
    }
    var input = confirm("Would you like to use numbers? Click 'OK' for 'yes;' 'Cancel' for 'no.'")
    if (input == true) {
        preGen += charNum;
        console.log("User wants to use numbers. The characters to be used so far are: " + preGen);
    }
    var input = confirm("Would you like to use special symbols? Click 'OK' for 'yes;' 'Cancel' for 'no.'");
    if (input == true) {
        preGen += charSpec;
        console.log("User wants to use special symbols. The characters to be used are: " + preGen);
    }

    // Asks user if what they chose is correct and makes sure a character type was chosen
    

    // Password is generated here meeting the criteria

     
    console.log("passLength is " + passLength);
    console.log("preGen is " + preGen);

            for (var i = 0; i < passLength; i++)  { 
            securePW +=  preGen[Math.floor(Math.random() * preGen.length)];
            console.log(securePW); 
        } 
    
    console.log("The finished password is " + securePW);

    var password = securePW;
    var passwordText = document.querySelector("#password");
    passwordText.value = securePW;
          }
