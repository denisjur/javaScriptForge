// Remember, we're gonna use strict mode in all scripts now!
"use strict";

///////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM 1:
/* We work for a company building a smart home thermometer. 
    Our most recent task is this: "Given an array of temperatures of one day, 
    calculate the temperature amplitude. Keep in mind that sometimes there might 
    be a sensor error." */

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute/calculate max and min temperatures in an array?
// - What's a sensor error? And what do do when one occurs? A: Code to ingnore the error and work with remaining velues.

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge/combine two arrays

// 2) Breaking up into sub-problems
// - How to merge/combine 2 arrays

// Lösung:
// They now give us this error:

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// const temperatures2 = [3000, 0, -203];
// const alltemperatures = temperatures.concat(temperatures2);

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitude = calcTempAmplitude(alltemperatures);
// console.log(amplitude);

// Aber auch so möglich:

const calcTempAmplitudeNEW = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNEW = calcTempAmplitudeNEW([-100, 4, 5, 333, 3], [-5555, 0]);
console.log(amplitudeNEW);

/////////////////

// How to Debugg using the console and breakpoints:
/* Let us use the smart thermometer we had for example:
Let us say we want to do some measurements in Kelvin and not Celsius.
The conversion to Kelvin is pretty easy, you only have to add 273 to the 
temperature in degree Celsius. This is the ultimate temperature. 
So let us create a function that can calculate this: This function will get the 
measurement from the command prompt, so it will take no arguments.*/

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    // C) Fix the bug
    value: Number(prompt("Degrees celsius:")),
  };

  // B) We have now found the Bug
  console.log(measurement);
  console.table(measurement);

  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  //That that we made the prompt, let us convert that to kelvin:
  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) IDENTIFY the BUG:
console.log(measureKelvin());

// Challange Debbugging:
/* Given an array of forecasted maximum temperatures, the thermometer 
displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17°C in 1 days. 21°C in 2days ... 23° in 3 days ..."
Create a function "printForecast" which takes in the array "arr" and logs a string like the 
above to the console.

Use the problem-solving framework: Understand the prbolem and break it up into sub problems!

Test Data1: [17,21,23]
Test Data 2: [12, 5, -5, 0, 4]
*/

/*Understanding + Sub Problems:  	

                    1) We recieve an array including all the max temperatures.
                    2) Create a function that has arr as a argument and logs a string 
                    3) Display a Template Literal
*/

const arrmax = [17, 21, 23];

const printForecast = function (arr) {
  let sumtext = "...";
  for (let i = 0; i < arr.length; i++) {
    sumtext = sumtext + `${arr[i]}°C in ${i + 1} days ...`;
  }
  return sumtext;
};

console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));
