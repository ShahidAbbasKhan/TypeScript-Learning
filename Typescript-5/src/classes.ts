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


//Abstract Class

