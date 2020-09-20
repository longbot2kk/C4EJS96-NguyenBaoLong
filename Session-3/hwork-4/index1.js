let list =["Jeans", "T-Shirt", "Socks"];
do{
    var n = prompt("Hi there, welcome to shop admin panel, what do you want (C, R, U, D)");
if(n=="r")
{
    for(let i=0;i<=list.length;i++)
        {
            console.log((i+1)+"."+list[i]);
        }
    
}
else if(n=="c")
{
    let x=prompt("Enter the name of the new item");
        list.push(x);
}
else if(n=="u")
{
    let m=prompt("Enter the posititon you want to update");
        let u=prompt("Enter the new name: ");
        list[m]=u;

}
else if(n=="d")
{
    let o=prompt("Enter the posititon you want to delete");
        list.splice(o,1);
}
else alert="exit";
}
while()


