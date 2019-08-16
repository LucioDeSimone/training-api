const express = require("express");
const UserControllers = require("./controllers");
const UserValidations = require("./validations");
module.exports = router = express.Router();

router.get("/list", UserControllers.v1.listAllUser);
router.post("/create", UserControllers.v1.createUser);
router.delete("/delete/:id", UserControllers.v1.deleteUser);
router.put("/modify/:id", UserControllers.v1.modifyUserByID);
router.get("/:id", UserControllers.v1.getUser);
