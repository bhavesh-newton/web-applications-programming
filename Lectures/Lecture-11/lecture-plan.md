# Promise Chaining - 50 Minute Core Teaching

### 1. Promise Chaining Basics (20 mins)

#### Introduction to Chaining (5 mins)
```javascript
// Basic Promise chain
fetchUserData(userId)
    .then(userData => fetchUserPosts(userData.id))
    .then(posts => console.log(posts));

// Why chain vs nested
// Bad approach (callback hell):
fetchUserData(userId).then(userData => {
    fetchUserPosts(userData.id).then(posts => {
        fetchComments(posts[0].id).then(comments => {
            console.log(comments);
        });
    });
});

// Good approach (flat chain):
fetchUserData(userId)
    .then(userData => fetchUserPosts(userData.id))
    .then(posts => fetchComments(posts[0].id))
    .then(comments => console.log(comments));
```

#### Value Passing (8 mins)
```javascript
// Passing values through chains
let userInfo = {};

fetchUser(123)
    .then(user => {
        userInfo.name = user.name;
        return fetchOrders(user.id);
    })
    .then(orders => {
        userInfo.orders = orders;
        return fetchPreferences(userInfo.name);
    })
    .then(preferences => {
        userInfo.preferences = preferences;
        console.log(userInfo);  // Complete user data
    });
```

#### Transformation (7 mins)
```javascript
// Transforming data in chains
fetch('/api/products')
    .then(response => response.json())
    .then(products => products.filter(p => p.inStock))
    .then(inStock => inStock.map(item => ({
        name: item.name,
        price: item.price * 0.9  // 10% discount
    })))
    .then(discounted => console.log(discounted));
```

### 2. Error Handling (30 mins)

#### Basic Error Catching (10 mins)
```javascript
// Single catch for entire chain
processOrder()
    .then(order => validateOrder(order))
    .then(valid => shipOrder(valid))
    .catch(error => {
        console.error('Order processing failed:', error);
        notifyCustomer(error);
    });

// Error types demonstration
fetch('nonexistent-url')
    .catch(error => {
        if (error instanceof TypeError) {
            console.log('Network error');
        } else {
            console.log('Other error:', error);
        }
    });
```

#### Multiple Error Handlers (10 mins)
```javascript
// Different handlers for different stages
validateUser(userId)
    .then(user => {
        return processPayment(user.paymentDetails)
            .catch(paymentError => {
                // Handle payment errors specifically
                notifyPaymentFailure(paymentError);
                throw new Error('Payment stage failed');
            });
    })
    .then(payment => createOrder(payment))
    .catch(error => {
        // Handle any other errors
        console.error('General error:', error);
    });
```

#### Recovery Patterns (10 mins)
```javascript
// Recovering from errors
fetchFromPrimaryDB()
    .catch(error => {
        console.log('Primary DB failed, trying backup');
        return fetchFromBackupDB();
    })
    .then(data => console.log('Data retrieved:', data))
    .catch(error => {
        // Both primary and backup failed
        console.error('All recovery attempts failed:', error);
    });

// Providing fallback values
fetchUserSettings(userId)
    .catch(() => {
        // Return default settings if fetch fails
        return {
            theme: 'light',
            language: 'en',
            notifications: true
        };
    })
    .then(settings => applySettings(settings));
```