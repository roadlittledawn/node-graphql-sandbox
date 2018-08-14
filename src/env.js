const { isURL } = require('validator');
const {
  cleanEnv,
  port,
  bool,
  makeValidator,
} = require('envalid');

const mongodsn = makeValidator((v) => {
  const opts = { protocols: ['mongodb'], require_tld: false, require_protocol: true };
  if (isURL(v, opts)) return v;
  throw new Error('Expected a Mongo DSN string startng with mongodb://');
});

module.exports = cleanEnv(process.env, {
  PORT: port({ desc: 'The port that Express will listen on.', default: 5675 }),
  MONGO_DSN: mongodsn({ desc: 'The MongoDB DSN to connect to.' }),
  MONGOOSE_DEBUG: bool({ desc: 'Whether to enable Mongoose query debugging.', default: false }),
});
