console.log("----1. Student Record System -----")
export class Student
{
  #name="Quentin";
  #roll_number=255418;
  #grade='A';

    constructor(name, roll_number, grade) {
        this.#name = name;
        this.#roll_number = roll_number;
        this.#grade = grade;
    }
getstudent()
{
  console.log("Student Name: " + this.#name+" Roll number:"+ this.#roll_number+ "STudent grade:"+this.#grade);

}
    // Setter method
    setStudent(name, roll_number, grade) 
    {
      //The constructor runs only once when you create an object. set initial value only.
      // so when you want to change/update/or new data to be passed like name,id,grade-define again inside setter method this.#name = name;
      // run multiple times with new values whenever called
       this.#name = name;
        this.#roll_number = roll_number;
        this.#grade = grade;
    }
}
console.log("--------------------------------------");

console.log("----2.Online Shopping-Product Class -----")
export class Product
{
 #productId; 
#productName;
#price;
#quantityInStock;

constructor(productId,productName,price,quantityInStock)
{
        this.setProduct(productId, productName, price, quantityInStock);
}
setProduct(productId,productName,price,quantityInStock)
  {
     if (price <= 0 || quantityInStock < 0) {
      console.log("Invalid price or quantity.");
      return false;
    }
    // 2. Save all four private fields (make sure '#' is on #quantityInStock)
    this.#productId = productId;
    this.#productName = productName;
    this.#price = price;
    this.#quantityInStock = quantityInStock;
    // 3. Return only at the very end
    return true;
  }
    getProduct()
  {
    console.log("product ID is:"+this.#productId+ "Product name:" +this.#productName);
        console.log("product price is:"+this.#price+ "Quantity InStock:" +this.#quantityInStock);
  }
}
console.log("--------------------------------------");


console.log("----3:Bank Account-----")
export class BankAccount
{
 #balance=0;
 constructor(initialBalance)
 {
  if(initialBalance>0)
  {
    this.#balance=initialBalance;
  }
 }
 deposit(amount)  
 {
   if(amount>0)
  {
    this.#balance +=amount; 
       console.log("Deposit:" +amount);
  }
  else
  return false;
 }
withdraw(amount)
{
    if (amount > this.#balance) {
      console.log("Insufficient balance.");
      return false;
    }
  else
    this.#balance -=amount; 
   console.log("Withdrawal:" +amount);

}
getBalance() 
{
 console.log("Current Balance: " + this.#balance);
    return this.#balance;
}
}
console.log("--------------------------------------");


console.log("----4: Student Marks-----")
export class Student_Marks
{
 #marks;
   constructor(name4, stud_id, marks) {
    this.setMarks(name4, stud_id, marks); 
  }
      // Setter method
    setMarks(name4,stud_id,marks) 
    {
  
     this.name4 = name4;
        this.stud_id = stud_id;
        if (marks>=0)
        {
          this.#marks = marks;
          return marks;
        }
        else
        this.#marks = false;
          return false;
    }
getMarks()
{
  console.log("Student Name: " + this.name4+ " student ID:"+ this.stud_id + " Marks:"+this.#marks);
}
}
console.log("--------------------------------------");

