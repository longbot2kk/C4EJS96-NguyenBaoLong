let mass = prompt("Your weight in kg ?")
let height = prompt("Your height in cm ?")
let bmi = mass/(height*height)
alert(bmi)
if(bmi<16)
{
    alert("You are Severely")
}
else if(16<=bmi&&bmi<=18.5)
{
    alert("You are Underweight")
}
else if(18.5<=bmi&&bmi<=25)
{
    alert("You are Normal")
}
else if(25<=bmi&&bmi<=30)
{
    alert("You are Overweight")
}
else alert("You are Obese")
