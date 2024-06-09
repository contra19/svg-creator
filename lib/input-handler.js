// Import colors for colored error messages
const colors = require('colors');

// Validate color input from user
async function validateColorInput(textColor) {
    const colorName = await import('color-name');

    // Regular expression for validating hexadecimal color codes
    const hexColorRegex = /^#([0-9A-F]{6})$/i;

    // Check if a valid HEXIDECIMAL NUMBER
    if (hexColorRegex.test(textColor)) {
        return true;
    }

    // Check if a valid CSS COLOR KEYWORD
    if (colorName.default[textColor.toLowerCase()]) {
        return true;
    }

    // If neither is valid, return an error message
    return `${colors.brightRed("Please enter a valid COLOR KEYWORD or HEXIDECIMAL NUMBER!")}`;
}

// Validate text input from user
function validateTextInput(text) {
    // Check if text is empty
    if (!text) {
        return `${colors.brightRed("Please enter some text!")}`;
    }

    // Check if text is only up to 3 letters
    if (text.length > 3) {
        return `${colors.brightRed("Please enter only up to 3 letters!")}`;
    }

    // If all validations pass, return true
    return true;
}

// Export the functions for testing
module.exports = { validateColorInput, validateTextInput };
