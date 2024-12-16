# Declaring Variables in JavaScript

In JavaScript, variables are used to store data that can be accessed or changed during the program. There are three main ways to declare variables: `let`, `const`, and `var`.

## 1. **`let` - Declaring Changeable Variables**
- **Purpose**: `let` is used when you want to declare a variable that can change its value.
- After declaring a variable with `let`, you can change its value as many times as you need.

## 2. **`const` - Declaring Constant Variables**
- **Purpose**: `const` is used when you want to declare a variable that **should not change** once it has been assigned a value.
- **Important**: Once a `const` variable is assigned a value, you cannot change it.
- If you try to change the value of a `const` variable, it will give an error.

## 3. **`var` - Older Way to Declare Variables**
- **Purpose**: `var` is an older way to declare variables. It is less common in modern JavaScript but still works.
- **Note**: With `var`, you can redeclare variables in the same scope, which can sometimes cause confusion.

## Error Cases in JavaScript:
1. **Redeclaring with `let`**: If you try to declare the same variable twice in the same scope using `let`, JavaScript will give you an error.
2. **Redeclaring with `const`**: You cannot redeclare a variable declared with `const` in the same scope. If you do, JavaScript will throw an error.
3. **Reassigning `const` variables**: You cannot change the value of a `const` variable after it has been assigned. Trying to do so will cause an error.

## Dynamic Typing in JavaScript:
- JavaScript is **dynamically typed**, which means that variables do not have a fixed type. For example, a variable that holds a number can later hold a string without any issues.

---

This simple guide should help you understand how to declare and use variables in JavaScript. Keep practicing, and don't worry if you make mistakes — it's part of the learning process!
