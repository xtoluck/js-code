/* JS FUNDAMENTALS 1
      let js = "amazing";
      // if (js === "amazing") alert("Javascript is FUN!");
      console.log("Javascript is FUN!!!");

      console.log('Jonas');
      console.log(23);

      // let sum = console.log(`Sum is ${48+8+23-10}`);
      let sum = (`Sum is ${48+8+23-10}`);
      console.log(sum);


      let firstName = 'Matilda';
      console.log(firstName);
      console.log(firstName);
      console.log(firstName);


      let javascripIsFun=true;
      console.log(typeof javascripIsFun); 
      console.log(typeof true);
      console.log(typeof 'Hello');
      console.log(typeof 23);

      javascripIsFun="YES"; // dynamically changing the value of the variable, javascriptIsFun from Boolean (line #19) to string(line #25);
      console.log(typeof javascripIsFun);

      //demonstarting undefined data type
      let year; //the data type of year is undefined;
      console.log(year);
      console.log(typeof year);

      //dynamic reassignment of value, "1991" to the variable, year. Hence, no use of let;
      year = "1991";
      console.log(year);
      console.log(typeof year);

      //dynamic reassignment of value, "1991" to the variable, year. Hence, no use of let;
      year = 2024;
      console.log(year);
      console.log(typeof year);

      console.log(typeof null);//the typeof null is an object. This is not correct! 


      //the use of let keyword
      let age=30;
      age=31;

      //JS OPERATORS
      const ageJonas = 2024 - 1986;
      console.log(ageJonas);

      const ageSarah= 2024 - 1992;
      console.log(ageSarah);

      console.log(ageJonas, ageSarah);

      //instead of repeating 2024 multiple times, lets put it in a variable that we can reference anytime.

      const now=2024;
      const ageJonasNow = now-1986;
      const ageSarahNow = now-1992;

      console.log(ageJonasNow, ageSarahNow);
      console.log(ageJonasNow *2 , ageJonasNow/10 , 2**3 );

      const fName = 'Jonas';
      const job = 'Teacher';
      const birthYear = 1991;
        
      const jonas = "I'm " + fName + ", a " + (year - birthYear ) + " years old " +  job + "!";

      console.log(jonas);

      //Template strings - backtick ``
      const jonasNew = `I'm ${fName}, a ${year - birthYear} years old ${job}!`;
      console.log(jonasNew);

      //Using Backtick for multiple lines instead of \n\ which was used befor ESXi
      console.log(`String 
      multiple 
      lines`);

      */
