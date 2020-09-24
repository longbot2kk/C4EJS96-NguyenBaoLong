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
// while(true)
// {
//     let n= prompt("Enter your command(New, Delete, Update, Complete");
//     if(n===null || n===undefined)
//     {
//         break;
//     }
//     switch(n)
//     {
//         case new:
//             let p= prompt("Enter new task: ");
//             let f={
//                 name: p,
//                 complete: "complete: false"
//             }
//             arr.push(f);
//             for(let i=0;i<arr.length;i++)
//                 {
//                     console.log(`${i+1}. ${arr[i].name} \n ${arr[i].complete} `);
//                 }
//                 break;
//         case delete:
//             let p= prompt("Enter task you want delete") 
//             arr.splice(p,1);
//             for(let i=0;i<arr.length;i++)
//             {
//                 console.log(`${i+1}. ${arr[i].name} \n ${arr[i].complete} `);
//             }
//             break;

//     }
// }
// update với cái còn lại làm tương tự
// em làm cái new như trong bài thôi nhé a 
let p= prompt("Enter new task: ");
            let f={
                name: p,
                complete: "complete: false"
            }
            arr.push(f);
            for(let i=0;i<arr.length;i++)
                {
                    console.log(`${i+1}. ${arr[i].name} \n ${arr[i].complete} `);
                }
