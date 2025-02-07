//Logical Operators: Boolean Variables:
const hasDriversLicense = true; // Variable A
const hasGoodVision = true; // Variable B

console. log (hasDriversLicense && hasGoodVision); // <= AND Operator

console. log (hasDriversLicense || hasGoodVision); // <= OR Operator

console. log (!hasDriversLicense); // <= NOT Operator

    /* Now Le's see whether Sarah can Drive or Not. */
    const shouldDrive = hasDriversLicense && hasGoodVision;

    if (shouldDrive) {
        console. log("Sarah ia able to drive!");
    } else {
        console. log("Someone else should drive...");
    }
    
    //Using more variables? Sure, no problem:
        const isTired = true; // Variable C

        console. log (hasDriversLicense && hasGoodVision && isTired); /* You can 
        also use more variables like with arithmetic operators such as plus or 
        minus. */


        //Another example:

        if (hasDriversLicense && hasGoodVision && !isTired) { // <= here you should convert is Tired to !is Tired because of logic

            console. log("Sarah ia able to drive!");
        } else {
            console. log("Someone else should drive...");
        }

   
        

//CODING CHALLANGE 3: 
/* There are two gymnastics teams: Dolphins and Koalas. 
They compete against each other 3 times. 
The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data included below. 
The average score for Dolphins should be assigned to the scoreDolphins variable, 
and the average score of Koalas should be assigned to the scoreKoalas variable.
2. Compare the team's average scores to determine the winner of the competition, 
and print to the console:
"Dolphins win the trophy" if Dolphins win, or
"Koalas win the trophy" if Koalas win, or
"Both win the trophy" if their average scores are equal.

TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.
*/
const scoreDolphins = (97 + 112 + 81) / 3;
const scoreKoalas = (109 + 95 + 86) / 3;
console.log (scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
    console. log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins) {
    console. log("Koalas win the trophy");
} else if (scoreKoalas === scoreDolphins) {
    console. log("Both win the trophy");
}



//The Switch Statement.
/* Alternative way of writing  a complicated if else statement, 
when we want to compare  one value to multiple different options:

Let's say we have a week day varible and for each day there is 
a different activity. So we will basically map one activity each day: 
*/
const day = "monday";
//We could use if-else statement or we could use a switch statement.
switch(day) {
    case "monday": // <= day === "monday" (if this is true, than all the code in the case will be executed)
        console. log("Plan course structure"); //here all the lines in the case block are beeing executed!
        console. log("Go to  coding meeup");
        break;
    case "tuesday":
        console. log ("Prepare heory videos");
        break;
    case "wednesday": 
    case "thursday": //Because you haven´t used a break, the case will be executed for both wednesday and  thursday
        console. log ("Write code examples");
        break;
    case "friday":
        console. log ("Record videos");
        break;    
    case "saturday":
    case "sunday":
        console. log ("Enjoy the weekend 😎")
        break;
    default: // This  default will be executed if all the other cases fail!. It is like an else Block for example.
        console. log ("Not a valid day!")
}
//So what this code will to is basically: it will compare monday to day in a strict equality way.

            /* Of CountQueuingStrategy, you could also use this. It is the same but different Syntax:

            if (day === "monday") {
                console. log("Plan course structure");
                console. log("Co to codingmeetup");
            } else if (day === "tuesday") {
                console. log("Prepare theory videos");
            } else if (day === "wednesday" || day === "thursday") {
                console. log ("Write code examples");
            } else if (day === "friday") {
                console. log("Record videos");
            } else if (day === "saturday" || day === "sunday") {
                console. log("Enjoy the Weekend");
            } else {
                console. log ("Not a valid day")
            }

            */




/// Statements and Expressions: ///

        // Expression = Piece of Code that produces a Value. E.g. for expressions:
        3 + 4 //<= This is an expression because it is gonna produce a value!
        1991  // <= This is also an expression, because this itself will produce a value!
        true && false && !false //<= This is also an Expression because it will create a value!

        /*Statements = A bigger piece of Code that is executed, which DOES NOT creat a value on itself.
        We can compare this with normal spoken language. 
        A declaration/ statement is like a complete sentence and expressions are like words that make up 
        the sentences. We basically write our whole programms as a sequence of actions. 
        And this actions are Statements.
        Let's take for example the If-Else-Statement: */
        if (23>10) {
            const str = "23 is bigger"; // <= The only thing it does is, it declares a variable called STR. That's it.
                        // BUT the string itself ("23 is bigger") is an expression!!!
        }
        // The same is true for the swith-statement.
        /* As you can see thsi statement does not produce a value. 
        The only thing it does is, it declares a variable called STR. It performs some actions but it doesn produce
        a value! */

                //In Template Literals we can never insert Statements, only Expressions:
                console. log(`So ${"here's were we put Expressions"} like ${2037-1991}.`);

                        // So we could never inser this statement in there for example:
                        const me = "The Variable 'me'"
                        console. log(`So ${"here's were we put Expressions"} like ${me}.`);



/// The Conditional (Ternary) Operator.

const age = 23;
age >= 18 ? console.log ("I like to drink wine 🍷") // We basically check here if the person is of full age.
/* In this if blog, so to say, we can only have essentially one line of code. So only one thing can be done
if this condition is true. In this case, if the statement is true we log this a string to the console.

 But we are not done. Now we also need a mandatory else block: */
: console. log("I like to drink water 💧 ");

        // This is how you would write a if-else statement in one line with the Conditional Operator
        // It is also called Ternary Operator because it has 3 parts: (Condition + if part + else part).
        // For instance Plus operator has only 2 parts: 1 + 2 = part 1 + part 2.
        age >= 18 ? console.log ("I like to drink wine 🍷") : console. log("I like to drink water 💧 ");
        
        




                const age2 = 23;
                const drink = age2 >= 18 ? "wine 🍷" : "water 💧";
                console. log (drink);

                //If we would use if-else then we would have to define drink2 outside the block:
                       
                        let drink2;
                        if (age2 >= 18 ) {
                        drink2 = "wine 🍷";
                        } else {
                        drink2 = "water 💧";
                        }
                        console. log (drink2);


                        /* Now we can take it further, since the ternary operator is really an expression, 
                        we can use it in a Template Literal, unlinke a normal if/ else statement: 😎*/
                       
                        console. log(`I like to drink ${ age2 >= 18 ? "wine 🍷" : "water 💧"}.`);



//Coding Challenge 4:
/* Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. 
In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, 
the tip is 20%.

        Your tasks:
        Calculate the tip, depending on the bill value. Create a variable called tip for this. 
        It's not allowed to use an if...else statement (if it's easier for you, you can start with 
        an if...else statement, and then try to convert it to a ternary operator).
        Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

        Example: The bill was 275, the tip was 41.25, and the total value 316.25.

        Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

        TEST DATA: Test with different bill values: 275, 40, and 430

        HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2

        HINT 2: Value X is between 50 and 300, if it's >= 50 && <= 300 😉 */



                const bill = 275;

                const tip = bill >= 50 && bill <= 300 ? bill * Number(0.15)  : bill * Number(0.20);
                console. log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`);
