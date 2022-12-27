 //Generics (malke components to Reuseable)
 //accepeted value will be locked with Generic

 function setValue<Type>(val:Type):Type{
    return val;
 }
 setValue(8);

 function setValues<S>(val:S):S{
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

