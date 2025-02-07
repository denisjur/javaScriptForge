//Tdot vs. Bracket Notation:
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);
// Using Dot Notation:
console.log(jonas.lastName);

//Using Bracket Notation:

console.log(jonas["lastName"]);

const nameKey = "Name"; //We can use this variable to get both first and last Name.
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Jonas. Choose between firstName, lastName, age, job, and friends"
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong recuest! Choose between firstName, lastName, age, job, and friends"
  );
}

//How to add properties to the objects with dot and brackets notation:
jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";

console.log(jonas);

// Now a small challange for this:

/*
Now I have a small challage for you:
Write this sentence in a dynamic way:

"Jonas has 3 friends, and his best friend is called michael."
*/

console.log(
  `${jonas["firstName"]} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`
);

//Exercise Dot vs bracket Notation
const myCountry = {
  country: "Germany",
  capital: "Berlin",
  language: "deutsch",
  population: 83,
  neighbours: ["France", "Belgium", "Austria"],
};

console.log(`${myCountry.country} has ${myCountry.population} Million ${myCountry.language}-speaking people, 
    ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);
myCountry.population += 2; // 2 Hinzufügen zu population mit Dot Notation
console.log(myCountry.population);

myCountry["population"] -= 2; // 2 Abziehen von popukation mit bracket Notation
console.log(myCountry["population"]);

// Object Methods:
/*Objects can like Arrays hold different type of data.
They can old even arrays and objects. But now we can take it further:



Functions are only another type of value => we can create a key value pair in which the value is a function => Meaning: We can add a function to an object:

Let us see how:
*/

const jonas2 = {
  firstName: "Jonas",
  lastName: "Schmedmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // //Versiunea 1 cum sa o faci:
  // calcAge: function (birthYear) {
  //     return 2037 - birthYear;
  // }
  // //Versiunea 2 cum sa o faci mai efficient:
  // calcAge: function () {
  // //console.log(this); // <== doar ca sa intelegi "this"
  //     return 2037 - this.birthYear;
  // }

  //Versiunea 3: Cel mai efficieint:
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
};

console.log(jonas2.calcAge()); // Dot Notation

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

//Small Challange:
/* Write a method called getSummary. This method should return a string,
which should kind of summarize the data about Jonas.

Example: "Jonas is a 46- year old teacher, and he has a drivers license."
If it is false he would say: "Jonas is a 46 year old theacher, and he has no dirvers license."

Iwant you to actually write a method on your own.
*/
const jonas3 = {
  firstName: "Jonas",
  lastName: "Schmedmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    if (this.hasDriversLicense) {
      this.summary = `${this.firstName} is a ${this.calcAge()}-year old ${
        this.job
      }, 
        and has a drivers license.`;
      return this.summary;
    } else {
      this.summary = `${this.firstName} is a ${this.calcAge()}-year old ${
        this.job
      }, 
        and does not have a drivers license.`;
      return this.summary;
    }
  },

  // There is another more easy posibility:
  getSummary2: function () {
    return `${this.lastName} is a ${this.calcAge()}-year old '${
      this.job
    }, and he 
        has ${this.hasDriversLicense ? "a" : "no"} drivers license.`;
  },
};

console.log(jonas3.getSummary());
console.log(jonas3.getSummary2());

// Exercise Object:
/* 
1. Add a method called describe to the myCountry object. This method will log a string 
to the console, similar to the string logged in the previous assignment, but this time 
using the 'this' keyword.

2. Call the describe method.

3. Add a method called checkIsland to the myCountry object. This method will set 
a new property on the object, called isIsland. isIsland will be true if there are 
no neighbouring countries, and false if there are. Use the ternary operator to set 
the property.
*/

const myCountry2 = {
  country: "Germany",
  capital: "Berlin",
  language: "deutsch",
  population: 83,
  neighbours: ["France", "Belgium", "Austria"],
  describe: function () {
    return console.log(`${this.country} has ${this.population} Million ${this.language}-speaking people, 
${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};

myCountry2.describe();
myCountry2.checkIsland();
console.log(myCountry2);

