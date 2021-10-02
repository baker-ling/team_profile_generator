const Employee = require("../lib/Employee.js");

describe("Employee", () => {
    describe("Constructor", () => {
        it("should create an object", () => {
            const employee = new Employee();
            expect(typeof employee).toEqual("object");
        });
    });
});