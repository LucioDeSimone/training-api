const express = require("express");
const productControllers = require("./controllers");
const router = express.Router();

//router.get("/:id", productControllers.getProduct);
router.post("/create", productControllers.v1.createProduct);
//router.delete("/delete/:id", productControllers.v1.deleteProduct);
//router.put("/modify/:id", productControllers.v1.modifyProduct);

module.exports = router;
