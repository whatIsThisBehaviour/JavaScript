// Question -  : Create a variable of type string and try to add a number to it.

let nameOne = "Sajjad";
let num = 7;
let sumOfNameAndNumber = (nameOne + num);
console.log(sumOfNameAndNumber);

// Question - 2 : Use typeof operator to find data type of string in the last question.

console.log(typeof(sumOfNameAndNumber));

// Question - 3 : Create a const object in JS. Can you cange it to hold a number later ?

const studentMarks = {
    Hayat : 47,
    Zaveria : 87,
    Mir : 98,
}

//  No : Error : Assignment to constant identifier : studentMarks = 47;
console.log(studentMarks)

// Question - 4 : Try to add a new key to the const object.

studentMarks['Humayun'] = 99;
studentMarks['Hayat'] = 99;
console.log(studentMarks);

// Question - 5 : Write a JS program to create a word meaning dictionary of 5 words.

const dictionary = {
  Ataraxia: "a state of freedom from emotional disturbance and anxiety.",

  Circumlocution: "a roundabout or indirect way of speaking.",
  Egregious: "extraordinary in some bad way.",
  Luddite: "someone who is opposed or resistant to new technologies or technological change.",
  Yakka: "work, especially hard work.",
};

// console.log(dictionary. Ataraxia); a state of freedom from emotional disturbance and anxiety.
// console.log(dictionary['Yakka']); work, especially hard work.
// console.log(dictionary[{}])  undefined
// console.log(dictionary={});  Error : Assignment to constant variable
