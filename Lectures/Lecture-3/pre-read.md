# JavaScript for Python Programmers: Control Flow and Operators

## 🎯 Learning Objectives

By the end of this pre-read, you will:

- Master JavaScript's assignment and ternary operators
- Understand conditional statements and their use cases
- Learn different types of loops and control flow statements
- Compare Python and JavaScript approaches to control flow

---

## 1. Operators in JavaScript

### ⚡ Assignment Operators

JavaScript provides several shorthand operators for common operations:

```javascript
let x = 5;       // Basic assignment
x += 3;          // Same as: x = x + 3
x -= 2;          // Same as: x = x - 2
x *= 4;          // Same as: x = x * 4
x /= 2;          // Same as: x = x / 2
x %= 3;          // Same as: x = x % 3
```

#### Python vs JavaScript Assignment

| Operation | Python | JavaScript |
|-----------|--------|------------|
| Add and assign | `x += 3` | `x += 3` |
| Multiply and assign | `x *= 4` | `x *= 4` |
| Integer divide and assign | `x //= 2` | N/A |
| Power and assign | `x **= 2` | `x **= 2` |

- **More Info**: [MDN - Assignment Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators)

### 🔄 Ternary Operator

A concise way to write simple if-else statements:

```javascript
// Syntax: condition ? expressionIfTrue : expressionIfFalse

const age = 20;
const canVote = age >= 18 ? "Yes" : "No";

// Equivalent if-else in Python:
# can_vote = "Yes" if age >= 18 else "No"
```

- **More Info**: [MDN - Conditional Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

---

## 2. Conditional Statements

### 🔍 if Statements

The foundation of control flow in any programming language:

#### Python vs JavaScript if Statements

| Python | JavaScript |
|--------|------------|
| `if condition:` | `if (condition) {` |
| &nbsp;&nbsp;&nbsp;&nbsp;`code_block` | &nbsp;&nbsp;&nbsp;&nbsp;`code_block;` |
| | `}` |

```javascript
// JavaScript
if (score >= 90) {
    console.log("A grade");
} else if (score >= 80) {
    console.log("B grade");
} else {
    console.log("Need improvement");
}
```

### 🔀 switch Statements

Perfect for multiple condition checking:

```javascript
const day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of week");
        break;
    case "Friday":
        console.log("Weekend approaching");
        break;
    default:
        console.log("Regular day");
}
```

#### Python Equivalent using Dictionary

```python
days = {
    "Monday": "Start of week",
    "Friday": "Weekend approaching"
}
print(days.get(day, "Regular day"))
```

- **More Info**: [MDN - switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)

---

## 3. Iteration in JavaScript

### 🔄 Types of Loops

#### for Loop

The most versatile loop in JavaScript:

```javascript
// Basic for loop
for (let i = 0; i < 5; i++) {
    console.log(i);  // Prints 0, 1, 2, 3, 4
}

// Python equivalent:
# for i in range(5):
#     print(i)
```

#### while Loop

Executes while a condition is true:

```javascript
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}
```

#### do-while Loop

Always executes at least once:

```javascript
let num = 0;
do {
    console.log(num);
    num++;
} while (num < 3);
```

### 🚦 Control Flow Statements

#### break

Exits the current loop:

```javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) break;  // Exit when i is 5
    console.log(i);
}
```

#### continue

Skips the current iteration:

```javascript
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;  // Skip 2
    console.log(i);
}
```

| Statement | JavaScript | Python |
|-----------|------------|--------|
| Break loop | `break;` | `break` |
| Skip iteration | `continue;` | `continue` |
| Exit function | `return;` | `return` |

- **More Info**: [MDN - Loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

---

## 🤔 Key Differences from Python

1. JavaScript uses curly braces `{}` for blocks instead of indentation
2. `switch` statements provide an alternative to long if-else chains
3. `do-while` loops don't exist in Python
4. Semicolons are required at the end of statements

## 💡 Pre-lecture Exercises

1. Write a program that uses a ternary operator to check if a number is even or odd
2. Create a grading system using if-else statements (A: ≥90, B: ≥80, C: ≥70, D: ≥60, F: <60)
3. Write a loop that prints the first 10 even numbers
4. Use a switch statement to convert number grades to letter grades

---

## 📚 Additional Resources

- [MDN - Control Flow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [JavaScript.info - Loops](https://javascript.info/while-for)
- [MDN - Expressions and Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)
