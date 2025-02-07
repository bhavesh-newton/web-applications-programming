# Lecture 15: Advanced JSX and Dynamic Rendering

## 1. Review and Introduction (5 minutes)

- Objective: Quick review of basic JSX and introduction to advanced concepts

- Key Points:
  1. Brief recap of JSX syntax from previous lecture
  2. Overview of today's topics
  3. Why dynamic rendering is important in React applications

## 2. Variables and Expressions in JSX (15 minutes)

- Objective: Master the integration of JavaScript variables and expressions in JSX

- Key Concepts:
  1. Using curly braces `{}` for JavaScript expressions
  2. Types of expressions that can be used:
     - Variables
     - Mathematical operations
     - Function calls
     - Object properties
  
- Live Demo:

  ```jsx
  function DemoComponent() {
    const name = 'John';
    const age = 25;
    const getTitle = () => 'Mr.';

    return (
      <div>
        <h1>Hello, {getTitle()} {name}!</h1>
        <p>Age next year: {age + 1}</p>
      </div>
    );
  }
  ```

- Student Practice:
    - Create a component that uses different types of expressions
    - Experiment with template literals vs JSX interpolation

## 3. Conditional Rendering (20 minutes)

- Objective: Learn different patterns for conditional rendering in React

- Key Approaches:
  1. If statements (outside JSX):

     ```jsx
     if (condition) {
       return <ComponentA />;
     }
     return <ComponentB />;
     ```

  2. Ternary operator:

     ```jsx
     return condition ? <ComponentA /> : <ComponentB />;
     ```

  3. Logical && operator:

     ```jsx
     return condition && <Component />;
     ```

- Live Demo:
    - Build a user profile component with conditional rendering
    - Show different states: loading, error, logged in, logged out

- Practice Activity:
    - Students implement a notification system with different message types
    - Use various conditional rendering patterns

## 4. Loop Rendering (20 minutes)

- Objective: Master rendering lists and collections in React

- Key Concepts:
  1. Using map() for list rendering
  2. Importance of keys
  3. Common pitfalls and best practices

- Code Examples:

  ```jsx
  function ListComponent({ items }) {
    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    );
  }
  ```

- Best Practices:
  1. Always use unique keys
  2. Avoid using index as key when possible
  3. Handle empty lists gracefully
  4. Consider performance for large lists

- Live Demo:
    - Create a todo list component
    - Show proper key usage
    - Demonstrate list filtering and transformation

## 5. Combining Concepts (15 minutes)

- Objective: Practice using all concepts together in a real-world scenario

- Project Exercise:
    - Build a user dashboard that:
    1. Shows user information with interpolation
    2. Conditionally renders different sections
    3. Lists user activities or notifications
    4. Handles loading and error states

- Key Points to Cover:
  1. Component organization
  2. Code reusability
  3. Performance considerations
  4. Error handling

## 6. Common Pitfalls and Best Practices (10 minutes)

- Discussion Topics:
  1. When to use which conditional rendering pattern
  2. Performance implications of different approaches
  3. Common mistakes and how to avoid them
  4. Debugging tips

## 7. Recap and Q&A (5 minutes)

- Review Key Points:
  1. JSX expression syntax and usage
  2. Different conditional rendering patterns
  3. List rendering best practices
  4. Real-world application tips

- Assignment Preview:
    - Create a mini-project using all concepts learned
    - Focus on code organization and best practices

## Resources

- Official React documentation
- JSX specification
- React patterns documentation
- Performance optimization guides
