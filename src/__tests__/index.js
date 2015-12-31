import {describe, it} from 'mocha';
import {expect} from 'chai';
import Core from '../';

/**
 * @see http://mochajs.org/
 * @see http://chaijs.com/api/bdd/
 */
describe('Core', function() {
    describe('base', function() {
        let input,
            coreInstance;

        before('set checker', function() {
            input = Date.now();
        });

        after(function() {
            input = undefined;
        });

        beforeEach(function() {
            coreInstance = new Core();
        });

        afterEach(function() {
            coreInstance = null;
        });

        it('should return input value', function() {
            expect(coreInstance.returnInput(input)).to.be.equal(input);
        });
    });
});
