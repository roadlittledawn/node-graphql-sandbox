const DateType = require('../../../src/graphql/types/date');
const { Kind } = require('graphql/language');

describe('graphql/types/date', () => {

  describe('#serialize()', () => {
    ['', null, undefined].forEach((value) => {
      it(`should return null when the value is '${value}'.`, async () => {
        expect(DateType.serialize(value)).to.be.null;
      });
    });
    it('should return the serialized Date value as a timestamp.', async () => {
      const value = new Date();
      expect(DateType.serialize(value)).to.equal(value.getTime());
    });
  });

  describe('#parseValue()', () => {
    ['', null].forEach((value) => {
      it(`should return null when the value is '${value}'.`, async () => {
        expect(DateType.parseValue(value)).to.be.null;
      });
    });
    it('should return the serialized Date value.', async () => {
      const value = DateType.parseValue(1519156394000);
      expect(value).to.be.instanceOf(Date);
      expect(value.getTime()).to.equal(1519156394000);
    });
    it('should return when stringified.', async () => {
      const value = DateType.parseValue('1519156394000');
      expect(value).to.be.instanceOf(Date);
      expect(value.getTime()).to.equal(1519156394000);
    });
  });

  describe('#parseLiteral()', () => {
    it('should return null when type is not an int.', async () => {
      expect(DateType.parseLiteral({ kind: null })).to.be.null;
    });
    it('should return the serialized literal, integer value.', async () => {
      expect(DateType.parseLiteral({ kind: Kind.INT, value: '1519156394000' })).to.equal(1519156394000);
      expect(DateType.parseLiteral({ kind: Kind.INT, value: 1519156394000 })).to.equal(1519156394000);
      expect(DateType.parseLiteral({ kind: Kind.INT, value: 1519156394000.1 })).to.equal(1519156394000);
    });
  });

});
