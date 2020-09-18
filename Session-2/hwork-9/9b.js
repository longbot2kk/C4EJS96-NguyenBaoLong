let n=prompt("Enter the total number of L's and H's")
for(let i=0;i<=n;i++)
{
    for(let j=0;j<=n;j++) 
    {
        if(i+j==n)    
        {
            if(i<(6/2)&&j>(6/2))
            {
                console.log(`${i} L`)
                console.log(`${j} H`)
            }
            else 
            {
                console.log(`${i} H`);
                console.log(`${j} L`)
            }
        }   
            
    }
    console.log("\n")
}