const { readUInt16BE } = require('../modbusInverterMethods');

module.exports = function fault11(interpreted, buffer) {
  const intVal = readUInt16BE(interpreted, buffer);
  let result = intVal;
  switch (intVal) {
    // bit 0
    case 1: {
      result = 'ForceShutdown - id: 161';
      break;
    }
    // bit 1
    case 2: {
      result = 'RemoteShutdown - id: 162';
      break;
    }
    // bit 2
    case 4: {
      result = 'Drms0Shutdown - id: 163';
      break;
    }
    // bit 3 - skipped
    // bit 4
    case 16: {
      result = 'RemoteDerating - id: 165';
      break;
    }
    // bit 5
    case 32: {
      result = 'LogicInterfaceDerating - id: 166';
      break;
    }
    // bit 6
    case 64: {
      result = 'AlarmAntiRefluxing - id: 167';
      break;
    }
    // bit 7 empty

    // bit 8
    case 256: {
      result = 'FanFault1 - id: 169';
      break;
    }
    // bit 9
    case 512: {
      result = 'FanFault2 - id: 170';
      break;
    }
    // bit 10
    case 1024: {
      result = 'FanFault3 - id: 171';
      break;
    }
    // bit 11
    case 2048: {
      result = 'FanFault4 - id: 172';
      break;
    }
    // bit 12
    case 4096: {
      result = 'FanFault5 - id: 173';
      break;
    }
    // bit 13
    case 8192: {
      result = 'FanFault6 - id: 174';
      break;
    }
    default: {
      break;
    }
  }
  return result;
};
