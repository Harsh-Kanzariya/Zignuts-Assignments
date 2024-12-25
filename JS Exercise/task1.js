// Task 1:
// Need to create JavaScript functions for a sum of numbers in the string
// (Example like “foo8bar8cat2tc2”)


function sumOfNumbersInStr(myString){
    let result = 0
    for (let i = 0; i < myString.length; i++) {
        const element = myString[i];
        if (Number(element)) {
            result+= Number.parseInt(element)
        }
    }
    return result
}

let input = "foo8bar8cat2tc2"
const res = sumOfNumbersInStr(input)
console.log(`The sum of the numbers given in string is ${res}`);

