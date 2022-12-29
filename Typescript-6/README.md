## update tsconfig.json 
 "module": "nodenext",
    "moduleResolution": "NodeNext", 
    "target": "es2020",    
## add package.json 
 "type": "module"

## update ModuleC.ts with
    import {c,b} from "./ModuleA.js";
    import a from "./ModuleB.js";
