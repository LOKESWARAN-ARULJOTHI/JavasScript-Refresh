const array = [0, null, undefined, "", 2, 3];

console.log(countTruthy(array));

function countTruthy(arr) {
    for (let element of arr) {
        if (element && true) {
            console.log(element);
        }
    }
}
