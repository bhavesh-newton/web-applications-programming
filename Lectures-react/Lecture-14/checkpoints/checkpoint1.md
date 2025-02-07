# Checkpoint 1: Introduction to React and Setup

## Multiple Choice Questions

1. What is React primarily used for?
   a) Database management
   b) Building user interfaces
   c) Server-side scripting
   d) Network protocols
   Answer: b

2. React was developed and is maintained by:
   a) Google
   b) Microsoft
   c) Facebook (Meta)
   d) Amazon
   Answer: c

3. What is the minimum version of Node.js required to work with modern React?
   a) Node.js 10.x
   b) Node.js 12.x
   c) Node.js 14.x
   d) Node.js 16.x
   Answer: c

4. Which of these is NOT a key feature of React?
   a) Virtual DOM
   b) Component-based architecture
   c) Two-way data binding by default
   d) Declarative UI
   Answer: c

5. What is the purpose of the return statement in a React functional component?
   a) To end the function execution
   b) To specify the JSX that should be rendered
   c) To return data to an API
   d) To create a new component instance
   Answer: b

## Coding Questions

1. Create a new React project using Create React App with the following requirements:
   - Project name should be "my-first-react-app"
   - Clean up the default App.js to show just a simple "Hello World"
   - Ensure the app runs without errors

2. Modify the default React application to:
   - Change the title in public/index.html
   - Remove unused files (logo, etc.)
   - Add a custom favicon

3. Practice Question:

   ```jsx
   // Fix the errors in this React component
   function App {
   return
      <h1>Hello World</h1>
      <p>Welcome to React</p>
   }
   ```

   Solution:

   ```jsx
   function App() { // missing function parameter paranthesis
      return ( // missing return statement paranthesis
         <div> // missing wrapping div
            <h1>Hello World</h1> 
            <p>Welcome to React</p> 
         </div> 
      ); 
   }
   ```

## Understanding Check

1. What is the purpose of the public folder in a React application?
2. Why do we need Node.js to develop React applications?
