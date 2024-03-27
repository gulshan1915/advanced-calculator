#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter firts number", type: "number", name: "firtsnumber" },
    { message: "Enter second number", type: "number", name: "secondnumber" },
    {
        message: "Select of the operator to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "subtraction", "Multiplication", "Division"],
    },
]);
// conditional statement
if (answer.operator === "Addition") {
    console.log(answer.firtsnumber + answer.secondnumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firtsnumber - answer.secondnumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firtsnumber * answer.secondnumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firtsnumber / answer.secondnumber);
}
else {
    console.log("Please select valid operator");
}
