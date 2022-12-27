const str =[ "shahid","Khan","Niazi"];
    const newArr=str.map((myString:string):string=>{
       return `My name is ${myString}`;

    });
    console.log(newArr)

//void type function .... nothing return => will display error if we return anay data
function getVal(name:string):void{
   console.log(name);
}
getVal("Shahid");

//never type function .... returns nothing but throw and exception
function errorHandling(str:string):never{
    throw new Error(str);

}
//  errorHandling("shahid");

 //object type Functions

function enrollCourse(obj:{courseNmae:string, ID:number,Institution:string}):{courseNmae:string, ID:number,Institution:string}{
    return obj;
}
let course={courseNmae:"JS", ID:888,Institution:"CUST"};
console.log(enrollCourse(course));

//Type Aliases
type person={
    name: string;
    age: number;
    Graduated:boolean;
}

let p1:person;
p1={
    name:"shahid",
    age:12,
    Graduated: true

}
 type myString= string;
 let name:myString;

 //Read Only & optional
 type User={
    readonly id:number;
    name:string;
    school ?:string
 }
 let user:User ={
    id:3,
    name: "shahid"
 }
// user.id= 5, error will appera can't modify it

type CardNumber={
    CardNumber:number;
}
type CardDate={CardDate:number;
}
type cvv={
    cvv:number
}
type CardDetails = CardDate & CardNumber & cvv;
function getCardDetails(cardDetails:CardDetails):CardDetails{
    console.log(cardDetails);
    return cardDetails;

}
getCardDetails({CardNumber:123, CardDate:789, cvv:999})

//Arrays
//1st way of array iniating

const myNumbers: Array<number>=[];
myNumbers.push(8888);

//2nd way of aaray iniating

const numberArray:number[]=[];
numberArray.push(7899,899,9000);

//array with type alias
type Use={
    name:string;
    age:number
}
 const ourUser:Use[]=[];
 ourUser.push({name:"",age:89});

 //Unions 
 
 let amount :string | number;
 amount="Sixty Seven Thousands";
 amount=67000;

 type student={name:string, enrollID:number};
 type teacher={name:string, teacherID:number};
 let human: student | teacher;
 human={name:"shahid", enrollID:123};
 human={name:"shahid", teacherID:6777};

//union in functions
 function checkValue(amount:string | number){
    if(typeof amount==="string"){
        console.log(amount.toUpperCase());
    }
    else{
        console.log(amount.toFixed(2));
    }
 }
 checkValue("one thousand");
 checkValue(1000);

//unnion in array
 let multiData:(number | string)[]=[];
 multiData.push(12,"khan");

 //literal constant type (only can put defined type for allotedcourses)
 let allotedCourse:"CS" | "SE" | "IT";
 allotedCourse="CS";



    export{}