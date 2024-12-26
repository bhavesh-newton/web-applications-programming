// Solutions for Object Methods Practice Exercises

// Exercise 1: Object Property Counter
function countProperties(obj) {
    return Object.keys(obj).length;
}

// Exercise 2: Property Checker
function hasRequiredProperties(obj, requiredProps) {
    const objKeys = Object.keys(obj);
    return requiredProps.every(prop => objKeys.includes(prop));
}

// Exercise 3: Average Calculator
function calculateAverage(obj) {
    const numbers = Object.values(obj).filter(val => typeof val === 'number');
    const sum = numbers.reduce((acc, val) => acc + val, 0);
    return numbers.length ? +(sum / numbers.length).toFixed(2) : 0;
}

// Exercise 4: Array to Object Converter
function arrayToObject(names) {
    return Object.fromEntries(
        names.map((name, index) => [index + 1, name])
    );
}

// Exercise 5: Property Validator
function validateObjectTypes(obj, schema) {
    const errors = [];
    
    for (const [key, expectedType] of Object.entries(schema)) {
        if (!(key in obj)) {
            errors.push(`Missing property: ${key}`);
            continue;
        }
        
        const actualType = typeof obj[key];
        if (actualType !== expectedType) {
            errors.push(`Invalid type for ${key}: expected ${expectedType}, got ${actualType}`);
        }
    }
    
    return {
        valid: errors.length === 0,
        errors
    };
}

// Exercise 6: Case Converter
function convertToCamelCase(obj) {
    return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [
            key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase()),
            value
        ])
    );
}

// Exercise 7: Object Statistics
function calculateStats(obj) {
    const numbers = Object.values(obj).filter(val => typeof val === 'number');
    
    if (!numbers.length) return { min: 0, max: 0, average: 0 };
    
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    const average = +(numbers.reduce((acc, val) => acc + val, 0) / numbers.length).toFixed(2);
    
    return { min, max, average };
}

// Exercise 8: Object Differ
function findDifferences(obj1, obj2) {
    const allKeys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);
    const result = {
        modified: [],
        removed: [],
        added: []
    };
    
    for (const key of allKeys) {
        if (key in obj1 && key in obj2) {
            if (obj1[key] !== obj2[key]) {
                result.modified.push(key);
            }
        } else if (key in obj1) {
            result.removed.push(key);
        } else {
            result.added.push(key);
        }
    }
    
    return result;
}

// Test cases
const user = {
    first_name: "John",
    last_name: "Doe",
    age: 30,
    email: "john@example.com"
};

const numbers = {
    math: 95,
    science: 88,
    history: 92
};

const requiredFields = ["first_name", "email"];

const schema = {
    first_name: "string",
    age: "number",
    email: "string"
};

// Test all solutions
console.log("Exercise 1:", countProperties(user));  // 4

console.log("Exercise 2:", hasRequiredProperties(user, requiredFields));  // true

console.log("Exercise 3:", calculateAverage(numbers));  // 91.67

console.log("Exercise 4:", arrayToObject(["Alice", "Bob", "Charlie"]));
// { 1: "Alice", 2: "Bob", 3: "Charlie" }

console.log("Exercise 5:", validateObjectTypes(user, schema));
// { valid: true, errors: [] }

console.log("Exercise 6:", convertToCamelCase(user));
// { firstName: "John", lastName: "Doe", age: 30, email: "john@example.com" }

console.log("Exercise 7:", calculateStats(numbers));
// { min: 88, max: 95, average: 91.67 }

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, b: 3, d: 4 };
console.log("Exercise 8:", findDifferences(obj1, obj2));
// { modified: ["b"], removed: ["c"], added: ["d"] } 