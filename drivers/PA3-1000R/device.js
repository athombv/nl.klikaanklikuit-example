'use strict';

const DeviceKlikAanKlikUitOldTransmitter = require('../../lib/DeviceKlikAanKlikUitOldTransmitter');

module.exports = class extends DeviceKlikAanKlikUitOldTransmitter {

  async onCommandFirst(command) {
    await this.homey.flow
      .getDeviceTriggerCard('PA3-1000R:received')
      .trigger(this, {}, command);
  }

};
