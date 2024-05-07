"use strict";
/*Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.

//SOLUTION
//TEST DATA 1
const massMark = 78;
const massJohn = 92;
const heightMark = 1.69;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
console.log(`Mark's BMI ${BMIMark}`);

const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(`John's BMI ${BMIJohn}`);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

//TEST DATA 2
const massMark1 = 95;
const massJohn1 = 85;
const heightMark1 = 1.88;
const heightJohn1 = 1.76;

const BMIMark1 = massMark1 / heightMark1 ** 2;
console.log(`Mark's BMI ${BMIMark1}`);

const BMIJohn1 = massJohn1 / (heightJohn1 * heightJohn1);
console.log(`John's BMI ${BMIJohn1}`);

const markHigherBMI1 = BMIMark1 > BMIJohn1;
console.log(markHigherBMI1);


Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉
GOOD LUCK 😀


//SOLUTION
//TEST DATA 1
if (BMIJohn > BMIMark) {
  console.log(
    `John's BMI (${BMIJohn}) is higher than Mark's BMI (${BMIMark})!`
  );
} else {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})`);
}

//TEST DATA 2
if (BMIJohn1 > BMIMark1) {
  console.log(
    `John's BMI (${BMIJohn1}) is higher than Mark's BMI (${BMIMark1})!`
  );
} else {
  console.log(
    `Mark's BMI (${BMIMark1}) is higher than John's BMI (${BMIJohn1})`
  );
}

Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK 😀


//§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
const avgDolhins1 = 96;
const avgDolhins2 = 108;
const avgDolhins3 = 89;
const avgavgDolhins = (avgDolhins1 + avgDolhins2 + avgDolhins3) / 3;

const bonusDolphins1 = 97;
const bonusDolphins2 = 112;
const bonusDolphins3 = 101;
const avgBonusDolphins = (bonusDolphins1 + bonusDolphins2 + bonusDolphins3) / 3;

const avgKoalas1 = 88;
const avgKoalas2 = 91;
const avgKoalas3 = 110;
const avgavgKoalas = (avgKoalas1 + avgKoalas2 + avgKoalas3) / 3;

const bonusKoalas1 = 109;
const bonusKoalas2 = 95;
const bonusKoalas3 = 123;
const avgBonusKoalas = (bonusKoalas1 + bonusKoalas2 + bonusKoalas3) / 3;
*/
/*
if (avgavgDolhins > avgavgKoalas) {
  console.log(`Team Dolphins won! (${avgavgDolhins}) : (${avgavgKoalas})`);
} else if (avgavgDolhins < avgavgKoalas) {
  console.log(`Team Koalas won! (${avgavgKoalas}) : (${avgavgDolhins})`);
} else if (avgavgDolhins === avgavgKoalas) {
  console.log(`No winner! (${avgavgDolhins}) : (${avgavgKoalas})`);
} else {
  console.log(`oops! invalid input!!! Try again...`);
}


/*3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉*/
/*
if (avgavgDolhins > avgavgKoalas && avgBonusDolphins >= 100) {
  console.log(
    `Team Dolphins won! (${avgavgDolhins}) : (${avgavgKoalas}) Dolphins' Bonus: (${avgBonusDolphins}) vs Koalas' Bonus: (${avgBonusKoalas})`
  );
} else if (avgavgDolhins < avgavgKoalas && avgBonusKoalas >= 100) {
  console.log(
    `Team Koalas won! (${avgavgKoalas}) : (${avgavgDolhins}) Koalas' Bonus: (${avgBonusKoalas}) vs Dolphins' Bonus: (${avgBonusDolphins})`
  );
} else if (
  avgavgDolhins === avgavgKoalas &&
  avgBonusDolphins >= 100 &&
  avgBonusKoalas >= 100
) {
  console.log(
    `Draw! (${avgavgDolhins}) : (${avgavgKoalas}) Koalas' Bonus: (${avgBonusKoalas}) vs Dolphins' Bonus: ${avgBonusDolphins}`
  );
} else {
  console.log(`oops! - No winner! Try again...`);
}
 

Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement 😉 (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 😉


GOOD LUCK 😉


//TEST DATA: Bill value of 275, 40 and 430
let tip;
const bill = 430;
if (bill >= 50 && bill <= 300) {
  tip = (15 / 100) * bill;
} else {
  tip = (20 / 100) * bill;
}
const finalValue = bill + tip;
let totoalValue = console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${finalValue}`
);

bill >= 50 && bill <= 300
  ? (tip = (15 / 100) * bill)
  : (tip = (20 / 100) * bill);
const finalValue2 = bill + tip;
let totoalValue2 = console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${finalValue}`
);
 
=================================================================================================================================

JavaScript Fundamentals – Part 2
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores �
GOOD LUCK �
*/
//§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
//§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

