function special(n) {
    for (let i = 1; i <= n; i++) {
        let sumOfDigits = 0;
        let digits = i;
        while (digits > 0) {
            sumOfDigits += digits % 10;
            digits = parseInt(digits / 10);
        }
        if (sumOfDigits == 5 || sumOfDigits == 7 || sumOfDigits == 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}
special(15);
special(20);