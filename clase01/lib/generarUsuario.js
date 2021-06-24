const faker = require('faker')
const uuid = require('uuid').v4

function inventarObjeto() {
    let obj = {	
        id : uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        city: faker.address.city(),
        streetName: faker.address.streetName(),
        country: faker.address.country(),
        accountName: faker.finance.accountName(),
        account: faker.finance.account(),
        amount: faker.finance.amount()
    }
    return obj
}

module.exports = inventarObjeto