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
      frequency_grid: {
        address: 0x0484,
        post: centesimalDivider
      },
      activepower_output_total: {
        address: 0x0485,
        post: centesimalSignDivider
      },
      reactivepower_output_total: {
        address: 0x0486,
        post: centesimalSignDivider
      },
      apparentpower_output_total: {
        address: 0x0487,
        post: centesimalSignDivider
      },
      activepower_pcc_total: {
        address: 0x0488,
        post: centesimalSignDivider
      },
      reactivepower_pcc_total: {
        address: 0x0489,
        post: centesimalSignDivider
      },
      apparentpower_pcc_total: {
        address: 0x048a,
        post: centesimalSignDivider
      },
      voltage_phase_r: {
        address: 0x048d,
        post: decimalDivider
      },
      current_output_r: {
        address: 0x048e,
        post: centesimalDivider
      },
      activepower_output_r: {
        address: 0x048f,
        post: centesimalSignDivider
      },
      reactivepower_output_r: {
        address: 0x0490,
        post: centesimalSignDivider
      },
      powerfactor_output_r: {
        address: 0x0491,
        post: millesimalSignDivider
      },
      current_pcc_r: {
        address: 0x0492,
        post: centesimalDivider
      },
      activepower_pcc_r: {
        address: 0x0493,
        post: centesimalSignDivider
      },
      reactivepower_pcc_r: {
        address: 0x0494,
        post: centesimalSignDivider
      },
      powerfactor_pcc_r: {
        address: 0x0495,
        post: millesimalSignDivider
      },
      voltage_phase_s: {
        address: 0x0498,
        post: decimalDivider
      },
      current_output_s: {
        address: 0x0499,
        post: centesimalDivider
      },
      activepower_output_s: {
        address: 0x049a,
        post: centesimalSignDivider
      },
      reactivepower_output_s: {
        address: 0x049b,
        post: centesimalSignDivider
      },
      powerfactor_output_s: {
        address: 0x049c,
        post: millesimalSignDivider
      },
      current_pcc_s: {
        address: 0x049d,
        post: centesimalDivider
      },
      activepower_pcc_s: {
        address: 0x049e,
        post: centesimalSignDivider
      },
      reactivepower_pcc_s: {
        address: 0x049f,
        post: centesimalSignDivider
      },
      powerfactor_pcc_s: {
        address: 0x04a0,
        post: millesimalSignDivider
      },
      voltage_phase_t: {
        address: 0x04a3,
        post: decimalDivider
      },
      current_output_t: {
        address: 0x04a4,
        post: centesimalDivider
      },
      activepower_output_t: {
        address: 0x04a5,
        post: centesimalSignDivider
      },
      reactivepower_output_t: {
        address: 0x04a6,
        post: centesimalSignDivider
      },
      powerfactor_output_t: {
        address: 0x04a7,
        post: millesimalSignDivider
      },
      current_pcc_t: {
        address: 0x04a8,
        post: centesimalDivider
      },
      activepower_pcc_t: {
        address: 0x04a9,
        post: centesimalSignDivider
      },
      reactivepower_pcc_t: {
        address: 0x04aa,
        post: centesimalSignDivider
      },
      powerfactor_pcc_t: {
        address: 0x04ab,
        post: millesimalSignDivider
      },
      activepower_pv_ext: {
        address: 0x04ae,
        post: centesimalDivider
      },
      activepower_load_sys: {
        address: 0x04af,
        post: centesimalDivider
      },
      activepower_load_total: {
        address: 0x0504,
        post: centesimalSignDivider
      },
      reactivepower_load_total: {
        address: 0x0505,
        post: centesimalSignDivider
      },
      apparentpower_load_total: {
        address: 0x0506,
        post: centesimalSignDivider
      },
      frequency_output: {
        address: 0x0507,
        post: centesimalDivider
      },
      voltage_output_r: {
        address: 0x050a,
        post: decimalDivider
      },
      current_load_r: {
        address: 0x050b,
        post: centesimalSignDivider
      },
      activepower_load_r: {
        address: 0x050c,
        post: centesimalSignDivider
      },
      reactivepower_load_r: {
        address: 0x050d,
        post: centesimalSignDivider
      },
      apparentpower_load_r: {
        address: 0x050e,
        post: centesimalSignDivider
      },
      loadpeakratio_r: {
        address: 0x050f,
        post: centesimalDivider
      },
      voltage_output_s: {
        address: 0x0512,
        post: decimalDivider
      },
      current_load_s: {
        address: 0x0513,
        post: centesimalSignDivider
      },
      activepower_load_s: {
        address: 0x0514,
        post: centesimalSignDivider
      },
      reactivepower_load_s: {
        address: 0x0515,
        post: centesimalSignDivider
      },
      apparentpower_load_s: {
        address: 0x0516,
        post: centesimalSignDivider
      },
      loadpeakratio_s: {
        address: 0x0517,
        post: centesimalDivider
      },
      voltage_output_t: {
        address: 0x051a,
        post: decimalDivider
      },
      current_load_t: {
        address: 0x051b,
        post: centesimalSignDivider
      },
      activepower_load_t: {
        address: 0x051c,
        post: centesimalSignDivider
      },
      reactivepower_load_t: {
        address: 0x051d,
        post: centesimalSignDivider
      },
      apparentpower_load_t: {
        address: 0x051e,
        post: centesimalSignDivider
      },
      loadpeakratio_t: {
        address: 0x051f,
        post: centesimalDivider
      },
      voltage_pv1: {
        address: 0x0584,
        post: decimalDivider
      },
      current_pv1: {
        address: 0x0585,
        post: centesimalDivider
      },
      power_pv1: {
        address: 0x0586,
        post: centesimalDivider
      },
      voltage_pv2: {
        address: 0x0587,
        post: decimalDivider
      },
      current_pv2: {
        address: 0x0588,
        post: centesimalDivider
      },
      power_pv2: {
        address: 0x0589,
        post: centesimalDivider
      },
      voltage_pv3: {
        address: 0x058a,
        post: decimalDivider
      },
      current_pv3: {
        address: 0x058b,
        post: centesimalDivider
      },
      power_pv3: {
        address: 0x058c,
        post: centesimalDivider
      },
      voltage_pv4: {
        address: 0x058d,
        post: decimalDivider
      },
      current_pv4: {
        address: 0x058e,
        post: centesimalDivider
      },
      power_pv4: {
        address: 0x058f,
        post: centesimalDivider
      },
      voltage_pv5: {
        address: 0x0590,
        post: decimalDivider
      },
      current_pv5: {
        address: 0x0591,
        post: centesimalDivider
      },
      power_pv5: {
        address: 0x0592,
        post: centesimalDivider
      },
      voltage_pv6: {
        address: 0x0593,
        post: decimalDivider
      },
      current_pv6: {
        address: 0x0594,
        post: centesimalDivider
      },
      power_pv6: {
        address: 0x0595,
        post: centesimalDivider
      },
      voltage_pv7: {
        address: 0x0596,
        post: decimalDivider
      },
      current_pv7: {
        address: 0x0597,
        post: centesimalDivider
      },
      power_pv7: {
        address: 0x0598,
        post: centesimalDivider
      },
      voltage_pv8: {
        address: 0x0599,
        post: decimalDivider
      },
      current_pv8: {
        address: 0x059a,
        post: centesimalDivider
      },
      power_pv8: {
        address: 0x059b,
        post: centesimalDivider
      },
      voltage_pv9: {
        address: 0x059c,
        post: decimalDivider
      },
      current_pv9: {
        address: 0x059d,
        post: centesimalDivider
      },
      power_pv9: {
        address: 0x059e,
        post: centesimalDivider
      },
      voltage_pv10: {
        address: 0x059f,
        post: decimalDivider
      },
      current_pv10: {
        address: 0x05a0,
        post: centesimalDivider
      },
      power_pv10: {
        address: 0x05a1,
        post: centesimalDivider
      },
      voltage_pv11: {
        address: 0x05a2,
        post: decimalDivider
      },
      current_pv11: {
        address: 0x05a3,
        post: centesimalDivider
      },
      power_pv11: {
        address: 0x05a4,
        post: centesimalDivider
      },
      voltage_pv12: {
        address: 0x05a5,
        post: decimalDivider
      },
      current_pv12: {
        address: 0x05a6,
        post: centesimalDivider
      },
      power_pv12: {
        address: 0x05a7,
        post: centesimalDivider
      },
      voltage_pv13: {
        address: 0x05a8,
        post: decimalDivider
      },
      current_pv13: {
        address: 0x05a9,
        post: centesimalDivider
      },
      power_pv13: {
        address: 0x05aa,
        post: centesimalDivider
      },
      voltage_pv14: {
        address: 0x05ab,
        post: decimalDivider
      },
      current_pv14: {
        address: 0x05ac,
        post: centesimalDivider
      },
      power_pv14: {
        address: 0x05ad,
        post: centesimalDivider
      },
      voltage_pv15: {
        address: 0x05ae,
        post: decimalDivider
      },
      current_pv15: {
        address: 0x05af,
        post: centesimalDivider
      },
      power_pv15: {
        address: 0x05b0,
        post: centesimalDivider
      },
      voltage_pv16: {
        address: 0x05b1,
        post: decimalDivider
      },
      current_pv16: {
        address: 0x05b2,
        post: centesimalDivider
      },
      power_pv16: {
        address: 0x05b3,
        post: centesimalDivider
      },
      voltage_bat1: {
        address: 0x0604,
        post: decimalDivider
      },
      current_bat1: {
        address: 0x0605,
        post: centesimalSignDivider
      },
      power_bat1: {
        address: 0x0606,
        post: centesimalSignDivider
      },
      temperature_env_bat1: {
        address: 0x0607,
        post: ca2Convertion
      },
      soc_bat1: {
        address: 0x0608
      },
      soh_bat1: {
        address: 0x0609
      },
      chargecycle_bat1: {
        address: 0x060a
      },
      voltage_bat2: {
        address: 0x060b,
        post: decimalDivider
      },
      current_bat2: {
        address: 0x060c,
        post: centesimalSignDivider
      },
      power_bat2: {
        address: 0x060d,
        post: centesimalSignDivider
      },
      temperature_env_bat2: {
        address: 0x060e,
        post: ca2Convertion
      },
      soc_bat2: {
        address: 0x060f
      },
      soh_bat2: {
        address: 0x0610
      },
      chargecycle_bat2: {
        address: 0x0611
      },
      voltage_bat3: {
        address: 0x0612,
        post: decimalDivider
      },
      current_bat3: {
        address: 0x0613,
        post: centesimalSignDivider
      },
      power_bat3: {
        address: 0x0614,
        post: centesimalSignDivider
      },
      temperature_env_bat3: {
        address: 0x0615,
        post: ca2Convertion
      },
      soc_bat3: {
        address: 0x0616
      },
      soh_bat3: {
        address: 0x0617
      },
      chargecycle_bat3: {
        address: 0x0618
      },
      voltage_bat4: {
        address: 0x0619,
        post: decimalDivider
      },
      current_bat4: {
        address: 0x061a,
        post: centesimalSignDivider
      },
      power_bat4: {
        address: 0x061b,
        post: centesimalSignDivider
      },
      temperature_env_bat4: {
        address: 0x061c,
        post: ca2Convertion
      },
      soc_bat4: {
        address: 0x061d
      },
      soh_bat4: {
        address: 0x061e
      },
      chargecycle_bat4: {
        address: 0x061f
      },
      voltage_bat5: {
        address: 0x0620,
        post: decimalDivider
      },
      current_bat5: {
        address: 0x0621,
        post: centesimalSignDivider
      },
      power_bat5: {
        address: 0x0622,
        post: centesimalSignDivider
      },
      temperature_env_bat5: {
        address: 0x0623,
        post: ca2Convertion
      },
      soc_bat5: {
        address: 0x0624
      },
      soh_bat5: {
        address: 0x0625
      },
      chargecycle_bat5: {
        address: 0x0626
      },
      voltage_bat6: {
        address: 0x0627,
        post: decimalDivider
      },
      current_bat6: {
        address: 0x0628,
        post: centesimalSignDivider
      },
      power_bat6: {
        address: 0x0629,
        post: centesimalSignDivider
      },
      temperature_env_bat6: {
        address: 0x062a,
        post: ca2Convertion
      },
      soc_bat6: {
        address: 0x062b
      },
      soh_bat6: {
        address: 0x062c
      },
      chargecycle_bat6: {
        address: 0x062d
      },
      voltage_bat7: {
        address: 0x062e,
        post: decimalDivider
      },
      current_bat7: {
        address: 0x062f,
        post: centesimalSignDivider
      },
      power_bat7: {
        address: 0x0630,
        post: centesimalSignDivider
      },
      temperature_env_bat7: {
        address: 0x0631,
        post: ca2Convertion
      },
      soc_bat7: {
        address: 0x0632
      },
      soh_bat7: {
        address: 0x0633
      },
      chargecycle_bat7: {
        address: 0x0634
      },
      voltage_bat8: {
        address: 0x0635,
        post: decimalDivider
      },
      current_bat8: {
        address: 0x0636,
        post: centesimalSignDivider
      },
      power_bat8: {
        address: 0x0637,
        post: centesimalSignDivider
      },
      temperature_env_bat8: {
        address: 0x0638,
        post: ca2Convertion
      },
      soc_bat8: {
        address: 0x0639
      },
      soh_bat8: {
        address: 0x063a
      },
      chargecycle_bat8: {
        address: 0x063b
      },
      voltage_bat9: {
        address: 0x0644,
        post: decimalDivider
      },
      current_bat9: {
        address: 0x0645,
        post: centesimalSignDivider
      },
      power_bat9: {
        address: 0x0646,
        post: centesimalSignDivider
      },
      temperature_env_bat9: {
        address: 0x0647,
        post: ca2Convertion
      },
      soc_bat9: {
        address: 0x0648
      },
      soh_bat9: {
        address: 0x0649
      },
      chargecycle_bat9: {
        address: 0x064a
      },
      voltage_bat10: {
        address: 0x064b,
        post: decimalDivider
      },
      current_bat10: {
        address: 0x064c,
        post: centesimalSignDivider
      },
      power_bat10: {
        address: 0x064d,
        post: centesimalSignDivider
      },
      temperature_env_bat10: {
        address: 0x064e,
        post: ca2Convertion
      },
      soc_bat10: {
        address: 0x064f
      },
      soh_bat10: {
        address: 0x0650
      },
      chargecycle_bat10: {
        address: 0x0651
      },
      voltage_bat11: {
        address: 0x0652,
        post: decimalDivider
      },
      current_bat11: {
        address: 0x0653,
        post: centesimalSignDivider
      },
      power_bat11: {
        address: 0x0654,
        post: centesimalSignDivider
      },
      temperature_env_bat11: {
        address: 0x0655,
        post: ca2Convertion
      },
      soc_bat11: {
        address: 0x0656
      },
      soh_bat11: {
        address: 0x0657
      },
      chargecycle_bat11: {
        address: 0x0658
      },
      voltage_bat12: {
        address: 0x0659,
        post: decimalDivider
      },
      current_bat12: {
        address: 0x065a,
        post: centesimalSignDivider
      },
      power_bat12: {
        address: 0x065b,
        post: centesimalSignDivider
      },
      temperature_env_bat12: {
        address: 0x065c,
        post: ca2Convertion
      },
      soc_bat12: {
        address: 0x065d
      },
      soh_bat12: {
        address: 0x065e
      },
      chargecycle_bat12: {
        address: 0x065f
      }
    }
  },
  toModbus: {},
};
