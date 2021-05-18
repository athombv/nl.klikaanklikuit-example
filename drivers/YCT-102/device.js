'use strict';

const DeviceKlikAanKlikUitOldTransmitter = require('../../lib/DeviceKlikAanKlikUitOldTransmitter');

module.exports = class extends DeviceKlikAanKlikUitOldTransmitter {

  async onCommandFirst(command) {
    await this.homey.flow
      .getDeviceTriggerCard('YCT-102:received')
      .trigger(this, {}, command);
  }

};
