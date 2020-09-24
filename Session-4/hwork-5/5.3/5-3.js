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
console.log("====================5.3===================");
// let n= prompt("Enter your category");
// var check;
// for(let i=0;i<arr.length;i++)
// {
//     if(n===arr[i].category)
//     {
//         check=true;
//         break;
//     }
// }
// if(check==true)
// {
//     console.log(arr.category[n])
// }
// else alert("Enter againt");
let n= prompt("enter n:");
for(let i=0;i<arr.length;i++)
{
    if(n===arr[i].category)
    {
        console.log(arr[i].name);
        console.log(arr[i].price);
        console.log("----------------------------------------");
    }
}