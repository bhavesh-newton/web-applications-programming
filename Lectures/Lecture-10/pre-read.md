# JavaScript Promises: A Modern Approach to Asynchronous Programming

## 🎯 Learning Objectives

By the end of this pre-read, you will:

- Understand what Promises are and why we use them
- Learn how to create and handle Promises
- Master Promise resolution and rejection
- Learn basic Promise usage patterns

---

## 1. Understanding Promises

### ⚡ What is a Promise?

A Promise is a JavaScript object representing the eventual completion (or failure) of an asynchronous operation. Think of it as a "promise" to provide a result at some point in the future.

### 🔄 Promise States

A Promise can be in one of three states:

1. **Pending**: Initial state, neither fulfilled nor rejected
2. **Fulfilled**: Operation completed successfully
3. **Rejected**: Operation failed

```javascript
// Basic Promise example
const myPromise = new Promise((resolve, reject) => {
  // Async operation
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve("Operation successful!");
    } else {
      reject(new Error("Operation failed!"));
    }
  }, 1000);
});

// Handling the Promise
myPromise
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

---

## 2. Creating Promises

### 🎯 The Promise Constructor

Creating a new Promise using the constructor:

```javascript
function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

// Using the delay function
delay(2000).then(() => {
  console.log("2 seconds have passed!");
});
```

### 🔨 Promise Resolution

Using the `resolve` function to fulfill a Promise:

```javascript
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    // Simulating API call
    setTimeout(() => {
      const user = {
        id: id,
        name: "John Doe",
        email: "john@example.com"
      };
      resolve(user);
    }, 1000);
  });
}
```

### ⚠️ Promise Rejection

Using the `reject` function to handle errors:

```javascript
function validateAge(age) {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve("Age verified successfully");
    } else {
      reject(new Error("Must be 18 or older"));
    }
  });
}
```

---

## 3. Working with Promises

### 🔗 Basic Promise Usage

Handling Promise results and errors:

```javascript
// Basic usage with then/catch
fetchUser(1)
  .then(user => {
    console.log("User data:", user);
  })
  .catch(error => {
    console.error("Error:", error);
  });

// Using Promise.all for multiple operations
const promises = [
  fetchUser(1),
  fetchUser(2)
];

Promise.all(promises)
  .then(users => {
    console.log("All users:", users);
  })
  .catch(error => {
    console.error("Failed to fetch users:", error);
  });
```

Note: We'll cover more advanced Promise patterns like chaining in future lectures.

---

## 4. Error Handling

### 🚨 Using catch

Proper error handling in Promises:

```javascript
function processData() {
  return fetchData()
    .then(data => validateData(data))
    .catch(error => {
      console.error("Processing failed:", error);
      throw error;
    });
}
```

### 🔄 Recovery Strategies

Basic error recovery:

```javascript
fetchData()
  .catch(error => {
    console.log("Using default data");
    return getDefaultData();
  })
  .then(data => {
    // Process data (either fetched or default)
  });
```

---

## 📚 Pre-lecture Practice

### Basic Exercises

1. Create a Promise that resolves after a specified delay:

   ```javascript
   function wait(ms) {
     // Implement this function
   }
   ```

2. Create a Promise that randomly resolves or rejects:

   ```javascript
   function randomPromise() {
     // Implement this function
   }
   ```

### Advanced Exercises

1. **Promise-based Timer**:

   ```javascript
   function createTimer(duration) {
     // Implement timer with Promise
   }
   ```

2. **Basic Resource Loader**:

   ```javascript
   function loadResource(url) {
     // Implement resource loading
   }
   ```

Try these exercises before the lecture to get hands-on experience with Promises.

---

## 🔗 Additional Resources

- [MDN - Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JavaScript.info - Promise Basics](https://javascript.info/promise-basics)
- [MDN - Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

---

## 🎯 Key Points to Remember

1. Promises represent future values or errors
2. Promises have three states: pending, fulfilled, rejected
3. Use `.then()` for success and `.catch()` for errors
4. Always handle potential errors in Promises
5. More advanced patterns will be covered in future lectures
