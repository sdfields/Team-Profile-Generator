const Employee = require('./Employee.js')

class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
    return this.officeNumber = this.officeNumber;
    }

    getRole() {
    return "Manager";
    }
}