// Importing Intern from Library

const Intern = require("../lib/Intern");
const testIntern = new Intern("Joe", "123", "Joe@gmail.com", "University of School");

// Testing Intern Object

test("Testing if the correct values are received for Intern class object.", function() {
    expect(testIntern.name).toBe("Joe");
    expect(testIntern.id).toBe("123");
    expect(testIntern.email).toBe("Joe@gmail.com");
    expect(testIntern.school).toBe("University of School");
});

// Testing Intern Functions

test("testing that getName returns the name of the user.", function () {
    expect(testIntern.getName()).toBe("Joe");
});

test("testing that getId returns the ID of the user.", function () {
    expect(testIntern.getId()).toBe("123");
});

test("testing that getEmail returns the email of the user.", function () {
    expect(testIntern.getEmail()).toBe("Joe@gmail.com");
});

test("testing that getRole returns the role of the user.", function () {
    expect(testIntern.getRole()).toBe("Intern");
});

test("testing that getSchool returns the school of the user.", function () {
    expect(testIntern.getSchool()).toBe("University of School");
});