const express = require("express");
const productControllers = require("./controllers");
const productValidations = require("./validations");
const router = express.Router();

router.get("/list", productControllers.v1.listAllProduct);
router.post("/create", productControllers.v1.createProduct);
router.delete("/delete/:id", productControllers.v1.deleteProduct);
router.put("/modify/:id", productControllers.v1.modifyProductByID);
router.get("/find/:criteria", productControllers.v1.searchProduct);
router.get("/:id", productControllers.v1.getProduct);

module.exports = router;
