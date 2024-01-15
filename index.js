const inquirer = require('inquirer');
const fs = require('fs');


const questionList = [
    {
        type: "input",
        name: "text",
        message: "type 3 characters"
    },
    {
        type: "input",
        name: "textcolor",
        message: "What would you like the Color to be?(Color Keyword or hexadecimal number)"
    },
    {
        type: "checkbox",
        name: "shape",
        message: "What shape would you like it to be?",
        choices: ["square", "circle","triangle"]
    },
    {
        type: "input",
        name: "shapecolor",
        message: "What would you like the color of the shape to be? (Color Keyword or hexadecimal number)"
    },
];

function initialize(){
    inquirer.createPromptModule(questionList)
    .then((responses) =>{
        console.log("Generated logo.svg!");
    })
}