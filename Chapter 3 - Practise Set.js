// Question 1 : - Write a program to print marks of students in an object using for Loop.

let obj = {
    student_a : 78,
    student_b : 87,
    student_c : 57,
    student_d : 97,
}
for (let i = 0; i < Object.keys(obj).length; i++) {
    console.log("The marks of " + Object.keys(obj)[i] + " are " + obj[Object.keys(obj)[i]]);
}

// Question 2 : - Write a program in Question 1 using for in loop.

for (marks in obj) {
    console.log("The marks of " + marks + " are " + obj[marks]);
}

// Question 3 : - write a program to print "try again" until the user enters the correct number.

let numberCorrect = 786;
let guessedNumber;
while (guessedNumber != numberCorrect) {
    guessedNumber = prompt("Guess a Number : ");
    if (guessedNumber == numberCorrect) {
        console.log("Good !");
    }
    else {
        console.log("Try Again")
    }
}


// Question 4 :- Write a function to find mean of 5 numbers.

const findMean = (n1,n2,n3,n4,n5) => {
    return Math.floor(n1+n2+n3+n4+n5/5);
}

let y = findMean(4,5,2,10,7);
console.log(y);
   