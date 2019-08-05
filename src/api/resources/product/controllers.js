const actions = require("./dal");

module.exports = {
  v1: {
    //getProduct,
    createProduct,
    //deleteProduct,
    //modifyProduct
  }
};

function createProduct(req, res, next) {
  actions.v1
    .insertProduct(req.body)
    .then(product => {
      res.status(201).json(product);
    })
    .catch(err => {
      res.status(500).json(err);
    });
}
