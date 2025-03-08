let a=[11,123,1234,12,121];
let max=a[0];
for(let i=1; i<a.length;i++)
{
    if(max<a[i])
    {
       max=a[i];
    }
    
}
console.log("largest number is:" ,max)

let temp=max, rev=0, rem;

while(temp!=0)
{
    rem=temp%10;
    rev=rev*10+rem;
    temp=Math.floor(temp/10); // Math.floor just round the nearest balue 127/10 -> (12.7) -> 12 //temp/=10; (USED IN JAVA) 
}
console.log(rev)
if(max==rev)
{
    console.log("max value is palindrome", rev)
}
else
{
    console.log("max value is not palindrome", rev)
}