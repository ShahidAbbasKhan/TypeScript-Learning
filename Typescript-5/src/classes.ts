//classes using interface

interface getCamera {
    cameraMode:string;
    filter:string;
    brust:number
}
interface Story{
    getStory():boolean;
}

class facebook implements getCamera {
    constructor(public cameraMode: string,
   public filter: string,public brust:number,public cameraName:string){}

}
class instagram implements getCamera,Story {
   constructor(public cameraMode: string,
   public filter: string,public brust:number){}
   getStory(): boolean {
    return true;
       
   }

}


//Abstract Class (can't initize object from abstract class)

abstract class TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string,
        public brust:number
    ){}
    abstract cameraWorking():boolean;

    cameraImplemented():void{
        console.log("Camera is Implemented");
    }
 
    
}
// const absObj= new TakePhoto("OK","OK",7); //Error Cannot create an instance of an abstract class.

class Facebook extends TakePhoto {
    constructor( 
        public cameraMode:string,
        public filter:string,
        public brust:number,
        public cameraName:string
    )
    {super(cameraMode,filter,brust)}
    cameraWorking(): boolean {
        return true;
    }
    
}
 const fbObject= new Facebook("OK","OK",7,"New camera");



 //Generics (malke components to Reuseable)

 
