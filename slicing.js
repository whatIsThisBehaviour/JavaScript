var sentence = prompt("Enter a sentence : ");
var count = 140;
var lengthOfSentence = sentence.length;
var actualCount = count - lengthOfSentence;
var answer = ("You have used " + lengthOfSentence + " characters, and you have " + actualCount + " characters remaining");
console.log(answer);
var slicedSentence = sentence.slice(0,141);
console.log(slicedSentence);