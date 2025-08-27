// console.log("Part 2: Functions ready!");

// // Functions - Declarations and Expressions
// function logger() {
//     console.log("My name is Adrielle");
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(5, 3));

// // Function expression
// const calcAge = function (birthYear) {
//     return 2025 - birthYear;
// };

// const age1 = calcAge(2003);
// console.log(age1);

// console.log(calcAge(1991));

// function introduce(firstName, lastName, age) {
//     const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old`;
//     return introduction;
// }

// console.log(introduce("Adrielle", "Agbayani", 21));
// console.log(introduce("John"));

// function yearsUntilRetirement(birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if(retirement > 0) {
//         return `${firstName} retires in ${retirement} years.`;
//     } else {
//         return `${firstName} has already retired.`;    
//     }
// }

// console.log(yearsUntilRetirement(2003, "Adrielle"));


// /// Function scope
// const globalVar = "I am global";

// function testScope(){
//     const localVar = "I am local";
//     console.log(globalVar);
//     console.log(localVar);
// }

// testScope();
// console.log(globalVar);
// // console.log(localVar);

// // Coding Challenge #1

// // Function to calculate average scores
// function calcAverage(score1, score2, score3) {
//     return (score1 + score2 + score3) / 3;
// }

// // Function to check winner
// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
//     } else {
//         return "No team wins...";
//     }
// }

// // Test Data 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// // Test Data 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

const grades = [85, 92, 78, 90, 88];
console.log(grades);

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const mixed = ['Jonas', 40, false, friends];
console.log(mixed);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

// Accessing Array Elements
console.log(friends[0]);
console.log(friends[1]);

console.log(friends.length)
console.log(friends[friends.length - 1]);

friends[1] = "Jay";
console.log(friends);

const calcAge = function (birthYear) {
  return 2025 - birthYear;
};

const ages = [calcAge(2003), calcAge(1940), calcAge(1991)];
console.log(ages);

const newLength = friends.push("John");
console.log(friends);
console.log(newLength);

friends.unshift("Mark");
console.log(friends);

// removing elements

// remove last item from the list
const popped = friends.pop();
console.log(popped);
console.log(friends);

// remove first item from the list
const shifted = friends.shift();
console.log(shifted);
console.log(friends);

// finding an element
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Michael"));

// includes
console.log(friends.includes("Peter"));
console.log(friends.includes("John"));

// Array iterations
for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);
}

friends.forEach(
    function(friend, index) {
        console.log(`${index + 1} : ${friend}`);

            }
);

friends.forEach((friend, index) => {
     console.log(`${index + 1} : ${friend}`)
} 
);

const grades2 = [85, 92, 78, 96, 88, 74];
let total = 0;

for (let i = 0; i < grades2.length; i++) {
  total += grades2[i];
}

const average2 = total / grades2.length;
// console.log(`Average grade: ${average.toFixed(2)}`);

let passedCount = 0;
grades2.forEach(grade => {
    if (grade >= 70) passedCount++;
});
console.log(`${passedCount} out of ${grades2.length} students passed`);

////////////////////////////////////
// Coding Challenge #2 - Student Grade Manager

const grades3 = [78, 85, 92, 67, 88, 95, 73, 82];

// Function to Calculate Average
function calculateAverage(grades3) {
    let sum = 0;
    grades3.forEach(grade => sum += grade);
    return sum / grades3.length;
}

// Function to find highest grade
function findHighestGrade(grades3) {
    let highest = grades3[0];
    grades3.forEach(grade => {
        if (grade > highest) highest = grade;
    });
    return highest;
}

// Function to find lowest grade
function findLowestGrade(grades3) {
    let lowest = grades3[0];
    grades3.forEach(grade => {
        if (grade < lowest) lowest = grade;
    });
    return lowest;
}

// Function to count passing students
function countPassing(grades3, passingGrade = 70) {
    let count = 0;
    grades3.forEach(grade => {
        if (grade >= passingGrade) count++;
    });
    return count;
}

// Generate complete report
const average3 = calculateAverage(grades3);
const highest = findHighestGrade(grades3);
const lowest = findLowestGrade(grades3);
const passing = countPassing(grades3, 70);

console.log("=== GRADE REPORT ===");
console.log(`Average: ${average2.toFixed(2)}`);
console.log(`Highest: ${highest}`);
console.log(`Lowest: ${lowest}`);
console.log(`Passing students: ${passing} out of ${grades3.length}`);
