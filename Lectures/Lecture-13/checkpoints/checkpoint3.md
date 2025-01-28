# Checkpoint 3: Error Handling in Async/Await

## Multiple Choice Questions

1. What is the recommended way to handle errors in async/await code?
   a) Using .catch()
   b) Using try/catch blocks
   c) Using if/else statements
   d) Using error events
   Answer: b

2. What happens if an error occurs in an async function without error handling?
   a) The error is silently ignored
   b) The Promise is rejected with the error
   c) The program crashes
   d) The function returns null
   Answer: b

3. In a try/catch block with await, when is the catch block executed?
   a) When the Promise is pending
   b) When the Promise is fulfilled
   c) When the Promise is rejected
   d) When the function ends
   Answer: c

4. What is the scope of a try/catch block in an async function?
   a) Only the first await statement
   b) All code after the try block
   c) Only synchronous code
   d) All code within the try block
   Answer: d

5. What should you do with errors caught in async functions?
   a) Always ignore them
   b) Always rethrow them
   c) Log them and handle appropriately
   d) Return undefined
   Answer: c

## Coding Questions

1. Implement proper error handling:
```javascript
// Add appropriate error handling to this async function
async function fetchUserData(userId) {
    const response = await fetch(`/api/users/${userId}`);
    const data = await response.json();
    await saveToDatabase(data);
    return data;
}

// Your solution with error handling here
```

2. Fix the error handling:
```javascript
// Fix the error handling in this code
async function processData(data) {
    try {
        const result = await transform(data);
        return result;
    } catch {
        console.log('An error occurred');
    }
}
```

3. Practice Question:
```javascript
// Implement a function that demonstrates proper error handling
// for multiple async operations
async function validateAndSaveUser(userData) {
    // Should:
    // 1. Validate user data
    // 2. Save to database
    // 3. Send confirmation email
    // Handle errors appropriately at each step
    // Your code here
}
```

## Understanding Check

1. What are the best practices for handling errors in async/await code?
2. How do you decide whether to handle an error or propagate it?
3. What information should you include when logging errors in async functions? 