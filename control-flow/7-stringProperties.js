const movie = {
    title: "a",
    releaseYear: 2018,
    rating: 4.5,
    director: "b",
};

showProperties(movie);

function showProperties(obj) {
    let key;
    for (key in obj) {
        console.log(`${key} : ${obj[key]}`);
    }
}
