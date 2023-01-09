// Importing Manager from Library

const Manager = require("../lib/Manager");
const testManager = new Manager("Joe", "123", "Joe@gmail.com", "007");

// Testing Manager Object



// Testing Manager Functions

test("testing that getName returns the name of the user.", function () {
    expect(testManager.getName()).toBe("Joe");
});

test("testing that getId returns the ID of the user.", function () {
    expect(testManager.getId()).toBe("123");
});

test("testing that getEmail returns the email of the user.", function () {
    expect(testManager.getEmail()).toBe("Joe@gmail.com");
});

test("testing that getRole returns the role of the user.", function () {
    expect(testManager.getRole()).toBe("Manager");
});

test("testing that getOfficeNumber returns the office number of the user.", function () {
    expect(testManager.getOfficeNumber()).toBe("007");
});