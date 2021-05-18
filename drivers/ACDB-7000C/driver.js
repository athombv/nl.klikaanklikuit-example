'use strict';

const DriverKlikAanKlikUitNewReceiver = require('../../lib/DriverKlikAanKlikUitNewReceiver');

module.exports = class extends DriverKlikAanKlikUitNewReceiver {

  async onRFInit() {
    await super.onRFInit();

    this.homey.flow
      .getActionCard('ACDB-7000C:doorbell')
      .registerRunListener(async ({ device }) => device.txOn());
  }

};
