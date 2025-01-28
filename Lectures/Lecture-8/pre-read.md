# JavaScript for Python Programmers: Object Methods and Data Structures

## 🎯 Learning Objectives

By the end of this pre-read, you will:

- Understand JavaScript's built-in object methods
- Master data transformation using object methods
- Learn efficient ways to manipulate object data
- Compare Python and JavaScript approaches to object manipulation
- Understand performance implications of different methods

---

## 1. Object Methods Overview

### ⚡ Why Object Methods?

JavaScript provides powerful built-in methods for working with objects. These methods help you:

- Extract information from objects
- Transform data structures
- Manipulate object properties efficiently
- Create clean and maintainable code
- Optimize performance in data-heavy applications

### 🔄 Python vs JavaScript Object Methods

| Operation | Python (Dictionary) | JavaScript (Object) |
|-----------|-------------------|-------------------|
| Get keys | `dict.keys()` | `Object.keys(obj)` |
| Get values | `dict.values()` | `Object.values(obj)` |
| Get key-value pairs | `dict.items()` | `Object.entries(obj)` |
| Create from pairs | `dict(pairs)` | `Object.fromEntries(pairs)` |
| Check property | `key in dict` | `key in obj` or `obj.hasOwnProperty(key)` |
| Delete property | `del dict[key]` | `delete obj[key]` |

---

## 2. Object.keys() and Object.values()

### 🔑 Object.keys()

Returns an array of an object's enumerable property names:

```javascript
const user = {
    name: "Alice",
    age: 25,
    city: "London"
};

const keys = Object.keys(user);
console.log(keys);  // ["name", "age", "city"]

// Iterating over keys
keys.forEach(key => {
    console.log(`${key}: ${user[key]}`);
});

// Using with array methods
const hasRequiredFields = Object.keys(user).every(key => 
    ['name', 'age', 'city'].includes(key)
);
```

#### Common Use Cases

1. Checking if properties exist
2. Counting properties
3. Iterating over object properties
4. Validating object structure
5. Dynamic form field generation
6. Property existence validation

- **More Info**: [MDN - Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)

### 📊 Object.values()

Returns an array of an object's enumerable property values:

```javascript
const user = {
    name: "Alice",
    age: 25,
    city: "London"
};

const values = Object.values(user);
console.log(values);  // ["Alice", 25, "London"]

// Python equivalent:
// # values = list(user.values())

// Statistical operations
const scores = {
    math: 95,
    science: 88,
    history: 92
};

const average = Object.values(scores)
    .reduce((sum, score) => sum + score, 0) / Object.values(scores).length;

// Type checking values
const allStrings = Object.values(user)
    .every(value => typeof value === 'string');
```

#### Common Use Cases

1. Calculating statistics
2. Data validation
3. Value transformation
4. Data analysis
5. Type checking
6. Aggregation operations

- **More Info**: [MDN - Object.values()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)

---

## 3. Object.entries() and Object.fromEntries()

### 🔄 Object.entries()

Returns an array of a given object's enumerable [key, value] pairs:

```javascript
const user = {
    name: "Alice",
    age: 25
};

const entries = Object.entries(user);
console.log(entries);  
// [["name", "Alice"], ["age", 25]]
// Python equivalent:
//# entries = list(user.items())

// Advanced iteration
for (const [key, value] of Object.entries(user)) {
    console.log(`${key} is ${value}`);
}

// Filtering and transforming
const filteredObject = Object.fromEntries(
    Object.entries(user)
        .filter(([key, value]) => typeof value === 'string')
);

// Sorting by values
const sortedEntries = Object.entries(user)
    .sort(([,a], [,b]) => a > b ? 1 : -1);
```

#### Common Use Cases

1. Object transformation
2. Filtering properties
3. Data mapping
4. Advanced iteration
5. Sorting object properties
6. Data structure conversion

- **More Info**: [MDN - Object.entries()](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/>
Reference/Global_Objects/Object/entries)

### 🔨 Object.fromEntries()

Creates an object from an array of [key, value] pairs:

