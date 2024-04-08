class calculatorsc {
    // Method to add two numbers
    add(num1, num2) {
        return num1 + num2;
    }
    // Method to subtract two numbers
    subtract(num1, num2) {
        return num1 - num2;
    }
    // Method to multiply two numbers
    multiply(num1, num2) {
        return num1 * num2;
    }
    // Method to divide two numbers
    divide(num1, num2) {
        if (num2 === 0) {
            throw new Error("Division by zero is not allowed");
        }
        return num1 / num2;
    }
}
// Create an instance of the Calculator class
const calculator = new calculatorsc();
// Example usage
console.log("Addition:", calculator.add(5, 3)); // Output: 8
console.log("Subtraction:", calculator.subtract(10, 4)); // Output: 6
console.log("Multiplication:", calculator.multiply(2, 6)); // Output: 12
console.log("Division:", calculator.divide(10, 2)); // Output: 5
export {};
