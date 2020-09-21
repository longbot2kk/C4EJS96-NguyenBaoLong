let list = ["Jeans", "T-Shirt", "Sock"];

let count = 0;
while(true)
{
    var n = prompt("Hi there, welcome to shop admin panel, what do you want (C, R, U, D)");
    if(n== '' || n===null)
    {
        break;
    }
    switch(n)
    {
        case "r":
            for(let i=0;i<list.length;i++)
            {
                console.log((i+1)+"."+list[i]);
            }
            break;
            count++
        case "c":
    
            let x=prompt("Enter the name of the new item");
            list.push(x);
            break;
            count++
        case "u":
            let m=prompt("Enter the posititon you want to update");
            let u=prompt("Enter the new name: ");
            list[m]=u;
            console.log(list)
            break;
            count++
        case "d":
            let o=prompt("Enter the posititon you want to delete");
            list.splice(o,1);
            break;
            count++
        default: alert("This command is not supported")
        break;
    }
}

    

