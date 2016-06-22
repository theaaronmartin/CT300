/*
We are going to create a very simple game.
Things you will have to Google:
1.  Generating a random number(hint: Math.random())
2.  Running a timer (hint: setInterval, clearInterval, etc)
3.  Compare a start time and current time by seconds (hint: new Date)
The rules of the game are as follows:
Someone ate Rush's chicken pot pie!  We know it was someone in class, but we don't know who.  Luckily, Tim knows, but he's going to make you guess.
Goals of the game:
*/

// 1.  Use the following array to represent all students:

var students = [
  { id: 1, firstname: "Markham", lastname: "Gross" },
  { id: 2, firstname: "Ari", lastname: "Zamudio" },
  { id: 3, firstname: "Liam", lastname: "Hurt" },
  { id: 4, firstname: "Mike", lastname: "McDermott" },
  { id: 5, firstname: "Dylan", lastname: "Eckert" },
  { id: 6, firstname: "Aaron", lastname: "Martin" },
  { id: 7, firstname: "Markus", lastname: "Brun" },
  { id: 8, firstname: "Blaze", lastname: "Halderman" },
  { id: 9, firstname: "Jayson", lastname: "Smith" },
  { id: 10, firstname: "Svyatoslav", lastname: "Safonov" }
]

// var Student = function(id, firstName, lastName) {
//   this.id = id;
//   this.firstName = firstName;
//   this.lastName = lastName;
// };
//
// Student.prototype.id = function () {
//   return this.id;
// };
//
// Student.prototype.firstName = function () {
//   return this.firstName;
// };
//
// Student.prototype.lastName = function () {
//   return this.lastName;
// };
//
// var students = new Student([1, "Markham", "Gross", 2, "Ari", "Zamudio", 3, "Liam", "Hurt", 4, "Mike", "McDermott", 5, "Dylan", "Eckert", 6, "Aaron", "Martin", 7, "Markus", "Brun", 8, "Blaze", "Halderman", 9, "Jayson", "Smith", 10, "Svyatoslav", "Safonov"])




// 2.  Start the game:
//  2.a Find a random number that represents the id of *one* of the students and store it as a global variable called "rightAnswer"
//  2.b Give the user a starting score of 10 and store it in a global variable called "currentScore"
//  2.c Create an empty array to save previous guesses, and store it in a global variable called "previousGuesses"
//  2.d Start a timer using javascript, store & update the result as seconds in a global variable called "gameClock"

// 3.  Display a prompt:  "Guess who ate the pie?  Enter initials only."
//  3.a If the value matches a previous guess, display an alert: "You already guessed that!"
//  3.b If the value matches no initials, display an alert: "No matching student found."
//  3.c If a matching student is found who has not already been guessed, compare their ID to "rightAnswer"
//    3.c.1  If the ID is equal to "rightAnswer", display an alert "You win with a score of [currentScore] in [gameClock] seconds!"
//    3.c.2  If the ID is not equal:
//      3.c.2.a Reduce "currentScore" by 1
//      3.c.2.b Add the incorrect student to "previousGuesses"
//      3.c.2.c Display an alert: "Wrong!  Find the pie!"
//      3.c.2.d Repeat step 3


// 4.  If "gameClock" hits 20 seconds:
//  4.1 Display an alert: "Sorry, you lost without finding pie.  Please try again."
//  4.2 Restart the game by resetting to step 2

// 5.  Allow the game to be restarted at any time by typing "restart()" in the console.

var rightAnswer = getRandomInt(1, 11);
var currentScore = 10;
var previousGuesses = [];
var gameClock
var initials = rightAnswer.firstname.slice(0,1) + rightAnswer.lastname.slice(0,1);

function getRandomInt(min, max) {
  var randomStudent = Math.floor(Math.random() * students.length);
  var selectedStudent = students[randomStudent];
  return selectedStudent;
  console.log(selectedStudent);
}

console.log(rightAnswer);

var makeGuess = function() {
var correct = false;
while(!correct) {
var guess = prompt('The pie motherfucker! Who stole it?! Initials only!');
  if (guess === initials) {
    alert('Hell yeah!');
    correct = true;
  }
    else {
      previousGuesses.push({guess}) && alert('You wrong sucka! Try again!');
    }
  }
}
makeGuess()


//
// students.whoDunnit = function() {
//   var pickStudent = prompt('Guess who ate the pie! Enter initials only');
//     for (var i = 0; i < students.length; i++) {
//       if (pickStudent === this.students[i].firstname + this.students[i].lastname) {
//         return this.students[i]
//       }
//     }
//     alert('Wrong! Guess again!')
// };

students[0].firstname[0] + students[0].lastname[0]
students[1].firstname[0] + students[1].lastname[0]
students[2].firstname[0] + students[2].lastname[0]
students[3].firstname[0] + students[3].lastname[0]
students[4].firstname[0] + students[4].lastname[0]
students[5].firstname[0] + students[5].lastname[0]
students[6].firstname[0] + students[6].lastname[0]
students[7].firstname[0] + students[7].lastname[0]
students[8].firstname[0] + students[8].lastname[0]
students[9].firstname[0] + students[9].lastname[0]
