'use strict';

const DeviceKlikAanKlikUitNewReceiver = require('../../lib/DeviceKlikAanKlikUitNewReceiver');

module.exports = class extends DeviceKlikAanKlikUitNewReceiver {

  static CAPABILITIES = {
    windowcoverings_state: ({ value, data }) => ({
      ...data,
      state: value === 'up',
      group: false,
    }),
  };

  async onAdded() {
    if (this.hasCapability('windowcoverings_state')) {
      await this.setCapabilityValue('windowcoverings_state', 'down');
    }
  }

  async onCapability(capabilityId, value) {
    if (capabilityId === 'windowcoverings_state') {
      const rotated = this.getSetting('rotated');
      if (rotated === '180' && value === 'up') {
        value = 'down';
      } else if (rotated === '180' && value === 'down') {
        value = 'up';
      }
    }


    return super.onCapability(capabilityId, value);
  }

};
