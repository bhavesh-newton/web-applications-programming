// Practice exercises for Asynchronous Programming

// Exercise 1: Delayed Message
// TODO: Create a function that logs a message after a specified delay
function delayedMessage(message, delay) {
    // Your code here
}

// Exercise 2: Countdown Timer
// TODO: Implement a countdown timer that counts from n to 0
function countdown(fromNumber) {
    // Your code here
}

// Exercise 3: Delayed Callback
// TODO: Create a function that executes a callback after n seconds
function executeAfterDelay(callback, delay) {
    // Your code here
}

// Exercise 4: Progress Indicator
// TODO: Create a progress indicator that updates every second until 100%
function showProgress(totalSeconds) {
    // Your code here
}

// Exercise 5: Debounce Function
// TODO: Implement a debounce utility
function debounce(func, delay) {
    // Your code here
}

// Exercise 6: Polling System
// TODO: Implement a function that checks for updates every n seconds
function pollForUpdates(checkFunction, interval) {
    // Your code here
}

// Exercise 7: Animation Controller
// TODO: Create a simple animation controller with pause/resume
function createAnimationController(animationFunc, interval) {
    // Your code here
}

// Exercise 8: Task Queue
// TODO: Implement a delayed task execution system
function createTaskQueue() {
    // Your code here
    return {
        addTask: function(task, delay) {
            // Add task implementation
        },
        cancelTask: function(taskId) {
            // Cancel task implementation
        }
    };
}

// Test cases
console.log("Exercise 1: Delayed Message");
delayedMessage("Hello, World!", 2000);  // Should print after 2 seconds

console.log("Exercise 2: Countdown Timer");
countdown(5);  // Should count down from 5 to 0

console.log("Exercise 3: Delayed Callback");
executeAfterDelay(() => {
    console.log("Callback executed!");
}, 1000);

console.log("Exercise 4: Progress Indicator");
showProgress(5);  // Should show progress for 5 seconds

console.log("Exercise 5: Debounce Function");
const debouncedFn = debounce(() => {
    console.log("Debounced function called");
}, 500);
debouncedFn();  // Should execute after 500ms of inactivity

console.log("Exercise 6: Polling System");
pollForUpdates(() => {
    console.log("Checking for updates...");
    return Math.random() > 0.7;  // 30% chance of "update found"
}, 1000);

console.log("Exercise 7: Animation Controller");
const controller = createAnimationController(() => {
    console.log("Animation frame");
}, 100);
// Test pause/resume functionality
setTimeout(() => controller.pause(), 500);
setTimeout(() => controller.resume(), 1000);

console.log("Exercise 8: Task Queue");
const queue = createTaskQueue();
const taskId = queue.addTask(() => {
    console.log("Task executed");
}, 1000);
// Test cancellation
queue.cancelTask(taskId); 