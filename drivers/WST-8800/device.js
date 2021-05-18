'use strict';

const DeviceKlikAanKlikUitOldTransmitter = require('../../lib/DeviceKlikAanKlikUitOldTransmitter');

module.exports = class extends DeviceKlikAanKlikUitOldTransmitter {

  async onCommandFirst({ state }) {
    const rotated = this.getSetting('rotated');
    if (rotated === '180') {
      state = !state;
    }

    await this.homey.flow
      .getDeviceTriggerCard('WST-8800:received')
      .trigger(this, {}, { state });
  }

};
