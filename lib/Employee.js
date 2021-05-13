class Employee {
    constructor(id, name, email) {
        this.employeeId = id;
        this.name = name;
        this.email = email;
    }
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return "Employee"
    }
    basicCard(special) {
        return `<div class="col mb-4">
        <div class="shadow">
            <div class="card-body bg-primary">
                <h5>${this.name}</h4>
            </div>
            <div class="card-body bg-light">
                <div class="card info">
                    ID: ${this.employeeId}
                </div>
                <div class="card info">
                    email: ${this.email}
                </div>
                <div class="card info">
                    ${special}
                </div>
            </div>
        </div>
    </div>`
    }
}
module.exports = Employee;