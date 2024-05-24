function triple(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                let firstChar = String.fromCharCode(97 + i);
                let secondChar = String.fromCharCode(97 + j);
                let thirdChar = String.fromCharCode(97 + k);
                console.log(`${firstChar}${secondChar}${thirdChar}`);
            }
        }
    }
}
triple('3');
triple(2);