# Data Types in JavaScript: An Overview

## 🎯 Objective:
Understand JavaScript's data types, their distinctions, and how they are used in programming.

---

## **1. Primitive Data Types**
JavaScript has seven **primitive** data types:

- **Number**: Represents numeric values.
  - Example: `42`, `3.14`
  - Operations: Addition, subtraction, division, etc.

- **String**: Text enclosed in quotes.
  - Example: `'hello'`, `"world"`
  - Concatenation: `"hello" + " world"` → `"hello world"`

- **Boolean**: Logical values.
  - Example: `true`, `false`

- **Undefined**: A variable declared but not assigned a value.
  - Example: `let x; // undefined`

- **Null**: Explicitly represents "no value."
  - Example: `let y = null;`

- **Symbol**: Unique identifiers.
  - Example: `let sym = Symbol('id');`

- **BigInt**: Handles numbers larger than `2^53 - 1`.
  - Example: `12345678901234567890n`

---

## **2. Non-Primitive Data Types**
Non-primitive data types include objects that can store collections of data or more complex entities:

- **Object**: Key-value pairs.
  - Example:
    ```javascript
    let person = {
      name: "Alice",
      age: 25
    };
    ```

- **Array**: Ordered list of items.
  - Example:
    ```javascript
    let numbers = [1, 2, 3, 4];
    ```

- **Function**: Reusable blocks of code.
  - Example:
    ```javascript
    function greet() {
      console.log("Hello, world!");
    }
    ```

---

## **3. The `typeof` Operator**
The `typeof` operator allows you to check the type of a variable or value:

### Examples:
```javascript
console.log(typeof 42);         // "number"
console.log(typeof "hello");    // "string"
console.log(typeof true);       // "boolean"
console.log(typeof undefined);  // "undefined"
console.log(typeof null);       // "object" (quirk)
console.log(typeof {});         // "object"
console.log(typeof []);         // "object" (arrays are objects)
console.log(typeof function(){}); // "function"
```

---

## 🌟 Key Takeaways:
- Primitive data types are simple and immutable.
- Non-primitive data types include objects, arrays, and functions, which are more complex.
- Use `typeof` to inspect the type of any value.

