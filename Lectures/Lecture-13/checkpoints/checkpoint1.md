# Checkpoint 1: Async Fundamentals and Basic Concepts

## Multiple Choice Questions

1. What is the main characteristic of asynchronous programming in JavaScript?
   a) It makes code run faster
   b) It allows multiple operations to run simultaneously
   c) It prevents code from blocking the main thread
   d) It reduces memory usage
   Answer: c

2. Which operation would be considered "blocking" in JavaScript?
   a) A network request with a callback
   b) A complex loop processing large amounts of data
   c) Setting a timeout
   d) An event listener
   Answer: b

3. In JavaScript, which of these operations is typically asynchronous?
   a) Array sorting
   b) String manipulation
   c) API calls
   d) Math calculations
   Answer: c

4. What is the main problem with synchronous operations that take a long time?
   a) They use more memory
   b) They block the user interface
   c) They are more complex to write
   d) They use more CPU
   Answer: b

5. Which is a real-world example where asynchronous programming is necessary?
   a) Adding two numbers
   b) Concatenating strings
   c) Loading user data from a server
   d) Calculating a total in an array
   Answer: c

## Coding Questions

1. Identify blocking vs non-blocking code:
```javascript
// Which of these operations is blocking? Why?
// Add comments to explain your reasoning

function operation1() {
    for(let i = 0; i < 1000000000; i++) {
        // some computation
    }
}

function operation2() {
    setTimeout(() => {
        console.log('Done');
    }, 1000);
}

function operation3() {
    return fetch('https://api.example.com/data');
}
```

2. Convert blocking code to non-blocking:
```javascript
// Convert this blocking code to be non-blocking
function processLargeArray(array) {
    for(let i = 0; i < array.length; i++) {
        // heavy processing on each item
        heavyComputation(array[i]);
    }
}

// Your solution here
```

3. Practice Question:
```javascript
// Write a function that demonstrates the difference between
// blocking and non-blocking operations
function demonstrateBlockingVsNonBlocking() {
    // Your code here
    // Should include both types of operations
    // and show their effects
}
```

## Understanding Check

1. Explain the difference between blocking and non-blocking operations in JavaScript.
2. Why is asynchronous programming important for web applications?
3. How can you identify if an operation will be blocking or non-blocking?
