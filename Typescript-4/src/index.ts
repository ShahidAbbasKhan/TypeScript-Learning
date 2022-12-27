//class 
class student {
    name:string;
    Id:number;
    readonly course:string="IT"
    constructor(name:string,Id:number){
        this.name=name;
        this.Id=Id;
    }
}

const st1= new student("Shahid",101);

//private public
class csStudent {
     public name:string;
     private Id:number;
    readonly course:string="CS"
    constructor(name:string,Id:number){
        this.name=name;
        this.Id=Id;
    }
}
const st2= new csStudent("Shahid",101);
st2.course;
st2.name;
// st2.Id; //error as Id is marked private can only be accessable within csStudent Class only 

//This will work also same as above
class Student { 
   readonly course:string="CS";
   constructor(private name:string,private Id:number, public dep:string){
   }
}
const st3= new Student("shahid", 555, "IT");
st3.dep;
console.log(st3.course);
// st3.Id; //error
// st3.name //error

