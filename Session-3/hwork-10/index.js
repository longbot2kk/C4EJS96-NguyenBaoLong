var x=prompt("Enter a squence of Name");
var sum = x.split(",");
console.log(sum);
var sum1 = sum.map(y => "<"+y+">");
alert(sum+"=>"+sum1)