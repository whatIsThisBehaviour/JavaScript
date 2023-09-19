// Chapter 4 :- Practise Set
// Question - 1 : What will the following print in JS ? console.log("Har\"".length);

console.log("Har\"".length);

// Question - 2 : Explore the includes, starts with and ends with funcion of a string.

// Includes - the function includes check whether a string or variable has a word in it or not. Example.

var sentenceOne = "The fox lives in a jungle.";
var word = "fox";
var isInclude = `The word "${word}" ${sentenceOne.includes(word)? 'is' : 'is not'} in the sentence.`
console.log(isInclude);

// startsWith(); is used to check whether a string starts with a given word or not. The parameters are word and sometimes the index number as well

var thisIsToCheckANewMethod = "Hey ! It has been a wonderful journey so far.";
var doesThisStartWith = thisIsToCheckANewMethod.startsWith("Hey");
console.log(doesThisStartWith);
var anotherWay = thisIsToCheckANewMethod.startsWith("It", 6);
// The above parameter includes the indexed character.
console.log(anotherWay);

// endsWith(); is used to check whteher a string ends with a given word or not. It works in the same way as startsWith() method.
// The endsWith() method of String values determines whether a string ends with the characters of this string, returning true or false as appropriate.
var endsWithCheck = "Hello World! Today is Monday, The busiest and craziest day of the week.";
console.log(endsWithCheck.length);
console.log(endsWithCheck[70])
var doesItEndsWith = endsWithCheck.endsWith("week.");
console.log(doesItEndsWith);
var doesItEndsWithTwo = endsWithCheck.endsWith("week", 70);
// The above parameter excludes the indexed character.
console.log(doesItEndsWithTwo);
var doesItEndsWithThree = endsWithCheck.endsWith("week");
console.log(doesItEndsWithThree);



// Question - 3 : Write a program to convert a given string to lower case.

let name = "Sajjad";
console.log(name.toLowerCase());

// Question - 4 : Extract the amount out of the string "Please give Rs 1000".

let sentence = "Please give Rs 1000";
console.log(sentence.slice(14));

// Question - 5 : Try to change 4th character of a given string. Were you able to do it ?

let string = "Tableu";
// string[4] = "H" => Can't be done as strings are immutable.
console.log(string)

