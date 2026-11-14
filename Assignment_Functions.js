
console.log("----1.Calculate Test Score-----")
function calculateScore(score1,score2,score3) 
{
    let totalScore=score1+score2+score3;
    return totalScore;
}
 let result=calculateScore(100,50,60);
console.log("Total Score: "+result);
console.log("--------------------------------------");



console.log("----2.Check Test Status-----")
function checkTestStatus(test_score) 
{
(test_score>=40)?console.log("Test status is PASS"):console.log("Test status is FAIL");

}
checkTestStatus(50);
console.log("--------------------------------------");

console.log("----3. Validate Username-----")
function validateUsername(username1) {
  switch (true) {
    case username1 == null:
    case username1.length < 5:
      return false; 
    default:
      return true; 
  }
}
let isUsernameValid = validateUsername("");
console.log("Is Username Valid: " + isUsernameValid);
console.log("--------------------------------------");


console.log("----4.Validate Login Credentials-----")
function validateLogin(username,password) 
{
    
       if (username=="admin" && password=="admin123")
       {
        console.log("Login Successful");
       }        
       else
       {
        console.log("Invalid Username or Password");
       }
    
}
validateLogin("admin","admin123");
console.log("--------------------------------------");


console.log("----5. Validate Password -----")
function validatePassword(password1) 
{
    switch (true) {
        case (password1 == null):
            return false;
        case (password1.length < 8):
            return false;
        case (!/[0-9]/.test(password1)): //use regular expression with test method to check if certial pattern exists in string
            return false;
        default:
            return true;
    }
}
let isPasswordValid = validatePassword("naples`12");
console.log("Is Password Valid: " + isPasswordValid);
console.log("--------------------------------------");

console.log("----6.Browser Test Using Callback -----")
function runBrowserTest(browser, callback) {
    // Simulate executing a browser test
    let testResult = `Test executed successfully on ${browser}`;
    // Pass browser name and test result to callback
    callback(browser, testResult);
}
// Callback function
function displayResult(browser, result) {
    console.log("Browser:", browser);
    console.log("Test Result:", result);
}
runBrowserTest("Chrome", displayResult); 
console.log("--------------------------------------");

console.log("----7. Display Browser Names Using forEach()-----")
let browsers=['Chromium','Firefox','WebKit'];
browsers.forEach((web)=>{
    console.log("Executing test on "+web);
});
console.log("--------------------------------------");

console.log("----8.Calculate Final Prices Using map() -----")
let product_price=[1000,2000,3000,4000];
product_price.map((price)=>{
    console.log("Final price with 18% GST:" +(price+18/100*price));
  });

console.log("--------------------------------------");


console.log("----9.Filter Failed Test Cases-----")
let testcase_status=
[  
{ name: "Login Test", status: "PASS" }, 
{ name: "Search Test", status: "FAIL" }, 
{ name: "Checkout Test", status: "PASS" }, 
{ name: "Payment Test", status: "FAIL" } 
];
let failedcase=testcase_status.filter((failedcase)=>failedcase.status==="FAIL");
console.log(failedcase);
console.log("--------------------------------------");

