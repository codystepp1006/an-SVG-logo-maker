const path = require('path');
const fs = require('fs');
const inquirer = require('inquirer');
const generateSvg = require('./shapes/shapes'); 


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

    inquirer
  .prompt(questionList)
    .then((res) => {
        console.log(JSON.stringify(res));
        console.log("generating your logo now");
        createFile("./Created_Logo/logo.svg", generateSvg({...res}));
    });
}

    function createFile(dirPath, data){
 
        return fs.writeFileSync(path.join(process.cwd(), dirPath), data)
    }
initialize();

module.exports = createFile;
module.exports = initialize;
