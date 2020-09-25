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
let p= prompt("Enter position");
let n= prompt("Enter new title");
arr[p-1].name=n;
console.log("==============AFTER UPDATE===============")
for(i=0;i<arr.length;i++)
{
    console.log(`${i+1}. ${arr[i].name} \n ${arr[i].complete}`);
}