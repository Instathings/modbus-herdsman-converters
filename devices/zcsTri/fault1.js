const readUInt16BE = require('../modbusInverterMethods')

module.exports = function fault1(interpreted, buffer) {
  const intVal = readUInt16BE(interpreted, buffer);
  let result = intVal;
  switch (intVal) {
    // bit 0
    case 1: {
      result = 'GridOVP - id: 001';
      break;
    }
    // bit 1
    case 2: {
      result = 'GridUVP - id: 002';
      break;
    }
    // bit 2
    case 4: {
      result = 'GridOFP - id: 003';
      break;
    }
    // bit 3
    case 8: {
      result = 'GridUFP - id: 004';
      break;
    }
    // bit 4
    case 16: {
      result = 'GFCI - id: 005';
      break;
    }
    // bit 5
    case 32: {
      result = 'OVRT - id: 006';
      break;
    }
    // bit 6
    case 64: {
      result = 'LVRT - id: 007';
      break;
    }
    // bit 7
    case 128: {
      result = 'IslandFault - id: 008';
      break;
    }
    // bit 8
    case 256: {
      result = 'GridOVPInstant1 - id: 009';
      break;
    }
    // bit 9
    case 512: {
      result = 'GridOVPInstant2 - id: 010';
      break;
    }
    // bit 10
    case 1024: {
      result = 'VGridLineFault - id: 011';
      break;
    }
    // bit 11
    case 2048: {
      result = 'InvOVP - id: 012';
      break;
    }
    default: {
      break;
    }
  }
  return result;
};
