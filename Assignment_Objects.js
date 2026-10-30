
console.log("----1.Create a student object with the following properties-----");
let student={
    id:255418,
    name:"Jaime",
    age:22,
    course:"Physics",
    marks:[95,78,76]
};
console.log("Print the complete object: ", student);
console.log("Print the student's name: "+student.name);
console.log("Print the student's marks: "+student.marks);
// Change the student's course and Update the student's marks.  
student.course="Biology";
student.marks[2]=88;
console.log("Print student after update marks and course: ", student);
student.city="Hyderabad";
console.log("Print student after add new city: ", student);
delete student.age;
console.log("Print student after delete age: ", student);
console.log("-----------------------------------------------------------------");


console.log("----2.Create an employee object containing following properties-----");
let employee={
    id:255418,
    name:"Jaime",
    department:"QA Engineering",
    designation:"QA LEAD",
    salary:120000,
};
console.log("Print the employee's ID: ", employee['id']);
console.log("Print the employee's name: "+employee["name"]);
console.log("Print the department: "+employee.department);
console.log("Print the designation : "+employee.designation);
console.log("Print the Salary: "+employee['salary']);
employee.salary=150000;
employee.location="Bangalore";
 console.log("Print Employe after salary update and adding location: ", employee);
delete employee.designation;
 console.log("Print Employe after designation delete: ", employee);
console.log("-----------------------------------------------------------------");

console.log("----3.Create a testData object containing properties-----");
let user= {
    username:"quents_breeze",
    password:"plaTO90%",
    browser:"Edge",
    environment:"Staging",
    timeout:"3000ms",
};
let allKeys=Object.keys(user);
console.log(allKeys);
let allValues=Object.values(user);
console.log(allValues);
console.log("Count the number of properties: ", allValues.length);
console.log("username" in user); 
console.log("-----------------------------------------------------------------");

console.log("----4.Create an object containing test configuration-----");
let test_config={
   browser: "chromium",
   headless: true ,
   timeout: 30000 ,
   retries: 2 
};
let allvalues1=Object.values(test_config);
console.log("Display all values:",allvalues1.join());
console.log("if chromium present:", allvalues1.includes("chromium")); 
console.log("number of configuration values", allvalues1.length); 
console.log("-----------------------------------------------------------------");
