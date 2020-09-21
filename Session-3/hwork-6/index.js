var x=prompt("Enter a squence of Number, speparated by commas (,)");
var sum = x.split(",");
console.log(sum);
let min=sum[0];
for(let i=0;i<sum.length;i++)
{
    if(sum[i]<min)
    {
        min=sum[i];
    }
}
alert(`The smallest number is `+min);