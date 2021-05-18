'use strict';

const DeviceKlikAanKlikUitNewTransmitter = require('../../lib/DeviceKlikAanKlikUitNewTransmitter');

module.exports = class extends DeviceKlikAanKlikUitNewTransmitter {

  async onCommandFirst({ state, unit }) {
    if (unit === '00') unit = '10';
    if (unit === '01') unit = '11';

    const rotated = this.getSetting('rotated');
    if (rotated === '180') {
      state = !state;

      if (unit === '10') {
        unit = '11';
      } else if (unit === '11') {
        unit = '10';
      }
    }

    await this.homey.flow
      .getDeviceTriggerCard('AWST-8802:received')
      .trigger(this, {}, { state, unit });
  }

};
