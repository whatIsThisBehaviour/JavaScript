// For Loop ! Quiz 1 :

let number = parseInt(prompt("enter the number you want factorial : "));

let factorial = 1;
if (isNaN(number)) {
    console.log("Invalid. Please enter a number.");
}
else if (number < 0) {
    console.log("Invalid Input. Negative Number.");
}

else if (number === 0){
    console.log("The factorial of 0 is 1");
}

else if (number > 0){
    for (let i = 0; i <= number; i++) {
      factorial*=i;
    }
    console.log("The factorial of " + factorialNumber + " is " + factorial);
}


