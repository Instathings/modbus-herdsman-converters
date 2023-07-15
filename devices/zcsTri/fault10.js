const { readUInt16BE } = require('../modbusInverterMethods');

module.exports = function fault10(interpreted, buffer) {
  const intVal = readUInt16BE(interpreted, buffer);
  let result = intVal;
  switch (intVal) {
    // bit 0
    case 1: {
      result = 'USBFault - id: 145';
      break;
    }
    // bit 1
    case 2: {
      result = 'WifiFault - id: 146';
      break;
    }
    // bit 2
    case 4: {
      result = 'BluetoothFault - id: 147';
      break;
    }
    // bit 3
    case 8: {
      result = 'RTCFault - id: 148';
      break;
    }
    // bit 4
    case 16: {
      result = 'CommEEPROMFault - id: 149';
      break;
    }
    // bit 5
    case 32: {
      result = 'FlashFault - id: 150';
      break;
    }
    // bit 6-7 empty

    // bit 8
    case 256: {
      result = 'SciCommLose(DC) - id: 153';
      break;
    }
    // bit 9
    case 512: {
      result = 'SciCommLose(AC) - id: 154';
      break;
    }
    // bit 10
    case 1024: {
      result = 'SciCommLose(Fuse) - id: 155';
      break;
    }
    // bit 11
    case 2048: {
      result = 'SoftVerError - id: 156';
      break;
    }
    // bit 12
    case 4096: {
      result = 'BMSCommunicatonFault - id: 157';
      break;
    }
    default: {
      break;
    }
  }
  return result;
};
