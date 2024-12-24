# JavaScript Lecture Plan: Control Flow and Operators (1.5 hours)

## 1. Introduction and Pre-read Review (10 minutes)

### 🔄 Quick Review

- **Objective**: Ensure understanding of pre-read material
- **Activity**:
  - Quick quiz on operators and control flow concepts
  - Address questions from pre-read exercises

### 🌟 Today's Roadmap

- Brief overview of topics to be covered
- Set expectations for hands-on practice

---

## 2. Operators in JavaScript (25 minutes)

### 💫 Assignment Operators Deep Dive (15 minutes)

- **Objective**: Master various assignment operators
- **Interactive Demo**:

  ```javascript
  let x = 5;
  x += 3;  // Addition assignment
  x -= 2;  // Subtraction assignment
  x *= 4;  // Multiplication assignment
  x /= 2;  // Division assignment
  ```

- **Interactive Exercise**:
  - Students modify game scores using different operators
  - Debug common operator precedence issues - [top-cohort]

### 🎯 Ternary Operator Workshop (10 minutes)

- **Objective**: Write concise conditional code
- **Live Examples**:

  ```javascript
  // Age verification
  const age = 20;
  const message = age >= 18 
    ? "Welcome to the site" 
    : "Access denied";

  // Number check
  const type = num > 0 
    ? "positive" 
    : num < 0 
      ? "negative" 
      : "zero";
  ```

- **Group Challenge**: Convert complex if-else statements to ternary operators

---

## 3. Conditional Statements (30 minutes)

### 🔍 if-else Mastery (15 minutes)

- **Objective**: Write efficient conditional logic
- **Real-world Examples**:

  ```javascript
  // Shopping cart discount
  if (cartTotal >= 100) {
      discount = 20;
  } else if (cartTotal >= 50) {
      discount = 10;
  } else {
      discount = 0;
  }
  ```

- **Pair Programming**:
  - Create a movie rating system
  - Implement user authentication logic

### 🔀 switch Statements (15 minutes)

- **Objective**: Learn when to use switch over if-else
- **Interactive Demo**:

  ```javascript
  // Day planner
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

- **Challenge**: Convert complex if-else chains to switch statements

---

## 4. Iteration and Control Flow (20 minutes)

### 🔄 Loop Types and Usage (10 minutes)

- **Objective**: Master different loop types
- **Practical Examples**:

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

- **Exercise**: Implement different loops for various scenarios

### ⚡ Control Flow Statements (10 minutes)

- **Objective**: Use break and continue effectively
- **Live Coding**:

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

  // Finding first match
  for (const user of users) {
      if (user.id === targetId) {
          console.log("Found user!");
          break;
      }
  }
  ```

- **Challenge**: Optimize loop performance using control flow statements

---

## 5. Practice Session (15 minutes)

### 🎮 Interactive Coding Challenges

1. **Number Game**:
   - Use loops to generate random numbers
   - Implement game logic with conditionals
   - Add score tracking with operators

2. **Shopping Cart**:
   - Calculate discounts using conditions
   - Apply tax using operators
   - Validate cart using loops

3. **User Authentication**:
   - Implement login attempts limit
   - Password strength checker
   - Session timeout logic

4. **Data Processing**:
   - Filter array elements using conditions
   - Transform data using operators
   - Accumulate results using loops

5. **Quiz System**:
   - Track scores using operators
   - Implement question skip using continue
   - Handle time limits using break

### 🏆 Bonus Challenge

Create a mini game combining all concepts:

- Loop for game rounds
- Conditions for win/lose
- Operators for score calculation
- Control flow for game progression

---

## 📝 Homework Assignment

1. Implement a basic calculator using switch statements
2. Create a number guessing game with limited attempts
3. Build a simple task scheduler using various loops
4. Develop a grade calculator using ternary operators

---

## 🎯 Key Takeaways

1. When to use different types of operators
2. Choosing between if-else and switch
3. Selecting the right loop for each scenario
4. Optimizing code with control flow statements
