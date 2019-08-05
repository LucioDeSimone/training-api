const productModel = require("../../models/product");

module.exports = {
  v1: {
    getAllProduct,
    getByIdProduct,
    findProduct,
    insertProduct,
    updateProduct,
    removeProduct
  }
};

function getAllProduct() {
  return productModel.find({});
}

function getByIdProduct(id) {}

function findProduct() {}

function insertProduct(product) {
  return productModel.create(product)
}

function updateProduct() {}

function removeProduct() {}
