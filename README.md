# TypeScript-Learning:
#### Start config file 
   tsc --init
#### Make 2 folders
   mkdir src dis
#### Make a file
   index.ts in src folder
#### update tsconfig file 
   enable outDir file and give path for output "outDir": "./dis";
   
   enable "strictNullChecks" mode in tsconfig.json tp prevent from null and undefined value
#### Run command 
   tsc -w to watch all changes of typescript file, js file in dis folder
#### path of js file 
  provide path of js file in html file

#### Commands also can be used:
   1. npm install -g typescript (install type script globally to your system)
   2. tsc --init (to inialize typescript congif file)
   3. tsc filename.ts (to compile ts => js file)
   4. node filename.js (to run js file that is created from ts file)



