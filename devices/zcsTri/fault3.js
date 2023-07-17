const { readUInt16BE } = require('../modbusInverterMethods');

module.exports = function fault3(interpreted, buffer) {
  const intVal = readUInt16BE(interpreted, buffer);
  let result = intVal;
  switch (intVal) {
    // bit 0
    case 1: {
      result = 'SpiCommFault(DC) - id: 033';
      break;
    }
    // bit 1
    case 2: {
      result = 'SpiCommFault(AC) - id: 034';
      break;
    }
    // bit 2
    case 4: {
      result = 'SChip_Fault - id: 035';
      break;
    }
    // bit 3
    case 8: {
      result = 'MChip_Fault - id: 036';
      break;
    }
    // bit 4
    case 16: {
      result = 'HwAuxPowerFault - id: 037';
      break;
    }
    // bit 5
    case 32: {
      break;
    }
    // bit 6
    case 64: {
      break;
    }
    // bit 7
    case 128: {
      break;
    }
    // bit 8
    case 256: {
      result = 'RelayFail - id: 041';
      break;
    }
    // bit 9
    case 512: {
      result = 'IsoFault - id: 042';
      break;
    }
    // bit 10
    case 1024: {
      result = 'PEConnectFault - id: 043';
      break;
    }
    // bit 11
    case 2048: {
      result = 'PvConfigError - id: 044';
      break;
    }
    // bit 12
    case 4096: {
      result = 'CTDisconnect - id: 045';
      break;
    }
    // bit 13
    case 8192: {
      result = 'ReversalConnection - id: 046';
      break;
    }
    // bit 14
    case 16384: {
      result = 'ParallelFault - id: 047';
      break;
    }
    default: {
      break;
    }
  }
  return result;
};
