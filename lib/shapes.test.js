const { Triangle, Circle, Square } = require('./shapes');

// Test cases for Shape Rendering
describe('Shape Rendering', () => {
    // Test case for Triangle rendering
    test('Triangle renders correctly', () => {
        const shape = new Triangle();
        shape.setColor('blue');
        const expectedSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <polygon points="150, 18 244, 182 56, 182" fill="blue" />
    <text x="50%" y="75%" dominant-baseline="middle" text-anchor="middle" fill="black" font-size="30"></text>
</svg>
        `.trim();
        expect(shape.render()).toEqual(expectedSVG);
    });

    // Test case for Circle rendering
    test('Circle renders correctly', () => {
        const shape = new Circle();
        shape.setColor('red');
        const expectedSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <circle cx="150" cy="100" r="50" fill="red" />
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="black" font-size="30"></text>
</svg>
        `.trim();
        expect(shape.render()).toEqual(expectedSVG);
    });

    // Test case for Square rendering
    test('Square renders correctly', () => {
        const shape = new Square();
        shape.setColor('green');
        const expectedSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <rect x="50" y="50" width="200" height="100" fill="green" />
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="black" font-size="30"></text>
</svg>
        `.trim();
        expect(shape.render()).toEqual(expectedSVG);
    });
});
