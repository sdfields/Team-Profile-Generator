const Employee = require('./Employee.js')

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = this.gitHub;
        
}

    getGitHub() {
        return this.gitHub;
    }

    getRole() {
        return "Engineer";
    }
}