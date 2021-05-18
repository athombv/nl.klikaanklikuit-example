'use strict';

const DeviceKlikAanKlikUitOldTransmitter = require('../../lib/DeviceKlikAanKlikUitOldTransmitter');

module.exports = class extends DeviceKlikAanKlikUitOldTransmitter {

  async onCommandFirst(command) {
    await this.homey.flow
      .getDeviceTriggerCard('KCT-101:received')
      .trigger(this, {}, command);
  }

};
