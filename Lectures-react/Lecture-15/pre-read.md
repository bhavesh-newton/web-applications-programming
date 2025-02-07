# Pre-read: Preparing for Advanced JSX

## 🎯 Review Objectives

Before diving into advanced JSX concepts, let's review the fundamental concepts you'll need:

- Refresh your understanding of basic JSX syntax
- Review JavaScript fundamentals crucial for dynamic JSX
- Revisit component basics and props
- Understand the relationship between JavaScript and JSX

---

## 1. JavaScript Fundamentals Review

### Array Methods You'll Need

The following array methods are crucial for dynamic rendering:

```javascript
// map - transforms each element
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2); // [2, 4, 6]

// filter - selects elements based on condition
const evenNumbers = numbers.filter(num => num % 2 === 0); // [2]

// find - gets first matching element
const firstEven = numbers.find(num => num % 2 === 0); // 2
```

### Modern JavaScript Features Review

```javascript
// Destructuring
const user = { name: 'John', age: 30 };
const { name, age } = user;

// Spread operator
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]

// Template literals
const greeting = `Hello ${name}!`;

// Arrow functions
const add = (a, b) => a + b;
```

---

## 2. Basic JSX Review

### JSX Fundamentals

```jsx
// Basic JSX syntax
const element = <h1>Hello World</h1>;

// Multi-line JSX needs parentheses
const container = (
  <div>
    <h1>Title</h1>
    <p>Paragraph</p>
  </div>
);

// Self-closing tags must be closed
const img = <img src="photo.jpg" />;
```

### Component and Props Review

```jsx
// Function component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Using components
const element = <Welcome name="Sara" />;

// Props are read-only!
```

---

## 3. Event Handling Review

```jsx
// Basic event handling
function Button() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return <button onClick={handleClick}>Click me</button>;
}

// Event with parameters
function Form() {
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return <input onChange={handleChange} />;
}
```

---

## 4. State Basics Review

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

---

## 🤔 Self-Check Questions

1. Can you explain the difference between `map()` and `filter()`?
2. What's the purpose of the spread operator?
3. How do you handle events in React components?
4. What's the difference between props and state?
5. Why do we need to use curly braces in JSX?

---

## 📚 Quick Reference

- [JavaScript Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [ES6 Features](https://www.w3schools.com/js/js_es6.asp)
- [React Components and Props](https://react.dev/learn/components-and-props)
- [React State](https://react.dev/learn/state-a-components-memory)

**Make sure you're comfortable with these concepts before moving on to advanced JSX!**
