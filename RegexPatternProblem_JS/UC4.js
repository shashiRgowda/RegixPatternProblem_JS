readline=require("readline-sync")
let pin=readline.question("Enter pin :");
let pinRegex=RegExp("^[1-9]{3}[ ]*[0-9]{3}$");;
if(pinRegex.test(pin))
    console.log("Valid");
else
    console.log("Invalid");
