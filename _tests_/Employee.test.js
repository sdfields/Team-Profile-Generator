// Importing Employee from Library

const Employee = require("../lib/Employee");
const testEmployee = new Employee("Joe", "123", "Joe@gmail.com");

// Testing Employee Object



// Testing Employee Functions

test("testing that getName returns the name of the user.", function () {
    expect(testEmployee.getName()).toBe("Joe");
});

test("testing that getId returns the ID of the user.", function () {
    expect(testEmployee.getId()).toBe("123");
});

test("testing that getEmail returns the email of the user.", function () {
    expect(testEmployee.getEmail()).toBe("Joe@gmail.com");
});

test("testing that getRole returns the role of the user.", function () {
    expect(testEmployee.getRole()).toBe("Employee");
});