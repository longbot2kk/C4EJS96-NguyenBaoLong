var a = {
    name : "Xiaomi portable charger 20000mah",
    brand : "xiaomi",
    price : "428",
    color : "while",
    category : "changer"
}
let b = {
    name : "VSmart Active 1",
    brand : "vsmart",
    price : "5487",
    color : "black",
    category : "phone"
}
let c = {
    name : "IPhone X",
    brand : "apple",
    price : "21490",
    color : "gray",
    category : "phone"
}
let d = {
    name : "Samsung Galaxy A9",
    brand : "samsung",
    price : "8490",
    color : "blue",
    category : "phone"
}
let arr = [];
arr.push(a,b,c,d);
console.log(arr);
console.log("====================5.2===================");
    let p = prompt("Enter product position: ");
    console.log(arr[p-1]);