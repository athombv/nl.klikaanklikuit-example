'use strict';

const DeviceKlikAanKlikUitNewDimableTransmitter = require('../../lib/DeviceKlikAanKlikUitNewDimableTransmitter');

module.exports = class extends DeviceKlikAanKlikUitNewDimableTransmitter {

  async onCommandFirst(command) {
    const { state } = command;
    switch (typeof state) {
      case 'boolean': {
        await this.homey.flow
          .getDeviceTriggerCard(`AWRT-1000:${state ? 'single-tap' : 'double-tap'}`)
          .trigger(this, {}, {});
        break;
      }
      case 'number': {
        await this.homey.flow
          .getDeviceTriggerCard('AWRT-1000:rotate')
          .trigger(this, { value: state }, {});
        break;
      }
      default: {
        this.error('Invalid State Type:', state);
        break;
      }
    }
  }

};
