const Employee = require("./Employee.js")
class Engineer extends Employee {
    constructor(id, name, email, github) {
        super(id, name, email);
        this.github = github;
    }
    getGithub() {
        return this.github
    }
    getRole() {
        return "Engineer"
    }
    card() {
        return super.basicCard(`<span>Github:<a href="https://github.com/${this.github}">${this.github}</a></span>`)
    }
}
module.exports = Engineer;