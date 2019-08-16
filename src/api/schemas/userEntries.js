const Schema = require("mongoose").Schema;

const ObjectId = Schema.Types.ObjectId;

module.exports = entriesSchema = new Schema({
  questions: [ObjectId],
  answers: [ObjectId]
});
