'use strict';

const DriverKlikAanKlikUitOldTransmitter = require('../../lib/DriverKlikAanKlikUitOldTransmitter');

module.exports = class extends DriverKlikAanKlikUitOldTransmitter {

  async onRFInit() {
    await super.onRFInit();

    this.homey.flow
      .getDeviceTriggerCard('PA3-1000R:received')
      .registerRunListener(async (args, state) => {
        return (args.state === '1') === state.state
            && args.unit === state.unit;
      });
  }

};