/*
const calcAverage = () => {
  //§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
  const avgDolhins = (44 + 23 + 71) / 3;
  // const avgKoalas = (65 + 54 + 49) / 3;

  //§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
  // const avgDolhins2 = (85 + 54 + 41) / 3;
  // const avgKoalas2 = (23 + 34 + 27) / 3;
  return avgDolhins;
  // return avgKoalas2;
};
console.log(calcAverage());

const calcAverageK = () => {
  // const avgDolhins = (44 + 23 + 71) / 3;
  const avgKoalas = (65 + 54 + 49) / 3;
  return avgKoalas;

  //§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
  // const avgDolhins2 = (85 + 54 + 41) / 3;
  // const avgKoalas2 = (23 + 34 + 27) / 3;
  // return avgDolhins2;
  // return avgKoalas2;
  // return avgKoalas2;
};
console.log(calcAverageK());

/*
JavaScript Fundamentals – Part 2
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores �
GOOD LUCK �
*/
/*
function checkWinner(avgDolhins, avgKoalas) {
  if (avgDolhins >= avgKoalas * 2) {
    const dolp = console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})`);
    return dolp;
  } else if (avgKoalas >= avgDolhins * 2) {
    const koal = console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
    return koal;
  }
}

console.log(checkWinner(dolp, koal));

//solution
const calcAverage = (a, b, c) => (a + b + c) / 3;
//§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
const avgDolhins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

console.log(avgDolhins);
console.log(avgKoalas);

/*
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2

function checkWinner(avgDolhins, avgKoalas) {
  if (avgDolhins >= avgKoalas * 2) {
    const dolpinsWin = console.log(
      `Dolphins win (${avgDolhins} vs. ${avgKoalas})`
    );
    return dolpinsWin;
  } else if (avgKoalas >= avgDolhins * 2) {
    const koalasWin = console.log(
      `Koalas win (${avgKoalas}  vs. ${avgDolhins}`
    );
    return koalasWin;
  }else{
    console.log(`No team wins!`);
  }
}

checkWinner(avgDolhins, avgKoalas);



Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array) �
GOOD LUCK �

//Solution
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
// };
//OR
function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
}
//USING ARRAY
/* 2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
 
const bills = [125, 555, 44]; //#2
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]; //#3
console.log(bills, tips);

//OR
function calcTips(bill) {
  if (bill >= 50 && bill <= 300) {
    return (15 / 100) * bill;
  } else {
    return (20 / 100) * bill;
  }
}

const bills1 = [125, 555, 44]; //#2
const tips1 = [calcTips(bills[0]), calcTips(bills[1]), calcTips(bills[2])]; //#3
console.log(bills1, tips1);

// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
const total = [
  calcTips(bills[0]) + bills1[0],
  calcTips(bills[1]) + bills1[1],
  calcTips(bills[2]) + bills1[2],
];
console.log(total);

//OR
const total1 = [
  bills1[0] + tips1[0],
  bills1[1] + tips1[1],
  bills1[2] + tips1[2],
];
console.log(total);
*/

