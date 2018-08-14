const index = require('../src/index');

describe('index', function() {
  it('should load.', async function() {
  });
  after(function() {
    // Close the server.
    index.close();
  });
});
