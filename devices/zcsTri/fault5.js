const { readUInt16BE } = require('../modbusInverterMethods');

module.exports = function fault5(interpreted, buffer) {
  const intVal = readUInt16BE(interpreted, buffer);
  let result = intVal;
  switch (intVal) {
    // bit 0
    case 1: {
      result = 'VbusRmsUnbalance - id: 065';
      break;
    }
    // bit 1
    case 2: {
      result = 'VbusInstantUnbalance - id: 065';
      break;
    }
    // bit 2
    case 4: {
      result = 'BusUVP - id: 067';
      break;
    }
    // bit 3
    case 8: {
      result = 'BusZVP - id: 068';
      break;
    }
    // bit 4
    case 16: {
      result = 'PVOVP - id: 069';
      break;
    }
    // bit 5
    case 32: {
      result = 'BatOVP - id: 070';
      break;
    }
    // bit 6
    case 64: {
      result = 'LLCBusOVP - id: 071';
      break;
    }
    // bit 7
    case 128: {
      result = 'SwBusRmsOVP - id: 072';
      break;
    }
    // bit 8
    case 9: {
      result = 'SwBusInstantOVP - id: 073';
      break;
    }
    default: {
      break;
    }
  }
  return result;
};
