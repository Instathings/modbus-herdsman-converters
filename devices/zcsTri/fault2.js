const { readUInt16BE } = require('../modbusInverterMethods');

module.exports = function fault2(interpreted, buffer) {
  const intVal = readUInt16BE(interpreted, buffer);
  let result = intVal;
  switch (intVal) {
    // bit 0
    case 1: {
      result = 'HwADFaultIGrid  - id: 017';
      break;
    }
    // bit 1
    case 2: {
      result = 'HwADFaultDCI - id: 018';
      break;
    }
    // bit 2
    case 4: {
      result = 'HwADFaultVGrid(DC) - id: 019';
      break;
    }
    // bit 3
    case 8: {
      result = 'HwADFaultVGrid(AC) - id: 020';
      break;
    }
    // bit 4
    case 16: {
      result = 'GFCIDeviceFault(DC) - id: 021';
      break;
    }
    // bit 5
    case 32: {
      result = 'GFCIDeviceFault(AC) - id: 022';
      break;
    }
    // bit 6
    case 64: {
      result = 'HwADFaultDCV - id: 023';
      break;
    }
    // bit 7
    case 128: {
      result = 'HwADFaultIdc - id: 024';
      break;
    }
    // bit 8, 9, 10, 11
    // bit 12
    case 4096: {
      result = 'ConsistentFault_GFCI - id: 029';
      break;
    }
    // bit 13
    case 8192: {
      result = 'ConsistentFault_Vgrid - id: 030';
      break;
    }
    default: {
      break;
    }
  }
  return result;
};
