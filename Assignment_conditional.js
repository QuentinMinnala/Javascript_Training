console.log("----Assignment1: To check whether a number is even or odd---");
let j=77
    if (j%2 === 0) {
    console.log(`Even number: ${j}`);
              }
              else
                    console.log(`odd number: ${j}`);

console.log("----Assignment2: Print the day of the week based on number (1–7)---");
let dayNum = 3; // Change this number to test different days (1-7)
switch (dayNum) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("");
        break;
    default:
        console.log("Invalid week number! Please enter a number between 1 and 7.");
}


console.log("----Assignment3: To evaluate http status code using nested if conditions---");

 let responseCode=299;
 if (responseCode>=200 && responseCode<300) {
     console.log(`status code: Request successful ${responseCode}`);
 } else if (responseCode>=300 && responseCode<400) {
     console.log(`status code: Redirectional ${responseCode}`);
 } else if (responseCode>=400 && responseCode<500) {
     console.log(`status code: Client Error ${responseCode}`);
 } else if (responseCode>=100 && responseCode<200) {
     console.log(`status code: Informational ${responseCode}`);
 }
 else if (responseCode>=500 && responseCode<600) {
     console.log(`status code: Server Error ${responseCode}`);
 }

 console.log("----Assignment4: clothing to wear based on the current temperature if else conditions---");
 let temperature = 0; 
if (temperature > 35) {
    console.log(`wear light cotton clothes for '${temperature}' degrees`);
} else if (temperature >= 20 && temperature <= 35) {
    console.log(`Normal casual wear for '${temperature}' degrees`);
} else if (temperature >= 10 && temperature <= 19) {
    console.log(`Wear a jacket for '${temperature}' degrees`);
} else {
    console.log(`stay indoors, it's too cold! for '${temperature}' degrees`);
}