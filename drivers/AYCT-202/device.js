'use strict';

const DeviceKlikAanKlikUitNewDimableTransmitter = require('../../lib/DeviceKlikAanKlikUitNewDimableTransmitter');

module.exports = class extends DeviceKlikAanKlikUitNewDimableTransmitter {

  async onCommandFirst({
    state, group, channel, unit,
  }) {
    if (typeof state === 'boolean') {
      await this.homey.flow
        .getDeviceTriggerCard('AYCT-202:received')
        .trigger(this, {}, {
          state, group, channel, unit,
        });
    } else if (typeof state === 'number') {
      await this.homey.flow
        .getDeviceTriggerCard('AYCT-202:dim')
        .trigger(this, {
          value: state,
        });
    }
  }

};
