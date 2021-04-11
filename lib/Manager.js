const Employee = require("./Employee");

class manager extends Employee {
  constructor(name, id, email) {
    super();
    this.name = name;
    this.id = id;
    this.email = email;
  }
}
