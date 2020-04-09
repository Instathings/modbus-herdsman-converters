const devices = require('./devices');

const byModbusModel = new Map();
// eslint-disable-next-line
for (const device of devices) {
  byModbusModel.set(device.model.toLowerCase(), device);
}

module.exports = {
  devices,
  findByModbusModel: (model) => {
    if (!model) {
      return null;
    }

    const id = model.toLowerCase();

    let device = byModbusModel.get(id);

    if (!device) {
      device = byModbusModel.get(id.replace(/\0.*$/g, '').trim());
    }
    return device;
  },
};
