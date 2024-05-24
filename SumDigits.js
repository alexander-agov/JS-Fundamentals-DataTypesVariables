function sum(num) {
    let digit = num;
    let sum = 0;
    while (digit > 0) {
        sum += digit % 10;
        digit = parseInt(digit / 10);
    }
    console.log(sum);
}
sum(245678);
sum(97561);
sum(543);