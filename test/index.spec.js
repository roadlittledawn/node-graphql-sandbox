const app = require('../src/app');
const { PORT } = require('../src/env');
const sandbox = sinon.createSandbox();

describe('index', () => {
  let index;
  before(() => {
    sandbox.spy(app, 'listen');
    index = require('../src/index');
  });
  after(() => {
    // Close the server.
    index.close();
  });

  it('should listen using the PORT value.', async () => {
    sandbox.assert.calledOnce(app.listen);
    sandbox.assert.calledWith(app.listen, PORT);
  });
});
