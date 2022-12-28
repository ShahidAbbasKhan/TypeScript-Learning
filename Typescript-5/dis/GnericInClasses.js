"use strict";
//Generic extends
function getConnected(val1, val2) {
    return {
        val1, val2
    };
}
getConnected(555, { userName: "shahid", Id: 666, password: "SHAHIS123" });
class QuizBook {
    constructor() {
        this.cart = [];
    }
    addtoCart(quiz) {
        this.cart.push(quiz);
    }
}
const newObj = new QuizBook();
newObj.addtoCart({ name: "1st Quiz", type: "Long", id: 76, bookName: "PF", subject: "CS", author: "SHAHID" });
// Narrowing
function provideId(Id) {
    if (!Id) {
        return ("Provide Id");
    }
    return Id.toUpperCase();
}
//typeof null and array is Object
function printStrings(str) {
    if (str) {
        if (typeof str === "object") {
            for (const s of str) {
                console.log(s);
            }
        }
    }
    else if (typeof str === "string") {
        console.log(str);
    }
}
function validation(check) {
    if ("isAdmin" in check) {
        return check.isAdmin;
    }
    ("isStudent" in check);
    {
        return check.isStudent;
    }
}
//instance of using Narrowing
let x = new Date();
function getValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
getValue(x);
function getShape(shape) {
    if (shape.kind == "circle") {
        return Math.PI * shape.radious ** 2;
    }
    else if (shape.kind == "square") {
        return shape.side * shape.side;
    }
    else {
        return shape.width * shape.length;
    }
}
//Exhaustiveness checking with never  (never type to represent a state which shouldn’t exist.)
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radious ** 2;
        case "rectangle":
            return shape.width * shape.length;
        case "square":
            return shape.side * shape.side;
        default:
            const defalutVal = shape;
            return defalutVal;
    }
}
