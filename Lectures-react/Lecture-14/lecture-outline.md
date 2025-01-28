# Lecture 14: Introduction to React

## 1. Introduction to React (10 minutes)

- Objective: Provide a high-level understanding of React’s purpose and origins.

- Key Points:
  1. React is a JavaScript library for building user interfaces, particularly for single-page applications.
  2. Developed and maintained by Facebook, first released in 2013.
  3. Importance: Fast, scalable, and simple way to build interactive UIs.
  4. Real-world examples of React-powered applications (e.g., Instagram, Facebook, Netflix).
- Engagement:
    - Ask students about websites/apps they interact with daily and relate those examples to React.

## 2. Setting up a React Project (10 minutes)

- Objective: Help students quickly set up their first React project using tools that avoid complex installations.

- Key Steps:
  1. Introduction to Tools: Briefly introduce Stackblitz or Newton Box as online environments for React.
  2. Create a React App:
    - Demonstrate how to set up a React project using newton box.
    - Walk through the basic file structure (src, public, node_modules).
  3. First Run:
    - Show the students the default “React App” screen after running the project.
- Practical Activity:
    - Students replicate the steps to set up their environment.

## 3. Creating Functional Components (10 minutes)

- Objective: Teach the basics of functional components as building blocks of React applications.

- Key Concepts:
    - What is a Functional Component?
        - A JavaScript function that returns JSX.
    - Basic Syntax:

        ```jsx
        function Greeting() {
          return <h1>Hello, World!</h1>;
        }
        ```

    - Why Functional Components?
        - Simpler to write, reusable, and easy to manage.

- Live Demo:
    - Create a simple functional component like a Header or Footer.
- Student Practice:
    - Guide students to create their own functional component.

## 4. JSX Syntax: Writing HTML in JavaScript (15-20 minutes)

- Objective: Introduce JSX as the syntax for combining HTML and JavaScript in React.
- Key Points:
    - What is JSX?
        - JavaScript XML, allows embedding HTML directly in JavaScript.
    - Basic Syntax:

        ```jsx
        const element = <h1>Welcome to React!</h1>;
        ```

    - Differences from HTML:
        - `class` → `className`
        - Inline styles → `{ { color: 'blue' } }`
        - Must always return a single parent element.
    - Embedding JavaScript in JSX:
        - Using curly braces `{}` to include JavaScript expressions.

- Live Demo:
    - Modify a functional component to include JSX with dynamic content (e.g., `const name = 'Student';`).
- Practice Activity:
    - Students write a component displaying a personalized greeting.

## 5. Rendering Components in a React Application (10-15 minutes)

- Objective: Show how to display React components in the browser, including nesting components.
- Key Steps:
    - Rendering Basics:
        - Using ReactDOM.render() to render components to the DOM.
    - Nesting Components:
        - Example:

        ```jsx
        function App() {
          return (
            <div>
              <Header />
              <Greeting />
            </div>
          );
        }
        ```

    - Dynamic Updates:
        - How React automatically updates the UI when the state or props change (preview for later topics).

- Live Demo:
    - Create an App component that renders multiple nested components.
- Student Practice:
    - Guide students to nest their previously created components.

## 6. Recap and Q&A (5 minutes)

- Recap: Quickly summarize key topics covered:
  1. What is React and why is it useful?
  2. Setting up a React project.
  3. Functional components and JSX basics.
  4. Rendering components in a React application.

- Takeaway Task:
    - Students should experiment with modifying their components and using JSX to create simple layouts.

## 7. Quiz (10 minutes)

Example quiz questions:

- What is the purpose of a functional component in React?
- How do you create a new functional component in React?
- What is JSX and how is it different from HTML?
- How do you render a component in React?
- What is the purpose of the `return` statement in a functional component?
- What is the purpose of the `className` attribute in JSX?
- How do you embed JavaScript expressions in JSX?
- What is the purpose of the `div` element in React?
- How do you nest components in React?
- What is the purpose of the `props` object in React?

## Resources

- Official React documentation: react.dev
- Online playgrounds: Stackblitz, Newton Box
