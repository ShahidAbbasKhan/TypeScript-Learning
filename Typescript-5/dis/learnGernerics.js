"use strict";
//Generics (malke components to Reuseable)
//accepeted value will be locked with Generic
function setValue(val) {
    return val;
}
setValue(8);
function setValues(val) {
    return val;
}
setValues("Hi Shahid");
function funcOne(val) {
    return val;
}
funcOne({ name: "shahid" });
//Generics in Arrays and Arrow functions
function returnValue(Val) {
    return Val[5];
}
function putValue(Val) {
    return Val;
}
function returnNumber(Val) {
    const indexIs = 7;
    return Val[indexIs];
}
//in arrow functions
const numberReturn = (Val) => {
    const indexIs = 7;
    return Val[indexIs];
};
