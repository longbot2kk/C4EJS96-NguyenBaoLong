for(let i=0;i<=6;i++)
{
    for(let j=0;j<=6;j++) 
    {
        if(i+j==6)    
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