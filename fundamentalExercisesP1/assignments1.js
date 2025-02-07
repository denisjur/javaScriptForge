let js ='a';
 console.log(40 + 8 + 23 - 10)
/* alternative => console.log(x)
                  console.log(40 + 8 + 23 - 10)
                  */



let firstname = "Jonas";
console. log(firstname)



// 1) Values and Variables Assignment:

let myCountry = "Germany";
console. log(myCountry);

let myContinent = "Europe";
console. log(myContinent);

let myPopulation = 83;
console. log(myPopulation);



let javascriptIsFun = true;
console. log(javascriptIsFun);
console. log(typeof true)
/* This code analyses the Data Type. In this case "true" is a Boolean- Data Type.
So the Console is going break down to me what kind of Datatype "True" is. That is why the console shows Boolean. 
You can also try it out with other Values. E.g.: */



//Antoher example:

let firstName = "Jonas";

console. log(typeof firstName);

/* 
Now the Console is going to show you instead of Jonas, String, because it is
a Sting Data Type.
*/



/* Reassign a new type of value to an already existing variable. How?
Now you do the same but without the let. You only need let, when assigning a new variable.
Now we already have a variable with an value and we just reasign a new type of value:
*/
javascriptIsFun = "YES!";
/* If you wan´t to use the analogy with the box and the book. It is like having a 
box(variable) with a book(type of value) in it. Then you take the book out an place 
somthing else in it like a phone(another value instead).
*/
console. log(javascriptIsFun);



let year;
console. log(year);
console. log(typeof year);

// Now let's reassign a new type of value for year. From undefined to a number:

year = 1991;
console. log(year);
console. log(typeof year);



/*Now there can also be errors when dealing with undefined. 
E.g. Null (it is similar to undefined). Both the value and type of value are null. 
Now you can see that JavaScript says in the console that the type of null is an object 
and this doesn´t make any sense at all. This is a bug in JavaScript.*/

console. log(typeof null)




// 2) Data-Types-Assignment:
let isIsland = false;
let myLanguage = "german";

console. log(typeof isIsland);
console. log(typeof myPopulation);
console. log(typeof myCountry);
console. log(typeof myLanguage);



//We use const to declare variables that cannot be changed. So you can not change their value:
const birthYear = 1991;
// This makes sense. A birthyear cannot change but the age can.
/* When we use const we need an initial value. Meaning: You cannot use "const" like 
"let" when trying to assign the value of undefined. You cannot use this for example.
It won't work. It's an error: 

const job;

Try to always use const instead of let. Only use let when having to deal with change later.*/



/*We can also use Var, but you should complitely avoid it. But you still need to know how it works
for the older tutorials on Youtube.*/
var job = "programmer";
job = "teacher"
/* We use it like let, because we can change the values, like this example.
It looks like Var and Let are very similar, bur below the surface they are pretty different.
Difference: Let = block-scoped.
            Var = function-scoped.


Some people say that you do not need to declare a variable, using var, const or let. But this is a terrible idea.
Even though this code works:

lastName = "Schmedtmann";
console. log (lastName);

JavaScript will happily execute this script even without declaring the variable. 
PROBLEM: This DOES NOT create a variable in the current so-called scope. Instead JavaScript will create a property
on the global object.ALWAYS PROPERLY DCLARE VARIABLES!
*/


//Baisc Operators:
/* Operators basically allows us to transform OR combine multiple values and really do all kind 
of work with values.
There are a lot of types of operators.
a) mathematical Operators/ Aritmetic Operators. We already used these operators like + and -:*/
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
/* It is the same as saying: 
    const ageJonas = 2037 - 1991;
    const ageSarah = 2037 - 2018;
    */
console. log (ageJonas, ageSarah);

console. log (ageJonas * 2, ageJonas /10, 2 ** 3)
/* Meaning: Age Jonas multiplied by 2 and divided by 10). Here we are creating 
one value by multiplying and a second by dividing. Now we can also use ** do calculate 2 
to the power of 3 for example, so 2 * 2 * 2.
*/
const secondName = "Ben";
const lastName = "Schmedtmann";
console. log (secondName + lastName);
/* In the Consoole you can see now BenSchmedtmann. But what if I want a space in between? 
We need an empty sting like this " ". */
console. log (secondName + " " + lastName);
/* Now you can see Ben Schmedtmann in the console.
*/


//Assignment Operators: We already used =.
let x = 10 + 5; // 15
x += 10; /* What does it mean? We are reassigning the x value => +=   means:   x = x + 10   */
console. log(x); // Now x = 25 in the console because, 10 + 5 + 10 = 25

x*= 4; // x = x * 4, Now the console will show 100 instead of 25.
console. log(x);

x ++; // x = x + 1, so the console will show you now 101 instead of 100. You can also do the reverse with minus minus
console. log(x);

x--;
x--; //Now we have 99 in the console;
console. log (x);



//Comparison Opperators:
console. log (ageJonas > ageSarah); // let´s see it Jonas his age i bigger than sarahs age. So this is how to ask the computer.
                                    // There is also >, <, >=, <=
console. log (ageSarah >= 18);
/* Now keep in mind, that in real development, we would store those results in variables, and not just always
lock the results to the console. */

/*How to store the results?: So isFullAge is the variable that is holding the Boolean value true or false, 
but in this case it is true.*/
const isFullAge = ageSarah >= 18;

console. log(now - 1991 > now - 2018)
// It's the same as: console. log (ageJonas > ageSarah);
// We are simply doing it in one step.


//Basic Operators Assignment:
console. log(myPopulation /2);
myPopulation ++;
console. log(myPopulation);
console. log(myPopulation > 6);
console. log (myPopulation > 33);
const description = myCountry + " is in " + myContinent + ", and its " + myPopulation
                    + " people speak " + myLanguage + ".";
console. log(description);


// Operator Precedence
/* But how does JS know if it should compare it first or do the mathematical equasion first. 
We have this code: console. log(now - 1991 > now - 2018)*/



/*const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;*/
console. log(now - 1991 > now - 2018); 
let a, b; //we have now defined two variables two values of undefined in onde sentecne. This is possible.
a = b = 25-10-5; // a = b = 10
/* THis is important, because the order of the operation is from right to left, so 10 = b further b = a,
and because of that a = 10. So both a and b is equal to 10.
Now what if the Operator precednce would be from left to right, then it would make no sence, since a = b,
which is undefined and now the undefined b is qequal to 10. It simply wouldn't work. */
console. log (a,b);


const averageAge =(ageJonas + ageSarah) /2;
console. log(ageJonas, ageSarah, averageAge);