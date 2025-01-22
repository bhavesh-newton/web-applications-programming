# Array Methods in JavaScript

## 🎯 Objective:
Understand the various array methods in JavaScript, including their syntax, use cases, and examples.

---

## **1. The `push` Method**
The `push` method adds one or more elements to the end of an array and returns the new length of the array.

### Syntax:
```javascript
array.push(element1, element2, ...);
```

### Example:
```javascript
let fruits = ["apple", "banana"];
fruits.push("orange"); // Adds "orange" to the end
console.log(fruits); // Output: ["apple", "banana", "orange"]
```

---

## **2. The `pop` Method**
The `pop` method removes the last element from an array and returns that element. This method changes the length of the array.

### Syntax:
```javascript
let removedElement = array.pop();
```

### Example:
```javascript
let vegetables = ["carrot", "potato", "cabbage"];
let lastVegetable = vegetables.pop(); // Removes "cabbage"
console.log(lastVegetable); // Output: "cabbage"
console.log(vegetables); // Output: ["carrot", "potato"]
```

---

## **3. The `shift` Method**
The `shift` method removes the first element from an array and returns that removed element. This method also changes the length of the array.

### Syntax:
```javascript
let removedElement = array.shift();
```

### Example:
```javascript
let numbers = [1, 2, 3];
let firstNumber = numbers.shift(); // Removes 1
console.log(firstNumber); // Output: 1
console.log(numbers); // Output: [2, 3]
```

---

## **4. The `unshift` Method**
The `unshift` method adds one or more elements to the beginning of an array and returns the new length of the array.

### Syntax:
```javascript
array.unshift(element1, element2, ...);
```

### Example:
```javascript
let colors = ["red", "green"];
colors.unshift("blue"); // Adds "blue" to the beginning
console.log(colors); // Output: ["blue", "red", "green"]
```

---

## **5. The `slice` Method**
The `slice` method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).

### Syntax:
```javascript
let newArray = array.slice(start, end);
```

### Example:
```javascript
let animals = ["dog", "cat", "rabbit", "hamster"];
let someAnimals = animals.slice(1, 3); // Extracts from index 1 to 2
console.log(someAnimals); // Output: ["cat", "rabbit"]
```

---

## **6. The `splice` Method**
The `splice` method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

### Syntax:
```javascript
array.splice(start, deleteCount, item1, item2, ...);
```

### Example:
```javascript
let snacks = ["chips", "cookies", "candy"];
snacks.splice(1, 1, "fruit"); // Removes 1 element at index 1 and adds "fruit"
console.log(snacks); // Output: ["chips", "fruit", "candy"]
```

---

## **7. The `split` Method**
The `split` method is used on strings to split a string into an array of substrings based on a specified delimiter.

### Syntax:
```javascript
let newArray = string.split(separator, limit);
```

### Example:
```javascript
let sentence = "Hello World";
let words = sentence.split(" "); // Splits by space
console.log(words); // Output: ["Hello", "World"]
```

---

## **8. The `join` Method**
The `join` method joins all elements of an array into a string, separated by a specified separator.

### Syntax:
```javascript
let newString = array.join(separator);
```

### Example:
```javascript
let fruitsArray = ["apple", "banana", "orange"];
let fruitString = fruitsArray.join(", "); // Joins with a comma and space
console.log(fruitString); // Output: "apple, banana, orange"
```

---

## 🌟 Key Takeaways:
- **Array Manipulation**: Methods like `push`, `pop`, `shift`, and `unshift` allow for dynamic manipulation of arrays.
- **Slicing and Splicing**: Use `slice` for extracting portions without modifying the original array and `splice` for modifying it.
- **String Conversion**: Use `split` to convert strings into arrays and `join` to convert arrays back into strings.

