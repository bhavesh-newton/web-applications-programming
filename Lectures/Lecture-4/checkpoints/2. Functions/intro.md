# Functions in JavaScript

## 🎯 Objective:
Understand the concept of function declarations in JavaScript, including their syntax, how to call them, and the differences between parameters and arguments.

---

## **1. Function Declaration Syntax**
A function declaration in JavaScript is defined using the `function` keyword, followed by a name, parentheses for parameters, and a block of code enclosed in curly braces.

### Syntax:
```javascript
function functionName(parameter1, parameter2, ...) {
    // Code to be executed
}
```

### Example:
```javascript
function greet(name) {
    console.log("Hello, " + name + "!");
}
```

In this example, `greet` is the function name, and it takes one parameter, `name`.

---

## **2. Calling a Function**
To execute a function, you need to call it by its name followed by parentheses. If the function requires parameters, you can pass arguments within the parentheses.

### Example:
```javascript
greet("Alice"); // Output: Hello, Alice!
```

---

## **3. Parameters in JavaScript Functions**
Parameters are variables listed as part of a function's definition. They act as placeholders for the values (arguments) that will be passed to the function when it is called.

### Example:
```javascript
function add(a, b) {
    return a + b;
}
```
In this example, `a` and `b` are parameters of the `add` function.

---

## **4. Arguments in JavaScript Functions**
Arguments are the actual values passed to the function when it is invoked. They replace the corresponding parameters in the function definition.

### Example:
```javascript
let result = add(5, 3); // Here, 5 and 3 are arguments.
console.log(result); // Output: 8
```

---

## **5. The `return` Keyword**
The `return` keyword is used to specify the value that will be returned from a function. When a return statement is executed, the function stops executing and returns the specified value.

### Example:
```javascript
function square(number) {
    return number * number;
}

let squaredValue = square(4); // Returns 16
console.log(squaredValue); // Output: 16
```

---

## 🌟 Key Takeaways:
- **Function Declaration**: Defined with the `function` keyword followed by a name and parameters.
- **Calling Functions**: Functions are executed by calling their name with appropriate arguments.
- **Parameters vs. Arguments**: Parameters are placeholders in the function definition; arguments are actual values passed during a call.
- **Return Statement**: Used to exit a function and return a value.
