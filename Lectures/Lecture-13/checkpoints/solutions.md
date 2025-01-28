# Checkpoint Solutions

## Checkpoint 1: Async Fundamentals and Basic Concepts

### Multiple Choice Answers
1. c) It prevents code from blocking the main thread
2. b) A complex loop processing large amounts of data
3. c) API calls
4. b) They block the user interface
5. c) Loading user data from a server

### Coding Solutions

1. Identify blocking vs non-blocking code:
```javascript
// Solution with explanations:

function operation1() {
    for(let i = 0; i < 1000000000; i++) {
        // some computation
    }
}
// BLOCKING: This is a CPU-intensive operation that runs synchronously,
// blocking the main thread until the loop completes

function operation2() {
    setTimeout(() => {
        console.log('Done');
    }, 1000);
}
// NON-BLOCKING: setTimeout is asynchronous, it schedules the callback
// to run later and immediately returns

function operation3() {
    return fetch('https://api.example.com/data');
}
// NON-BLOCKING: fetch is asynchronous, it returns a Promise
// and doesn't block while waiting for the network response
```

2. Convert blocking code to non-blocking:
```javascript
// Solution:
function processLargeArray(array) {
    // Using setTimeout to chunk the processing
    let i = 0;
    
    function processChunk() {
        const chunk = array.slice(i, i + 100); // Process 100 items at a time
        chunk.forEach(item => {
            heavyComputation(item);
        });
        
        i += 100;
        
        if (i < array.length) {
            // Schedule next chunk
            setTimeout(processChunk, 0);
        }
    }
    
    processChunk();
}
```

3. Practice Question:
```javascript
function demonstrateBlockingVsNonBlocking() {
    console.log('Start');
    
    // Blocking operation
    for(let i = 0; i < 1000000; i++) {
        Math.sqrt(i);
    }
    console.log('After blocking operation');
    
    // Non-blocking operation
    setTimeout(() => {
        console.log('After non-blocking operation');
    }, 0);
    
    console.log('End');
}

// Output will be:
// Start
// After blocking operation
// End
// After non-blocking operation
```

### Understanding Check Answers

1. Blocking vs Non-blocking operations:
   - Blocking operations execute synchronously and prevent other code from running until they complete
   - Non-blocking operations allow other code to execute while they're being processed
   - Blocking operations occupy the main thread, while non-blocking operations are handled asynchronously

2. Importance of async programming in web applications:
   - Prevents UI freezing during long operations
   - Enables better user experience by maintaining responsiveness
   - Allows handling multiple operations simultaneously
   - Essential for operations like API calls, file operations, and database queries

3. Identifying blocking vs non-blocking operations:
   - CPU-intensive calculations are typically blocking
   - I/O operations (network, file system) are typically non-blocking
   - Built-in APIs like setTimeout, fetch, and promises are non-blocking
   - Long loops and complex computations are blocking

## Checkpoint 2: Promises and Evolution to Async/Await

### Multiple Choice Answers
1. b) To handle asynchronous operations in a more organized way
2. b) .then()
3. b) It makes asynchronous code look more like synchronous code
4. b) The function pauses until the Promise resolves
5. b) It makes a function return a Promise

### Coding Solutions

1. Convert Promise chains to async/await:
```javascript
// Solution:
async function processAndSaveData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
        const processed = await processData(data);
        await saveToDatabase(processed);
    } catch (error) {
        console.error('Error:', error);
    }
}
```

2. Fix the async/await code:
```javascript
// Solution:
async function getUserData() {
    try {
        const response = await fetch('https://api.example.com/user');
        const data = await response.json();
        return {
            name: data.name,
            email: data.email
        };
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
}
```

3. Practice Question:
```javascript
async function processUserData(userId) {
    try {
        // 1. Fetch user profile
        const profile = await fetch(`/api/users/${userId}`);
        const userData = await profile.json();
        
        // 2. Fetch user's recent orders
        const orders = await fetch(`/api/users/${userId}/orders`);
        const orderData = await orders.json();
        
        // 3. Update user's status
        const status = {
            lastActive: new Date(),
            ordersCount: orderData.length
        };
        await fetch(`/api/users/${userId}/status`, {
            method: 'PUT',
            body: JSON.stringify(status)
        });
        
        return {
            profile: userData,
            orders: orderData,
            status
        };
    } catch (error) {
        console.error('Error processing user data:', error);
        throw error;
    }
}
```

