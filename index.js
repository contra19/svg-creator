// Import the required modules
const inquirer = require('inquirer');
const colors = require('colors');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');
const { validateColorInput, validateTextInput } = require('./lib/input-handler');


// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: `Please enter up to ${colors.cyan('3 LETTERS')} of text:`,
        validate: validateTextInput 
    },
    {
        type: 'input',
        name: 'textColor',
        message: `Please enter a ${colors.cyan('COLOR KEYWORD')} (e.g. red, green, blue, etc.) OR ${colors.cyan('HEXIDECIMAL NUMBER')} (e.g. #ff4dc5) for your text:`,
        validate: validateColorInput
    },
    {
        type: 'list',
        name: 'shape',
        message: `Please select a ${colors.cyan('SHAPE')} from the following list:`,
        choices: ['circle', 'square', 'triangle']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: `Please enter a ${colors.cyan('COLOR KEYWORD')} (e.g. red, green, blue, etc.) OR ${colors.cyan('HEXIDECIMAL NUMBER')} (e.g. #ff4dc5) for your shape:`,
        validate: validateColorInput
    },
];

// Function to initialize the application
async function init() {
    const answers = await inquirer.prompt(questions);
    // Log message to indicate SVG file generation
    console.log(colors.yellow('Generating SVG file...'));
    
    // Log user's requested logo details
    console.log(`You requested the following logo: A ${colors.cyan(answers.shapeColor.toLowerCase())} ${colors.cyan(answers.shape.toLowerCase())} with the text "${colors.cyan(answers.text)}" in ${colors.cyan(answers.textColor.toLowerCase())} color.`);
    
    let shapeInstance;
    switch (answers.shape) {
        case 'circle':
            shapeInstance = new Circle('', answers.shapeColor);
            break;
        case 'square':
            shapeInstance = new Square('', answers.shapeColor);
            break;
        case 'triangle':
            shapeInstance = new Triangle('', '', answers.shapeColor);
            break;
        default:
            break;
    }

    // Generate SVG content based on user input
    const svgContent = shapeInstance.render(answers.text, answers.textColor);

    // Write SVG content to a file named 'logo.svg'
    fs.writeFileSync('logo.svg', svgContent);

    console.log(colors.green('SVG file generated successfully!'));
}

// Function call to initialize app
init();
