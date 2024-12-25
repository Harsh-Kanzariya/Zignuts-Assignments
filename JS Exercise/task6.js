// Task 6:
// Write a program to find the factorial of a number using a recursive function

function factorial(num) {
    if (num == 0 || num == 1){
        return 1
    }
    return num * factorial(num-1)
}

let input = 5
console.log(`Factorial of ${input} is ${factorial(input)}`)