const Schema = require("mongoose").Schema;

const ObjectId = Schema.Types.ObjectId;

module.exports = userSchema = new Schema({
  username: String,
  personalData: ObjectId,
  operations: [ObjectId],
  cards: [ObjectId],
  entries: ObjectId,
  posts: {
    sell_id: [ObjectId],
    buy_id: [ObjectId]
  },
  wallet: {
    amount: Number,
    owes: Number,
    overdraft: Number
  },

});
