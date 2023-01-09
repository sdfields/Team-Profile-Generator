const Employee = require('./Employee.js')

class Engineer extends Employee {
    constructor(gitHub) {
        this.gitHub = this.gitHub;
}

    getGitHub() {
        return this.gitHub;
    }

    getRole() {
        return "Engineer";
    }
}