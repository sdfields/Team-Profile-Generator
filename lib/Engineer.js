const Employee = require('./Employee.js')

class Engineer extends Employee {
    constructor(gitHub) {
        this.gitHub = this.gitHub;
}

getGitHub() {
    console.log(`GitHub: ${this.gitHub}`);
}

// getRole overrides Employee to return Engineer


}