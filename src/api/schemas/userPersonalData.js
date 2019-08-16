const Schema = require("mongoose").Schema;

module.exports = userPersonalDataSchema = new Schema({
  fullName: {
    firstName: String,
    midName: String,
    lastName: String
  },
  email: String,
  nin: String, //national identification number
  phone: string
});
