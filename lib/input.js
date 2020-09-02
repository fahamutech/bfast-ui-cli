const inquirer = require('inquirer');

module.exports = {
    askforinput: () => {
        const questions = [{
            name: 'modulename',
            type: 'input',
            message: 'Enter module name:',
            validate: function(value) {
                if (value.length) {
                    return true;
                } else {
                    return 'Enter module name.';
                }
            }
        }];
        return inquirer.prompt(questions);
    },
};