//String type
let greetings:string ="Hello Shahid";
//Number type
const rollNo:number=345;
//boolean
let newBoolean: boolean = true;
console.log(`${greetings},your Roll Number is ${rollNo} , Your Rollnumber is greater than 300 ? ${newBoolean}`);

//type inference
let newType=123;
newType=666;
console.log(newType);

//type Literal(in literal value and type will be same)

const name="shahid";
let Name="shahid";
// name="shahid khan"; //error
let fruits: "mangoes" | "apples" | "bananas";
fruits= "mangoes";
// fruits="oranges"; //error


//Literal with union

let Id: "888" | number;
Id=900; //ok
// Id="700"; //error
Id="888"; //ok

//any type (turn off the type checking)
let anyType;
function UnpredictedType(){
    //return can be string , number or other ...dont know about future type of anyType variable
    return true;
}
anyType=UnpredictedType();
console.log(anyType);


//object type (object have methods and properties)
let student:{
    name:string,
    id:number
  }
  let st1=student ={name:"shahid",
    id:555}
  
  let poet:{
    address:string,
  }
  let p1=poet={address:"Rwp"}
//type in object
type poet={Name:string, address:string}
let poet1:poet;
poet1={Name:"Allama Iqbal", address:"Sialkot"};

//object advance (part1)
type student={
    name:string,
    id:number
  }
  let st11:student ={name:"shahid",
    id:555};
  let st2=st11;
    console.log(st2)// will print value
  let st3=st11={name:"Khan", id:70};
  console.log(st3); //will print st3 value

//below code will work same  as above(part1) difference is that one is using static staructure
// and other is using type
  let students:{
    name:string,
    id:number
  }
  let st111=students ={name:"shahid",
    id:555};
  let st222=st111;
    console.log(st222)// will print value
  let st333=st111={name:"Khan", id:70};
  console.log(st333); //will print st3 value


//Functions
function addNum(num:number){
    return num+7;
}
console.log(addNum(6));

function lowerCase(str:string){
    return str.toLowerCase();
}
console.log(lowerCase("Shahid"));

function signUp(num:number, value ?:boolean){   
}
signUp(23); //no error

function signUp1(num:number, value:boolean){   
}
// signUp1(23); //error, missing argument value

function signUp2(num:number, value:boolean=true){   
}
signUp2(23,false); //no error

function songBy(singer:string, rating:number=3,...song:string[]):void{
    for(const s of song){
        if(singer){
        console.log(`This ${s} is sung by ${singer} having rating ${rating}`);
     }
     else{
        console.log(`This ${s} has ${rating}`);
     }
    }
}
songBy("Atta", 5,"Song1", "Song2", "Song3");

function addition(num1:number,num2:number):number{
    return num1+num2;
}
addition(9,8);

//Advance in Functions
function getValue(bol:boolean):number | boolean{
    if(bol===false){
        return 200;
    }
    else{
        return  true;
    }
}
console.log(getValue(false));

let arrowFunc=(numb:number):number=>{
    return numb+2;
}
console.log(arrowFunc(8));


export{}