// Examples for JavaScript Array Methods: find, findIndex, and includes

// Example 1: Using the find Method
let numbers = [5, 12, 8, 130, 44];
let found = numbers.find(num => num > 10); // Finds the first element greater than 10
console.log(found); // Output: 12 (first element greater than 10)

let notFound = numbers.find(num => num > 200); // No element satisfies the condition
console.log(notFound); // Output: undefined

// Example 2: Using the findIndex Method
let index = numbers.findIndex(num => num > 10); // Finds the index of the first element greater than 10
console.log(index); // Output: 1 (index of the first element greater than 10)

let indexNotFound = numbers.findIndex(num => num > 200); // No element satisfies the condition
console.log(indexNotFound); // Output: -1

// Example 3: Using the includes Method
let fruits = ["apple", "banana", "cherry"];
let hasBanana = fruits.includes("banana"); // Checks if "banana" is in the array
console.log(hasBanana); // Output: true

let hasGrape = fruits.includes("grape"); // Checks if "grape" is in the array
console.log(hasGrape); // Output: false

// Example 4: Combining find and includes
let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

let userNameToFind = "Bob";
let userFound = users.find(user => user.name === userNameToFind);
console.log(userFound); // Output: { name: "Bob", age: 30 }

let isUserPresent = users.map(user => user.name).includes(userNameToFind);
console.log(isUserPresent); // Output: true

// Example 5: Practical Exercise - Finding a Specific Value
let scores = [85, 90, 78, 92];
let firstHighScore = scores.find(score => score > 90);
console.log(`First High Score Above 90: ${firstHighScore}`); // Output: undefined (no score above 90)

// Example 6: Practical Exercise - Finding Index of an Element
let grades = [75, 88, 92, 67];
let indexOfFirstFailingGrade = grades.findIndex(grade => grade < 70);
console.log(`Index of First Failing Grade: ${indexOfFirstFailingGrade}`); // Output: -1 (no failing grades)

// Example 7: Checking Existence with includes
let colors = ["red", "green", "blue"];
let hasGreen = colors.includes("green");
console.log(`Does colors include green? ${hasGreen}`); // Output: true

let hasYellow = colors.includes("yellow");
console.log(`Does colors include yellow? ${hasYellow}`); // Output: false

// Example 8: Using includes with Objects (not directly)
let items = [{ id: 1 }, { id: 2 }, { id: 3 }];
let itemIdToCheck = { id: 2 };
let itemExists = items.some(item => item.id === itemIdToCheck.id);
console.log(`Does items include an item with id ${itemIdToCheck.id}? ${itemExists}`); // Output: true

// Example 9: Finding a String in an Array
let stringsArray = ["apple", "banana", "cherry"];
let searchString = "banana";
let stringFound = stringsArray.find(str => str === searchString);
console.log(`Found string '${searchString}':`, stringFound); // Output: Found string 'banana': banana

// Example 10: Finding Index of a Specific String
let searchStringIndex = stringsArray.findIndex(str => str === searchString);
console.log(`Index of '${searchString}':`, searchStringIndex); // Output: Index of 'banana': 1
