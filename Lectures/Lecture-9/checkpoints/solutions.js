// Solutions for Asynchronous Programming Practice Exercises

// Exercise 1: Delayed Message
function delayedMessage(message, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, delay);
    });
}

// Exercise 2: Countdown Timer
function countdown(fromNumber) {
    let current = fromNumber;
    const timerId = setInterval(() => {
        console.log(current);
        if (current === 0) {
            clearInterval(timerId);
            console.log('Countdown complete!');
        }
        current--;
    }, 1000);
    
    return {
        stop: () => clearInterval(timerId)
    };
}

// Exercise 3: Delayed Callback
function executeAfterDelay(callback, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            callback();
            resolve();
        }, delay);
    });
}

// Exercise 4: Progress Indicator
function showProgress(totalSeconds) {
    let current = 0;
    const total = totalSeconds;
    
    const timerId = setInterval(() => {
        current++;
        const percentage = (current / total) * 100;
        console.log(`Progress: ${percentage.toFixed(1)}%`);
        
        if (current === total) {
            clearInterval(timerId);
            console.log('Progress complete!');
        }
    }, 1000);
    
    return {
        stop: () => clearInterval(timerId)
    };
}

// Exercise 5: Debounce Function
function debounce(func, delay) {
    let timeoutId;
    
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Exercise 6: Polling System
function pollForUpdates(checkFunction, interval) {
    let isPolling = true;
    
    const poll = async () => {
        if (!isPolling) return;
        
        const hasUpdate = await checkFunction();
        if (hasUpdate) {
            console.log('Update found!');
        }
        
        setTimeout(poll, interval);
    };
    
    poll();
    
    return {
        stop: () => {
            isPolling = false;
        }
    };
}

// Exercise 7: Animation Controller
function createAnimationController(animationFunc, interval) {
    let isRunning = false;
    let timeoutId = null;
    
    const animate = () => {
        if (!isRunning) return;
        
        animationFunc();
        timeoutId = setTimeout(animate, interval);
    };
    
    return {
        start: () => {
            if (!isRunning) {
                isRunning = true;
                animate();
            }
        },
        pause: () => {
            isRunning = false;
            if (timeoutId) {
                clearTimeout(timeoutId);
                timeoutId = null;
            }
        },
        resume: () => {
            if (!isRunning) {
                isRunning = true;
                animate();
            }
        },
        stop: () => {
            isRunning = false;
            if (timeoutId) {
                clearTimeout(timeoutId);
                timeoutId = null;
            }
        }
    };
}

// Exercise 8: Task Queue
function createTaskQueue() {
    const tasks = new Map();
    let nextTaskId = 1;
    
    return {
        addTask: function(task, delay) {
            const taskId = nextTaskId++;
            const timeoutId = setTimeout(() => {
                task();
                this.cancelTask(taskId);
            }, delay);
            
            tasks.set(taskId, timeoutId);
            return taskId;
        },
        cancelTask: function(taskId) {
            const timeoutId = tasks.get(taskId);
            if (timeoutId) {
                clearTimeout(timeoutId);
                tasks.delete(taskId);
                return true;
            }
            return false;
        }
    };
}

// Test cases
console.log("Testing all solutions...");

// Test Exercise 1
console.log("Exercise 1: Delayed Message");
delayedMessage("Hello, World!", 2000);

// Test Exercise 2
console.log("Exercise 2: Countdown Timer");
const timer = countdown(5);
// Stop after 3 seconds (optional)
setTimeout(() => timer.stop(), 3000);

// Test Exercise 3
console.log("Exercise 3: Delayed Callback");
executeAfterDelay(() => {
    console.log("Callback executed!");
}, 1000);

// Test Exercise 4
console.log("Exercise 4: Progress Indicator");
const progress = showProgress(5);

// Test Exercise 5
console.log("Exercise 5: Debounce Function");
const debouncedFn = debounce(() => {
    console.log("Debounced function called");
}, 500);
debouncedFn();
debouncedFn();
debouncedFn(); // Only the last call will execute

// Test Exercise 6
console.log("Exercise 6: Polling System");
const poller = pollForUpdates(() => {
    console.log("Checking for updates...");
    return Promise.resolve(Math.random() > 0.7);
}, 1000);
// Stop polling after 5 seconds
setTimeout(() => poller.stop(), 5000);

// Test Exercise 7
console.log("Exercise 7: Animation Controller");
const controller = createAnimationController(() => {
    console.log("Animation frame");
}, 100);
controller.start();
// Test pause/resume sequence
setTimeout(() => controller.pause(), 500);
setTimeout(() => controller.resume(), 1000);
setTimeout(() => controller.stop(), 2000);

// Test Exercise 8
console.log("Exercise 8: Task Queue");
const queue = createTaskQueue();
const taskId = queue.addTask(() => {
    console.log("Task executed");
}, 1000);
// Test cancellation
setTimeout(() => {
    const cancelled = queue.cancelTask(taskId);
    console.log("Task cancelled:", cancelled);
}, 500); 