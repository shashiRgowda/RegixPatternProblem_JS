readline=require("readline-sync")
let pin=readline.question("Enter pin :");
let pinRegex=RegExp('^[1-9]{1}[0-9]{5}$');
if(pinRegex.test(pin))
    console.log("Valid");
else
    console.log("Invalid");
