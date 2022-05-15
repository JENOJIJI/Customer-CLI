const program = require('commander');
const { prompt } = require('inquirer');
const {
    addCustomer,
    findCustomer,
    updateCustomer,
    removeCustomer,
    listCustomers
} = require('./index');

//customer questions
const questions = [
    {
        type: 'input',
        name: 'firstname',
        message: 'Customer First name'
    },
    {
        type: 'input',
        name: 'lastname',
        message: 'Customer Last name'
    },
    {
        type: 'input',
        name: 'phone',
        message: 'Customer Phone Number'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Customer Email Address'
    }

];

program
    .version('1.0.0')
    .description("Client management system")

// program
//     .command('add <firstname> <lastname> <phone> <email>')
//     .alias('a')
//     .description('Add a customer')
//     .action((firstname, lastname, phone, email) => {
//         addCustomer({ firstname, lastname, phone, email });
//     });

//Add Command
program
    .command('add')
    .alias('a')
    .description('Add a customer')
    .action(() => {
        prompt(questions).then(answers => addCustomer(answers));
    });

//Find Command
program
    .command('find <name>')
    .alias('f')
    .description('Find a customer')
    .action(name => findCustomer(name));

//Update Command
program
    .command('update <_id>')
    .alias('u')
    .description('Update a customer')
    .action((_id) => {
        prompt(questions).then(answers => updateCustomer(_id, answers));
    });

//Remove Command
program
    .command('remove <-id>')
    .alias('r')
    .description('Remove a customer')
    .action(_id => removeCustomer(_id));


program.parse(process.argv);
