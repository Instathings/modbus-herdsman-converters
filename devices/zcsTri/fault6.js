const { readUInt16BE } = require('../modbusInverterMethods');

module.exports = function fault6(interpreted, buffer) {
  const intVal = readUInt16BE(interpreted, buffer);
  let result = intVal;
  switch (intVal) {
    // bit 0
    case 1: {
      result = 'SwBatOCP - id: 081';
      break;
    }
    // bit 1
    case 2: {
      result = 'DciOCP - id: 082';
      break;
    }
    // bit 2
    case 3: {
      result = 'SwOCPInstant - id: 083';
      break;
    }
    // bit 3
    case 4: {
      result = 'SwBuckBoostOCP - id: 084';
      break;
    }
    // bit 4
    case 5: {
      result = 'SwAcRmsOCP - id: 085';
      break;
    }
    // bit 5
    case 6: {
      result = 'SwPvOCPInstant - id: 086';
      break;
    }
    // bit 6
    case 7: {
      result = 'IpvUnbalance - id: 087';
      break;
    }
    // bit 7
    case 8: {
      result = 'IacUnbalance - id: 088';
      break;
    }
    default: {
      break;
    }
  }
  return result;
};