/*
      //Making Decisions Using if-else---
      const age = 14;
      const isOldEnough = age >= 18; // age =19 as initialized on line #89. Now, check if age is gt or eq 18 which in this case is true. d4, execute line #93

      if(isOldEnough){ //if it's true that isOldEnough >=19, then execute line #93
            console.log(`Sarah can start driving license 😂🙌`); //emoji is windows button + .
      }else
      console.log(`Underaged!`);

      //Another way to write the above lines #90 to 95 is 
      if(age >= 18){
            console.log(`Sarah can start driving license 😂🙌`); //emoji is windows button + .
      }else{
            const yearsLeft = 18-age;

            console.log(`Underaged!! Sarah has ${yearsLeft}years left to start driving license!`); 
      }

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

console.log(typeof birthYear);


//TYPE CONVERSION AND TYPE COERCION

//TYPE CONVERSION
const birthYear = "1991";
console.log(birthYear + 18);
console.log(Number(birthYear) + 18); //conversion or type casting

//COERCION
console.log("I am " + 23 + " years old"); // type coercion of Number, 23 to a String
console.log("I am " + String(23) + " years old"); // type conversion of Number, 23 to a String
console.log("23" - "10" - 3); //Type coercion --- Strings converted automatically to Number
console.log("23" + "10" + 3); //Concatenation
console.log("23" * 2); ////Type coercion --- Strings converted automatically to Number
console.log("23" * "2"); ////Type coercion --- Strings converted automatically to Number
console.log("23" / "2"); ////Type coercion --- Strings converted automatically to Number

let n = "1" + 1;
n = n - 1;
console.log(n);



// Truthy and Falsy Values ---->>> 0, '', undefined, null and NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(NaN));
console.log(Boolean(""));

const money = 0;
//testing the truthy or falsy value of the variable, money. In this case, it's false since the value is 0
if (money) {
  console.log("It is true that you have money!");
} else {
  console.log(`Oops! 
  You don't have money!`);
}

let height; //empty or undefined variable, height.
// if height is true, then execute line 160 else, execute line 162
if (height) {
  console.log(`Yay! Height is Defined!`);
} else {
  console.log(`Height is Undefined!`);
}


//Equality Operator
let age = 18;
if (age == 18) console.log(`You just became adult: D(Loose!)`);
if (age === 18) console.log(`You just became adult: D(Strict!)`);

let ageNew = "19";
if (ageNew == 19) console.log(`You are 19 years old (Loose)`);
if (ageNew === 19) console.log(`You are 19 years old (Strict)`);

const favourite = prompt("What's your favourite number?");
console.log(favourite);
console.log(typeof favourite); //String


const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);// Number


const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision); //true
console.log(hasDriversLicense || hasGoodVision); //true
console.log(!hasDriversLicense && hasGoodVision); //false
console.log(!hasDriversLicense || hasGoodVision); //true
console.log(!hasDriversLicense && !hasGoodVision); //false
console.log(!(hasDriversLicense && hasGoodVision)); //false

//const shouldDrive = hasDriversLicense && hasGoodVision;
if (hasDriversLicense && hasGoodVision) {
  //we usually create the condition inside the bracket ().
  console.log("Sarah should drive!");
} else {
  console.log("Someone else should drive...");
}




//switch case

const day = "wednesday";
switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory video");
    break;
  case "wednesday":
  //console.log("Write code examples");
  //break;
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
    break;
  case "sunday":
    console.log("Enjoy the weekend: D");
    break;
  default:
    console.log("Not a valid day!");
    break;
}

//if else statement version of the above switch case
const day = "friday";
if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory video");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend: D");
} else {
  console.log("Not a valid day!");
}
 

//TERNARY OPERATOR ?
const age = 23;
const drink = age >= 18 ? "wine🍷" : "water💧";
console.log(drink);
//The if else version of the above ternary operator.
let drink2;
if (age >= 18) {
  drink2 = "wine🍷";
} else {
  drink2 = "water💧";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine🍷" : "water💧"}`);


/* JS FUNDAMENTALS 2
FUNCTIONS 
function logger() {
  console.log("My name is Lucky!");
}
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  // console.log(apples, oranges);
  const juice = `Juice with ${apples} apples, ${oranges} oranges.`;
  return juice;
}
// fruitProcessor(3, 8);
const fruitJuice = console.log(fruitProcessor(3, 8));

function fullName(username, firstName, lastName) {
  const nameDetails = `${username}'s full name is First Name: ${firstName}, and Last name: ${lastName}`;
  return nameDetails;
}
const name1 = fullName("xtoluck", "William", "Ugbebor");
console.log(name1);

console.log(fullName("xtoluck", "William", "Ugbebor"));

// console.log(typeof fullName);


//FUNCTION DECLARATION
function calcAge1(birthYear) {
  return 2024 - birthYear;
}
console.log(calcAge1(1986));
console.log(calcAge1(1992));

//FUNCTION EXPRESSION
const age1 = function (birthYear) {
  return 2024 - birthYear;
};
console.log(age1(1986));
console.log(age1(1992));

//AAROW FUNCTION
const age2 = (birthYear) => 2024 - birthYear;
console.log(age2(1986));
console.log(age2(1992));

const yearUntilRetirement = (birthYear) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  return retirement;
};
console.log(yearUntilRetirement(1986));

const ageCurrent = (birthYear) => 2024 - birthYear;
const age = ageCurrent(1986);
console.log(age);

const age = (birthYear) => 2024 - birthYear;
const currentAge = age(1992);
console.log(currentAge);


const age = (birthYr) => 2024 - birthYr;
const realAge = age(1986);
console.log(realAge);

function realAge1(birthYear) {
  return 2024 - birthYear;
}
const myAge = realAge1(1984);
console.log(myAge);

//AREA OF A RECTANGLE ARROW FUNCTION
function areaOfARectangleFunction(length, bredth) {
  return length * bredth;
}
const area = areaOfARectangleFunction(4, 5);
console.log(area);

function areaOfARectangleFunction(length, bredth) {
  return length * bredth;
}
console.log(areaOfARectangleFunction(4, 5));
// const area = areaOfARectangleFunction(4, 5);
// console.log(area);


//How many years a person has left until retirement.
//The key variables are birthYr, currentYr, retirementYr, yrLeftUntilRetirement
//The key variables are birthYr, age = currentYr - birthYr , retirementAge, yrLeftUntilRetirement = retirementAge-currentYr

function ageLeftBeforeRetirement(birthYr) {
  const retirementAge = 65;
  const currentYr = 2024;
  const age = currentYr - birthYr;
  console.log(`age ${age}`);
  const yrLeftUntilRetirement = retirementAge - age;
  return yrLeftUntilRetirement;
}
console.log(`Age Left Before Retirement ${ageLeftBeforeRetirement(1972)}`);
====================================================================================================================
function ageLeftBeforeRetirement(firstName, birthYr) {
  const retirementAge = 65;
  const currentYr = 2024;
  const age = currentYr - birthYr;
  console.log(`age ${age}`);
  const yrLeftUntilRetirement = retirementAge - age;
  return `${firstName} has  ${yrLeftUntilRetirement} year(s) until retirement!`;
}
console.log(`${ageLeftBeforeRetirement("John", 1972)}`);
=====================================================================================================================
// Arrow function version of the above
const  ageLeftBeforeRetirement=(firstName, birthYr) =>{
  const retirementAge = 65;
  const currentYr = 2024;
  const age = currentYr - birthYr;
  console.log(`age ${age}`);
  const yrLeftUntilRetirement = retirementAge - age;
  return `${firstName} has  ${yrLeftUntilRetirement} year(s) until retirement!`;
}
console.log(`${ageLeftBeforeRetirement("John", 1972)}`);


//function calling another function
function fruitCutter(fruit) {
  return fruit * 4;
}
//fruit processor function
function fruitProcessor(apples, oranges) {
  const applePieces = fruitCutter(apples);
  const orangePieces = fruitCutter(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}
console.log(fruitProcessor(4, 8));

//function calling another function

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} pieces of apples and ${oranges} pieces of oranges.`;
//   return juice;
// }
// console.log(fruitProcessor(4, 8));

//function calling another function

function fruitCutter(fruit) {
  return fruit * 4;
}

function fruitProcessor(banana, guava) {
  const bananaPieaces = fruitCutter(banana);
  const guavaPieaces = fruitCutter(guava);

  const juice = `Juice with ${bananaPieaces} pieces of banana and ${guavaPieaces} pieces of guava`;
  return juice;
}

console.log(fruitProcessor(2, 3));

// function hello(){
//   console.log('hello');
// }
// hello();

// hello();
// let hello = () => {
  //   console.logR("hello");
// };


//ARRAYS==============================================================================

const friends = ["Michael", "Jonas", "Bob", "Peter"];
console.log(friends);
console.log(`The array elements are: ${friends}`);
console.log(`The array length is ${friends.length}`);
console.log(friends[0], friends[2]);
console.log(`The last element of the array is: ${friends[friends.length - 1]}`);

//changing/mutating/adding/deleting the element in an array
friends[4] = "Johny"; //adding
console.log(friends);

friends[2] = "Bekky"; //mutating/changing array element
console.log(friends[2]);

friends[2] = "";
console.log(friends[2]);

friends[0] = "";
console.log(friends[0]);

console.log(friends);

const year = new Array(1990, 1991, 1992, 1993, 1995);
console.log(year[2]);
// console.log( year[year.length/2]);

const jonas = ["Jonas", "Schmedtman", 2024 - 1986, friends];
console.log(jonas);



const calcAge1 = (birthYear) => 2024 - birthYear;
console.log(calcAge1(1996));
 
const calcAge = function (birthYear) {
  return 2024 - birthYear;
};
console.log(calcAge(1986));

const years = [1990, 1994, 1963, 1985, 1986, 2002, 2001];

const yrsArrays = calcAge(years[3]);
const yrsArrays1 = calcAge(years);
console.log(yrsArrays1);

age1 = calcAge(years[0]);
age2 = calcAge(years[1]);
age3 = calcAge(years[years.length - 1]);

// console.log(age1);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);


const friends = ["Michael", "Jonas", "Bob", "Peter"];
friends.push("Jay", "Jonah");
console.log(friends);

friends.unshift("Joe", "Matthew", "Janeth");
console.log(friends);

friends.pop();

console.log(friends);


const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
function calcTempAmplitude(temperatures) {
  let max = temperatures[0];
  let min = temperatures[0];
  for (let i = 0; i < temperatures.length; i++) {
    const currentTemp = temperatures[i];
    if (typeof currentTemp !== "number") continue; // as soon as the loop gets to the string, "error",
    // it skips since it's not a number and continues with the execution of the logic when it gets to 9
    // since 9 is a Number;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(`Max: ${max}`);
  console.log(`Min: ${min}`);
  return max - min; //amplitude
}
const amplitude = calcTempAmplitude(temperatures);
calcTempAmplitude([3, 7, 4]);
console.log("Amplitude:", amplitude); //This will come out as a number
console.log(`Amplitude: ${amplitude}`); //This will come out as a string
console.log(amplitude); //This will come out as a number

//MERGED ARRAY
const temp1 = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const temp2 = [23, -22, -26, -21, "error", 29, 23, 27, 25, 24, 29, 25];
function calcTempAmplitudeNew(temp1, temp2) {
  const temps = temp1.concat(temp2);
  console.log(temps); //MERGED ARRAY
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== "number") continue; // as soon as the loop gets to the string, "error",
    // it skips since it's not a number and continues with the execution of the logic when it gets to 9
    // since 9 is a Number;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(`Max: ${max}`);
  console.log(`Min: ${min}`);
  return max - min; //amplitude
}
// const amplitudeNew = calcTempAmplitudeNew(temps);
const amplitudeNew1 = calcTempAmplitudeNew(temp1, temp2);

const amplitudeNew = calcTempAmplitudeNew([2, 3, 4], [1, 3, 15]);
//const  amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
console.log(amplitudeNew1);

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    // value:  prompt("Degrees celsius"),//A
    value: Number(prompt("Degrees celsius")), //B
  };
  console.table(measurement);
  // const kelvin = Number(measurement.value) + 273;//A
  const kelvin = measurement.value + 273; //B
  return kelvin;
};
console.log(measureKelvin());
*/
