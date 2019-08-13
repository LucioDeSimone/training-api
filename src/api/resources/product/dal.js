const mongodb = require("mongodb");
const productModel = require("../../models/product");
const actions = require("./actions");

module.exports = {
  v1: {
    getAllProduct,
    getByIdProduct,
    findLikeProduct,
    insertProduct,
    updateProductByID,
    deleteProduct
  }
};

function getAllProduct() {
  return productModel.find({});
}

function getByIdProduct({ id }) {
  return productModel.findById(mongodb.ObjectId(id)).select({ _id: 0 });
}

function findLikeProduct({criteria}) {
  return productModel.find({ criteria }).select({ _id: 0 });
}

function insertProduct(product) {
  return productModel.create(product);
}

function updateProductByID({ id }, toUpdateProduct) {
  return productModel.findOneAndUpdate(mongodb.ObjectID(id), toUpdateProduct);
}

function deleteProduct({ id }) {
  return productModel.deleteOne(mongodb.ObjectID(id));
}
