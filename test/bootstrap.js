global.chai = require('chai');
global.request = require('supertest');
global.sinon = require('sinon');
global.expect = chai.expect;

const { mongoose } = require('../src/connections');

chai.use(require('chai-as-promised'));

const waitForMongoose = () => new Promise((resolve, reject) => {
  mongoose.on('connected', resolve);
  mongoose.on('error', reject);
});

const waitForServices = () => Promise.all([
  waitForMongoose(),
]);

waitForServices().then(run).catch((err) => {
  setImmediate(() => { throw err });
});

const closeMongoose = () => new Promise((resolve, reject) => {
  mongoose.close(true, (err) => (err ? reject(err) : resolve()));
});

const closeServices = () => Promise.all([
  closeMongoose(),
]);

after(() => closeServices());
