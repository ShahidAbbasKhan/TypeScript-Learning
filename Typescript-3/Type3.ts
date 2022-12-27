//Tuples   (data order matter as defined data type)

let favColor:[number,number,number];
favColor=[236,234,345];
console.log(favColor);

let siteIs:[name:string, url:string, ipAddress:number];
siteIs=["PIAIC", "https://piaic.org.pk ", 5699887];
console.log(siteIs);

// can use array methods on tuple then it will not restrict on order of the data 
type User=[string, number];
let newUser:User=["myUsername", 99887767];

newUser.pop();
console.log(newUser);

newUser.push("shahid");
console.log(newUser);

newUser.shift();
console.log(newUser);

newUser.unshift("Khan");
console.log(newUser);

//enums  (return number type start from 0 index automatically)

  enum selectedSize {
     Small, Medium, Large, XL,XXL
  }
  let sizeIs= selectedSize.Large;
  console.log(sizeIs); //2

  //now will start from 5 and so on
  enum jacketSize {
    Small=5, Medium, Large, XL,XXL
 }
 let size= jacketSize.Large;
  console.log(size);  //7

  //userdefined intializer
  enum shirtSize {
    Small="small", Medium=7, Large, XL,XXL
 }


 //interface
 