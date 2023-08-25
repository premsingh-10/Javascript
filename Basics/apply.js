const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
}
  
const person1 = {
    firstName: "Prem",
    lastName: "Singh"
}
  

console.log(person.fullName.apply(person1))