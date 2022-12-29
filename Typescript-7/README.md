 ## Run commands
 npm init -y
 tsc --init
 ## update tsconfig.json 
 "module": "nodenext",
    "moduleResolution": "NodeNext", 
    "target": "es2020",    
## add package.json 
 "type": "module"

## update ModuleC.ts with
    import {c,b} from "./ModuleA.js";
    import a from "./ModuleB.js";
## Run Commands
    npm i inquirer
    npm i --save-dev @types/inquirer
## for chalk 
     npm install chalk
## Run project 
 tsc filename.ts
 node filename.js