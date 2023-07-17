const { readUInt16BE } = require('../modbusInverterMethods');

module.exports = function fault17(interpreted, buffer) {
  const intVal = readUInt16BE(interpreted, buffer);
  let result = intVal;
  switch (intVal) {
    // bit 0
    case 1: {
      result = 'CombinerUnderVoltageGroup1';
      break;
    }
    // bit 1
    case 2: {
      result = 'CombinerUnderVoltageGroup2';
      break;
    }
    // bit 2
    case 4: {
      result = 'CombinerUnderVoltageGroup3';
      break;
    }
    // bit 3
    case 8: {
      result = 'CombinerUnderVoltageGroup4';
      break;
    }
    // bit 4
    case 16: {
      result = 'CombinerUnderVoltageGroup5';
      break;
    }
    // bit 5
    case 32: {
      result = 'CombinerUnderVoltageGroup6';
      break;
    }
    // bit 6
    case 64: {
      result = 'CombinerUnderVoltageGroup7';
      break;
    }
    // bit 7
    case 128: {
      result = 'CombinerUnderVoltageGroup8';
      break;
    }
    // bit 8
    case 256: {
      result = 'CombinerUnderVoltageGroup9';
      break;
    }
    // bit 9
    case 512: {
      result = 'CombinerUnderVoltageGroup10';
      break;
    }
    // bit 10
    case 1024: {
      result = 'CombinerUnderVoltageGroup11';
      break;
    }
    // bit 11
    case 2048: {
      result = 'CombinerUnderVoltageGroup12';
      break;
    }
    // bit 12
    case 4096: {
      result = 'CombinerUnderVoltageGroup13';
      break;
    }
    // bit 13
    case 8192: {
      result = 'CombinerUnderVoltageGroup14';
      break;
    }
    // bit 14
    case 16384: {
      result = 'CombinerUnderVoltageGroup15';
      break;
    }
    // bit 15
    case 32768: {
      result = 'CombinerUnderVoltageGroup16';
      break;
    }
    default: {
      break;
    }
  }
  return result;
};
