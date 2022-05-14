const program=require('commander');
const {
    addCustomer,
    fingCustomer
}=require('./index');

program
   .version('1.0.0')
   .description("Client management system")

program.parse(process.argv);
