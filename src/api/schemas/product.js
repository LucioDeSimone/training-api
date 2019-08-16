const Schema = require("mongoose").Schema;

const ObjectID = Schema.Types.ObjectId;

module.exports = productSchema = new Schema({
  name: String,
  user_id: ObjectID,
  description: {
    use: String,
    brand: String,
    category: String
  },
  discount: ObjectID,
  stock: Number,
  price: Number
});
