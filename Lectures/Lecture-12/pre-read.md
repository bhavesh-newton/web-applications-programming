# JavaScript for Python Programmers: Data Fetching and APIs

## 🎯 Learning Objectives

By the end of this pre-read, you will:

- Understand what APIs are and how they work
- Master the fetch() function for data retrieval
- Learn to handle API responses and errors
- Compare Python and JavaScript approaches to data fetching

---

## 1. Understanding APIs

### ⚡ What is an API?

An API (Application Programming Interface) is a set of rules and protocols for building and interacting with software applications. In web development, we often work with REST APIs that:

- Provide data access through HTTP endpoints
- Support different operations (GET, POST, PUT, DELETE)
- Return data in specific formats (usually JSON)
- Require authentication and handle errors

### 🔄 HTTP Methods

| Method | Purpose | Python (requests) | JavaScript (fetch) |
|--------|---------|------------------|-------------------|
| GET | Retrieve data | `requests.get(url)` | `fetch(url)` |
| POST | Create data | `requests.post(url, json=data)` | `fetch(url, {method: 'POST', body: JSON.stringify(data)})` |
| PUT | Update data | `requests.put(url, json=data)` | `fetch(url, {method: 'PUT', body: JSON.stringify(data)})` |
| DELETE | Remove data | `requests.delete(url)` | `fetch(url, {method: 'DELETE'})` |

### 🌍 Common Status Codes

| Code | Meaning | Example |
|------|---------|---------|
| 200 | OK | Successful request |
| 201 | Created | Resource created |
| 400 | Bad Request | Invalid data sent |
| 401 | Unauthorized | Missing/invalid authentication |
| 404 | Not Found | Resource doesn't exist |
| 500 | Server Error | Server-side issue |

---

## 2. The fetch() Function

### 🎯 Basic Usage

The fetch() function is the modern way to make HTTP requests in JavaScript:

```javascript
// Basic GET request
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Python equivalent:
# import requests
# response = requests.get('https://api.example.com/data')
# data = response.json()
```

#### Common Use Cases

1. Fetching data from APIs
2. Submitting form data
3. Uploading files
4. Real-time data updates

- **More Info**: [MDN - fetch()](https://developer.mozilla.org/en-US/docs/Web/API/fetch)

### 🔨 Request Configuration

Customizing fetch requests with options:

```javascript
// POST request with headers and body
fetch('https://api.example.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token123'
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com'
  })
});
```

```python
# Python equivalent:
requests.post(
    'https://api.example.com/users',
    headers={'Authorization': 'Bearer token123'},
    json={'name': 'John Doe', 'email': 'john@example.com'}
)
```

---

## 3. Handling Responses

### ⚡ Response Methods

The Response object provides several methods to handle different data types:

```javascript
// JSON data
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data));

// Text data
fetch(url)
  .then(response => response.text())
  .then(text => console.log(text));

// Binary data (e.g., images)
fetch(url)
  .then(response => response.blob())
  .then(blob => {
    const imageUrl = URL.createObjectURL(blob);
    // Use imageUrl
  });
```

### 🔍 Error Handling

Proper error handling is crucial for robust applications:

```javascript
async function fetchData(url) {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

// Python equivalent:
# def fetch_data(url):
#     try:
#         response = requests.get(url)
#         response.raise_for_status()
#         return response.json()
#     except requests.exceptions.RequestException as e:
#         print(f"Fetch error: {e}")
#         raise
```

---

## 4. Best Practices

### 🎯 Performance Optimization

1. **Request Caching**:

```javascript
const cache = new Map();

async function fetchWithCache(url) {
    if (cache.has(url)) {
        return cache.get(url);
    }
    
    const response = await fetch(url);
    const data = await response.json();
    cache.set(url, data);
    return data;
}
```

2. **Request Cancellation**:

```javascript
const controller = new AbortController();
const signal = controller.signal;

fetch(url, { signal })
  .then(response => response.json())
  .catch(err => {
    if (err.name === 'AbortError') {
      console.log('Fetch cancelled');
    }
  });

// Cancel the fetch
controller.abort();
```

### 🚀 Error Recovery

1. **Retry Logic**:

```javascript
async function fetchWithRetry(url, maxRetries = 3) {
    for (let i = 0; i < maxRetries; i++) {
        try {
            const response = await fetch(url);
            return await response.json();
        } catch (error) {
            if (i === maxRetries - 1) throw error;
            await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, i)));
        }
    }
}
```

---

## 💡 Pre-lecture Exercises

### Basic Exercises

1. Create a function that fetches data from a public API
2. Implement error handling for failed requests
3. Create a function that posts data to an API
4. Build a simple data caching system

### Intermediate Exercises

1. **API Client**:
   - Implement GET, POST, PUT, DELETE methods
   - Add authentication headers
   - Handle different response types
   - Implement error handling

2. **Data Fetcher**:
   - Add request caching
   - Implement retry logic
   - Add request cancellation
   - Handle timeout errors

3. **Image Loader**:
   - Fetch and display images
   - Add loading states
   - Handle load errors
   - Implement lazy loading

4. **Real-time Data**:
   - Implement periodic data fetching
   - Handle connection errors
   - Add update notifications
   - Implement data diffing

### Advanced Exercises

1. **API Gateway**:
   - Implement request batching
   - Add rate limiting
   - Handle authentication
   - Implement request queuing

2. **Data Sync**:
   - Implement offline support
   - Handle conflict resolution
   - Add background sync
   - Implement retry strategies

Try these exercises before the lecture to get hands-on experience with data fetching.

---

## 📚 Additional Resources

- [MDN - Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [JavaScript.info - Fetch](https://javascript.info/fetch)
- [MDN - HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP)
