# Summary: JavaScript Arrays

Congratulations! You've explored essential concepts in JavaScript, focusing on arrays and their manipulation. Here's a recap of what we've learned:

---

## 1. **Introduction to Arrays**
- **Definition**: Arrays are special objects in JavaScript used to store multiple values in a single variable.
  - Example: 
    ```javascript
    let campuses = ["NSTRU", "NSTPUNE", "NSTBANGALORE"];
    ```

### Differences Between JavaScript Arrays and Python Lists
- Both can store mixed data types, but JavaScript arrays are a type of object.
- Python lists support list comprehensions, while JavaScript relies on methods for manipulation.

---

## 2. **Array Methods**
### Commonly Used Methods
- **`push()`**: Adds elements to the end of an array.
  - Example:
    ```javascript
    fruits.push("orange");
    ```
  
- **`pop()`**: Removes the last element from an array and returns it.
  - Example:
    ```javascript
    let lastFruit = fruits.pop();
    ```

- **`shift()`**: Removes the first element from an array and returns it.
  - Example:
    ```javascript
    let firstFruit = fruits.shift();
    ```

- **`unshift()`**: Adds elements to the beginning of an array.
  - Example:
    ```javascript
    fruits.unshift("kiwi");
    ```

### Slicing and Splicing
- **`slice(start, end)`**: Extracts a portion of an array without modifying the original array.
  - Example:
    ```javascript
    let slicedFruits = fruits.slice(1, 3);
    ```

- **`splice(start, deleteCount, item1, item2, ...)`**: Adds/removes elements from an array and modifies it.
  - Example:
    ```javascript
    fruits.splice(1, 1, "banana");
    ```

### String Conversion Methods
- **`split(separator)`**: Splits a string into an array based on a specified separator.
  - Example:
    ```javascript
    let words = "Hello World".split(" ");
    ```

- **`join(separator)`**: Joins all elements of an array into a single string with a specified separator.
  - Example:
    ```javascript
    let fruitString = fruits.join(", ");
    ```

---

## 3. **Call by Value vs. Call by Reference**
### Call by Value
- Applies to primitive types (e.g., numbers, strings). Changing the copy doesn't affect the original.

### Call by Reference
- Applies to non-primitive types (e.g., arrays). Modifications affect the original array due to shared reference.

---

## 4. **Arrays as Objects**
- Arrays in JavaScript are technically objects, meaning they can have properties and methods.
  - Example:
    ```javascript
    console.log(typeof ["apple", "banana"]); // Output: "object"
    ```

---

## What’s Next?
1. **Practice**: Write small programs using various array methods.
2. **Experiment**: Modify existing examples to see different outputs.
3. **Explore**: Learn about additional concepts such as loops and functions to further enhance your JavaScript skills.

Remember, consistent practice is key to mastering JavaScript arrays and their manipulation methods. Keep coding and building your skills! 🚀
