// console.log("Hello, World!");

// let r=78;

// let s=++r;
// console.log(r);
// console.log(s);
// let r1=101;

// let s1=++r;
// console.log("r1 value:"+r1);
// console.log("s1 value:"+s1);

let fact=1;
for(let i=5;i>=1;i--)
    {
    fact=fact*i;
console.log(fact);
}
console.log("Ssd");
console.log(NaN === NaN);
console.log(10 + "10" -10);

let num=10234,rem=0,sum=0;

//floor():Returns the greatest integer less than or equal to its numeric argument.
while(num>0)
{
    rem=num%10;
    num=Math.floor(num/10);
    sum=sum+rem;
}

console.log("Sum of digits: "+sum);

let age=10;

(age>=18)?console.log("Adult"):console.log("minor");

let numn=0;
if(numn)
{
    console.log("True");
}           
else
{
    console.log("False");
}   

console.log(Boolean("false"));

for(let i=1;i<=10;i++)
{
    if(i===8)
    {
        continue;//skip certain part of code & execution will continue
        console.log("hi");//Unreachable code detected.
    
    }else
    {
        console.log(i);
        
    }
}
let month=["jan","feb","mar","apr","may","jun","jul","aug","mar","sep","oct","nov","dec"];
let index1=month.indexOf("mar");
console.log("Index of mar: "+index1); // 2
let index2=month.indexOf(index1+1);
console.log("Index of mar: "+index2); //-1


