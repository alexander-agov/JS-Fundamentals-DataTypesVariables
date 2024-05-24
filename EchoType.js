function echo(x) {
    let type = typeof (x);
    if (type == "string" || type == "number") {
        console.log(type);
        console.log(x);
    }
    else {
        console.log(type);
        console.log("Parameter is not suitable for printing");
    }
}
echo('Hello, JavaScript!');
echo(18);
echo(null);
