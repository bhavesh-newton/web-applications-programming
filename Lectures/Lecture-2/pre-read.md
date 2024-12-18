# JavaScript for Python Programmers: Understanding Data Types and Operators

## 🎯 Learning Objectives

By the end of this pre-read, you will:

- Recognize JavaScript’s basic data types
- Understand how to check the type of a value in JavaScript
- Learn the common operators in JavaScript

---

## 1. Data Types: What Can We Work With?

In both Python and JavaScript, everything revolves around data. Let’s look at the basic data types in JavaScript and compare them with Python.

### 🔗 Primitive Data Types in JavaScript

- **Number**: Represents both integers and floating-point numbers.

  - Python Equivalent: `int` and `float`.
  - Example: `42`, `3.14`

  - **More Info**: [MDN - Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

- **String**: Represents text enclosed in single, double, or backtick quotes.

  - Python Equivalent: `str`.
  - Example: `'hello'`, `"world"`, `` `template literals` ``

  - **More Info**: [MDN - String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

- **Boolean**: Represents `true` or `false` values.

  - Python Equivalent: `bool`.
  - Example: `true`, `false`

  - **More Info**: [MDN - Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

- **Undefined**: A variable that has been declared but not assigned a value.

  - Python Equivalent: None (sort of).
  - Example: `let x; // x is undefined`

  - **More Info**: [MDN - Undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

- **Null**: Explicitly represents "no value."

  - Python Equivalent: `None`.
  - Example: `let y = null;`

  - **More Info**: [MDN - Null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

- **Symbol**: Unique identifiers (used less often).

  - Python Equivalent: No direct equivalent.
  - Example: `let sym = Symbol('id');`

  - **More Info**: [MDN - Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)

- **BigInt**: For numbers larger than `2^53 - 1`.

  - Python Equivalent: Python’s `int` (arbitrary precision).
  - Example: `12345678901234567890n`

  - **More Info**: [MDN - BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

---

## 2. Checking the Type of a Value

In Python, you use `type()`. In JavaScript, you use `typeof`.

### Python Example

```python
# Python type checking
x = 42
print(type(x))  # <class 'int'>
```

### JavaScript Equivalent

```javascript
// JavaScript type checking
let x = 42;
console.log(typeof x);  // "number"
```

| Value       | JavaScript `typeof` Result |
| ----------- | -------------------------- |
| `42`        | `"number"`                 |
| `'hello'`   | `"string"`                 |
| `true`      | `"boolean"`                |
| `undefined` | `"undefined"`              |
| `null`      | `"object"` (quirk!)        |

- **More Info**: [MDN - typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

---

## 3. Operators: Making Things Happen

### 🔄 Arithmetic Operators

These work the same as Python.

| Operator | JavaScript Example | Result |
| -------- | ------------------ | ------ |
| `+`      | `5 + 2`            | `7`    |
| `-`      | `5 - 2`            | `3`    |
| `*`      | `5 * 2`            | `10`   |
| `/`      | `5 / 2`            | `2.5`  |
| `%`      | `5 % 2`            | `1`    |
| `**`     | `5 ** 2`           | `25`   |

- **More Info**: [JavaScript.info - Arithmetic Operators](https://javascript.info/operators#arithmetic-operators)

### ⚖️ Comparison Operators

Similar to Python but with stricter equality options.

| Operator | JavaScript Example | Python Equivalent | Result  |
| -------- | ------------------ | ----------------- | ------- |
| `==`     | `5 == '5'`         | `5 == '5'`        | `true`  |
| `===`    | `5 === '5'`        | N/A               | `false` |
| `!=`     | `5 != '5'`         | `5 != '5'`        | `false` |
| `!==`    | `5 !== '5'`        | N/A               | `true`  |
| `>`      | `5 > 3`            | `5 > 3`           | `true`  |
| `<`      | `3 < 5`            | `3 < 5`           | `true`  |

- **More Info**: [JavaScript.info - Comparison Operators](https://javascript.info/comparison)

### ⚙️ Logical Operators

Operate the same way as in Python.

| Operator | JavaScript Example | Python Equivalent | Result  |
| -------- | ------------------ | ----------------- | ------- |
| `&&`     | `true && false`    | `True and False`  | `false` |
| `\|\|`     | `true \|\| false`    | `True or False`   | `true`  |
| `!`      | `!true`            | `not True`        | `false` |

- **More Info**: [MDN - Logical Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)

---

## 🚀 Quick Tips for Success

1. **Use `===` for strict equality**: Avoid confusing results from `==`.
2. **Practice `typeof`**: Always check the type when unsure.
3. **Test operators**: Use the browser console to explore how operators work.

---

Get ready for Lecture 2, where we’ll dive deeper into using these concepts in your programs!

