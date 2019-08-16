const db = require("mongoose");
const userSchema = require("../schemas/user");

const userModel = db.model("User", userSchema);

module.exports = userModel;

