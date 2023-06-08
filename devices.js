const xymd = require('./devices/XY-MD02');
const sdm120 = require('./devices/SDM120');
const hyd6000 = require('./devices/ZCS_HYD600');
const triphaseInverter = require('./devices/ZCS_TRI');

const devices = [
  xymd,
  sdm120,
  hyd6000,
  triphaseInverter
];

module.exports = devices;
