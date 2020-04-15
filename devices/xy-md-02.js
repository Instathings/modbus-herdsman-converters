/**
 * http://www.sah.co.rs/media/sah/techdocs/xy-md02-manual.pdf
 */
module.exports = {
  model: 'XY-MD02',
  vendor: 'Arceli',
  supports: 'temperature and humidity',
  description: 'Temperature and humidity sensor',
  fromModbus: {
    input: {
      temperature: {
        address: 0x0001,
        post: (value) => value / 10,
      },
      humidity: {
        address: 0x0002,
        post: (value) => value / 10,
      },
    },
    keep: {
      address: {
        address: 0x0101,
      },
      rate: {
        /**
         * 0 9600
         * 1 14400
         * 2 192000
         */
        address: 0x102,
      },
      temperature_correction: {
        address: 0x103,
      },
      humidity_correction: {
        address: 0x104,
      },
    },
  },
  toModbus: {},
};
