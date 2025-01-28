// Practice exercises for Promises in JavaScript

// Exercise 1: Basic Promise Creation
// TODO: Create a function that returns a Promise which resolves after a given delay
function wait(ms) {
    // Your code here
}

// Exercise 2: Promise with Random Resolution
// TODO: Create a Promise that randomly resolves (80% chance) or rejects (20% chance)
function randomSuccess() {
    // Your code here
}

// Exercise 3: Promise-based Timer
// TODO: Create a countdown timer that returns a Promise
// The Promise should resolve after counting down from the specified number
function countdown(from) {
    // Your code here
}

// Exercise 4: Data Validation
// TODO: Create a function that validates user data using Promises
// Should validate: age >= 18, name length >= 3, and email contains @
function validateUser(user) {
    // Your code here
}

// Exercise 5: Resource Loader
// TODO: Create a function that simulates loading a resource
// Should resolve with data after a delay, or reject if resourceId is invalid
function loadResource(resourceId) {
    // Your code here
}

// Exercise 6: Multiple Promises
// TODO: Create a function that loads multiple resources in parallel
// Should use Promise.all and handle errors appropriately
function loadMultipleResources(resourceIds) {
    // Your code here
}

// Exercise 7: Promise Timeout
// TODO: Create a function that adds a timeout to any Promise
// Should reject if the Promise doesn't resolve within the timeout period
function addTimeout(promise, ms) {
    // Your code here
}

// Exercise 8: Safe Promise
// TODO: Create a function that wraps a Promise to never throw errors
// Should always resolve with either a success value or error object
function createSafePromise(promise) {
    // Your code here
}

// Test cases
console.log('Testing Exercise 1: Basic Promise Creation');
wait(1000).then(() => console.log('Waited 1 second'));

console.log('Testing Exercise 2: Random Success');
randomSuccess()
    .then(() => console.log('Success!'))
    .catch(error => console.log('Failed:', error.message));

console.log('Testing Exercise 3: Promise-based Timer');
countdown(3)
    .then(() => console.log('Countdown complete!'))
    .catch(error => console.log('Countdown error:', error));

console.log('Testing Exercise 4: Data Validation');
validateUser({
    name: 'Jo',
    age: 17,
    email: 'invalid-email'
}).then(
    validatedUser => console.log('Valid user:', validatedUser),
    error => console.log('Invalid user:', error.message)
);

console.log('Testing Exercise 5: Resource Loader');
loadResource('resource-123')
    .then(data => console.log('Resource loaded:', data))
    .catch(error => console.log('Load failed:', error.message));

console.log('Testing Exercise 6: Multiple Resources');
loadMultipleResources(['res1', 'res2', 'res3'])
    .then(results => console.log('All resources loaded:', results))
    .catch(error => console.log('Failed to load all resources:', error.message));

console.log('Testing Exercise 7: Promise Timeout');
const slowPromise = new Promise(resolve => setTimeout(resolve, 2000));
addTimeout(slowPromise, 1000)
    .then(() => console.log('Promise completed in time'))
    .catch(error => console.log('Promise timed out:', error.message));

console.log('Testing Exercise 8: Safe Promise');
const riskyPromise = Promise.reject(new Error('Risky operation failed'));
createSafePromise(riskyPromise)
    .then(result => console.log('Safe promise result:', result)); 