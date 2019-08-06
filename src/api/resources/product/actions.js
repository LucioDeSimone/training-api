const _ = require("lodash");

module.exports = {
  v1: {
    setObjectValues
  }
};

function setObjectValues(criteria) {
  return _.mapValues(filter, () => {
    `%${criteria}%`;
  });
}
