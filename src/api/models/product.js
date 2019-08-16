const db = require("mongoose");
const productSchema = require("../schemas/product");

const productModel = db.model("Product", productSchema);

module.exports = productModel;
