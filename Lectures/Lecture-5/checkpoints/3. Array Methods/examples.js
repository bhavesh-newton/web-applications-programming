// Examples for JavaScript Array Methods

// Example 1: Creating and Initializing an Array
let fruits = ["apple", "banana", "cherry"]; // Array of strings
let numbers = [1, 2, 3, 4, 5]; // Array of numbers
let mixedArray = [1, "two", true, null]; // Array with mixed data types

console.log(`Fruits: ${fruits}`); // Output: Fruits: apple,banana,cherry
console.log(`Numbers: ${numbers}`); // Output: Numbers: 1,2,3,4,5
console.log(`Mixed Array: ${mixedArray}`); // Output: Mixed Array: 1,two,true,

// Example 2: Accessing Elements in an Array
console.log(`First fruit: ${fruits[0]}`); // Output: First fruit: apple
console.log(`Last number: ${numbers[numbers.length - 1]}`); // Output: Last number: 5

// Example 3: Adding Elements to an Array
fruits.push("orange"); // Adds "orange" to the end of the array
console.log(`Updated Fruits Array after push:`, fruits); // Output: Updated Fruits Array after push: [ 'apple', 'banana', 'cherry', 'orange' ]

numbers.unshift(0); // Adds 0 to the beginning of the array
console.log(`Updated Numbers Array after unshift:`, numbers); // Output: Updated Numbers Array after unshift: [ 0, 1, 2, 3, 4, 5 ]

// Example 4: Removing Elements from an Array
let removedFruit = fruits.pop(); // Removes the last element ("orange")
console.log(`Removed Fruit: ${removedFruit}`); // Output: Removed Fruit: orange
console.log(`Fruits Array after pop:`, fruits); // Output: Fruits Array after pop: [ 'apple', 'banana', 'cherry' ]

let firstNumber = numbers.shift(); // Removes the first element (0)
console.log(`Removed First Number: ${firstNumber}`); // Output: Removed First Number: 0
console.log(`Numbers Array after shift:`, numbers); // Output: Numbers Array after shift: [ 1, 2, 3, 4, 5 ]

// Example 5: Slicing and Splicing Arrays
let slicedFruits = fruits.slice(1, 3); // Extracts elements from index 1 to index 2 (not including index 3)
console.log(`Sliced Fruits (from index 1 to 2):`, slicedFruits); // Output: Sliced Fruits (from index 1 to 2): [ 'banana', 'cherry' ]

fruits.splice(1, 1, "kiwi"); // Removes one element at index 1 and adds "kiwi"
console.log(`Fruits Array after splice (remove at index 1 and add kiwi):`, fruits); // Output: Fruits Array after splice (remove at index 1 and add kiwi): [ 'apple', 'kiwi', 'cherry' ]

// Example 6: Iterating Over an Array
for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruit at index ${i}: ${fruits[i]}`);
}
// Output:
// Fruit at index 0: apple
// Fruit at index 1: kiwi
// Fruit at index 2: cherry

// Example 7: Using Higher-order Functions on Arrays
let doubledNumbers = numbers.map(num => num * 2); // Doubles each number in the array
console.log(`Doubled Numbers:`, doubledNumbers); // Output: Doubled Numbers: [2, 4, 6, 8, 10]

let filteredFruits = fruits.filter(fruit => fruit.startsWith("a")); // Filters fruits that start with 'a'
console.log(`Filtered Fruits (start with 'a'):`, filteredFruits); // Output: Filtered Fruits (start with 'a'): [ 'apple' ]

// Example 8: Joining and Splitting Arrays
let fruitString = fruits.join(", "); // Joins array elements into a string separated by ", "
console.log(`Joined Fruits String: ${fruitString}`); // Output: Joined Fruits String: apple, kiwi, cherry

let splitString = fruitString.split(", "); // Splits the string back into an array
console.log(`Split Fruits Array from String:`, splitString); // Output: Split Fruits Array from String: [ 'apple', 'kiwi', 'cherry' ]

// Example 9: Finding Elements in an Array
let indexOfBanana = fruits.indexOf("banana"); // Finds the index of "banana"
console.log(`Index of Banana in Fruits Array: ${indexOfBanana}`); // Output will depend on its position

fruits.push("banana"); // Adding banana back to the array for demonstration
indexOfBanana = fruits.indexOf("banana");
console.log(`Index of Banana in Updated Fruits Array (after adding back): ${indexOfBanana}`); 

// Example 10: Practical Exercises
// Exercise 1: Create a new array of your favorite movies.
let favoriteMovies = ["Inception", "The Matrix", "Interstellar"];
console.log(`Favorite Movies Array before adding a new movie:` , favoriteMovies);

// Exercise 2: Add a new movie to the end of the array.
favoriteMovies.push("The Dark Knight");
console.log(`Updated Favorite Movies Array after adding a new movie:` , favoriteMovies);

// Exercise 3: Remove the first movie from your favorites.
favoriteMovies.shift();
console.log(`Favorite Movies Array after removing the first movie:` , favoriteMovies);
