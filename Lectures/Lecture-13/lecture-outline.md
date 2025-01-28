# Lecture 13: JavaScript Asynchronous Programming

## 1. Introduction to Asynchronous Programming (15 minutes)

- Objective: Understand why we need asynchronous programming and its fundamental concepts.

- Key Points:
  1. JavaScript's single-threaded nature (5 minutes)
  2. Blocking vs Non-blocking operations (5 minutes)
  3. Common use cases for async operations (5 minutes)
  <!-- 4. Event Loop and Call Stack //- lets not talk about this right now -->
- Engagement:
    - Demonstrate blocking behavior with synchronous code
    - Show real-world examples of async operations

## 2. Evolution of Async Patterns (13 minutes)

- Objective: Understand the history and evolution of handling async operations in JavaScript.

- Key Steps:
    1. Promises: (3 minutes)
        - Revision of Promise syntax (1 minute)
        - Revision of Promise states and chain operations (2 minutes)
    2. Modern async/await: (5 minutes)
        - Cleaner syntax for handling Promises (3 minutes)
        - Benefits over previous approaches (2 minutes)

- Practical Activity: (5 minutes)
    - Convert Promise chains to async/await 

## 3. Understanding async/await Keywords (22 minutes)

- Objective: Master the usage of async and await keywords.

- Key Concepts:
    - The `async` keyword: (4 minutes)
        - What it does to a function?
        - Return values always wrapped in Promises
    - The `await` keyword: (3+2 minutes)
        - Where it can be used?
        - How it unwraps Promises?
    - Basic Syntax: (3 minutes)

        ```javascript
        async function example() {
          const result = await someAsyncOperation();
          return result;
        }
        ```

- Live Demo: (3 minutes)
    - Create async functions with different return values
    - Show await behavior with Promises

- Student Practice: (7 minutes)
    - Write basic async functions (2 minutes)
    - Use await with provided Promise-based APIs (5 minutes)

## 4. Error Handling in Async Code (12 minutes)

- Objective: Learn proper error handling techniques in async/await code.
- Key Points: (7 minutes)
    - try/catch blocks: (5 minutes)
        - Proper syntax and usage (3 minutes)
        - Scope of error catching (2 minutes)
    - Best practices: (2 minutes)

        ```javascript
        async function safeOperation() {
          try {
            const result = await riskyOperation();
            return result;
          } catch (error) {
            console.error('Error:', error);
            throw new Error('Operation failed');
          }
        }
        ```

- Live Demo: (5 minutes)
    - Different error handling scenarios
    - Common pitfalls and solutions

<!-- - Practice Activity: (7 minutes)
    - Implement error handling in async functions
    - Debug broken async code -->

## 6. Recap and Q&A (5 minutes)

- Recap: Key topics covered:
  1. Async programming fundamentals
  2. async/await syntax and usage
  3. Error handling patterns

- Takeaway Task:
    - Build a small application using async/await
    - Practice error handling and parallel operations

## 7. Quiz (10 minutes)

Example quiz questions:

1. What is the purpose of the async keyword?
   a) To make functions run faster
   b) To make a function return a Promise
   c) To prevent errors in code
   d) To replace regular functions
   Answer: b
   Explanation: The async keyword automatically wraps a function's return value in a Promise. It doesn't affect execution speed (a), isn't specifically for error handling (c), and supplements rather than replaces regular functions (d).

2. How does await affect Promise resolution?
   a) It makes Promises resolve immediately
   b) It pauses execution until the Promise resolves
   c) It cancels the Promise
   d) It has no effect on Promise resolution
   Answer: b
   Explanation: await pauses the execution of an async function until the Promise resolves. It doesn't speed up resolution (a), never cancels Promises (c), and definitely affects Promise handling (d).

3. When should you use try/catch with async functions?
   a) Always, for every async function
   b) Only when errors are expected
   c) When working with operations that could fail
   d) Never with async functions
   Answer: c
   Explanation: try/catch should be used when operations might fail (like network requests or file operations). Using it always (a) is unnecessary overhead, waiting for "expected" errors (b) is too reactive, and never using it (d) leaves code vulnerable.

4. What's the difference between Promise.all and Promise.race?
   a) Promise.all waits for all Promises to resolve, Promise.race waits for the first one
   b) Promise.all is faster than Promise.race
   c) Promise.race can only handle two Promises
   d) There is no difference
   Answer: a
   Explanation: Promise.all waits for all Promises to complete, while Promise.race resolves when the first Promise completes. Speed (b) depends on the operations, Promise.race can handle any number of Promises (c), and they serve different purposes (d).

5. What happens when an error occurs in an async function?
   a) The function continues executing
   b) The Promise is rejected with the error
   c) The error is ignored
   d) The function returns null
   Answer: b
   Explanation: When an error occurs, the Promise is rejected and execution stops at that point. The function doesn't continue (a), errors aren't ignored (c), and null isn't automatically returned (d).

6. How do you convert a Promise chain to async/await?
   a) Replace .then() with await and wrap in async function
   b) Simply remove all .then() calls
   c) Add async keyword to all functions
   d) Convert Promises to callbacks
   Answer: a
   Explanation: Converting requires both replacing .then() with await AND wrapping in an async function. Just removing .then() (b) causes errors, adding async everywhere (c) is unnecessary, and converting to callbacks (d) is backwards.

7. What are the benefits of async/await over Promises?
   a) Better performance
   b) More readable, synchronous-looking code
   c) No error handling needed
   d) Smaller bundle size
   Answer: b
   Explanation: async/await provides cleaner, more readable code that looks synchronous. It doesn't improve performance (a), still requires error handling (c), and doesn't affect bundle size (d).

8. How does the Event Loop relate to async operations?
   a) It executes async code immediately
   b) It manages the execution of async callbacks
   c) It blocks during async operations
   d) It has no relation to async code
   Answer: b
   Explanation: The Event Loop manages when async callbacks are executed after their operations complete. It doesn't execute async code immediately (a), doesn't block (c), and is fundamental to async JavaScript (d).

9. When should you use sequential vs parallel async operations?
   a) Always use sequential for consistency
   b) Always use parallel for performance
   c) Sequential when operations depend on each other, parallel when independent
   d) It doesn't matter which you use
   Answer: c
   Explanation: Use sequential when operations depend on previous results, parallel when they're independent. Always using sequential (a) hurts performance, always using parallel (b) can cause errors with dependent operations, and the choice definitely matters (d).

10. How do you handle multiple async operations in parallel?
    a) Use multiple try/catch blocks
    b) Use Promise.all() or Promise.allSettled()
    c) Run them one after another
    d) Use setTimeout
    Answer: b
    Explanation: Promise.all() and Promise.allSettled() are designed for parallel execution. Multiple try/catch blocks (a) don't ensure parallelism, running operations sequentially (c) isn't parallel, and setTimeout (d) doesn't handle Promise coordination.

## Resources

- MDN Web Docs: [Async functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- JavaScript.info: [Async/await](https://javascript.info/async-await)
