const { graphql } = require('../utils');

describe('graphql/resolvers/index', () => {

  describe('#Query', () => {

    describe('#ping()', () => {
      it('should pong', async () => {
        const source = `
          query Ping {
            ping
          }
        `;
        await expect(graphql({ source }, 'ping')).to.eventually.equal('pong');
      });
    });

  });

});
