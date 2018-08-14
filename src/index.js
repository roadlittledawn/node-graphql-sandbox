const pkg = require('../package.json');
const app = require('./app');

const { PORT } = process.env;

const server = app.listen(PORT, () => {
  process.stdout.write(`Express app '${pkg.name} v${pkg.version}' listening on port ${PORT}\n`);
});

module.exports = server;
