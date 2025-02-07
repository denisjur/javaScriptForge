'use strict';

       /* let hasDriversLicense = false;
        const passTest = true;

        So we basically want the scenario, that if the person gets the test, the
        variable hasDriversLicense will change to true as well:
        if (passTest) hasDriverLicense = true;
        if (hasDriversLicense) console. log("I can drive");

        const interface = "Audio" */


//Funcitons:
/*Those are one of the most essential concepts in the language.

What are Functions? In the most simple form: A Function is simply a piece of code that we can reuse over and over again in our code! It is a little bit like a variable, but for whole chunks of code.

So remember: A variable holds VALUE. 
			BUT a Fuction can hold one or more complite LINES of CODE!
			
Let's declare our very first function.*/

        //We named our functuion logger, because it will simply log something to the console.

        function logger () { // <= {All the code that is writen here in the curly braces} is called Function buddy.
            console. log("My Name is Jonas");
        }

        /* We created aFunction and now we can use it as many times as we want.
        To use the function again and again, whenever we need it, we simply 
        write the name of the function followed by a parenthisis and that is
        actually it: */

        logger(); // <= this is called invoking, running or calling the function
        logger();
        logger();
        logger();
        // Now everytime we call the function, the code inside will be executed


            /*Usually when writing Funcitons we also pass Data into Functions and aditionally a function 
            can also return data as well, which means to give us data back. that we then can use for smth else.
            So a Function can also  recieve data and return it back.
            You can also think about functions like machines: Imagine the Function as a food processor.
            You put food in it. The Function does something to the food and gives it back to modified.*/

            //Example: 
            /*Every Function has Parameters. They are like variables that are specific only for this Function.
            They then get defined once we call the function. Let us give  this function 2 parameters: 
            apples and oranges.
            */
            function fruitProcessor(apples, oranges) {
                console. log (apples, oranges); // <= We use the parameters like they were variables 
                                                // inside the function.
                const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
                return juice; //With this we can return any value from the function!!!
                // The returned value can then be used anywhere later in our code!!!
            } 

            const appleJuice = fruitProcessor (5, 0);
            console. log (appleJuice);

            //Now with the function we could use different values and get different outputs:

            const appleOrangeJuice = fruitProcessor(2, 4);
            console. log (appleOrangeJuice);


            
                        /* Exercise Functions: 
                        1. Write a function called describeCountry which takes three parameters: 
                        country, population and capitalCity. 
                        Based on this input, the function returns a string with this format: 
                        'Finland has 6 million people and its capital city is Helsinki'.
                        
                        2. Call this function 3 times, with input data for 3 different countries. 
                        Store the returned values in 3 different variables, and log them to the console.
                        */
                        function describeCountry (country, population, capitalCity) {
                            const descMyCountry = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
                            return descMyCountry;
                        }

                        const descPortugal = describeCountry('Portugal', 10, 'Lisbon');
                        const descGermany = describeCountry('Germany', 83, 'Berlin');
                        const descFinland = describeCountry('Finland', 6, 'Helsinki');

                        console.log(descPortugal, descGermany,  descFinland);



            //Function Declaration vs. Expressions:

                //Function Declaraion:
                    function calcAge1 (birthYear) {
                        const age = 2037 - birthYear;
                        return age;
                    }
                            //OR:             
                    function calcAge1 (birthYear) {
                        return 2037 - birthYear;
                    }

                    const age1 = calcAge1(1991);
                    console. log (age1);
            

                //Function Expression:
                    const calcAge2 = function (birthYear) {
                        return 2037 - birthYear;
                    }

                    const age2 = calcAge2(1991);
                    console. log (age1, age2);
                    

                //Arrow Functions:
                    const calcAge3 = birthYear3 => 2037 - birthYear3;
                    const age3 = calcAge3 (1991);
                    console. log(age3);

                    // What about if we have more parameters and more line of code?
                    const yearsUntilRetirement = (birthYear3, firstName) => {
                    const age3 = 2037 - birthYear3;
                    const retirement = 65 - age3;
                    return `${firstName} retires in ${retirement} years.`;
                    }

                    console. log(yearsUntilRetirement(1991, "Jonas"));
                    console. log(yearsUntilRetirement(1995, "Bob"));




                            //Exercise 
                            /*The world population is 7900 million people. 
                            Create a function declaration called percentageOfWorld1 which receives 
                            a population value, and returns the percentage of the world population 
                            that the given population represents. For example, China has 1441 million 
                            people, so it's about 18.2% of the world population.

                            To calculate the percentage, divide the given population value by 7900 and 
                            then multiply by 100.

                            Call percentageOfWorld1 for 3 populations of countries of your choice, 
                            store the results into variables, and log them to the console.

                            Create a function expression which does the exact same thing, called 
                            percentageOfWolrd2, and also call it with 3 country populations 
                            (can be the same populations). */
                            
                            // Declaration Fucntion:
                            const worldPopulation = 7900
                            function percentageOfWorld1 (population) {
                                const percentageFormula = (population / 7900) * 100;
                                return percentageFormula;
                            }
                            
                            const percGermany =percentageOfWorld1 (83);
                            console. log(percGermany);

                            const percPortugal1 = percentageOfWorld1(10);
                            const percChina1 = percentageOfWorld1(1441);
                            const percUSA1 = percentageOfWorld1(332);

                            console.log(percGermany, percPortugal1, percChina1, percUSA1);

                            //Expression Function:
                            
                            const percentageOfWorld2 = function (population) {
                                return (population / 7900) * 100;
                            }

                            const percGermany2 =percentageOfWorld2 (83);
                            console. log(percGermany2);

                            const percPortugal2 = percentageOfWorld2(10);
                            const percChina2 = percentageOfWorld2(1441);
                            const percUSA2 = percentageOfWorld2(332);
                            console. log(percGermany2, percPortugal2, percChina2, percUSA2);

                        /*Exercise: Recreate the last assignment, but this time create 
                        an arrow function called percentageOfWorld3.*/
                              
                        const percentageOfWorld3 = population => (population / 7900) * 100;

                        const percGermany3 =percentageOfWorld3 (83);
                        const percPortugal3 = percentageOfWorld3(10);
                        const percChina3 = percentageOfWorld3(1441);
                        const percUSA3 = percentageOfWorld3(332);
                        console. log(percGermany2, percPortugal3, percChina3, percUSA3)