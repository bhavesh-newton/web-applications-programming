// Example file with common ESLint errors
var unused_variable = "This will trigger a warning";

// Mixing quotes
let string1 = "double quotes"
let string2 = 'single quotes'

// Missing semicolons
const add = (a,b) => {
    return a+b
}

// Undefined variable
function calculateTotal() {
    total = price + tax;
    return total;
}

// Unnecessary else after return
function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

// Console log left in code
console.log('Debug message');

// Comparing with == instead of ===
if (userInput == null) {
    console.log("Invalid input")
}

// Unused function parameters
function greet(name, age, location) {
    console.log("Hello " + name);
}

// Multiple spaces in code
const   spaces    =   "inconsistent";

// Trailing spaces at end of line    
// Mixed spacing (tabs and spaces)
function  badlySpaced( ) {
	return      true;
}

// Unreachable code
function processData() {
    return "Done";
    console.log("This will never run");
} 