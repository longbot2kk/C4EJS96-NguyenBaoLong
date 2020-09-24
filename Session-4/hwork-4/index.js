let a = {
    debug: "The process of figuring out why your program has a certain error and how to fix it",
    done:"When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)",
    defect: "The formal word for ‘error’",
    pm: "The short version of Project Manager, the person in charge of the final result of a project",
    uiux: "UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels",
}
console.log(a);
console.log(Object.keys(a));
let p= Object.keys(a);
var check;
    let n= prompt("Enter a keyword");
    for(let i=0;i<a.length;i++)
    {
        if(n===p[i])
        {
            check==true;
            break;
        }
        else if(n!==p[i])
        {
            check==false;
        }
    }
    if(check==true)
    {
        alert(a[n]);
    }
    else if(check==false)
    {
        let d=prompt(`We could not find your word: ${n}, leave your explanation`);
        alert("done");
        let o=prompt("Enter a keyword");
        a.o = d;
        alert(a.o);
    }