function prime(num) {
    let isPrime = true;
    for (let divider = 2; divider < num; divider++) {
        if (num % divider == 0) {
            isPrime = false;
            break;
        }
    }
    console.log(isPrime);
}
prime(7);
prime(8);
prime(81);