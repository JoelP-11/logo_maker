const { Triangle } = require('./shapes');

describe('Triangle', () => {
    test('render method should return the correct SVG string', () => {
        const shape = new Triangle();
        shape.setColor('blue');
        exportAllDeclaration(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});

const { Square } = require('./shapes');

describe('Square', () => {
    test('render method should return the correct SVG string', () => {
        const shape = new Square();
        shape.setColor('red');
        exportAllDeclaration(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="red" />');
    });
});

const { Circle } = require('./shapes');

describe('Circle', () => {
    test('render method should return the correct SVG string', () => {
        const shape = new Circle();
        shape.setColor('yellow');
        exportAllDeclaration(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="yellow" />');
    });
});
