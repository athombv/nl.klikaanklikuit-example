'use strict';

const DriverKlikAanKlikUitNewTransmitter = require('../../lib/DriverKlikAanKlikUitNewTransmitter');

module.exports = class extends DriverKlikAanKlikUitNewTransmitter {

  async onRFInit() {
    await super.onRFInit();

    this.homey.flow
      .getDeviceTriggerCard('APA3-1500R:received')
      .registerRunListener(async (args, state) => {
        if (state.group) {
          return (args.state === '1') === state.state
            && args.unit === 'g';
        }
        return (args.state === '1') === state.state
            && args.unit === state.unit;
      });
  }

};
