# Lecture 16: State Management and Event Handling in React

## 1. Review and Introduction (5 minutes)

- Objective: Review JSX concepts and introduce React state management and event handling

- Key Points:
  1. Brief recap of JSX and component concepts
  2. Overview of state management importance
  3. Introduction to event handling in React

## 2. Understanding State with useState (20 minutes)

- Objective: Master the fundamentals of state management using the useState hook

- Key Concepts:
  1. What is state?
     - Local component memory
     - Triggers re-renders when updated
  2. useState Hook syntax and usage
     - Initialization
     - Destructuring state and setter
     - State updates

- Live Demo:

  ```jsx
  function Counter() {
    const [count, setCount] = useState(0);
    
    return (
      <div>
        <p>Current count: {count}</p>
        <button onClick={() => setCount(count + 1)}>
          Increment
        </button>
      </div>
    );
  }
  ```

- Student Practice:
    - Create a simple counter component
    - Experiment with different state types (numbers, strings, booleans)

## 3. Event Handling in React (20 minutes)

- Objective: Learn how to handle user interactions effectively in React

- Key Concepts:
  1. React event naming (camelCase)
  2. Event handler functions
  3. Event object and its properties
  4. Common events: onClick, onChange, onSubmit

- Live Demo:

  ```jsx
  function FormDemo() {
    const [inputValue, setInputValue] = useState('');
    
    const handleChange = (event) => {
      setInputValue(event.target.value);
    };
    
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Submitted:', inputValue);
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

- Practice Activity:
    - Build a form with multiple input types
    - Handle different event types
    - Implement form validation

## 4. State and Events Together (20 minutes)

- Objective: Combine state management and event handling in practical applications

- Key Concepts:
  1. State updates in event handlers
  2. Conditional rendering based on state
  3. Form state management
  4. Best practices for state updates

- Live Demo:

  ```jsx
  function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    
    const handleAdd = () => {
      if (input.trim()) {
        setTodos([...todos, { text: input, id: Date.now() }]);
        setInput('');
      }
    };
    
    return (
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a todo"
        />
        <button onClick={handleAdd}>Add Todo</button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      </div>
    );
  }
  ```

- Practice Exercise:
    - Create a todo list with add/remove functionality
    - Implement toggle completion status
    - Add error handling and validation

## 5. Common Patterns and Best Practices (10 minutes)

- Discussion Topics:
  1. State organization strategies
  2. Event handler naming conventions
  3. Performance considerations
  4. Error handling patterns

- Key Points:
  1. Keep state minimal and flat
  2. Use appropriate event handler names
  3. Avoid unnecessary re-renders
  4. Implement proper error boundaries

## 6. Recap and Q&A (5 minutes)

- Review Key Points:
  1. State management fundamentals
  2. Event handling patterns
  3. Combining state and events
  4. Best practices and patterns

- Assignment Preview:
    - Build a mini-application using state and events
    - Focus on code organization and best practices

## Resources

- [React State Documentation](https://react.dev/learn/state-a-components-memory)
- [React Events Documentation](https://react.dev/learn/responding-to-events)
- [React Forms Guide](https://react.dev/learn/forms)
- [React Performance Optimization](https://react.dev/learn/render-and-commit)
