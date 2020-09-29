// Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const employee = require('./Employee')

class Engineer extends Employee {
    constructor(GitHub){
        this.GitHub = GitHub;

        super(id, name, email, "Engineer");
    }
    getGitHub();

    getRole(){
        return Engineer;
    }
    ;
}

module.exports = Engineer;