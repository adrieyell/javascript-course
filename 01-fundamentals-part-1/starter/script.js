// // JavaScript Fundamentals - Part 1
// // We'll write our code here!

// let js = "amazing";
// console.log(40 + 8 + 23 - 10);
// console.log(js);


// console.log("=== VARIABLES ===");

// let firstName = "Jonas";
// console.log(firstName);

// let age = 30;
// console.log(age);
// age = 50;
// console.log(age);

// const birthYear = 1991;
// console.log(birthYear);

// const PI = 3.1415;
// console.log(PI);

// var job = "programmer";
// job = "teacher";
// console.log(job);

// const country = "Philippines";
// const language = "Filipino";
// const population = 100;

// age = 21;
// age = 22; // this will change 😲

// console.log("=== DATA TYPES ===");

// // Number
// let id = 12345;
// console.log(id);
// console.log(typeof id);

// // String
// let lastName = "Agbayani";
// console.log(lastName);
// console.log(typeof lastName);

// // Boolean
// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);
// console.log(typeof javaScriptIsFun);

// // undefined
// let year;
// console.log(year);
// console.log(typeof year);

// let dynamicVariable = 40;
// console.log(dynamicVariable, typeof dynamicVariable);

// // change to a string
// dynamicVariable = "I am now a string!";
// console.log(dynamicVariable, typeof dynamicVariable)

// // change to boolean
// dynamicVariable = true;
// console.log(dynamicVariable, typeof dynamicVariable);

// Basic Operators = Math
// console.log("=== MATH OPERATORS ===");

// const  now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// console.log("Math operation");
// console.log("Addition: ", 10 + 5);
// console.log("Subtraction: ", 20 - 8);
// console.log("Multiplication: ", 4 * 7);
// console.log("Division: ", 15 / 3);
// console.log("Exponentiation: ", 2 ** 3);

// // Math with Strings!
// const firstName = "Jonas";
// const lastName = "Doe";
// console.log(firstName + " " + lastName);

// console.log("Hello " + "World" + "!");
// console.log("I am " + 21 + "years old");

// // Assignment Operators
// console.log("=== ASSIGNMENT OPERATORS ===");

// let x = 10 + 5;
// console.log("x starts as:", x);

// x += 10; 
// console.log("x starts as:", x);

// x *= 4;
// console.log("x starts as:", x);

// x /=2;
// console.log("x starts as:", x);

// x++;
// console.log("x starts as:", x);

// x--;
// console.log("x starts as:", x);

// // comparison operators
// console.log("=== COMPARISON OPERATORS ===");

// console.log("Age comparison: ");
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);
// console.log(ageJonas < 30);

// console.log("Number comparison");
// console.log(24 > 20);
// console.log(15 < 10);
// console.log(18 >=18);
// console.log(16 <= 15);

// const isFullAge = ageSarah >= 18;
// console.log("Sarah is an adult:", isFullAge);

// console.log("Complex Comparison");
// console.log(now - 1991 > now - 2018);

// let z, y;
// z = y = 25 - 10 - 5;
// console.log(z, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// console.log("== BMI ==");

// ////////////////////////////////////
// // Coding Challenge #1 - BMI Calculator

// // Test Data 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// // Your code here:
// // 1. Calculate BMIs
// const markBMI = massMark / heightMark ** 2;

// const johnBMI = massJohn / heightJohn ** 2

// // 2. Create markHigherBMI variable
// const markHigherBMI = (markBMI > johnBMI);

// // 3. Log results to console
// console.log("Mark BMI: ", markBMI);
// console.log("John BMI: ", johnBMI);
// console.log(markHigherBMI);

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);
// console.log(`I'm  ${2037 - 1991} years old`);
// console.log(`Math works: ${2 + 3} equals five`);

// // if else statement
// const age = 15;

// if (age >= 18){
//     console.log(`Sarah can start a driving license`);
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// console.log(Boolean(0)); // falsy value
// console.log(Boolean(undefined));  // falsy value
// console.log(Boolean("Jonas"));  // truthy value
// console.log(Boolean({})); // truthy value
// console.log(Boolean("")); // falsy value

