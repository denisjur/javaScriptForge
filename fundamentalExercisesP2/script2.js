'use strict';

// Functions calling other Functions:

    /* Let us now assume that the Fruit machine or fruit Processor, we build before, needs, 
    before making the juice, another machine that cuts the fruit into smaller pieces:*/

    // Fruit Cutting Machine:
    function cutFruitPieces (fruit) {
        return fruit * 4; //It cuts one apple into 4 pieces.
    }
    //Fruit Machine:
    function fruitProcessor (apples, oranges) {
        const applePieces = cutFruitPieces (apples);
        const orangePieces = cutFruitPieces (oranges);

        const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges.`;
        return juice; 
    } 

    const appleJuice = fruitProcessor (2, 3);
    console. log (appleJuice);

        /*New Exercise: Functions Calling Other Functions:
        Create a function called describePopulation. Use the function type you like the most. 
        This function takes in two arguments: country and population, and returns a strings 
        like this: 'China has 1441 million people, which is about 18.2% of the world'.
        To calculate the percentage, describePopulation calls the percentageOfWorld1 you 
        created earlier.
        Call describePopulation with data for 3 countries of your choice.

            //Previous Exercise: Functions 

            /*The world population is 7900 million people. 
            Create a function declaration called percentageOfWorld1 which receives 
            a population value, and returns the percentage of the world population 
            that the given population represents. For example, China has 1441 million 
             people, so it's about 18.2% of the world population.*/
                            
            // Declaration Fucntion:
            const worldPopulation = 7900

            function percentageOfWorld1 (population) {
                const percentageFormula = (population / 7900) * 100;
                return percentageFormula;
            }
            
            //Function calling other Functions
            const describePopulation = function (country, population) {
                const percentage = percentageOfWorld1(population);
                const descriptionCountry = `${country} has ${population} million people, which is about 
                ${percentage}%
                of the world.`;
                return descriptionCountry;
                            
            }

            const percGermany = describePopulation("Germany", 83);
            const percPortugal1 = describePopulation("Portugal", 10);
            const percChina1 = describePopulation("China", 1441);
            const percUSA1 = describePopulation("USA", 332);        
            console.log(percGermany, percChina1, percPortugal1, percUSA1);

    
    //Reviewing Functions:
            const calcAge = function (year) {
                return 2037 - year;
            }


        const yearsUntilRetirement = function (birthYear, firstName) {
        const age = calcAge(birthYear);
        const retirement = 65 - age;

            if(retirement > 0) {
                console.log(`${firstName} retires in ${retirement} years`);
                return retirement;
            } else {
                console.log(`${firstName} has  already retired`) 
                return -1;
            }
         }
        
         console.log(yearsUntilRetirement(191, "Jonas"));

    /* CHALLENGE Functions:
    Back to the two gymnastics teams, the Dolphins and the Koalas! There is a 
    new gymnastics discipline, which works differently.
    Each team competes 3 times, and then the average of the 3 scores is calculated 
    (so one average score per team).
    A team only wins if it has at least double the average score of the other team. 
    Otherwise, no team wins!


    Your tasks:

    1. Create an arrow function calcAverage to calculate the average of 3 scores. 
    This function should have three parameters and return a single number 
    (the average score).
    2. Create two new variables — scoreDolphins and scoreKoalas, and assign the 
    value returned from the calcAverage function to them (you will need to call 
    this function, and pass scores as arguments).
    3. Create a function checkWinner that takes the average score of each team as 
    parameters (avgDolphins and avgKoalas), and then logs the winner to the 
    console, together with the victory points, according to the rule above. 
    Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of 
    hard-coded values).
    4. Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.
    5. Ignore draws this time. Instead, log No team wins... 
    to the console if there is no winner.

    TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

    TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.
    */

    const teamK = "Koalas";
    const teamD = "Dolphins";

   const calcAverage = (score1, score2, score3) => {
    const averageScore = (score1 + score2 + score3) / 3;
    return averageScore;
   }
   
    const scoreDolphins = calcAverage(44, 23, 71);
    const scoreKoalas = calcAverage(65, 54, 49);
    console.log(scoreDolphins, scoreKoalas);
   

   const checkWinner = function (avgDoplhins, avgKoalas) {
    if (avgDoplhins >= avgKoalas * 2) {
        console.log(`Dolphins win 🏆 (${scoreDolphins} vs. ${scoreKoalas})`)

        
    } else if (avgKoalas >= avgDoplhins * 2) {
        console.log(`Koalas win 🏆 (${scoreKoalas} vs. ${scoreDolphins})`)

        
    } else {
        const noWinnerText = "No team wins...";
        console.log("No team wins");
       }
   } 

    checkWinner(scoreDolphins,scoreKoalas);




//Arrays
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 ="Peter";


    const friends = ["Michael", "Steven", "Peter"];
    console.log(friends);

    const years = new Array (1991, 1984, 2008, 2020);

    console.log(friends[0]);
    console. log(friends[2]);

    console.log(friends.length);

    /*If you want the last elemetn of an array, you need to subtract -1, because the positoning
    does not beginn with 1, but with 0 */
    console. log(friends[friends. length -1]);

    // If we are not friends with Peter anaymore, we can symply exchange friends using [] as well: 
        friends [2] = "Jay";
        console.log(friends);
    //  Now Jay is our friend, not Peter.

    //Arrays with different Types of Data:
    const firstName = "Jonas";
    const jonas = [firstName, "Schedmann", 2037 - 1991, "teacher", friends];

    console.log(jonas);

    // Exercise: Let us say we have an array of birthyears. Then we want to calculate the ages for some of them.
    const calcAge5 = function (birthYea) {
        return 2037 - birthYea
    }

    const years5 = [1990, 1967, 2002, 2010, 2018];

    /* And now we will be able to use the calcAge function and then store the results of calculationg the ages
    for some of these years into a new Array.
    */
    
        //How to do it:

        const age5 = calcAge5(years5 [0]);
        const age6 = calcAge5(years5 [1]);
        const age9 = calcAge5(years5 [years5.length -1]);
    
        console.log(age5, age6, age9);
    
    /*We can even take it a little bit further: Since we started with an Arry, 
    it is usually a good idea to end up with an new Array! :
    So let us create a new array: */
    const ages5 = [calcAge5(years5 [0]), calcAge5(years5 [1]), 
    calcAge5(years5 [years5.length -1])];
    console.log(ages5);






