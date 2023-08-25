//Diffrence between apply and bind is we add new thing in bind and in apply we add two object

const person = {
    firstName:"Prem",
    lastName: "Singh",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
}
  
const member = {
    firstName:"Chess Player ",
    lastName: "Web developer",
}
  
person.fullName.bind(member);

console.log(person.fullName.bind(member));