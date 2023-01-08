const Employee = require('./Employee.js')

class Intern extends Employee {
    constructor(school) {
        this.school = school;
    }

    getSchool () {
        console.log(`School: ${this.school}`);
    }

    // getRole overrides Employee with Intern
}