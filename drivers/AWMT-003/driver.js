'use strict';

const DriverKlikAanKlikUitNewTransmitter = require('../../lib/DriverKlikAanKlikUitNewTransmitter');

module.exports = class extends DriverKlikAanKlikUitNewTransmitter {

  async onRFInit() {
    await super.onRFInit();

    this.homey.flow
      .getDeviceTriggerCard('AWMT-003:received')
      .registerRunListener(async (args, state) => {
        return (args.state === '1') === state.state
            && args.unit === state.unit;
      });
  }

};
