# Pre-read: State Management and Event Handling

## 🎯 Review Objectives

Before diving into React state and events, let's review the fundamental concepts you'll need:

- Understand the concept of state in web applications
- Review JavaScript event handling basics
- Familiarize yourself with React's component lifecycle
- Prepare for hands-on state management

---

## 1. Understanding State

### What is State?

State represents the data in your application that can change over time. Think of it as the "memory" of your component.

### Types of State

```jsx
// Simple state
let counter = 0; // Traditional variable
const [count, setCount] = useState(0); // React state

// Complex state
const [user, setUser] = useState({
  name: 'John',
  age: 25,
  isLoggedIn: false
});

// Array state
const [items, setItems] = useState(['apple', 'banana']);
```

### State vs Variables

```jsx
// Regular variable - doesn't trigger re-render
let score = 0;
score = 10;

// React state - triggers re-render
const [score, setScore] = useState(0);
setScore(10);
```

---

## 2. Event Handling Review

### Basic JavaScript Events

```jsx
// Traditional DOM events
button.addEventListener('click', function() {
  console.log('Button clicked!');
});

// Form events
input.addEventListener('change', function(event) {
  console.log(event.target.value);
});
```

### React Event Naming

- onClick (not onclick)
- onChange (not onchange)
- onSubmit (not onsubmit)
- onMouseOver (not onmouseover)

---

## 3. React State Concepts

### useState Hook

```jsx
import { useState } from 'react';

// Basic usage
const [state, setState] = useState(initialValue);

// Multiple state variables
const [name, setName] = useState('');
const [age, setAge] = useState(0);
const [isOnline, setIsOnline] = useState(false);
```

### State Updates

```jsx
// Direct update
setCount(5);

// Update based on previous state
setCount(prevCount => prevCount + 1);

// Object state update
setUser(prevUser => ({
  ...prevUser,
  name: 'Jane'
}));
```

---

## 4. Event Handling in React

### Common Event Patterns

```jsx
// Click handler
function Button() {
  const [clicked, setClicked] = useState(false);
  
  const handleClick = () => {
    setClicked(true);
    console.log('Clicked!');
  };
  
  return (
    <button onClick={handleClick}>
      {clicked ? 'Clicked!' : 'Click me'}
    </button>
  );
}

// Form handler
function Form() {
  const [inputValue, setInputValue] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted:', inputValue);
  };
  
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## 🤔 Self-Check Questions

1. What is the difference between state and regular variables?
2. Why do we need state in React applications?
3. How do React events differ from traditional DOM events?
4. What is the purpose of the setState function?
5. When should you use state in a component?

---

## 📚 Quick Reference

- [React State Fundamentals](https://react.dev/learn/state-a-components-memory)
- [Event Handling in React](https://react.dev/learn/responding-to-events)
- [useState Hook API](https://react.dev/reference/react/useState)
- [Forms in React](https://react.dev/learn/forms)

**Get ready to dive into state management and event handling in React!**

1. Understanding useState Hook (State in Functional Components)
    The useState Hook allows functional components to store and update state.=

    ```jsx
    import { useState } from "react";

    function Counter() {
    const [count, setCount] = useState(0);
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
    }
    ```

2. Handling Events in React
    React handles user interactions with event handlers like onClick and onChange.

    ```jsx
    function ClickButton() {
      function handleClick() {
        console.log("Button clicked!")
        return <button onClick={handleClick}>Click Me</button>;
      }
    }
    ```

    Example: Handling Input Changes

    ```jsx
    function TextInput() {
      const [text, setText] = useState("");
        function handleChange(event) {
        setText(event.target.value);
      }
        return <input type="text" value={text} onChange={handleChange} />;
    }
    ```

3. List Rendering (.map())
When working with lists, we use .map() to render multiple elements dynamically.
Example: Rendering a List of Items

```jsx
  function UserList() {
    const users = ["Alice", "Bob", "Charlie"];
      return (
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    );
  }
```
