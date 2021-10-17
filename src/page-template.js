const createHtml =
function generatePage(employeeArr) {

  function generateEngineer(engineer) {
      return `
      
      <div class="card">
      <div class="container">
          <div class="heading">
              <h2>${engineer.getName()}</h2>
              <h3>${engineer.getRole()}</h3>
          </div>
          <div class="details">
              <h4>ID: ${engineer.getId()}</h4>
              <h4>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></h4>
              <h4>GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.github}</a></h4>
          </div>
      </div>
  </div>`
  };

  function generateManager(manager) {
    return `

    <div class="card">
          <div class="container">
              <div class="heading">
                  <h2>${manager.getName()}</h2>
                  <h3>${manager.getRole()}</h3>
              </div>
              <div class="details">
                  <h4>ID: ${manager.getId()}</h4>
                  <h4>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></h4>
                  <h4>Office Number: ${manager.officeNumber}</h4>
              </div>
          </div>
      </div>`
    };

    function generateIntern(intern) {
        return `

        <div class="card">
              <div class="container">
                  <div class="heading">
                      <h2>${intern.getName()}</h2>
                      <h3>${intern.getRole()}</h3>
                  </div>
                  <div class="details">
                      <h4>ID: ${intern.getId()}</h4>
                      <h4>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></h4>
                      <h4>School: ${intern.getSchool()}</h4>
                  </div>
              </div>
          </div>`
        };

    const html = [];
    html.push(employeeArr.filter(employee => employee.getRole() == "Manager").map(manager => generateManager(manager)));
    html.push(employeeArr.filter(employee => employee.getRole() == "Engineer").map(engineer => generateEngineer(engineer)));
    html.push(employeeArr.filter(employee => employee.getRole() == "Intern").map(intern => generateIntern(intern)));
    return html.join("");
}
  



module.exports = team => { return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./src/style.css">
    <title>My Team</title>
</head>
<body>
    <div class="page-title">
        <h1>My Team</h1></div>
    <div class="flex-container">
        ${createHtml(team)}
    </div>
</body>
</html>
`}
