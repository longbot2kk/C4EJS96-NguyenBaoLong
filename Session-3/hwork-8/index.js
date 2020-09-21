let mySheep=[5,7,300,90,24,50,75];
console.log(`Hello, my name is Long and here is my sheep sizes: `+mySheep);
console.log("\n");
// 8.2
let max = mySheep[0];
for(let i=0;i<mySheep.length;i++)
{
    if(mySheep[i]>max)
    {
        max=mySheep[i];
    }
}
console.log(`Now my biggest sheep has size ${max}, let's shave it`);
console.log("\n");

// 8.3
mySheep[2]=8;
console.log(`After shearing, here is my flock: `+mySheep);
// 8.4
for(i=0;i<mySheep.length;i++)
{
    mySheep[i]=mySheep[i]+50;
}
console.log("MONTH 1")
console.log("One month has, passed, my sheeps have grown, here are their sizes")
console.log(mySheep);
console.log("\n");
// 8.5
max = mySheep[0];
for(i=0;i<mySheep.length;i++)
{
    if(mySheep[i]>max)
    {
        max=mySheep[i];
    }
}
console.log(`Now my biggest sheep has size ${max}, let's shave it`);
mySheep[3]=8;
console.log(`After shearing, here is my flock: `+mySheep);
console.log("\n");
for(i=0;i<mySheep.length;i++)
{
    mySheep[i]=mySheep[i]+50;
}
console.log("MONTH 2")
console.log("One month has, passed, my sheeps have grown, here are their sizes")
console.log(mySheep);
max = mySheep[0];
for(i=0;i<mySheep.length;i++)
{
    if(mySheep[i]>max)
    {
        max=mySheep[i];
    }
}
console.log(`Now my biggest sheep has size ${max}, let's shave it`);
mySheep[6]=8;
console.log(`After shearing, here is my flock: `+mySheep);
console.log("\n");
for(i=0;i<mySheep.length;i++)
{
    mySheep[i]=mySheep[i]+50;
}
let s=0;
console.log("MONTH 3")
console.log("One month has, passed, my shepps have grown, here are their sizes")
console.log(mySheep);
console.log("\n");
for(i=0;i<mySheep.length;i++)
{
    s+=mySheep[i];
}
console.log(`My flock has size in total : ${s}`);
console.log(`I would get ${s} * 2$ = ${s*2}`);
