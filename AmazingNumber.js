function amazing(x) {
    x = x.toString();
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum += Number(x[i]);
    }
    console.log(sum.toString().includes('9') ? `${x} Amazing? True` : `${x} Amazing? False`);
}
amazing(1233);
amazing(999);