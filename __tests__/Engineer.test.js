const Engineer = require("../lib/Engineer");

test("creates an engineer object", () => {
    const engineer = new Engineer("Dave", 1234, "dave@email.com", "davemedina");

    expect(engineer.name).toBe("Dave");
    expect(engineer.id).toBe(1234);
    expect(engineer.email).toBe("dave@email.com");
    
});

test("gets role as engineer", () => {
    const engineer = new Engineer("Dave", 1234, "dave@email.com", "davemedina");

    expect(engineer.getRole()).toBe("Engineer");
});

test("gets engineer github", () => {
    const engineer = new Engineer("Dave", 1234, "dave@email.com", "davemedina");

    expect(engineer.getGithub()).toBe("davemedina");
});
