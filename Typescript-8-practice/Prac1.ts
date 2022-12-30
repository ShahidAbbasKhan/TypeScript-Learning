let identity1={name:"shahid", id:8};
let identity2={pasword:234,name:"shahid", id:8};
identity1=identity2; //no error
console.log(identity1);
console.log(identity2);

type callback=(string)=> void;
function usingCallback(func:callback){
    func("passing str ");
}

enum color {red=1, blue, green}
let colorName:string=color[2];
console.log(colorName); //blue

const enum color2 {red=1,blue,green}
let colorName2=color2["green"]; //(when enum is cont can only pass string)
console.log(colorName2); //3 

enum colors {red=1, blue=2, green=4}
let colorName1:number=colors["blue"];
console.log(colorName1); //2


let myType=<any> {name:"shahid",id:8};
myType={id:8,name:"shahid"};
myType={id:9,name:"shahid", val:false};
myType={name:"shahid", val:false};



