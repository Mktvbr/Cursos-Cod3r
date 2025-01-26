require("dotenv").config();
const { MongoClient } = require("mongodb");

let singleton

async function connect() {

    if(singleton) return singleton
    
    const client = new MongoClient(process.env.MONGO_HOST)

    singleton = client.db(process.env.MONGO_DATABASE)
    return singleton

}

async function insertCustomer(customer) {
    const db = await connect()
    return db.collection("customers").insertOne(customer)
}

async function findCustomerEmail(params) {
    const db = await connect()
    return db.collection("customers").findOne({
        email: params.email
    })
}
async function findCustomer(params) {
    const db = await connect()
    return db.collection("customers").findOne({
        email: params.email,
        password: params.password
    })
}

module.exports = {
    insertCustomer,
    findCustomerEmail,
    findCustomer
}