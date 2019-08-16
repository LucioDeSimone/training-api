const actions = require("./actions");
const dal = require("./dal");

module.exports = {
  v1: {
    listAllUser,
    getUser,
    createUser,
    deleteUser,
    modifyUserByID,
  }
};

function listAllUser(req, res, next) {
  dal.v1
    .getAllUser()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json(err);
    });
}

function getUser(req, res, next) {
  dal.v1
    .getByIdUser(req.params)
    .then(user => {
      if (!!user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
}

function createUser(req, res, next) {
  dal.v1
    .insertUser(req.body)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      res.status(500).json(err);
    });
}

function deleteUser(req, res, next) {
  dal.v1
    .deleteUser(req.params)
    .then(() => {
      res.sendStatus(204);
    })
    .catch(err => {
      res.status(500).json(err);
    });
}

function modifyUserByID(req, res, next) {
  dal.v1
    .updateUserByID(req.params, req.body)
    .then(changedUser => {
      res.status(200).json(changedUser);
    })
    .catch(err => {
      res.status(500).json(err);
    });
}
