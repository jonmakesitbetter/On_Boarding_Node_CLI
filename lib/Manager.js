// TODO Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const employee = require('./Employee');

class manager extends Employee {
    constructor(officeNumber){
        this.officeNumber = officeNumber;
        super(id, name, email, "Manager");
    }
    getRole(){
        return "Manager";
    }
}

module.exports = Manager;