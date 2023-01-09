// Importing Employee from Library

const Employee = require("../lib/Employee");
const testEmployee = new Employee("Joe", "123", "Joe@gmail.com");

// Testing Employee Class Object

test("Testing if the correct values are received for Employee class object.", function() {
    expect(testEmployee.name).toBe("Joe");
    expect(testEmployee.id).toBe("123");
    expect(testEmployee.email).toBe("Joe@gmail.com");
});

// Testing Employee Functions

test("Testing that getName returns the name of the user.", function () {
    expect(testEmployee.getName()).toBe("Joe");
});

test("Testing that getId returns the ID of the user.", function () {
    expect(testEmployee.getId()).toBe("123");
});

test("Testing that getEmail returns the email of the user.", function () {
    expect(testEmployee.getEmail()).toBe("Joe@gmail.com");
});

test("Testing that getRole returns the role of the user.", function () {
    expect(testEmployee.getRole()).toBe("Employee");
});