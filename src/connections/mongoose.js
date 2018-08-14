const mongoose = require('mongoose');
const env = require('../env');

const { MONGO_DSN, MONGOOSE_DEBUG } = env;
mongoose.set('debug', MONGOOSE_DEBUG);

const connection = mongoose.createConnection(MONGO_DSN, {
  // autoIndex: env.NODE_ENV !== 'production',
  ignoreUndefined: true,
  useNewUrlParser: true,
});
connection.once('open', () => process.stdout.write(`Successful MongoDB connection to '${MONGO_DSN}'\n`));

module.exports = connection;