// Challange 3 Exercise:
/* Let's go back to Mark and John comparing their BMIs!

This time, let's use objects to implement the calculations! Remember: BMI = 
mass / (height * height) (mass in kg and height in meters).

Your tasks:

For each of them, create an object with properties for their full name, mass, 
and height (Mark Miller and John Smith). Name these objects as mark and john, 
and their properties exactly as fullName, mass and height.

Create a calcBMI method on each object to calculate the BMI (the same method on 
both objects). Assign the BMI value to a property called bmi (lowercase), and also 
return it from the method.

Log to the console who has the higher BMI, together with the full name and 
the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's 
(23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 
1.95 m tall.


👋 OPTIONAL: You can watch my solution in video format in the next lecture


IMPORTANT: The ** operator is not supported in this editor. 
Please make sure to use exactly this formula mass / (height * height), 
and not this one mass / (height ** 2).
*/

/* Write your code below. Good luck! 🙂 */

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than 
        ${john.fullName}'s BMI (${john.bmi})`);
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than 
        ${mark.fullName}'s BMI (${mark.bmi})`);
}

// The Uteration´: The for Loop

console.log("Lifting weights repetition 1");
console.log("Lifting weights repetition 2");
console.log("Lifting weights repetition 3");
console.log("Lifting weights repetition 4");
console.log("Lifting weights repetition 5");
console.log("Lifting weights repetition 6");
console.log("Lifting weights repetition 7");
console.log("Lifting weights repetition 8");
console.log("Lifting weights repetition 9");
console.log("Lifting weights repetition 10");
//Insteas of doing this, do this:
//For loop keeps running while condition is TRUE.
// for (let rep = 1; rep <= 10; rep = rep + 1)
/*But we can write this much easier with the operator we learned 
    some lectures ago: ++ meaning: increasing by one*/
for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
}

//Exercise for Loop:
/* There are elections in your country! in a small town, there are only 
50 voters. Use a for loop to simulate the 50 people voting, by logging a 
string like this to the console (for numbers 1 to 50): 'Voter number 1 
is currently voting'.*/

for (let voter = 1; voter <= 50; voter++) {
  console.log(`Voter number ${voter} is currently voting`);
}

// 32. Looping Arrays, Breaking and Continuing

const jonasArray = [
  "jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  true,
  ["Michael", "Peter", "Steven"], // <= An Array in an Array
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i], typeof jonasArray[i]);

  // Filling Types arrays:
  // types [i] = typeof jonasArray [i];
  types.push(typeof jonasArray[i]); //here ist is important to push it at the end, not beginning!!!
}

console.log(types);

// new examples for looping arrays:
/*We create an array, with birthyears and we want
    to calculate the ages and then store them in a new array! */
const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

/*To finish let us learn about 2  important  statements for loops.
That is the CONTIUNE  nad BREAK statement.*/

//Continue =   exit the current iteration of the loop and continue to the next one:
console.log("---LIST ONLY STRINGS---");
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== "string") continue;

  console.log(jonasArray[i], typeof jonasArray[i]);
}
//Break = Completely terminate (beenden) the whole loop.
console.log("---AFTER THE FIRST NUMBER IS FOUND, NOTHING ELSE IS PRINTED---");
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === "number") break;

  console.log(jonasArray[i], typeof jonasArray[i]);
}

// Exercise:  Looping Arrays, Breaking and Continuing

/*
    1. Let's bring back the populations array from a previous assignment.

    2. Use a for loop to compute an array called percentages2 containing the percentages 
    of the world population for the 4 population values. Use the function percentageWOrld1 
    that you created earlier.

    3. Confirm that percentages2 contains exactly the same values as the percentages array 
    that we created manually in the previous assignment, and reflect on how much better this 
    solution is.
    */

const percentageOfWorld1 = function (population) {
  return (population / 7900) * 100;
};

const populations = [10, 1441, 332, 83];
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  const perc = percentageOfWorld1(populations[i]);
  percentages2.push(perc);
}

console.log(percentages2);

// 48. Looping Backwards and Loops in Loops
/* Let us loop over this array backwards: So we basically want to log the elemtnes 
in the opposite direction to the console */

const jonas20 = [
  "Jonas",
  "Schmedmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];
// Usualy we looped from the beginning, so from 0, 1, 2, 3, 4 .... Now we do it backwards

for (let i = jonas20.length - 1; i >= 0; i--) {
  console.log(i, jonas20[i]);
}

//Creating a loop inside a loop:

// To do this let us use the gym example:
for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
}

