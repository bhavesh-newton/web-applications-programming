# Summary: Data Types and Operators in JavaScript

Congratulations! You've explored essential concepts in JavaScript, covering data types and operators. Here's a recap of what we've learned:

---

## 1. **Data Types**
### Primitive Data Types
- **Number**: Represents numeric values. Example: `42`
- **String**: Represents text. Example: `'hello'`
- **Boolean**: Represents logical values. Example: `true`, `false`
- **Undefined**: A variable that is declared but not assigned a value.
- **Null**: Explicitly represents "no value".
- **Symbol**: Unique identifiers (advanced use).
- **BigInt**: For handling integers larger than `2^53 - 1`.

### Non-Primitive Data Types
- **Object**: Stores collections of key-value pairs. Example:
  ```javascript
  let person = { name: "Alice", age: 25 };
  ```
- **Array**: Represents an ordered list of values. Example:
  ```javascript
  let numbers = [1, 2, 3, 4];
  ```
- Use `typeof` to identify the type of data in your variables.

---

## 2. **Operators**
### Arithmetic Operators
- Perform basic calculations: `+`, `-`, `*`, `/`, `%`, `**`
- Example:
  ```javascript
  console.log(5 + 3); // Output: 8
  ```

### Assignment Operators
- Assign and update values: `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=`
- Example:
  ```javascript
  let x = 5;
  x += 3; // Equivalent to x = x + 3
  console.log(x); // Output: 8
  ```

### Comparison Operators
- Compare values and return a Boolean: `==`, `===`, `!=`, `!==`, `<`, `>`, `<=`, `>=`
- Example:
  ```javascript
  console.log(5 === "5"); // Output: false
  ```

### Logical Operators
- Combine or negate conditions: `&&`, `||`, `!`
- Example:
  ```javascript
  console.log(true || false); // Output: true
  ```

### Bitwise Operators
- Perform operations at the binary level:
  - **AND (`&`)**: `5 & 3` → `1`
  - **OR (`|`)**: `5 | 3` → `7`
  - **XOR (`^`)**: `5 ^ 3` → `6`
  - **NOT (`~`)**: `~5` → `-6`
  - **Left Shift (`<<`)**: `5 << 1` → `10`
  - **Right Shift (`>>`)**: `5 >> 1` → `2`
  - **Unsigned Right Shift (`>>>`)**: `-5 >>> 1` → `2147483645`

---

## 3. **Dynamic Typing**
JavaScript variables can change types during execution:
```javascript
let value = 42;      // Initially a number
value = "Hello!";    // Now a string
console.log(value);  // Output: Hello!
```

---

## 4. **Common Practices**
- Use `let` and `const` for variable declarations (`const` for values that shouldn't change).
- Avoid using `var` to prevent scoping issues.
- Always test your code in the console to understand behavior.

---

## What’s Next?
1. **Practice**: Write small programs using data types and operators.
2. **Experiment**: Use the examples from this lesson and modify them to see different outputs.
3. **Explore**: Learn about conditional statements (`if`, `else`), loops, and functions to expand your JavaScript knowledge.

Remember, **consistent practice** is the key to mastering JavaScript. Keep coding and building your skills. 🚀