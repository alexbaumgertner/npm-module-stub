import Core from '../../src/';

/**
 * @see http://mochajs.org/
 * @see http://chaijs.com/api/bdd/
 */
describe('Core [browser only]', function() {
  describe('base', function() {
    let input,
      coreInstance;

    beforeEach(function() {
      input = Date.now();
      coreInstance = new Core();
    });

    afterEach(function() {
      coreInstance = null;
      input = null;
    });

    it('should return input value', function() {
      expect(coreInstance.returnInput(input)).to.be.equal(input);
    });
  });
});
