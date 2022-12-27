"use strict";
//classes using interface
class facebook {
    constructor(cameraMode, filter, brust, cameraName) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.brust = brust;
        this.cameraName = cameraName;
    }
}
class instagram {
    constructor(cameraMode, filter, brust) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.brust = brust;
    }
    getStory() {
        return true;
    }
}
//Abstract Class (can't initize object from abstract class)
class TakePhoto {
    constructor(cameraMode, filter, brust) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.brust = brust;
    }
    cameraImplemented() {
        console.log("Camera is Implemented");
    }
}
// const absObj= new TakePhoto("OK","OK",7); //Error Cannot create an instance of an abstract class.
class Facebook extends TakePhoto {
    constructor(cameraMode, filter, brust, cameraName) {
        super(cameraMode, filter, brust);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.brust = brust;
        this.cameraName = cameraName;
    }
    cameraWorking() {
        return true;
    }
}
const fbObject = new Facebook("OK", "OK", 7, "New camera");
