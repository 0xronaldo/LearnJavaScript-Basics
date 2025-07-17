const assert = require('assert');
const {a,b} = require('../intro-js');

it('a should be boolean', () => {
    assert.equal(typeof a, 'boolean');
});

it('b should be boolean', () => {
    assert.equal(typeof b, 'boolean');
});

it('a should not equal b', () => {
    assert.notEqual(a,b);
});