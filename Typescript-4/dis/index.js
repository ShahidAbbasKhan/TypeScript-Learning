"use strict";
//class 
class student {
    constructor(name, Id) {
        this.course = "IT";
        this.name = name;
        this.Id = Id;
    }
}
const st1 = new student("Shahid", 101);
//private public
class csStudent {
    constructor(name, Id) {
        this.course = "CS";
        this.name = name;
        this.Id = Id;
    }
}
const st2 = new csStudent("Shahid", 101);
st2.course;
st2.name;
// st2.Id; //error as Id is marked private can only be accessable within csStudent Class only 
//This will work also same as above
class Student {
    constructor(name, Id, dep) {
        this.name = name;
        this.Id = Id;
        this.dep = dep;
        this.course = "CS";
    }
}
const st3 = new Student("shahid", 555, "IT");
st3.dep;
console.log(st3.course);
// st3.Id; //error
// st3.name //error
//Getter and Setter 
class enrolledCourse {
    constructor() {
        this.courseCount = 1;
    }
    get getEnrolledCourse() {
        return `Your Enrolled Courses are ${this.courseCount}`;
    }
    set setEnrollCourse(EnterCourses) {
        if (EnterCourses <= 1) {
            throw new Error("Course Count should be 1 or greater");
        }
        this.courseCount = EnterCourses;
    }
    returnCount() {
        return this.courseCount;
    }
}
const course1 = new enrolledCourse();
//course1.returnCount();    //'returnCount' is private and only accessible within class 'enrolledCourse'.
//protected
class mainClass {
    constructor() {
        this.courseCount = 1;
    }
    get getEnrolledCourse() {
        return `Your Enrolled Courses are ${this.courseCount}`;
    }
    set setEnrollCourse(EnterCourses) {
        if (EnterCourses <= 1) {
            throw new Error("Course Count should be 1 or greater");
        }
        this.courseCount = EnterCourses;
    }
}
class subClass extends mainClass {
    updatecourseCount() {
        this.courseCount = 7;
        return this.courseCount;
    }
}
