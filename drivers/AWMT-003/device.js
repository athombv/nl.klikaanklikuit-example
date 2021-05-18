'use strict';

const DeviceKlikAanKlikUitNewTransmitter = require('../../lib/DeviceKlikAanKlikUitNewTransmitter');

module.exports = class extends DeviceKlikAanKlikUitNewTransmitter {

  async onCommandFirst({ state }) {
    const rotated = this.getSetting('rotated');
    if (rotated === '180') {
      state = !state;
    }

    await this.homey.flow
      .getDeviceTriggerCard('AWMT-003:received')
      .trigger(this, {}, { state });
  }

};
