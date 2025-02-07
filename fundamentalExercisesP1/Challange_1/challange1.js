// CHALLENGE 1: 
//Store Mark's and John's mass and height in variables:
const massMark =78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

//  Calculate both their BMIs using the formula (mass / (height * height)) and store the results in variables:
const BMIMark = massMark / (heightMark ** 2);
const BMIJohn = massJohn / (heightJohn ** 2);

//Log the values to the console:
console. log(BMIMark, BMIJohn);

//Create a Boolean variable containing information about whether arl has a higher BMI than John.
//Log it to the console.
const markHigherBMI = BMIMark >BMIJohn;
console. log (BMIMark, BMIJohn, markHigherBMI);



//CHALLENGE 2:
/* Print a nice output to the console, telling the user who has the higher BMI. 
The message can be either:
"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".
*/

if (BMIMark > BMIJohn) {
    console. log(`Mark's BMI (${BMIMark}) is higher than John´s (${BMIJohn})!`)
} else {
    console. log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
}




//Type Conversion :

//(manually changing one Data Type into another):
//Scenary: Inputfield for people to input their birthday on the webside:
const inputYear = "1991"; // => String
console. log(Number(inputYear), inputYear); //=> Shows both number and string in the console.
console. log(Number(inputYear) + 18); //> String convertet to number
//Example for Number to String:
console. log (String(23));


//TYPE Coercion
console. log("I am " + 23 + " years old.");
/* It is the same as, because the 2number is convertet to string: 
PLUS CONVERTS TO STRINGS:*/
console. log("I am " + "23" + " years old.");


/* But this is also possible, now the Strings are convertet to numbers:
MINUS CONVERTS TO NUMBERS*/
console. log(("23") - "10" - 3);
// Now it is the same as:
console. log((23) - 10 - 3);


//BUT: If you now use a "+" then numbers will be converted to strings
console. log(("23") + "10" - 3);
//Division and Multiply also converts to numbers.

//another example: 
let n = "1" + 1;
n = n -1;
console .log(n); //nun zeigt die Console 10 an, da 11 -1 = 10.
//Another example:
console. log(2 + 3 + 4 +"5");
//Console zeigt nun 95 an, da 2+3+4 = 9, 9 + "5" = 95




/*There are 5 falselly Values in JavaScript:
	- 0
	- null
	- undefined
	- ""
    - NaN

    Truthy Values: 
    - Everything that is not a falsely value.
    
Example:*/
console. log(Boolean(0));
console. log(Boolean(undefined));
console. log(Boolean("Jonas"));
console. log(Boolean(""));
console. log(Boolean({}));

/*Example Type Coercio nto Booleans in a logical AudioContext, like in the condition of an if- elde CSSLayerStatementRule. */
const money = 0;
if (money) { // <= money is converted by JS to a boolean, 0 = false.
console. log("Don't spend it all 🐱‍👤");
} else { // <= This will be executed because the statement is false (if(false)).
console. log ("You should get a job!");
}

//How to check if a value is defined or not?:
let height; // <= now height is a undefined variable, so it is false.
if(height) {
console. log("YAY! Height is defined");
} else {
console. log("Height is UNDEFINED");
}




//Equality Operators: == vs === :
// Strict Equality Operator = It does not perform Type Coercion!:
const age = "18";
if (age === 18) console. log("You just became an adult!")
// Console shows FALSE

//Loose Equality Operator: Does perform Type Coercion:
const age2 = "18";
if (age == 18) console. log("You just became an adult!")
// Console shows TRUE, because of Type Coertion!!!


// Another example of how you should use ===
const favorite = Number(prompt("What's your favorite number?"));
console. log(favorite);
console. log(typeof favourite)


if (favorite === 23) { 
console. log("Cool! 23 is an amazing number!");
} else if (favorite === 7) {
    console. log ("7 is also a cool number");
} else if (favorite === 9) {
    console. log("9 is awesome!")
} else {
    console. log("Number is not 23 or 9 or 7!");
}


// There is also an Operator for DIFFERENT!
if(favorite !== 23) { // <= Translation: "If the number is not 23"
    console. log("Why not 23?");
}