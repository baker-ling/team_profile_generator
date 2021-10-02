const Employee = require("../lib/Employee.js");

describe("Employee", () => {
    describe("Constructor", () => {
        it("should create an object", () => {
            const employee = new Employee();
            expect(typeof employee).toEqual("object");
        });
        it("should take a name, id, email and set them as propertties on the object", ()=>{
            const name = "John Doe";
            const id = 1;
            const email = "john.doe@fake.net"
            const employee = new Employee(name, id, email);
            expect(employee.name).toEqual(name);
            expect(employee.id).toEqual(id);
            expect(employee.email).toEqual(email);
        })
    });
});