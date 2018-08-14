const app = require('../../src/app');
const sandbox = sinon.createSandbox();

describe('routes/index', () => {
  describe('GET /', () => {
    it('should respond.', async () => {
      await request(app)
        .get('/')
        .expect(200)
        .expect('Content-Type', /json/)
      ;
    });
  });
});
