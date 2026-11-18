import {Student,Student_Marks,BankAccount,Product} from "./Assignment_Encapsulation.js";

//create object for class student
console.log("----1. Student Record System -----")

const stud_data=new Student('Quentin',101,'A');
stud_data.getstudent();
stud_data.setStudent('Sangeetha',1101,'B');
stud_data.getstudent();
console.log("--------------------------------------");

//create object for class student bank account
console.log("----3:Bank Account-----")
const balance=new BankAccount();
balance.deposit(5000);
balance.withdraw(4999);
balance.getBalance();
console.log("--------------------------------------");

//create object for class student marks
console.log("----4: Student Marks-----")
const marks = new Student_Marks();
marks.setMarks('mini', 2012, 99);
marks.getMarks(); 

console.log("----2: Product-----")
const product_data = new Product();
product_data.setProduct(101,"cookware",44,30);
product_data.getProduct(); 
