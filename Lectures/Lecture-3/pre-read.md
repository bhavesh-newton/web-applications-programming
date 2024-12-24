# Pre-read Material: JavaScript Control Flow and Operators

## 1. Operators in JavaScript

### Assignment Operators

JavaScript provides several assignment operators that allow you to assign values to variables:

```javascript
let x = 5;       // Basic assignment
x += 3;          // Same as: x = x + 3
x -= 2;          // Same as: x = x - 2
x *= 4;          // Same as: x = x * 4
x /= 2;          // Same as: x = x / 2
x %= 3;          // Same as: x = x % 3
```

### Ternary Operator

The ternary operator is a shorthand way of writing an if-else statement:

```javascript
// Syntax: condition ? expressionIfTrue : expressionIfFalse

const age = 20;
const canVote = age >= 18 ? "Yes" : "No";

// Equivalent if-else:
let canVote;
if (age >= 18) {
    canVote = "Yes";
} else {
    canVote = "No";
}
```

## 2. Conditional Statements

### if Statements

The most basic form of control flow:

```javascript
if (condition) {
    // code to execute if condition is true
}
```

### else and else-if

Add alternative paths to your code:

```javascript
const score = 85;

if (score >= 90) {
    console.log("A grade");
} else if (score >= 80) {
    console.log("B grade");
} else if (score >= 70) {
    console.log("C grade");
} else {
    console.log("Need improvement");
}
```

### switch Statements

Useful when you need to compare a value against multiple options:

```javascript
const fruit = "apple";

switch (fruit) {
    case "banana":
        console.log("Yellow fruit");
        break;
    case "apple":
        console.log("Red fruit");
        break;
    case "grape":
        console.log("Purple fruit");
        break;
    default:
        console.log("Unknown fruit");
}
```

## 3. Iteration in JavaScript

### for Loop

The most common type of loop in JavaScript:

```javascript
// Basic for loop
for (let i = 0; i < 5; i++) {
    console.log(i);  // Prints 0, 1, 2, 3, 4
}

// Looping through an array
const fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

### while Loop

Executes as long as a condition is true:

```javascript
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}
```

### do-while Loop

Similar to while, but always executes at least once:

```javascript
let num = 0;
do {
    console.log(num);
    num++;
} while (num < 3);
```

### Control Flow Statements

#### break

Exits the current loop immediately:

```javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;  // Exit loop when i is 5
    }
    console.log(i);
}
```

#### continue

Skips the rest of the current iteration and continues with the next one:

```javascript
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;  // Skip when i is 2
    }
    console.log(i);
}
```

## Key Takeaways

1. Assignment operators provide shortcuts for common operations
2. The ternary operator is a concise way to write simple if-else statements
3. Conditional statements (if, else-if, else, switch) help control program flow
4. JavaScript offers multiple types of loops for iteration
5. Break and continue statements provide additional control within loops

## Pre-lecture Exercise

Try to solve these problems before the lecture:

1. Write a program that uses a ternary operator to check if a number is even or odd
2. Create a grading system using if-else statements
3. Write a loop that prints the first 10 even numbers
4. Use a switch statement to convert number grades to letter grades (A, B, C, D, F)
