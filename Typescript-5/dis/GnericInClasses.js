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
