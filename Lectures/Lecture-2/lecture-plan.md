# JavaScript Lecture Plan: Data Types and Operators (1.5 hours)

## 1. Pre-read Check (5 minutes)

- **Objective**: Ensure students understood the pre-read.
  - Quickly quiz 2-3 students: What is `typeof`? Name a primitive data type.
  - Clarify any doubts from the pre-read.

---

## 2. Data Types in JavaScript (30 minutes)

### **a) Introduction to Data Types (15 minutes)**

- **Objective**: Familiarize students with JavaScript's data types and their use cases.
- **Content**:
  - Overview of **Primitive Data Types**: `Number`, `String`, `Boolean`, `Undefined`, `Null`, `Symbol`, `BigInt`.
  - Overview of **Non-Primitive Data Types**:
    - **Object**: A collection of key-value pairs.
      - Example: `{ name: "Alice", age: 25 }`
    - **Array**: An ordered list of values.
      - Example: `[1, 2, 3, 4]`
    - **Function**: A reusable block of code.
      - Example: `function greet() { console.log("Hello"); }`
  - Relate to Python equivalents (e.g., `dict` ≈ Object, `list` ≈ Array).
  - Interactive console demo:
    ```javascript
    console.log(typeof 42);          // "number"
    console.log(typeof "hello");     // "string"
    console.log(typeof undefined);   // "undefined"
    console.log(typeof { key: "value" }); // "object"
    ```
- **Activity**: Ask students to predict the output of `typeof` for different values.

### **b) Quirks and Best Practices (10 minutes)**

- Highlight the `typeof null` quirk (`"object"`) and its historical reason.
- Discuss the use of `let`, `const`, and avoiding `var`.
- Interactive quiz: "What is the type of..."
  - Example question: What is the type of `[]`? (`"object"`)

### **c) Practical Exercise (5 minutes)**

- Students write 3 variables of different types (primitive and non-primitive) and use `typeof` to check them.

---

## 3. Operators in JavaScript (30 minutes)

### **a) Arithmetic Operators (10 minutes)**

- **Objective**: Teach common arithmetic operations.
  - Examples: `+`, `-`, `*`, `/`, `%`, `**`.
  - Relate to Python equivalents.
  - Demo:
    ```javascript
    console.log(5 + 2);  // 7
    console.log(5 % 2);  // 1
    console.log(5 ** 2); // 25
    ```
- **Activity**: Quick exercise for students to calculate expressions.

### **b) Comparison Operators (10 minutes)**

- **Objective**: Differentiate between `==` and `===`.
  - Explain loose vs strict equality (`5 == "5"` vs `5 === "5"`).
  - Discuss other operators: `<`, `>`, `<=`, `>=`, `!=`, `!==`.
  - Demo:
    ```javascript
    console.log(5 == "5");   // true
    console.log(5 === "5");  // false
    ```
- **Activity**: Predict and verify the output of comparison expressions.

### **c) Logical Operators (10 minutes)**

- **Objective**: Introduce `&&`, `||`, `!`.
  - Demo:
    ```javascript
    console.log(true && false);  // false
    console.log(true || false);  // true
    console.log(!true);          // false
    ```
- **Activity**: Students create conditions using logical operators.

---

## 4. Practice Session: MCQs and Coding Challenges (20 minutes)

### **a) Multiple Choice Questions (MCQs) (5 minutes)**

- Quick quiz to reinforce:
  - Data types
  - `typeof`
  - Operator precedence

### **b) Coding Challenge (15 minutes)**

- Students solve coding problems:
  - Create variables with different data types.
  - Write expressions using arithmetic and logical operators.
  - Use `typeof` to validate data types.

---

## 5. Summary and Q&A (5 minutes)

- Recap key concepts:
  - Data types (primitive and non-primitive) and `typeof`
  - Arithmetic, comparison, and logical operators
- Address any remaining questions from students.

