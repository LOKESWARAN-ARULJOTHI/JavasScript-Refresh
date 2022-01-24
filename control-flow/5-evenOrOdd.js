showNumbers(10);

function showNumbers(number) {
    let i;
    for (i = 1; i <= number; i++) {
        if (i % 2 == 0) console.log(i, "Even");
        else console.log(i, "Odd");
    }
}
