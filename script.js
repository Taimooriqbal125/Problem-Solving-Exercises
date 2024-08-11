// Write a Js Program Using Function to Check Whether the number is even or odd?

function even(a) {
  if (a % 2 == 0) {
    console.log("Number is Even");
  } else {
    console.log("Number is Odd");
  }
}

even(3);

// Write a JS program using IF-ELSe to check whether a number is negative, positive or zero ?

var number = 2;
if (number < 0) {
  console.log("Number is Negative ");
} else if (number > 0) {
  console.log("Number is Positive");
} else {
  console.log("Zero");
}

// Write a js program using if else to check whether a character is uppercase or lowercase alphabet?

var char = "D";
if (char <= "Z") {
  console.log("UpperCase");
} else {
  console.log("LowerCase");
}

// Write a js program to print all alphabets from a to z. - using while loop?

var ch = "abcdefghijklmnopqrstuvwxyz";
var i = 0;
while (i < ch.length) {
  console.log(ch[i]);
  i++;
}

//  Write a Js program to write all odd numbers from 0 to 100 ?

var oddNumbers = 1;
while (oddNumbers <= 100) {
  console.log(oddNumbers);
  oddNumbers += 2;
}

// Write a js program to find sum of digits of a given number using function ?
function digits(a, b, c) {
  var results = a + b + c;
  console.log(results);
}

digits(10, 22, 2);

// Write a js program to delete an element from an array at specified position ?
var resut = (eleents = ["22", "52", "98", "42", "72", "223"]);
eleents.splice(2, 4, "88");
console.log(resut);
console.log("Original", eleents.length);

// Write a js program to find maximum and minimum elements in array using function ?
function max(a) {
  if (a <= 100) {
    console.log("number is less than 100");
  } else if (a >= 1000) {
    console.log("number is greater than 1000");
  } else {
    console.log("Error");
  }
}

max(3300);

// 1. Write a JavaScript program to list the properties of a JavaScript object
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Sample Output: name,sclass,rollno

class Student {
  constructor(name, sclass, rollno) {
    this.Name = name;
    this.Sclass = sclass;
    this.Rollno = rollno;
  }
  studentFoam() {
    console.log(
      `Name : ${this.Name} Sclass : ${this.Sclass} Rollno : ${this.Rollno}`
    );
  }
}
var a = new Student("David Rayy", "VI", 12);
a.studentFoam();

// Q  Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
// var library = [
//    {
//        author: 'Bill Gates',
//        title: 'The Road Ahead',
//        readingStatus: true
//    },
//    {
//        author: 'Steve Jobs',
//        title: 'Walter Isaacson',
//        readingStatus: true
//    },
//    {
//        author: 'Suzanne Collins',
//        title:  'Mockingjay: The Final Book of The Hunger Games',
//        readingStatus: false
//    }];

class Library {
  constructor(author, title, status) {
    this.author = author;
    this.booktitle = title;
    this.readingstatus = status;
    console.log("Library Books Data");
  }
  readingfoam() {
    console.log(`Author Name is : ${this.author}`);
    console.log(`Book Title is : ${this.booktitle}`);
    console.log(`Reading Status :  ${this.readingstatus}`);
  }
}

var a = new Library("Bill Gate", "Road ahead", "True");
var b = new Library("Steve Jobs", "Walter Isaacson", "True");
var c = new Library(
  "Suzanne Collins",
  "Mockingjay: The Final Book of The Hunger Games",
  "False"
);

a.readingfoam();
b.readingfoam();
c.readingfoam();

// Q. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

class Schooldata {
  constructor(name , sclass , rollno) {
    this.name = name;
    this.sclass = sclass;
    this.srollno = rollno;
    console.log("constructor");
  }
  info(){
    console.log(`student name ${this.name} student class is ${this.sclass}`)
  }

  infoo(){
    console.log(`student name ${this.name} student class is ${this.sclass} roll no is ${this.srollno}`)
  }
}

var a = new Schooldata("hannan", "VI" , 123);
a.info();
// withrollno

a.infoo(); 

// Write a JS program to check whether alphabet is vowals or constant?
var char = "a";
switch (char) {
  case "a":
    console.log("Vowals");
    break;
  case "e":
    console.log("Vowals");
    break;
  case "i":
    console.log("Vowals");
    break;
  case "o":
    console.log(Vowals);
    break;
  default:
    console.log("Constant");
}

// Write a js program to input any character and check whether it is alphabet, digit or special character.
let input = 1 ;
let alphabet = a;
if(input == "string"){
  console.log("alphabet")
}
// else if (input == ) 

// Write a js program to input month number and print number of days in that month.
let month = 2;
if(month == 1,3,5,7,8,12){
    console.log(31)
}
else if(month == 2,4,6,9,10,11){
console.log(30)
}
else{
    console.log("error")
}

// Write a js program to merge two array to third array.
let a = [1,2,3,4,5];
let b =[6,7,8,9];
let c = a.concat[b,10,11,12]
console.log(c)