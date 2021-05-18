'use strict';

const DeviceKlikAanKlikUitNew = require('./DeviceKlikAanKlikUitNew');

module.exports = class extends DeviceKlikAanKlikUitNew {

  static CAPABILITIES = {
    onoff: ({ value, data }) => ({
      ...data,
      state: !!value,
      group: false,
    }),
  };

  async onAdded() {
    if (this.hasCapability('onoff')) {
      await this.setCapabilityValue('onoff', false);
    }
  }

  async txOn() {
    await this.driver.tx({
      ...this.getData(),
      group: false,
      state: true,
    });
  }

  async txOff() {
    await this.driver.tx({
      ...this.getData(),
      group: false,
      state: false,
    });
  }

};
