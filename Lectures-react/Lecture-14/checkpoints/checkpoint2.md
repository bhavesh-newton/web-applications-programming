# Checkpoint 2: Components and JSX

## Multiple Choice Questions

1. Which syntax is correct for a functional component in React?
   a) `function MyComponent { return <div>Hello</div> }`
   b) `function MyComponent() { return <div>Hello</div> }`
   c) `const MyComponent = function() => <div>Hello</div>`
   d) `class MyComponent { render() { return <div>Hello</div> } }`
   Answer: b

2. In JSX, how do you write a class attribute?
   a) `class="container"`
   b) `className="container"`
   c) `class-name="container"`
   d) `classname="container"`
   Answer: b

3. How do JSX attributes differ from HTML attributes?
   a) They use camelCase instead of lowercase
   b) They only accept string values
   c) They require quotes for all values
   d) They are exactly the same
   Answer: a

4. Which is the correct way to style elements in React?
   a) `style="color: blue"`
   b) `style={color: blue}`
   c) `style={{color: 'blue'}}`
   d) `styles={color: 'blue'}`
   Answer: c

5. What is the correct way to render multiple elements in a React component?
   a) Return them side by side
   b) Wrap them in a parent element or fragment
   c) Use an array
   d) Return multiple times
   Answer: b

## Coding Questions

1. Create a functional component that:

   ```jsx
   // Requirements:
   // - Named "UserCard"
   // - Accepts props for name, email, and role
   // - Displays the information in a styled card format
   // - Uses proper JSX syntax
   ```

2. Fix and complete this JSX code:

   ```jsx
   function ProductList() {
   const products = ['Apple', 'Banana', 'Orange'];
   return (
      // Add code to map through products and display in a list
      // Each item should have a unique key
   );
   }
   ```

3. Create a component that:

   ```jsx
   // Requirements:
   // - Uses conditional rendering
   // - Shows different content based on a isLoggedIn prop
   // - Uses proper JSX syntax for inline styles
   // - Handles a click event
   ```

## Understanding Check

1. Explain the difference between props and state in React components.
2. Why do we need to use keys when rendering lists in React?
3. What are the advantages of using functional components over class components?
4. How does JSX differ from regular HTML?
