// Solutions for Lecture 3 Practice Exercises

// Exercise 1: Ternary Operator
function isEven(number) {
    return number % 2 === 0 ? true : false;
}

// Exercise 2: Grading System
function calculateGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// Exercise 3: Loop Practice
function printEvenNumbers() {
    let count = 0;
    let number = 0;
    
    while (count < 10) {
        if (number % 2 === 0) {
            console.log(number);
            count++;
        }
        number++;
    }
}

// Exercise 4: Switch Statement
function numberToLetterGrade(score) {
    const roundedScore = Math.round(score / 10) * 10;
    
    switch (roundedScore) {
        case 100:
        case 90:
            return "A";
        case 80:
            return "B";
        case 70:
            return "C";
        case 60:
            return "D";
        default:
            return "F";
    }
}

// Exercise 5: Control Flow
function controlFlowPractice() {
    for (let i = 1; i <= 10; i++) {
        if (i === 8) {
            break;
        }
        if (i % 3 === 0) {
            continue;
        }
        console.log(i);
    }
}

// Test the solutions
console.log("Exercise 1:", isEven(4));  // true
console.log("Exercise 1:", isEven(7));  // false

console.log("Exercise 2:", calculateGrade(95));  // A
console.log("Exercise 2:", calculateGrade(88));  // B

console.log("Exercise 3:");
printEvenNumbers();  // 0, 2, 4, 6, 8, 10, 12, 14, 16, 18

console.log("Exercise 4:", numberToLetterGrade(85));  // B
console.log("Exercise 4:", numberToLetterGrade(92));  // A

console.log("Exercise 5:");
controlFlowPractice();  // 1, 2, 4, 5, 7 