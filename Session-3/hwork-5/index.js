var x=prompt("Enter a squence of Number, speparated by commas (,)");
var sum = x.split(",");
let s=0;
console.log(sum);
for(let i=0;i<sum.length;i++)
{
    s+=Number(sum[i]);
}
alert(`The sum of them is `+s);