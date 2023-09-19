// Question 1 :- Create an array of numbers and take input from the user to add numbers to this array.

let numbers = [1,2,3,4,5,6,7,8];
let addNum = prompt("Enter a number : ");
addNum = Number.parseInt(addNum);
numbers.push(addNum);
console.log(numbers);


// Question 2 :- Keep adding numbers to the array in Question One untill 0 is added to the array.

let numberArray = [11,12,13,14,15,16,17,18];
let addNumbers;
do {
    addNumbers = prompt("Enter a number : ");
    addNumbers = Number.parseInt(addNumbers);
    numberArray.push(addNumbers);
    
} while (addNumbers !=0 );
console.log(numberArray);

// Question 3 :- Filter for numbers divisible by 10 from a given array.

let divNum = [10,15,20,25,30,35,40,45,50,55,60,65,70,120,140,145,210,1100,1010];
let filteredArray = divNum.filter((numDivByTen) => {
    return divNum % 10==0;
});
console.log(filteredArray);


// Question 4 :- Create an array of square of a given number.

let arraySquare = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let n1 = arraySquare.map((x) => {
  return x * x;
});
console.log(n1);


// Question 5 :- Use reduce to calculate factorial of a given number from an array of first n natural numbers (n belong to the number whose factorial needs to be calculated.)
let numberFact = prompt("Enter the number you want factorial : ");
numberFact = Number.parseInt(numberFact);
let array = [];
while (numberFact != 1) {
    array.push(numberFact);
    numberFact -=1;
}

let factArray = array.reduce((num1, num2) => {
    return num1 * num2;
});
console.log(factArray);
console.log(array);