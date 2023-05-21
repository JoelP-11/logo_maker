const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./shapes');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three charcaters for the logo:',
            validate:  (value) => {
                if (value.length <= 3) {
                    return true;
                }
             return 'Please enter up to three characters.';
        },
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color (keyword or hexadecimal number):',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape for the logo:',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the shape color (keyword or hexadecimal number):',
        },
    ]);
};

const generateLogoSvg = (text, textColor, shape, shapeColor) => {
    let shapeInstance;
    switch (shape) {
        case 'circle':
            shapeInstance = new Circle();
            break;
            case 'triangle':
            shapeInstance = new Triangle();
            break;
            case 'square':
                shapeInstance = new Square();
                break;
                default:
                    throw new Error('Invalid shape');
    }
    
    shapeInstance.setColor(shapeColor);

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"> ${shapeInstance.render()} <text x="150" y="100" text-anchor="middle" fill="${textColor}">${text}</text> </svg>`;

    return svg;
};

const saveLogoSvgToFile = (svg) => {
    fs.writeFileSync('logo.svg', svg);
};

const runLogoGenerator = async () => {
    try {
        const { text, textColor, shape, shapeColor } = await promptUser();
        const svg = generateLogoSvg(text, textColor, shape, shapeColor);
        saveLogoSvgToFile(svg);
        console.log('Generated logo.svg');
    } catch (error) {
        console.error('An error ocurred:', error);
    }
};

runLogoGenerator();