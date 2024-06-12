# SVG Logo Generator

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Inquirer](https://img.shields.io/badge/Inquirer.js-000000?style=for-the-badge&logo=javascript&logoColor=white)
![Colors.js](https://img.shields.io/badge/Colors.js-ff69b4?style=for-the-badge&logo=javascript&logoColor=white)
![MIT License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

## Overview

The SVG Logo Generator is a command-line application that allows users to create custom SVG logos. Users can input text, select colors, and choose a shape (circle, square, or triangle) for their logo. The application generates the SVG file and saves it to both the root directory and an "Examples" directory for easy access.

## Features

- Interactive command-line interface for user input
- Text input validation (up to 3 letters)
- Color input validation (color keywords and hexadecimal values)
- Choice of three shapes: circle, square, and triangle
- Automatic generation and saving of SVG files
- Maintains an "Examples" directory with all generated logos

## Installation

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/contra19/svg-creator.git
    cd svg-logo-generator
    ```

2. **Install Dependencies:**
    ```bash
    npm install
    ```

## Usage

1. **Run the Application:**
    ```bash
    node index.js
    ```

2. **Follow the Prompts:**
    - Enter up to 3 letters of text.
    - Specify a color for the text (color keyword or hexadecimal value).
    - Select a shape (circle, square, or triangle).
    - Specify a color for the shape (color keyword or hexadecimal value).

3. **View the Generated SVG:**
    - The SVG file will be saved as `logo.svg` in the root directory.
    - A copy will also be saved in the `Examples` directory with a unique name.

## Examples

Example directory structure after generating a few logos:

```
svg-logo-generator/
├── Examples/
│   ├── example_logo_1.svg
│   ├── example_logo_2.svg
│   └── example_logo_3.svg
├── lib/
│   ├── shapes.js
│   └── input-handler.js
├── node_modules/
├── index.js
├── package.json
└── logo.svg
```

## Code Structure

- `index.js`: Main script for running the application.
- `lib/shapes.js`: Contains the Shape classes (`Triangle`, `Circle`, `Square`).
- `lib/input-handler.js`: Contains validation functions for user input.

## Validation

- **Color Validation:** Uses `color-name` package to validate CSS color keywords and regular expressions for hexadecimal values.
- **Text Validation:** Ensures text input is not empty and does not exceed 3 letters.

## Tests

- **Input Validation Tests:** Ensure text and color inputs are validated correctly.
- **Shape Rendering Tests:** Verify that the shapes render correctly with the specified properties.

### Running Tests

1. **Install Jest:**
    ```bash
    npm install --save-dev jest
    ```

2. **Run Tests:**
    ```bash
    npm test
    ```

## Dependencies

- `inquirer`: For interactive command-line prompts.
- `colors`: For colored console output.
- `fs`: For file system operations.
- `path`: For handling file paths.
- `color-name`: For validating CSS color keywords.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

![MIT License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Inquirer.js](https://github.com/SBoudrias/Inquirer.js/) for command-line user interfaces.
- [colors.js](https://github.com/Marak/colors.js) for coloring console output.
- [color-name](https://github.com/colorjs/color-name) for CSS color name validation.