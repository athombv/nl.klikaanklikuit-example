'use strict';

const DriverKlikAanKlikUitNewTransmitter = require('../../lib/DriverKlikAanKlikUitNewTransmitter');

module.exports = class extends DriverKlikAanKlikUitNewTransmitter {

  async onRFInit() {
    await super.onRFInit();

    this.homey.flow
      .getDeviceTriggerCard('ATMT-502:received')
      .registerRunListener(async (args, state) => {
        return args.unitchannel === (state.unit.concat(state.channel))
            && (args.state === '1') === state.state;
      });
  }

};
