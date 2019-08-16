const Schema = require("mongoose").Schema;

module.exports = discountSchema = new Schema({
  flat: Number,
  percentage: Number,
  ends: Date
});