### Understanding Check Answers

1. Benefits of async/await over Promise chains:
   - More readable and maintainable code
   - Better error handling with try/catch
   - Easier debugging with clear stack traces
   - More intuitive control flow

2. Error propagation differences:
   - Promise chains use .catch() for error handling
   - Async/await uses try/catch blocks
   - Async/await makes error handling more localized
   - Both approaches ultimately work with Promise rejection

3. When to still use .then():
   - When working with existing Promise-based APIs
   - For simple transformations
   - When you don't need complex error handling
   - In situations where you want to chain multiple operations without variables

## Checkpoint 3: Error Handling in Async/Await

### Multiple Choice Answers
1. b) Using try/catch blocks
2. b) The Promise is rejected with the error
3. c) When the Promise is rejected
4. d) All code within the try block
5. c) Log them and handle appropriately

### Coding Solutions

1. Implement proper error handling:
```javascript
async function fetchUserData(userId) {
    try {
        const response = await fetch(`/api/users/${userId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        try {
            await saveToDatabase(data);
        } catch (dbError) {
            console.error('Database error:', dbError);
            // Depending on requirements, might want to retry or handle differently
            throw new Error('Failed to save user data to database');
        }
        
        return data;
    } catch (error) {
        console.error('Error in fetchUserData:', error);
        throw error; // Re-throw to let caller handle it
    }
}
```

2. Fix the error handling:
```javascript
async function processData(data) {
    try {
        const result = await transform(data);
        return result;
    } catch (error) {
        console.error('Error transforming data:', error);
        // Log specific error details
        console.error('Error details:', {
            message: error.message,
            data: data,
            timestamp: new Date()
        });
        // Depending on the error, might want to return a default value
        // or throw a more specific error
        throw new Error(`Failed to process data: ${error.message}`);
    }
}
```

3. Practice Question:
```javascript
async function validateAndSaveUser(userData) {
    try {
        // 1. Validate user data
        const validationResult = await validateUser(userData);
        if (!validationResult.isValid) {
            throw new Error(`Validation failed: ${validationResult.errors.join(', ')}`);
        }

        // 2. Save to database
        let savedUser;
        try {
            savedUser = await saveToDatabase(userData);
        } catch (dbError) {
            console.error('Database error:', dbError);
            throw new Error('Failed to save user to database');
        }

        // 3. Send confirmation email
        try {
            await sendConfirmationEmail(savedUser.email);
        } catch (emailError) {
            console.warn('Failed to send confirmation email:', emailError);
            // Don't throw here - email sending is non-critical
            // But might want to queue for retry
        }

        return savedUser;
    } catch (error) {
        console.error('Error in validateAndSaveUser:', error);
        throw error;
    }
}

function validateUser(userData) {
    // Implementation of user validation
    return Promise.resolve({
        isValid: true,
        errors: []
    });
}

function saveToDatabase(userData) {
    // Implementation of database save
    return Promise.resolve({ ...userData, id: 'generated-id' });
}

function sendConfirmationEmail(email) {
    // Implementation of email sending
    return Promise.resolve();
}
```

### Understanding Check Answers

1. Best practices for error handling in async/await:
   - Use try/catch blocks around await statements
   - Log errors with meaningful context
   - Consider different types of errors and handle appropriately
   - Decide whether to recover, retry, or propagate errors
   - Include relevant error details in error messages

2. Deciding whether to handle or propagate errors:
   - Handle errors when you can meaningfully recover
   - Propagate errors when the caller needs to make decisions
   - Consider the criticality of the operation
   - Think about the user experience
   - Look at the broader application context

3. Information to include when logging errors:
   - Error message and stack trace
   - Relevant input data (sanitized)
   - Timestamp
   - Operation context
   - User/request context if applicable
   - System state if relevant 