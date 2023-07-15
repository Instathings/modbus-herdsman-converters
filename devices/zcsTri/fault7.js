const { readUInt16BE } = require('../modbusInverterMethods');

module.exports = function fault7(interpreted, buffer) {
  const intVal = readUInt16BE(interpreted, buffer);
  let result = intVal;
  switch (intVal) {
    // bit 0
    case 1: {
      result = 'HwLLCBusOVP - id: 097';
      break;
    }
    // bit 1
    case 2: {
      result = 'HwBusOVP - id: 098';
      break;
    }
    // bit 2
    case 4: {
      result = 'HwBuckBoostOCP - id: 099';
      break;
    }
    // bit 3
    case 8: {
      result = 'HwBatOCP - id: 100';
      break;
    }
    // bit 4
    case 16: {
      break;
    }
    // bit 5
    case 32: {
      result = 'HwPVOCP - id: 102';
      break;
    }
    // bit 6
    case 64: {
      result = 'HwACOCP - id: 103';
      break;
    }
    // bit 7
    case 128: {
      break;
    }
    // bit 13
    case 8192: {
      result = 'Overload1 - id: 110';
      break;
    }
    // bit 14
    case 16384: {
      result = 'Overload2- id: 111';
      break;
    }
    // bit 15
    case 32768: {
      result = 'Overload3- id: 112';
      break;
    }
    default: {
      break;
    }
  }
  return result;
};
