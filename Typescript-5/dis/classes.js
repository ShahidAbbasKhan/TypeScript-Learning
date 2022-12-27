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
//Abstract Class
