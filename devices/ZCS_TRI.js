const {
  centesimalDivider,
  decimalDivider,
  ca2Convertion,
  centesimalSignDivider,
  millesimalSignDivider
} = require('./modbusInverterMethods');

module.exports = {
  model: 'TRI',
  vendor: 'ZCS',
  description: 'Triphase inverter',
  supports: 'voltage, current, power',
  fromModbus: {
    keep: {
      /**
       * Unit: Hz
       * Accuracy: 0,01
       */
      frequency_grid: {
        address: 0x0484,
        post: centesimalDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      activepower_output_total: {
        address: 0x0485,
        post: centesimalSignDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      reactivepower_output_total: {
        address: 0x0486,
        post: centesimalSignDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      apparentpower_output_total: {
        address: 0x0487,
        post: centesimalSignDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      activepower_pcc_total: {
        address: 0x0488,
        post: centesimalSignDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      reactivepower_pcc_total: {
        address: 0x0489,
        post: centesimalSignDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      apparentpower_pcc_total: {
        address: 0x048a,
        post: centesimalSignDivider
      },
      /**
       * Unit: V
       * Accuracy: 0,1
       */
      voltage_phase_r: {
        address: 0x048d,
        post: decimalDivider
      },
      /**
       * Unit: A
       * Accuracy: 0,01
       */
      current_output_r: {
        address: 0x048e,
        post: centesimalDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      activepower_output_r: {
        address: 0x048f,
        post: centesimalSignDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      reactivepower_output_r: {
        address: 0x0490,
        post: centesimalSignDivider
      },
      /**
       * Unit: p.u.
       * Accuracy: 0,001
       */
      powerfactor_output_r: {
        address: 0x0491,
        post: millesimalSignDivider
      },
      /**
       * Unit: A
       * Accuracy: 0,01
       */
      current_pcc_r: {
        address: 0x0492,
        post: centesimalDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      activepower_pcc_r: {
        address: 0x0493,
        post: centesimalSignDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      reactivepower_pcc_r: {
        address: 0x0494,
        post: centesimalSignDivider
      },
      /**
       * Unit: p.u.
       * Accuracy: 0,001
       */
      powerfactor_pcc_r: {
        address: 0x0495,
        post: millesimalSignDivider
      },
      // 0x0496 - skipped
      // 0x0497 - skipped
      /**
       * Unit: V
       * Accuracy: 0,1
       */
      voltage_phase_s: {
        address: 0x0498,
        post: decimalDivider
      },
      /**
       * Unit: A
       * Accuracy: 0,01
       */
      current_output_s: {
        address: 0x0499,
        post: centesimalDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,1
       */
      activepower_output_s: {
        address: 0x049a,
        post: centesimalSignDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,1
       */
      reactivepower_output_s: {
        address: 0x049b,
        post: centesimalSignDivider
      },
      /**
       * Unit: p.u.
       * Accuracy: 0,001
       */
      powerfactor_output_s: {
        address: 0x049c,
        post: millesimalSignDivider
      },
      /**
       * Unit: A
       * Accuracy: 0,01
       */
      current_pcc_s: {
        address: 0x049d,
        post: centesimalDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      activepower_pcc_s: {
        address: 0x049e,
        post: centesimalSignDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      reactivepower_pcc_s: {
        address: 0x049f,
        post: centesimalSignDivider
      },
      /**
       * Unit: p.u.
       * Accuracy: 0,001
       */
      powerfactor_pcc_s: {
        address: 0x04a0,
        post: millesimalSignDivider
      },
      // 04a1 - skipped
      // 04a2 - skipped
      /**
       * Unit: V
       * Accuracy: 0,1
       */
      voltage_phase_t: {
        address: 0x04a3,
        post: decimalDivider
      },
      /**
       * Unit: A
       * Accuracy: 0,01
       */
      current_output_t: {
        address: 0x04a4,
        post: centesimalDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      activepower_output_t: {
        address: 0x04a5,
        post: centesimalSignDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      reactivepower_output_t: {
        address: 0x04a6,
        post: centesimalSignDivider
      },
      /**
       * Unit: p.u.
       * Accuracy: 0,001
       */
      powerfactor_output_t: {
        address: 0x04a7,
        post: millesimalSignDivider
      },
      /**
       * Unit: A
       * Accuracy: 0,01
       */
      current_pcc_t: {
        address: 0x04a8,
        post: centesimalDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      activepower_pcc_t: {
        address: 0x04a9,
        post: centesimalSignDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      reactivepower_pcc_t: {
        address: 0x04aa,
        post: centesimalSignDivider
      },
      /**
       * Unit: p.u.
       * Accuracy: 0,001
       */
      powerfactor_pcc_t: {
        address: 0x04ab,
        post: millesimalSignDivider
      },
      // 0x04ac - skipped
      // 0x04ad - skipped
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      activepower_pv_ext: {
        address: 0x04ae,
        post: centesimalDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      activepower_load_sys: {
        address: 0x04af,
        post: centesimalDivider
      },
      // 0x04b0 -> 0x04bf - skipped
      // AC off Grid output
      // 0x0500 -> 0x503 - skipped
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      activepower_load_total: {
        address: 0x0504,
        post: centesimalSignDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      reactivepower_load_total: {
        address: 0x0505,
        post: centesimalSignDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      apparentpower_load_total: {
        address: 0x0506,
        post: centesimalSignDivider
      },
      /**
       * Unit: Hz
       * Accuracy: 0,01
       */
      frequency_output: {
        address: 0x0507,
        post: centesimalDivider
      },
      // 0x508 - skipped
      // 0x509 - skipped
      /**
       * Unit: V
       * Accuracy: 0,1
       */
      voltage_output_r: {
        address: 0x050a,
        post: decimalDivider
      },
      /**
       * Unit: A
       * Accuracy: 0,01
       */
      current_load_r: {
        address: 0x050b,
        post: centesimalSignDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      activepower_load_r: {
        address: 0x050c,
        post: centesimalSignDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      reactivepower_load_r: {
        address: 0x050d,
        post: centesimalSignDivider
      },
      /**
       * Unit: kWA
       * Accuracy: 0,01
       */
      apparentpower_load_r: {
        address: 0x050e,
        post: centesimalSignDivider
      },
      /**
       * Unit: p.u.
       * Accuracy: 0,01
       */
      loadpeakratio_r: {
        address: 0x050f,
        post: centesimalDivider
      },
      // 0x0510 - skipped
      // 0x0511 - skipped
      /**
       * Unit: V
       * Accuracy: 0,1
       */
      voltage_output_s: {
        address: 0x0512,
        post: decimalDivider
      },
      /**
       * Unit: A
       * Accuracy: 0,01
       */
      current_load_s: {
        address: 0x0513,
        post: centesimalSignDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      activepower_load_s: {
        address: 0x0514,
        post: centesimalSignDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      reactivepower_load_s: {
        address: 0x0515,
        post: centesimalSignDivider
      },
      /**
       * Unit: kWA
       * Accuracy: 0,01
       */
      apparentpower_load_s: {
        address: 0x0516,
        post: centesimalSignDivider
      },
      /**
       * Unit: p.u.
       * Accuracy: 0,001
       */
      loadpeakratio_s: {
        address: 0x0517,
        post: centesimalDivider
      },
      // 0x0518 - skipped
      // 0x0519 - skipped
      /**
       * Unit: V
       * Accuracy: 0,1
       */
      voltage_output_t: {
        address: 0x051a,
        post: decimalDivider
      },
      /**
       * Unit: A
       * Accuracy: 0,01
       */
      current_load_t: {
        address: 0x051b,
        post: centesimalSignDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      activepower_load_t: {
        address: 0x051c,
        post: centesimalSignDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      reactivepower_load_t: {
        address: 0x051d,
        post: centesimalSignDivider
      },
      /**
       * Unit: kWA
       * Accuracy: 0,01
       */
      apparentpower_load_t: {
        address: 0x051e,
        post: centesimalSignDivider
      },
      /**
       * Unit: p.u.
       * Accuracy: 0,01
       */
      loadpeakratio_t: {
        address: 0x051f,
        post: centesimalDivider
      },
      // 0x0520 -> 0x053f - skipped

      // Section: PV input

      // 0x0580 -> 0x0583 -> skipped
      /**
       * Unit: V
       * Accuracy: 0,1
       */
      voltage_pv1: {
        address: 0x0584,
        post: decimalDivider
      },
      /**
       * Unit: A
       * Accuracy: 0,01
       */
      current_pv1: {
        address: 0x0585,
        post: centesimalDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      power_pv1: {
        address: 0x0586,
        post: centesimalDivider
      },
      /**
       * Unit: V
       * Accuracy: 0,1
       */
      voltage_pv2: {
        address: 0x0587,
        post: decimalDivider
      },
      /**
       * Unit: A
       * Accuracy: 0,01
       */
      current_pv2: {
        address: 0x0588,
        post: centesimalDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      power_pv2: {
        address: 0x0589,
        post: centesimalDivider
      },
      /**
       * Unit: V
       * Accuracy: 0,1
       */
      voltage_pv3: {
        address: 0x058a,
        post: decimalDivider
      },
      /**
       * Unit: A
       * Accuracy: 0,01
       */
      current_pv3: {
        address: 0x058b,
        post: centesimalDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      power_pv3: {
        address: 0x058c,
        post: centesimalDivider
      },
      /**
       * Unit: V
       * Accuracy: 0,1
       */
      voltage_pv4: {
        address: 0x058d,
        post: decimalDivider
      },
      /**
       * Unit: A
       * Accuracy: 0,01
       */
      current_pv4: {
        address: 0x058e,
        post: centesimalDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      power_pv4: {
        address: 0x058f,
        post: centesimalDivider
      },
      /**
       * Unit: V
       * Accuracy: 0,1
       */
      voltage_pv5: {
        address: 0x0590,
        post: decimalDivider
      },
      /**
       * Unit: A
       * Accuracy: 0,01
       */
      current_pv5: {
        address: 0x0591,
        post: centesimalDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      power_pv5: {
        address: 0x0592,
        post: centesimalDivider
      },
      /**
       * Unit: V
       * Accuracy: 0,1
       */
      voltage_pv6: {
        address: 0x0593,
        post: decimalDivider
      },
      /**
       * Unit: A
       * Accuracy: 0,01
       */
      current_pv6: {
        address: 0x0594,
        post: centesimalDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      power_pv6: {
        address: 0x0595,
        post: centesimalDivider
      },
      /**
       * Unit: V
       * Accuracy: 0,1
       */
      voltage_pv7: {
        address: 0x0596,
        post: decimalDivider
      },
      /**
       * Unit: A
       * Accuracy: 0,01
       */
      current_pv7: {
        address: 0x0597,
        post: centesimalDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      power_pv7: {
        address: 0x0598,
        post: centesimalDivider
      },
      /**
       * Unit: V
       * Accuracy: 0,1
       */
      voltage_pv8: {
        address: 0x0599,
        post: decimalDivider
      },
      /**
       * Unit: A
       * Accuracy: 0,01
       */
      current_pv8: {
        address: 0x059a,
        post: centesimalDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      power_pv8: {
        address: 0x059b,
        post: centesimalDivider
      },
      /**
       * Unit: V
       * Accuracy: 0,1
       */
      voltage_pv9: {
        address: 0x059c,
        post: decimalDivider
      },
      /**
       * Unit: A
       * Accuracy: 0,01
       */
      current_pv9: {
        address: 0x059d,
        post: centesimalDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      power_pv9: {
        address: 0x059e,
        post: centesimalDivider
      },
      /**
       * Unit: V
       * Accuracy: 0,1
       */
      voltage_pv10: {
        address: 0x059f,
        post: decimalDivider
      },
      /**
       * Unit: A
       * Accuracy: 0,01
       */
      current_pv10: {
        address: 0x05a0,
        post: centesimalDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      power_pv10: {
        address: 0x05a1,
        post: centesimalDivider
      },
      /**
       * Unit: V
       * Accuracy: 0,1
       */
      voltage_pv11: {
        address: 0x05a2,
        post: decimalDivider
      },
      /**
       * Unit: A
       * Accuracy: 0,01
       */
      current_pv11: {
        address: 0x05a3,
        post: centesimalDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      power_pv11: {
        address: 0x05a4,
        post: centesimalDivider
      },
      /**
       * Unit: V
       * Accuracy: 0,1
       */
      voltage_pv12: {
        address: 0x05a5,
        post: decimalDivider
      },
      /**
       * Unit: A
       * Accuracy: 0,01
       */
      current_pv12: {
        address: 0x05a6,
        post: centesimalDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      power_pv12: {
        address: 0x05a7,
        post: centesimalDivider
      },
      /**
       * Unit: V
       * Accuracy: 0,1
       */
      voltage_pv13: {
        address: 0x05a8,
        post: decimalDivider
      },
      /**
       * Unit: A
       * Accuracy: 0,01
       */
      current_pv13: {
        address: 0x05a9,
        post: centesimalDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      power_pv13: {
        address: 0x05aa,
        post: centesimalDivider
      },
      /**
       * Unit: V
       * Accuracy: 0,1
       */
      voltage_pv14: {
        address: 0x05ab,
        post: decimalDivider
      },
      /**
       * Unit: A
       * Accuracy: 0,01
       */
      current_pv14: {
        address: 0x05ac,
        post: centesimalDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      power_pv14: {
        address: 0x05ad,
        post: centesimalDivider
      },
      /**
       * Unit: V
       * Accuracy: 0,1
       */
      voltage_pv15: {
        address: 0x05ae,
        post: decimalDivider
      },
      /**
       * Unit: A
       * Accuracy: 0,01
       */
      current_pv15: {
        address: 0x05af,
        post: centesimalDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      power_pv15: {
        address: 0x05b0,
        post: centesimalDivider
      },
      /**
       * Unit: V
       * Accuracy: 0,1
       */
      voltage_pv16: {
        address: 0x05b1,
        post: decimalDivider
      },
      /**
       * Unit: A
       * Accuracy: 0,01
       */
      current_pv16: {
        address: 0x05b2,
        post: centesimalDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      power_pv16: {
        address: 0x05b3,
        post: centesimalDivider
      },
      // 0x05b5 -> 05f3 - skipped

      //  Title: battery input
      /**
       * Unit: V
       * Accuracy: 0,1
       */
      voltage_bat1: {
        address: 0x0604,
        post: decimalDivider
      },
      /**
       * Unit: A
       * Accuracy: 0,01
       */
      current_bat1: {
        address: 0x0605,
        post: centesimalSignDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      power_bat1: {
        address: 0x0606,
        post: centesimalSignDivider
      },
      /**
      * Unit: C
      * Accuracy: 1
      */
      temperature_env_bat1: {
        address: 0x0607,
        post: ca2Convertion
      },
      /**
       * Unit: %
       * Accuracy: 1
       */
      soc_bat1: {
        address: 0x0608
      },
      /**
       * Unit: %
       * Accuracy: 1
       */
      soh_bat1: {
        address: 0x0609
      },
      /**
       * Unit: cycle
       * Accuracy: 1
       */
      chargecycle_bat1: {
        address: 0x060a
      },
      /**
       * Unit: V
       * Accuracy: 0,1
       */
      voltage_bat2: {
        address: 0x060b,
        post: decimalDivider
      },
      /**
       * Unit: A
       * Accuracy: 0,01
       */
      current_bat2: {
        address: 0x060c,
        post: centesimalSignDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      power_bat2: {
        address: 0x060d,
        post: centesimalSignDivider
      },
      /**
      * Unit: C
      * Accuracy: 1
      */
      temperature_env_bat2: {
        address: 0x060e,
        post: ca2Convertion
      },
      /**
       * Unit: %
       * Accuracy: 1
       */
      soc_bat2: {
        address: 0x060f
      },
      /**
       * Unit: %
       * Accuracy: 1
       */
      soh_bat2: {
        address: 0x0610
      },
      /**
       * Unit: cycle
       * Accuracy: 1
       */
      chargecycle_bat2: {
        address: 0x0611
      },
      /**
       * Unit: V
       * Accuracy: 0,1
       */
      voltage_bat3: {
        address: 0x0612,
        post: decimalDivider
      },
      /**
       * Unit: A
       * Accuracy: 0,01
       */
      current_bat3: {
        address: 0x0613,
        post: centesimalSignDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      power_bat3: {
        address: 0x0614,
        post: centesimalSignDivider
      },
      /**
      * Unit: C
      * Accuracy: 1
      */
      temperature_env_bat3: {
        address: 0x0615,
        post: ca2Convertion
      },
      /**
       * Unit: %
       * Accuracy: 1
       */
      soc_bat3: {
        address: 0x0616
      },
      /**
       * Unit: %
       * Accuracy: 1
       */
      soh_bat3: {
        address: 0x0617
      },
      /**
       * Unit: cycle
       * Accuracy: 1
       */
      chargecycle_bat3: {
        address: 0x0618
      },
      /**
       * Unit: V
       * Accuracy: 0,1
       */
      voltage_bat4: {
        address: 0x0619,
        post: decimalDivider
      },
      /**
       * Unit: A
       * Accuracy: 0,01
       */
      current_bat4: {
        address: 0x061a,
        post: centesimalSignDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      power_bat4: {
        address: 0x061b,
        post: centesimalSignDivider
      },
      /**
      * Unit: C
      * Accuracy: 1
      */
      temperature_env_bat4: {
        address: 0x061c,
        post: ca2Convertion
      },
      /**
       * Unit: %
       * Accuracy: 1
       */
      soc_bat4: {
        address: 0x061d
      },
      /**
       * Unit: %
       * Accuracy: 1
       */
      soh_bat4: {
        address: 0x061e
      },
      /**
       * Unit: cycle
       * Accuracy: 1
       */
      chargecycle_bat4: {
        address: 0x061f
      },
      /**
       * Unit: V
       * Accuracy: 0,1
       */
      voltage_bat5: {
        address: 0x0620,
        post: decimalDivider
      },
      /**
       * Unit: A
       * Accuracy: 0,01
       */
      current_bat5: {
        address: 0x0621,
        post: centesimalSignDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      power_bat5: {
        address: 0x0622,
        post: centesimalSignDivider
      },
      /**
      * Unit: C
      * Accuracy: 1
      */
      temperature_env_bat5: {
        address: 0x0623,
        post: ca2Convertion
      },
      /**
       * Unit: %
       * Accuracy: 1
       */
      soc_bat5: {
        address: 0x0624
      },
      /**
       * Unit: %
       * Accuracy: 1
       */
      soh_bat5: {
        address: 0x0625
      },
      /**
       * Unit: cycle
       * Accuracy: 1
       */
      chargecycle_bat5: {
        address: 0x0626
      },
      /**
       * Unit: V
       * Accuracy: 0,1
       */
      voltage_bat6: {
        address: 0x0627,
        post: decimalDivider
      },
      /**
       * Unit: A
       * Accuracy: 0,01
       */
      current_bat6: {
        address: 0x0628,
        post: centesimalSignDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      power_bat6: {
        address: 0x0629,
        post: centesimalSignDivider
      },
      /**
      * Unit: C
      * Accuracy: 1
      */
      temperature_env_bat6: {
        address: 0x062a,
        post: ca2Convertion
      },
      /**
       * Unit: %
       * Accuracy: 1
       */
      soc_bat6: {
        address: 0x062b
      },
      /**
       * Unit: %
       * Accuracy: 1
       */
      soh_bat6: {
        address: 0x062c
      },
      /**
       * Unit: cycle
       * Accuracy: 1
       */
      chargecycle_bat6: {
        address: 0x062d
      },
      /**
       * Unit: V
       * Accuracy: 0,1
       */
      voltage_bat7: {
        address: 0x062e,
        post: decimalDivider
      },
      /**
       * Unit: A
       * Accuracy: 0,01
       */
      current_bat7: {
        address: 0x062f,
        post: centesimalSignDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      power_bat7: {
        address: 0x0630,
        post: centesimalSignDivider
      },
      /**
      * Unit: C
      * Accuracy: 1
      */
      temperature_env_bat7: {
        address: 0x0631,
        post: ca2Convertion
      },
      /**
       * Unit: %
       * Accuracy: 1
       */
      soc_bat7: {
        address: 0x0632
      },
      /**
       * Unit: %
       * Accuracy: 1
       */
      soh_bat7: {
        address: 0x0633
      },
      /**
       * Unit: cycle
       * Accuracy: 1
       */
      chargecycle_bat7: {
        address: 0x0634
      },
      /**
       * Unit: V
       * Accuracy: 0,1
       */
      voltage_bat8: {
        address: 0x0635,
        post: decimalDivider
      },
      /**
       * Unit: A
       * Accuracy: 0,01
       */
      current_bat8: {
        address: 0x0636,
        post: centesimalSignDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      power_bat8: {
        address: 0x0637,
        post: centesimalSignDivider
      },
      /**
      * Unit: C
      * Accuracy: 1
      */
      temperature_env_bat8: {
        address: 0x0638,
        post: ca2Convertion
      },
      /**
       * Unit: %
       * Accuracy: 1
       */
      soc_bat8: {
        address: 0x0639
      },
      /**
       * Unit: %
       * Accuracy: 1
       */
      soh_bat8: {
        address: 0x063a
      },
      /**
       * Unit: cycle
       * Accuracy: 1
       */
      chargecycle_bat8: {
        address: 0x063b
      },
      /**
       * Unit: V
       * Accuracy: 0,1
       */
      voltage_bat9: {
        address: 0x0644,
        post: decimalDivider
      },
      /**
       * Unit: A
       * Accuracy: 0,01
       */
      current_bat9: {
        address: 0x0645,
        post: centesimalSignDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      power_bat9: {
        address: 0x0646,
        post: centesimalSignDivider
      },
      /**
      * Unit: C
      * Accuracy: 1
      */
      temperature_env_bat9: {
        address: 0x0647,
        post: ca2Convertion
      },
      /**
       * Unit: %
       * Accuracy: 1
       */
      soc_bat9: {
        address: 0x0648
      },
      /**
       * Unit: %
       * Accuracy: 1
       */
      soh_bat9: {
        address: 0x0649
      },
      /**
       * Unit: cycle
       * Accuracy: 1
       */
      chargecycle_bat9: {
        address: 0x064a
      },
      /**
       * Unit: V
       * Accuracy: 0,1
       */
      voltage_bat10: {
        address: 0x064b,
        post: decimalDivider
      },
      /**
       * Unit: A
       * Accuracy: 0,01
       */
      current_bat10: {
        address: 0x064c,
        post: centesimalSignDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      power_bat10: {
        address: 0x064d,
        post: centesimalSignDivider
      },
      /**
      * Unit: C
      * Accuracy: 1
      */
      temperature_env_bat10: {
        address: 0x064e,
        post: ca2Convertion
      },
      /**
       * Unit: %
       * Accuracy: 1
       */
      soc_bat10: {
        address: 0x064f
      },
      /**
       * Unit: %
       * Accuracy: 1
       */
      soh_bat10: {
        address: 0x0650
      },
      /**
       * Unit: cycle
       * Accuracy: 1
       */
      chargecycle_bat10: {
        address: 0x0651
      },
      /**
       * Unit: V
       * Accuracy: 0,1
       */
      voltage_bat11: {
        address: 0x0652,
        post: decimalDivider
      },
      /**
       * Unit: A
       * Accuracy: 0,01
       */
      current_bat11: {
        address: 0x0653,
        post: centesimalSignDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      power_bat11: {
        address: 0x0654,
        post: centesimalSignDivider
      },
      /**
      * Unit: C
      * Accuracy: 1
      */
      temperature_env_bat11: {
        address: 0x0655,
        post: ca2Convertion
      },
      /**
       * Unit: %
       * Accuracy: 1
       */
      soc_bat11: {
        address: 0x0656
      },
      /**
       * Unit: %
       * Accuracy: 1
       */
      soh_bat11: {
        address: 0x0657
      },
      /**
       * Unit: cycle
       * Accuracy: 1
       */
      chargecycle_bat11: {
        address: 0x0658
      },
      /**
       * Unit: V
       * Accuracy: 0,1
       */
      voltage_bat12: {
        address: 0x0659,
        post: decimalDivider
      },
      /**
       * Unit: A
       * Accuracy: 0,01
       */
      current_bat12: {
        address: 0x065a,
        post: centesimalSignDivider
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      power_bat12: {
        address: 0x065b,
        post: centesimalSignDivider
      },
      /**
      * Unit: C
      * Accuracy: 1
      */
      temperature_env_bat12: {
        address: 0x065c,
        post: ca2Convertion
      },
      /**
       * Unit: %
       * Accuracy: 1
       */
      soc_bat12: {
        address: 0x065d
      },
      /**
       * Unit: %
       * Accuracy: 1
       */
      soh_bat12: {
        address: 0x065e
      },
      /**
       * Unit: cycle
       * Accuracy: 1
       */
      chargecycle_bat12: {
        address: 0x065f
      },
      // energy statistics
      // 0x680 -> 0x683: skipped
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      pv_generation_total: {
        address: 0x0684,
        count: 2,
      },
      /**
       * Unit: kW
       * Accuracy: 0,1
       */
      pv_generation_total: {
        address: 0x0686,
        count: 2,
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      load_consumption_today: {
        address: 0x0688,
        count: 2,
      },
      /**
       * Unit: kW
       * Accuracy: 0,1
       */
      load_consumption_total: {
        address: 0x068a,
        count: 2,
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      energy_purchase_today: {
        address: 0x068c,
        count: 2,
      },
      /**
       * Unit: kW
       * Accuracy: 0,1
       */
      energy_purchase_total: {
        address: 0x068e,
        count: 2,
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      energy_selling_today: {
        address: 0x0690,
        count: 2,
      },
      /**
       * Unit: kW
       * Accuracy: 0,1
       */
      energy_selling_total: {
        address: 0x0692,
        count: 2,
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      bat_charge_today: {
        address: 0x0694,
        count: 2,
      },
      /**
       * Unit: kW
       * Accuracy: 0,1
       */
      bat_charge_total: {
        address: 0x0696,
        count: 2,
      },
      /**
       * Unit: kW
       * Accuracy: 0,01
       */
      bat_discharge_today: {
        address: 0x0698,
        count: 2,
      },
      /**
       * Unit: kW
       * Accuracy: 0,1
       */
      bat_discharge_total: {
        address: 0x069a,
        count: 2,
      },
      // 0x069c -> 0x06bf: skipped
    }
  },
  toModbus: {},
};
