const Employee = require("./Employee");

class Intern extends Employee {
  constructor(school) {
    super(`${this.name},${this.id},${this.email},${this.role}`);
    this.school = school;
  }

  getSchool() {
    return School;
  }

  getRole() {
    return Intern;
  }
}

const intern = new Intern(
  `${this.name},${this.id},${this.email},${this.role},${this.school}`
);
