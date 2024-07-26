
# Check-Card

A utility to check credit card types and validity using Luhn's algorithm.

![NPM Version](https://img.shields.io/npm/v/check-card.svg)
## Installation

This is a Node.js module available through the npm registry.

Before installing, download and install Node.js. Node.js 0.10 or higher is required.

If this is a brand new project, make sure to create a package.json first with the npm init command.

Installation is done using the npm install command:

`npm install check-card`
    
## Features

- Validate credit card numbers using Luhn's algorithm
- Determine card type (AMEX, MASTERCARD, VISA)
- Check if a card is valid or invalid based on its type
  - AMEX: 15 digits
  - MASTERCARD: 16 digits
  - VISA: 16 digits


## Usage/Examples

```javascript
const checkCard = require('check-card');
console.log(checkCard("371449635398431")); // Output: AMEX
console.log(checkCard("5418878773156819")); // Output: MASTERCARD

```


## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please create an issue or submit a pull request on GitHub.

### Security Issues
If you discover a security vulnerability in check-card, please report it to the maintainers. Your report will be taken seriously and promptly addressed.

### Running Tests
To run the test suite, first install the dependencies, then run `npm test:`

```javascript
 npm install
 npm test
 ```


## Authors

- The original author of check-card is [Mudita joshi](https://github.com/muditajoshi/check-cards.git).

## Documentation

[GitHub Organization](https://github.com/muditajoshi/check-cards.git) for Official Middleware & Modules 
## License

[MIT](https://github.com/muditajoshi/check-cards/blob/main/LICENSE)

