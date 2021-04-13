const Employee = require("./Employee");

class Manager extends Employee {
  constructor(officeNumber) {
    super(`${this.name},${this.id},${this.email},${this.role}`);
    this.officeNumber = officeNumber;

    getOfficeNumber() {
      return officeNumber;
    }

  }

}

const manager = new Manager (`${this.name},${this.id},${this.email},${this.role}, ${this.OfficeNumber}`);
