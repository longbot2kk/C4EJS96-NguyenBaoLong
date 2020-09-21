let n=(prompt("Enter a number"))
const arr = [3, 4, 6, -9, 10, -88, 2];
var check;
var temp;
for(let i=0;i<arr.length;i++)
{
    if(n==(arr[i]))
    {
        check=true;
        temp=i;
        break;
    }
    else if(n!=(arr[i]))
    {
        check=false;
    }
    
}
if(check==true)
{
    alert(`${n} is FOUND in my array at index ${temp}`)
}
else if (check==false) alert(`${n} is Not found in my array`);