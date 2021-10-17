const Employee = require("../lib/Employee");

test("creates an employee object", () => {
    const employee = new Employee("Dave", 1234, "dave@email.com");

    expect(employee.name).toBe("Dave");
    expect(employee.id).toBe(1234);
    expect(employee.email).toBe("dave@email.com");
    
});

test("gets role as employee", () => {
    const employee = new Employee("Dave", 1234, "dave@email.com");

    expect(employee.getRole()).toBe("Employee");
});

test("gets employee id", () => {
    const employee = new Employee("Dave", 1234, "dave@email.com");

    expect(employee.getId()).toBe(1234);
});

test("gets employee name", () => {
    const employee = new Employee("Dave", 1234, "dave@email.com");

    expect(employee.getName()).toBe("Dave");
});

test("gets employee email", () => {
    const employee = new Employee("Dave", 1234, "dave@email.com");

    expect(employee.getEmail()).toBe("dave@email.com");
});