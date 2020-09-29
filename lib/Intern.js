// TODO Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const employee = require('./Employee');

class Intern extends Employee{
    constructor(school){
        this.school = school;

    super(id, name, email);
    }
    getSchool();

    getRole(){
        return "Intern";
    }
}

module.exports = Intern;