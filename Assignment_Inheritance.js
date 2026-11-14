console.log("----1. Basic Inheritance-Employee-----")
class Person
{
    constructor(e_name){
    this.e_name=e_name;
}
displayName()
{
  console.log("EMployee Name: " + this.e_name);
}

}
class Employee extends Person
{

    constructor(e_name,e_Id){
    super(e_name);
    this.e_Id=e_Id;
       }
       displayEmployeeDetails() 
       {
        this.displayName();
        console.log("Employee ID: " + this.e_Id)
        }
    }
const emp = new Employee("Quentin", 255418);
emp.displayEmployeeDetails();

console.log("--------------------------------------");

console.log("----2. super to Call Parent Method-----")
class Vehicle
{
        start() 
       {
        console.log("Vehicle is purchased");
        }
}
class Car extends Vehicle
{
        start() 
       {
        super.start(); // Call parent class start() method
        console.log("Car is purchased");
        }
}
const myCar = new Car();
myCar.start();
console.log("--------------------------------------");
