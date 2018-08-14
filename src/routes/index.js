const graphql = require('./graphql');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.json({ hello: 'world' });
  });
  app.use('/graphql', graphql);
};
