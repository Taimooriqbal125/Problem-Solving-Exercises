// Write a Js Program Using Function to Check Whether the number is even or odd?

function even(a){
    if (a%2 == 0){
        console.log("Number is Even")
    }
    else{
        console.log("Number is Odd")
    }
}

even(3);

// Write a JS program using IF-ELSe to check whether a number is negative, positive or zero ?

var number = 2;
if (number < 0){
    console.log("Number is Negative ") }
else if(number > 0){
    console.log("Number is Positive")
} 
else{
console.log("Zero")
}

// Write a js program using if else to check whether a character is uppercase or lowercase alphabet?

var char = "D";
if (char <= "Z"){
    console.log("UpperCase")
}
else{
    console.log("LowerCase")
}

// Write a js program to print all alphabets from a to z. - using while loop?

var ch = "abcdefghijklmnopqrstuvwxyz";
var i = 0;
while (i < ch.length) {
    console.log(ch[i]);
    i++
 }

//  Write a Js program to write all odd numbers from 0 to 100 ?

var oddNumbers = 1;
while (oddNumbers <= 100){
    console.log(oddNumbers)
    oddNumbers+= 2
}

// Write a js program to find sum of digits of a given number using function ?
function digits(a,b,c){
    var results = a + b + c;
    console.log(results);
}

digits(10 ,22,2); 

// 