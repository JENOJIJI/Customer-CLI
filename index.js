const mongoose=require('mongoose');
const customer = require('./models/customer');

//Map global promise -get rid of warnings
mongoose.Promise=global.Promise;

//Connect to db
const  db=mongoose.connect('mongodb://localhost:27017/customercli',{
    useMongoClient:true
});

//Import model
const Customer=require('./models/customer');

//Add Customer
const addCustomer=(customer)=>{
    Customer.create(customer).then(customer=>{
        customer.info("New Customer Added");
        db.close();
    });
}



//Find customer
const findCustomer=(name)=>{
    //Make case insensitive
    const search =new RegExp(name,'i');
    Customer.find({$or:[{firstname:search},{lastname:search}]})
    .then(customer=>{
        console.info(customer);
        console.info('${customer.length} matches');
        db.close();
    });
}

//Export all methods
module.exports={
    addCustomer,
    findCustomer
}