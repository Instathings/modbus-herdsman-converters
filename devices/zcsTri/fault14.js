const { readUInt16BE } = require('../modbusInverterMethods');

module.exports = function fault14(interpreted, buffer) {
  const intVal = readUInt16BE(interpreted, buffer);
  let result = intVal;
  switch (intVal) {
    // bit 0
    case 1: {
      result = 'StringFuse_Fault16 - id: 209';
      break;
    }
    // bit 1
    case 2: {
      result = 'StringFuse_Fault17 - id: 210';
      break;
    }
    // bit 2
    case 4: {
      result = 'StringFuse_Fault18 - id: 211';
      break;
    }
    // bit 3
    case 8: {
      result = 'StringFuse_Fault19 - id: 212';
      break;
    }
    // bit 4
    case 16: {
      result = 'StringFuse_Fault20 - id: 213';
      break;
    }
    // bit 5
    case 32: {
      result = 'StringFuse_Fault21 - id: 214';
      break;
    }
    // bit 6
    case 64: {
      result = 'StringFuse_Fault22 - id: 215';
      break;
    }
    // bit 7
    case 128: {
      result = 'StringFuse_Fault23 - id: 216';
      break;
    }
    // bit 8
    case 256: {
      result = 'StringFuse_Fault24 - id: 217';
      break;
    }
    // bit 9
    case 512: {
      result = 'StringFuse_Fault25 - id: 218';
      break;
    }
    // bit 10
    case 1024: {
      result = 'StringFuse_Fault26 - id: 219';
      break;
    }
    // bit 11
    case 2048: {
      result = 'StringFuse_Fault27 - id: 220';
      break;
    }
    // bit 12
    case 4096: {
      result = 'StringFuse_Fault28 - id: 221';
      break;
    }
    // bit 13
    case 8192: {
      result = 'StringFuse_Fault29 - id: 222';
      break;
    }
    // bit 14
    case 16384: {
      result = 'StringFuse_Fault30 - id: 223';
      break;
    }
    // bit 15
    case 32768: {
      result = 'StringFuse_Fault31 - id: 224';
      break;
    }
    default: {
      break;
    }
  }
  return result;
};
