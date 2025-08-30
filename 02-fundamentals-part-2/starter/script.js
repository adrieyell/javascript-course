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

// const grades = [85, 92, 78, 90, 88];
// console.log(grades);

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const mixed = ['Jonas', 40, false, friends];
// console.log(mixed);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// // Accessing Array Elements
// console.log(friends[0]);
// console.log(friends[1]);

// console.log(friends.length)
// console.log(friends[friends.length - 1]);

// friends[1] = "Jay";
// console.log(friends);

// const calcAge = function (birthYear) {
//   return 2025 - birthYear;
// };

// const ages = [calcAge(2003), calcAge(1940), calcAge(1991)];
// console.log(ages);

// const newLength = friends.push("John");
// console.log(friends);
// console.log(newLength);

// friends.unshift("Mark");
// console.log(friends);

// // removing elements

// // remove last item from the list
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// // remove first item from the list
// const shifted = friends.shift();
// console.log(shifted);
// console.log(friends);

// // finding an element
// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Michael"));

// // includes
// console.log(friends.includes("Peter"));
// console.log(friends.includes("John"));

// // Array iterations
// for (let i = 0; i < friends.length; i++) {
//     console.log(friends[i]);
// }

// friends.forEach(
//     function(friend, index) {
//         console.log(`${index + 1} : ${friend}`);

//             }
// );

// friends.forEach((friend, index) => {
//      console.log(`${index + 1} : ${friend}`)
// } 
// );

// const grades2 = [85, 92, 78, 96, 88, 74];
// let total = 0;

// for (let i = 0; i < grades2.length; i++) {
//   total += grades2[i];
// }

// const average2 = total / grades2.length;
// // console.log(`Average grade: ${average.toFixed(2)}`);

// let passedCount = 0;
// grades2.forEach(grade => {
//     if (grade >= 70) passedCount++;
// });
// console.log(`${passedCount} out of ${grades2.length} students passed`);

// ////////////////////////////////////
// // Coding Challenge #2 - Student Grade Manager

// const grades3 = [78, 85, 92, 67, 88, 95, 73, 82];

// // Function to Calculate Average
// function calculateAverage(grades3) {
//     let sum = 0;
//     grades3.forEach(grade => sum += grade);
//     return sum / grades3.length;
// }

// // Function to find highest grade
// function findHighestGrade(grades3) {
//     let highest = grades3[0];
//     grades3.forEach(grade => {
//         if (grade > highest) highest = grade;
//     });
//     return highest;
// }

// // Function to find lowest grade
// function findLowestGrade(grades3) {
//     let lowest = grades3[0];
//     grades3.forEach(grade => {
//         if (grade < lowest) lowest = grade;
//     });
//     return lowest;
// }

// // Function to count passing students
// function countPassing(grades3, passingGrade = 70) {
//     let count = 0;
//     grades3.forEach(grade => {
//         if (grade >= passingGrade) count++;
//     });
//     return count;
// }

// // Generate complete report
// const average3 = calculateAverage(grades3);
// const highest = findHighestGrade(grades3);
// const lowest = findLowestGrade(grades3);
// const passing = countPassing(grades3, 70);

// console.log("=== GRADE REPORT ===");
// console.log(`Average: ${average2.toFixed(2)}`);
// console.log(`Highest: ${highest}`);
// console.log(`Lowest: ${lowest}`);
// console.log(`Passing students: ${passing} out of ${grades3.length}`);

// Array Problem
const jonasArray = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"],
];

console.log(jonasArray[0]);
console.log(jonasArray[1]);
console.log(jonasArray[2]);

// Objects - Creation with Object Literal Syntax
console.log("=== OBJECTS ===");

const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    age: 2037 - 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"],
};

console.log(jonas);

// Array Approact (hard to understand)
const jonasArray2 = [
    "Jonas",
    "Schmedtmann",
    46,
    "teacher",
    ["Michael", "Peter", "Steven"],
];

// Object approach (self-documenting, easy to understand)
const jonasObject = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    age: 46,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"],
};

// Property Access Methods

// Dot notation (most common)
console.log(jonas.firstName);
console.log(jonas.lastName);
console.log(jonas.age);
console.log(jonas.job);
console.log(jonas.friends);

// Bracket notation (more flexible)
console.log(jonas["firstName"]);
console.log(jonas["lastName"]);
console.log(jonas["age"]);

// Bracket notation with expressions - compute property names
const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// Property modification and addition
// Modifying existing properties - both notations work for modification
jonas.job = "programmer";
jonas["age"] = 30;
console.log(jonas);

// Adding new properties - objects can grow - add properties after creation
jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

// Exercise 1: Personal Object
// Create your own objects:
// 1. Create a 'book' object with title, author, pages, and isRead properties
// 2. Create a 'playlist' object with name, creator, songs array, and genre
// 3. Access and log different properties using both dot and bracket notation
// 4. Add a new property to each object
// 5. Modify an existing property in each object

// Your code here...

const book = {
  title: "Tuesdays with Morrie",
  author: "Mitch Albom",
  pages: 192,
  isRead: true,
};

const playlist = {
  name: "Discover Weekly",
  creator: "Adrielle",
  songs: ["Moonlight - Lingling Kwong", "Take a Chance with Me - NIKI", "Overpass Graffiti - Ed Sheeran"],
  genre: "Pop & Melo",
};

