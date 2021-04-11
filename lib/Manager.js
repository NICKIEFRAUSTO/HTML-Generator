const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email) {
    super();
    this.name = name;
    this.id = id;
    this.email = email;
  }
}
