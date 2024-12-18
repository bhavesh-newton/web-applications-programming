// Examples for JavaScript Operators

// Example 1: Arithmetic Operators
let a = 10;
let b = 3;
console.log(a + b); // Output: 13 (Addition)
console.log(a - b); // Output: 7 (Subtraction)
console.log(a * b); // Output: 30 (Multiplication)
console.log(a / b); // Output: 3.333... (Division)
console.log(a % b); // Output: 1 (Modulus)
console.log(a ** b); // Output: 1000 (Exponentiation)

// Example 2: Assignment Operators
let x = 5;
x += 3; // Equivalent to x = x + 3
console.log(x); // Output: 8
x -= 2; // Equivalent to x = x - 2
console.log(x); // Output: 6
x *= 4; // Equivalent to x = x * 4
console.log(x); // Output: 24
x /= 3; // Equivalent to x = x / 3
console.log(x); // Output: 8
x %= 5; // Equivalent to x = x % 5
console.log(x); // Output: 3
x **= 2; // Equivalent to x = x ** 2
console.log(x); // Output: 9

// Example 3: Comparison Operators
console.log(5 == "5");  // Output: true (Loose equality)
console.log(5 === "5"); // Output: false (Strict equality)
console.log(5 != "5");  // Output: false (Loose inequality)
console.log(5 !== "5"); // Output: true (Strict inequality)
console.log(5 > 3);      // Output: true (Greater than)
console.log(3 < 5);      // Output: true (Less than)
console.log(5 >= 5);     // Output: true (Greater than or equal)
console.log(3 <= 5);     // Output: true (Less than or equal)

// Example 4: Logical Operators
let isLoggedIn = true;
let hasAccess = false;
console.log(isLoggedIn && hasAccess); // Output: false (Logical AND)
console.log(isLoggedIn || hasAccess); // Output: true (Logical OR)
console.log(!isLoggedIn); // Output: false (Logical NOT)

// Example 5: Bitwise Operators
let num1 = 5; // Binary: 0101
let num2 = 3; // Binary: 0011
console.log(num1 & num2); // Output: 1 (Bitwise AND)
console.log(num1 | num2); // Output: 7 (Bitwise OR)
console.log(num1 ^ num2); // Output: 6 (Bitwise XOR)
console.log(~num1);       // Output: -6 (Bitwise NOT)
console.log(num1 << 1);   // Output: 10 (Left Shift)
console.log(num1 >> 1);   // Output: 2 (Right Shift)
console.log(num1 >>> 1);  // Output: 2 (Unsigned Right Shift)

// Example 6: Practice - Combining Logical and Comparison Operators
let age = 20;
let hasPermission = age >= 18 && !hasAccess; // Checks if age is >= 18 and does not have access
console.log(hasPermission); // Output: true