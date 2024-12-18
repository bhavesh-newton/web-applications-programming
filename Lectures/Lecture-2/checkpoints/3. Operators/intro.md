# Operators in JavaScript: An Overview

## 🎯 Objective:
Understand JavaScript's operators for performing calculations, comparisons, assignments, logical operations, and bitwise operations.

---

## **1. Arithmetic Operators**
These are used to perform mathematical operations:

| Operator | Description         | Example  | Result     |
| -------- | ------------------- | -------- | ---------- |
| `+`      | Addition            | `5 + 3`  | `8`        |
| `-`      | Subtraction         | `5 - 3`  | `2`        |
| `*`      | Multiplication      | `5 * 3`  | `15`       |
| `/`      | Division            | `5 / 3`  | `1.666...` |
| `%`      | Modulus (Remainder) | `5 % 3`  | `2`        |
| `**`     | Exponentiation      | `5 ** 3` | `125`      |

---

## **2. Assignment Operators**
These are used to assign values to variables. Some operators also perform calculations while assigning.

| Operator | Description               | Example   | Result       |
| -------- | ------------------------- | --------- | ------------ |
| `=`      | Assign                    | `x = 5`   | `x = 5`      |
| `+=`     | Add and assign            | `x += 3`  | `x = x + 3`  |
| `-=`     | Subtract and assign       | `x -= 3`  | `x = x - 3`  |
| `*=`     | Multiply and assign       | `x *= 3`  | `x = x * 3`  |
| `/=`     | Divide and assign         | `x /= 3`  | `x = x / 3`  |
| `%=`     | Modulus and assign        | `x %= 3`  | `x = x % 3`  |
| `**=`    | Exponentiation and assign | `x **= 2` | `x = x ** 2` |

---

## **3. Comparison Operators**
These compare two values and return a Boolean (`true` or `false`).

| Operator | Description              | Example     | Result  |
| -------- | ------------------------ | ----------- | ------- |
| `==`     | Loose equality           | `5 == "5"`  | `true`  |
| `===`    | Strict equality          | `5 === "5"` | `false` |
| `!=`     | Loose inequality         | `5 != "5"`  | `false` |
| `!==`    | Strict inequality        | `5 !== "5"` | `true`  |
| `>`      | Greater than             | `5 > 3`     | `true`  |
| `<`      | Less than                | `3 < 5`     | `true`  |
| `>=`     | Greater than or equal to | `5 >= 5`    | `true`  |
| `<=`     | Less than or equal to    | `3 <= 5`    | `true`  |

---

## **4. Logical Operators**
Logical operators help manipulate Boolean values and expressions:

- **Logical AND (`&&`)**:
  - Combines two conditions; returns `true` only if both are `true`.
  - Example: `true && false` → `false`

- **Logical OR (`||`)**:
  - Combines two conditions; returns `true` if at least one is `true`.
  - Example: `true || false` → `true`

- **Logical NOT (`!`)**:
  - Negates a Boolean value; converts `true` to `false` and vice versa.
  - Example: `!true` → `false`

---

## **5. Bitwise Operators**
Bitwise operators work directly with binary representations of numbers:

- **AND (`&`)**: Compares each bit; results in `1` only if both bits are `1`.
  - Example: `5 & 3` → `1`

- **OR (`|`)**: Compares each bit; results in `1` if at least one bit is `1`.
  - Example: `5 | 3` → `7`

- **XOR (`^`)**: Compares each bit; results in `1` where only one bit is `1`.
  - Example: `5 ^ 3` → `6`

- **NOT (`~`)**: Inverts all bits (two’s complement).
  - Example: `~5` → `-6`

- **Left Shift (`<<`)**: Shifts bits to the left, filling with `0`.
  - Example: `5 << 1` → `10`

- **Right Shift (`>>`)**: Shifts bits to the right, preserving the sign.
  - Example: `5 >> 1` → `2`

- **Unsigned Right Shift (`>>>`)**: Shifts bits to the right, filling with `0` regardless of the sign.
  - Example: `-5 >>> 1` → `2147483645`

---

## 🌟 Key Takeaways:
- Arithmetic operators perform calculations.
- Assignment operators simplify value updates.
- Comparison operators evaluate relationships between values.
- Logical operators combine or negate Boolean expressions.
- Bitwise operators manipulate binary representations for low-level computations.

