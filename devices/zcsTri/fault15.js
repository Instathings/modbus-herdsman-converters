const { readUInt16BE } = require('../modbusInverterMethods');

module.exports = function fault15(interpreted, buffer) {
  const intVal = readUInt16BE(interpreted, buffer);
  let result = intVal;
  switch (intVal) {
    // bit 0
    case 1: {
      result = 'InputFuse_Fault0 - id: 225';
      break;
    }
    // bit 1
    case 2: {
      result = 'InputFuse_Fault1 - id: 226';
      break;
    }
    // bit 2
    case 4: {
      result = 'InputFuse_Fault2 - id: 227';
      break;
    }
    // bit 3
    case 8: {
      result = 'InputFuse_Fault3 - id: 228';
      break;
    }
    // bit 4
    case 16: {
      result = 'InputFuse_Fault4 - id: 229';
      break;
    }
    // bit 5
    case 32: {
      result = 'InputFuse_Fault5 - id: 230';
      break;
    }
    // bit 6
    case 64: {
      result = 'InputFuse_Fault6 - id: 231';
      break;
    }
    // bit 7
    case 128: {
      result = 'InputFuse_Fault7 - id: 232';
      break;
    }
    // bit 8
    case 256: {
      result = 'InputFuse_Fault8 - id: 233';
      break;
    }
    // bit 9
    case 512: {
      result = 'InputFuse_Fault9 - id: 234';
      break;
    }
    // bit 10
    case 1024: {
      result = 'InputFuse_Fault10 - id: 235';
      break;
    }
    // bit 11
    case 2048: {
      result = 'InputFuse_Fault11 - id: 236';
      break;
    }
    // bit 12
    case 4096: {
      result = 'InputFuse_Fault12 - id: 237';
      break;
    }
    // bit 13
    case 8192: {
      result = 'InputFuse_Fault13 - id: 238';
      break;
    }
    // bit 14
    case 16384: {
      result = 'InputFuse_Fault14 - id: 239';
      break;
    }
    // bit 15
    case 32768: {
      result = 'InputFuse_Fault15 - id: 240';
      break;
    }
    default: {
      break;
    }
  }
  return result;
};
