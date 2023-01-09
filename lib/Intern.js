const Employee = require('./Employee.js')

class Intern extends Employee {
    constructor(school) {
        this.school = school;
    }

    getSchool () {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}