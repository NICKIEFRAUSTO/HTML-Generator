const Employee = require("../Employee");

describe("Employee", () => {
  describe("name", () => {
    it("should return the name input from the user ", () => {
      const name = "Nicole";
      expect(result).toEqual("Nicole");
    });
  });
  describe("id", () => {
    it("should return the id input from the user", () => {
      const id = 5301;
      expect(result).toEqual(5301);
    });
  });

  describe("email", () => {
    it("should return the email address input from the user", () => {
      const email = "nickie@gmail.com";
      expect(result).toEqual("nickie@gmail.com");
    });
  });

  describe("role", () => {
    it("should return the role of the employee as input by the user", () => {
      const role = "Intern";
      expect(result).toEqual("Intern");
    });
  });
});
