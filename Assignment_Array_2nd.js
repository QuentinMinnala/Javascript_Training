console.log("----9.Online Course Platform scenario-----");
let courses=["JavaScript", "Playwright", "Cypress"];
console.log("original courses:"+courses);
//remove the first course
courses.shift();
console.log("updated courses:"+courses);
//Add "TypeScript" at the beginning
courses.unshift("TypeScript");
console.log("updated courses:"+courses);
let extracted_courses=courses.slice(1);
console.log("Extracted last 2 courses:"+extracted_courses);
console.log("--------------------------------------");


console.log("----10.Music Playlist Application scenario-----");
let songs=["Song1", "Song2", "Song3"];
console.log(songs);
//Display playlist in reverse order
console.log(songs.reverse());
//Remove the last song
console.log(songs.pop()); //removed song
console.log(songs);
//Add "NewSong" at the beginning 
songs.unshift("NewSong");
console.log(songs);
console.log("--------------------------------------");

console.log("----11.Bug Tracking System scenario-----");
// Declare an array with "Bug101", "Bug102", "Bug103" and: 
let bugs=["Bug101", "Bug102", "Bug103"];
console.log("original bug list:"+bugs);
//  Add "Bug104"
  bugs.push("Bug104");
  console.log(bugs);
// Remove "Bug102"  
bugs.splice(1,1);
console.log("after bug removal:"+bugs);
//Create a copy of the bug list  
let bug_copy=[...bugs];
console.log("copied bug list:"+bug_copy);
console.log("--------------------------------------");

console.log("----12.Daily Tasks Planner scenario-----");
// Declare an array with "Wake Up", "Exercise", "Study" 
let tasks=["Wake Up", "Exercise", "Study"]; 
console.log(tasks);
// 1. Add "Meeting" to the task list  
  tasks.push("Meeting");
  console.log(tasks);
// Remove the first task  
tasks.shift();
  console.log(tasks);
  // Reverse all tasks  
  console.log(tasks.reverse());
// Display all tasks in a single string separated by " -> " 
  console.log(tasks.join("->"));
console.log("--------------------------------------");

  console.log("----13.Mobile Contacts List scenario-----");
// Declare an array with "Ram", "Shyam", "Mohan" and: 
let contacts=["Ram", "Shyam", "Mohan"];
console.log(contacts);
// Add "Sita" at the beginning  
console.log(contacts.unshift("Sita"));
console.log(contacts);
// Remove the last contact  
console.log(contacts.shift());
console.log(contacts);
// Extract only the first 2 contacts  
console.log("extracted data:"+contacts.slice(0,2));
console.log("--------------------------------------");


console.log("----14.Sports Team Selection scenario-----");
// Declare an array with "Virat", "Rohit", "Gill" and: 
let team=["Virat", "Rohit", "Gill"];
console.log(team);
// Add "Hardik" to the team 
team.push("Hardik");
console.log(team);
// Replace "Gill" with "KL Rahul" 
team.splice(2,1,"KL Rahul"); 
console.log(team);
//Display players in reverse order
console.log(team.reverse());
console.log("--------------------------------------");

  
console.log("----15.Real-Time Automation Framework scenario-----");
// Declare an array with "LoginFail", "CheckoutFail", "SearchFail" 
let tests= ["LoginFail", "CheckoutFail", "SearchFail"];
console.log("INITIAL Data:"+tests);
// Add "ProfileFail"  
tests.push("ProfileFail");
console.log("ADDED data:"+tests);
//Remove the first failed test 
tests.shift() 
console.log("REMOVED Data:"+tests);
// Create another copy of the failed tests array
let copy_tests=[...tests];  
console.log("COPIED data:"+copy_tests);
// Extract only the first 2 failed tests  
let extract_tests=tests.slice(0,2);
console.log("EXTRACTED first 2 data:"+extract_tests);
// Replace "CheckoutFail" with "PaymentFail"  
let replace_tests=extract_tests.splice(0,1,"PaymentFail");
console.log(replace_tests);
console.log("REPLACED DATA:"+extract_tests);
// Convert all failures into a single comma-separated string
console.log("COMMA seperated:"+extract_tests.join(","));
console.log("--------------------------------------");
