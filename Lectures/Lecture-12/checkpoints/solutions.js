// Solutions for Data Fetching Practice Exercises

// Exercise 1: Basic Data Fetching
async function fetchPublicData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}

// Exercise 2: Error Handler
async function fetchWithErrorHandling(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Fetch failed:', error.message);
        throw new Error('Failed to fetch data: ' + error.message);
    }
}

// Exercise 3: POST Request
async function postData(url, data) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Post failed:', error.message);
        throw error;
    }
}

// Exercise 4: Data Cache
function createDataCache() {
    const cache = new Map();
    const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
    
    return {
        fetch: async function(url) {
            const now = Date.now();
            if (cache.has(url)) {
                const { data, timestamp } = cache.get(url);
                if (now - timestamp < CACHE_DURATION) {
                    return data;
                }
            }
            
            const response = await fetch(url);
            const data = await response.json();
            cache.set(url, { data, timestamp: now });
            return data;
        },
        clear: function() {
            cache.clear();
        }
    };
}

// Exercise 5: API Client
function createAPIClient(baseURL) {
    const baseUrl = baseURL.endsWith('/') ? baseURL.slice(0, -1) : baseURL;

    async function request(endpoint, options = {}) {
        const url = baseUrl + endpoint;
        const response = await fetch(url, options);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    }

    async function get(endpoint) {
        return request(endpoint);
    }

    async function post(endpoint, data) {
        return request(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    }

    async function put(endpoint, data) {
        return request(endpoint, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    }

    async function del(endpoint) {
        return request(endpoint, { method: 'DELETE' });
    }

    return { get, post, put, delete: del };
}

// Exercise 6: Image Loader
function createImageLoader() {
    let loading = false;
    let error = null;

    async function loadImage(url) {
        loading = true;
        error = null;
        
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const blob = await response.blob();
            const imageUrl = URL.createObjectURL(blob);
            loading = false;
            return imageUrl;
        } catch (err) {
            loading = false;
            error = err;
            throw err;
        }
    }

    function getStatus() {
        return { loading, error };
    }

    return { loadImage, getStatus };
}

// Exercise 7: Real-time Data
function createDataPoller(url, interval) {
    let isPolling = false;
    let timeoutId = null;

    async function fetchData() {
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log('Polled data:', data);
            return data;
        } catch (error) {
            console.error('Polling error:', error);
            throw error;
        }
    }

    function start() {
        if (isPolling) return;
        
        isPolling = true;
        const poll = async () => {
            if (!isPolling) return;
            
            await fetchData();
            timeoutId = setTimeout(poll, interval);
        };
        
        poll();
    }

    function stop() {
        isPolling = false;
        if (timeoutId) {
            clearTimeout(timeoutId);
            timeoutId = null;
        }
    }

    return { start, stop };
}

// Exercise 8: Request Queue
function createRequestQueue() {
    const queue = [];
    let processing = false;
    const maxRetries = 3;

    function add(request) {
        queue.push({
            ...request,
            retries: 0
        });
        
        if (!processing) {
            process();
        }
    }

    async function process() {
        if (processing || queue.length === 0) return;
        
        processing = true;
        
        while (queue.length > 0) {
            const request = queue[0];
            
            try {
                const response = await fetch(request.url, {
                    method: request.method || 'GET',
                    headers: request.headers || {},
                    body: request.body ? JSON.stringify(request.body) : undefined
                });
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                console.log('Request successful:', data); // output the data
                queue.shift(); // Remove processed request
            } catch (error) {
                console.error('Request failed:', error);
                
                if (request.retries < maxRetries) {
                    request.retries++;
                    // Move to end of queue for retry
                    queue.push(queue.shift()); // [1, 2, 3] -> [2, 3, 1]
                    await new Promise(resolve => setTimeout(resolve, 1000 * request.retries));
                } else {
                    console.error('Max retries reached for request:', request);
                    queue.shift(); // Remove failed request
                }
            }
        }
        
        processing = false;
    }

    return { add, process };
}

// Test cases
const publicApiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
const postApiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Test all solutions
console.log("Testing all solutions...");

// Test Exercise 1
fetchPublicData(publicApiUrl)
    .then(data => console.log("Exercise 1:", data));

// Test Exercise 2
fetchWithErrorHandling('https://invalid-url')
    .catch(error => console.log("Exercise 2:", error.message));

// Test Exercise 3
postData(postApiUrl, {
    title: 'Test Post',
    body: 'This is a test post',
    userId: 1
}).then(response => console.log("Exercise 3:", response));

// Test Exercise 4
const cache = createDataCache();
cache.fetch(publicApiUrl)
    .then(data => console.log("Exercise 4:", data));

// Test Exercise 5
const apiClient = createAPIClient('https://jsonplaceholder.typicode.com');
apiClient.get('/posts/1')
    .then(data => console.log("Exercise 5:", data));

// Test Exercise 6
const imageLoader = createImageLoader();
imageLoader.loadImage('https://example.com/image.jpg')
    .then(imageUrl => console.log("Exercise 6:", imageUrl))
    .catch(error => console.error("Exercise 6 error:", error));

// Test Exercise 7
const poller = createDataPoller(publicApiUrl, 5000);
poller.start();
setTimeout(() => poller.stop(), 15000);

// Test Exercise 8
const queue = createRequestQueue();
queue.add({ url: publicApiUrl, method: 'GET' });
queue.add({ url: postApiUrl, method: 'POST', body: { title: 'Test' } }); 
queue.add({ url: postApiUrl, method: 'POST', body: { title: 'Test' } }); 