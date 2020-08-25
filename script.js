// Password variables. "preGen" is the changing string before the password is generated. "securePW" is the secure password after being generated
// preGen = "";
// securePW = "";

// Character sets for user to choose among
charLower = "abcdefghijklmnopqrstuvwxyz";
charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
charNum = "1234567890";
charSpec = "!@#$%^&*?";
var i = 0;

// Event listener begins the sequence
document.getElementById("generatePass").addEventListener("click", passGenerate);

// Function to generate password
function passGenerate() {

    preGen = ""
    securePW = ""


    // Input creates the length variable
    var passLength = prompt("How long should your password be? Enter a number between 8 and 128 to choose the number of characters your password should contain:");
    passLength = parseInt(passLength);

    //validation
    if (passLength < 8 || passLength > 128) {
        alert("Try again. Your chosen length did not meet the stated criteria");
        passLength = prompt("Second chance! How long should your password be? Enter a number between 8 and 128 to choose the number of characters your password should contain:");
    } else if (!passLength) {
        alert("Try again. You did not enter a number.");
        passLength = prompt("Second chance! How long should your password be? Enter a number between 8 and 128 to choose the number of characters your password should contain:");
    } else {
        console.log("User wants the password to be " + passLength + " characters long");
    }

    // Asks user what character sets he or she wants to use
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

    console.log("Current character set is " + preGen);

    if (preGen.length < 5) {
        console.log("No character sets were chosen.")
        alert("You did not select any of the four character sets presented to you. We will proceed to process a password based only on special characters.");
        preGen += charSpec;
        console.log("Current character set is" + preGen);
    }

    console.log("passLength is " + passLength);
    console.log("preGen is " + preGen);


        // Password is generated here meeting the criteria
            for (var i = 0; i < passLength; i++)  { 
            securePW +=  preGen[Math.floor(Math.random() * preGen.length)];
            console.log(securePW); 
        } 
    
    console.log("The finished password is " + securePW);

    // Presenting the product password to the user
    alert("Click here to display your new secure password in the window below.");

    var password = securePW;
    var passwordText = document.querySelector(".password");
    passwordText.value = securePW;
          }
