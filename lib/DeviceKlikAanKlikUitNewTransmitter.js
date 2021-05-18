'use strict';

const DeviceKlikAanKlikUitNew = require('./DeviceKlikAanKlikUitNew');

module.exports = class extends DeviceKlikAanKlikUitNew {

  static RX_ENABLED = true;

  async onCommandMatch(command) {
    const { address } = await this.getData();
    return address === command.address;
  }

};
