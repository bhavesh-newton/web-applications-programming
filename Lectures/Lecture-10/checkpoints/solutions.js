// Solutions for Promise Practice Exercises

// Exercise 1: Basic Promise Creation
function wait(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

// Exercise 2: Promise with Random Resolution
function randomSuccess() {
    return new Promise((resolve, reject) => {
        // 80% chance of success
        const success = Math.random() < 0.8;
        setTimeout(() => {
            if (success) {
                resolve("Operation completed successfully");
            } else {
                reject(new Error("Operation failed"));
            }
        }, 1000);
    });
}

// Exercise 3: Promise-based Timer
function countdown(from) {
    return new Promise((resolve, reject) => {
        if (typeof from !== 'number' || from < 0) {
            reject(new Error('Invalid countdown value'));
            return;
        }

        let current = from;
        const timer = setInterval(() => {
            console.log(current);
            if (current === 0) {
                clearInterval(timer);
                resolve();
            }
            current--;
        }, 1000);
    });
}

// Exercise 4: Data Validation
function validateUser(user) {
    return new Promise((resolve, reject) => {
        const errors = [];

        if (!user.name || user.name.length < 3) {
            errors.push("Name must be at least 3 characters long");
        }

        if (!user.age || user.age < 18) {
            errors.push("User must be at least 18 years old");
        }

        if (!user.email || !user.email.includes('@')) {
            errors.push("Invalid email address");
        }

        if (errors.length > 0) {
            reject(new Error(errors.join(', ')));
        } else {
            resolve({
                ...user,
                validated: true
            });
        }
    });
}

// Exercise 5: Resource Loader
function loadResource(resourceId) {
    return new Promise((resolve, reject) => {
        if (!resourceId || !resourceId.startsWith('resource-')) {
            reject(new Error('Invalid resource ID'));
            return;
        }

        // Simulate loading delay
        setTimeout(() => {
            resolve({
                id: resourceId,
                data: `Data for ${resourceId}`,
                timestamp: new Date()
            });
        }, 1500);
    });
}

// Exercise 6: Multiple Promises
function loadMultipleResources(resourceIds) {
    if (!Array.isArray(resourceIds)) {
        return Promise.reject(new Error('Resource IDs must be an array'));
    }

    const promises = resourceIds.map(id => loadResource(id));
    return Promise.all(promises);
}

// Exercise 7: Promise Timeout
function addTimeout(promise, ms) {
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('Operation timed out'));
        }, ms);
    });

    return Promise.race([promise, timeoutPromise]);
}

// Exercise 8: Safe Promise
function createSafePromise(promise) {
    return promise
        .then(value => ({ success: true, value }))
        .catch(error => ({ success: false, error: error.message }));
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
loadMultipleResources(['resource-1', 'resource-2', 'resource-3'])
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