## Core Teaching (50 mins)

### 1. Creating Objects (20 mins)

#### Introduction (3 mins)
- What are objects? Real-world analogies
- Why use objects vs other data types?
- Objects as key-value pairs

#### Object Literal Syntax (7 mins)
```javascript
// Basic object structure
let book = {
    title: 'JavaScript Basics',
    pages: 200
};

// Multiple data types in objects
let student = {
    name: 'Alex',
    age: 20,
    grades: [85, 90, 92],
    isEnrolled: true
};
```

#### Practice (10 mins)
```javascript
// Step-by-step guided exercise:
// 1. Create empty object
let product = {};

// 2. Add basic properties
product.name = 'Laptop';
product.price = 999;

// 3. Add nested data
product.specs = {
    ram: '8GB',
    storage: '256GB'
};
```

### 2. Accessing Properties (15 mins)

#### Dot Notation Deep Dive (7 mins)
```javascript
// Basic property access
console.log(student.name);      // Output: Alex

// Accessing nested properties
let user = {
    details: {
        email: 'user@example.com'
    }
};
console.log(user.details.email);

// Common mistakes and fixes
console.log(user.nonexistent);  // undefined
```

#### Bracket Notation In-depth (8 mins)
```javascript
// Why bracket notation?
let propertyName = 'age';
console.log(student[propertyName]);

// When to use brackets vs dot
let specialProduct = {
    'product-id': 123,    // Can't use dot notation
    'shipping cost': 10   // Spaces require brackets
};

// Dynamic property access
let keys = ['name', 'age', 'grades'];
keys.forEach(key => {
    console.log(student[key]);
});
```

### 3. Modifying Objects (15 mins)

#### Adding Properties (5 mins)
```javascript
let user = {
    name: 'John'
};

// Different ways to add properties
user.age = 25;
user['email'] = 'john@example.com';
user.address = {
    city: 'New York',
    zip: '10001'
};

// Best practices for adding properties
user.preferences = {};  // Create empty object for future nested properties
```

#### Updating Properties (5 mins)
```javascript
// Direct update
user.age = 26;

// Conditional update
if (user.age < 30) {
    user.category = 'young';
}

// Bulk update example
Object.assign(user, {
    age: 27,
    city: 'Boston'
});
```

#### Deleting Properties (5 mins)
```javascript
// Using delete operator
delete user.age;

// Best practices
user.temporary = 'temp';
delete user.temporary;

// Common pitfalls
user.salary = undefined;  // Not same as delete!
delete user.salary;      // Proper way to remove
```