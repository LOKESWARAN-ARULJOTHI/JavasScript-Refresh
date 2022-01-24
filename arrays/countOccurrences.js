const numbers = [1, 1, 1, 1, 1, 2, 3, 4];

const count = countOccurrences(numbers, 1);

console.log(count);

function countOccurrences(array, searchElement) {
    return array.reduce((accumulator, currentValue) => {
        occurrence = currentValue == searchElement ? 1 : 0;
        accumulator += occurrence;
        return accumulator;
    }, 0);
}
