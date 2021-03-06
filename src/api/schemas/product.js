const Schema = require("mongoose").Schema;

const productSchema = new Schema({
  name: String,
  description: {
    use: String,
    brand: String,
    category: String
  },
  stock: Number,
  price: Number
});

module.exports = productSchema;
