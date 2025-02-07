# JavaScript for Python Programmers: Asynchronous Programming

## 🎯 Learning Objectives

By the end of this pre-read, you will:

- Understand asynchronous programming concepts
- Learn how to work with callbacks
- Master JavaScript's timing functions
- Compare Python and JavaScript async approaches

---

## 1. Understanding Asynchronous Programming

### ⚡ Why Asynchronous Programming?

JavaScript is single-threaded, but it can handle multiple operations efficiently through:

- Non-blocking operations
- Event-driven programming
- Callback mechanisms
- Timing functions

### 🔄 Synchronous vs Asynchronous

#### Synchronous Code (Blocking)

```javascript
console.log("First");
console.log("Second");
console.log("Third");

// Output:
// First
// Second
// Third
```

#### Asynchronous Code (Non-blocking)

```javascript
console.log("First");
setTimeout(() => {
    console.log("Second");
}, 1000);
console.log("Third");

// Output:
// First
// Third
// Second (after 1 second)
```

### 🌍 Python vs JavaScript Async

| Concept | Python | JavaScript |
|---------|--------|------------|
| Basic async | `async/await` | Callbacks, Promises, `async/await` |
| Sleep/Delay | `await asyncio.sleep(1)` | `setTimeout(() => {}, 1000)` |
| Event Loop | `asyncio` event loop | Browser/Node.js event loop |
| Concurrency | Multiple threads/processes | Single thread with events |

---

## 2. Callbacks in JavaScript

### 🎯 What are Callbacks?

Callbacks are functions passed as arguments to other functions, to be executed later:

```javascript
function processData(data, callback) {
    // Simulate processing time
    setTimeout(() => {
        const result = data.toUpperCase();
        callback(result);
    }, 1000);
}

processData("hello", result => {
    console.log(result);  // HELLO
});
```

#### Common Use Cases

1. Event handling
2. Asynchronous operations
3. Array methods (map, filter, reduce)
4. Timer functions

- **More Info**: [MDN - Callbacks](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)

---

## 3. Timing Functions

### ⏰ setTimeout

Executes a function after a specified delay:

```javascript
// Basic usage
setTimeout(() => {
    console.log("Delayed message");
}, 2000);  // 2000ms = 2 seconds

// With parameters
setTimeout((name) => {
    console.log(`Hello, ${name}!`);
}, 1000, "Alice");

// Clearing timeout
const timeoutId = setTimeout(() => {
    console.log("This never runs");
}, 1000);
clearTimeout(timeoutId);
```

#### Common Use Cases

1. Delayed notifications
2. Debouncing user input
3. Animation timing
4. Loading states

- **More Info**: [MDN - setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)

### 🔄 setInterval

Executes a function repeatedly at specified intervals:

```javascript
// Basic usage
const intervalId = setInterval(() => {
    console.log("Runs every second");
}, 1000);

// Stopping the interval
setTimeout(() => {
    clearInterval(intervalId);
}, 5000);  // Stops after 5 seconds

// Real-time clock example
setInterval(() => {
    const now = new Date();
    console.log(now.toLocaleTimeString());
}, 1000);
```

#### Common Use Cases

1. Real-time updates
2. Polling data
3. Game loops
4. Animations

- **More Info**: [MDN - setInterval](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)

---

## 4. Common Patterns and Best Practices

### 🎯 Error Handling

```javascript
function fetchData(callback) {
    setTimeout(() => {
        try {
            // Simulate error
            throw new Error("Network error");
        } catch (error) {
            callback(error, null);
            return;
        }
        callback(null, "Data");
    }, 1000);
}

fetchData((error, data) => {
    if (error) {
        console.error("Error:", error.message);
        return;
    }
    console.log("Data:", data);
});
```

### 🚀 Performance Considerations

1. Don't block the main thread
2. Use appropriate delay times
3. Clear intervals when not needed
4. Handle errors properly

---

## 💡 Pre-lecture Exercises

### Basic Exercises

1. Create a function that logs a message after a specified delay
2. Implement a simple countdown timer
3. Create a function that executes a callback after n seconds
4. Build a progress indicator using setInterval

### Intermediate Exercises

1. **Debounce Function**:
   - Create a debounce utility
   - Test with rapid input events
   - Add immediate execution option

2. **Polling System**:
   - Implement periodic data checking
   - Add error handling
   - Include retry mechanism

3. **Animation Controller**:
   - Create smooth animations using setTimeout
   - Add pause/resume functionality
   - Implement sequence control

4. **Task Queue**:
   - Implement delayed task execution
   - Add priority handling
   - Include task cancellation

### Advanced Exercises

1. **State Machine**:
   - Create async state transitions
   - Handle multiple states
   - Implement state history

2. **Event System**:
   - Build an event emitter
   - Add event debouncing
   - Implement event queuing

Try these exercises before the lecture to get hands-on experience with async programming.

---

## 📚 Additional Resources

- [MDN - Asynchronous Programming](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)
- [JavaScript.info - Scheduling](https://javascript.info/settimeout-setinterval)
- [MDN - Event Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