// ////////////////////////////////////
// // Coding Challenge #2

// // Reuse your BMI calculation from Challenge #1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// // Your if/else statement here:
// if (BMIMark > BMIJohn){
//     console.log(`Mark's BMI is higher than John's!`);
// } else {
//     console.log("John's BMI is higher than Mark's!");
// }
// // Compare BMIs and create intelligent messages
// // Use template literals for beautiful output
// console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);

// Type Conversion and Coercion
// type conversion (manual)

const inputYear =  `1991`;
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof Nan);

console.log(String(23), 23);
console.log(typeof String(23));

// type coercion (automatic)
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");
console.log("23" * "2");

let n = "1" + 1; // 11
n = n - 1; // 10

console.log(2 + 3 + 4 + "5");
console.log("10" - "4" - "3" - 2 + "5"); // 15

////// Exercise 1: Conversion Detective

// Predict the output, the test:
console.log("5" + 2); // 52
console.log("5" - 2); // 3
console.log("5" * 2); // 10
console.log("5" / 2); // 2.5

// convert these explicitly:
const userAge = "25";
const userScore = 95;

// Convert userAge to a number
const ageNumber = Number(userAge);
console.log(ageNumber, typeof ageNumber);
// Convert userScore to a string
const scoreString = String(userScore);
console.log(scoreString, typeof scoreString);

////// Exercise 2: Fix the Bug
// This calculator has a bug - fix it!
const num1 = ("First number:"); // Returns string!
const num2 = ("Second number:"); // Returns string!
const sum = num1 + num2; // Bug: adds as strings!
console.log(`Sum: ${sum}`);

// Fix: Convert to numbers first
// Your code here...
const num1Converted = Number(num1);
const num2Converted = Number(num2);
const sumCorrected = num1Converted + num2Converted; 
console.log(`Sum: ${sumCorrected}`);

// Equality Operators: == vs. ===

const age = 18;
if (age === 18) console.log("You just became an adult! :D (strict)");
if (age == 18) console.log("You just became an adult! :D (loose)");

console.log("18" === 18); // false - different types
console.log("18" == 18); // true - coercion happens
console.log(18 === 18); // true - same type and value

// Why == can be dangerous
console.log("0" == 0); 
console.log(0 == false); 
console.log("0" == false); 
console.log(null == undefined); 

// Weird cases that cause bugs
console.log("" == 0); 
console.log("   " == 0); 

// Convert explicitly, then compare stritcly
const favourite = Number(("What's your favourite number?"));
console.log(favourite);

if(favourite === 23) {
    console.log("Cool! 23 is an aamzing number!");
} else if (favourite === 7) {
    console.log("7 is also a cool number!");
} else if (favourite === 9) {
    console.log("9 is also a cool number");
} else {
    console.log("Number is not 23, 7 or 9");
}

// Not equal operator
if (favourite !== 23) console.log("Why not 23?");

// Exercise 1: Equality Detective
// Test these comparisons - predict first, then run:
console.log(5 === "5"); // Your guess: false
console.log(5 == "5"); // Your guess: true
console.log(true === 1); // Your guess: false
console.log(true == 1); // Your guess: true
console.log(false === 0); // Your guess: false
console.log(false == 0); // Your guess: true

// Exercise 2: Fix the Login System
// This login system has bugs - fix them!
const username = ("Username:");
const password = ("Password:");

// Bugs: using == instead of ===
if (username == "admin" && password == "1234") {
  console.log("Welcome admin!");
} else {
  console.log("Access denied");
}

// Fix using strict equality
// Your code here...
if(username === "admin" && password === "1234") {
    console.log("Welcome admin!");
} else {
    console.log("Access denied");
}

// Logical Operators

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision); // AND: true both must be true
console.log(hasDriversLicense || hasGoodVision); // OR: true one must be true
console.log(!hasDriversLicense); // NOT: false, inverts the value

// Real-World Example
const isTired = false;
console.log(hasDriversLicense && hasGoodVision && !isTired);

if(hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone else should drive...");
}

