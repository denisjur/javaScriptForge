"use strict";

// Exercise Arrays:
    const worldPopulation = 7900;

    function percentageOfWorld1(population) {
    const percentageFormula = (population / 7900) * 100;
    return percentageFormula;
    }

    /*C
        1. reate an array containing 4 population values of 4 countries of your choice. 
        You may use the values you have been using previously. Store this array into a 
        variable called populations.
        2. Log to the console whether the array has 4 elements or not (true or false).
        3. Create an array called percentages containing the percentages of t
        he world population for these 4 population values. Use the function percentageOfWorld1 
        that you created earlier to compute the 4 percentage values.

    */
    const populations = [83, 10, 1441, 332];

    if (populations.length === 4) {
    console.log(true);
    } else {
    console.log(false);
    }

    console.log(populations.length === 4);

    const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3]),
    ];

console.log(percentages);

// Basic Array Operations:

    // Method called Push: Adds element to the end of an array:

    const friends = ["Michael", "Steven", "Peter"];

    //ADDING ELEMENTS:
    const newLength = friends.push("Jay"); // => Add an element to the array
    console.log(friends);
    console.log(newLength);

    friends.unshift("John"); // <= Adds an element at the beggining positions of the array.
    console.log(friends);

    // Removing Elements:
    friends.pop(); //Removes last Element from the Array. Here there is no info neded to take out the last element.
    const popped = friends.pop();
    console.log(popped);
    console.log(friends);

    friends.shift(); // <= Remove the first Argument.
    console.log(friends);

    console.log(friends.indexOf("Steven")); // <= shwos in which position an element is
    console.log(friends.indexOf("Bob"));

    friends.push(23);
    console.log(friends.includes(23));
    console.log(friends.includes("Steven")); //
    console.log(friends.includes("Bob"));

    if (friends.includes("Steven")) {
    console.log("You have a friend called Steven");
    }


// Basic Array Operations (Methods):
/* 
    1) Create an array containing all the neighbouring countries of a country of your choice. 
    Choose a country which has at least 2 or 3 neighbours. Store the array into a variable 
    called neighbours.

    2) At some point, a new country called 'Utopia' is created in the neighbourhood of your 
    selected country, so add it to the end of the neighbours array.

    3) Unfortunately, after some time the new country is dissolved, so remove it from the end 
    of the array.

    4) If the neighbours array does not include the country 'Germany', log to the console: 
    'Probably not a central european country :D'.

    5) Change the name of one of your neighbouring countries. To do that, find the index 
    of the country in the neighbours array, and then use that index to change the array 
    at that index position. For example, you can search for 'Sweden' in the array, and 
    then replace it with 'Republic of Sweden'.
    */

    const neighbours = ["France", "Belgium", "Austria"];

    neighbours.push("Utopia");
    console.log(neighbours);

    neighbours.pop("Utopia");
    console.log(neighbours);

    if (!neighbours.includes("Germany")) {
        console.log("Probably not a central european country :D");
    }

    neighbours[neighbours.indexOf("Austria")] = "Republic of Austria";
    console.log(neighbours);



//Array Coding Challange:
    /*Steven wants you to improve his tip calculator, using the same rules as before — 
    tip 15% of the bill if the bill value is between 50 and 300, and 
    if the value is different, the tip is 20%.

    Your tasks:

    1. Write a function calcTip that takes any bill value as an input and returns the 
    corresponding tip, calculated based on the rules above (you can check out the code 
    from the first tip calculator challenge if you need to). Use the function type you 
    like the most. Test the function using a bill value of 100.

    2. And now let's use arrays! So, create an array called bills containing the test data below.

    3. Create an array called tips containing the tip value for each bill, calculated from 
    the function you created before.

    4. BONUS: Create an array totals containing the total values, so the bill + tip.

    TEST DATA: 125, 555, and 44.
    */
        const calcTip = function (billValue) {
            if (billValue >= 50 && billValue <=300) {
                const billTip = billValue *0.15;
                return billTip;
            } else {
                const billTip =billValue *0.20;
                return billTip;
            }
        }

        console.log(calcTip(100));

        //now let us use Arrays:
        const bills = [125, 555, 44];
        console.log(bills);

        const tips = [calcTip(125), calcTip(555), calcTip(44)];
        console.log(tips);

        const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
        console.log(total);

//Objects:
    //Recap: This is an Array:
    const jonasArray = [
        "jonas",
        "Schmedtmann",
        2037 - 1991,
        "teacher",
        ["Michael", "Peter", "Steven"], // <= An Array in an Array
        ];
    
        //This is an object
        const jonas = {
            firstName: "Jonas",
            lastName: "Schmedmann",
            age: 2037 - 1991,
            job: "teacher",
            friends: ["Michael", "Peter", "Steven"]
        };


//Objects Exercirses:
/* Create an object called myCountry for a country of your choice, containing properties 
country, capital, language, population and neighbours (an array like we used in previous assignments).*/
    const myCountry = {
        country: "Germany",
        capital: "Berlin",
        language: "deutsch",
        population: 83,
        neighbours: ["France", "Belgium", "Austria"]
    };
