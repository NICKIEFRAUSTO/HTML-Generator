const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the employee name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the employee id?',
      
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    }
    {
      type: 'input',
      name: 'role',
      message: 'What is the employee role?',
    }
    
    
  ])
  .then((data) => {
    const filename = `${data.name.}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