// Practice accessing properties
console.log(book.title);
console.log(playlist["creator"]);
console.log(playlist.songs);
console.log(book["isRead"]);

// Add new properties
book.publicationDate = "August 18, 1997";
playlist.description = "New music every week. All just for YOU.";

console.log(book);
console.log(playlist);

// Modify existing properties
book.pages = 300;
playlist["genre"] = "Pop, Melo, RnB";

console.log(book);
console.log(playlist);

// Object vs Arrays

// Use arrays for: ordered, indexed data - think lists
const listofYears = [1997, 2003, 1984, 2020];
const shoppingList = ["apples", "bananas", "bread", "milk", "bread"];
const testScores = [85, 92, 78, 96];

// Use objects for: Named, descriptive data - think entities
const person = {
    name: "Jonas",
    age: 46,
    occupation : "teacher",
};

const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    color: "blue",
};

// Combining objects and arrays
// objects can contain arrays, arrays can contain objects
const student = {
    name: "Sarah",
    grades: [85, 92, 78],
    address: {
        // object inside object
        street: "123 Main St",
        city: "New York",
    },
};

console.log(student)
console.log(student.grades);
console.log(student.address.city);

// Object Methods
const jonas2 = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    birthYear: 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"],
    hasDriverLicense: true,

    // Method - function inside object
    calcAge: function(birthYear) {
        return 2037 - birthYear;
    },
};

console.log(jonas2.calcAge(1991));
console.log(jonas2.calcAge(jonas2.birthYear));

// Method using 'this' keyword
const jonasImproved = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    birthYear: 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"],
    hasDriverLicense: true,

    calcAge: function() {
        console.log(this);
        return 2037 - this.birthYear;
    },
};

console.log(jonasImproved.calcAge());

// Advanced: Storing calculated values
const jonasAdvanced = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    birthYear: 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"],
    hasDriverLicense: true,

    calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriverLicense ? "a" : "no"} driver's license.`;
    },
}

console.log(jonasAdvanced.calcAge());
console.log(jonasAdvanced.age);
console.log(jonasAdvanced.getSummary());

// Exercise 2: Calculator Object
// Create a 'calculator' object:
// 1. Properties: num1, num2, operator
// 2. Methods: add(), subtract(), multiply(), divide()
// 3. Method: calculate() that uses the operator to perform the right operation
// 4. Method: getResult() that returns a formatted string
// 5. Use 'this' to access the object's own properties

const calculator = {
  num1: 10,
  num2: 5,
  operator: "+",

  add: function () {
    return this.num1 + this.num2;
  },

  subtract: function () {
    return this.num1 - this.num2;
  },

  multiply: function () {
    return this.num1 * this.num2;
  },

  divide: function () {
    return this.num1 / this.num2;
  },

  calculate: function () {
    // Use this.operator to determine which method to call
    // Hint: if (this.operator === '+') return this.add();
    this.result = 0;
    if (this.operator === "+") {
        this.result = this.add();
    } else if (this.operator === "-") {
        this.result = this.subtract();
    } else if (this.operator === "*") {
        this.result = this.multiply();
    } else if (this.operator === "/") {
        this.result = this.divide();
    } else {
        return "Invalid operator";
    }
    return this.result;
  },

  getResult: function () {
    return `${this.num1} ${this.operator} ${this.num2} = ${this.result}`;
  },
};

// Test your calculator
console.log(calculator.calculate());
console.log(calculator.getResult());

// Coding Challenge #3: User Profile System

const user = {
  firstName: "Sarah",
  lastName: "Johnson",
  birthYear: 1995,
  location: "New York",
  interests: ["photography", "travel", "coding"],
  friends: [
    { name: "Michael", status: "active" },
    { name: "Emma", status: "inactive" },
    { name: "David", status: "active" },
  ],
  isActive: true,

  // Calculate age method
  calcAge: function () {
    // Calculate age and store as this.age
    // Hint: Use new Date().getFullYear() for current year
    // Your code here
    this.age = new Date().getFullYear() - this.birthYear;
    return this.age;
  },

  // Add friend method
  addFriend: function (name, status = "active") {
    // Add new friend object to this.friends array
    // Return the new length of friends array
    // Your code here
    this.friends.push({ name: name, status: status });
    return this.friends.length;
  },

  // Get active friends count
  getActiveFriends: function () {
    // Filter friends array to count only active friends
    // Hint: use this.friends.filter()
    // Your code here
    this.activeFriendsCount = this.friends.filter(friend => friend.status === "active").length;
    return this.activeFriendsCount;
  },

  // Toggle active status
  toggleStatus: function () {
    // Switch this.isActive between true and false
    // Return the new status
    // Your code here
    this.isActive = !this.isActive;
    return this.isActive;
  },

  // Generate profile summary
  getSummary: function () {
    // Create a social media style profile summary
    // Include: name, age, location, status, friend counts, interests
    // Use template literals for nice formatting
    // Your code here
    this.calcAge();
    this.getActiveFriends();
    return `${this.firstName} ${this.lastName}, age ${this.age}, from ${this.location}. Status: ${this.isActive ? "Active" : "Inactive"}. Interests: ${this.interests.join(", ")}. Friends: ${this.friends.length} total, ${this.activeFriendsCount} active.`;
  },
};

// Test your user profile system
console.log(user.getSummary());
user.addFriend("Alex", "active");
user.toggleStatus();
console.log(`\nAfter updates:`);
console.log(user.getSummary());




