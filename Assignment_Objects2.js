
console.log("----5.Create a user object-----");
let user_data={
   username: "standard_user",
   role: "Senior Associate",
   department: 30000 ,
   experience: 12
};
let allEntries=Object.entries(user_data);
console.log("Display all properties:", allEntries);
console.log("-----------------------------------------------------------------");


console.log("----6.Create a user object-----");
const user={
   name: "John", 
   role: "Tester", 
   city: "Pune" 
 }; 
let allEntries1=Object.entries(user);
console.log("Display all properties:", allEntries1);
console.log("Display all properties:", user.role);
const user_1={
    ...user,
    role:"Automation Engineer",
    experience:5
};
console.log("Original data:", user);

console.log("After changed role and Added experience:", user_1);
console.log("-----------------------------------------------------------------");


console.log("----7.Create Playwright Configuration Object-----");
let playwright={
   browser: "chromium",
   baseURL: "https://example.com",
   headless: true ,
   timeout: 30000 ,
   retries: 2 
};
let allvalues1=Object.values(playwright);
console.log("Display all values:",allvalues1);
playwright.browser="Edge";
playwright.timeout=50000;
playwright.screenshot= "only-on-failure";
let allEntries2=Object.entries(playwright);
console.log("Display all properties after Modification:", allEntries2);
let playwright_copy={
    ...playwright,
    baseURL: "https://google.com"
};
console.log("original data:", playwright);
console.log("copied data:", playwright_copy);

 

