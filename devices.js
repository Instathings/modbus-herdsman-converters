const xymd = require('./devices/XY-MD02');
const sdm120 = require('./devices/SDM120');
const dds353h = require('./devices/DDS353H.js');

const devices = [
  xymd,
  sdm120,
  dds353h
];

module.exports = devices;
