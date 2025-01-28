# JavaScript Lecture Plan: Data Fetching and APIs (1.5 hours)

## 🎯 Session Objectives

- Understand what APIs are and how they work
- Master the fetch() function for data retrieval
- Learn to handle API responses and errors
- Practice real-world data fetching scenarios

---

## 1. Introduction and Pre-read Review (10 minutes)

### 🔄 Quick Review

- **Objective**: Ensure understanding of pre-read material
- **Activity**:
  - Quick quiz on API concepts
  - Review HTTP methods and status codes

### 🌟 Today's Roadmap

- Understanding APIs
- Working with fetch()
- Handling responses and errors
- Real-world applications

---

## 2. Understanding APIs (20 minutes)

### 💫 What is an API? (10 minutes)

- **Objective**: Grasp fundamental API concepts
- **Discussion Points**:
  - API types (REST, GraphQL, etc.)
  - HTTP methods (GET, POST, PUT, DELETE)
  - Status codes and their meanings
  - API endpoints and parameters

### 🎯 API Documentation Deep Dive (10 minutes)

- **Objective**: Learn to read and use API documentation
- **Examples**:

  ```javascript
  // API endpoint structure
  const apiUrl = 'https://api.example.com/v1/users';
  const queryParams = '?page=1&limit=10';
  const fullUrl = apiUrl + queryParams;
  ```

- **Group Exercise**: Explore public APIs

---

## 3. The fetch() Function (30 minutes)

### 🔍 Basic fetch() Usage (15 minutes)

- **Objective**: Master basic data fetching
- **Live Coding**:

  ```javascript
  // Basic GET request
  fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

  // POST request with data
  fetch('https://api.example.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'John Doe',
      email: 'john@example.com'
    })
  });
  ```

- **Pair Programming**:
  - Fetch and display user data
  - Handle loading states

### ⚡ Advanced fetch() Features (15 minutes)

- **Objective**: Learn advanced fetch configurations
- **Examples**:

  ```javascript
  // Custom headers and authentication
  fetch('https://api.example.com/protected', {
    headers: {
      'Authorization': 'Bearer token123',
      'Custom-Header': 'value'
    }
  });

  // Handling different response types
  fetch('https://api.example.com/image')
    .then(response => response.blob())
    .then(imageBlob => {
      const imageUrl = URL.createObjectURL(imageBlob);
      // Use imageUrl in <img> tag
    });
  ```

- **Challenge**: Implement authenticated requests

---

## 4. Error Handling and Best Practices (25 minutes)

### 🔄 Response Validation (15 minutes)

- **Objective**: Properly handle API responses
- **Examples**:

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
  ```

### ⚡ Performance Optimization (10 minutes)

- **Objective**: Learn efficient data fetching
- **Best Practices**:
  - Caching responses
  - Rate limiting
  - Error retry strategies
  - Request cancellation

---

## 5. Practice Session (15 minutes)

### 🎮 Interactive Coding Challenges

1. **Weather App**:
   - Fetch weather data from API
   - Display current conditions
   - Handle loading and errors
   - Add location search

2. **User Directory**:
   - Fetch and display users
   - Implement pagination
   - Add search functionality
   - Handle API errors

3. **Image Gallery**:
   - Fetch images from API
   - Implement lazy loading
   - Add error placeholders
   - Handle network issues

4. **Data Dashboard**:
   - Fetch multiple data sources
   - Display loading states
   - Implement error recovery
   - Add refresh functionality

### 🏆 Bonus Challenge

Build a mini social media feed:

- Fetch posts and comments
- Implement infinite scroll
- Add post creation
- Handle offline mode

---

## 📝 Homework Assignment

1. Create a movie database browser using an API
2. Build a currency converter with live rates
3. Implement a news aggregator
4. Develop a GitHub repository explorer

---

## 🎯 Key Takeaways

1. Understanding API fundamentals
2. Proper fetch() usage patterns
3. Error handling best practices
4. Performance optimization techniques