//OBJECTS==================================================
/*
const luckyArray = [
  "Jonas",
  "Schmedtmann",
  2024 - 1990,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const luckyObject = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2024 - 1990,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
/*
console.log(luckyObject);

console.log(luckyObject.lastName);
console.log(luckyObject["lastName"]);

const nameKey = "Name";
console.log(luckyObject["first" + nameKey]);
console.log(luckyObject["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Lucky? Choose between firstName, lastName, age, job and friends"
);
// console.log(interestedIn);
// console.log(luckyObject.interestedIn);
if (luckyObject[interestedIn]) {
  console.log(luckyObject[interestedIn]);
} else {
  console.log(
    `Invalid input! Please try again. What do you want to know about Lucky? Choose between firstName, lastName, age, job and friends`
  );
}

//To add element to the object using dot and [] notations

luckyObject.location = "Nigeria";
luckyObject["twitter"] = "@xtoluck";

console.log(luckyObject);

// console.log(
//   `${luckyObject[firstName]} has ${
//     luckyObject[friends[length - 1]]
//   } friends and his best friend is ${friends[0]}`
// );

console.log(
  `${luckyObject["firstName"]} has ${luckyObject["friends"].length} friends and his best friend is ${luckyObject["friends"][0]}`
);

console.log(
  `${luckyObject.firstName} has ${luckyObject.friends.length} friends, and his best friend is called ${luckyObject.friends[0]}`
);

console.log(`${luckyObject.friends.length}`);
console.log(`${luckyObject["friends"].length}`);

//class work
//Using the below object, write "Lucky is a 46 - year old teacher and he has a/no driver's license"
const luckyObject = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  // age: 1978,
  birthYear: 1978,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  // hasDriversLicense: true,
  hasDriversLicense: false,

  calcAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    } and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },

  // `${luckyObject.firstName} is a ${luckyObject.calcAge()}-year old ${
  //   luckyObject.job
  // } and he has a driver's license`
};
 
// console.log(luckyObject.calcAge());
// console.log(luckyObject.age);
// // console.log(this.age); //undefined

console.log(luckyObject.getSummary());
*/
/*
Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
GOOD LUCK �

//=================================//
const bmiM = {
  fullNameMark: "Mark Miller",
  massMark: 78,
  heightMark: 1.69,

  calcBMIMark: function () {
    const calcBMIM = bmiM.massMark / bmiM.heightMark ** 2;
    return calcBMIM;
  },
};

const bmiJ = {
  fullNameJohn: "John Smith",
  massJohn: 92,
  heightJohn: 1.95,

  calcBMIJohn: function () {
    const calcBMIJ = bmiJ.massJohn / bmiJ.heightJohn ** 2;
    return calcBMIJ;
  },
};

/*
// } and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
const comp = `${
  bmiM.calcBMIM > bmiJ.calcBMIJ
    ? "Mark's BMI ${bmiM.calcBMIMark()} is higher than John's ${bmiJ.calcBMIJohn()}"
    : "John's BMI ${bmiJ.calcBMIJohn()} is higher than Mark's ${bmiM.calcBMIMark()}"
}`;

if (bmiM.calcBMIM > bmiJ.calcBMIJ) {
  console.log(
    `Mark's BMI ${bmiM.calcBMIMark()} is higher than John's ${bmiJ.calcBMIJohn()}`
  );
} else {
  console.log(
    `John's BMI ${bmiJ.calcBMIJohn()} is higher than Mark's ${bmiM.calcBMIMark()}`
  );
}

console.log(`Mark's BMI: ${bmiM.calcBMIMark()}`);
console.log(`John's BMI: ${bmiJ.calcBMIJohn()}`);
// console.log(luckyObject.getSummary());

// getSummary: function () {
//   return `${this.firstName} is a ${this.calcAge()}-year old ${
//     this.job
//   } and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
// },

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    return (this.bmi = this.mass / this.height ** 2);
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return (this.bmi = this.mass / this.height ** 2);
  },
};

console.log(mark.calcBMI());
console.log(john.calcBMI());

console.log(john.bmi);
console.log(mark.bmi);

// if (mark.calcBMI() > john.calcBMI()) {
if (mark.bmi > john.bim) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`
  );
} else {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`
  );
}
//====================================================================================================
const mk = {
  fN: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
const jn = {
  fN: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

// console.log(mk.calcBMI());
// console.log(jn.calcBMI());

mk.calcBMI();
jn.calcBMI();
console.log(mk.bmi);
console.log(jn.bmi);
 
//LOOPS
//for loop
let i = 10;
for (let i = 1; i <= 10; i++) {
  console.log(`Hello world............${i}`);
}

const luckyArray = [
  "Jonas",
  "Schmedtmann",
  2024 - 1990,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

const types = [];

for (let i = 0; i < luckyArray.length; i++) {
  //Reading from LuckyArray
  console.log(luckyArray[i], typeof luckyArray[i]);

  //filling types array, const types = [];
  types[i] = typeof luckyArray[i];
  //another way of filling types array, const types = [];
  types.push(typeof luckyArray[i]);
}

console.log(types, luckyArray[i]);

////////////////////////////////////////

const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

//continue and break;
console.log(`Printing out ONLY strings`);
for (let i = 0; i < years.length; i++) {
  if (typeof luckyArray[i] !== "string") continue;
  console.log(luckyArray[i], typeof luckyArray[i]);
}

//continue and break;
console.log(`Break with Number`);
for (let i = 0; i < years.length; i++) {
  if (typeof luckyArray[i] === "number") break;
  console.log(luckyArray[i], typeof luckyArray[i]);
}


const luckyArray = [
  "Jonas",
  "Schmedtmann",
  2024 - 1990,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

for (let i = luckyArray.length - 1; i >= 0; i--) {
  console.log(i, luckyArray[i]);
}
*/
/*
Coding Challenge #4
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays �
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
GOOD LUCK �
*/
// 1. Create an array 'bills' containing all 10 test bill values
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

