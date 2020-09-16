let name
let old
let i=0
for(i=1;i<=5;i++)
{
    name = prompt(`person ${i}: What is your name?`)
    old = prompt(`person ${i}: How old are you?`)
    
    console.log(`${name} is ${old} years old !`)
}
