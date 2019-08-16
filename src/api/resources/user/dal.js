const mongodb = require("mongodb");
const userModel = require("../../models/user");
const actions = require("./actions");

module.exports = {
  v1: {
    getAllUser,
    getByIdUser,
    insertUser,
    updateUserByID,
    deleteUser
  }
};

function getAllUser() {
  return userModel.find({});
}

function getByIdUser({ id }) {
  return userModel.findById(mongodb.ObjectId(id)).select({ _id: 0 });
}

function insertUser(User) {
  return userModel.create(User);
}

function updateUserByID({ id }, toUpdateUser) {
  return userModel.findOneAndUpdate(mongodb.ObjectID(id), toUpdateUser);
}

function deleteUser({ id }) {
  return userModel.deleteOne(mongodb.ObjectID(id));
}
