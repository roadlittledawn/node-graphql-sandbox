const helmet = require('helmet');
const { Router } = require('express');
const { ApolloServer } = require('apollo-server-express');
const schema = require('../graphql/schema');

const router = Router();
router.use(helmet.noCache());

const server = new ApolloServer({ schema, playground: false });
server.applyMiddleware({ app: router, path: '/' });

module.exports = router;
