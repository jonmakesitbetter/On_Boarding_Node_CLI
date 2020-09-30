const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamArray = [];
const questionsArray = {
  manager: [
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is your id number?",
      name: "id",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is your office number?",
      name: "officeNumber",
    },
  ],
  engineer: [
    {
      type: "input",
      message: "What is the engineer's name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is the engineer's id number?",
      name: "id",
    },
    {
      type: "input",
      message: "What is the engineer's email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the engineer's GitHub user name?",
      name: "github",
    },
  ],
  intern: [
    {
      type: "input",
      message: "What is the intern's name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is the intern's id number?",
      name: "id",
    },
    {
      type: "input",
      message: "What is the intern's email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What school is the intern from?",
      name: "school",
    },
  ],
  addTeamMember: [
    {
      type: "list",
      message: "Would you like to add an engineer or intern?",
      name: "teamMember",
      choices: ["Engineer", "Intern", "No"],
    },
  ],
};

const createManager = async () => {
  const { name, id, email, officeNumber } = await inquirer.prompt(
    questionsArray.manager
  );
  const manager = new Manager(name, id, email, officeNumber);
  teamArray.push(manager);
  addTeamMember();
};

const addTeamMember = async () => {
  const { teamMember } = await inquirer.prompt(questionsArray.addTeamMember);
  switch (teamMember) {
    case "Engineer":
      addEngineer();
      break;
    case "Intern":
      addIntern();
      break;
    default:
      buildTeam();
  }
};

const addEngineer = async () => {
    const { name, id, email, github } = await inquirer.prompt(questionsArray.engineer);
    const engineer = new Engineer(name, id, email, github);
    teamArray.push(engineer);
    addTeamMember();
};

const addIntern = async () => {
    const { name, id, email, school } = await inquirer.prompt(questionsArray.intern);
    const intern = new Intern(name, id, email, school);
    teamArray.push(Intern);
    addTeamMember();
};

const buildTeam = () => {
  const html = render(teamArray);
};

createManager();

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
