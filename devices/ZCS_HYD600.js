const divider = by => value => value / by

const decimalDivider = divider(10);
const centesimalDivider = divider(100);
const millesimalDivider = divider(1000);

module.exports = {
    model: 'HYD6000',
    vendor: 'ZCS',
    description: 'Storage inverter',
    fromModbus: {
        input: {
            operating_status: {
                address: 0x0200
            },
            phase_voltage: {
                address: 0x0206,
                post: decimalDivider
            },
            phase_current: {
                address: 0x0207,
                post: centesimalDivider
            },
            grid_frequency: {
                address: 0x020C,
                post: centesimalDivider
            },
            battery_charge_power: {
                address: 0x020D,
                post: centesimalDivider
            },
            battery_cell: {
                address: 0x020E,
                post: decimalDivider
            },
            battery_charge_current: {
                address: 0x020F,
                post: centesimalDivider
            },
            status_of_charge: {
                address: 0x0210
            },
            battery_temperature: {
                address: 0x0211
            },
            grid_power: {
                address: 0x0212,
                post: centesimalDivider
            },
            load_power: {
                address: 0x0213,
                post: centesimalDivider
            },
            energy_storage_power: {
                address: 0x0214,
                post: centesimalDivider
            },
            pv_power_generation: {
                address: 0x0215,
                post: centesimalDivider
            },
            eps_output_voltage: {
                address: 0x0216,
                post: decimalDivider
            },
            eps_power_output: {
                address: 0x0217,
                post: centesimalDivider
            },
            daily_energy: {
                address: 0x0218,
                post: centesimalDivider
            },
            daily_energy_injected: {
                address: 0x0219,
                post: centesimalDivider
            },
            daily_energy_taken: {
                address: 0x021A,
                post: centesimalDivider
            },
            load_daily_energy: {
                address: 0x021B,
                post: centesimalDivider
            },
            total_energy_high: {
                address: 0x021C
            },
            total_energy_low: {
                address: 0x021D
            },
            total_energy_injected_high: {
                address: 0x021E
            },
            total_energy_injected_low: {
                address: 0x021F
            },
            total_energy_taken_high: {
                address: 0x0220
            },
            total_energy_taken_low: {
                address: 0x0221
            },
            load_total_energy_high: {
                address: 0x0222
            },
            load_total_energy_low: {
                address: 0x0223
            },
            daily_energy_charging: {
                address: 0x0224,
                post: centesimalDivider
            },
            daily_energy_discharging: {
                address: 0x0225,
                post: centesimalDivider
            },
            total_energy_charging_high: {
                address: 0x0226
            },
            total_energy_charging_low: {
                address: 0x0227
            },
            total_energy_discharging_high: {
                address: 0x0228
            },
            total_energy_discharging_low: {
                address: 0x0229
            },
            countdown_time: {
                address: 0x022A
            },
            inverter_alarm: {
                address: 0x022B
            },
            battery_cycles: {
                address: 0x022C
            },
            bus_voltage: {
                address: 0x022D
            },
            llc_bus_voltage: {
                address: 0x022E,
                post: decimalDivider
            },
            buck_current: {
                address: 0x022F,
                post: centesimalDivider
            },
            r_phase_voltage: {
                address: 0x0230,
                post: decimalDivider
            },
            r_phase_current: {
                address: 0x0231,
                post: centesimalDivider
            },
            battery_health_degree: {
                address: 0x0237
            },
            inverter_internal_temperature: {
                address: 0x0238
            },
            heat_sink_temperature: {
                address: 0x0239
            },
            country_standard: {
                address: 0x023A
            },
            current_dc_component: {
                address: 0x023B,
                post: millesimalDivider
            },
            voltage_dc_component: {
                address: 0x023C,
                post: decimalDivider
            },
            day_generation_time: {
                address: 0x0243
            },
            total_generating_time_high: {
                address: 0x0244
            },
            total_generating_time_low: {
                address: 0x0245
            },
            pv1_insulation_resistance_positive: {
                address: 0x0246
            },
            pv2_insulation_resistance_positive: {
                address: 0x0247
            },
            pv_insulation_resistance_ground: {
                address: 0x0248
            },
            input_mode: {
                address: 0x0249
            },
            pv1_voltage: {
                address: 0x0250,
                post: decimalDivider
            },
            pv1_current: {
                address: 0x0251,
                post: centesimalDivider
            },
            pv1_power: {
                address: 0x0252,
                post: centesimalDivider
            },
            pv2_voltage: {
                address: 0x0253,
                post: decimalDivider
            },
            pv2_current: {
                address: 0x0254,
                post: centesimalDivider
            },
            pv2_power: {
                address: 0x0254,
                post: centesimalDivider
            }
        },
        keep: {
        },
    },
    toModbus: {},
};
