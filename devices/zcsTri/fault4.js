const { readUInt16BE } = require('../modbusInverterMethods');

module.exports = function fault4(interpreted, buffer) {
  const intVal = readUInt16BE(interpreted, buffer);
  let result = intVal;
  switch (intVal) {
    // bit 0
    case 1: {
      result = 'TempFault_Bat - id: 049';
      break;
    }
    // bit 1
    case 2: {
      result = 'TempFault_HeatSink1 - id: 050';
      break;
    }
    // bit 2
    case 4: {
      result = 'TempFault_HeatSink2 - id: 051';
      break;
    }
    // bit 3
    case 8: {
      result = 'TempFault_HeatSink3 - id: 052';
      break;
    }
    // bit 4
    case 16: {
      result = 'TempFault_HeatSink4 - id: 053';
      break;
    }
    // bit 5
    case 32: {
      result = 'TempFault_HeatSink5 - id: 054';
      break;
    }
    // bit 6
    case 64: {
      result = 'TempFault_HeatSink6 - id: 055';
      break;
    }
    // bit 7
    case 128: {
      break;
    }
    // bit 8
    case 256: {
      result = 'TempFault_Env1 - id: 057';
      break;
    }
    // bit 9
    case 512: {
      result = 'TempFault_Env2 - id: 058';
      break;
    }
    // bit 10
    case 1024: {
      result = 'TempFault_Inv1 - id: 059';
      break;
    }
    // bit 11
    case 2048: {
      result = 'TempFault_Inv2 - id: 060';
      break;
    }
    // bit 12
    case 4096: {
      result = 'TempFault_Inv3 - id: 061';
      break;
    }
    default: {
      break;
    }
  }
  return result;
};
