# JavaScript Lecture Plan: Object Methods and Data Structures (1.5 hours)

## 🎯 Session Objectives

- Master JavaScript's built-in object methods
- Understand data manipulation with objects
- Learn efficient ways to work with object data
- Practice real-world object manipulation scenarios

---

## 1. Introduction and Pre-read Review (10 minutes)

### 🔄 Quick Review

- **Objective**: Ensure understanding of pre-read material
- **Activity**:
    - Quick quiz on object basics
    - Review object manipulation concepts

### 🌟 Today's Roadmap

- Overview of object methods
- Hands-on practice with data transformation
- Real-world applications

---

## 2. Object.keys() and Object.values() (25 minutes)

### 💫 Object.keys() Deep Dive (12 minutes)

- **Objective**: Master extracting and working with object keys
- **Live Coding Demo**:

  ```javascript
  const user = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  const keys = Object.keys(user);
  console.log(keys);  // ["name", "age", "city"]
  
  // Iterating over keys
  keys.forEach(key => {
    console.log(`${key}: ${user[key]}`);
  });
  ```

- **Interactive Exercise**:
    - Create object property validators
    - Build dynamic form field generators

### 🎯 Object.values() Workshop (13 minutes)

- **Objective**: Efficiently work with object values
- **Live Examples**:

  ```javascript
  const prices = {
    apple: 0.50,
    banana: 0.30,
    orange: 0.45
  };
  
  const allPrices = Object.values(prices);
  const total = allPrices.reduce((sum, price) => sum + price, 0);
  ```

- **Group Challenge**: Calculate statistics from object values

---

## 3. Object.entries() and Object.fromEntries() (30 minutes)

### 🔍 Object.entries() Mastery (15 minutes)

- **Objective**: Transform objects into array pairs
- **Real-world Examples**:

  ```javascript
  const stock = {
    apples: 5,
    bananas: 8,
    oranges: 12
  };
  
  for (const [fruit, quantity] of Object.entries(stock)) {
    console.log(`We have ${quantity} ${fruit}`);
  }
  ```

- **Pair Programming**:
    - Create data transformation utilities
    - Build object filtering systems

### 🔀 Object.fromEntries() Workshop (15 minutes)

- **Objective**: Convert arrays back to objects
- **Interactive Demo**:

  ```javascript
  const entries = [
    ['name', 'John'],
    ['age', 30],
    ['city', 'New York']
  ];
  
  const person = Object.fromEntries(entries);
  ```

- **Challenge**: Build data structure converters

---

## 4. Practical Applications (20 minutes)

### 🔄 Data Transformation Patterns (10 minutes)

- **Objective**: Master common object manipulation patterns
- **Examples**:

  ```javascript
  // Filtering object properties
  const user = {
    name: 'John',
    age: 30,
    password: '12345',
    email: 'john@example.com'
  };
  
  const publicData = Object.fromEntries(
    Object.entries(user)
      .filter(([key]) => !['password'].includes(key))
  );
  ```

### ⚡ Performance Optimization (10 minutes)

- **Objective**: Learn efficient object manipulation
- **Best Practices**:
    - When to use which method
    - Memory considerations
    - Performance benchmarking

---

## 5. Practice Session (15 minutes)

### 🎮 Interactive Coding Challenges

1. **Data Transformer**:
   - Convert array of objects to object of objects
   - Filter and transform object properties
   - Merge multiple objects efficiently

2. **Form Validator**:
   - Check required fields using Object.keys
   - Validate data types using Object.values
   - Transform form data using entries/fromEntries

3. **Data Analytics**:
   - Calculate statistics from object values
   - Group data by properties
   - Generate summary reports

4. **Object Cache**:
   - Implement simple caching system
   - Add expiration to cached items
   - Clean expired entries

### 🏆 Bonus Challenge

Create a mini database system:

- Store and retrieve data using objects
- Implement search functionality
- Add data validation
- Support data transformation

---

## 📝 Homework Assignment

1. Build a contact management system using object methods
2. Create a product inventory tracker
3. Implement a simple query builder
4. Develop a data migration tool

---

## 🎯 Key Takeaways

1. When to use each object method
2. Efficient data transformation patterns
3. Best practices for object manipulation
4. Performance considerations
