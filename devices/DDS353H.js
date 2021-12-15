/**
 * Modbus register data: https://github.com/psy0rz/YTLmodbus/blob/master/DDS353H-3%20MODBUS%20registers.xls
 * Buy link: https://www.elektramat.nl/emat-kwh-meter-100a-1-fase-modbus-mid-5282/
 *
 */
module.exports = {
  model: 'DDS353H',
  vendor: 'YTL',
  supports: 'voltage, current, power',
  description: 'Energy meter, types: DDS353H-1 / DDS353H-2 / DDS353H-3 / YTL5281 / YTL5282 / YTL5283',
  fromModbus: {
    input: {
      frequency: {
        address: 0x0130,
        fc: 3,
        len: 1,
        post: (value) => value / 100,
      },
      voltage: {
        address: 0x0131,
        fc: 3,
        len: 1,
        post: (value) => value / 100,
      },
      current: {
        address: 0x0139,
        fc: 3,
        len: 2,
        post: (value, raw) => raw.readUInt32BE() / 1000,
      },
      active_power: {
        address: 0x0140,
        fc: 3,
        len: 2,
        post: (value, raw) => raw.readUInt32BE(),
      },
      reactive_power: {
        address: 0x0148,
        fc: 3,
        len: 2,
        post: (value, raw) => raw.readUInt32BE(),
      },
      apparent_power: {
        address: 0x0150,
        fc: 3,
        len: 2,
        post: (value, raw) => raw.readUInt32BE(),
      },
      power_factor: {
        address: 0x0158,
        fc: 3,
        len: 1,
        post: (value) => value / 1000,
      },
      total_active_energy: {
        address: 0xA000,
        fc: 3,
        len: 2,
        post: (value, raw) => raw.readUInt32BE()/100,
      },
      total_reactive_energy: {
        address: 0xA01E,
        fc: 3,
        len: 2,
        post: (value, raw) => raw.readUInt32BE()/100,
      },

    },
  },
  toModbus: {},
};
