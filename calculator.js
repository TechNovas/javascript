import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Input first number: ", type: "number", name: "firstnumber" },
    { message: "Input first number: ", type: "number", name: "secondnumber" },
    { message: "Input first number: ", type: "list", name: "operator", choices: ["addition", "subtraction", "multiplication", "division"] },
]);
if (answer.operator == "addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator == "subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator == "multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator == "division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