// More complex scenarios
const isAge = 20;
const hasPermission = true;
const hasExperience = false;

// Can drive if: (age >= 18 OR has permission) AND has experience
if ((isAge >= 18 || hasPermission) && hasExperience) {
    console.log("Approved to drive!");
} else {
    console.log("Not approved to drive :(");
}

// Exercise 1: Club Entry System
// Create a club entry system with these rules:
// Entry allowed if: (age >= 21 AND hasID) OR isVIP

const ifAge = 19; // Try different values
const hasID = true; // Try different values
const isVIP = false; // Try different values

// Your logic here:
if (age >= 21 && hasID || isVIP) {
  console.log('Welcome to the club!');
} else {
 console.log('Sorry, you cannot enter');
}

// Exercise 2: Weather Advisor
// Create a weather advisor:
const temperature = 25; // Celsius
const isRaining = false;
const isWindy = true;

// Advice rules:
// Perfect day: temp 20-30 AND not raining AND not windy
// Good day: temp 15-35 AND not raining
// Stay inside: anything else

// Your code here...
if (temperature >= 20 && temperature <= 30 && !isRaining && !isWindy){
    console.log("It's a perfect day today!");
} else if (temperature >= 15 && temperature <= 35 && !isRaining){
    console.log("It's a good day today!");
} else {
    console.log("Stay inside today please!");
}

// The Conditional (Ternary) Operator
const thisAge = 23;

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
    if (thisAge >= 18) {
        drink2 = "wine";
    } else {
        drink2 = "water";
    }
console.log(drink2);

console.log(`I like to drink ${age >= 18? "wine" : "water"}`);

// When to use ternary vs if/else
// const score = 99;
// const isLoggedIn = true;
// const isPremium = false;

// const status = score >= 60 ? "passed" : "failed";
// const message = isLoggedIn ? "Welcome back!" : "Please log in";
// const discount = isPremium ? 0.2 : 0.1;

// if (score >= 90) {
//   console.log("Excellent!");
//   grade = "A";
//   bonus = true;
// } else if (score >= 80) {
//   console.log("Good job!");
//   grade = "B";
// } 

// Exercise 1: Status Messages
// Convert these if/else to ternary operators:

// 1. Login status
const isLoggedIn = true;
let welcomeMessage;
if (isLoggedIn) {
  welcomeMessage = "Welcome back!";
} else {
  welcomeMessage = "Please sign in";
}
// Ternary version: 
welcomeMessage = isLoggedIn ? "Welcome back!" : "Please sign in";

// 2. Price with discount
const isPremium = false;
let price;
if (isPremium) {
  price = 100 * 0.8; // 20% discount
} else {
  price = 100;
}
// Ternary version: 
price = isPremium ? 100 * 0.8 : 100;


// Exercise 2: Smart Reponses
// Create smart responses using ternary in template literals:
const score = 85;
const weather = "sunny";
const battery = 15; // percentage

// Create messages like:
// "Your score: 85 (Passed/Failed)"
// "Weather is sunny (Great for outdoor activities/Stay inside)"
// "Battery: 15% (Low battery warning/Battery OK)"

// Your code here...
const messageScore = `Your score: ${score} (${score >= 60 ? "Passed" : "Failed"})`;
const messageWeather = `Weather is ${weather} (${weather === "sunny" ? "Great for outdoor activities" : "Stay inside"})`;
const messageBattery = `Battery: ${battery}% (${battery <= 15 ? "Low battery warning" : "Battery OK"})`;

///// FINAL CHALLENGE
////////////////////////////////////
// Coding Challenge #4

const bill = 430; // Test with 275, 40, and 430

// Step 1: Create the tip calculation using ternary operator
// Rule: 15% if between 50-300, otherwise 20%
// Hint: bill >= 50 && bill <= 300

const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

// Step 2: Create beautiful output with template literal
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`); // Your template literal here);

// Expected outputs:
// Bill 275: "The bill was 275, the tip was 41.25, and the total value 316.25"
// Bill 40:  "The bill was 40, the tip was 8, and the total value 48"
// Bill 430: "The bill was 430, the tip was 86, and the total value 516"