// Comprehensive Examples for Data Types in JavaScript

// Example 1: Primitive Data Types
let age = 25; // Number
let name = "Alice"; // String
let isStudent = true; // Boolean
let unassigned; // Undefined
let emptyValue = null; // Null (quirk)

console.log(`Age: ${age} (${typeof age}), Name: ${name} (${typeof name}), Is Student: ${isStudent} (${typeof isStudent})`);
console.log(`Unassigned: ${unassigned} (${typeof unassigned}), Empty Value: ${emptyValue} (${typeof emptyValue})`);

// Example 2: Non-Primitive Data Types
let person = { name: "Alice", age: 25, hobbies: ["reading", "cycling"] }; // Object
let numbers = [1, 2, 3, 4]; // Array

console.log(`Person Object:`, person); // Logs the entire object
console.log(`Numbers Array:`, numbers); // Logs the entire array

// Accessing elements in an array
console.log(`First number: ${numbers[0]}`); // Output: 1
console.log(`Last number: ${numbers[numbers.length - 1]}`); // Output: 4

// Accessing properties in an object
console.log(`Person's Name: ${person.name}`); // Output: Alice
console.log(`Person's Hobby: ${person.hobbies[1]}`); // Output: cycling

// Example 3: Adding Elements to Array and Object
numbers[4] = 5; // Add new element to array
person.hobbies[2] = "painting"; // Add new hobby to person object
console.log(`Updated Numbers Array:`, numbers);
console.log(`Updated Person Object:`, person);

// Example 4: Dynamic Typing in JavaScript
let dynamicVar = 42; // Initially a number
console.log(`DynamicVar (Number): ${dynamicVar} (${typeof dynamicVar})`);

dynamicVar = "Now I am a string!"; // Changing to string
console.log(`DynamicVar (String): ${dynamicVar} (${typeof dynamicVar})`);

// Example 5: Practical Exercises
// Exercise 1: Favorite Movie
let favoriteMovie = "Inception";
console.log(`Favorite Movie: ${favoriteMovie} (${typeof favoriteMovie})`);

// Exercise 2: Year Released
let releaseYear = 2010;
console.log(`Year Released: ${releaseYear} (${typeof releaseYear})`);

// Exercise 3: Watched Status
let hasWatched = true;
console.log(`Has Watched: ${hasWatched} (${typeof hasWatched})`);

// Exercise 4: Updating Movie Object
let movie = {
  title: "Inception",
  director: "Christopher Nolan",
  genres: ["Sci-Fi", "Thriller"]
};
console.log(`Movie Object:`, movie);

// Adding a new genre manually
movie.genres[2] = "Action";
console.log(`Updated Movie Genres:`, movie.genres);

// Updating title
movie.title = "Inception: The IMAX Experience";
console.log(`Updated Movie Title: ${movie.title}`);
