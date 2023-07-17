exports.base2 = function (number, leftPad = 16) {
  return number.toString(2).padStart(leftPad, '0');
};

/**
 * takes an arbitrary number expressed in decimal and converts it
 * considering the Ca2 inversion bit of the base2 representation
 */
exports.ca2Convertion = function (number) {
  const bits = exports.base2(number);
  const negative = bits[0] === '1';
  if (!negative) {
    return parseInt(bits, 2);
  }
  const inverse = bits.split('').map((bit) => (bit === '0' ? '1' : '0')).join('');
  return (parseInt(inverse, 2) + 1) * -1;
};

exports.divider = function divider(by, hasSign = false) {
  return function dividerInternal(value) {
    const leftSide = hasSign ? exports.ca2Convertion(value) : value;
    return leftSide / by;
  };
};

exports.readInt16BE = function readInt16BE(interpreted, buffer) {
  return buffer.readInt16BE(0);
};

exports.readUInt16BE = function readUInt16BE(interpreted, buffer) {
  return buffer.readUInt16BE(0);
};

exports.readUInt32BE = function readUInt32BE(interpreted, buffer) {
  return buffer.readUInt32BE(0);
};

exports.decimalDivider = exports.divider(10);
exports.centesimalDivider = exports.divider(100);
exports.millesimalDivider = exports.divider(1000);

exports.decimalSignDivider = exports.divider(10, true);
exports.centesimalSignDivider = exports.divider(100, true);
exports.millesimalSignDivider = exports.divider(1000, true);
