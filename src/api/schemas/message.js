const Schema = require("mongoose").Schema;

const ObjectID = Schema.Types.ObjectId;

module.exports = messageSchema = new Schema({
    sender: ObjectID,
    reciver: ObjectID,
    post: ObjectID,
    body: String,
    send: Date,
});
