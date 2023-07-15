const { readUInt16BE } = require('../modbusInverterMethods');

module.exports = function fault16(interpreted, buffer) {
  const intVal = readUInt16BE(interpreted, buffer);
  let result = intVal;
  switch (intVal) {
    // bit 0
    case 1: {
      result = 'CombinerOverCurrent1';
      break;
    }
    // bit 1
    case 2: {
      result = 'CombinerOverCurrent2';
      break;
    }
    // bit 2
    case 4: {
      result = 'CombinerOverCurrent3';
      break;
    }
    // bit 3
    case 8: {
      result = 'CombinerOverCurrent4';
      break;
    }
    // bit 4
    case 16: {
      result = 'CombinerOverCurrent5';
      break;
    }
    // bit 5
    case 32: {
      result = 'CombinerOverCurrent6';
      break;
    }
    // bit 6
    case 64: {
      result = 'CombinerOverCurrent7';
      break;
    }
    // bit 7
    case 128: {
      result = 'CombinerOverCurrent8';
      break;
    }
    // bit 8
    case 256: {
      result = 'CombinerOverCurrent9';
      break;
    }
    // bit 9
    case 512: {
      result = 'CombinerOverCurrent10';
      break;
    }
    // bit 10
    case 1024: {
      result = 'CombinerOverCurrent11';
      break;
    }
    // bit 11
    case 2048: {
      result = 'CombinerOverCurrent12';
      break;
    }
    // bit 12
    case 4096: {
      result = 'CombinerOverCurrent13';
      break;
    }
    // bit 13
    case 8192: {
      result = 'CombinerOverCurrent14';
      break;
    }
    // bit 14
    case 16384: {
      result = 'CombinerOverCurrent15';
      break;
    }
    // bit 15
    case 32768: {
      result = 'CombinerOverCurrent16';
      break;
    }
    default: {
      break;
    }
  }
  return result;
};
