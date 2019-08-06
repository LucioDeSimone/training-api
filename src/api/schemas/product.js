const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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

productSchema.index({
  name: "text",
});
module.exports = productSchema;
