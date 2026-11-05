

console.log("----1.Class Problem-Create a Student Class-----");
class Student
{
       constructor(name,age,course)
    {
        this.name=name;
        this.age=age;
        this.course=course;
    }
    getDetails()
    {
        console.log("Student Name: "+this.name);
        console.log("Student Age: "+this.age);
        console.log("Student Course: "+this.course);
    }
}
student1=new Student("John",20,"JavaScript");
student2=new Student("Nitesh",28,"Typescript");
student1.getDetails();
student2.getDetails();

console.log("--------------------------------------");


console.log("----2.Class Problem-Bank Account Class-----");
 class BankAccount
{
    accountname;
    balance;
 
       constructor(accountHolder,amount)
    {
        this.accountname=accountHolder;
        this.balance=amount;
   }
    getdeposit(amount)
    {
        this.balance=this.balance+amount;
        console.log("Deposit amount of: "+this.accountname+" is "+this.balance);
    }

    getwithdraw(amount)
{
             this.balance=this.balance-amount;

          console.log("Withdraw amount of: "+this.accountname+" is "+this.balance);
        //}
    }
    getcheckbalance()
    {
        console.log("Check Balance of: "+this.accountname+" is "+this.balance);
    }
}  accdata=new BankAccount("Annie",1000);
  accdata.getdeposit(700);
  accdata.getwithdraw(250);
  accdata.getcheckbalance();

console.log("--------------------------------------");

console.log("----3.Class Problem-Employee Class-----");
class Employee
{
       constructor(name,salary,department)
    {
        this.name=name;
        this.salary=salary;
        this.department=department;
    }
    getDetails()
    {
        console.log("Employee Name: "+this.name);
        console.log("Employee Salary: "+this.salary);
        console.log("Employee Department: "+this.department);
        let bonus=10/100*this.salary;
        console.log("Bonus with salary: "+ (bonus+this.salary));

    }
}
employee1=new Employee("John",50000,"IT");
employee2=new Employee("Nitesh",60000,"HR");
employee1.getDetails();
employee2.getDetails();

console.log("--------------------------------------");




// Program 2: Bank Account Class 
// Problem Statement: 
// Create a BankAccount class with the following: 
// • accountHolder  
// • balance  
// • deposit()  
// • withdraw()  
// • checkBalance() 

