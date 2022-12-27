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
//enums
var selectedSize;
(function (selectedSize) {
    selectedSize[selectedSize["Small"] = 0] = "Small";
    selectedSize[selectedSize["Medium"] = 1] = "Medium";
    selectedSize[selectedSize["Large"] = 2] = "Large";
    selectedSize[selectedSize["XL"] = 3] = "XL";
    selectedSize[selectedSize["XXL"] = 4] = "XXL";
})(selectedSize || (selectedSize = {}));
var sizeIs = selectedSize.Large;
console.log(sizeIs);
