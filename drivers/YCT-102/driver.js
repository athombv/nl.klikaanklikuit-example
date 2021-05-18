'use strict';

const DriverKlikAanKlikUitOldTransmitter = require('../../lib/DriverKlikAanKlikUitOldTransmitter');

module.exports = class extends DriverKlikAanKlikUitOldTransmitter {

  async onRFInit() {
    await super.onRFInit();

    this.homey.flow
      .getDeviceTriggerCard('YCT-102:received')
      .registerRunListener(async (args, state) => {
        if (state.group) {
          return args.channel === state.channel
            && (args.state === '1') === state.state
            && args.unit === 'g';
        }
        return args.channel === state.channel
            && (args.state === '1') === state.state
            && args.unit === state.unit;
      });
  }

};
