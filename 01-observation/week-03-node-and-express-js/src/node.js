/*
==========================================
 JavaScript Program Using Arrays & Functions
==========================================
*/

// Array Declaration
let marks = [75, 85, 90, 65, 80];

console.log("Student Marks:", marks);

// Function to Display Array
function displayMarks(arr) {
    console.log("Marks are:");
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

// Function to Find Total Marks
function totalMarks(arr) {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    return total;
}

// Function to Find Average Marks
function averageMarks(arr) {
    return totalMarks(arr) / arr.length;
}

// Function to Find Highest Mark
function highestMark(arr) {
    let highest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > highest) {
            highest = arr[i];
        }
    }

    return highest;
}

// Function to Find Lowest Mark
function lowestMark(arr) {
    let lowest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < lowest) {
            lowest = arr[i];
        }
    }

    return lowest;
}

// Function to Search an Element
function searchMark(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}

// Function to Reverse Array
function reverseArray(arr) {
    return arr.slice().reverse();
}

// Function to Sort Array
function sortArray(arr) {
    return arr.slice().sort(function(a, b) {
        return a - b;
    });
}

// Function to Add a New Mark
function addMark(arr, value) {
    arr.push(value);
    console.log(value + " added successfully.");
}

// Function to Remove Last Mark
function removeMark(arr) {
    let removed = arr.pop();
    console.log("Removed Mark:", removed);
}

// Display Array
displayMarks(marks);

// Print Results
console.log("Total Marks:", totalMarks(marks));
console.log("Average Marks:", averageMarks(marks));
console.log("Highest Mark:", highestMark(marks));
console.log("Lowest Mark:", lowestMark(marks));

// Search
let value = 90;
let position = searchMark(marks, value);

if (position != -1) {
    console.log(value + " found at index " + position);
} else {
    console.log(value + " not found");
}

// Add Element
addMark(marks, 95);
console.log("After Adding:", marks);

// Remove Element
removeMark(marks);
console.log("After Removing:", marks);

// Reverse Array
console.log("Reversed Array:", reverseArray(marks));

// Sort Array
console.log("Sorted Array:", sortArray(marks));

console.log("Program Executed Successfully.");
