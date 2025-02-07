/* Strings are a very important part of programming. Let's learn a easy way 
to build strings using something called template literals: */
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) 
            + " year old " + job + "!";
console. log (jonas);
/* As you can see this can be a pain, so there is a better way "Template literals":
So a Template Literal can assemble multiple pieces into one final sting.*/
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`; 
console. log(jonasNew);

console. log("String with \n\
multiple \n\
lines");

//Or you could use Backticks and only type enter. This would also work:

console. log(`String with
multiple
lines`);

// Asignment Strings and Template:
const myCountry = "Germany";
console. log(myCountry);

const myContinent = "Europe";
console. log(myContinent);

const myPopulation = 83;
console. log(myPopulation);

const myLanguage = "german";
console. log(myLanguage);

const description = `${myCountry} is in ${myContinent} and its ${myPopulation} million people speak ${myLanguage}.`
console. log (description);




//If / Else Statements
/* Take decisions with our code. Let´s say we want to make a programm which 
checks whether a person is allowed to start taking a driver's license or not. 
And if seh is, then it will print that to the console. If not, then it will 
print how many years are left until the person can start taking the driver's 
license:
*/
const age = 19;

if(age >= 18) {
    console. log("Sarah can start driving license 🚘");
    } else {
        const yearsLeft = 18 - age;
        console. log (`Sarah is too young, Wait another ${yearsLeft} years :)`);
    }


    /* Alternative Writing Style: 

const isOldEnough = age >= 18;

if(isOldEnough) {
console. log("Sarah can start driving license 🚘");
}

*/


    const birthYear2 = 1991;
     let century; /* We have 2 Codeblocks (if- block and else-block). Any variable we declare 
    inside those blocks will not be accessible outside of the blocks. 
    This is why WE NEED TO DEFINE it OUTSIDE THE BLOCKS! We just leave it empty outside, but
    with an "let" Keyword! */
    if (birthYear <= 2000) {
         century = 20;
    } else {
        century = 21;
    }
    console. log (century);
