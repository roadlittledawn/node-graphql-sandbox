const index = require('../src/index');

describe('index', () => {
  it('should load.', async () => {
  });
  after(() => {
    // Close the server.
    index.close();
  });
});
