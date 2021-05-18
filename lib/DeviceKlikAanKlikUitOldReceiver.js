'use strict';

const DeviceKlikAanKlikUitOld = require('./DeviceKlikAanKlikUitOld');

module.exports = class extends DeviceKlikAanKlikUitOld {

  static CAPABILITIES = {
    onoff: ({ value, data }) => ({
      ...data,
      state: !!value,
    }),
  };

  async onAdded() {
    if (this.hasCapability('onoff')) {
      await this.setCapabilityValue('onoff', false);
    }
  }

};
