const { readUInt16BE } = require('../modbusInverterMethods');

module.exports = function fault13(interpreted, buffer) {
  const intVal = readUInt16BE(interpreted, buffer);
  let result = intVal;
  switch (intVal) {
    // bit 0
    case 1: {
      result = 'StringFuse_Fault0 - id: 193';
      break;
    }
    // bit 1
    case 2: {
      result = 'StringFuse_Fault1 - id: 194';
      break;
    }
    // bit 2
    case 4: {
      result = 'StringFuse_Fault2 - id: 195';
      break;
    }
    // bit 3
    case 8: {
      result = 'StringFuse_Fault3 - id: 196';
      break;
    }
    // bit 4
    case 16: {
      result = 'StringFuse_Fault4 - id: 197';
      break;
    }
    // bit 5
    case 32: {
      result = 'StringFuse_Fault5 - id: 198';
      break;
    }
    // bit 6
    case 64: {
      result = 'StringFuse_Fault6 - id: 199';
      break;
    }
    // bit 7
    case 128: {
      result = 'StringFuse_Fault7 - id: 200';
      break;
    }
    // bit 8
    case 256: {
      result = 'StringFuse_Fault8 - id: 201';
      break;
    }
    // bit 9
    case 512: {
      result = 'StringFuse_Fault9 - id: 202';
      break;
    }
    // bit 10
    case 1024: {
      result = 'StringFuse_Fault10 - id: 203';
      break;
    }
    // bit 11
    case 2048: {
      result = 'StringFuse_Fault11 - id: 204';
      break;
    }
    // bit 12
    case 4096: {
      result = 'StringFuse_Fault12 - id: 205';
      break;
    }
    // bit 13
    case 8192: {
      result = 'StringFuse_Fault13 - id: 206';
      break;
    }
    // bit 14
    case 16384: {
      result = 'StringFuse_Fault14 - id: 207';
      break;
    }
    // bit 15
    case 32768: {
      result = 'StringFuse_Fault15 - id: 208';
      break;
    }
    default: {
      break;
    }
  }
  return result;
};
