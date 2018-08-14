const env = require('./env');
const pkg = require('../package.json');
const app = require('./app');
const mongoose = require('./connections/mongoose');

const { PORT } = env;

mongoose.then(() => {
  app.listen(PORT, () => {
    process.stdout.write(`Express app '${pkg.name} v${pkg.version}' listening on port ${PORT}\n`);
  });
});
