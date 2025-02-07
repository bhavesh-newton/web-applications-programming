# Checkpoint 3: Rendering and Component Composition

## Multiple Choice Questions

1. Which is the correct way to compose components in React?
   a) `<ParentComponent><ChildComponent /></ParentComponent>`
   b) `ParentComponent.append(ChildComponent)`
   c) `ParentComponent.render(ChildComponent)`
   d) `ParentComponent(ChildComponent)`
   Answer: a

2. What happens when components are nested in React?
   a) The child components are rendered inside their parent component
   b) The components run in parallel
   c) Only the last component is rendered
   d) The components must share state
   Answer: a

3. What happens when you render multiple components at the root level?
   a) All components are rendered side by side
   b) Only the first component is rendered
   c) It causes an error - you need a single root component
   d) Components are rendered in random order
   Answer: c

4. How do you pass data from a parent to a child component?
   a) Using global variables
   b) Using props
   c) Using state only
   d) Using context only
   Answer: b

5. Which statement about React components is true?
   a) A component must return exactly one root element
   b) A component can return multiple root elements without a wrapper
   c) A component must always have state
   d) A component must be a class
   Answer: a

## Coding Questions

1. Create a component hierarchy:

   ```jsx
   // Requirements:
   // - Create an App component that renders a Header and Footer
   // - Header should accept a title prop
   // - Footer should display a copyright notice
   // - Use proper component composition
   ```

2. Implement a nested component structure:

   ```jsx
   // Requirements:
   // - Create a ProductPage component
   // - Should contain ProductList and ProductDetails components
   // - Pass data from ProductPage to its child components
   // - Handle component communication
   ```

3. Fix this component rendering code:

   ```jsx
   // Fix the errors in this code
   function App() {
   return (
      <Header>
         <MainContent>
         <Sidebar>
      <Footer>
   )
   }

   ReactDOM.render(<App>, document.getElementById('root'));
   ```

## Understanding Check

1. Explain the concept of component composition and why it's important in React.
2. What is the significance of the root element in React rendering?
3. How does data flow between parent and child components in React?
4. What are the best practices for organizing components in a React application?
