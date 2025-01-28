// Practice exercises for Data Fetching in JavaScript

// Exercise 1: Basic Data Fetching
// TODO: Create a function that fetches data from a public API
async function fetchPublicData(url) {
    // Your code here
}

// Exercise 2: Error Handler
// TODO: Implement error handling for failed requests
async function fetchWithErrorHandling(url) {
    // Your code here
}

// Exercise 3: POST Request
// TODO: Create a function that posts data to an API
async function postData(url, data) {
    // Your code here
}

// Exercise 4: Data Cache
// TODO: Build a simple data caching system
function createDataCache() {
    // Your code here
    return {
        fetch: async function(url) {
            // Implement caching logic
        },
        clear: function() {
            // Clear cache
        }
    };
}

// Exercise 5: API Client
// TODO: Implement a complete API client with all HTTP methods
class APIClient {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    async get(endpoint) {
        // Implement GET
    }

    async post(endpoint, data) {
        // Implement POST
    }

    async put(endpoint, data) {
        // Implement PUT
    }

    async delete(endpoint) {
        // Implement DELETE
    }
}

// Exercise 6: Image Loader
// TODO: Create an image loader with loading states
class ImageLoader {
    constructor() {
        this.loading = false;
        this.error = null;
    }

    async loadImage(url) {
        // Implement image loading
    }
}

// Exercise 7: Real-time Data
// TODO: Implement periodic data fetching with updates
class DataPoller {
    constructor(url, interval) {
        this.url = url;
        this.interval = interval;
        this.isPolling = false;
    }

    start() {
        // Start polling
    }

    stop() {
        // Stop polling
    }
}

// Exercise 8: Request Queue
// TODO: Implement a request queue with retry logic
class RequestQueue {
    constructor() {
        this.queue = [];
        this.processing = false;
    }

    add(request) {
        // Add request to queue
    }

    async process() {
        // Process queue
    }
}

// Test cases
const publicApiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
const postApiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Test Exercise 1
console.log("Exercise 1: Basic Data Fetching");
fetchPublicData(publicApiUrl)
    .then(data => console.log(data))
    .catch(error => console.error(error));

// Test Exercise 2
console.log("Exercise 2: Error Handler");
fetchWithErrorHandling('https://invalid-url')
    .then(data => console.log(data))
    .catch(error => console.error('Handled error:', error));

// Test Exercise 3
console.log("Exercise 3: POST Request");
postData(postApiUrl, {
    title: 'Test Post',
    body: 'This is a test post',
    userId: 1
}).then(response => console.log(response));

// Test Exercise 4
console.log("Exercise 4: Data Cache");
const cache = createDataCache();
cache.fetch(publicApiUrl)
    .then(data => console.log('Cached data:', data));

// Test Exercise 5
console.log("Exercise 5: API Client");
const client = new APIClient('https://jsonplaceholder.typicode.com');
client.get('/posts/1')
    .then(data => console.log('API Client GET:', data));

// Test Exercise 6
console.log("Exercise 6: Image Loader");
const imageLoader = new ImageLoader();
imageLoader.loadImage('https://example.com/image.jpg')
    .then(imageUrl => console.log('Image loaded:', imageUrl))
    .catch(error => console.error('Image load error:', error));

// Test Exercise 7
console.log("Exercise 7: Real-time Data");
const poller = new DataPoller(publicApiUrl, 5000);
poller.start();
// Stop after 15 seconds
setTimeout(() => poller.stop(), 15000);

// Test Exercise 8
console.log("Exercise 8: Request Queue");
const queue = new RequestQueue();
queue.add({ url: publicApiUrl, method: 'GET' });
queue.process(); 