const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(gitHub) {
    super(`${this.name},${this.id},${this.email}`);
    this.gitHub = gitHub;
  }

  getGitHub() {
    return GitHub;
  }
  getRole() {
    return Engineer;
  }
}
const engineer = new Engineer(
  `${this.name},${this.id},${this.email},${this.gitHub}, ${this.role}`
);
