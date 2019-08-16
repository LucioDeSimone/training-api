const Schema = require('mongoose').Schema;

const ObjectID = Schema.Types.ObjectId;

module.exports = postSchema = new Schema({
    user: ObjectID,
    product: ObjectID,
    location: ObjectID,
    entries: [ObjectId]
})
