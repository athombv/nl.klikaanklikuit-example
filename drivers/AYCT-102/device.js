'use strict';

const DeviceKlikAanKlikUitNewTransmitter = require('../../lib/DeviceKlikAanKlikUitNewTransmitter');

module.exports = class extends DeviceKlikAanKlikUitNewTransmitter {

  async onCommandFirst({ state, group, channel, unit }) {
    await this.homey.flow
      .getDeviceTriggerCard('AYCT-102:received')
      .trigger(this, {}, { state, group, channel, unit });
  }

};
