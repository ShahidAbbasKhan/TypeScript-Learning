 //Generics (malke components to Reuseable)
 //accepeted value will be locked with Generic

 function setValue<Type,>(val:Type):Type{
    return val;
 }
 setValue(8);

 function setValues<S,>(val:S):S{
    return val;
 }
 setValues("Hi Shahid");

 //using interface in Generic
 interface std{
    name:string
 }

 function funcOne<S>(val:S):S{
    return val;
 }
 funcOne<std>({name:"shahid"});

//Generics in Arrays and Arrow functions

function returnValue<Type,>(Val:Type[]):Type{
    return Val[5];
}

function putValue<Type,>(Val:Array<Type>):Type[]{
    return Val;
}

function returnNumber<Type,>(Val:Array<Type>):Type{
    const indexIs=7;
    return Val[indexIs];
}
//in arrow functions

const numberReturn= <Type,>(Val:Type[]): Type =>{
    const indexIs=7;
    return Val[indexIs];
}