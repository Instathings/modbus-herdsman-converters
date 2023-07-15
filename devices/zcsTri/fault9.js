const { readUInt16BE } = require('../modbusInverterMethods');

module.exports = function fault9(interpreted, buffer) {
  const intVal = readUInt16BE(interpreted, buffer);
  let result = intVal;
  switch (intVal) {
    // bit 0
    case 1: {
      result = 'unrecoverHwAcOCP - id: 129';
      break;
    }
    // bit 1
    case 2: {
      result = 'unrecoverBusOVP - id: 130';
      break;
    }
    // bit 2
    case 4: {
      result = 'unrecoverHwBusOVP - id: 131';
      break;
    }
    // bit 3
    case 8: {
      result = 'unrecoverIpvUnbalance - id: 132';
      break;
    }
    // bit 4
    case 16: {
      result = 'unrecoverEPSBatOCP - id: 133';
      break;
    }
    // bit 5
    case 32: {
      result = 'unrecoverAcOCPInstant - id: 134';
      break;
    }
    // bit 6
    case 64: {
      result = 'unrecoverIacUnbalance - id: 135';
      break;
    }
    // bit 8
    case 256: {
      result = 'unrecoverPvConfigError - id: 137';
      break;
    }
    // bit 9
    case 512: {
      result = 'unrecoverPVOCPInstant - id: 138';
      break;
    }
    // bit 10
    case 1024: {
      result = 'unrecoverHwPVOCP - id: 139';
      break;
    }
    // bit 11
    case 2048: {
      result = 'unrecoverRelayFail - id: 140';
      break;
    }
    // bit 12
    case 4096: {
      result = 'unrecoverVbusUnbalance - id: 141';
      break;
    }
    default: {
      break;
    }
  }
  return result;
};
