// Importing Engineer from Library

const Engineer = require("../lib/Engineer");
const testEngineer = new Engineer("Joe", "123", "Joe@gmail.com", "github.com/Joe");

// Testing Engineer Class Object

test("Testing if the correct values are received for Engineer class object.", function() {
    expect(testEngineer.name).toBe("Joe");
    expect(testEngineer.id).toBe("123");
    expect(testEngineer.email).toBe("Joe@gmail.com");
    expect(testEngineer.github).toBe("github.com/Joe");
});

// Testing Engineer Functions

test("testing that getName returns the name of the user.", function () {
    expect(testEngineer.getName()).toBe("Joe");
});

test("testing that getId returns the ID of the user.", function () {
    expect(testEngineer.getId()).toBe("123");
});

test("testing that getEmail returns the email of the user.", function () {
    expect(testEngineer.getEmail()).toBe("Joe@gmail.com");
});

test("testing that getRole returns the role of the user.", function () {
    expect(testEngineer.getRole()).toBe("Engineer");
});

test("testing that getGitHub returns the GitHub of the user.", function () {
    expect(testEngineer.getGitHub()).toBe("github.com/Joe");
});