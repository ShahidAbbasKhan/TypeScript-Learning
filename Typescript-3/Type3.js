//Tuples   (data order matter as defined data type)
var favColor;
favColor = [236, 234, 345];
console.log(favColor);
var siteIs;
siteIs = ["PIAIC", "https://piaic.org.pk ", 5699887];
console.log(siteIs);
var newUser = ["myUsername", 99887767];
newUser.pop();
console.log(newUser);
newUser.push("shahid");
console.log(newUser);
newUser.shift();
console.log(newUser);
newUser.unshift("Khan");
console.log(newUser);
//enums  (return number type start from 0 index automatically)
var selectedSize;
(function (selectedSize) {
    selectedSize[selectedSize["Small"] = 0] = "Small";
    selectedSize[selectedSize["Medium"] = 1] = "Medium";
    selectedSize[selectedSize["Large"] = 2] = "Large";
    selectedSize[selectedSize["XL"] = 3] = "XL";
    selectedSize[selectedSize["XXL"] = 4] = "XXL";
})(selectedSize || (selectedSize = {}));
var sizeIs = selectedSize.Large;
console.log(sizeIs); //2
//now will start from 5 and so on
var jacketSize;
(function (jacketSize) {
    jacketSize[jacketSize["Small"] = 5] = "Small";
    jacketSize[jacketSize["Medium"] = 6] = "Medium";
    jacketSize[jacketSize["Large"] = 7] = "Large";
    jacketSize[jacketSize["XL"] = 8] = "XL";
    jacketSize[jacketSize["XXL"] = 9] = "XXL";
})(jacketSize || (jacketSize = {}));
var size = jacketSize.Large;
console.log(size); //7
//userdefined intializer
var shirtSize;
(function (shirtSize) {
    shirtSize["Small"] = "small";
    shirtSize[shirtSize["Medium"] = 7] = "Medium";
    shirtSize[shirtSize["Large"] = 8] = "Large";
    shirtSize[shirtSize["XL"] = 9] = "XL";
    shirtSize[shirtSize["XXL"] = 10] = "XXL";
})(shirtSize || (shirtSize = {}));
var User = {
    userId: 789,
    email: "shahid@gmail.com",
    name: "shahid",
    getValue: function () {
        return "myString";
    }
};
console.log(User);
