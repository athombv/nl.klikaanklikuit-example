'use strict';

const DriverKlikAanKlikUitOldTransmitter = require('../../lib/DriverKlikAanKlikUitOldTransmitter');

module.exports = class extends DriverKlikAanKlikUitOldTransmitter {

  async onRFInit() {
    await super.onRFInit();

    this.homey.flow
      .getDeviceTriggerCard('TMT-502:received')
      .registerRunListener(async (args, state) => {
        return args.unitchannel === (state.unit.concat(state.channel))
            && (args.state === '1') === state.state;
      });
  }

};
