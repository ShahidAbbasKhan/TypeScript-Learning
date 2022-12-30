var identity1 = { name: "shahid", id: 8 };
var identity2 = { pasword: 234, name: "shahid", id: 8 };
identity1 = identity2; //no error
console.log(identity1);
console.log(identity2);
function usingCallback(func) {
    func("passing str ");
}
var color;
(function (color) {
    color[color["red"] = 1] = "red";
    color[color["blue"] = 2] = "blue";
    color[color["green"] = 3] = "green";
})(color || (color = {}));
var colorName = color[2];
console.log(colorName); //blue
var colorName2 = 3 /* color2["green"] */;
console.log(colorName2); //2
var colors;
(function (colors) {
    colors[colors["red"] = 1] = "red";
    colors[colors["blue"] = 2] = "blue";
    colors[colors["green"] = 4] = "green";
})(colors || (colors = {}));
var colorName1 = colors["blue"];
console.log(colorName1); //2
var myType = { name: "shahid", id: 8 };
myType = { id: 8, name: "shahid" };
myType = { id: 9, name: "shahid", val: false };
myType = { name: "shahid", val: false };
