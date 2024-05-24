// function binary(binaryInput) {
//     let binaryString;

//     // Check if the input is a string, if not, convert it to a string
//     if (typeof binaryInput === 'string') {
//         binaryString = binaryInput;
//     } else {
//         binaryString = binaryInput.toString();
//     }

//     // Check if the input is a valid binary number
//     if (!/^[01]{1,8}$/.test(binaryString)) {
//         console.log("Invalid input. Please provide a binary number with up to 8 digits.");
//         return;
//     }

//     // Convert binary string to decimal
//     let decimal = parseInt(binaryString, 2);

//     console.log(decimal);
// }

// binary("00001001");
// binary(11110000);

function binary(binaryInput) {
    let decimal = parseInt(binaryInput, 2);
    console.log(decimal);
}
binary('00001001');
binary(11110000);