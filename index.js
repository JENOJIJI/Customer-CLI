const mongoose = require('mongoose');
const customer = require('./models/customer');

//Map global promise -get rid of warnings
mongoose.Promise = global.Promise;

//Connect to db
const db = mongoose.connect('mongodb://localhost:27017/customercli', {
    // useMongoClient: true
});

//Import model
const Customer = require('./models/customer');

//Add Customer
const addCustomer = (customer) => {
    Customer.create(customer).then(customer => {
        console.info("New Customer Added");
        // db.close();
    });
}



//Find customer
const findCustomer = (name) => {
    //Make case insensitive
    const search = new RegExp(name, 'i');
    Customer.find({ $or: [{ firstname: search }, { lastname: search }] })
        .then(customer => {
            console.info(customer);
            console.info(`${customer.length} matches`);
            //db.close();
        });
}

// Update customer
const updateCustomer = (_id, customer) => {
    Customer.updateOne({ _id }, customer)
        .then(customer => {
            console.info('Customer Updated');
        });
}

// Remove customer
const removeCustomer = (_id) => {
    Customer.remove({ _id })
        .then(customer => {
            console.info('Customer Updated');
        });
}

//List customers
const listCustomers =()=>{
    Customer.find()
      .then(customers=>{
          console.info(customers);
          console.info(`${customers.length} matches`);
      });
}

//Export all methods
module.exports = {
    addCustomer,
    findCustomer,
    updateCustomer,
    removeCustomer,
    listCustomers

}