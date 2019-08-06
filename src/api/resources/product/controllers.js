const actions = require("./actions");
const dal = require("./dal");

module.exports = {
  v1: {
    listAllProduct,
    getProduct,
    createProduct,
    deleteProduct,
    modifyProductByID,
    searchProduct
  }
};

function listAllProduct(req, res, next) {
  dal.v1
    .getAllProduct()
    .then(products => {
      res.status(200).json(products);
    })
    .catch(err => {
      res.status(500).json(err);
    });
}

function getProduct(req, res, next) {
  dal.v1
    .getByIdProduct(req.params)
    .then(product => {
      if (!!product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ message: "Product not found" });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
}

function createProduct(req, res, next) {
  dal.v1
    .insertProduct(req.body)
    .then(product => {
      res.status(201).json(product);
    })
    .catch(err => {
      res.status(500).json(err);
    });
}

function deleteProduct(req, res, next) {
  dal.v1
    .deleteProduct(req.params)
    .then(() => {
      res.sendStatus(204);
    })
    .catch(err => {
      res.status(500).json(err);
    });
}

function modifyProductByID(req, res, next) {
  dal.v1
    .updateProductByID(req.params, req.body)
    .then(changedProduct => {
      res.status(200).json(changedProduct);
    })
    .catch(err => {
      res.status(500).json(err);
    });
}

function searchProduct(req, res, next) {
  dal.v1
    .findLikeProduct(req.params)
    .then(products => {
      res.status(200).json(products);
    })
    .catch(err => {
      res.status(500).json(err);
    });
}
