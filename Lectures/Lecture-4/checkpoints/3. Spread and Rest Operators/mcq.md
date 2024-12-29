Here are some multiple-choice questions (MCQs) focused on the spread and rest operators in JavaScript:

# Checkpoint: Spread and Rest Operators in JavaScript - Quiz

### Question 1:
What will be the output of the following code?
```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined);
```
- A) `[1, 2, 3, 4, 5]`
- B) `[1, 2, 3]`
- C) `[4, 5, 6]`
- D) `[1, 2, 3, 4, 5, 6]`

**Correct Answer:** D) `[1, 2, 3, 4, 5, 6]`

---

### Question 2:
What will be the output of the following code?
```javascript
function displayInfo(name, ...details) {
    console.log(`Name: ${name}`);
    console.log(`Details:`, details);
}
displayInfo("Alice", "Engineer", "New York", "Loves coding");
```
- A) 
```
Name: Alice
Details: []
```
- B)
```
Name: Alice
Details: ["Engineer", "New York", "Loves coding"]
```
- C)
```
Name: Alice
Details: ["Engineer"]
```
- D)
```
Name: Alice
Details: ["New York", "Loves coding"]
```

**Correct Answer:** B)
```
Name: Alice
Details: ["Engineer", "New York", "Loves coding"]
```

---

### Question 3:
What will be the output of this code snippet?
```javascript
const nums = [1, 2];
const newNums = [0, ...nums];
console.log(newNums);
```
- A) ``
- B) `[0, nums]`
- C) `[0, 1, 2]`
- D) `[1, 2]`

**Correct Answer:** C) `[0, 1, 2]`

