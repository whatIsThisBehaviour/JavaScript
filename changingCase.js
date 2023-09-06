var nameOne = "hello world!";
var nameTwo = "GOODBYE WORLD!";

console.log(nameOne.toUpperCase());
console.log(nameTwo.toLowerCase());

// Slicing and Case Changing //

var nameZee = "ANGELA YU";
var zeeName = "haider";
var cut2 = nameZee.slice(0,1);
var cut = nameZee.slice(1,6);
var cut3 = nameZee.slice(7,8);
var cut4 = nameZee.slice(8,9);
var low1 = cut.toLowerCase();
var low2 = cut4.toLowerCase();

console.log(cut2 + low1 + " " + cut3  + low2);

var cutNew1 = zeeName.slice(0,1);
var up1 = cutNew1.toUpperCase();
var cutNew2 = zeeName.slice(1,6);
console.log(up1 + cutNew2)