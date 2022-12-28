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

