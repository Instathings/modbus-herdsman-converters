const { readUInt16BE } = require('../modbusInverterMethods');

module.exports = function sysState(interpreted, buffer) {
  const intVal = readUInt16BE(interpreted, buffer);
  let result = intVal;
  switch (intVal) {
    case 0: {
      result = 'Waiting';
      break;
    }
    case 1: {
      result = 'Checking grid';
      break;
    }
    case 2: {
      result = 'Grid connected';
      break;
    }
    case 3: {
      result = 'GridUFP';
      break;
    }
    case 4: {
      result = 'Emergency power supply (EPS)';
      break;
    }
    case 5: {
      result = 'Recoverable fault';
      break;
    }
    case 6: {
      result = 'Permanent fault';
      break;
    }
    case 7: {
      result = 'Self-charging';
      break;
    }
    default: {
      break;
    }
  }
  return result;
};
