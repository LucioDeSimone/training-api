const Schema = require('mongoose').Schema;

module.exports = userCard = new Schema ({
    //out of range with number type also occupies less space with string type

    number: String, 
    expires: Date,
    code: Number,
    zip: Number,
})