let a= {
    name: "html",
    complete: "complete: false"
}
let b= {
    name: "css",
    complete: "complete: false"
}
let c= {
    name: "basics of javascript",
    complete: "complete: false"
}
let d= {
    name: "node package manager",
    complete: "complete: false"
}
let e= {
    name: "git",
    complete: "complete: false"
}
let arr= [];
arr.push(a,b,c,d,e);
for(let i=0;i<arr.length;i++)
{
    console.log(`${i+1}. ${arr[i].name} \n ${arr[i].complete}`);
}
let n= prompt("Enter position");
// for(i=0;i<arr.length;i++)
// {
//     if(arr[n]==arr[i-1])
//     {
//         arr[n].name
//     }
// }
arr[n-1].complete="complete: true";
console.log("=====================================")
for(i=0;i<arr.length;i++)
{
    console.log(`${i+1}. ${arr[i].name} \n ${arr[i].complete}`);
}