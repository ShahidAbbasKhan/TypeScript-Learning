import inquirer from "inquirer";

let responce= await inquirer.prompt({name:"Age", type:"number", message:"Enter Age"});
console.log("Insha Allah, in " + (60 - responce.Age) + " years you will be 60 years old.");