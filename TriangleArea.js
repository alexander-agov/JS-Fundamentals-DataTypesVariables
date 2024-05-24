function triangle(a, b, c) {
    let heron = (a + b + c) / 2;
    let formula = Math.sqrt(heron * (heron - a) * (heron - b) * (heron - c));
    console.log(formula);
}
triangle(2,
    3.5,
    4
);
triangle(3,
    5.5,
    4
);