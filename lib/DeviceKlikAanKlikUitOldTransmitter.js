'use strict';

const DeviceKlikAanKlikUitOld = require('./DeviceKlikAanKlikUitOld');

module.exports = class extends DeviceKlikAanKlikUitOld {

  static RX_ENABLED = true;

  async onCommandMatch(command) {
    const { address } = await this.getData();
    return address === command.address;
  }

};
