// Tests for Color Input Validation are not able to be supported by Jest as it does not support dynamic imports
// validateColorInput function using the color-name package has built-in tests for color validation
const colors = require('colors');
const { validateColorInput, validateTextInput } = require('./input-handler');

// Test cases for Input Handling
describe('Input Handling', () => {
    // Test case for validating text input
    test('Text input validation', () => {
        // Test case for empty text input
        expect(validateTextInput('')).toBe(`${colors.brightRed("Please enter some text!")}`);

        // Test case for text input with more than 3 letters
        expect(validateTextInput('abcd')).toBe(`${colors.brightRed("Please enter only up to 3 letters!")}`);

        // Test case for valid text input
        expect(validateTextInput('abc')).toBe(true);
    });
});

