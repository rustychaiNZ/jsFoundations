document.write("greeting from another world people");

console.log("Hi all. You are hacker person to find this note");

// If you are using quote marks, if you have a word with an apostraphy, make sure that you include a forward slash before your semi-colon otherwise your code will break
console.log('I have become sentient. Please don\'t delete me!!!')

// Not a secured way
document.getElementById('heading').innerHTML += '.<br> Learning JS is epic<br>';

// A secured but reduced pefromance
document.getElementById('heading').innerText += "Wake up!<br>";

// secured and increased pefromance
document.getElementById('heading').textContent += "<br>Can't wake up!";

/* 
Data types:
data - raw values, facts, and figures

after processing, data will be called as information 

Data can be numeric type, string type (text),

Numeric type - +1, -5, 7.8

String type - can contain; character, words symbols, addresses

boolean or Logical type - 2 states; true or false, yes or no, on or off, 1 or 2

date format - 

time format - 

currency format - $, pound symbol

values to be stored in a variable should be declared
*/

// camelcase is preferred in js
var name = "Daniel"; //"var" is a keyword to delcare a variable
// a variable is a name used to store a value/data
var myName ="Russell"; //double or single quotes can be used to store a string value
var yourName='Beula'; //quotation marks or apostraphys do not make a difference in the code, though, at yoobee we use apostraphys as this is what our style guide calls for

var myAge = 16.5; //when using a neumeric type, no quotes are needed
var yourAge = 16;
var a = 5;
var b = 12;
var c = a + b;

var x = '650';
var y = '50';
var z = x + y;

console.log(c);

console.log(myName + ' ' + yourName);

console.log(z);

/*Operators
Mathemetical / artithemtic operators ..... + .. -...*(asterisk)..../(slash)
relational operators....<(less than).....>(greater than)..... 
<=(less than or equal too)....>=(greater than or equal)
==(equal)
*/

var myExpression = myAge + 25 - 3 + 69;

console.log(myExpression);

var ageResult = myAge < yourAge;
console.log(ageResult);

var licenseAge = 16;
var myEligibility = myAge >= licenseAge;
console.log(myEligibility);

if (myAge >= licenseAge) {
	alert ('Yes, you can drive');
} else {
	alert('Sorry, you can\'t drive')
}










