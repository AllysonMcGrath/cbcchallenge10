const Manager = require("../lib/Manager");

test("creates an manager object", () => {
    const manager = new Manager("Dave", 1234, "dave@email.com", 9876);

    expect(manager.name).toBe("Dave");
    expect(manager.id).toBe(1234);
    expect(manager.email).toBe("dave@email.com");
    expect(manager.officeNumber).toBe(9876);
    
});

test("gets role as manager", () => {
    const manager = new Manager("Dave", 1234, "dave@email.com", 9876);

    expect(manager.getRole()).toBe("Manager");
});