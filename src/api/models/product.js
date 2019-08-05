const mongoose = require("mongoose");
const productSchema = require("../schemas/product");

const productModel = mongoose.model("Product", productSchema)

module.exports = productModel;
