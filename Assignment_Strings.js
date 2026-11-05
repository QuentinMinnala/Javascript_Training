console.log("----1.Count the number of words in a sentence-----");
let inp="I Am learning javascript";
console.log("Total words are--"+inp.split(" ").length);
console.log("--------------------------------------");

console.log("----2.Remove duplicate characters from a string-----");
let inp2="“Programming";
let arr2="";
for(i=0;i<=inp2.length;i++)
{
    if(arr2.includes(inp2.charAt(i)))
    {
            continue    
    }
    else
    arr2= arr2+inp2.charAt(i);
}
console.log("After Duplicates characters Removed: " +arr2);
console.log("--------------------------------------");

console.log("----3.Capitalize the first letter of a string-----");
let inp3="javascript";
let result3 = inp3.charAt(0).toUpperCase()+inp3.slice(1);
console.log(result3);
console.log("--------------------------------------");


console.log("----4.Remove all spaces from a string-----");
let inp4="Welcome to learn playwright";
console.log(inp4.replaceAll(" ",""));
console.log("--------------------------------------");


console.log("----5.Find the number of characters in a string with and without using length-----");
let inp5="Learn and grow";
let count=0;
let result5="";
for(let char of inp5)
{
 result5=result5+char;
   count++;

}
console.log("number of characters in a string without length method: "+count); 
console.log("Input string: "+result5);
console.log("number of characters in a string with length method: "+inp5.length); 


console.log("---------------------------------------------------------");


console.log("----6.Count the number of vowels in a string-----");
let inp6="Javascript";
let vowels="aeiou";
let result6="";
for(let char of inp6)
{
    if (vowels.includes(char))
    {
        result6=result6+char;

    }
}
console.log("vowels in: " +inp6, "will be: " +result6);
console.log("vowels count will be: " +result6.length);
console.log("---------------------------------------------------------");

console.log("----7.Reverse a string with & without using the built-in reverse() method-----");
let inp7="Welcome";
let arr7=[];
let result7="";
for(i=inp7.length-1;i>=0;i--)
{
        arr7.push(inp7.charAt(i));

}
console.log("storing reverse string in array format: "+arr7);
result7 = arr7.join("");
console.log("Reverse a string: " +result7);
console.log("---------------------------------------------------------");



