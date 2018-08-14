const { graphql } = require('graphql');
const schema = require('../../src/graphql/schema');

module.exports = {
  async graphql(options = {}, resultKey) {
    return graphql({ ...options, schema }).then(res => (resultKey ? res.data[resultKey] : res.data));
  },
};