/* 
Now let us say we have 3  different exercises and we want to repeat the each 5 times.
This means a total of 15 repetitions, five for each of the 3 exercises.
To lock all of these exercises we will need a loop inside a loop. */

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise} Lifting weight repetition 🏋️‍♂️ ${rep}`);
  }
}

//Exercise: Looping Backwards and Loops in Loops

/*
1. Store this array of arrays into a variable called listOfNeighbours:

[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

2. Log only the neighbouring countries to the console, one by one, not the entire arrays. 
Log a string like 'Neighbour: Canada' for each country.

You will need a loop inside a loop for this. This is actually a bit tricky, 
so don't worry if it's too difficult for you! But you can still try to figure 
this out anyway 😉
*/

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let country = 0; country < listOfNeighbours[i].length; country++) {
    console.log(`Neighbour: ${listOfNeighbours[i][country]}`);
  }
}

// 34. The While Loop
// We will keep this for loop for comparison purpose:
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
}

// The while loop:
let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
  rep++;
}
/*The while loop is more versatile (vielseitig) than the for loop!
So it can be used in a larger variaty of situations.
 Because it does not really need a counter! We needed the counter 
 for this specific usecase until now. But what the while loop really 
 needs is the condition, which needs to stay true for it to keep running. 
The condition does not need to be related to the counter at all!
Sometimes we need this.

Example:
We are basically gonna roll a dice, and then keep rolling the dice until we 
hit a 6. Then we want the dice to stop.
Essencially we want to keept running the loop while the rolled dice 
is different from six.

Now we do not know how many times the loop should run. So we do not need a counter
varibale. This is exactly when we use the while loop.
*/

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;

  if (dice === 6) console.log(`End of the loop. You rolled a ${dice}`);
}

//Exercise: The while Loop

/*
Recreate the challenge from the lecture Looping Arrays, Breaking and Continuing, 
but this time using a while loop (call the array percentages3).

Reflect on what solution you like better for this task: the for loop or the 
while loop?

*/

const listOfNeighbours2 = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours2.length; i++) {
  for (let country = 0; country < listOfNeighbours2[i].length; country++) {
    console.log(`Neighbour: ${listOfNeighbours2[i][country]}`);
  }
}

let i = 0;
while (i < listOfNeighbours2.length) {
  let country = 0;
  while (country < listOfNeighbours2[i].length) {
    console.log(`Neighbour2: ${listOfNeighbours2[i][country]}`);
    country++;
  }
  i++;
}

// Exercise: Use the while loop:

const populations5 = [10, 1441, 332, 83];

const percentageOfWorld5 = function (population) {
  return (population / 7900) * 100;
};

const percentages5 = [
  percentageOfWorld5(populations5[0]),
  percentageOfWorld5(populations5[1]),
  percentageOfWorld5(populations5[2]),
  percentageOfWorld5(populations5[3]),
];

console.log(percentages5);

const percentages3 = [];

let b = 0;
while (b < percentages5.length) {
  const perc = percentageOfWorld5(populations5[b]);
  percentages3.push(perc);
  b++;
}

console.log(percentages3);

// CHALLANGE Nr. 4

/*
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:

1. Create an array called bills containing all 10 test bill values.

2. Create empty arrays for the tips and the totals (tips and totals)

3. Use the calcTip function we wrote before (included in the starter code) 
to calculate tips and total values (bill + tip) for every bill value in 
the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.

BONUS:

Write a function calcAverage which takes an array called arr as an argument. 
This function calculates the average of all numbers in the given array. This 
is a DIFFICULT challenge (we haven't done this before)! Here is how to solve 
it if you feel like it:
//

1. First, you will need to add up all values in the array. To do the addition, 
start by creating a variable sum that starts at 0. Then loop over the array 
using a for loop. In each iteration, add the current value to the sum variable. 
This way, by the end of the loop, you have all values added together.

2. To calculate the average, divide the sum you calculated before by the length of 
the array (because that's the number of elements).

3. Call the function with the totals array.


👋 OPTIONAL: You can watch my solution in video format in the next lecture
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]); // We can do this because every iteration a new tip is created. Not mutated!
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

// BONUS:

// Write a function calcAverage which takes an array called arr as an argument.
// This function calculates the average of all numbers in the given array. This
// is a DIFFICULT challenge (we haven't done this before)! Here is how to solve
// it if you feel like it:

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // =>   shortform for: sum = sum + arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage(totals));

// 1. First, you will need to add up all values in the array. To do the addition,
// start by creating a variable sum that starts at 0. Then loop over the array
// using a for loop. In each iteration, add the current value to the sum variable.
// This way, by the end of the loop, you have all values added together.

// 2. To calculate the average, divide the sum you calculated before by the length of
// the array (because that's the number of elements).

// 3. Call the function with the totals array.
