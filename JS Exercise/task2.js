// Task 2:
// Need to create a Javascript function for the sum of string
// (Example like "1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9")

function sumOfNumbers(myString){
    let sum =0
    const arr = myString.split(',')
    for (const item of arr) {
        sum += Number(item)
    }
    return sum
}

let input = "1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"
const result = sumOfNumbers(input)
console.log(`The Sum is : ${result}`);
