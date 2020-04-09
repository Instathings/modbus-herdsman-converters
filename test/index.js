const assert = require('assert');

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
});
