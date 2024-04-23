function addNumbers(num1, num2) {
    return num1 + num2;
}

console.log(addNumbers(1, 2));

let globalVariable = 10;

function printBoth() {
    let localVariable = 5;
    console.log(localVariable);
    console.log(globalVariable);
}

printBoth();
console.log(globalVariable);
console.log(localVariable);
