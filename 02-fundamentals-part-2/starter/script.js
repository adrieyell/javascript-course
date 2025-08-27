console.log("Part 2: Functions ready!");

// Functions - Declarations and Expressions
function logger() {
    console.log("My name is Adrielle");
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

console.log(fruitProcessor(5, 3));

// Function expression
const calcAge = function (birthYear) {
    return 2025 - birthYear;
};

const age1 = calcAge(2003);
console.log(age1);

console.log(calcAge(1991));

function introduce(firstName, lastName, age) {
    const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old`;
    return introduction;
}

console.log(introduce("Adrielle", "Agbayani", 21));
console.log(introduce("John"));

function yearsUntilRetirement(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0) {
        return `${firstName} retires in ${retirement} years.`;
    } else {
        return `${firstName} has already retired.`;    
    }
}

console.log(yearsUntilRetirement(2003, "Adrielle"));


/// Function scope
const globalVar = "I am global";

function testScope(){
    const localVar = "I am local";
    console.log(globalVar);
    console.log(localVar);
}

testScope();
console.log(globalVar);
// console.log(localVar);

// Coding Challenge #1

// Function to calculate average scores
function calcAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

// Function to check winner
function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
    } else if (avgKoalas >= 2 * avgDolphins) {
        return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
    } else {
        return "No team wins...";
    }
}

// Test Data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(checkWinner(scoreDolphins, scoreKoalas));

// Test Data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(scoreDolphins, scoreKoalas));

