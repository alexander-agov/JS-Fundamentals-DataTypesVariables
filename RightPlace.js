function right(str1, ch, str2) {
    let str = str1.replace('_', ch);
    console.log(str === str2 ? "Matched" : "Not Matched");
    // if (str === str2){
    //     console.log("Matched");
    // } else {
    //     console.log("Not Matched");
    // }
}
right('Str_ng', 'I', 'Strong');
right('Str_ng', 'i', 'String');