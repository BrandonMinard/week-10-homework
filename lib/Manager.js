const Employee = require("./Employee.js")
class Manager extends Employee {
    constructor(id, name, email, officeNum) {
        super(id, name, email);
        this.officeNum = officeNum
    }
    getOfficeNum() {
        return this.email
    }
    getRole() {
        return "Manager"
    }
    card() {
        return super.basicCard(`Office number: ${this.officeNum}`)
    }
}
module.exports = Manager;