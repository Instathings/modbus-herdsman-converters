module.exports = {
  model: 'SDM120',
  vendor: 'Eastron',
  description: 'Energy meter',
  supports: 'voltage, current, power',
  fromModbus: {
    input: {
      voltage: {
        address: 30001,
      },
      current: {
        address: 30007,
      },
      active_power: {
        address: 30013,
      },
      apparent_power: {
        address: 30019,
      },
      reactive_power: {
        address: 30025,
      },
      power_factor: {
        address: 30031,
      },
      phase_angle: {
        address: 30037,
      },
      frequency: {
        address: 30071,
      },
      import_active_energy: {
        address: 30073,
      },
      export_active_energy: {
        address: 30075,
      },
      import_reactive_energy: {
        address: 30077,
      },
      export_reactive_energy: {
        address: 30079,
      },
      total_active_energy: {
        address: 30343,
      },
      total_reactive_energy: {
        address: 30345,
      },
    },
    keep: {
      relay_pulse_width: {
        address: 40013,
      },
      network_parity_stop: {
        address: 40019,
      },
      network_node: {
        address: 40021,
      },
      network_baud_rate: {
        address: 40029,
      },
      demand_interval: {
        address: 462721,
      },
      system_power: {
        address: 463761,
      },
      measurement_mode: {
        address: 463776,
      },
      pulse_output: {
        address: 363792,
      },
    },
  },
  toModbus: {},
};
