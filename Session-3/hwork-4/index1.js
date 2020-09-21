let list =["Jeans", "T-Shirt", "Socks"];
while(true)

{
    var n = prompt("Hi there, welcome to shop admin panel, what do you want (C, R, U, D)");

    if(n=="r")
{
    for(let i=0;i<list.length;i++)
        {
            console.log((i+1)+"."+list[i]);
        }
    
}
else if(n=="c")
{
    let x=prompt("Enter the name of the new item");
        list.push(x);
        alert("Done")
        console.log(list)
        
}
else if(n=="u")
{
    let m=prompt("Enter the posititon you want to update");
        let u=prompt("Enter the new name: ");
        list[m]=u;
        alert("Done")
        console.log(list)
        
}
else if(n=="d")
{
    let o=prompt("Enter the posititon you want to delete");
        list.splice(o,1);
        alert("Done")
        console.log(list)
        
}
else alert("no")
if (n==null)
{
    alert("goodbye!")
    break;
}
}