```javascript
const entries = [
    ["name", "Alice"],
    ["age", 25]
];

const user = Object.fromEntries(entries);
console.log(user);  
// { name: "Alice", age: 25 }

// Python equivalent:
//# user = dict(entries)

// Converting Map to Object
const map = new Map([
    ['name', 'Bob'],
    ['age', 30]
]);
const objFromMap = Object.fromEntries(map);

// Transforming data
const transformed = Object.fromEntries(
    Object.entries(user)
        .map(([key, value]) => [
            key.toUpperCase(),
            typeof value === 'string' ? value.toUpperCase() : value
        ])
);
```

#### Common Use Cases

1. Converting Map to Object
2. Array transformation
3. Data restructuring
4. API response formatting

- **More Info**: [MDN - Object.fromEntries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries)

---

## 4. Performance Considerations and Best Practices

### 🎯 Performance Tips

1. **Caching Object Methods Results**:

```javascript
// Instead of
Object.keys(obj).forEach(key => {
    Object.values(obj).forEach(value => {
        // Operations
    });
});

// Better approach
const keys = Object.keys(obj);
const values = Object.values(obj);
keys.forEach(key => {
    values.forEach(value => {
        // Operations
    });
});
```

2. **Choosing the Right Method**:

```javascript
// If you only need keys
Object.keys(obj).length;  // Better than Object.entries(obj).length

// If you need both key and value
Object.entries(obj);  // Better than Object.keys(obj).map(key => [key, obj[key]])
```

### 🚀 Memory Optimization

1. **Handling Large Objects**:

```javascript
// Process in chunks
function processLargeObject(obj, chunkSize = 1000) {
    const entries = Object.entries(obj);
    for (let i = 0; i < entries.length; i += chunkSize) {
        const chunk = entries.slice(i, i + chunkSize);
        // Process chunk
    }
}
```

2. **Efficient Property Access**:

```javascript
// Destructuring for frequently accessed properties
const { prop1, prop2 } = obj;  // Better than repeated obj.prop1, obj.prop2

// Using computed property names
const key = 'dynamicKey';
const value = obj[key];  // Better than Object.entries(obj).find(([k]) => k === key)[1]
```

---

## 💡 Pre-lecture Exercises

### Basic Exercises

1. Create a function that counts the number of properties in an object
2. Write a function that checks if an object has specific properties
3. Calculate the average of numeric values in an object
4. Convert an array of names to an object with IDs

### Intermediate Exercises

1. **Property Validator**:
   - Check if all required properties exist
   - Validate property types
   - Return detailed validation report

2. **Data Transformer**:
   - Convert snake_case keys to camelCase
   - Filter out null values
   - Merge nested objects

3. **Statistics Calculator**:
   - Calculate mean, median, mode
   - Find min and max values
   - Generate frequency distribution

4. **Object Differ**:
   - Compare two objects
   - Find added, removed, modified properties
   - Generate diff report

### Advanced Exercises

1. **Mini Database**:

   ```javascript
   class MiniDB {
       constructor() {
           this.data = {};
       }

       create(id, item) {
           // Implement create
       }

       read(id) {
           // Implement read
       }

       update(id, updates) {
           // Implement update
       }

       delete(id) {
           // Implement delete
       }

       query(criteria) {
           // Implement query
       }
   }
   ```

2. **Data Migration Tool**:

   ```javascript
   class DataMigrator {
       constructor(sourceSchema, targetSchema) {
           this.sourceSchema = sourceSchema;
           this.targetSchema = targetSchema;
       }

       migrate(data) {
           // Implement migration
       }

       validate(data) {
           // Implement validation
       }

       rollback(migration) {
           // Implement rollback
       }
   }
   ```

Try these exercises before the lecture to get hands-on experience with object methods.

---

## 📚 Additional Resources

- [MDN - Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
- [JavaScript.info - Object Methods](https://javascript.info/object-methods)
- [MDN - Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [V8 Blog - Object Performance](https://v8.dev/blog/fast-properties)
- [JavaScript Weekly - Object Manipulation Patterns](https://javascriptweekly.com/)
