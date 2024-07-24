const checkCard = (cardNumber) => {
    // Convert card number to string to handle it easily
    let cardNumberStr = cardNumber.toString();
    let tempNumber = parseInt(cardNumberStr);
    let length = 0;
    
    // Determine the length of the card number using a while loop
    while (tempNumber > 0) {
        tempNumber = Math.floor(tempNumber / 10);
        length++;
    }
    
    // If the length is not 15 or 16, print "INVALID" and return
    if (length !== 15 && length !== 16) {
        return "INVALID";
    }

    // Check the prefix based on length
    if (length === 15 && (cardNumberStr.startsWith("34") || cardNumberStr.startsWith("37"))) {
        // Valid AMEX prefix
    } else if (length === 16 && cardNumberStr.startsWith("5")) {
        // Valid MasterCard prefix
    } else {
        return "INVALID";
    }

    // Check validity with Luhn's algorithm
    let total = 0;

    // Luhn algorithm: Double every second digit from the right
    for (let i = length - 2; i >= 0; i -= 2) {
        let digit = parseInt(cardNumberStr[i]) * 2;
        if (digit > 9) {
            digit -= 9;
        }
        total += digit;
    }

    // Add the digits that were not doubled
    for (let i = length - 1; i >= 0; i -= 2) {
        total += parseInt(cardNumberStr[i]);
    }

    // Check if the total modulo 10 is 0
    if (total % 10 !== 0) {
        return "INVALID";
    }

    // Determine the card type based on the prefix
    if (length === 15 && (cardNumberStr.startsWith("34") || cardNumberStr.startsWith("37"))) {
        return "AMEX";
    } else if (length === 16 && cardNumberStr.startsWith("5")) {
        return "MASTERCARD";
    } else {
        return "INVALID";
    }
}

// Export the module
module.exports = checkCard;

