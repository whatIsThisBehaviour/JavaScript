// Declaring a variable //
var myString = "Hello, World!";
// To know the type of data we use the keyword - typeof //
console.log(typeof(myString));
// Declaring a variable of number type //
var myNumber = 123;
// To know the type of data we use the keyword - typeof //
console.log(typeof(myNumber));


// STRING CONCATENATION 

var message = "Hello";
var userName = prompt("What is your name ?");
console.log(message + " there, " + userName);

// Counting the length of the string //

var sentence = prompt("Enter Sentence : ");
var senLength = sentence.length;
var limit = 100;
var remaining = limit - senLength;
var outcome = "You have used " + senLength + " characters, and " + remaining + " character are remaining.";
console.log(outcome);
