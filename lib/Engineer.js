const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, github) {
    super(name, id, email);
    this.github = github;
    this.role = this.getRole();
    }

    getGithub() {
        return `github.com/${response.github}`
    }

    getRole() {
        return "Engineer";
    }

};

module.exports = Engineer;