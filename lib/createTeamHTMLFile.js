const fs = require('fs');

function createTeamHTMLFile(team) {
  const TEMPLATE_PATH = './src/index.html';
  const OUTPUT_PATH = './dist/index.html';
  const TEAM_NAME_PLACEHOLDER = /TEAM_NAME_PLACEHOLDER/g;
  const EMPLOYEE_CARDS_PLACEHOLDER = '<!-- Cards go here -->';
  
  fs.readFile(TEMPLATE_PATH, (err, data)=> {
    if (err) {
      console.log("There was an error preparing the HTML file. Sorry!");
      console.error(err);
      return;
    }

    let output = data.toString().replace(TEAM_NAME_PLACEHOLDER, team.name);

    const employeeCardsHTML = team.employees.map(employee => generateCardHTML(employee)).join('\n');
    output = output.replace(EMPLOYEE_CARDS_PLACEHOLDER, employeeCardsHTML);
    fs.writeFile(OUTPUT_PATH, output, (err) => {
      if (err) {
        console.log('There was an error creating your HTML file.');
        console.error(err);
        return;
      }
      console.log(`Your file was successfully created at '${OUTPUT_PATH}'.`);
    });
  });
}

function generateCardHTML(employee) {
  return `<div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card">
              <header class="card-header bg-info">
                <h4 class="fw-bold">${employee.getName()}</h4>
                <h5 class="fw-bold">${generateEmployeeSubtitleText(employee)}</h5>
              </header>
              <ul class="list-group list-group-flush">
                ${generateEmployeeInfoList(employee)}
              </ul>
            </div>
          </div>`;
}

function generateEmployeeSubtitleText(employee) {
  const role = employee.getRole();
  switch (role) {
    case 'Manager':
      return '💼 Manager';
    case 'Engineer':
      return '⚙ Engineer';
    case 'Intern':
      return '📚 Intern';
    default:
      return '👔 Employee';
  }
}

function generateEmployeeInfoList(employee) {
  // begin constructing output with common, mandatory ID field
  let output = `<li class="list-group-item">Employee ID: ${employee.getId()}</li>`;

  // check for email
  const email = employee.getEmail();
  if (email) {
    output += `<li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>`;
  }

  switch (employee.getRole()) {
    case 'Manager':
      const officeNumber = employee.getOfficeNumber();
      if (officeNumber) output += `<li class="list-group-item">Office Number: ${officeNumber}</li>`;
      break;
    case 'Engineer':
      const github = employee.getGithub();
      if (github) output += `<li class="list-group-item">GitHub: <a href="https://github.com/${github}" target="_blank">${github}</a></li>`;
      break;
    case 'Intern':
      const school = employee.getSchool();
      if (school) output += `<li class="list-group-item">School: ${school}</li>`
      break;
    default:
      // do nothing
      break;
  }
  return output;
}

module.exports = {
  createTeamHTMLFile,
  generateCardHTML,
  generateEmployeeSubtitleText,
  generateEmployeeInfoList
};