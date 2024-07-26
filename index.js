const checkCard = (cardNumber) => {
    let l = cardNumber.length;
    let card = "INVALID";
    let total = 0;
    for (let digit = l - 2; digit >= 0; digit -= 2) {
      // console.log(cardNumber[digit])
      let digits = String(cardNumber[digit] * 2);
      if (digits.length > 1) {
        total += Number(digits[0]) + Number(digits[1]);
      } else {
        total += Number(digits);
      }
    }
    let restDigits = 0;
    for (let no = l - 1; no >= 0; no -= 2) {
      // console.log(rest)
      restDigits += Number(cardNumber[no]);
    }
    //   console.log(restDigits)
    let totalDigits = String(restDigits + total);
  
    if (totalDigits % 10 !== 0) {
      console.log(card);
      return;
    }

    if (l === 15 && (cardNumber.startsWith("34") || cardNumber.startsWith("37"))) {
        return "AMEX";
    } else if (l === 16 && cardNumber.startsWith("5")) {
        return "MASTERCARD";
    } else {
        return "INVALID";
    }
}

// Export the module
module.exports = checkCard;

