function biggest(num1, num2, num3) {
    let arr = new Array(num1, num2, num3);
    arr.sort((a, b) => b - a);
    console.log(arr[0]);
}
biggest(-2,
    7,
    3
);
biggest(130,
    5,
    99
);
biggest(43,
    43.2,
    43.1
);
biggest(2,
    2,
    2
);