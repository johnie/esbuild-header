let myFirstName = 'Matthew';
let myMiddleName = 'Allen';
let myLastName = 'Campbell';
let myFullName = myFirstName + ' ' + myMiddleName + ' ' + myLastName; // Concatenation of 'myFirstname', 'myMiddleName' and 'myLastName'.
// console.log(myFullName); // Should print: "Matthew Allen Campbell".

const UNITED_STATES = 50;

let numberNine = 5 + 4;

// Determines if the first letter of 'myFirstName' begins with an "L" or an "l".
// "L" == 76.
// "l" == 108.
if ((myFirstName.charCodeAt(0) == 76) | (myFirstName.charCodeAt(0) == 108)) {
  alert('Back of the line!');
} else {
  alert('Next!');
}

// Calls the 'sayHello' function.
sayHello();

function sayHello() {
  alert('Hello World!');
}

checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18); // Displays alert() message.
checkAge('John', 17); // Displays alert() message.

let favVeggies = ['Carrots', 'Corn', 'Peas', 'Spinach', 'Broccoli', 'Zucchini'];

for (let i = 0; i < favVeggies.length; i++) {
  console.log(favVeggies[i]); // Displays each item in 'favVeggies' array.
}

const myOlivia = {
  name: 'Olivia',
  age: 23,
};

const myCody = {
  name: 'Cody',
  age: 27,
};

const myMegan = {
  name: 'Megan',
  age: 29,
};

const myMollie = {
  name: 'Mollie',
  age: 20,
};

const myToast = {
  name: 'Toast',
  age: 14,
};

const myFriends = [myOlivia, myCody, myMegan, myMollie, myToast];
// console.log(myFriends[0].name); // Should print: "Olivia".
// console.log(myFriends[3].age); // Should print: 20.

for (let i = 0; i < myFriends.length; i++) {
  checkAge(myFriends[i].name, myFriends[i].age);
}

getLength('Hello World'); // Should return: 11.

// Function that accepts an Integer ('age') associated with a String ('name') and checks if it is greater than 21.
function checkAge(name, age) {
  if (age < 21) {
    alert('Sorry ' + name + ", you aren't old enough to view this page!");
  } else {
    // Do nothing.
  }
}

// Function that accepts any String and returns the number of characters in the String.
// If the String is of even length, the message - "The world is even", should be displayed.
// Is the String is of odd length, the message - "The world is an odd place", should be displayed.
function getLength(anyWord) {
  // console.log(anyWord.length);
  let myWordLength = anyWord.length;
  // console.log(myWordLength);
  if (myWordLength % 2 == 0) {
    console.log('The world is even!'); // Even.
  } else {
    console.log('The world is an odd place!'); // Odd.
  }
}
