const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'faveReptile',
      message: 'What is your favorite reptile?',
    },
  ])
  .then(answers => {
    console.info('Answer:', answers.faveReptile);
  });

const thing = 1;

console.log(thing);