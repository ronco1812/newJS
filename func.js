function pow()
{
const num = 123
let sum = 0
while(num > 0)
{
    sum = sum + num%10;
    num = num/10;
}
console.log(sum)
}

function()