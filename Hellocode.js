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


//number and string sorting
let a=[48,34,67,89,13];
a.sort((a,b)=>b-a);
console.log(a);

let a1=[`quentin`,`neethu`,`john`,`minnala`,`thomas`];
console.log(a1.sort()); //output=>[ 'john', 'minnala', 'neethu', 'quentin', 'thomas' ]
console.log(a1.sort().reverse()); //output=>[ 'thomas', 'quentin', 'neethu', 'minnala', 'john' ]

//For each function
const students = [
  { name: "Emma", grade: "A" },
  { name: "Liam", grade: "B" }
];

students.forEach((student) => {
  console.log(`${student.name} received grade ${student.grade}`);
});

let user={
    id:101,
    name:"Jay",
    profile:"Qa"
}

for(let i in user)
{
    console.log(i);//keys
    
}
let numericData=new Array(4.5);
console.log(numericData);
console.log(numericData.length);

let names = "rajini"
let arr = [];
let word;
for (let i = 0; i < names.length; i++) {
        if (i % 2 === 0) {
        word = names[i].toUpperCase();
       arr.push(word);
    console.log(arr);
    }
        else {

        word = names[i].toLowerCase();
        arr.push(word);
        console.log(arr);
    }
}
console.log(arr.join(" "))

let s3=new String("Hello");
let s4=new String("Hello");
console.log(s3===s4);


let footerLinks=['Aboutus','help','privacypolicy','brand'];
let allLinks=footerLinks.map((link)=>{
return "Amazon-"+link
})
console.log(allLinks);

let num1=457356,rm=0,rev=0,temp=num1;

while(num1>0)
{
    rm=num1%10;
    num1=Math.floor(num1/10);
    rev=rev*10+rm;

}

console.log(`Reverse number of ${temp} is: ${rev} `);

let ss5="QA TESTING";

console.log("Search string ends with framework!"+ss5.includes("TEST"));


console.log(ss8+" "+ss9);//Hello All
console.log(ss8.concat(" "+ss9));//Hello All

console.log(ss8.concat(" "+[ss9,ss7]));//Hello All,Playwright Training!
console.log(ss8.concat(" "+[ss9+" "+ss7]));//Hello All Playwright Training!
console.log(ss8.concat(" "+ss9+" "+ss7));//Hello All Playwright Training!

  let arr=[10,20,30,40,50]
//index  +ve  0  1  2  3  4

console.log(arr[3]);//40
console.log(arr[-4]);//undefined