function spice(startingYield) {
    let count = 0;
    let newLeave = 0;
    while (startingYield >= 100) {
        count++;
        newLeave += startingYield - 26;
        startingYield -= 10;
        if (startingYield < 100) {
            newLeave -= 26;
        }
    }
    console.log(`${count}\n${newLeave}`);
}
spice(111);
spice(450);