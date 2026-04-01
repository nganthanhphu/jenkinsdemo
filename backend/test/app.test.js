'use strict';

const test = require('node:test');
const assert = require('node:assert');
const { add } = require('../src/index');

test('add sum numbers', () => {
  //Arrange
  const a = 1;
  const b = 2;

  //Act
  const result = add(a, b);

  //Assert
  assert.strictEqual(result, 3);
});