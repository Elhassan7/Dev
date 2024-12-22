const person = {
    firstName:"John",
    lastName: "Doe",
    display: function () {
      let x = document.getElementById("zdok");
      x.innerHTML = this.firstName + " " + this.lastName;
    }
}
  

//person.display();
setTimeout(person.display.bind(person), 5000);
