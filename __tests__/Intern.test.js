const Intern = require("../lib/Intern");

test("creates an intern object", () => {
    const intern = new Intern("Dave", 1234, "dave@email.com", "davemedina");

    expect(intern.name).toBe("Dave");
    expect(intern.id).toBe(1234);
    expect(intern.email).toBe("dave@email.com");
    
});

test("gets role as intern", () => {
    const intern = new Intern("Dave", 1234, "dave@email.com", "davemedina");

    expect(intern.getRole()).toBe("Intern");
});

test("gets intern school", () => {
    const intern = new Intern("Dave", 1234, "dave@email.com", "UT Austin");

    expect(intern.getSchool()).toBe("UT Austin");
});