//2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// const tips = [];
// const totals = [];

/*3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays �


function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill; //This is the tip's computation
}
const billsArray = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < billsArray.length; i++) {
  const tip = calcTip(billsArray[i]);
  tips.push(tip);
  totals.push(tip + billsArray[i]);
}

// console.log(totals);
/*
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
GOOD LUCK �

//.4
function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // const sum = sum + arr[i];
    sum += arr[i];
    // console.log(`Sum: ${sum} at ${[i]}`);//fibonacci sequence
  }
  return sum / arr.length; // this is the average
}
console.log(calcAverage(totals));
console.log(calcAverage(tips));
console.log(calcAverage([2,3,7]));
console.log(calcAverage([22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]));
*/

/*
PROBLEM:
We work for a company building a smart home thermometer. Our most recent task is this:
"Given an array of temperatures of one day, calculate the temperature amplitude. Keep 
in mind that sometimes, there might be a sensor error. "

SOLUTION
========
*/
/*Understanding the problem
  What's temperature amplitude? - the difference between the minimum and maximum temperature that
                                occurred within a specific recording time period (e.g. last 24h)

//const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

*/
/*
// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
function calcTempAmplitude(temperatures) {
  let max = temperatures[0];
  let min = temperatures[0];
  for (let i = 0; i < temperatures.length; i++) {
    if (temperatures[i] > max) {
      max = temperatures[i];
    } else if (temperatures[i] < min) {
      min = temperatures[i];
    }
  }
  console.log(`Max: ${max}`);
  console.log(`Min: ${min}`);
}

 
==================================
Developer Skills & Editor Setup
==================================
Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
GOOD LUCK �
*/


// getSummary: function () {
//   return `${this.firstName} is a ${this.calcAge()}-year old ${
//     this.job
//   } and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
// },



function printForecast(arr) {
  for (let i = 0; i < arr.length; i++) {
    // return`${arr[i.valueOf]>1?'s':''}`
    console.log(`${arr[i.valueOf]>1?'s':''} ${arr[i]}ºC in ${i + 1}day`);
  }
}
printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
