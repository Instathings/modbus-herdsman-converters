const { readUInt16BE } = require('../modbusInverterMethods');

module.exports = function fault12(interpreted, buffer) {
  const intVal = readUInt16BE(interpreted, buffer);
  let result = intVal;
  switch (intVal) {
    case 1: {
      result = 'BMS OVP - id: 177';
      break;
    }
    case 2: {
      result = 'BMS UVP - id: 178';
      break;
    }
    case 4: {
      result = 'BMS OTP - id: 179';
      break;
    }
    case 8: {
      result = 'BMS UTP - id: 180';
      break;
    }
    case 16: {
      result = 'BMS OCP - id: 181';
      break;
    }
    case 32: {
      result = 'BMS Short - id: 182';
      break;
    }
    default: {
      break;
    }
  }
  return result;
};
