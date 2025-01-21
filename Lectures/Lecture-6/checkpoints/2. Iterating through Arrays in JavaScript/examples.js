// Comprehensive Examples for Iterating Through Arrays in JavaScript

// Example 1: Using the forEach Method
let fruits = ["apple", "banana", "cherry"];
console.log("Using forEach to log each fruit:");

fruits.forEach((fruit, index) => {
    console.log(`Fruit at index ${index}: ${fruit}`);
});
// Output:
// Fruit at index 0: apple
// Fruit at index 1: banana
// Fruit at index 2: cherry

// Example 2: Using the map Method
let numbers = [1, 2, 3, 4];
console.log("Using map to double each number:");

const doubledNumbers = numbers.map(num => num * 2);
console.log(`Doubled Numbers: ${doubledNumbers}`); // Output: Doubled Numbers: 2,4,6,8

// Example 3: Using the filter Method
let ages = [15, 22, 18, 30, 12];
console.log("Using filter to find adults (age >= 18):");

const adults = ages.filter(age => age >= 18);
console.log(`Adults: ${adults}`); // Output: Adults: 22,18,30

// Example 4: Using the reduce Method
let scores = [10, 20, 30, 40];
console.log("Using reduce to calculate total score:");

let totalScore = scores.reduce((accumulator, score) => accumulator + score, 0);
console.log(`Total Score: ${totalScore}`); // Output: Total Score: 100

// Example 5: Combining forEach with Other Logic
let students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 78 }
];
console.log("Using forEach to log student names and their scores:");

students.forEach(student => {
    console.log(`${student.name} scored ${student.score}`);
});
// Output:
// Alice scored 85
// Bob scored 92
// Charlie scored 78

// Example 6: Using map to Transform Data
let names = ["john", "jane", "doe"];
console.log("Using map to capitalize names:");

const capitalizedNames = names.map(name => name.charAt(0).toUpperCase() + name.slice(1));
console.log(`Capitalized Names: ${capitalizedNames}`); // Output: Capitalized Names: John, Jane, Doe

// Example 7: Using filter to Extract Specific Data
let products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 }
];
console.log("Using filter to find products under $600:");

const affordableProducts = products.filter(product => product.price < 600);
console.log(`Affordable Products:`, affordableProducts); // Output will show products under $600

// Example 8: Using reduce to Find Maximum Value
let values = [5, 10, 15, -5];
console.log("Using reduce to find the maximum value:");

let maxValue = values.reduce((max, current) => (current > max ? current : max), values[0]);
console.log(`Maximum Value: ${maxValue}`); // Output: Maximum Value: 15

// Example 9: Practical Exercise - Average Calculation
let grades = [90, 80, 70, 60];
console.log("Calculating average grade using reduce:");

let averageGrade = grades.reduce((accumulator, grade) => accumulator + grade, 0) / grades.length;
console.log(`Average Grade: ${averageGrade}`); // Output will show the average grade

// Example 10: Practical Exercise - Filtering and Mapping Combined
let numbersArray = [1, -2, -3, 4];
console.log("Finding positive numbers and doubling them:");

const positiveDoubledNumbers = numbersArray.filter(num => num > 0).map(num => num * 2);
console.log(`Positive Doubled Numbers: ${positiveDoubledNumbers}`); // Output will show doubled values of positive numbers
