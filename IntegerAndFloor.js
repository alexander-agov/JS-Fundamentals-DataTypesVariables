function integer(x, y, z) {
    let sum = x + y + z;
    console.log(`${sum} - ${sum % 1 === 0 ? "Integer" : "Float"}`);
}
integer(9, 100, 1.1);
integer(100, 200, 303);