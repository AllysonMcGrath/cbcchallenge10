const createHtml =
function generatePage(employeeArr) {

  function generateEngineer(engineer) {
      return `<div class="card">
      <div class="container">
          <div class="heading">
              <h2>${engineer.name}</h2>
              <h3>${engineer.role}</h3>
          </div>
          <div class="details">
              <h4>ID: ${engineer.id}</h4>
              <h4>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></h4>
              <h4>GitHub: <a href="github.com/${engineer.github}">${engineer.github}</a></h4>
          </div>
      </div>
  </div>`
  };

  function generateManager(manager) {
    return `
    <div class="card">
          <div class="container">
              <div class="heading">
                  <h2>${manager.name}</h2>
                  <h3>${manager.role}</h3>
              </div>
              <div class="details">
                  <h4>ID: ${manager.id}</h4>
                  <h4>Email: <a href="mailto:${manager.email}">${manager.email}</a></h4>
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
                      <h2>${intern.name}</h2>
                      <h3>${intern.role}</h3>
                  </div>
                  <div class="details">
                      <h4>ID: ${intern.id}</h4>
                      <h4>Email: <a href="mailto:${intern.email}">${intern.email}</a></h4>
                      <h4>School: ${intern.school}</h4>
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
    <link rel="stylesheet" href="style.css">
    <title>My Team</title>
</head>
<body>
    <h1>My Team</h1>${createHtml(team)}
</body>
</html>
`}
