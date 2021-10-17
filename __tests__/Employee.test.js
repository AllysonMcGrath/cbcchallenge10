test("creates an employee object", () => {
    const employee = new Employee("Dave", 1234, "dave@email.com");

    expect(employee.name).toBe("Dave");
    expect(employee.id).toBe(1234);
    expect(employee.email).toBe("dave@email.com");
    
});