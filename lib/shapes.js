// Parent Shape class
class Shape {
    constructor(shapeColor = 'black') {
        this.shapeColor = shapeColor;
    }

    setColor(shapeColor) {
        this.shapeColor = shapeColor;
    }
}

// Triangle class inheriting from Shape
class Triangle extends Shape {
    constructor(base = 1, height = 1, shapeColor) {
        super(shapeColor);
        this.base = base;
        this.height = height;
    }

    // Method to calculate area of triangle
    getArea() {
        return 0.5 * this.base * this.height;
    }

    // Method to generate SVG for triangle
    render(text = '', textColor = 'black') {
        const svgContent = `
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
    <text x="50%" y="65%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="30">${text}</text>
</svg>
        `;
        return svgContent.trim();
    }
}

// Circle class inheriting from Shape
class Circle extends Shape {
    constructor(radius = 1, shapeColor) {
        super(shapeColor);
        this.radius = radius;
    }

    // Method to calculate area of circle
    getArea() {
        return Math.PI * this.radius ** 2;
    }

    // Method to generate SVG for circle
    render(text = '', textColor = 'black') {
        const svgContent = `
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <circle cx="150" cy="100" r="50" fill="${this.shapeColor}" />
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="30">${text}</text>
</svg>
        `;
        return svgContent.trim();
    }
}

// Square class inheriting from Shape
class Square extends Shape {
    constructor(side = 1, shapeColor) {
        super(shapeColor);
        this.side = side;
    }

    // Method to calculate area of square
    getArea() {
        return this.side ** 2;
    }

    // Method to generate SVG for square
    render(text = '', textColor = 'black') {
        const svgContent = `
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <rect x="50" y="50" width="200" height="100" fill="${this.shapeColor}" />
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="30">${text}</text>
</svg>
        `;
        return svgContent.trim();
    }
}

module.exports = { Triangle, Circle, Square };
