var x=prompt("Enter a squence of Number, speparated by commas (,)");
var sum = x.split(",");
var s=0;
var oddList;
oddList= sum.filter(function(item)
{
    return(item%2!=0);
})
alert(sum+"=>"+oddList);