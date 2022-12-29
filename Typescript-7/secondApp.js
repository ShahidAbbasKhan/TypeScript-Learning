import inquirer from "inquirer";
import chalk from "chalk";
let responce = await inquirer.prompt({ name: "Age", type: "number", message: "Enter Your age" });
console.log(chalk.yellow("Insha Allah i will be at 60 after " + (60 - responce.Age) + " Years"));
