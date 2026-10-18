console.log("----To find Prime number program using loop---");
let num = 37;
let isPrime = true;

// The loop correctly checks for factors up to the square root of 37
for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
        isPrime = false; 
        break;           
    }
}
console.log(isPrime ? `${num} is prime` : `${num} is not prime`);

console.log("----To Print Even Numbers using loop 1 to 50---");
for (let j = 1; j <= 50; j++) {
    if (j%2 === 0) {
    console.log("even number list:" +j);
              }
}

 console.log("---- multiplication table from 1 to 10 for a number---");
let number =5;
for (let m = 1; m <= 10; m++) {
    let result = number * m;
console.log(`Multiplication of ${m} and ${number}: ${result}`);
}

  console.log("----To calculate the factorial of a given positive integer---");
let fact = 1;
for (let n=1; n<= 6; n++) 
    {
    fact*=n;  
}
    console.log(fact);


 console.log("----To count the total number of digits present in a given number using a loop---");
let count = 92943;
let res = 0;
    // Use a while loop to remove the last digit on each iteration
    while (count > 0) {
        count= Math.floor(count / 10);
        res++;
    }
console.log(res); 

console.log("----To Print numbers from 1 to 20 and break at 10---");
for (let k = 1; k <= 20; k++) {
    if (k === 10) {
        break;
    }
    else 
    console.log(k);
}

console.log("----To Print numbers from 1 to 20 skipping even numbers using continue---");
for (let l = 1; l <= 20; l++) {
    if (l%2 === 0) {
        continue;
    }
    console.log(l);
}
