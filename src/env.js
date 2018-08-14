const {
  cleanEnv,
  port,
} = require('envalid');

module.exports = cleanEnv(process.env, {
  PORT: port({ desc: 'The port that Express will listen on.', default: 5675 }),
});
