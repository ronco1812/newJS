/*function pow()
{
const num = 123
let sum = 0
while(num > 0)
{
    sum = sum + num%10;
    num = num/10;
}
console.log(sum)
}*/

function shorshim()
{
const a = 1; b = -6; c = 9;  // stands for x**2 - 6*x + 9 = 0
let solutionA = solutionB = 0
solutionA = ((-b) + Math.sqrt(Math.pow(b,2) - (4*a*c))) /(2*a);
solutionB = ((-b) - Math.sqrt(Math.pow(b,2) - (4*a*c))) /(2*a);
console.log(solutionA, solutionB)
}