const assert = require('assert');

const devices = require('../devices');
const index = require('../index');

describe('index.js', () => {
  it('Find device by model ID', () => {
    const model = 'xy-md02';
    const device = index.findByModbusModel(model);
    assert.strictEqual(device.model, model);
  });

  it('Find device by model ID null', () => {
    const device = index.findByModbusModel(null);
    assert.strictEqual(device, null);
  });

  it('Verify devices.js definitions', () => {
    function verifyKeys(expected, actual, id) {
      expected.forEach((key) => {
        if (!actual.includes(key)) {
          throw new Error(`${id}: missing key '${key}'`);
        }
      });
    }

    devices.forEach((device) => {
      // Verify device attributes.
      verifyKeys(
        ['model', 'vendor', 'description', 'supports', 'fromModbus', 'toModbus'],
        Object.keys(device),
        device.model,
      );
    });
    //  Check for duplicate models
    const allModels = devices.map((device) => {
      return device.model;
    });
    const allModelsSet = new Set(allModels);
    if (allModelsSet.size < allModels.length) {
      throw new Error('Duplicate exists');
    }
  });
});
