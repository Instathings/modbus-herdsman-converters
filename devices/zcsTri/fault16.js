const { readUInt16BE } = require('../modbusInverterMethods');

module.exports = function fault16(interpreted, buffer) {
  const intVal = readUInt16BE(interpreted, buffer);
  let result = intVal;
  switch (intVal) {
    // bit 0
    case 1: {
      result = 'CombinerOverVoltageGroup1';
      break;
    }
    // bit 1
    case 2: {
      result = 'CombinerOverVoltageGroup2';
      break;
    }
    // bit 2
    case 4: {
      result = 'CombinerOverVoltageGroup3';
      break;
    }
    // bit 3
    case 8: {
      result = 'CombinerOverVoltageGroup4';
      break;
    }
    // bit 4
    case 16: {
      result = 'CombinerOverVoltageGroup5';
      break;
    }
    // bit 5
    case 32: {
      result = 'CombinerOverVoltageGroup6';
      break;
    }
    // bit 6
    case 64: {
      result = 'CombinerOverVoltageGroup7';
      break;
    }
    // bit 7
    case 128: {
      result = 'CombinerOverVoltageGroup8';
      break;
    }
    // bit 8
    case 256: {
      result = 'CombinerOverVoltageGroup9';
      break;
    }
    // bit 9
    case 512: {
      result = 'CombinerOverVoltageGroup10';
      break;
    }
    // bit 10
    case 1024: {
      result = 'CombinerOverVoltageGroup11';
      break;
    }
    // bit 11
    case 2048: {
      result = 'CombinerOverVoltageGroup12';
      break;
    }
    // bit 12
    case 4096: {
      result = 'CombinerOverVoltageGroup13';
      break;
    }
    // bit 13
    case 8192: {
      result = 'CombinerOverVoltageGroup14';
      break;
    }
    // bit 14
    case 16384: {
      result = 'CombinerOverVoltageGroup15';
      break;
    }
    // bit 15
    case 32768: {
      result = 'CombinerOverVoltageGroup16';
      break;
    }
    default: {
      break;
    }
  }
  return result;
};
