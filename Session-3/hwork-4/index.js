let list = ["Jeans", "T-Shirt", "Sock"];
var n = prompt("Hi there, welcome to shop admin panel, what do you want (C, R, U, D)");
do{
    switch(n)
{
    case "r":
        for(let i=0;i<=list.length;i++)
        {
            console.log((i+1)+"."+list[i]);
        }
        break;
    case "c":

        let x=prompt("Enter the name of the new item");
        list.push(x);
        break;
    case "u":
        let m=prompt("Enter the posititon you want to update");
        let u=prompt("Enter the new name: ");
        list[m]=u;
        break;
    case "d":
        let o=prompt("Enter the posititon you want to delete");
        list.splice(o,1);
        break;
    default: alert("This command is not supported")
}
}
while(n!=4);
