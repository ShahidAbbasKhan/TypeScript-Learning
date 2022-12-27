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

//any type (turn off the type checking)
let anyType;
function UnpredictedType(){
    //return can be string , number or other ...dont know about future type of anyType variable
    return true;
}
anyType=UnpredictedType();
console.log(anyType);

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
signUp2(23); //no error

function addition(num1:number,num2:number):number{
    return num1+num2;
}
addition(3,8);

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