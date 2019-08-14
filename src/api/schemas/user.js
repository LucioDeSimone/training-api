const Schema = require("mongoose").Schema;

const ObjectId = Schema.Types.ObjectId;

const userSchema = new Schema({
  username: { String, required: true },
  fullName: {
    firstName: String,
    midName: String,
    lastName: String
  },
  personalData: {
    email: String,
    nin: String, //national identification number
    phone: string
  },
  posts: {
    sell_id: [ObjectId],
    buy_id: [ObjectId] //remember to create an invoice
  },
  wallet: {
    amount: Number,
    owes: Number,
    overdraft: Number
  },
  operations: [ObjectId],
  entries: {
    questions: [ObjectId],
    answers: [ObjectId]
  },
  cart: [ObjectId],
  cards: [ObjectId]
});

module.exports = userSchema;
