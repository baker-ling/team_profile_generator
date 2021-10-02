class Employee {
    constructor(name, id, email) {
        name = name.trim();
        if (!name) {
            throw new Error("The name must contain at least 1 non-whitespace character.");
        }
        if (typeof id !== "number") {
            throw new Error("id must be a number.");
        }
        if (id < 0 || Math.floor(id) !== id) {
            throw new Error("id must be a non-negative integer.");
        }
        if (email && !email.includes('@')) {
            throw new Error("Email must include an '@' symbol if provided.");
        }

        this.name = name;
        this.id = id;
        this.email = (typeof email === "string" ? email : '');
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }
    
    getEmail() {
        return this.email;
    }

    getRole() {
        return this.constructor.name;
    }
}

module.exports = Employee;