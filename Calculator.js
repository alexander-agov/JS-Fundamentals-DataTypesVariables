function calculator(num1, operator, num2) {
    // let result = 0;
    // switch (operator) {
    //     case '+':
    //         result = num1 + num2;
    //         console.log(result.toFixed(2));
    //         break;
    //     case '-':
    //         result = num1 - num2;
    //         console.log(result.toFixed(2));
    //         break;
    //     case '*':
    //         result = num1 * num2;
    //         console.log(result.toFixed(2));
    //         break;
    //     case '/':
    //         result = num1 / num2;
    //         console.log(result.toFixed(2));
    //         break;
    //     default:
    //         console.log("Invalid operator");
    //         return;
    // }
    console.log(
        operator === '+' ? (num1 + num2).toFixed(2) :
            operator === '-' ? (num1 - num2).toFixed(2) :
                operator === '/' ? (num1 / num2).toFixed(2) :
                    operator === '*' ? (num1 * num2).toFixed(2) :
                        "Invalid operator"
    );
}
calculator(5,
    '+',
    10
);
calculator(25.5,
    '-',
    3
);