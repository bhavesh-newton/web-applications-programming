# Checkpoint 2: Promises and Evolution to Async/Await

## Multiple Choice Questions

1. What is the main purpose of Promises in JavaScript?
   a) To make code run faster
   b) To handle asynchronous operations in a more organized way
   c) To prevent errors in code
   d) To replace functions
   Answer: b

2. Which Promise method is used to handle successful operations?
   a) .catch()
   b) .then()
   c) .finally()
   d) .resolve()
   Answer: b

3. What is the main advantage of async/await over Promise chains?
   a) It's faster
   b) It makes asynchronous code look more like synchronous code
   c) It uses less memory
   d) It has better browser support
   Answer: b

4. What happens when you await a Promise?
   a) The code stops forever
   b) The function pauses until the Promise resolves
   c) The Promise is cancelled
   d) Nothing happens
   Answer: b

5. Which is true about the async keyword?
   a) It makes a function return undefined
   b) It makes a function return a Promise
   c) It makes a function run faster
   d) It makes a function synchronous
   Answer: b

## Coding Questions

1. Convert Promise chains to async/await:
```javascript
// Convert this Promise chain to use async/await
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        return processData(data);
    })
    .then(result => {
        saveToDatabase(result);
    })
    .catch(error => {
        console.error('Error:', error);
    });

// Your async/await solution here
```

2. Fix the async/await code:
```javascript
// Fix the errors in this async/await code
async function getUserData() {
    const response = fetch('https://api.example.com/user');
    const data = response.json();
    return {
        name: data.name,
        email: data.email
    };
}
```

3. Practice Question:
```javascript
// Complete this function that needs to perform multiple
// asynchronous operations in sequence
async function processUserData(userId) {
    // 1. Fetch user profile
    // 2. Fetch user's recent orders
    // 3. Update user's status
    // Your code here
}
```

## Understanding Check

1. What are the key benefits of using async/await over Promise chains?
2. How does error propagation work differently between Promises and async/await?
3. When would you still use .then() even with async/await available? 