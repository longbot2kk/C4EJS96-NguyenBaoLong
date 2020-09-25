let movie = {
    title: "The dark night up",
    year: 2012,
    rate: 8.4,
}
console.log(movie);
let a= prompt("What you want to update?");
alert(`${a} does not exist in our data, we will add new`);
let b= prompt("Enter the new data");
movie[a]=b;
console.log(movie);

