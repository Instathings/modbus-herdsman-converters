const { readUInt16BE } = require('../modbusInverterMethods');

module.exports = function fault8(interpreted, buffer) {
  const intVal = readUInt16BE(interpreted, buffer);
  let result = intVal;
  switch (intVal) {
    // bit 0
    case 1: {
      result = 'OverTempDerating- id: 113';
      break;
    }
    // bit 1
    case 2: {
      result = 'FreqDerating- id: 114';
      break;
    }
    // bit 2
    case 4: {
      result = 'FreqLoading- id: 115';
      break;
    }
    // bit 3
    case 8: {
      result = 'VoltDerating- id: 116';
      break;
    }
    // bit 4
    case 16: {
      result = 'VoltLoading- id: 117';
      break;
    }
    // bit 11
    case 2048: {
      result = 'BatLowVoltageAlarm- id: 124';
      break;
    }
    // bit 12
    case 4096: {
      result = 'BatLowVoltageShut- id: 125';
      break;
    }
    default: {
      break;
    }
  }
  return result;
};
