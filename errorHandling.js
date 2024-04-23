
function division(num1, num2) {
    if (num2 == 0) {
        throw new Error('Error: Cannot divide by zero');
    }
    return num1 / num2;
}

try {
    console.log(division(10, 0));
} catch (error) {
    console.log(error.message);
}