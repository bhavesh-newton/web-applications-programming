# JavaScript Lecture Plan: Control Flow and Operators (1.5 hours)

## 1. Introduction and Pre-read Check (10 minutes)

- **Objective**: Review pre-read material and set expectations for the session.
  - Quick recap of previous lecture concepts
  - Brief overview of today's topics
  - Address any questions from pre-read material

---

## 2. Operators in JavaScript (20 minutes)

### **a) Assignment Operators (10 minutes)**

- **Objective**: Master various assignment operators in JavaScript
- **Content**:

  ```javascript
  let x = 5;
  x += 3;  // Addition assignment
  x -= 2;  // Subtraction assignment
  x *= 4;  // Multiplication assignment
  x /= 2;  // Division assignment
  ```

- **Activity**: Students practice using different assignment operators

### **b) Ternary Operator (10 minutes)**

- **Objective**: Understand and use the conditional (ternary) operator
- **Content**:

  ```javascript
  const age = 20;
  const canVote = age >= 18 ? "Yes" : "No";
  ```

- **Activity**: Convert simple if-else statements to ternary operators

---

## 3. Conditional Statements (30 minutes)

### **a) if, else, and else-if Statements (15 minutes)**

- **Objective**: Master conditional logic in JavaScript
- **Content**:

  ```javascript
  const score = 85;
  if (score >= 90) {
      console.log("A grade");
  } else if (score >= 80) {
      console.log("B grade");
  } else {
      console.log("Need improvement");
  }
  ```

- **Activity**: Write nested conditions for a simple grading system

### **b) switch Statements (15 minutes)**

- **Objective**: Understand when and how to use switch statements
- **Content**:

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

- **Activity**: Convert if-else chains to switch statements

---

## 4. Iteration in JavaScript (25 minutes)

### **a) Loops Overview (15 minutes)**

- **Objective**: Master different types of loops in JavaScript
- **Content**:

  ```javascript
  // for loop
  for (let i = 0; i < 5; i++) {
      console.log(i);
  }

  // while loop
  let count = 0;
  while (count < 5) {
      console.log(count);
      count++;
  }

  // do-while loop
  let num = 0;
  do {
      console.log(num);
      num++;
  } while (num < 3);
  ```

- **Activity**: Practice different loop types

### **b) Control Flow Statements (10 minutes)**

- **Objective**: Understand break and continue statements
- **Content**:

  ```javascript
  // break example
  for (let i = 0; i < 10; i++) {
      if (i === 5) break;
      console.log(i);
  }

  // continue example
  for (let i = 0; i < 5; i++) {
      if (i === 2) continue;
      console.log(i);
  }
  ```

- **Activity**: Implement loops with break and continue statements

---

## 5. Practice Session (5 minutes)

- **Objective**: Apply all concepts learned
- **Challenge**: Create a number guessing game using:
  - Loops
  - Conditional statements
  - Break statements
  - Ternary operators
