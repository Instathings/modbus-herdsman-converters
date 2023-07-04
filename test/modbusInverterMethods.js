const assert = require('assert');

const {
  base2,
  ca2Convertion,
  decimalDivider,
  decimalSignDivider,
} = require('../devices/modbusInverterMethods');

/**
 *
 * @param {number} dec integer
 * @returns binary value of dec considering sign
 */
function dec2bin(dec) {
  // eslint-disable-next-line no-bitwise
  return (dec >>> 0).toString(2);
}

describe('base2', () => {
  it('returns a number to base 2 with default pad', () => {
    const result = base2(4);
    assert.strictEqual(result, '0000000000000100');
  });

  it('returns a number to base 2 with no pad', () => {
    const result = base2(4, 0);
    assert.strictEqual(result, '100');
  });
});

describe('Complement 2 convertion', () => {
  it('returns a number', () => {
    const expectedResult = 4;
    const input = dec2bin(expectedResult);
    const result = ca2Convertion(input);
    assert.strictEqual(result, expectedResult);
  });

  it('returns a negative number', () => {
    const expectedResult = -4;
    const input = dec2bin(expectedResult);
    const result = ca2Convertion(input);
    assert.strictEqual(result, expectedResult);
  });
});

describe('decimalDivider', () => {
  it('divides by 10 - easy case', () => {
    const input = 40;
    const expectedResult = 4;
    const result = decimalDivider(input);
    assert.strictEqual(result, expectedResult);
  });

  it('divides by 10 - negative number', () => {
    const input = -40;
    const expectedResult = -4;
    const result = decimalDivider(input);
    assert.strictEqual(result, expectedResult);
  });
});

describe('decimalSignDivider', () => {
  it('divides by 10 - negative number', () => {
    const input = dec2bin(-40);
    const expectedResult = -4;
    const result = decimalSignDivider(input);
    assert.strictEqual(result, expectedResult);
  });
});
