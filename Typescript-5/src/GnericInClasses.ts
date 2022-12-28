//Generic extends

interface connect{
    userName:string,
    password:string,
    Id:number

}
function getConnected<Type, Types extends connect>(val1:Type, val2:Types): Object{
    return{
        val1, val2
    }

}
getConnected(555,{userName:"shahid",Id:666,password:"SHAHIS123"});

//Generic in Classes
interface Quiz{
    name:string,
    type:string,
    id:number
}
interface Book {
    bookName:string,
    subject:string,
    author:string,
}

class QuizBook<Type extends Quiz & Book>{
    private cart:Type[]=[];
    addtoCart(quiz:Type){
        this.cart.push(quiz);
    }
}

const newObj= new QuizBook();
newObj.addtoCart({ name:"1st Quiz",type:"Long",id:76,bookName:"PF",subject:"CS",author:"SHAHID"})


// Narrowing

function provideId(Id:string | null):string{
    if(!Id){
        return ("Provide Id");
    }
    return  Id.toUpperCase();
}
//typeof null and array is Object
function printStrings(str:null |string | string[]){
    if(str){
        if(typeof str==="object"){
        for(const s of str){
            console.log(s);
        }
       }
    }
    else if(typeof str==="string"){
        console.log(str);
    }
    
}
//"in "keyword using with narrowing
interface student{
    name:string,
    id:number,
    isStudent:boolean
}
interface Admin{
    name:string,
    id:number,
    isAdmin:boolean
}
function validation(check : Admin | student):boolean{
    if("isAdmin" in check){
        return check.isAdmin;
    }
    ("isStudent" in check);{
        return check.isStudent;
    }
}

//instance of using Narrowing
let x= new Date();
function getValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
    
  } else {
    console.log(x.toUpperCase());
    
  }
}
getValue(x);

//Discriminated unions using Narrowing

interface circle{
    kind:"circle",
    radious:number
}
interface rectangle{
    kind:"rectangle",
    length:number,
    width:number
}
interface square{
    kind:"square",
    side:number
}
type Shape= circle  | square | rectangle;

function getShape(shape:Shape) {
    if(shape.kind=="circle"){
        return Math.PI * shape.radious ** 2;
    }
    else if(shape.kind=="square"){  
        return shape.side * shape.side;
    }
    else{  
        return shape.width * shape.length;
    }
  
}
//Exhaustiveness checking with never  (never type to represent a state which shouldn’t exist.)


function getArea(shape:Shape) {
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radious ** 2;
            
        case "rectangle":
            return shape.width * shape.length;
        case "square":
            return shape.side * shape.side;
        default:
            const defalutVal:never=shape;
            return defalutVal;
    }
}

