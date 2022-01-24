const numbers = ["1", "2", "3", "4", "5"];

console.log(stringToInteger(numbers));

function stringToInteger(array) {
    return array.map((num) => parseInt(num));
}
