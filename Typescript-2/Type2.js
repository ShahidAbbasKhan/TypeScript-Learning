"use strict";
exports.__esModule = true;
var str = ["shahid", "Khan", "Niazi"];
var newArr = str.map(function (myString) {
    return "My name is ".concat(myString);
});
console.log(newArr);
//void type function .... nothing return => will display error if we return anay data
function getVal(name) {
    console.log(name);
}
getVal("Shahid");
//never type function .... returns nothing but throw and exception
function errorHandling(str) {
    throw new Error(str);
}
//  errorHandling("shahid");
//object type Functions
function enrollCourse(obj) {
    return obj;
}
var course = { courseNmae: "JS", ID: 888, Institution: "CUST" };
console.log(enrollCourse(course));
var p1;
p1 = {
    name: "shahid",
    age: 12,
    Graduated: true
};
var name;
var user = {
    id: 3,
    name: "shahid"
};
function getCardDetails(cardDetails) {
    console.log(cardDetails);
    return cardDetails;
}
getCardDetails({ CardNumber: 123, CardDate: 789, cvv: 999 });
//Arrays
//1st way of array iniating
var myNumbers = [];
myNumbers.push(8888);
//2nd way of aaray iniating
var numberArray = [];
numberArray.push(7899, 899, 9000);
var ourUser = [];
ourUser.push({ name: "", age: 89 });
//Unions 
var amount;
amount = "Sixty Seven Thousands";
amount = 67000;
var human;
human = { name: "shahid", enrollID: 123 };
human = { name: "shahid", teacherID: 6777 };
function checkValue(amount) {
    if (typeof amount === "string") {
        console.log(amount.toUpperCase());
    }
    else {
        console.log(amount.toFixed(2));
    }
}
checkValue("one thousand");
checkValue(1000);
