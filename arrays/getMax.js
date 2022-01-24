const numbers = [1, 2, 13, 4];

const max = getMax(numbers);

console.log(max);

function getMax(array) {
    if (array.length === 0) return undefined;
    return array.reduce((maxValue, currentValue) =>
        currentValue > maxValue ? currentValue : maxValue
    );
}
