/* JavaScript Fundamentals – Part 1  */

//   QC_1:
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

Tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:
. Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
  m tall.
. Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
  m tall.
*/
// SOLUTION
const Mark_Weight = 78;
const Mark_Height = 1.69;
const John_Weight = 92;
const John_Height = 1.95;

const BMI_Mark = Mark_Weight / Mark_Height ** 2;
const BMI_John = John_Height / John_Weight ** 2;

const markHigherBMI = BMI_Mark > BMI_John;
console.log(BMI_Mark, BMI_John);

//   QC_2:
/*
Use the BMI example from QC_1, and the code already written, and
improve it.

Tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!" 
*/
// SOLUTION
if (BMI_Mark > BMI_John) {
  console.log(`Mark's BMI (${BMI_Mark}) is higher than John's! (${BMI_John})`);
} else {
  console.log(`John's BMI (${BMI_John}) is higher than Mark's! (${BMI_Mark})`);
}

//   QC_3:
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!

Tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher average score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy

Test data:
. Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
. Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
. Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/
// SOLUTION

//T_1
const avg_score_Dolphins = (96 + 108 + 89) / 3;
console.log(avg_score_Dolphins, "avg dolphin");
const avg_score_Koalas = (88 + 91 + 110) / 3;
console.log(avg_score_Koalas, "avg kolas");

//T_2
if (avg_score_Dolphins > avg_score_Koalas) {
  console.log("Winner is dolphin!");
} else if (avg_score_Dolphins < avg_score_Koalas) {
  console.log("Winner is Koalas!");
} else if (avg_score_Dolphins === avg_score_Koalas) {
  console.log("Its a Draw!");
}

//T_3 & T_4
const min_win_score = 100;
const T3_avg_score_Dolphins = (97 + 112 + 101) / 3;
console.log(T3_avg_score_Dolphins, "T2 avg dolphin");
const T3_avg_score_Koalas = (109 + 95 + 123) / 3;
console.log(T3_avg_score_Koalas, "T2 avg kolas");
if (
  T3_avg_score_Dolphins > T3_avg_score_Koalas &&
  T3_avg_score_Dolphins >= min_win_score
) {
  console.log("T3_avg_score_Dolphins is winner");
} else if (
  T3_avg_score_Koalas > T3_avg_score_Dolphins &&
  T3_avg_score_Koalas >= min_win_score
) {
  console.log("T3_avg_score_Koalas is winner");
} else if (
  T3_avg_score_Koalas === T3_avg_score_Dolphins &&
  T3_avg_score_Koalas >= min_win_score &&
  T3_avg_score_Dolphins >= min_win_score
) {
  console.log("Both wins");
} else {
  console.log("No one wins");
}

//   QC_4:
/*
  Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.

Tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”

Test data:
. Data 1: Test for bill values 275, 40 and 430

Hints:
. To calculate 20% of a value, simply multiply it by 20/100 = 0.2
. Value X is between 50 and 300, if it's >= 50 && <= 300 😉
*/

// SOLUTION
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);

/* JavaScript Fundamentals – Part 2  */

/* JavaScript Fundamentals – Part 2  */

//   QC_5:
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!

Tasks:
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
. Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
. Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

Hints:
. To calculate average of 3 values, add them all together and divide by 3
. To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉
*/

//SOLUTION
const calcAverage = (a, b, c) => (a + b + c) / 3;
// T1
let score_dol = calcAverage(44, 23, 71);
let score_kol = calcAverage(65, 54, 49);
console.log(score_dol, score_kol);
//T2
const checkWinner = (avgDolhins, avgKoalas) => {
  if (avgDolhins >= 2 * avgKoalas) {
    console.log(`Dolphin wins(${avgDolhins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolhins) {
    console.log(`Kolas wins(${avgKoalas} vs ${avgDolhins})`);
  } else {
    console.log("No one wins!");
  }
};
checkWinner(score_dol, score_kol);
// T3
score_dol = calcAverage(85, 54, 41);
score_kol = calcAverage(23, 34, 27);
console.log(score_dol, score_kol);
checkWinner(score_dol, score_kol);

//   QC_6:
/*
  Build a tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.

Tasks:
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
array) 😉
*/

// SOLUTION
const calcTip = (bill) => {
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  return tip;
};
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total_bill = [
  bills[0] + calcTip(bills[0]),
  bills[1] + calcTip(bills[1]),
  bills[2] + calcTip(bills[2]),
];
console.log(total_bill);

//   QC_7:
/*
  Let's go back to You and Me comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

Tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (life cool and enjoy life)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
*/
// SOLUTION
const YouBMI = {
  You: {
    fullName: "stay cool",
    Mass: "50",
    hight: 5.3,
  },
  calcBMI: function () {
    this.bmi = this.You.Mass / this.You.hight ** 2;
    return this.bmi;
  },
};

const MeBMI = {
  Me: {
    fullName: "Mrutyunajay life",
    Mass: "78",
    hight: 5.9,
  },
  calcBMI: function () {
    this.bmi = this.Me.Mass / this.Me.hight ** 2;
    return this.bmi;
  },
};
YouBMI.calcBMI();
MeBMI.calcBMI();
if (YouBMI.bmi > MeBMI.bmi) {
  console.log(`${
    YouBMI.You.fullName
  }'s BMI is (${YouBMI.calcBMI()}) higher than 
  ${MeBMI.Me.fullName}'s BMI is (${MeBMI.calcBMI()})!`);
} else if (MeBMI.bmi > YouBMI.bmi) {
  console.log(`${MeBMI.Me.fullName}'s BMI is (${MeBMI.calcBMI()}) higher than 
  ${YouBMI.You.fullName}'s BMI is (${YouBMI.calcBMI()})!`);
} else {
  console.log("Data error");
}

//   QC_8:
/*
Let's improve Tip calculator even more, this time using loops!

Tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 😉

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
*/
// SOLUTION
const _bills = [22, 295, 176, 440, 37, 105, 10, 1100, 52];
const _tips = [];
const _totals = [];
for (let i = 0; i < _bills.length; i++) {
  // using previous calcTip method
  const tip = calcTip(_bills[i]);
  _tips.push(tip);
  _totals.push(tip + _bills[i]);
}
console.log(_bills, _tips, _totals);

const calcAvg = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAvg(_totals, "327"));

/* Develop and Debug skills */

//   QC_9:
/*
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!

Test data:
. Data 1: [17, 21, 23]
. Data 2: [12, 5, -5, 0, 4]
*/
/*
   1 - understanding the problem
      > Array transformed to string separated by ...
      > what is the x days? Answer:x+1
   2- breaking up into sub problems
      > Transform array into string
      > Transform each element to string with ºC
      > strings need to contain day [index +1]
      > Add ... between elements and start and end of string
      > log string to console
 */
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}ºC in ${i + 1} days `;
  }
  console.log(str);
};
printForecast(data1);

/* Data Structures, Modern Operators and strings */

// QC_10:
/* 
We're building a football betting app !
Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:
1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
GOOD LUCK 😀
*/

// 1.
const [players1, players2] = game.players;
console.log(players1, players2);
// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
// 5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
// 6.
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored);
// 7.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

