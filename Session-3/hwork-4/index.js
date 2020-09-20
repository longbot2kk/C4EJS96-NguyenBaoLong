let list = ["Jeans", "T-Shirt", "Sock"];
let n = prompt("Hi there, welcome to shop admin panel, what do you want (C, R, U, D)");
switch(n)
{
    case 1:
        n=`r`;
        for(let i=1;i<=list.length;i++)
        {
            console.log(i+"."+list[i]);
        }
    case 2:
        n=`c`;
        let x=prompt("Enter the name of the new item");
        list.push(i);
    case 3:
        n=`u`;
        let m=prompt("Enter the posititon you want to update");
        let u=prompt("Enter the new name: ");
        list[m]=u;
    case 4:
        n=`d`;
        let o=prompt("Enter the posititon you want to delete");
        list.splice(o,1);
}