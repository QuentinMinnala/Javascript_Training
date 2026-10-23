console.log("----1.Employee Management System Scenario-----");
let emp=["rahul","priya","AMit"];
console.log(emp);
let emp1=emp.push("sneha");
console.log(emp1);
console.log("after adding sneha:"+emp);
emp.pop();
console.log("after removing last employee:"+emp);
emp.unshift("Manager");
console.log("after adding manager:"+emp);
emp.shift();
console.log("after removing first employee:"+emp);
console.log("--------------------------------------");

console.log("----2.Shopping Cart Application scenario-----");
let product=["Mobile","Laptop","Mouse"];

let product1=product.push("Keyboard");
console.log(product1);
console.log("after adding keyboard:"+product);
product.reverse();
console.log("after reversing:"+product);
let product_list=product.join(" | ");
console.log("Product list:"+product_list);
console.log("--------------------------------------");


console.log("----3.Browser Tabs Automation scenario-----");
let browser=["Google", "YouTube", "ChatGPT"];
console.log(browser);
browser.pop();
console.log("after removing last tab:"+browser);
let browser1=browser.push("Github");
console.log(browser1);
console.log("after adding Github:"+browser);
browser.reverse();
console.log("after reversing:"+browser);
console.log("--------------------------------------");

console.log("----4.Food Delivery Orders scenario-----");
let food=["Pizza", "Burger", "Pasta"];
console.log(food);
let food1=food.push("Sandwich");
console.log(food1);
console.log("after adding sandwich:"+food);
food.shift();
console.log("after removing first order:"+food);
let food_list=food.join(",");
console.log("Food orders:"+food_list);
 console.log("--------------------------------------");

console.log("----5. Student Attendance System scenario-----");
let student=["Ankit", "Riya", "Karan"];
console.log(student);
let student1=student.unshift("Neha");
console.log(student1);
console.log("after adding Neha:"+student);
student.pop();
console.log("after removing last student:"+student);
let new_student_list=[...student];
console.log("Separate copy of student list:"+new_student_list);
console.log("--------------------------------------");

// console.log("----6.QA Test Case Management scenario-----");
let testCases=["LoginTest", "PaymentTest", "SearchTest"];
console.log("first copy testcases:"+testCases);
let testCasesCopy=[...testCases];
console.log("copy of testcases:"+testCasesCopy);
let extracted=testCasesCopy.splice(0,2);
console.log("afterextract first 2 test cases:"+extracted);
console.log("Reversed test cases:"+extracted.reverse());
console.log("--------------------------------------");


console.log("----7.Movie Recommendation App scenario-----");
let movies=["Inception", "Avatar", "Titanic"];
console.log(movies);
let movies1=movies.push("Interstellar");
console.log("after adding Interstellar:"+movies);
let movies2=movies.splice(2,1,"Jawan");
console.log(movies2);
console.log("AFter replacing:"+movies.join("-"));
console.log("--------------------------------------");

console.log("----8.Product Inventory Management scenario-----");
let Inventory=["Mobile", "Laptop", "Tablet", "Camera"];
console.log("original inventory:"+Inventory);
Inventory.splice(2, 1, "Smartwatch");
//remove tablet and replace with smartwatch
console.log(Inventory);
//copy duplicate of updated inventory
let new_inventory=[...Inventory]
console.log("Duplicate copy:"+new_inventory);
console.log("--------------------------------------");
