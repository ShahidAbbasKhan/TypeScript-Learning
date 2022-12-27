"use strict";
exports.__esModule = true;
//String type
var greetings = "Hello Shahid";
//Number type
var rollNo = 345;
//boolean
var newBoolean = true;
console.log("".concat(greetings, ",your Roll Number is ").concat(rollNo, " , Your Rollnumber is greater than 300 ? ").concat(newBoolean));
//type inference
var newType = 123;
newType = 666;
console.log(newType);
//any type (turn off the type checking)
var anyType;
function UnpredictedType() {
    //return can be string , number or other ...dont know about future type of anyType variable
    return true;
}
anyType = UnpredictedType();
console.log(anyType);
//Functions
function addNum(num) {
    return num + 7;
}
console.log(addNum(6));
function lowerCase(str) {
    return str.toLowerCase();
}
console.log(lowerCase("Shahid"));
function signUp(num, value) {
}
signUp(23); //no error
function signUp1(num, value) {
}
// signUp1(23); //error, missing argument value
function signUp2(num, value) {
    if (value === void 0) { value = true; }
}
signUp2(23); //no error
function addition(num1, num2) {
    return num1 + num2;
}
addition(3, 8);
//Advance in Functions
function getValue(bol) {
    if (bol === false) {
        return 200;
    }
    else {
        return true;
    }
}
console.log(getValue(false));
var arrowFunc = function (numb) {
    return numb + 2;
};
console.log(arrowFunc(8));
