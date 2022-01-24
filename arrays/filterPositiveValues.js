const numbers = [-5, -8, 5, 1, 6, -98, 8];

console.log(filterPositiveValues(numbers));

function filterPositiveValues(nums) {
    return nums.filter((n) => n > 0);
}
